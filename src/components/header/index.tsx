import React from "react";
import { AiOutlineQuestion } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { IoBulbOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import { TbMessageUser } from "react-icons/tb";
import Avatar from "../ui/avatar";


const CRMHeader = ()=>{
    return(
        <header className="bg-gray-800 text-white p-3 flex justify-between sticky bottom-0">
            <div className="flex items-center space-x-4 cursor-pointer text-gray-400">
            <CgMenuGridO size={25} />
            <h1 className="text-white">Dynamics 365</h1>
            <RxDividerVertical size={20} />
            <h3>Sales hub</h3>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer text-gray-400">
            <IoBulbOutline size={20} />
            <FaPlus size={20} />
            <CiSettings size={20} />
            <AiOutlineQuestion size={20}/>
            <TbMessageUser size={20} />
            <Avatar initials="KD" size="small" className="bg-blue-500" />
            </div>
        </header>
    )
}

export default CRMHeader;