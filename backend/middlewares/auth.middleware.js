const { verify } = require("jsonwebtoken");
const blacklistModel = require("../models/blacklist.model");
require('dotenv').config();

const auth = async(req, res, next)=>{
    try{
        const token = req.headers.authorization.split(' ')[1] || [0];
        const blacklisted = await blacklistModel.find({token});
        if(blacklisted.length!==0)
        return res.status(400).send({msg: 'Login Again'});
        const decode = verify(token, process.env.SECRET_KEY);
        if(!decode)
        return res.status(400).send({msg: 'Invalid Token'});
        req.body.cusId = decode.userId;
        next();
    }catch(err){
        res.status(400).send({msg: 'Token Not Found, Login Again'});
    }
}

module.exports = auth