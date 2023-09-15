import React, { useState } from "react";
import NavBar from "./NavBar";
import HamburgerButton from "./HamburgerButton";
import { useSelector } from 'react-redux';

function Header() {
    const defaultPhoto = 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg';
    const user = useSelector(store => store.userReducer.user);
    console.log(user)
    const [isOpen, setIsOpen] = useState(false);
    const handleHamburgerButton = () => {
        setIsOpen(!isOpen)
    };
    return (
        <header className="flex justify-center">
            <div className="flex w-[75vw] min-h-[10vh] items-center p-4 justify-between flex-wrap">
                <div className="flex-1 md:flex-auto">
                    <p className=" font-bold text-2xl">My Tinerary</p>
                </div>
                <div className="md:hidden">
                    <HamburgerButton onClick={handleHamburgerButton} isOpen={isOpen} />
                </div>
                <div className={`${isOpen ? 'block mt-4 rounded-md border-white w-full p-3' : 'md:flex'}`}>
                    <NavBar isOpen={isOpen} user={user} />
                </div>
                <img className='w-[65px] h-[65px] rounded-full object-cover hidden md:block ml-3' src={user ? user.image : defaultPhoto} alt="" />
            </div>
        </header>

    )
}
export default Header