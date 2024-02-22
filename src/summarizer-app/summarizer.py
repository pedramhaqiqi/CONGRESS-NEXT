import requests
import yaml
import json
import os
import regex as re
import sys
from openai import OpenAI
from datetime import datetime

client = OpenAI()

with open('auth.yaml', 'r') as file:
    OPENAI_API_KEY = yaml.load(file, Loader=yaml.FullLoader)['openai_api_key']
with open('config.yaml', 'r') as file:
    config = yaml.load(file, Loader=yaml.FullLoader)

DEV = config['settings']['dev']
DEV_MODEL = config['settings']['dev_model']
PROD_MODEL = config['settings']['prod_model']
IMAGE_MODEL = config['settings']['image_model']
MAX_TOKENS = config['settings']['max_tokens']
TEMPERATURE = config['settings']['temperature']

session = requests.Session()
session.headers.update({
    "Content-Type": "application/json",
    "Authorization": f"Bearer {OPENAI_API_KEY}"
})

def yield_files(directory):
    """
    Generator function that yields the file paths of all files in a given directory.

    Args:
        directory (str): The directory path.

    Yields:
        str: The file path of each file in the directory.
    """
    for root, dirs, files in os.walk(directory):
        for file in files:
            yield os.path.join(root, file)


def _fetch_title_and_summaries(transcript):
    """
    Fetches the title and summaries of a parliament hearing transcript.

    Args:
        transcript (str): The transcript of the parliament hearing.

    Returns:
        dict: A dictionary containing the topic, one sentence summary, four sentence summary, tags, and date of the hearing.
    """
    prompt = f"""
        Below is a parliament hearing transcript. Analyze it and provide the following:

        1) The topic discussed in the hearing in at most 7 words
        2) A one sentence summary of the hearing
        3) A four sentence summary of the hearing
        4) A list of three one-word tags related to the hearing
        5) The date of the hearing in the same format as seen in the transcript

        Ensure your response is only a valid JSON string with keys "topic", "one_sentence_summary", "four_sentence_summary", "tags", and "date".
        \"\"\"
        {transcript}
        \"\"\"
    """

    response = client.chat.completions.create(
        model= DEV_MODEL if DEV else PROD_MODEL,
        response_format={ "type": "json_object" },
        messages=[
            {"role": "system", "content": "You are a helpful assistant designed to output JSON."},
            {"role": "user", "content": prompt}
        ]
    )

    return json.loads(response.choices[0].message.content)
    
    
def fetch_image_from_title(title):
    """
    Fetches an image related to the given title.

    Args:
        title (str): The title of the hearing.

    Returns:
        str: The URL of the fetched image.
    """
    url = "https://api.openai.com/v1/images/generations"
    data = {
        "prompt": f"Draw me an image related to the topic of {title}. Do not include any text in your image.",
        "model": IMAGE_MODEL
    }
    response = session.post(url, json=data)
    return response.json()['data'][0]['url']


def process_files(directory, memory):
    """
    Processes the files in a given directory. 
    Processed one file at a time.
    appends the file name to memory.json after processing.


    Args:
        directory (str): The directory path.
        memory (dict): The memory dictionary.

    Raises:
        FileNotFoundError: If no match is found for a file path.
    """
    pattern = re.compile(r"/([^/]+)$")
    for file_path in yield_files(directory):
        match = pattern.search(file_path)
        if not match:
            raise FileNotFoundError(f"No match found for {file_path}")
        last_part = match.group(1)
        if last_part not in memory['memory']:
            process_file(file_path, last_part, memory)
            break

def process_file(file_path, last_part, memory):
    """
    Processes a single file.
    Passes the file to _fetch_title_and_summaries and fetch_image_from_title.
    Which get title and summaries from OpenAI and fetches an image from OpenAI.

    Args:
        file_path (str): The file path.
        last_part (str): The last part of the file path.
        memory (dict): The memory dictionary.
    """
    with open(file_path, 'r', encoding='utf-8') as article_file:
        result = _fetch_title_and_summaries(article_file.read())
        image_url = fetch_image_from_title(result['four_sentence_summary'])
    # Script.js reads from stdout
    response = requests.get(image_url)
    if response.status_code == 200:
        #Get Date time for unique image name
        date = datetime.now().strftime("%Y%m%d%H%M%S")
        with open(f"images/{date}.jpg", "wb") as file:
            # Write the content of the response (the image) to the file
            file.write(response.content)
        result['image_name'] = date
    else:
        print("Image downloaded failed.")
        sys.exit(1)
    print(json.dumps(result))
    memory['memory'].append(last_part)
    with open('memory.json', 'w') as memory_file:
        json.dump(memory, memory_file)

if __name__ == "__main__":
    #Create memory.json with intial value of {memory: []} if it does not exist
    if not os.path.exists("memory.json"):
        with open('memory.json', 'w') as memory_file:
            json.dump({'memory': []}, memory_file)

    # Checks if the files in articles have been processed before, and only processes the new ones
    with open('memory.json', 'r', ) as memory_file:
        memory = json.load(memory_file)
        process_files('articles', memory)
