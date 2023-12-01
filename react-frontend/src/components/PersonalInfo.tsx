import { FC } from "react"
import { HandleChange, credI } from "./types"

const PersonalInfo : FC<credI & HandleChange> = ({name, email, handleChange})=>{
    return (
        <div className=" p-3 lg:p-6 md:4/5 lg:w-3/5 w-full">
            <form className="flex flex-col gap-6">
                <input className="outline-none bg-none h-12 px-[10px] lg:px-[15px] border-b-2 border-b-[#20a87e] text-2xl text-[#20a87e]" type="text" name="name" onChange={handleChange} placeholder="Name" value={name} />
                <input className="outline-none bg-none h-12 px-[10px] lg:px-[15px] border-b-2 border-b-[#20a87e] text-2xl text-[#20a87e]" type="text" name="email" onChange={handleChange} placeholder="Email" value={email} />
                <input className="outline-none bg-[#20a87e] text-white text-2xl font-semibold cursor-pointer shadow-lg h-12 border-none" type="submit" value={"SAVE"} />
            </form>
        </div>
    )
}

export default PersonalInfo
