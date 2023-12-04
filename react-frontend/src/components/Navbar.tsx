import { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NewArrivals from "../navbar/NewArrivals";
import CasesSleeves from "../navbar/CasesSleeves";
import Accessories from "../navbar/Accessories";
import BagsWallets from "../navbar/BagsWallets";
import HomeOffice from "../navbar/HomeOffice";
import Collections from "../navbar/Collections";
import { useSelector } from "react-redux";
import { storeI } from "./types";

const Navbar: FC = () => {
    const [dropdownContext, setDropdownContext] = useState<string>('')
    const location = useLocation();
    const isAuth: boolean = useSelector((store: storeI): boolean => store.authReducer.isAuth)
    const handleDropIn = (context: string) => {
        setDropdownContext(context);
    }

    const handleDropOut = () => {
        setDropdownContext('');
    }
    return (
        <>
            <nav className="border flex lg:justify-around items-center h-20">
                <Link to={"/"} className="h-full lg:w-fit w-full flex justify-center">
                    <img src="/Everyday needs-logos_black.png" alt="Brand Logo" className="h-full" />
                </Link>
                <div id="pages" className="px-4 h-full lg:flex lg:justify-center lg:items-center lg:gap-4 hidden text-base font-medium">
                    <Link className="h-full flex items-center font-bold hover:text-[#20a87e]" to="#" onMouseLeave={handleDropOut} onMouseEnter={() => handleDropIn("newArrival")}>NEW ARRIVALS</Link>
                    <Link className="h-full flex items-center font-bold hover:text-[#20a87e]" to="#" onMouseLeave={handleDropOut} onMouseEnter={() => handleDropIn("casesSleeves")}>CASES & SLEEVES</Link>
                    <Link className="h-full flex items-center font-bold hover:text-[#20a87e]" to="#" onMouseLeave={handleDropOut} onMouseEnter={() => handleDropIn("accessories")}>ACCESSORIES</Link>
                    <Link className="h-full flex items-center font-bold hover:text-[#20a87e]" to="#">SALE</Link>
                    <Link className="h-full flex items-center font-bold hover:text-[#20a87e]" to="#" onMouseLeave={handleDropOut} onMouseEnter={() => handleDropIn("bagsWallet")}>BAGS & WALLETS</Link>
                    <Link className="h-full flex items-center font-bold hover:text-[#20a87e]" to="#" onMouseLeave={handleDropOut} onMouseEnter={() => handleDropIn("homeOffice")}>HOME OFFICE</Link>
                    <Link className="h-full flex items-center font-bold hover:text-[#20a87e]" to="#" onMouseLeave={handleDropOut} onMouseEnter={() => handleDropIn("collection")}>COLLECTION</Link>
                </div>
                <div className="h-full md:px-4 flex items-center justify-evenly gap-6">
                    <Link to={"/cart"}>
                        <i className="fa-solid fa-bag-shopping text-2xl"></i>
                    </Link>
                    <Link to={isAuth ? "/userdashboard" : "/login"} state={location}>
                        <i className="fa-solid fa-user text-2xl"></i>
                    </Link>
                    <Link to={"/products"}>
                        <i className="fa-solid fa-magnifying-glass text-2xl"></i>
                    </Link>
                </div>
            </nav>
            {
                dropdownContext === 'newArrival' ? <NewArrivals handleDropIn={handleDropIn} handleDropOut={handleDropOut} />
                    : dropdownContext === 'casesSleeves' ? <CasesSleeves handleDropIn={handleDropIn} handleDropOut={handleDropOut} />
                        : dropdownContext === 'accessories' ? <Accessories handleDropIn={handleDropIn} handleDropOut={handleDropOut} />
                            : dropdownContext === 'bagsWallet' ? <BagsWallets handleDropIn={handleDropIn} handleDropOut={handleDropOut} />
                                : dropdownContext === 'homeOffice' ? <HomeOffice handleDropIn={handleDropIn} handleDropOut={handleDropOut} />
                                    : dropdownContext === 'collection' ? <Collections handleDropIn={handleDropIn} handleDropOut={handleDropOut} />
                                        : null
            }
        </>
    )
}

export default Navbar
