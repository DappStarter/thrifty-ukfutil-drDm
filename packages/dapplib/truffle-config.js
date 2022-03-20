require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note stick holiday install person force genre'; 
let testAccounts = [
"0xb3194a9646b0d1aebbde9105f1a54431f9bf30964bfcf28fc54d13b3bb14a518",
"0x5e28c8b5c8db9752d508a7b99d8b222195c1723a9b022276be3c39b300ab7845",
"0x17080f80c00fd4c08cd131a984efc4c7110d808551e216f4f6d16350744cd4e2",
"0xdaa6b1619cb0ad9ec570b0850363c520aea17fdeb968e6cf3cf9387ccde00c39",
"0xb1525a5e13a825de0511766fcfe594587def607658d9afba39e42a6c87b8cbc7",
"0xb0f4e6c2ab6dd3d1928c93b130f7979c8dc1e1e812c845e25707a4e699575cda",
"0xc5eab5f07150d9cb839c36829f2d26d8deca8656cd1535cf8461cb6834419225",
"0x76409c7ee9f865f30d4d07731222a9a09fcf7407ccbeab0b77b3d2781d3016a8",
"0x95d8913e5c9dcd06ef50a2608fed903543dca4a4585f841e07ce39af6d77866d",
"0x7f310f4daa3dd3c61c9a810588cb21d09027e2afbf302c6570b567d067b4c3cc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

