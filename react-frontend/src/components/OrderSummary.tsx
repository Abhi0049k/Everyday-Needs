import axios, { AxiosResponse } from "axios";
import React, { FC, SetStateAction, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartOrderI, storeI } from "./types";
import CartCard from "./CartCard";
const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL

interface orderDetailsI {
    qty: number;
    price: number;
    discount: number;
}


const OrderSummary: FC<{ setEmpty: React.Dispatch<SetStateAction<boolean>> }> = ({ setEmpty }) => {
    const obj: orderDetailsI = {
        qty: 0,
        price: 0,
        discount: 0
    }
    const authstore = useSelector((store: storeI): { isAuth: boolean; token: string } => ({ isAuth: store.authReducer.isAuth, token: store.authReducer.token }));
    const [change, setChange] = useState<number>(0);
    const [order, setOrder] = useState<Array<cartOrderI>>([{
        img: "string",
        price: 1,
        qty: 0,
        title: "string",
        discount: 0,
        productId: "string",
        status: "string",
        userId: "string",
        _v: "tring",
        _id: "string",
        __v: "string"
    }]);


    const getOrders = async () => {
        try {
            let res: AxiosResponse<cartOrderI> = await axios.get(`${backendServerUrl}orders/`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authstore.token}`
                }
            })
            if (res.statusText === "OK") {
                setOrder(Array.isArray(res.data) ? res.data : [res.data]);
            }
        } catch (err) {
            console.log(err);
        }
    }

    if (order.length === 0) setEmpty(true);

    const handleCheckout = async () => {
        try {
            const res: AxiosResponse = await axios.patch(`${backendServerUrl}orders/checkout`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authstore.token}`
                }
            })
            if (res.statusText === 'OK') {
                alert(res.data.msg);
                setChange((prev) => prev + 1);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        document.title = "Cart";
        getOrders();
    }, [change]);
    return (
        <>
            <div className="flex md:flex-row flex-col justify-center">
                <div className="w-full md:w-2/4 md:h-[600px] overflow-y-scroll border md:pt-[60px] px-8 md:px-14 box-border">
                    {
                        order.map((el, i) => {
                            obj.discount += (el.discount! * el.qty);
                            obj.price += (el.price * el.qty);
                            obj.qty += el.qty;
                            return <CartCard key={i} {...el} setChange={setChange} token={authstore.token} />
                        })
                    }
                </div>
                <div className="w-full md:w-2/4 pt-6 md:pt-14 px-[20px] md:px-[40px] lg:px-[80px] xl:px-[120px] box-border">
                    <div className="border-b mb-3">
                        <h3 className="text-lg lg:text-xl font-semibold xl:font-bold text-start text-[#20a87e] border-t flex justify-around items-center py-4">
                            <img className="h-[30px] w-[35px]" src="https://images.dailyobjects.com/marche/offer/coupon-icon-green.png?tr=cm-pad_resize,v-2" alt="coupon" />
                            <span>COUPONS & OFFERS</span>
                            <i className="fa-solid fa-angles-down"></i>
                        </h3>
                        <h3 className="text-start text-lg lg:text-xl font-semibold xl:font-bold text-[#20a87e] border-t flex justify-around items-center py-4">
                            <img className="h-[30px] w-[35px]" src="https://images.dailyobjects.com/marche/icons/gift-card-logo.png?tr=cm-pad_resize,v-2"
                                alt="card" />
                            <span>REDEEM GIFT CARD</span>
                            <i className="fa-solid fa-angles-down"></i>
                        </h3>
                    </div>
                    <div className="my-5 mx-auto">
                        <h2 className="text-xl ld:text-2xl font-semibold xl:font-bold">ORDER SUMMARY</h2>
                        <div className="border-b">
                            <div className="flex justify-between my-[14px] mx-auto">
                                <p className="text-xl lg:text-2xl">Item Total (<span>{obj.qty}</span> Items)</p>
                                <h3 className="text-xl lg:text-2xl font-semibold xl:font-bold">Rs. {obj.price}</h3>
                            </div>
                            <div className="flex justify-between my-[14px] mx-auto">
                                <p className="text-xl lg:text-2xl">Shipping</p>
                                <h5 className="text-lg lg:text-xl font-semibold xl:font-bold">FREE</h5>
                            </div>
                        </div>
                        <div className="border-b">
                            <div className="flex justify-between my-[14px] mx-auto">
                                <p className="text-xl lg:text-2xl">Grand Total</p>
                                <h3 className="text-xl lg:text-2xl font-semibold xl:font-bold">Rs. {obj.price}</h3>
                            </div>
                            <div className="flex justify-between my-[14px] mx-auto">
                                <p className="text-base lg:text-xl xl:text-2xl">(Inclusive Of Taxes)</p>
                                <h5 className="text-base lg:text-lg xl:text-xl font-semibold xl:font-bold">You Saved Rs. <span>{obj.discount}</span></h5>
                            </div>
                        </div>
                        <button className="mx-auto my-2 w-full h-[46px] bg-[#20a87e] border-none rounded text-white" onClick={handleCheckout}>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummary
