// async function hello() {import('./web3-storage-quickstart/testing2.js')
// await console.log(trial())}
import { getCID } from "./web3-storage-quickstart/put-files.js"

const cid = getCID()
console.log(cid)