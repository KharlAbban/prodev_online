import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMdClose, IoMdMenu } from "react-icons/io";
import NavigateButton from "./v2"

const NavBar = () => {
    const {pathname} = useLocation();
    const [isopen, setIsOpen] = useState(false);

    const onDistrictRoute = pathname.includes("/shared-dashboard/districts");

    const toggleMenu = () => setIsOpen(!isopen);

  return (
    <nav className='w-full relative py-3 shadow text-gray-50 px-4 bg-theme-primary flex items-center justify-between'>
        <Link to="/" className='text-2xl text-theme-accent font-semibold gap-2 flex items-center'>
            <img src="/ProDev.png" className='h-6' loading='lazy' alt="ProDev logo" />
            ProDev
        </Link>
        <NavigateButton />
        {!pathname.includes("/persona") && <Link className='border border-theme-secondary rounded font-semibold py-1 px-2 hover:bg-theme-secondary hover:text-theme-text duration-100' to={onDistrictRoute ? "/shared-dashboard/regions" :"/shared-dashboard/districts"}>View by {onDistrictRoute ? "Regions" : "Districts"}</Link>}
        <ul className="list-none flex items-center gap-3 max-sm:hidden">
            <li className='hover:opacity-80 hover:underline duration-100'>
                <Link to="/persona/policy-maker">News</Link>
            </li>
            <li className='hover:opacity-80 hover:underline duration-100'>
                <Link to="/persona/policy-maker">Policy Maker</Link>
            </li>
            <li className='hover:opacity-80 hover:underline duration-100'>
                <Link to="/persona/investor">Investor</Link>
            </li>
            <li className='hover:opacity-80 hover:underline duration-100'>
                <Link to="/persona/ngo">NGO</Link>
            </li>
        </ul>
        {isopen ? <IoMdClose size={28} onClick={toggleMenu} className='sm:hidden' /> : <IoMdMenu size={28} onClick={toggleMenu} className='sm:hidden' />}
        {isopen && (
            <aside className='absolute flex flex-col gap-2 top-full z-10 bg-theme-primary px-4 py-2 rounded-sm shadow end-2'>
                <Link to="/persona/policy-maker" className='hover:opacity-80 hover:underline'>Policy Maker</Link>
                <Link to="/persona/investor" className='hover:opacity-80 hover:underline'>Investor</Link>
                <Link to="/persona/ngo" className='hover:opacity-80 hover:underline'>NGO</Link>
            </aside>
        )}
    </nav>
  )
}

export default NavBar