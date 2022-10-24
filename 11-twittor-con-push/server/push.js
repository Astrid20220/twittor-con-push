const vapid = require('./vapid.json');

module.exports.getKey = () => {
    return urlsafeBase64.decode( vapid.publicKey );
};