import https from 'https';
import fs from 'fs';

const options = {
  hostname: 'api.github.com',
  path: '/users/atharvakakde/repos?per_page=100',
  headers: {
    'User-Agent': 'node.js'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    try {
      const repos = JSON.parse(data);
      if (Array.isArray(repos)) {
        fs.writeFileSync('repos.json', JSON.stringify(repos, null, 2));
        console.log(`Successfully written ${repos.length} repositories to repos.json`);
      } else {
        console.error('API response is not an array:', repos.message || repos);
      }
    } catch (e) {
      console.error('Error parsing JSON:', e.message);
    }
  });
}).on('error', (e) => {
  console.error('Request error:', e);
});
