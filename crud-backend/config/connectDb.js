const mongoose=require('mongoose');
const {MONGO_URI}=require('./index')

const connect=()=>{
    mongoose.connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log('Successfully connected to the db');
    }).catch((err)=>{
        console.log('connection failed,error: '+err);
    })
};

module.exports=connect;