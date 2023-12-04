import { FC, useState } from "react"
import { ChangeI, credI } from "./types"
import axios, { AxiosResponse } from "axios";
const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL

const PersonalInfo: FC<credI & ChangeI & { token: string }> = ({ name, email, setChange, token }) => {
    const [nameValue, setName] = useState<string>(name!);
    const [emailValue, setEmail] = useState<string>(email!);

    const handleChangeName = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        setName(evnt.target.value);
    }
    const handleChangeEmail = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(evnt.target.value);
    }

    const handleSubmit = async (evnt: React.FormEvent<HTMLFormElement>) => {
        evnt.preventDefault();
        await handleUpdate();
        setChange((prev) => prev + 1);
    }

    const handleUpdate = async () => {
        try {
            let res: AxiosResponse = await axios.patch(`${backendServerUrl}users/update`,
                { name: nameValue, email: emailValue },
                {
                    headers: {
                        'Content-type': "application/json",
                        authorization: `Bearer ${token}`
                    }
                })
            if (res.statusText === "OK") alert("User Details Updated");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className=" p-3 lg:p-6 md:4/5 lg:w-3/5 w-full">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input className="outline-none bg-none h-12 px-[10px] lg:px-[15px] border-b-2 border-b-[#20a87e] text-2xl text-[#20a87e]" type="text" name="name" onChange={handleChangeName} placeholder="Name" value={nameValue} />
                <input className="outline-none bg-none h-12 px-[10px] lg:px-[15px] border-b-2 border-b-[#20a87e] text-2xl text-[#20a87e]" type="text" name="email" onChange={handleChangeEmail} placeholder="Email" value={emailValue} />
                <input className="outline-none bg-[#20a87e] text-white text-2xl font-semibold cursor-pointer shadow-lg h-12 border-none" type="submit" value={"SAVE"} />
            </form>
        </div>
    )
}

export default PersonalInfo
