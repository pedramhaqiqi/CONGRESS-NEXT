import requests
import yaml
import json
import os
import regex as re
import sys

with open('auth.yaml', 'r') as file:
    OPENAI_API_KEY = yaml.load(file, Loader=yaml.FullLoader)['openai_api_key']
with open('config.yaml', 'r') as file:
    config = yaml.load(file, Loader=yaml.FullLoader)

TEXT_MODEL = config['settings']['text_model']
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

        Ensure your response is a valid JSON string with keys "topic", "one_sentence_summary", "four_sentence_summary", "tags", and "date".
        \"\"\"
        {transcript}
        \"\"\"
    """

    url = "https://api.openai.com/v1/chat/completions"
    data = {
        "model": TEXT_MODEL,
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": prompt
            }
        ]
    }

    response = session.post(url, json=data)
    response_json_text = response.json()['choices'][0]['message']['content']
    return json.loads(response_json_text)

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

if __name__ == "__main__":
    # Checks if the files in articles have been processed before, and only processes the new ones
    pattern = r"/([^/]+)$"
    with open('memory.json', 'r') as file:
        memory = json.load(file)

    for file in yield_files('articles'):
        match = re.search(pattern, file)
        if not match:
            raise Exception("No match found Error")
        last_part = match.group(1)
        if last_part not in [file for file in memory['memory']]:
            with open(file, 'r', encoding='utf-8') as file:        
                result = _fetch_title_and_summaries(file.read())
                image_url = fetch_image_from_title(result['four_sentence_summary'])
                result['image_url'] = image_url
            print(json.dumps(result))
            memory['memory'].append(last_part)
            with open('memory.json', 'w') as file:
                json.dump(memory, file)
            exit(0)
    exit(1)