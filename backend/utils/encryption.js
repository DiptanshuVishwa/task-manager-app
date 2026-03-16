const CryptoJS = require("crypto-js");

const encryptText = (text) => {
  if (!text) return "";
  return CryptoJS.AES.encrypt(
    text,
    process.env.AES_SECRET
  ).toString();
};

const decryptText = (cipherText) => {
  if (!cipherText) return "";
  const bytes = CryptoJS.AES.decrypt(
    cipherText,
    process.env.AES_SECRET
  );
  return bytes.toString(CryptoJS.enc.Utf8);
};
module.exports = {
  encryptText,
  decryptText
};