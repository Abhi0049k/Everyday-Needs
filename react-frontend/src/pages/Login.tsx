import { FC, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginI, loginResponseI, storeI } from "../components/types";
import { useDispatch, useSelector } from "react-redux";
import axios, { AxiosResponse } from "axios";
const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL

const Login: FC = () => {
    const [cred, setCred] = useState<loginI>({ email: '', password: '' });
    const storedToken : string | null = sessionStorage.getItem('token');
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    if(storedToken) dispatch({ type: 'LOGIN_SUCCESS', payload: storedToken });

    const { isAuth, isLoading, isError, errorMessage } = useSelector((store: storeI) => ({
        isAuth: store.authReducer.isAuth,
        isError: store.authReducer.isError,
        isLoading: store.authReducer.isLoading,
        errorMessage: store.authReducer.errorMessage,
    }));

    const handleChange = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        setCred({ ...cred, [evnt.target.name]: evnt.target.value })
    }

    const handleSubmit = (evnt: React.FormEvent<HTMLFormElement>) => {
        evnt.preventDefault();
        loginFn();
    }

    const loginFn = async () => {
        try {
            dispatch({ type: 'REQUEST' })
            let res: AxiosResponse<loginResponseI> = await axios.post(`${backendServerUrl}users/login`, cred)
            const token: string | undefined = res?.data?.token
            if (token) {
                sessionStorage.setItem("token", token);
                dispatch({ type: 'LOGIN_SUCCESS', payload: token });
                location.state ? navigate(location.state) : navigate("/")
            }
        } catch (err) {
            if (axios.isAxiosError<loginResponseI>(err)) {
                const { response } = err;
                if (response) {
                    dispatch({ type: 'FAILURE', payload: response.data.msg });
                } else {
                    dispatch({ type: 'FAILURE', payload: err });
                }
            } else {
                dispatch({ type: 'FAILURE', payload: 'An unexpected error occurred' });
            }
        }
    }

    useEffect(() => {
        document.title = "Login | Everyday Needs";
        isAuth ? location.state ? navigate(location.state) : navigate("/") : ""
    }, []);

    const buttonText = isError
        ? errorMessage
        : isLoading
            ? "Logging...."
            : !isLoading && isAuth
                ? "Logged In"
                : "Login";

    const buttonBgColor = isError ? "#e52730" : "#20a87e"

    return (
        <>
            <div className="flex flex-row w-full h-screen justify-center items-center">
                <img src="/Everyday needs-logos_black.png" alt="bgimg" className="w-full absolute z-[-10] drop-shadow-lg" />
                <div className="p-7 flex flex-col shadow-xl w-96 rounded-lg bg-opacity-50 bg-gray-100">
                    <h1 className="text-4xl font-semibold">Login</h1>
                    <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="email"
                            value={cred.email}
                            placeholder="Enter your email"
                            onChange={handleChange}
                            autoComplete="current-email"
                            className="w-full h-12 outline-none border-b text-base pl-4 rounded-lg border"
                        />
                        <input
                            type="password"
                            name="password"
                            value={cred.password}
                            placeholder="Enter your password"
                            onChange={handleChange}
                            autoComplete="current-password"
                            className="w-full h-12 outline-none border-b text-base pl-4 rounded-lg border"
                        />
                        <Link to={'#'} className="text-blue-600 flex justify-end hover:underline">Forgot Password?</Link>
                        <input
                            type="submit"
                            value={buttonText}
                            className={`text-center bg-[${buttonBgColor}] hover:bg-[#178e68] w-full h-12 border-none outline-none border-b text-xl rounded-lg text-white cursor-pointer`}
                        />
                        <span className="border-b"></span>
                        <button className="flex justify-center border rounded-lg items-center text-xl text-gray-700 font-semibold p-1 gap-1 hover:bg-gray-200">
                            <img className="w-8" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" /> Google
                        </button>
                        <p className="text-lg text-center">Don't have an account? <Link to={"/register"} className="hover:underline text-blue-600">Register</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login
