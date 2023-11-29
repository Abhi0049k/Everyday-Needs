import { FC, useState } from "react";
import { productI } from "./types";
import { Link } from "react-router-dom";

const ProductCard : FC<productI> = ({_id, title, price, category, offer, img, deleteValue, type}: productI)=>{
    const [imge, setImg] = useState<string>(img[0]);
    const handleIn = ()=>{
        setImg(img[1]);
    }
    const handleOut = ()=>{
        setImg(img[0]);
    }
    return (
        <>
        <div className="lg:w-96 w-2/5 p-5 box-border bg-white lg:h-[500px] h-[560px]">
            <Link to={`/products/${_id}`}>
                <img src={`${imge}`} alt="" className="lg:w-96 w-full h-4/5 object-cover" onMouseEnter={handleIn} onMouseLeave={handleOut}/>
            </Link>
            <p className="text-base mt-2">{title}</p>
            <h1 className="text-lg font-semibold">Rs.{price} <del className="text-gray-500">Rs.{deleteValue}</del></h1>
            <h1 className="text-base text-red-500 font-semibold">{offer}</h1>
        </div>
        </>
    )
}

export default ProductCard
