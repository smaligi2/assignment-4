const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const provider = new HDWalletProvider(
    'REPLACE_WITH_YOUR_MNEMONIC',
    // remember to change this to your own phrase!
    // remember to change this to your own endpoint!
  );
  const web3 = new Web3(provider);
  const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    TicketSale = await new web3.eth.Contract(abi)
      .deploy({ data: bytecode, arguments: ['Hi there!'] })
      .send({ gas: '1000000', from: accounts[0] });
    console.log('Contract deployed to', TicketSale.options.address);
    provider.engine.stop();
  };
  deploy();
  deploy.js
  