const mongoose = require('mongoose');

const connection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connection with the db established');
    }catch(err){
        console.log('Something went wrong with db connection');
    }
}

module.exports = connection;
