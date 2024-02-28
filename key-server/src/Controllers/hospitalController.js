import prisma from "../Config/db.config.js";

export const createHospitals = async (req, res) => {
  try {
    const newUser = await prisma.hospital.createMany({
      data: req.body,
    });
    res.json({ success: true, user: newUser });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const findMasterDataForAdmin = async (req, res) => {
  try {
    const hospitalsWithCounts = await prisma.hospital.findMany({
      include: {
        users: {
          include: {
            logbooks: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    const formattedData = hospitalsWithCounts.map((hospital) => {
      const trainees = hospital.users.filter(
        (user) => user.user_type === "trainee"
      );
      const supervisors = hospital.users.filter(
        (user) => user.user_type === "supervisor"
      );

    
      return {
        id: hospital.id,
        hospital_name: hospital.hospital_name,
        address: hospital.address,
        Branch: hospital.Branch,
        trainee_count: trainees.length,
        supervisor_count: supervisors.length,
        supervisors: supervisors.map((supervisor) => {
          return {
            id: supervisor.id,
            supervisor_name: supervisor.name,
          };
        }),
        trainees: trainees.map((trainee) => {
          return {
            id: trainee.id,
            trainee_name: trainee.name,
            logbooks: trainee.logbooks.map((logbook)=>{
                return {
                    patient_record_id: logbook.patient_record_id,
                    diagnosis_details: logbook.diagnosis_details,
                    approval_status: logbook.approval_status
                }
            })
          };
        }),
      };
    });

    return res.json({ success: true, data: formattedData });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
