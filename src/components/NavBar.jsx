import React from "react";
import Button from "./Button";
function NavBar(){
    return(
        <nav className="flex w-full justify-end gap-4 h-1/10">
            <Button name='Home' goTo='' />
            <Button name='About Us' goTo='' />
            <Button name='Contact' goTo='' />
        </nav>
    );
};
export default NavBar