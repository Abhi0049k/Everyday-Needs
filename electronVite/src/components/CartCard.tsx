import React, { FC, SetStateAction } from "react";
import { cartOrderI } from "./types";
import axios, { AxiosResponse } from "axios";
const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL

const CartCard: FC<cartOrderI & { setChange: React.Dispatch<SetStateAction<number>> } & { token: string }> = ({ img, qty, title, _id, price, setChange, token }) => {
    const increaseQty = async () => {
        try {
            let res = await axios.patch(`${backendServerUrl}orders/increQty/${_id}`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(res);
            setChange((prev) => prev + 1)
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const msg = err.response?.data.msg;
                msg ? alert(msg) : console.log(err);
            }
        }
    }
    const decreaseQty = async () => {
        try {
            let res = await axios.patch(`${backendServerUrl}orders/decreQty/${_id}`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(res);
            setChange((prev) => prev + 1)
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const msg = err.response?.data.msg;
                msg ? alert(msg) : console.log(err);
            }
        }
    }
    const removeProduct = async () => {
        try {
            const res: AxiosResponse = await axios.delete(`${backendServerUrl}orders/${_id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(res);
            setChange((prev) => prev + 1);
        } catch (err) {
            console.log(err);
        }
    }
    const handleChangeQty = (n: number) => {
        if (n === 1) increaseQty();
        else decreaseQty();
    }
    return (
        <>
            <div className="flex h-52 justify-between w-full p-1 my-2 mx-auto border-b pb-[18px] ">
                <img src={img} alt="productImg" className="object-cover md:w-[25%] w-[30%]" />
                <div className="w-[66%] justify-around p-2">
                    <p className="text-lg md:text-xl font-semibold">{title}</p>
                    <h3 className="text-lg md:text-xl md:font-semibold md:pt-3 md:pb-8">Rs. {price}</h3>
                    <div className="flex h-12 justify-between">
                        <div className="border-t border-b flex">
                            <button className=" border-r border-l" onClick={() => handleChangeQty(-1)}>
                                <img src="https://images.dailyobjects.com/marche/icons/minus-1.png?tr=cm-pad_resize,v-2,w-14,dpr-1" alt="minus" className="h-[30px] w-[30px] object-none" />
                            </button>
                            <span className="m-3 text-xl flex justify-center items-center">{qty}</span>
                            <button className="border-r border-l" onClick={() => handleChangeQty(1)}>
                                <img src="https://images.dailyobjects.com/marche/icons/plus.png?tr=cm-pad_resize,v-2,w-14,dpr-1" alt="plus" className="h-[30px] w-[30px] object-none" />
                            </button>
                        </div>
                        <img src="https://images.dailyobjects.com/marche/icons/bin.png?tr=cm-pad_resize,v-2,w-20,dpr-1" alt="dustbin" className="border object-none" onClick={removeProduct} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCard
