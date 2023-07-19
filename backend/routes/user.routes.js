const { Router } = require("express");
const auth = require("../middlewares/auth.middleware");
const { getUser, registerUser, loginUser, logoutUser, updateUser } = require("../controllers/user.controllers");
const userRouter = Router();

userRouter.get('/', auth, getUser)

userRouter.post('/register', registerUser)

userRouter.post('/login', loginUser)

userRouter.get('/logout', auth, logoutUser)

userRouter.patch('/update', auth, updateUser)


module.exports = userRouter;