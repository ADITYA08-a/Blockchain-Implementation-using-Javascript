const EC = require('elliptic').ec;

const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate();

const myWalletAddress = myKey.getPublic('hex');






const {Blockchain, Transaction} = require('./blockchain')

let savjeeCoin = new Blockchain()

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);


console.log("Mining Block 1..")

savjeeCoin.addBlock(new Block(1, "10/07/2017", { amount: 4}));

console.log("Mining Block 2..")

savjeeCoin.addBlock(new Block(2, "12/07/2017", { amount: 10 }));

console.log('Is blockchain valid? ' + savjeeCoin.isChainValid());

savjeeCoin.chain[1].data = {amount: 100};
savjeeCoin.chain[1].hash = savjeeCoin.chain[1].calculateHash();

console.log(JSON.stringify(savjeeCoin, null, 4));

savjeeCoin.createTransaction(new Transaction('address1', 'address2', 100))
savjeeCoin.minePendingTransactions('PersonA-address')


savjeeCoin.minePendingTransactions(myWalletAddress);


console.log('\n Balance of Person A is', savjeeCoin.getBalanceOfAddress('PersonA-address'))

console.log('\n Starting the miner..')
savjeeCoin.minePendingTransactions('PersonA-address');


savjeeCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid ?', savjeeCoin.isChainValid());