import { FC } from "react";
import { Link } from "react-router-dom";
import { dropdownI } from "./dropdownInterface";

const CasesSleeves: FC<dropdownI> = ({handleDropIn, handleDropOut}) => {
    return (
        <>
            <div id="casesSleeves" className="flex absolute z-10 border-b bg-white" onMouseEnter={()=>handleDropIn("casesSleeves")} onMouseLeave={handleDropOut}>
                <div className="p-6 w-3/6 border-r">
                    <h4 className="text-xl font-bold mb-[12px]">
                        CASES
                    </h4>
                    <div className="flex leading-6 justify-between">
                        <div>
                            <h5 className="text-lg font-semibold mb-2">APPLE</h5>
                            <p className="hover:underline text-lg">iPhone 13</p>
                            <p className="hover:underline text-lg">iPhone 14</p>
                            <p className="hover:underline text-lg">iPhone 14 Pro Max...</p>
                            <p className="hover:underline text-lg">iPhone 14 Pro</p>
                            <p className="hover:underline text-lg">iPhone 14 Plus</p>
                            <p className="hover:underline text-lg">iPhone 12</p>
                            <p className="hover:underline text-lg">iPhone 13 Pro</p>
                            <p className="hover:underline text-lg">iPhone 11</p>
                            <p className="hover:underline text-lg">iPhone 13 Pro Max</p>
                            <p className="hover:underline text-lg">iPhone XR</p>
                            <p className="hover:underline text-lg">iPhone 12 Pro Max</p>
                            <p className="hover:underline text-lg">iPhone 12 Pro</p>
                            <p className="hover:underline text-lg">iPhone 12 Mini</p>
                            <p className="hover:underline text-lg">iPhone 11 Pro</p>
                            <p className="hover:underline text-lg">iPhone 11 Pro Max</p>
                            <p className="hover:underline text-lg">iPhone X</p>
                            <Link to={""}>View All Models+</Link>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-2">SAMSUNG</h5>
                            <p className="hover:underline text-lg">Galaxy A53</p>
                            <p className="hover:underline text-lg">Galaxy A33</p>
                            <p className="hover:underline text-lg">Galaxy S22 Ultra</p>
                            <p className="hover:underline text-lg">Galaxy Z Fold 3</p>
                            <p className="hover:underline text-lg">Galaxy S20 FE</p>
                            <p className="hover:underline text-lg">Galaxy S21 Ultra</p>
                            <p className="hover:underline text-lg">Galaxy S21</p>
                            <p className="hover:underline text-lg">Galaxy S21 FE</p>
                            <p className="hover:underline text-lg">Galaxy S21 Plus</p>
                            <p className="hover:underline text-lg">Galaxy S20 Plus</p>
                            <p className="hover:underline text-lg">Galaxy Z Flip 3</p>
                            <p className="hover:underline text-lg">Galaxy S22</p>
                            <p className="hover:underline text-lg">Galaxy A52</p>
                            <p className="hover:underline text-lg">Galaxy Note 10 Plus</p>
                            <p className="hover:underline text-lg">Galaxy A51</p>
                            <p className="hover:underline text-lg">Galaxy Note 20 Ultra</p>
                            <Link to={""}>View All Models+</Link>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-2">ONEPLUS</h5>
                            <p className="hover:underline text-lg">OnePlus 10R</p>
                            <p className="hover:underline text-lg">OnePlus Nord</p>
                            <p className="hover:underline text-lg">One Plus 9R</p>
                            <p className="hover:underline text-lg">OnePlus 9</p>
                            <p className="hover:underline text-lg">OnePlus 8T</p>
                            <p className="hover:underline text-lg">OnePlus 9RT</p>
                            <p className="hover:underline text-lg">OnePlus 10 Pro</p>
                            <p className="hover:underline text-lg">OnePlus 7</p>
                            <p className="hover:underline text-lg">OnePlus 9 Pro</p>
                            <p className="hover:underline text-lg">OnePlus 7T</p>
                            <p className="hover:underline text-lg">OnePlus Nord CE</p>
                            <p className="hover:underline text-lg">OnePlus 8</p>
                            <p className="hover:underline text-lg">OnePlus Nord 2</p>
                            <p className="hover:underline text-lg">OnePlus 7 Pro</p>
                            <Link to={""}>View All Models+</Link>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-2">OTHER BRANDS</h5>
                            <p className="hover:underline text-lg">Nothing</p>
                            <p className="hover:underline text-lg">Xiaomi</p>
                            <p className="hover:underline text-lg">Oppo</p>
                            <p className="hover:underline text-lg">Google</p>
                            <p className="hover:underline text-lg">Motorola</p>
                            <p className="hover:underline text-lg">Vivo</p>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-2">IPAD</h5>
                            <p className="hover:underline text-lg">iPad Pro 11 2021</p>
                            <p className="hover:underline text-lg">iPad Air 4 10.9</p>
                            <p className="hover:underline text-lg">iPad 9 10.2</p>
                            <p className="hover:underline text-lg">iPad 7 10.2</p>
                            <p className="hover:underline text-lg">iPad 8 10.2</p>
                            <p className="hover:underline text-lg">iPad Mini 6</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/4 flex justify-between">
                    <div className="leading-[50px] pt-6 pl-5 w-1/3">
                        <h5 className="font-semibold">LAPTOP/MACBOOK SLEEVES</h5>
                        <h5 className="font-semibold">AIRPOD CASES</h5>
                        <h5 className="font-semibold">MESSENGER BAGS</h5>
                        <h5 className="font-semibold">iPAD COVERS & SLEEVES</h5>
                        <h5 className="font-semibold">PASSPORT COVERS</h5>
                        <h5 className="font-semibold">EYEWEAR CASES</h5>
                        <h5 className="font-semibold">AIRTAG CASES</h5>
                        <h5 className="font-semibold">APPLE TV REMOTE CASES</h5>
                    </div>
                    <img src="https://images.dailyobjects.com/marche/assets/images/other/airpods-cases-sleeves-page-dropdown-image.jpg?tr=cm-pad_crop,v-2,w-1000,w-166,h-653,dpr-1" className="object-cover h-full w-2/3" alt="img" />
                </div>
            </div>
        </>
    )
}

export default CasesSleeves
