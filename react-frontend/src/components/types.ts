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
