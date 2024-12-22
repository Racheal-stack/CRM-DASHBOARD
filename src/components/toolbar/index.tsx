import { AiOutlineAlignCenter, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineViewList } from "react-icons/hi";
import { ImShare } from "react-icons/im";
import { MdOutlineEditNote, MdOutlineSmartDisplay } from "react-icons/md";
import { RiArrowDropDownLine, RiBarChartLine } from "react-icons/ri";
import { RxDividerVertical } from "react-icons/rx";
import { TbClockPause } from "react-icons/tb";


const Toolbar = () => {
return (
    <div className="flex items-center justify-between bg-white shadow p-1 rounded-md">
        <div className="flex items-center space-x-2">
            <span className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100">
                My open leads <RiArrowDropDownLine size={25} className="ml-2" />

            </span>
        </div>

        <div className="flex items-center space-x-4">
            <span className="flex items-center text-gray-500 hover:text-blue-600">
                <RiBarChartLine size={20} className="mr-1" /> Show chart
            </span>
            <span className="flex items-center text-gray-500 hover:text-blue-600">
                <HiOutlineViewList size={20} className="mr-1" /> Focused view
            </span>
            <span className="flex items-center text-gray-500 hover:text-blue-600">
                <AiOutlinePlus size={20} className="mr-1" /> New
            </span>
            <span className="flex items-center text-gray-500 hover:text-blue-600">
                <BiRefresh size={20} className="mr-1" /> Refresh
            </span>
            <span className="flex items-center text-gray-500 hover:text-blue-600">
                <MdOutlineSmartDisplay size={20} className="mr-1" /> Collaborate
            </span>
            <span className="flex items-center text-gray-500 hover:text-blue-600">
                <AiOutlineDelete size={20} className="mr-1" /> Delete
            </span>
            <RxDividerVertical size={20} />
            <RiArrowDropDownLine size={25}  />
            <BsThreeDotsVertical />

            <button className="flex items-center gap-2  px-1 text-sm py-2 border rounded-md text-gray-700 hover:text-gray-100">
            <TbClockPause className="ml-2" /> Smarts data
            </button>
            <button className="flex items-center gap-2 text-sm px-1 py-2 border rounded-md text-gray-700 hover:text-gray-100">
            <AiOutlineAlignCenter  className="ml-2" /> Edit filters
            </button>
            <button className="flex items-center gap-2 px-1 text-sm py-2 border rounded-md text-gray-700 hover:text-gray-100">
            <MdOutlineEditNote className="ml-2" /> Edit columns
            </button>
            <button className="flex items-center gap-2 px-2 text-sm py-2 text-white bg-blue-600 border  rounded-md hover:text-gray-100">
            <ImShare size={20} />
            <RxDividerVertical size={20} />
            <RiArrowDropDownLine size={20}  /> 


            </button>


        </div>
    </div>
)
}

export default Toolbar;