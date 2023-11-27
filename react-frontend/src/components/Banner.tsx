import { FC } from "react";

const Banner: FC = () => {
    return (
        <>
            <div className="m-2 h-56 flex">
                <div className="bg-[#3fbb2c] pl-8 pt-8 w-1/3">
                    <h1 className="text-[60px] mb-2">UPTO 70% OFF</h1>
                    <h1 className="text-[46px]">NEW YEAR SALE</h1>
                </div>
                <div className="bg-[#ceeaf2] w-2/3 p-8">
                    <div className="mb-3">
                        <h1 className="text-4xl">FREE <i className="fa-solid fa-arrow-right-long"></i></h1>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl">
                            DUFFLE BAGS WORTH &#x20B9;2999 ON ORDERS ABOVE &#x20B9;2499
                        </h1>
                        <div className="border border-slate-600 w-2/3"></div>
                        <h1 className="text-4xl">BI-FOLD WALLET WORTH &#x20B9;1999 ON ORDERS ABOVE &#x20B9; 1999</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
