import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useRive, useStateMachineInput } from 'rive-react';

const STATE_MACHINE_NAME = 'Basic State Machine'
const INPUT_NAME = 'Switch'

function Navbar2() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        let nav = document.querySelector('.navbar');
        window.onscroll = e => {
            let top = 70;
            if (window.scrollY >= top) {
                nav.classList.add("bg-[#f5f3f3]")
            } else {
                nav.classList.remove("bg-[#f5f3f3]")
            }
        }
    }, [])

    const { rive, RiveComponent } = useRive({
        src: "./hamburger_time.riv",
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true
    })

    const onClickInput = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME)

    return (
        <nav className="animate-pulldown navbar fixed top-0 left-0 -translate-y-full z-1200 w-full">
            <div className="w-full text-black md:px-20">
                <div
                    className="flex flex-col container mx-auto md:items-center md:justify-between md:flex-row md:py-2">
                    <div className="p-3 flex flex-row items-center md:px-0 justify-between">
                        <Link onClick={clickMenuButton} to="/" className="text-2xl">
                            <img src={logo} alt="" className="w-32 md:w-20" />
                        </Link>
                        {/* <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                            <UseAnimations className="menu-btn" animation={menu2} size={40} speed={2.5}
                                onClick={() => setOpen(!open)} strokeColor="white" />
                        </button> */}
                        <RiveComponent className="block md:hidden rounded-lg focus:outline-none focus:shadow-outline" width={25} height={25} onClick={() => { onClickInput.fire(); setOpen(!open) }} />

                    </div>
                    <nav
                        className={`${open ? 'h-48 pb-4 visible bg-[#f5f3f3]' : 'h-0 pb-0 invisible'} transition-all duration-350 flex flex-col flex-grow md:h-full md:pb-0 md:flex md:justify-end md:flex-row`}>
                        <NavLink onClick={clickMenuButton} className={({ isActive }) => `${open ? 'opacity-100 visible text-gray-700' : 'opacity-0 invisible'} 
                            font-heading transition-opacity duration-500 md:visible md:opacity-100 px-1 py-1 mt-2 mx-1 text-base bg-transparent 
                            rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white 
                            dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 customUnderline ${isActive ? 'customUnderline-active' : ''}`}
                            to="/">Home</NavLink>
                        <NavLink onClick={clickMenuButton} className={({ isActive }) => `${open ? 'opacity-100 visible text-gray-700' : 'opacity-0 invisible'} 
                            font-heading transition-opacity duration-500 md:visible md:opacity-100 px-1 py-1 mt-2 mx-1 text-base bg-transparent 
                            rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white 
                            dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 customUnderline ${isActive ? 'customUnderline-active' : ''}`}
                            to="/portfolio">Products</NavLink>
                        <NavLink onClick={clickMenuButton} className={({ isActive }) => `${open ? 'opacity-100 visible text-gray-700' : 'opacity-0 invisible'} 
                            font-heading transition-opacity duration-500 md:visible md:opacity-100 px-1 py-1 mt-2 mx-1 text-base bg-transparent 
                            rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white 
                            dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 customUnderline ${isActive ? 'customUnderline-active' : ''}`}
                            to="/about">Our company</NavLink>
                        <NavLink onClick={clickMenuButton} className={({ isActive }) => `${open ? 'opacity-100 visible text-gray-700' : 'opacity-0 invisible'} 
                            font-heading transition-opacity duration-500 md:visible md:opacity-100 px-1 py-1 mt-2 mx-1 text-base bg-transparent 
                            rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white 
                            dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 customUnderline ${isActive ? 'customUnderline-active' : ''}`}
                            to="/contact">Contact</NavLink>
                    </nav>
                </div>
            </div>
        </nav>
    )

    function clickMenuButton() {
        if (window.innerWidth > 768) return;
        const menuRef = document.querySelector('.menu-btn')
        menuRef.click();
    }
}

export default Navbar2
