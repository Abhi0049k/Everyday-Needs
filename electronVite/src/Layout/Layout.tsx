import { FC } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LayoutProps } from "../components/types";
import { useDispatch } from "react-redux";

const Layout : FC<LayoutProps> = ({children})=>{
    const dispatch = useDispatch();
    const storedToken : string | null = sessionStorage.getItem('token');
    if(storedToken) dispatch({ type: 'LOGIN_SUCCESS', payload: storedToken });
    return (
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}

export default Layout
