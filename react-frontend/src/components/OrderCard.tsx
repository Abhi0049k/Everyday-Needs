import { FC } from "react";
import { bookedOrderI } from "./types";

const OrderCard : FC<bookedOrderI> = ({img, title, price, qty})=>{
    return(
        <div className='flex rounded-md w-full md:justify-between md:p-2 md:pb-[18px] shadow gap-2'>
        <img src={img} className="md:w-[120px] w-[64px] object-cover" /> 
        <div className='md:w-[430px]'>
        <p className="text-lg md:text-[26px]">{title}</p>
        <h3 className="text-base md:text-lg font-semibold md:mt-[12px] md:mb-[35px]">Rs. {price * qty}</h3>
        <div className="flex justify-between object-cover">
        <span>{qty}</span>
        </div>
        </div>
        </div>
    )
}

export default OrderCard
