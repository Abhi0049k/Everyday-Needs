import { FC, useState } from "react";
import Banner from "../components/Banner";
import OrderSummary from "../components/OrderSummary";
import EmptyCart from "../components/EmptyCart";

const Cart: FC = () => {
    const [empty, setEmpty] = useState<boolean>(false);
    return (
        <>
            <Banner />
            {
                empty ? <EmptyCart/> : <OrderSummary setEmpty={setEmpty}/>
            }
        </>
    )
}

export default Cart
