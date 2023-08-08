import React from "react";
function Card ({city, country, image}){
    const divStyle = {
        backgroundImage: {image}
    }
    return(
        <div className="w-80 h-80 rounded-md p-2 gap-2 border-2 border-red-500 flex flex-col justify-center items-center" style={divStyle}>
            <img src={image} alt={`City of ${city}`} className="w-72 h-60 object-cover rounded-md" />
            <div className="text-center rounded-md border-2 w-full border-neutral-950">
                <h3>{city}</h3>
                <p>{country}</p>
                
            </div>
        </div>
    )
}
export default Card;