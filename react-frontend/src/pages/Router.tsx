import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductListing from "./ProductsListing";
import Cart from "./Cart";
import Register from "./Register";
import Login from "./Login";
import Product from "./Product";
import Layout from "../Layout/Layout";
import UserDashboard from "./UserDashboard";
import PrivateRoute from "../components/PrivateRoute";

const Router: FC = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Layout><Home/></Layout>} />
            <Route path="/products" element={<Layout><ProductListing/></Layout>} />
            <Route path="/products/:id" element={<Layout><Product/></Layout>} />
            <Route path="/cart" element={<PrivateRoute><Layout><Cart/></Layout></PrivateRoute>}/>
            <Route path="/userdashboard" element={<PrivateRoute><Layout><UserDashboard/></Layout></PrivateRoute>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}

export default Router