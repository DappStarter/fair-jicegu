require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food pledge random night upgrade coral light army gift'; 
let testAccounts = [
"0xd6011cafd0affbb41f47def4ab2f6714f80035cf5130bf7c67a6f4673d33b39b",
"0x81611fb2b65ba8950e483f5dc4c44f46561d36343b64aad2831980c59f2c42d1",
"0xf44c145867bd308365a3a48190eb695abe7acf250010252cac8f67948bf3eb98",
"0x7508d2d826614e6f869dc3a00dd9cf37377d79d06a0bb2bd6fea1969920fe6b7",
"0x47a572d790fa6737eed918e9370aebc246bc878e5b9fb178b54048fc36470d94",
"0xcd4d294095c8cdda516296de606489c4333c7d95d1999af9c469e57484ae3764",
"0xb6e1763b695cd5659b24f83ccd0d9cde24e9ee3d4032cd2685f43c444f1839fa",
"0x263fc041cbf6290d1b4d6781f159a64d88aec909bd5874add5cfcb7072917dbd",
"0xf45366d451ba3588713225ab33144e630fa8e2ab6a3a17fdc54b9c6d31c02b44",
"0x9a697a937a634274b7b4b476f1ff26c09a09387ca14c581b5cfe4bb317a6e373"
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
            version: '^0.5.11'
        }
    }
};
