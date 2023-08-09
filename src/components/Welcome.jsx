import React from "react";
function Info({title, desc, slogan, img}){
    return(
        <article className="flex flex-col-reverse md:flex-row md:justify-center items-end flex-wrap p-3 w-[75vw] min-h-[300px] text-xl">
            <div className="flex flex-col justify-between items-start md:w-2/3 h-full md:h-80 p-3 w-full gap-y-5">
                <h2 className="text-bold md:text-2xl font-bold">{title}</h2>
                <p>{desc}</p>
                <p className="text-blue-500 italic">{slogan}</p>
                <button className="p-3 bg-blue-700 text-white w-1/2 rounded-md md:w-[300px] hover:bg-violet-700">View More</button>
            </div>
            <div className="md:w-1/3 w-full h-full md:h-80 flex justify-center items-end">
                <img src={img} alt={title} className="p-3 max-h-full w-full h-40 md:h-80 object-contain" />
            </div>
            
        </article>
    )
}
export default Info