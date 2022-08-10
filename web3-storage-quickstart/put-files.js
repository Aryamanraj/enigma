import { Web3Storage, getFilesFromPath } from 'web3.storage'
//require
async function getCID () {
  //const args = minimist(process.argv.slice(2))
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRGRTAzMkJmRTE4RTg0Q2EyMGE3OGI1NUY5ODQzNDZGNzgzRTYzOTQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjAxMjMwODc0MDAsIm5hbWUiOiJ0ZXN0In0.GBpGPvdHcxKme9ke2_KP6Dvt9DWXdrXbIvGGZ8letQo'

  // if (!token) {
  //   return console.error('A token is needed. You can create one on https://web3.storage')
  // }

  // if (args._.length < 1) {
  //   return console.error('Please supply the path to a file or directory')
  // }

  const storage = new Web3Storage({ token })
  //const files = []

  //for (const path of args._) {
    const files = await getFilesFromPath('web3-storage-quickstart/tester.txt')
    //files.push(...pathFiles)
  //}

  //console.log(`Uploading file`)
  const cid = await storage.put(files)
  console.log(cid)
}

export { getCID }
