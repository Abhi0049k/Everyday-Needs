const mongoose = require('mongoose');

const connection = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connection with DB established');
    }catch(err){
        console.log('Something went wrong with db connection');
        console.log(err.message);
    }
}

module.exports = connection;
