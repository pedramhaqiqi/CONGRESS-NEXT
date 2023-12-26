
// Replace with your Sanity project ID and API token
const projectId = 'ilvmb5kh';
const apiToken = 'skZtww2zmB7WGs2TNZMxvA88u7pGbtzLtKKXQ9bgZ2AI5HfTe27skVgFMnUaWg75R6aCGavGY7W2t0OiSZkE4Mj8HPCiNmPFzDieD2WEsVY0b0zCKiBVEpdIIjynNaNKua2Ba68Da0CDSxH091HD4VZxaAgFDBiY4mEqNbRATuDkwSBSrBGR';
const datasetName = "production"
// Replace with the document ID of the document you want to update
const documentId = 'document-id-to-update';

// Define the updated field content
const updatedFieldContent = 'New content for the field';

// Set up the request headers with your API token
const headers = {
  'Authorization': `Bearer ${apiToken}`,
  'Content-Type': 'application/json',
};
const timestamp = Date.now();
const uniqueId = `article_${timestamp}`;

// Construct the API endpoint URL
const apiUrl = `https://${projectId}.api.sanity.io/v1/data/mutate/${projectId}`;

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word characters
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
const slug = slugify("article-topic");

const mutations = [{
  createOrReplace: {
    _id: uniqueId,
    _type: 'article',
    title: 'Article3',
    topic:"topic",
    slug:slug,
    one_line_summary:"ONE LINE SUM",
    four_line_summary:"FOUR LINE SUM",
    date:"YYYY/MM/DD",
    tags: ["tag1", "tag2", "tag3"],
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
// Define the payload with the update operation

// const payload = 
// {
//   "mutations": [
//     {
//       "patch": {
//         "id": "123",
//         "set": {
//           "name.first": "John"
//         },
//         "inc": {
//           "visitCount": 1
//         },
//         "params": {
//           "id": "123"
//         }
//       }
//     }
//   ]
// }

// // Make the PUT request to update the field
// axios
//   .put(apiUrl, payload, { headers })
//   .then(response => {
//     console.log('Field updated successfully:', response.data);
//   })
//   .catch(error => {
//     console.error('Error updating field:', error);
//   });