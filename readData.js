const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface } = require('./compile');
const retrieve = require('./retrieve.cjs');

const provider = new HDWalletProvider(
    'vote art pony convince labor valid cargo share battle sauce device common',
    'https://rinkeby.infura.io/v3/feab18df1beb4b638a02af1017b87417'
);
const web3 = new Web3(provider);

var ethereumAddr = '0xDbf80420Ae83B419E1B2Fc6cAd84A6534129A155';
var nameOfTheMedia = 'Avengers';
var reader = '';
const readFunc = async() =>{
    const accounts = await web3.eth.getAccounts();

    console.log('Reading data from account ID:', accounts[0], '\ton address', ethereumAddr);
    const enigmaView = await new web3.eth.Contract(JSON.parse(interface), ethereumAddr);
    reader = await enigmaView.methods.searchCID(nameOfTheMedia).call();
    console.log('Your Character Identifier on IPFS is:', reader);
    provider.engine.stop();
    retrieve(reader, nameOfTheMedia);
}

readFunc();