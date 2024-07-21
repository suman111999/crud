const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender:{
        type:String
    }

}, {
    timestamps: true
});

module.exports=mongoose.model('Users',UserSchema);