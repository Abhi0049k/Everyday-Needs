import { FC } from "react";
import { Link } from 'react-router-dom';

const Register: FC = () => {
    document.title = 'Register | Everyday Needs'
    return (
        <>
            <div className="flex flex-row w-full justify-center mt-10">
                <div className="p-7 flex flex-col shadow-xl w-96 rounded-lg bg-opacity-40 bg-gray-100">
                    <h1 className="text-4xl font-semibold">Register</h1>
                    <form className="flex flex-col gap-4 mt-4">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full h-12 outline-none border-b text-base pl-4 rounded-lg border"
                        />
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="w-full h-12 outline-none border-b text-base pl-4 rounded-lg border"
                        />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full h-12 outline-none border-b text-base pl-4 rounded-lg border"
                        />
                        <input
                            type="submit"
                            value={'Login'}
                            className="bg-[#20a87e] hover:bg-[#178e68] w-full h-12 border-none outline-none border-b text-xl pl-4 rounded-lg text-white cursor-pointer"
                        />
                        <span className="border-b"></span>
                        <button className="flex justify-center border rounded-lg items-center text-xl text-gray-700 font-semibold p-1 gap-1 hover:bg-gray-200">
                            <img className="w-8" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" /> Google
                        </button>
                        <p className="text-lg text-center">Already have an account? <Link to={"/login"} className="hover:underline text-blue-600">Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
