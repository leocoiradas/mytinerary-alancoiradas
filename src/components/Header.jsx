import React, {useState} from "react";
import NavBar from "./NavBar";
import HamburgerButton from "./HamburgerButton";
function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const handleHamburgerButton = () => {
        setIsOpen(!isOpen)
    };
    return(
        <header className="flex justify-between bg-slate-950 w-[75vw] min-h-[10vh] items-center p-3">
            <div className="w-2/4">
                <p className="text-base text-slate-100">My Tinerary</p>
            </div>
            <HamburgerButton onClick={handleHamburgerButton} />
            <NavBar isOpen={isOpen} />
        </header>
    )
}
export default Header