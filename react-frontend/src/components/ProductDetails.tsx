import { FC } from "react";
import { productDetailsI } from "./types";

const ProductDetails : FC<productDetailsI> = ({_id, title, price, category, offer, deleteValue, type})=>{
    return (
        <>
        <div className="lg:w-2/4 w-full box-border pt-16 lg:px-[125px] px-3 md:px-[24px] overflow-scroll overflow-x-hidden bg-gray-50">
        <p className="mb-[6px] text-2xl">{title}</p>
        <div className="flex justify-start items-center mx-auto my-3">
            <h1 className="lg:text-4xl font-bold text-xl">Rs. {price} <del className="mx-3 text-gray-400">Rs. {deleteValue}</del></h1>
            <p className="text-base text-gray-400">Inclusive of all taxes</p>
        </div>
        <p className="flex text-base">
            Extra 10% cashback upto INR 500 with <img src="https://images.dailyobjects.com/marche/icons/zest-updated.png?tr=cm-pad_resize,v-2,h-18,dpr-1" alt="img" />
        </p>
        <button className="my-[22px] mx-auto h-[60px] bg-[#20a87e] text-white border-none w-full text-lg">ADD TO CART</button>
        <div className="flex justify-start items-center my-[14px] mr-auto text-[#c21122]">
            <i className="fa-solid fa-tag text-lg"></i>
            <h4 className="text-lg font-semibold">*{offer}</h4>
        </div>
        <div className="flex my-[30px] mx-auto">
            <input type="text" placeholder="Enter Pincode To Check Delivery" className="border-none py-[6px] px-[12px] text-gray-400 outline-none h-[50px] w-[80%] text-xl bg-white" />
            <button className="w-[20%] border-none text-lg font-bold text-white bg-gray-400">CHECK</button>
        </div>
        <div className="my-[20px] mx-auto text-[22px]">
            <div className="border-b border-b-[#20a87e] p-3 mb-[10px] flex justify-between items-center text-[#20a87e]">
                <span>Product Details</span>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="border-b border-b-[#20a87e] p-3 mb-[10px] flex justify-between items-center text-[#20a87e]">
                <span>Specifications</span>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="border-b border-b-[#20a87e] p-3 mb-[10px] flex justify-between items-center text-[#20a87e]">
                <span>Delivery & Returns</span>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>
        </div>
        </>
    )
}

export default ProductDetails
