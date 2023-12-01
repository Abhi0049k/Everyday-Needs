const mongoose = require('mongoose');
require('dotenv').config();

const connection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            writeConcern: { w: 'majority', j: true, wtimeout: 1000 },
        });
        console.log('Connection with the db established');
    }catch(err){
        console.log('Something went wrong with db connection');
    }
}

module.exports = connection;
