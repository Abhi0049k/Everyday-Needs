import { ReactNode, SetStateAction } from "react";

export interface imageC {
    img: string;
    to: string;
}

export interface CategoriesI {
    img: string;
    title: string;
    avail?: string;
}

export interface CategoryComponentI {
    heading: string;
    msg: string;
    products: Array<CategoriesI>
}

export interface productDetailsI {
    _id?: string;
    title?: string;
    price?: number;
    offer?: string;
    deleteValue?: number;
}
export interface productI extends productDetailsI {
    type?: string;
    img: Array<string>;
    category?: string;
}

export interface AuthI {
    isAuth: boolean;
    isError: boolean;
    isLoading: boolean;
    errorMessage?: string;
    token?: string;
}

export interface ActionI {
    type: string;
    payload: string;
}

export interface storeI{
    authReducer: {
        isAuth: boolean;
        isError: boolean;
        isLoading: boolean;
        errorMessage: string;
        token: string;
    };
}

export interface HandleAddtoCart {
    handleAddtoCart: (id: string)=>void;
}


export interface ProductDetailPropsI extends productDetailsI, HandleAddtoCart {};

export interface LayoutProps {
    children: ReactNode;
}

export interface loginI{
    email: string;
    password: string;
}

export interface registerI extends loginI{
    name: string;
}

export interface loginPageI {
    isAuth: boolean;
    isError: boolean;
    errorMessage: string;
    isLoading: boolean;
}

export interface loginResponseI{
    msg: string;
    token?: string;
}

export interface credI{
    name?: string;
    email?: string;
    password?: string;
}

export interface HandleChange{
    handleChange: (evnt: React.ChangeEvent<HTMLInputElement>)=> void
}

export interface ChangeI{
    setChange: React.Dispatch<SetStateAction<number>>;
}

export interface OrderI{
    token: string;
}

/**
 * discount: number;
 * img: string;
 * price: number;
 * productId: string;
 * qty: number;
 * status: string;
 * title: string;
 * userId: string;
 * _v: number;
 * _id: string;
 */

export interface bookedOrderI{
    img: string;
    price: number;
    qty: number;
    title: string;
    discount?: number;
    productId?: string;
    status?: string;
    userId?: string;
    _v?: string;
    _id?: string;
}
