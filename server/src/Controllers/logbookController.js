import prisma from "../config/db.config.js";

export const createLog = async (req, res) => {
  try {
    const newUser = await prisma.logbook.createMany({
      data: req.body,
    });
    res.json({ success: true, user: newUser });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const findSubmissions = async (req, res) => {
  try {
    const newUser = await prisma.logbook.findMany({
      where: {
        trainee_id: Number(req.params.traineeID),
      },
    });
    res.json({ success: true, user: newUser });
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
