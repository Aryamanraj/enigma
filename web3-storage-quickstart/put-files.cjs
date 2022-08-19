const { Web3Storage, getFilesFromPath } =  require('web3.storage')
async function getCID () {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRGRTAzMkJmRTE4RTg0Q2EyMGE3OGI1NUY5ODQzNDZGNzgzRTYzOTQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjAxMjMwODc0MDAsIm5hbWUiOiJ0ZXN0In0.GBpGPvdHcxKme9ke2_KP6Dvt9DWXdrXbIvGGZ8letQo'


  const storage = new Web3Storage({ token })

    const files = await getFilesFromPath('web3-storage-quickstart/tester.txt')

  var cid = await storage.put(files);
  module.exports['cid']=cid; 
}
getCID();
