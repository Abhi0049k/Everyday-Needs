import { FC } from "react";
import { imageC } from "./types";
import { Link } from "react-router-dom";

const ImageComponent : FC<imageC> = ({img, to})=>{
    return (
        <>
        <div className="w-full h-[610px] my-3">
            <Link to={to} className="absolute w-2/4 block h-[610px]"></Link>
            <img src={img} alt="img" className="w-full h-full object-cover" />
        </div>
        </>
    )
}

export default ImageComponent
