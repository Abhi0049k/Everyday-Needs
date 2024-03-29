import { FC, useEffect, useState } from "react"
import { credI, storeI } from "../components/types"
import PersonalInfo from "../components/PersonalInfo"
import { useDispatch, useSelector } from "react-redux"
import Order from "../components/Order"
import axios, { AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom"
const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL

const UserDashboard: FC = () => {
    const [cred, setCred] = useState<credI>({ name: "", email: "" })
    const navigate = useNavigate();
    const [section, setSection] = useState<"personInfo" | "orders" | "">("")
    const dispatch = useDispatch();
    const authstore = useSelector((store: storeI): { isAuth: boolean; token: string; } => ({ isAuth: store.authReducer.isAuth, token: store.authReducer.token }));
    const [change, setChange] = useState<number>(0);

    const handleLogout = async () => {
        try {
            dispatch({ type: 'REQUEST' });
            const res: AxiosResponse = await axios.get(`${backendServerUrl}users/logout`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authstore.token}`
                }
            })
            console.log(res);
            dispatch({ type: 'LOGOUT_SUCCESS' })
            navigate("");
        } catch (err) {
            console.log(err);
            dispatch({ type: 'FAILURE', payload: 'Something went wrong!!!' })
        }
    }

    useEffect(() => {
        document.title = 'User Dashboard'
        getDetails();
    }, [change])

    console.log(cred);

    const getDetails = async () => {
        try {
            const res: AxiosResponse = await axios.get(`${backendServerUrl}users/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authstore.token}`
                }
            })
            console.log(res);
            setCred(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            {
                authstore.isAuth ?
                    (<div className="flex flex-col justify-center items-center gap-6 my-6 mx-auto">
                        <h1 className="text-4xl font-bold">My Account</h1>
                        <div className="flex md:flex-row flex-col md:h-[77vh] w-[98%] border-t">
                            <div className="px-2 py-4 md:px-9 md:py-16 w-full md:w-[28%] flex flex-col">
                                <div className="mb-6">
                                    <p className="text-lg md:text-2xl"><span className="font-bold text-[#20a87e]">|</span> EVERYDAY NEEDS USER</p>
                                    <p className="text-lg md:text-2xl">{cred.name}</p>
                                </div>
                                <ul className="text-lg md:text-2xl flex md:flex-col gap-4">
                                    <li className="mb-[12px] hover:bg-slate-200 cursor-pointer border-b h-12 md:h-16 flex justify-between items-center pr-[14px]" onClick={() => setSection("personInfo")}>Personal Info <i className="fa-solid fa-angles-right"></i></li>
                                    <li className="mb-[12px] hover:bg-slate-200 cursor-pointer border-b h-12 md:h-16 flex justify-between items-center pr-[14px]" onClick={() => setSection("orders")}>My Orders <i className="fa-solid fa-angles-right"></i></li>
                                    <li className="mb-[12px] hover:bg-slate-200 cursor-pointer border-b h-12 md:h-16 flex justify-between items-center pr-[14px]" onClick={handleLogout}>Logout <i className="fa-solid fa-angles-right" ></i></li>
                                </ul>
                            </div>
                            <div className="md:py-12 md:px-9 w-full md:w-[72%] flex justify-center items-center md:border-l">
                                {
                                    (section === "personInfo")
                                        ? <PersonalInfo name={cred.name} email={cred.email} setChange={setChange} token={authstore.token} />
                                        : (section === "orders")
                                            ? <Order token={authstore.token} /> : ""
                                }
                            </div>
                        </div>
                    </div>) : (
                        <div className="h-full w-full flex justify-center items-center"><h1 className="text-2xl text-[#20a87e]">You are not Authorized.</h1></div>
                    )
            }
        </>
    )
}

export default UserDashboard
