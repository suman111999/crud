const express=require('express');
const cors=require('cors');

const connect=require('./config/connectDb');
const router=require('./routes');
const {PORT}=require('./config/index');

const app=express();

connect();

app.use(cors())
app.use(express.json());

app.use('/api',router);

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
})