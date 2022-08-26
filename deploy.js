const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
    'vote art pony convince labor valid cargo share battle sauce device common',
    'https://rinkeby.infura.io/v3/feab18df1beb4b638a02af1017b87417'
);
const web3 = new Web3(provider);
var alpha = require('./web3-storage-quickstart/put-files.cjs');
alpha.cid=[];
function pushing(){
    console.log('Uploading JSON on IPFS');
    if (alpha.cid.length<1) {
        setTimeout(() => {
            pushing();
        }, 5*1000);
    }
    else sendFunc();
}
pushing()
var ethereumAddr = '0xDbf80420Ae83B419E1B2Fc6cAd84A6534129A155';
var nameOfTheMedia = 'RRR';

// const deploy = async () => {
//     const accounts = await web3.eth.getAccounts();
//     console.log('Deploying from account', accounts[0]);
//     const enigmaDep = await new web3.eth.Contract(JSON.parse(interface))
//         .deploy({ data: bytecode })
//         .send({ gas: '1000000', from: accounts[0] });

//     console.log('Contract deployed to', enigmaDep.options.address, 'on ethereum');
//     provider.engine.stop();
//     ethereumAddr=enigmaDep.options.address;
//     //sendFunc();
// };

const sendFunc = async() => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to upload with account ID:', accounts[0], 'on address: ', ethereumAddr);
    const enigmaUpload = await new web3.eth.Contract(JSON.parse(interface), ethereumAddr);
    const sender = await enigmaUpload.methods.giveNameAndCid(nameOfTheMedia, alpha.cid).send({ from: accounts[0] });
    sender;
    console.log('Uploaded on ethereum Address:', enigmaUpload.options.address, '\nYour Character Identifier on IPFS is:', alpha.cid,'\nwith the name: ', nameOfTheMedia);
    provider.engine.stop();
    //readFunc();
}

const readFunc = async() =>{
    const accounts = await web3.eth.getAccounts();

    console.log('Reading data from account ID:', accounts[0], '\ton address', ethereumAddr);
    const enigmaView = await new web3.eth.Contract(JSON.parse(interface), ethereumAddr);
    const reader = await enigmaView.methods.searchCID(nameOfTheMedia).call();
    console.log('Your Character Identifier on IPFS is:', reader);
    provider.engine.stop();
}
//readFunc();
//pushing();