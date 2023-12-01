import { FC, useEffect, useState } from "react";
import { productI, storeI } from "../components/types";
import axios, { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import { useSelector } from "react-redux";

const Product: FC = () => {
    const [el, setEl] = useState<productI>();
    const [index, setIndex] = useState<number>(0);
    const authstore = useSelector((store: storeI):{isAuth: boolean; token: string;}=>( {isAuth: store.authReducer.isAuth, token: store.authReducer.token}));
    console.log(authstore);
    const { id } = useParams();
    useEffect(() => {
        getProductDetails()
        document.title = el?.title || 'Product'
    }, [])

    const handleAddtoCart = (id: string | undefined)=>{
        if(!authstore.isAuth){
            return alert('Please login to add the product to your cart.');
        }
        addToCart(id!);
    }

    const addToCart = async (id: string) =>{
        try{
            const res: AxiosResponse = await axios.post('http://localhost:8998/orders/placeOrder', {productId: id}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authstore.token}`
                }
            })
            console.log(res);
            alert('Product Added')
        }catch(err){
            console.log('Something went wrong');
            console.log(err);
        }
    }

    const getProductDetails = async () => {
        const product: AxiosResponse<productI> = await axios.get(`http://localhost:8998/products/${id}`)
        setEl(product.data);
    }

    const handleNxtImg = () => {
        const len: number | undefined = el?.img?.length
        if (len)
            setIndex((prev) => (prev + 1) % len)
    }

    const handlePrvImg = () => {
        const len: number | undefined = el?.img?.length
        if (len)
            setIndex((prev) => (Math.abs(prev - 1)) % len);
    }
    return (
        <>
            <div className="flex lg:flex-row flex-col lg:h-[88vh]">
                <div className="lg:w-[50%] w-full h-[88vh]">
                    <button className="absolute bg-gray-50 h-[50px] w-[50px] md:top-[360px] lg:top-[400px] top-[318px] p-3 border" onClick={handlePrvImg}>
                        <i className="fa-sharp fa-solid fa-angle-left"></i>
                    </button>
                    <img src={el?.img[index]} alt="" className="w-full h-full object-cover" />
                    <button className="absolute bg-gray-50 h-[50px] w-[50px] md:top-[360px] lg:top-[400px] top-[318px] right-[4px] lg:right-[50%] transform md-translate-x-1/2 p-3 border" onClick={handleNxtImg}>
                        <i className="fa-sharp fa-solid fa-angle-right"></i>
                    </button>
                </div>
                <ProductDetails {...el} handleAddtoCart={handleAddtoCart} />
            </div>
        </>
    )
}

export default Product
