import React from "react";
import Button from "./Button";
function NavBar({isOpen}){
    return(
        <nav className={`w-full justify-end gap-4 h-1/10 ${isOpen ? 'block' : 'hidden'} md:flex`}>
            <Button name='Home' goTo='' />
            <Button name='About Us' goTo='' />
            <Button name='Contact' goTo='' />
        </nav>
    );
};
export default NavBar