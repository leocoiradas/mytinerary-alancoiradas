import React from "react";
import Button from "./Button";
function NavBar({isOpen}){ 

    return(
        <nav className={`${isOpen ? 'block text-center' : 'hidden'} md:flex md:items-center md:w-auto`}>
            <ul className={`flex flex-col md:flex-row md:gap-4  ${isOpen ? 'block gap-2 md:flex' : 'hidden'} md:flex w-full`}>
                <li><Button name='Home' goTo='' /></li>
                <li><Button name='About Us' goTo='' /></li>
                <li><Button name='Contact' goTo='' /></li>
            </ul>
        </nav>
    );
};
export default NavBar