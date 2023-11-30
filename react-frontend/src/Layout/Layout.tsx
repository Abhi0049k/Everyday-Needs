import { FC } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LayoutProps } from "../components/types";

const Layout : FC<LayoutProps> = ({children})=>{
    return (
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}

export default Layout
