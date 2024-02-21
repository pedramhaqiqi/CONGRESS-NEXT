
const util = require('util');
const sanityClient = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const client = sanityClient.createClient({
  projectId: process.env.SANITY_API_PROJECT_ID, // you can find this in sanity.json or manage.sanity.io
  dataset: process.env.SANITY_API_DATASET, // or whatever your dataset is named
  token: process.env.SANITY_API_WRITE_TOKEN, // you need a token with write access
  apiVersion: '2024-01-01',
  useCdn: false // `false` if you want to ensure fresh data
});

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

    //read image file and convert to base64

    const jsonObject = JSON.parse(stdout);
    const imagePath = path.join('images', `${jsonObject.image_name}.jpg`);
    const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath));
    const mutations = [{
      createOrReplace: {
        _id: uniqueId,
        _type: 'article',
        title: `${jsonObject.topic}-${jsonObject.date}`,
        topic:jsonObject.topic,
        image: {
        _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id, // Reference the uploaded image asset
          }
        },
        one_line_summary:jsonObject.one_sentence_summary,
        four_line_summary:jsonObject.four_sentence_summary,
        date: jsonObject.date,
        tags: jsonObject.tags,
      }
    }]
    fetch(`https://${process.env.SANITY_API_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_API_DATASET}`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_API_WRITE_TOKEN}`
    },
    body: JSON.stringify({mutations})
  })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error))
  } catch (error) {
    console.log(error);
    return 1

  }
}

runPythonScript()
