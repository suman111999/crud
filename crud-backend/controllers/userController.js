const Users = require('../model/Users');

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find({}).sort({ firstName: 1 });
        return res.status(200).json(users);

    } catch (e) {
        console.log(e);
        return res.status(400).json({
            message: `Error while fetching users details`,
            success: fuseralse
        })
    }
};

const getUserByEmail = async (req, res) => {
    const { email } = req.params
    try {
        const user = await Users.findOne({ email });
        return res.status(200).json(user);
    } catch (e) {
        console.log(e);
        return res.status(400).json({
            message: `Error while fetching user by email`,
            success: false
        })
    }
};

const addUser = async (req, res) => {
    const { firstName = '', lastName = '', email = '', gender = '' } = req.body
    try {
        const isUserExist = await Courses.findOne({ email });

        if (isEmpt(isUserExist)) {

            const createdUser = await Users.create({
                firstName,
                lastName,
                email,
                gender
            });

            return res.status(201).json({
                createdUser,
                message: `User ${email} is added successfully.`
            });
        } else {
            return res.status(400).json({
                success: false,
                message: `user already exist with email : ${email} in database.`
            });
        }
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: `Error while adding user.`
        });
    }

};

const updateUser = async (req, res) => {
    try {
        const { email } = req.params
        let updatedUser = await Courses.findOneAndUpdate({ email }, req.body,{ new: true });
        return res.status(200).json({
            updatedUser,
            message: `User ${email} is updated successfully.`
        });

    } catch (e) {
        return res.status(400).json({
            success: false,
            message: `Error while updating user.`
        });
    }
};

const deleteUser = async (req, res) => {
    const { email } = req.params;
    try {
        await Users.findOneAndDelete({ email });
        return res.status(200).json({
            message: `User with email ${email} is successfully deleted`,
            success: true
        });

    } catch (e) {
        return res.status(400).json({
            message: `Error while deleting a user`,
            success: false
        })
    }
};

module.exports={
    getAllUsers,getUserByEmail,addUser,updateUser,deleteUser
}