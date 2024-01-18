import { FC } from "react";
import { Link } from "react-router-dom";

const EmptyCart : FC = ()=>{
    return (
        <>
        <div className="m-2 h-[582px] flex flex-col gap-6 justify-center items-center border">
            <h1 className="text-center text-xl md:text-4xl font-semibold">Your cart is empty, Add products to place an order</h1>
            <Link to={"/"} className="p-4 w-40 cursor-pointer text-[22px] flex justify-center items-center bg-[#20a87e] hover:bg-[#178e68] border-none rounded text-white">Homepage</Link>
        </div>
        </>
    )
}

export default EmptyCart;
