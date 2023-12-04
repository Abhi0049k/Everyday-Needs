import { FC } from "react";
import Banner from "../components/Banner";
import OrderSummary from "../components/OrderSummary";
import EmptyCart from "../components/EmptyCart";
import { useSelector } from "react-redux";
import { storeI } from "../components/types";

const Cart: FC = () => {
    const authstore = useSelector((store: storeI):{isAuth: boolean; token: string}=>({isAuth: store.authReducer.isAuth, token: store.authReducer.token}));
    return (
        <>
            <Banner />
            {/* { */}
                {/* // authstore.isAuth ? <OrderSummary/> : <EmptyCart/> */}
            {/* } */}
            <OrderSummary/>
        </>
    )
}

export default Cart
