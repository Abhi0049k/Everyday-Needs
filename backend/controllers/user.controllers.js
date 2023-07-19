const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require("../models/user.model");
const blacklistModel = require("../models/blacklist.model");
require('dotenv').config();

const getUser = async (req, res) => {
    const { cusId } = req.body;
    try {
        const user = await userModel.findById({ _id: cusId }, { name: 1, email: 1, _id: 0 });
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send({ "err": "Something went wrong" });
    }
}

const registerUser = async (req, res) => {
    const data = req.body;
    const saltRounds = Number(process.env.SALT_ROUNDS)
    try {
        const email = data.email;
        const user = await userModel.find({ email });
        if (user.length > 0)
            return res.status(400).send({ "msg": "User already exist, please login" })
        data.password = await bcrypt.hash(data.password, saltRounds);
        const newUser = new userModel(data);
        await newUser.save();
        res.status(200).send({ "msg": "Registration Successful" })
    } catch (err) {
        res.status(500).send({ "msg": "Something went wrong" })
    }
}

const loginUser = async (req, res) => {
    const data = req.body;
    const secretKey = process.env.SECRET_KEY;
    try {
        const { email } = data;
        const user = await userModel.findOne({ email });
        let result = await bcrypt.compare(data.password, user.password);
        if (result)
            res.status(200).send({ "msg": "You have successfully logged in", "token": jwt.sign({ userId: user._id }, secretKey), "username": `${user.name}` });
        else
            res.status(400).send({ "msg": "Wrong Credentials" });
    } catch (err) {
        return res.status(500).send({ "msg": "User not found, Register First" });
    }
}

const logoutUser = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1] || [0];
        const tokenExist = new blacklistModel({ token });
        await tokenExist.save();
        res.status(200).send({ msg: 'Logout Successful' });
    } catch (err) {
        res.status(400).send({ msg: 'Token Not found' });
    }
}

const updateUser = async (req, res) => {
    try {
        const { cusId, ...data } = req.body;
        try {
            await userModel.findByIdAndUpdate({ _id: cusId }, data);
            res.status(200).send({ "msg": "User Details Updated" });
        } catch (err) {
            res.status(500).send({ msg: err.message });
        }
    } catch (err) {
        res.status(500).send({ "msg": "Something went wrong" });
    }
}

module.exports = {
    getUser, registerUser, loginUser, logoutUser, updateUser
}