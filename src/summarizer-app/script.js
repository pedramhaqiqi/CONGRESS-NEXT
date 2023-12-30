#!/usr/bin/env node
// Replace with your Sanity project ID and API token
const projectId = 'ilvmb5kh';
const apiToken = 'skZtww2zmB7WGs2TNZMxvA88u7pGbtzLtKKXQ9bgZ2AI5HfTe27skVgFMnUaWg75R6aCGavGY7W2t0OiSZkE4Mj8HPCiNmPFzDieD2WEsVY0b0zCKiBVEpdIIjynNaNKua2Ba68Da0CDSxH091HD4VZxaAgFDBiY4mEqNbRATuDkwSBSrBGR';
const datasetName = "production"
const util = require('util');

const timestamp = Date.now();
const uniqueId = `article_${timestamp}`;
const exec = util.promisify(require('child_process').exec);

async function runPythonScript() {
  try {
    const { stdout, stderr } = await exec('python3 summarizer.py');

    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return 1;
    }

    console.log('Received data from Python script:', stdout);
    const jsonObject = JSON.parse(stdout);
    const mutations = [{
      createOrReplace: {
        _id: uniqueId,
        _type: 'article',
        title: `${jsonObject.topic}-${jsonObject.date}`,
        topic:jsonObject.topic,
        // slug:slug,
        image: jsonObject.image_url,
        one_line_summary:jsonObject.one_sentence_summary,
        four_line_summary:jsonObject.four_sentence_summary,
        date: jsonObject.date,
        tags: jsonObject.tags,
      }
    }]
    fetch(`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${datasetName}`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${apiToken}`
    },
    body: JSON.stringify({mutations})
  })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error))
    
    
  } catch (error) {
    return 1

  }
}

runPythonScript()
