import axios from "axios";
import { FC, useEffect, useState } from "react";
import { OrderI, bookedOrderI } from "./types";
import OrderCard from "./OrderCard";
const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL

const Order: FC<OrderI> = ({ token }) => {
    const [orders, setOrder] = useState([])

    useEffect(() => {
        fetchOrders()
    }, [])

    const fetchOrders = async () => {
        try {
            const list = await axios.get(`${backendServerUrl}orders/bookedOrders`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(list);
            setOrder(list.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="w-full md:h-full overflow-y-scroll md:pt-[12px] lg:px-20 md:px-10 box-border flex flex-col gap-2">
            {
                (orders.length!==0) ? (orders?.map((el: bookedOrderI, i: number) => <OrderCard key={i} img={el.img} title={el.title} price={el.price} qty={el.qty} />))
                : (<div className="flex h-full w-full justify-center items-center"><h1 className="text-2xl font-semibold text-[#20a87e]">As of yet, you have not placed any orders.</h1></div>)
            }
        </div>
    )
}

export default Order
