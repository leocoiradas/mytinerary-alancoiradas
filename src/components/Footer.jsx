import React from "react";
function Footer (){
    
    return(
        <footer className="bg-blue-500 p-3 min-h-[10vh] w-full flex">
            <div className="flex flex-col flex-1 items-start text-white">
                <p>Developed by Alan Coiradas</p>
                <p>All rights reserved.</p>
            </div>
            <div className="flex flex-col items-start text-white">
                <h4>Contact</h4>
                <p>Email: <a className="hover:text-teal-200" href="mailto:alancoiradas00@gmail.com">alancoiradas00@gmail.com</a></p>
            </div>
        </footer>
    );
};
export default Footer