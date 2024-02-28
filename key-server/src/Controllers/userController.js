import prisma from "../Config/db.config.js";

import { decrypt, encrypt, encryptSymmetricKeyWithPublicKey, generateAsymmetricKeyPair, generateSymmetricKey } from "../Crypto-lib/crypto.js";


import axios from "axios"
const cloudServerUrl = 'http://localhost:5000/user/create-users';




export const authenticateUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: req.body,
    });
    return res.json({
      status: 200,
      data: user || [],
      ok: user ? true : false,
      msg: user
        ? "User is Authenticated!"
        : "Check your email and password again!",
    });
  } catch (error) {
    res
      .status(500)
      .json({ ok: false, error, msg: "User is not authenticated!" });
  }
};


export const createUser = async (req, res) => {

  const { publicKey, privateKey } = generateAsymmetricKeyPair()
  const  SymmetricKeyForAES = generateSymmetricKey().toString('hex')
  const EncryptedSymmetricKeyForAES = encryptSymmetricKeyWithPublicKey(publicKey, SymmetricKeyForAES).toString('hex')

  try {
    const newUser = await prisma.user.create({
      data: {...req.body, publicKey, privateKey, symmetricKey:SymmetricKeyForAES},
    });
    
    const newUserCloud = await axios.post(cloudServerUrl, {...req.body, EncryptedSymmetricKey:EncryptedSymmetricKeyForAES})
  
    res.json({ success: true, cloudResponse: newUserCloud.data, localResponse: newUser, msg: "New user created!" });

  } catch (error) {
    res.status(500).json({ success: false, error });
  }
  
};




export const findSupervisors = async (req, res) => {
  try {
    const user = await prisma.user.findMany({
      where: {
        user_type: "supervisor",
      },
      select: {
        name: true,
        id: true,
      },
    });
    return res.json({ status: 200, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};




// function splitHash(hash) {
//     const [iv, encryptedText] = hash.split('=');
//     return { iv, encryptedText };
//   }

//   const {email}= req.body[0]
//   console.log(req.body)

//   const hash = encrypt(JSON.stringify(email))




//   const hashSplited = splitHash(hash)

//   const decryptedData = decrypt(hashSplited)
//   console.log(decryptedData)
