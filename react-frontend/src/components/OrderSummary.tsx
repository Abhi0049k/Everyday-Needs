import axios, { AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartOrderI, storeI } from "./types";
import CartCard from "./CartCard";

interface orderDetailsI{
    qty: number;
    price: number;
    discount: number;
}


const OrderSummary: FC = () => {
    const obj: orderDetailsI = {
        qty: 0,
        price: 0,
        discount: 0
    }
    const authstore = useSelector((store: storeI):{isAuth: boolean; token: string}=>({isAuth: store.authReducer.isAuth, token: store.authReducer.token}));
    const [change, setChange] = useState<number>(0);
    const [order, setOrder] = useState<Array<cartOrderI>>([]);

    useEffect(()=>{
        document.title = "Cart";
        getOrders();
    }, [change]);

    console.log(authstore);

    const getOrders = async()=>{
        try{
            let res : AxiosResponse<cartOrderI> =  await axios.get('http://localhost:8998/orders/',{
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authstore.token}`
                }
            })
            if(res.statusText==="OK"){
                setOrder(Array.isArray(res.data) ? res.data : [res.data]);
            }
        }catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <div className="flex md:flex-row flex-col justify-center border-black border">
                <div className="w-full md:w-2/4 h-[600px] overflow-y-scroll border border-black pt-[60px] px-14 box-border">
                    {
                        order.map((el, i)=> {
                            console.log(el);
                            obj.discount+=el.discount!;
                            obj.price+=el.price;
                            obj.qty+=el.qty;
                        return <CartCard key={i} {...el} setChange={setChange} token={authstore.token} />})
                    }
                </div>
                <div className="w-full md:w-2/4 pt-14 px-[20px] md:px-[40px] lg:px-[100px] box-border border border-black">
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
                                <p className="text-base lg:text-2xl">(Inclusive Of Taxes)</p>
                                <h5 className="text-base lg:text-xl font-semibold xl:font-bold">You Saved Rs. <span>{obj.discount}</span></h5>
                            </div>
                        </div>
                        <button className="mx-auto my-2 w-full h-[46px] bg-[#20a87e] border-none rounded text-white">CHECKOUT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummary
