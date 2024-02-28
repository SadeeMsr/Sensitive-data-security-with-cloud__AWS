import prisma from "../Config/db.config.js";
import { decryptObjectFields, encryptObjectFields } from "../Crypto-lib/encryt-decryptObj.js";


export const createLog = async (req, res) => {
  try {
    const newUser = await prisma.logbook.create({
      data: req.body,
    });
    res.json({ success: true, user: newUser });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const findDiagnosisDetails = async (req, res) => {

  console.log(req.params)

  try {
    const diagnosis = await prisma.logbook.findUnique({
      where: {
        form_id: Number(req.params.form_id),
      },
      select: {
        diagnosis_details: true,
      },
    });

    console.log(diagnosis)
    res.json({ success: true, diagnosis_details:diagnosis.diagnosis_details });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};


export const updateDiagnosisDetails = async (req, res) => {

  console.log(req.body)

  try {
    await prisma.logbook.update({
      where: {
        form_id: Number(req.body.form_id),
      },
      data: {
        diagnosis_details: req.body.diagnosis_details
      },
    });
    res.json({
      status: 400,
      message: "User Details Updated",
    });

  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};


export const updateApprovalStatus = async (req, res) => {

  try {
    await prisma.logbook.update({
      where: {
        form_id: Number(req.params.formID),
      },
      data: req.body,
    });
    res.json({
      status: 400,
      message: "User Details Updated",
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
