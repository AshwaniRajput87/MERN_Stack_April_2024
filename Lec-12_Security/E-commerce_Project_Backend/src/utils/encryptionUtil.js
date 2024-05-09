const crypto = require('crypto');

const iv = crypto.randomBytes(16);
const key = crypto.randomBytes(32);

console.log(iv);
console.log(key);

const encrypt = (data) => {
    const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
    console.log(cipher);

    const encryptData = Buffer.concat([cipher.update(data, 'utf-8'), cipher.final()]).toString("hex");

    return encryptData;
}

const decrypt = (encryptedData) => {

    const dicipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);

    const decryptData = Buffer.concat([dicipher.update(Buffer.from(encryptedData, "hex")), dicipher.final()]).toString('utf-8');

    return decryptData;
}

module.exports = {
    encrypt,
    decrypt
}