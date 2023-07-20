// import CryptoJS from "/website/crypto-js";
// import moment from "/website/moment/moment";

const CryptoJS = require('crypto-js');
const moment = require('moment')
// https://sabe.io/blog/node-syntaxerror-cannot-use-import-statement-outside-a-module


console.log(moment().format('dddd'));


// Encrypt function
function encryptText(text, key) {
    var encrypted = CryptoJS.AES.encrypt(text, key);
    return encrypted.toString();
  }
  
  // Decrypt function
  function decryptText(ciphertext, key) {
    var decrypted = CryptoJS.AES.decrypt(ciphertext, key);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
  
  // Usage example
  var plaintext = "DaBaby";
  var encryptionKey = "secret-key";
  
  var encryptedText = encryptText(plaintext, encryptionKey);
  console.log("Encrypted: " + encryptedText);
  
  var decryptedText = decryptText(encryptedText, encryptionKey);
  console.log("Decrypted: " + decryptedText);

document.getElementById("test").innerHTML += "Plaintext: " + plaintext + ", Encrypted text: " + encryptedText + ", DecryptedText" + decryptText;