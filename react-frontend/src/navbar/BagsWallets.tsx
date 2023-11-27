import { FC } from "react";
import { dropdownI } from "./dropdownInterface";

const BagsWallets: FC<dropdownI> = ({handleDropIn, handleDropOut}) => {
    return (
        <>
            <div className="absolute flex justify-between leading-8 border-b w-full bg-white" onMouseEnter={()=>handleDropIn("bagsWallet")} onMouseLeave={handleDropOut}>
                <div className="px-[25px] py-[30px] border-r cursor-pointer w-1/6">
                    <h4 className="text-lg font-bold mb-2">WALLETS</h4>
                    <p className="hover:underline text-lg">Women's Wallets</p>
                    <p className="hover:underline text-lg">Card Wallets</p>
                    <p className="hover:underline text-lg">Men's Wallet</p>
                    <p className="hover:underline text-lg">Bi-Fold Wallets</p>
                </div>
                <div className="px-[25px] py-[30px] border-r cursor-pointer w-1/6">
                    <h4 className="text-lg font-bold mb-2">CROSSBODY BAG</h4>
                    <p className="hover:underline text-lg">Tarp</p>
                    <p className="hover:underline text-lg">Box</p>
                    <p className="hover:underline text-lg">Scout</p>
                    <p className="hover:underline text-lg">Trapeze</p>
                    <p className="hover:underline text-lg">Orbis</p>
                    <p className="hover:underline text-lg">Tallboi</p>
                    <p className="hover:underline text-lg">Arch</p>
                    <p className="hover:underline text-lg">Shuttle Phone</p>
                    <p className="hover:underline text-lg">08:01</p>
                </div>
                <div className="px-[25px] py-[30px] border-r cursor-pointer w-1/6">
                    <h4 className="text-lg font-bold mb-2">TOTE BAG</h4>
                    <p className="hover:underline text-lg">Tarp</p>
                    <p className="hover:underline text-lg">Buoyant</p>
                    <p className="hover:underline text-lg">Classic</p>
                    <p className="hover:underline text-lg">Fatty</p>
                    <p className="hover:underline text-lg">08:01</p>
                </div>
                <div className="px-[25px] py-[30px] cursor-pointer w-1/6">
                    <h4 className="text-lg font-bold leading-[50px]">MESSENGER BAG</h4>
                    <h4 className="text-lg font-bold leading-[50px]">BACKPACKS</h4>
                    <h4 className="text-lg font-bold leading-[50px]">DUFFLE BAGS</h4>
                    <h4 className="text-lg font-bold leading-[50px]">POUCHES</h4>
                </div>
                <img src="https://images.dailyobjects.com/marche/assets/images/other/bags-and-wallets-dropdown-update-4.jpg?tr=cm-pad_crop,v-2,w-1000,w-259,h-380,dpr-1" alt="img" className="w-1/4 object-cover"/>
            </div>
        </>
    )
}

export default BagsWallets
