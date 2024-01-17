import { FC } from "react";
import { CategoriesI, CategoryComponentI } from "./types";


const CategoryGeneric: FC<CategoryComponentI> = ({ heading, msg, products }) => {
    return (
        <>
            <div className="flex w-full lg:flex-row flex-col">
                <div className="w-full lg:w-[30%] pt-4 lg:pt-[140px] pl-[50px] box-border mr-[30px]">
                    <h1 className="text-2xl font-bold">{heading}</h1>
                    <p className="text-xl">{msg}</p>
                </div>
                <div className="flex gap-5 lg:w-[70%] overflow-auto p-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                    {
                        products.map((el: CategoriesI, i: number) => (
                            <div key={i} className="min-w-[296px]">
                                <img src={el.img} alt="img" />
                                <p className="text-sm text-gray-500">{el.avail}</p>
                                <p className="text-lg">{el.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CategoryGeneric;
