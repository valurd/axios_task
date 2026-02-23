const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function getPosts() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );

    const filePath = path.join(__dirname, 'posts.txt');

    fs.writeFileSync(filePath, JSON.stringify(response.data, null, 2), 'utf8');
    console.log('Data to posts.txt successfully written');

    const fileContent = fs.readFileSync(filePath, 'utf8');
    console.log(fileContent);
  } catch (error) {
    console.error('Error while reading file content:', error.message);
  }
}

getPosts();
