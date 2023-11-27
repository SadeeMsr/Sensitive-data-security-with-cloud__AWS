import prisma from "../DB/db.config.js";

export const showUser = async (req, res) => {

    try {
        const userId = req.params.id;
        const user = await prisma.user.findFirst({
            where: {
                user_id: Number(userId),
            },
        })
        return res.json({ status: 200, data: user });
    } catch (error) {
        res.status(500).json({ success: false, error });

    }
};

export const creatUser = async (req, res) => {
    try {
        const newUser = await prisma.user.create({
            data: req.body,
        });
        res.json({ success: true, user: newUser });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }

}


export const updateUser = async (req, res) => {
    const userID = req.params.user_id
    const { name, email, password } = req.body

    await prisma.user.update({
        where: {
            user_id: userID
        },
        data: {
            name: name,
            email: email,
            password: password
        }

    })
    return res.json({
        status: 400,
        message: "User Detals Updated"
    })

}
//Fetch Users from Database

export const fetchUsers = async (req, res) => {
    const allUser = await prisma.user.findMany({
        include: { TraineeApplications: true }
    });
    res.status(200).json({ success: false, data: allUser })
}

