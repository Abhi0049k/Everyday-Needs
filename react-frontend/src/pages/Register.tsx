import { FC, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginResponseI, registerI, storeI } from "../components/types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Register: FC = () => {
    const [cred, setCred] = useState<registerI>({ name: '', email: '', password: '' });

    const handleChange = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        setCred({ ...cred, [evnt.target.name]: evnt.target.value })
    }

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isAuth, isLoading, isError, errorMessage } = useSelector((store: storeI) => ({
        isAuth: store.authReducer.isAuth,
        isError: store.authReducer.isError,
        isLoading: store.authReducer.isLoading,
        errorMessage: store.authReducer.errorMessage,
    }));

    const handleSubmit = (evnt: React.FormEvent<HTMLFormElement>) => {
        evnt.preventDefault();
        registerFn();
    }

    const registerFn = async () => {
        try {
            dispatch({ type: 'REQUEST' })
            await axios.post('http://localhost:8998/users/register', cred)
            dispatch({ type: 'REGISTER_SUCCESS' });
            navigate('/login');
        } catch (err) {
            console.log(err);
            if (axios.isAxiosError<loginResponseI>(err)) {
                const { response } = err;
                if (response) {
                    dispatch({ type: 'FAILURE', payload: 'An unexpected error occurred' });
                } else {
                    dispatch({ type: 'FAILURE', payload: 'Network issue' });
                }
            } else {
                dispatch({ type: 'FAILURE', payload: 'An unexpected error occurred' });
            }
        }
    }

    useEffect(() => {
        document.title = 'Register | Everyday Needs'
        isAuth && navigate(`${location.state && "/"}`)
    }, [])

    const buttonTxt = isError
        ? errorMessage
        : isLoading
            ? 'Registering...'
            : !isLoading && isAuth
                ? 'User Registered'
                : 'Register';

    const buttonBgColor = isError ? "#e52730" : "#20a87e"

    return (
        <div className="flex flex-row w-full h-screen justify-center items-center">
            <img src="/Everyday needs-logos_black.png" alt="bgimg" className="w-full absolute z-[-10] drop-shadow-lg" />
            <div className="flex flex-row w-full h-[80vh] justify-center items-center">
                <div className="p-7 flex flex-col shadow-xl w-96 rounded-lg bg-opacity-40 bg-gray-100">
                    <h1 className="text-4xl font-semibold">Register</h1>
                    <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            onChange={handleChange}
                            className="w-full h-12 outline-none border-b text-base pl-4 rounded-lg border"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            className="w-full h-12 outline-none border-b text-base pl-4 rounded-lg border"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            className="w-full h-12 outline-none border-b text-base pl-4 rounded-lg border"
                        />
                        <input
                            type="submit"
                            value={buttonTxt}
                            className={`text-center bg-[${buttonBgColor}] hover:bg-[#178e68] w-full h-12 border-none outline-none border-b text-xl rounded-lg text-white cursor-pointer`}
                        />
                        <span className="border-b"></span>
                        <button className="flex justify-center border rounded-lg items-center text-xl text-gray-700 font-semibold p-1 gap-1 hover:bg-gray-200">
                            <img className="w-8" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" /> Google
                        </button>
                        <p className="text-lg text-center">Already have an account? <Link to={"/login"} className="hover:underline text-blue-600">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
