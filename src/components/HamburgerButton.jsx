import React from "react";
function HamburgerButton({onClick, isOpen}){
    return(
        <div className="flex flex-col w-full">
            <button className=" md:hidden p-2 gap-3 rounded-md outline outline-offset-4 focus:ring block" onClick={onClick}>
                <div className={`line w-6 h-1 mb-1 bg-black ${isOpen ? 'rotate-45' : ''}`}> </div>
                <div className={`line w-6 h-1 mb-1 bg-black ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`line w-6 h-1 mb-1 bg-black ${isOpen ? '-rotate-45' : ''}`}></div>
            </button>

        </div>
    )
};
export default HamburgerButton