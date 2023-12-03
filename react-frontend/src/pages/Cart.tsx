import { FC } from "react";
import Banner from "../components/Banner";
import OrderSummary from "../components/OrderSummary";
import EmptyCart from "../components/EmptyCart";

const Cart: FC = () => {
    return (
        <>
            <Banner />
            <OrderSummary/>
            {/* <EmptyCart/> */}
        </>
    )
}

export default Cart
