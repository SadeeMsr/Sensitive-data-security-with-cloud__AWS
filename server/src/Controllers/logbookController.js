import prisma from "../Config/db.config.js";
import { decryptObjectFields, encryptObjectFields } from "../Crypto-lib/encryt-decryptObj.js";


export const createLog = async (req, res) => {
  const encryptedLog = encryptObjectFields(req.body)
  try {
    const newUser = await prisma.logbook.create({
      data: encryptedLog,
    });
    res.json({ success: true, user: newUser });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const findSubmissions = async (req, res) => {
  try {
    const submissions = await prisma.logbook.findMany({
      where: {
        trainee_id: Number(req.params.traineeID),
      },
    });
    
    const sub = decryptObjectFields(submissions)
 
    res.json({ success: true, submissions: sub });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const findSubmissionsBySupervisor = async (req, res) => {
  try {
    const newUser = await prisma.logbook.findMany({
      where: {
        submitted_to: Number(req.params.supervisorID),
      },
    });
    res.json({ success: true, user: newUser });
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
