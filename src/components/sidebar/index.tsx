"use client"
import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { GoRocket } from 'react-icons/go';
import { GrPin } from 'react-icons/gr';
import { HiOutlineFolderOpen } from 'react-icons/hi';
import { IoMenuOutline } from 'react-icons/io5';
import { LuClipboardPenLine, LuClock3, LuUserRound } from 'react-icons/lu';
import { RiArrowDropDownLine, RiArrowDropUpLine, RiDashboardHorizontalLine } from 'react-icons/ri';


const CRMSidebar = () => {

    const [isRecentOpen, setIsRecentOpen] = useState(false);
    const [isPinnedOpen, setIsPinnedOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("Home");
    const [activeMenu, setActiveMenu] = useState<string>(""); 

    const menuClass = (menu: string) =>
        activeMenu === menu
          ? "flex items-center space-x-2 bg-white text-gray-900 border-l-4 !p-2  border-blue-500 w-full"
          : "flex items-center space-x-2 text-gray-400 hover:bg-gray-200 hover:text-gray-800 w-full";
      
    const getFirstLetter = (section:string) => section.charAt(0).toLocaleUpperCase();

    return (
        <aside className='bg-gray-100  w-52  h-[150vh] flex flex-col shadow-lg '>
            <nav className='flex-1 p-2 space-y-8'>
            <IoMenuOutline size={20} />

            <div>
                <ul className='space-y-4'>
                <li className={`${menuClass("home")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("home"); setActiveSection('Home')}}>
                <AiOutlineHome size={20} />
                <h3>Home</h3>
                </li>

                <div className='flex items-center justify-between cursor-pointer text-gray-400  hover:bg-gray-200 rounded-md' onClick={()=> setIsRecentOpen(!isRecentOpen)}>

                <div className={`${menuClass("recent")} flex items-center space-x-3`} onClick={() => {setActiveMenu("recent"); setActiveSection("Recent")}}>
                <LuClock3 size={20} />
                <h3>Recent</h3>
                </div>
                {isRecentOpen ? <RiArrowDropUpLine size={25} /> : <RiArrowDropDownLine size={25}/>
                }

                </div>
                <div className='flex items-center justify-between cursor-pointer text-gray-400  hover:bg-gray-200 rounded-md' onClick={()=> setIsPinnedOpen(!isPinnedOpen)}>

                <div className={`${menuClass("pinned")} flex items-center space-x-3`} onClick={() => {setActiveMenu("pinned"); setActiveSection("Pinned")}}>
                <GrPin size={20} />
                <h3>Pinned</h3>
                </div>
                {isPinnedOpen ? <RiArrowDropUpLine size={25} /> : <RiArrowDropDownLine size={25}/>}

                </div>
                
                </ul>
                </div>

                <div>
                    <h3 className='text-gray-500 uppercase text-xs font-bold mb-2'>My Work</h3>
                    <ul className='space-y-5'>
                    <li className={`${menuClass("sales")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("sales"); setActiveSection("My Work")}}>
                    <GoRocket size={20} />
                        <h3>Sales accelerator</h3>
                        </li>
                        <li className={`${menuClass("dashboard")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("dashboard"); setActiveSection("My Work")}}>
                        <RiDashboardHorizontalLine size={20} />
                        <h3>Dashboards</h3>
                        </li>
                        <li className={`${menuClass("activities")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("activities"); setActiveSection("My Work")}}>
                        <LuClipboardPenLine size={20} />
                        <h3>Activities</h3>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-gray-500 uppercase text-xs font-bold mb-2'>Customers</h3>
                    <ul className='space-y-5'>
                    <li className={`${menuClass("accounts")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("accounts"); setActiveSection("Customers")}}>
                    <HiOutlineFolderOpen size={20} />
                        <h3>Accounts</h3>
                        </li>
                        <li className={`${menuClass("contacts")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("contacts"); setActiveSection("Customers")}}>
                        <LuUserRound size={20} />
                        <h3>Contacts</h3>
                        </li>
                        
                    </ul>
                </div>
                <div>
                    <h3 className='text-gray-500 uppercase text-xs font-bold mb-2'>Sales</h3>
                    <ul className='space-y-5'>
                    <li className={`${menuClass("lead")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("lead"); setActiveSection("Sales")}}>
                    <GoRocket size={20} />
                        <h3>Leads</h3>
                        </li>
                        <li className={`${menuClass("opportunities")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("opportunities"); setActiveSection("Sales")}}>
                        <RiDashboardHorizontalLine size={20} />
                        <h3>Opportunities</h3>
                        </li>
                        <li className={`${menuClass("competitors")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("competitors"); setActiveSection("Sales")}}>
                        <LuClipboardPenLine size={20} />
                        <h3>Competitors</h3>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-gray-500 uppercase text-xs font-bold mb-2'>Collateral</h3>
                    <ul className='space-y-5'>
                    <li className={`${menuClass("quotes")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("quotes"); setActiveSection("Collateral")}}>
                    <GoRocket size={20} />
                        <h3>Quotes</h3>
                        </li>
                        <li className={`${menuClass("orders")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("orders"); setActiveSection("Collateral")}}>
                        <RiDashboardHorizontalLine size={20} />
                        <h3>Orders</h3>
                        </li>
                        <li className={`${menuClass("invoices")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("invoices");setActiveSection("Collateral")}}>
                        <LuClipboardPenLine size={20} />
                        <h3>Invoices</h3>
                        </li>
                        <li className={`${menuClass("products")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("products");setActiveSection("Collateral")}}>
                        <RiDashboardHorizontalLine size={20} />
                        <h3>Products</h3>
                        </li>
                        <li className={`${menuClass("salesLiterature")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("salesLiterature");setActiveSection("Collateral")}}>
                        <LuClipboardPenLine size={20} />
                        <h3>Sales Literature</h3>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-gray-500 uppercase text-xs font-bold mb-2'>Marketing</h3>
                    <ul className='space-y-5'>
                    <li className={`${menuClass("marketing")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("marketing"); setActiveSection("Marketing")}}>
                    <HiOutlineFolderOpen size={20} />
                        <h3>Marketing lists</h3>
                        </li>
                        <li className={`${menuClass("quick")}flex items-center space-x-3 text-gray-400 !p-0`} onClick={() => {setActiveMenu("quick"); setActiveSection("Marketing")}}>
                        <LuUserRound size={20} />
                        <h3 className='text-sm'>Quick Campaigns</h3>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <div className='bg-gray-200 p-3 sticky bottom-0 flex items-center space-x-3'>
                <div className='w-8 h-8 bg-blue-500 text-white flex items-center justify-center '>
                    {activeSection ? getFirstLetter(activeSection) : "-"}
                </div>
                <div>
                <h4 className='text-lg font-semibold text-gray-900'>{activeSection || "None"}</h4>
                </div>
            </div>
        </aside>
    )
}

export default CRMSidebar;
