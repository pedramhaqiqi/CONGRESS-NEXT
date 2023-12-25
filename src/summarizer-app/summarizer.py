import requests
import yaml
import json

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

def _fetch_title_and_summaries(transcript):
    prompt = f"""
        Below is a parliament hearing transcript. Analyze it and provide the following:

        1) The topic discussed in the hearing in at most 7 words
        2) A one sentence summary of the hearing
        3) A four sentence summary of the hearing

        Ensure your response is a valid JSON string with keys "topic", "one_sentence_summary", and "four_sentence_summary".
        \"\"\"
        {transcript}
        \"\"\"
    """

    url = "https://api.openai.com/v1/chat/completions"
    data = {
        "model": TEXT_MODEL,
        "response_format": { "type": "json_object" },
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
    url = "https://api.openai.com/v1/images/generations"
    data = {
        "prompt": f"Draw me an image related to the topic of {title}. Do not include any text in your image.",
        "model": IMAGE_MODEL
    }
    response = session.post(url, json=data)
    print("RAW RESPONSE:", response.json())
    return response.json()['data'][0]['url']

if __name__ == "__main__":
    with open("dummy_transcript.txt", 'r', encoding='utf-8') as file:
        transcript_content = file.read()

    # Get the summary for the transcript
    result = _fetch_title_and_summaries(transcript_content)
    print("Topic:", result['topic'])
    print("One sentence summary:", result['one_sentence_summary'])
    print("Four sentence summary:", result['four_sentence_summary'])

    # Generate an image using the title
    topic = "Supplementary Estimates and Housing Finance"
    image_url = fetch_image_from_title(topic)
    print("Image url:", image_url)