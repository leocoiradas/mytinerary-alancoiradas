import React from "react";
function Card ({city, country, image}){
    return(
        <div className="w-80 h-96 rounded-md p-2 gap-2 border-2 border-blue-500 flex flex-col justify-center items-center shadow-xl bg-black" >
            <img src={image} alt={`City of ${city}`} className="w-72 h-60 object-cover rounded-md" />
            <div className=" flex flex-col text-center rounded-md border-2 w-full border-neutral-950 gap-3 p-2 shadow-inner bg-white">
                <h3 className="font-bold text-xl">{city}</h3>
                <p>{country}</p>
                
            </div>
        </div>
    )
}
export default Card;