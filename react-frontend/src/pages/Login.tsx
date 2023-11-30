import { FC, useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { loginI, loginResponseI, storeI } from "../components/types";
import { useDispatch, useSelector } from "react-redux";
import axios, { AxiosError, AxiosResponse } from "axios";

const Login: FC = () => {
    const [cred, setCred] = useState<loginI>({ email: '', password: '' });

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
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
            dispatch({ type: 'LOGIN_REQUEST' })
            let res: AxiosResponse<loginResponseI> = await axios.post('http://localhost:8998/users/login', cred)
            console.log(res);
            // dispatch({ type: 'LOGIN_SUCCESS', payload: res?.response?.data?.token});
            navigate(location.state);
        } catch (err) {
            console.log(err, err.data);
            // console.log((err as AxiosError)?.response?.data?.msg);
            // dispatch({ type: 'LOGIN_FAILURE', payload: (err as AxiosError)?.response?.data?.msg });
        }
    }

    useEffect(() => {
        document.title = 'Login | Everyday Needs';
    }, []);

    const buttonText = isError
        ? errorMessage
        : isLoading
            ? 'Logging....'
            : !isLoading && isAuth
                ? 'Logged In'
                : 'Login';

    return (
        <>
            {isAuth ? <Navigate to={location} /> : ''}
            <div className="flex flex-row w-full justify-center mt-10">
                <div className="p-7 flex flex-col shadow-xl w-96 rounded-lg bg-opacity-40 bg-gray-100">
                    <h1 className="text-4xl font-semibold">Login</h1>
                    <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="email"
                            value={cred.email}
                            placeholder="Enter your email"
                            onChange={handleChange}
                            className="w-full h-12 outline-none border-b text-base pl-4 rounded-lg border"
                        />
                        <input
                            type="password"
                            name="password"
                            value={cred.password}
                            placeholder="Enter your password"
                            onChange={handleChange}
                            className="w-full h-12 outline-none border-b text-base pl-4 rounded-lg border"
                        />
                        <Link to={'#'} className="text-blue-600 flex justify-end hover:underline">Forgot Password?</Link>
                        <input
                            type="submit"
                            value={buttonText}
                            className="bg-[#20a87e] hover:bg-[#178e68] w-full h-12 border-none outline-none border-b text-xl pl-4 rounded-lg text-white cursor-pointer"
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
