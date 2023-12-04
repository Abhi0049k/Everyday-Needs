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
                orders?.map((el: bookedOrderI, i: number) => <OrderCard key={i} img={el.img} title={el.title} price={el.price} qty={el.qty} />)
            }
        </div>
    )
}

export default Order
