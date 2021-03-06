import crypto from 'crypto';

export default {

  encrypt(message, password) {
    if(message == "") throw("Please provide a message to encrypt");
    if(password == "") throw("Please provide a password");

    let key = crypto.createHash("sha256").update(password).digest();
    let iv = crypto.randomBytes(16);

    let cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    let encryptedText = cipher.update(message);

    encryptedText = Buffer.concat([encryptedText, cipher.final()]);

    return iv.toString("hex") + ":" + encryptedText.toString("hex");
  },

  decrypt(decryptedMessage, password) {
    let aText = decryptedMessage.split(":");
    if (aText.length != 2) throw("Invalid encrypted message");
    if(password == "") throw("Please provide a password");

    let key = crypto.createHash("sha256").update(password).digest();
    let iv = Buffer.from(aText[0], 'hex');
    let encryptedText = Buffer.from(aText[1], "hex");

    let decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    let decryptedText = decipher.update(encryptedText);

    decryptedText = Buffer.concat([decryptedText, decipher.final()]);

    return decryptedText.toString();
  }
}