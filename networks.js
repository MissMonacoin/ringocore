var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('70352205'),
  addressVersion: 60,
  privKeyVersion: 128+60,
  P2SHVersion: 85,
  hkeyPublicVersion: 0x0,
  hkeyPrivateVersion: 0x0,
  genesisBlock: {
    hash: hex('000004b7fdb8292c7a005e27ffc2e9916cc8e3891a922b671725fa7deda19783'),
    merkle_root: hex('8e67a359fde8e5b6d03e4538a4461752bfe5bf4fd2885a5620eaea53d9b8929b'),
    height: 0,
    nonce: 0,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1400792000,
    bits: 0x1e0fffff,
  },
  dnsSeeds: [
    'ringoseed.dip.jp'
  ],
  defaultClientPort: 9393
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('cdf2c0ef'),
  addressVersion: 111,
  privKeyVersion: '239',
  P2SHVersion: 196,
  hkeyPublicVersion: 0x0,
  hkeyPrivateVersion: 0x0,
  genesisBlock: {
    hash: hex('018e3cae72f38dcfe7effaabb7c643a427b88ef5a4ce120a0dec5315daa573af'),
    merkle_root: hex('8e67a359fde8e5b6d03e4538a4461752bfe5bf4fd2885a5620eaea53d9b8929b'),
    height: 0,
    nonce: 0,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1400792000,
    bits: 0x1f00ffff,
  },
  dnsSeeds: [],
  defaultClientPort: 19393
};
