// import { Web3Storage } from 'web3.storage'
// import fetch from 'node-fetch';
// import * as fs from 'fs';

const { Web3Storage } = require('web3.storage');
const fetch = require('node-fetch');
const fs = require('fs')


function getAccessToken () {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  // return 'paste-your-token-here'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRGRTAzMkJmRTE4RTg0Q2EyMGE3OGI1NUY5ODQzNDZGNzgzRTYzOTQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjAxMjMwODc0MDAsIm5hbWUiOiJ0ZXN0In0.GBpGPvdHcxKme9ke2_KP6Dvt9DWXdrXbIvGGZ8letQo'
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}

module.exports = async function retrieve (cid, nameOfTheMedia) {
    const client = makeStorageClient()
    const res = await client.get(cid)
    //console.log(`Got a response! [${res.status}] ${res.statusText}`)
    if (!res.ok) {
      throw new Error(`failed to get ${cid}`)
    }
      
    async function getData() {
      let link = 'https://'+cid+'.ipfs.w3s.link/upload1.json';
      const response = await fetch(link);
      const result = await response.json();
      return result;
  }
      let beta = await getData();
      fs.writeFile(`./JSONwaleFiles/${nameOfTheMedia}.json`,JSON.stringify(beta),()=>{console.log('running')});


      // let gamma = JSON.stringify(beta);
      // let delta = JSON.parse(gamma);
      // console.log(typeof(delta));
  }

//module.exports = function retrieve(){};
//retrieve('bafybeicsvhgikgqn53di4tv53ysckvlmxrwq5lm52wyij2kwv75sk237om')


// console.log(fetch('https://bafybeicsvhgikgqn53di4tv53ysckvlmxrwq5lm52wyij2kwv75sk237om.ipfs.w3s.link/upload1.json'))



// import fetch from 'node-fetch';

// async function getUser() {
//     const response = await fetch('https://bafybeicsvhgikgqn53di4tv53ysckvlmxrwq5lm52wyij2kwv75sk237om.ipfs.w3s.link/upload1.json');
//     const result = await response.json();
//     return result;
// }

// console.log(await getUser());
