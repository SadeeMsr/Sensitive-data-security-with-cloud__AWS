import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

// const algorithm = "aes-256-cbc";
// const key = Buffer.from(process.env.ENCRYPTION_KEY, "hex");
// const iv = crypto.randomBytes(16);


export const encryptSymmetricKeyWithPublicKey = (publicKey, symmetricKey) => {
  return crypto.publicEncrypt({
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
  }, symmetricKey);
}


export const generateSymmetricKey = () => {
  return crypto.randomBytes(32); // 256 bits for AES-256
};


export const generateAsymmetricKeyPair = () => {
  return crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: { type: "spki", format: "pem" },
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
  });
};


export const encryptWithSymmetricKey = (symmetricKey, data) => {

  
  const iv = crypto.randomBytes(16);
  
  const startTime = performance.now();
  console.log(symmetricKey, data, iv)
  
  const cipher = crypto.createCipheriv('aes-256-cbc', symmetricKey, iv);
  
  let encryptedData = cipher.update(data, 'utf-8', 'base64');
  
  encryptedData += cipher.final('base64');
  
  const endTime = performance.now();

  const elapsedTime = endTime - startTime;

  return { iv, encryptedData, elapsedTime };
}


// Encrypt function
export const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text, "utf-8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + "=" + encrypted;
};



export const decryptSymmetricKeyWithPrivateKey = (encryptedSymmetricKey, {privateKey})=> {
  // console.log(encryptedSymmetricKey, privateKey)
  return crypto.privateDecrypt({
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
  }, Buffer.from(encryptedSymmetricKey, 'hex'));
}




// Decrypt function
export const decrypt = (hash) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(key),
    Buffer.from(hash.iv, "hex")
  );
  let decrypted = decipher.update(hash.encryptedText, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
};
