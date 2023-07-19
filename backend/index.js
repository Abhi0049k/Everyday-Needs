const express = require('express');
const connection = require('./configs/db');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/products.routes');
const orderRouter = require('./routes/order.routes');
const auth = require('./middlewares/auth.middleware');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.status(200).send({msg: 'Welcome to everyday needs api'});
})

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/orders', auth, orderRouter);

app.listen(process.env.PORT, ()=>{
    connection();
    console.log(`Server is running on Port: ${process.env.PORT}`);
})