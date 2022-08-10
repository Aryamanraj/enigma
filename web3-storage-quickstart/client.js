// cid=bafybeigajqcv2wd3qj6f3hw7gkzbzchrvg4kqsh3waaxu3rm7wit4hrclu
//import { Web3Storage } from 'web3.storage'
import { makeStorageClient } from './getToken.js'

async function retrieveFiles (cid) {
    const client = makeStorageClient()
    const res = await client.get(cid)
    console.log(`Got a response! [${res.status}] ${res.statusText}`)
    if (!res.ok) {
      throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
    }
  
    // unpack File objects from the response
    const files = await res.files()
    for (const file of files) {
      console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
    }
  }

retrieveFiles('bafybeih5fg5niwzyjqzdqeu35rrha25rdd65iuycpz7eep3ei5cncvk3oy')