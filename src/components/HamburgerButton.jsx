import React from "react";
function HamburgerButton({onClick, isOpen}){
    return(
        <div className="flex flex-col w-full">
            <button className="flex-end md:hidden p-2 gap-2 rounded-md focus:outline-none focus:ring block" onClick={onClick}>
                <div className={`line w-6 h-1 mb-1 bg-white ${isOpen ? 'rotate-45' : ''}`}> </div>
                <div className={`line w-6 h-1 mb-1 bg-white ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`line w-6 h-1 mb-1 bg-white ${isOpen ? '-rotate-45' : ''}`}></div>
            </button>

        </div>
    )
};
export default HamburgerButton