import prisma from "../Config/db.config.js";
import { decryptSymmetricKeyWithPrivateKey, encryptWithSymmetricKey } from "../Crypto-lib/crypto.js";
import { decryptObjectFields, encryptObjectFields } from "../Crypto-lib/encryt-decryptObj.js";

import axios from "axios"
const cloudServerUrl = 'http://localhost:5000';


export const createLog = async (req, res) => {
  try {
    const newPatientCloud = await axios.post(cloudServerUrl+"/logbook/create-patient", {...req.body})
    res.json({ success: true, user: newPatientCloud.data });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};



export const updateDiagnosis = async (req, res) => {

  console.log(req.body)
  
  try {
    const employeeSymmetricKey = await axios.get(cloudServerUrl+"/user/find-key/"+req.body.employeeId)
    
    const privateKey = await prisma.user.findUnique({
      where: {
        id: Number(req.body.employeeId),
      },
      select: {
        privateKey: true
      },
    }); 

    const decryptedSymmetricKey = decryptSymmetricKeyWithPrivateKey(employeeSymmetricKey.data.formKey, privateKey)

    // const {diagnosis_details} = await axios.get(cloudServerUrl+"/logbook/find-diagnosis/"+req.body.form_id)


    const encryptedDiagnosisData = encryptWithSymmetricKey(decryptedSymmetricKey, req.body.diagnosis_details)

    console.log(encryptedDiagnosisData)
    // const response = await axios.put(cloudServerUrl+"/logbook/update-diagnosis", {form_id: req.body.form_id, diagnosis_details: encryptedDiagnosisData})
    // res.json({ success: true, message: response.data.message });
    
    // const updateDiagnosisPatientCloud = await axios.get(cloudServerUrl+"/user/find-key/"+req.body.employeeId)
    // res.json({ success: true, user: employeeSymmetricKey.data.EncryptedSymmetricKey });

  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
