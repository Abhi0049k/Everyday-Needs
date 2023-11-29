export interface imageC{
    img : string;
    to : string;
}

export interface CategoriesI{
    img: string;
    title: string;
    avail?: string;
}

export interface CategoryComponentI{
    heading: string;
    msg: string;
    products: Array<CategoriesI>
}

export interface productI{
    _id: string;
    title: string;
    price: number;
    category: string;
    offer: string;
    img: Array<string>;
    deleteValue: number;
    type: string;
}
