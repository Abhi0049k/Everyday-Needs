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