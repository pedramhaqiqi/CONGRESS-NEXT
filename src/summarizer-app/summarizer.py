import requests
import yaml
import json

with open('auth.yaml', 'r') as file:
    OPENAI_API_KEY = yaml.load(file, Loader=yaml.FullLoader)['openai_api_key']
with open('config.yaml', 'r') as file:
    config = yaml.load(file, Loader=yaml.FullLoader)

MODEL = config['settings']['model']
MAX_TOKENS = config['settings']['max_tokens']
TEMPERATURE = config['settings']['temperature']

session = requests.Session()
session.headers.update({
    "Content-Type": "application/json",
    "Authorization": f"Bearer {OPENAI_API_KEY}"
})

def fetch_title_and_summaries(transcript):
    prompt = f"""
        Below is a parliament hearing transcript. Analyze it and provide the following:

        1) The topic discussed in the hearing
        2) A one sentence summary of the hearing
        3) A four sentence summary of the hearing

        Ensure your response is a valid JSON string with keys "topic", "one_sentence_summary", and "four_sentence_summary".
        \"\"\"
        {transcript}
        \"\"\"
    """

    url = "https://api.openai.com/v1/chat/completions"
    data = {
        "model": MODEL,
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

if __name__ == "__main__":
    with open("dummy_transcript.txt", 'r', encoding='utf-8') as file:
        transcript_content = file.read()

    # Get the summary for the example paragraph
    result = fetch_title_and_summaries(transcript_content)

    # Print the original paragraph and the generated summary
    print("Topic:", result['topic'])
    print("One sentence summary:", result['one_sentence_summary'])
    print("Four sentence summary:", result['four_sentence_summary'])
