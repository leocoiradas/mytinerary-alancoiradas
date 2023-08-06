import React from "react";
import NavBar from "./NavBar";
function Header(){
    return(
        <header className="flex bg-slate-950 w-[75vw] min-h-[10vh] items-center p-3">
            <div className="w-1/4">
                <p className="text-base text-slate-100">My Tinerary</p>
            </div>
            
            <NavBar />
        </header>
    )
}
export default Header