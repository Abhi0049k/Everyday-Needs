import { FC } from "react";
import { dropdownI } from "./dropdownInterface";

const HomeOffice: FC<dropdownI> = ({handleDropIn, handleDropOut}) => {
    return (
        <>
            <div className="absolute bg-white flex z-10 justify-between leading-8 border-b" onMouseEnter={()=> handleDropIn("homeOffice")} onMouseLeave={handleDropOut}>
                <div className="px-[25px] py-[30px] w-1/6 border-r cursor-pointer">
                    <h4 className="text-lg font-semibold mb-2">STANDS</h4>
                    <p className="hover:underline text-lg">Watch</p>
                    <p className="hover:underline text-lg">Laptop</p>
                    <p className="hover:underline text-lg">Mobile</p>
                    <p className="hover:underline text-lg">MagSafe</p>
                    <p className="hover:underline text-lg">iPad</p>
                    <p className="hover:underline text-lg">Monitor</p>
                </div>
                <div className="px-[25px] py-[30px] w-1/6 border-r cursor-pointer">
                    <h4 className="text-lg font-semibold mb-2">ORGANISERS</h4>
                    <p className="hover:underline text-lg">Tech Kit</p>
                    <p className="hover:underline text-lg">Cable Organisers</p>
                    <p className="hover:underline text-lg">Pouches</p>
                    <p className="hover:underline text-lg">Folio</p>
                    <p className="hover:underline text-lg">Planner</p>
                </div>
                <div className="px-[25px] py-[30px] w-1/6 border-r cursor-pointer">
                    <h4 className="text-lg font-semibold mb-2">DESKS</h4>
                    <p className="hover:underline text-lg">Platform Collection</p>
                    <p className="hover:underline text-lg">Desk Mat</p>
                    <p className="hover:underline text-lg">Mouse Pad</p>
                    <p className="hover:underline text-lg">Trays & coasters</p>
                </div>
                <div className="px-[25px] py-[30px] w-1/6 cursor-pointer">
                    <h4 className="text-lg font-semibold leading-[50px]">STATIONARY</h4>
                    <h4 className="text-lg font-semibold leading-[50px]">DRINKWARE</h4>
                    <h4 className="text-lg font-semibold leading-[50px]">CHARGING SOLUTIONS</h4>
                </div>
                <img src="https://images.dailyobjects.com/marche/assets/images/other/home-office-update-stationary-dropdown-up.png?tr=cm-pad_resize,v-2,w-1000,w-259,h-380,dpr-1" alt="img" className="w-1/4 object-cover" />
            </div>
        </>
    )
}

export default HomeOffice