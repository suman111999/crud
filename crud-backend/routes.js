const express=require('express');

const {getAllUsers,getUserByEmail,addUser,updateUser,deleteUser}=require('./controllers/userController');

const router=express.Router();

router.get('/user/list',getAllUsers);
router.get('/user/:email',getUserByEmail);
router.post('/user/add',addUser);
router.put('/user/update',updateUser);
router.delete('/user/delete',deleteUser);

module.exports=router;