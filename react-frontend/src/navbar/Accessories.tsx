import { FC } from "react";
import { dropdownI } from "./dropdownInterface";

const Accessories: FC<dropdownI> = ({handleDropIn, handleDropOut}) => {
    return (
        <>
            <div className="bg-white z-10 absolute flex justify-between leading-8 border-b" onMouseEnter={()=>handleDropIn("accessories")} onMouseLeave={handleDropOut}>
                <div className="p-5 border-r cursor-pointer w-1/5">
                    <h4 className="text-lg font-semibold mb-[12px]">WATCH ACCESSORIES</h4>
                    <p className="hover:underline text-lg">Apple Watchbands</p>
                    <p className="hover:underline text-lg">Universal Watchbands</p>
                    <p className="hover:underline text-lg">Apple Watch Cases</p>
                    <p className="hover:underline text-lg">Apple Watch Stands</p>
                </div>
                <div className="border-r cursor-pointer p-5 w-1/5">
                    <h4 className="text-lg font-semibold mb-[12px]">SCREEN GUARD</h4>
                    <p className="hover:underline text-lg">For Phone</p>
                    <p className="hover:underline text-lg">For Apple Watch</p>
                    <p className="hover:underline text-lg">For Macbook</p>
                    <p className="hover:underline text-lg">For iPad</p>
                </div>
                <div className="border-r cursor-pointer p-5 w-1/5">
                    <h4 className="text-lg font-semibold mb-[12px]">STANDS</h4>
                    <p className="hover:underline text-lg">For Apple Watch</p>
                    <p className="hover:underline text-lg">For Mobile</p>
                    <p className="hover:underline text-lg">For iPad</p>
                    <p className="hover:underline text-lg">For Laptop</p>
                    <p className="hover:underline text-lg">For MagSafe</p>
                    <p className="hover:underline text-lg">For Monitor</p>
                </div>
                <div className="border-r cursor-pointer p-5 w-1/5">
                    <h4 className="text-lg font-bold mb-[12px]">CHARGING SOLUTIONS</h4>
                    <p className="hover:underline text-lg">Charging Stations</p>
                    <p className="hover:underline text-lg">Chargers and Cables</p>
                    <p className="hover:underline text-lg">Wireless Chargers</p>
                </div>
                <div className="text-md p-5 leading-10 font-bold w-1/5">
                    <h4>ORGANISERS</h4>
                    <h4>PHONE WALLET</h4>
                    <h4>KEYCHAIN</h4>
                    <h4>DRINKWARE</h4>
                    <h4>MASKS</h4>
                </div>
                <img src="https://images.dailyobjects.com/marche/assets/images/other/accessories-update-1.jpg?tr=cm-pad_crop,v-2,w-1000,w-199,h-380,dpr-1"
                    alt="img" className="object-cover w-1/5" />
            </div>
        </>
    )
}

export default Accessories
