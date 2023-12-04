import { FC, useEffect, useState } from "react";
import { productI } from "../components/types";
import axios, { AxiosResponse } from "axios";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL

const ProductListing : FC = ()=>{
    let [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category");
    const url = (category && category!=="all") ? `${backendServerUrl}products/all?category=${category}` : `${backendServerUrl}products/all`;
    if(!category || category==='all'){
        setSearchParams({category: "all"});
        document.title = "Products List"
    } else{
        document.title = `Products: ${category.toUpperCase()}`
    }
    const [products, setProducts] = useState<Array<productI>>([])
    useEffect(()=>{
        getProducts().then((res: productI[])=>{
            setProducts(res);
        });
    }, [])

    const getProducts = async()=>{
        const productList: AxiosResponse<productI[]>  = await axios.get(url)
        return productList.data
    }

    return (
        <>
        <div className="bg-gray-100 text-center py-5">
            <input type="text" placeholder="Search" className="outline-none h-14 pl-3 w-4/5 md:w-3/5 lg:w-2/5"/>
        </div>
        <div className="flex flex-wrap justify-center gap-4 bg-gray-100 py-8">
            {
                products.map((el, i)=> <ProductCard key={i} {...el}/>)
            }
        </div>
        </>
    )
}

export default ProductListing;
