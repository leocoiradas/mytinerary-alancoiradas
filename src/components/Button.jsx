import React from "react";
function Button ({name, goTo}){
    return(
        <a href={goTo} className='text-red-100' p-2>{name}</a>
    );
};
export default Button