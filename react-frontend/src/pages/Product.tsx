import { FC, useEffect, useState } from "react";
import { productI } from "../components/types";
import axios, { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

const Product: FC = () => {
    const [el, setEl] = useState<productI>();
    const [index, setIndex] = useState<number>(0);
    const { id } = useParams();
    useEffect(() => {
        getProductDetails()
    }, [])
    const getProductDetails = async () => {
        const product: AxiosResponse<productI> = await axios.get(`http://localhost:8998/products/${id}`)
        setEl(product.data);
    }
    const handleNxtImg = () => {
        const len: number | undefined = el?.img?.length
        if (len)
            setIndex((prev) => (prev + 1) % len)
    }

    console.log(index, el?.img.length);

    const handlePrvImg = () => {
        const len: number | undefined = el?.img?.length
        if (len)
            setIndex((prev) => (Math.abs(prev - 1)) % len);
    }
    return (
        <>
            <div className="flex lg:flex-row flex-col lg:h-[88vh]">
                <div className="lg:w-[50%] w-full h-[88vh]">
                    <button className="absolute bg-gray-50 h-[50px] w-[50px] md:top-[360px] lg:top-[400px] top-[318px] p-3 border" onClick={handlePrvImg}>
                        <i className="fa-sharp fa-solid fa-angle-left"></i>
                    </button>
                    <img src={el?.img[index]} alt="" className="w-full h-full object-cover" />
                    <button className="absolute bg-gray-50 h-[50px] w-[50px] md:top-[360px] lg:top-[400px] top-[318px] right-[4px] lg:right-[50%] transform md-translate-x-1/2 p-3 border" onClick={handleNxtImg}>
                        <i className="fa-sharp fa-solid fa-angle-right"></i>
                    </button>
                </div>
                <ProductDetails _id={el?._id} title={el?.title} price={el?.price} category={el?.category} offer={el?.offer} deleteValue={el?.deleteValue} type={el?.type} />
            </div>
        </>
    )
}

export default Product
