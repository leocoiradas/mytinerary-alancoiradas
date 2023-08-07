import React from "react";
function HamburgerButton({onClick}){
    return(
        <div>
            <button className="md:hidden p-2 gap-2 rounded-md focus:outline-none focus:ring block" onClick={onClick}>
                <div className="line w-6 h-1 mb-1 bg-white"></div>
                <div className="line w-6 h-1 mb-1 bg-white"></div>
                <div className="line w-6 h-1 bg-white"></div>
            </button>
        </div>
    )
};
export default HamburgerButton