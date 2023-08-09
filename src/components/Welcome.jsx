import React from "react";
function Info({title, desc, img}){
    return(
        <article className="flex flex-col-reverse md:flex-row md:justify-center items-center flex-wrap p-3 w-[75vw] min-h-[300px] text-xl">
            <div className="flex flex-col justify-between items-start md:w-1/2 h-80 p-3 w-full gap-y-8">
                <h2 className="text-bold md:text-2xl font-bold">{title}</h2>
                <p>{desc}</p>
                <button className="p-3 bg-cyan-600 w-full md:w-[300px]] ">View More</button>
            </div>
            <div className="md:w-1/2 w-full h-full p-3 flex justify-center">
                <img src={img} alt={title} className=" max-h-full p-3 w-full h-40 md:h-80 object-contain" />
            </div>
            
        </article>
    )
}
export default Info