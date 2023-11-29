import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductListing from "./ProductsListing";
import Cart from "./Cart";
import Register from "./Register";
import Login from "./Login";
import Product from "./Product";

const Router: FC = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<ProductListing/>} />
            <Route path="/products/:id" element={<Product/>} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}

export default Router