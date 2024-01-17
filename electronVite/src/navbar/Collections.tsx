import { FC } from "react";
import { dropdownI } from "./dropdownInterface";

const Collections: FC<dropdownI> = ({handleDropIn, handleDropOut}) => {
    return (
        <>
            <div className="absolute bg-white flex z-10 justify-between leading-8 border-b" onMouseEnter={()=>handleDropIn("collection")} onMouseLeave={handleDropOut}>
                <div className="px-[25px] py-[30px] border-r cursor-pointer w-1/6">
                    <h4 className="text-lg font-semibold mb-2">COLLECTION</h4>
                    <p className="hover:underline text-lg">Recess Collection</p>
                    <p className="hover:underline text-lg">Platform Collection</p>
                    <p className="hover:underline text-lg">Tarp Collection</p>
                    <p className="hover:underline text-lg">Claymen Collection</p>
                    <p className="hover:underline text-lg">Fleet Collection</p>
                    <p className="hover:underline text-lg">08:01 Collection</p>
                    <p className="hover:underline text-lg">Wallet Collection</p>
                    <p className="hover:underline text-lg">Couleur Collection</p>
                </div>
                <div className="px-[25px] py-[30px] border-r cursor-pointer w-1/6">
                    <h4 className="text-lg font-semibold mb-2">STUDIO</h4>
                    <p className="hover:underline text-lg">Tarot Collection</p>
                    <p className="hover:underline text-lg">DreamScape Collection</p>
                    <p className="hover:underline text-lg">Mela Collection</p>
                    <p className="hover:underline text-lg">ArcadePxl Collection</p>
                    <p className="hover:underline text-lg">Zodiac Collection</p>
                    <p className="hover:underline text-lg">Misfit Millennials Collection</p>
                    <p className="hover:underline text-lg">Skateboard Subculture Collection</p>
                </div>
                <div className="px-[25px] py-[30px] border-r cursor-pointer w-1/6">
                    <h4 className="text-lg font-semibold mb-2">COLLABORATIONS</h4>
                    <p className="hover:underline text-lg">Everyday Needs x Smartsters</p>
                </div>
                <img src="https://images.dailyobjects.com/marche/assets/images/homepage/desktop/new-collection-dropdown-desktop-update-2.jpg?tr=cm-pad_crop,v-2,w-1000,w-149,h-380,dpr-1" alt="img" className="w-2/4"/>
            </div>
        </>
    )
}

export default Collections
