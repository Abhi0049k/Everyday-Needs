import { FC } from "react";
import { imageC } from "./types";
import { Link } from "react-router-dom";

const ImageComponent: FC<imageC> = ({ img, to }) => {
    return (
        <>
            <div className="w-full lg:h-[610px] md:h-96 my-3">
                <Link to={`${to}`} className="absolute lg:w-2/4 w-full block lg:h-[610px] md:h-96 h-[172px]"></Link>
                <img src={img} alt="img" className="w-full h-full object-cover" />
            </div>
        </>
    )
}

export default ImageComponent
