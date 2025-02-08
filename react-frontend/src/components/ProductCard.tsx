import { FC, useState } from "react";
import { productI } from "./types";
import { Link } from "react-router-dom";

const ProductCard: FC<productI> = ({ _id, title, price, offer, img, deleteValue }: productI) => {
    const [imge, setImg] = useState<string>(img[0]);
    const handleIn = () => {
        setImg(img[1]);
    }
    const handleOut = () => {
        setImg(img[0]);
    }
    return (
        <>
        {/* Go Beyond, Plus Ultra */}
            <div className="lg:w-96 w-2/5 p-5 box-border bg-white lg:h-[500px] md:h-[560px] h-[340px]">
                <Link to={`/products/${_id}`}>
                    <img src={`${imge}`} alt="" className="lg:w-96 w-full h-4/5 object-cover" onMouseEnter={handleIn} onMouseLeave={handleOut} />
                </Link>
                <p className="text-sm md:text-base md:mt-2 mt-1">{title}</p>
                <h1 className="text-sm md:text-lg font-semibold">Rs.{price} <del className="text-gray-500">Rs.{deleteValue}</del></h1>
                <h1 className="md:text-base hidden md:block text-red-500 md:font-semibold">{offer}</h1>
            </div>
        </>
    )
}

export default ProductCard
