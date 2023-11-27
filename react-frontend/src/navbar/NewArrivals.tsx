import { FC } from "react";
import { Link } from "react-router-dom";
import { dropdownI } from "./dropdownInterface";

const NewArrivals: FC<dropdownI> = ({handleDropIn, handleDropOut}) => {
    return (
        <>
            <div id="newArrivals" className="bg-white absolute flex justify-between w-full border-b" onMouseEnter={()=> handleDropIn("newArrival")} onMouseLeave={handleDropOut}>
                <div className="p-[34px] border-r w-1/5">
                    <h4 className="mb-[20px] font-semibold text-lg">NEW ARRIVALS</h4>
                    <div>
                        <ul>
                            <li className="leading-7 text-lg"><Link to={"/"} className="hover:underline">Desks</Link></li>
                            <li className="leading-7 text-lg"><Link to={"/"} className="hover:underline">Charging Solutions</Link></li>
                            <li className="leading-7 text-lg"><Link to={"/"} className="hover:underline">Collections</Link></li>
                            <li className="leading-7 text-lg"><Link to={"/"} className="hover:underline">Macbook Sleeves</Link></li>
                            <li className="leading-7 text-lg"><Link to={"/"} className="hover:underline">Messenger Bags</Link></li>
                            <li className="leading-7 text-lg"><Link to={"/"} className="hover:underline">Eyewear Cases</Link></li>
                            <li className="leading-7 text-lg"><Link to={"/"} className="hover:underline">Watchbands</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="p-[34px] flex justify-around w-4/5 border-r">
                    <Link to={"/"}>
                        <img src="https://images.dailyobjects.com/marche/assets/images/other/recess-collection-dropdown-image-for-new-arrival.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1" alt="img" className="h-[275px] w-[275px]" />
                    </Link>
                    <Link to={"/"}>
                        <img src="https://images.dailyobjects.com/marche/assets/images/other/planner-dropdown-image-for-new-arrival-2-new.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1" className="h-[275px] w-[275px]"
                            alt="img" />
                    </Link>
                    <Link to={"/"}>
                        <img src="https://images.dailyobjects.com/marche/colllectionPage/desk/desk-collection-new-arrival-homepage-carousal.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1" className="h-[275px] w-[275px]"
                            alt="img" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NewArrivals