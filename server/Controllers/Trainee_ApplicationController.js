
import prisma from "../DB/db.config.js";

// export const creatTraineeApplication = async (req, res) => {
   
//     try {
//         const newTraineeApplication = await prisma.traineeApplication.create({
          
//             data: {
//                 application_status:"yes"
//             }
//         });
//         res.json({ success: true, TraineeApplication: newTraineeApplication });
//     } catch (error) {
//         res.status(500).json({ success: false, error });
//     }

// }


// export const updateApplication = async (req, res) => {
//     const userID = req.params.user_id
//     const { name, email, password } = req.body

//     await prisma.user.update({
//         where: {
//             user_id: userID
//         },
//         data: {
//             name: name,
//             email: email,
//             password: password
//         }

//     })
//     return res.json({
//         status: 400,
//         message: "User Detals Updated"
//     })

// }
// //Fetch Users from Database

// export const fetchUsers = async (req, res) => {
//     const allUser = await prisma.user.findMany();
//     res.status(200).json({ success: false, data: allUser })
// }
