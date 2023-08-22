import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function CityDetails() {
    const { id } = useParams()
    const [cityDetails, setCityDetails] = useState();
    useEffect(() => {
        axios.get(`http://localhost:7000/api/cities/${id}`)
            .then((response) => {
                setCityDetails(response.data.eventById);
            })
            .catch((error) => {
                console.log(error);
            });


    }, [id]);
    console.log(cityDetails)
    return (
        <section className="min-h-[80vh] p-10 flex justify-center items-center">
            <article className="w-[85vw] flex flex-col justify-center items-center gap-6">
                {cityDetails ? (
                    /*<div className="rounded-md flex flex-col justify-center items-center gap-3 m-4 border-2 border-neutral-950 p-4">
                        <h2 className="text-4xl">{cityDetails.cityName}</h2>
                        <img className="w-96 h-auto object-cover rounded-md" src={cityDetails.img} alt={`City of ${cityDetails.cityName}`} />
                        <p>Country: {cityDetails.country}</p>
                    </div>*/ 
                    <div
                className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-slate-900">
                <div class="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg object-cover w-full"
                        src={cityDetails.img}
                        alt={`Image of ${cityDetails.cityName} located in ${cityDetails.country}`} />
                </div>
                <div class="p-6 flex flex-col justify-center items-center">
                    <h5
                        className="mb-2 text-3xl text-center font-sans font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {cityDetails.cityName}
                    </h5>
                    <p className="mb-4 text-xl text-center text-neutral-600 dark:text-neutral-200">
                        {cityDetails.country}
                    </p>
                    <p className="mb-4, text-2xl text-center text-neutral-600 dark:text-neutral-200 italic">{cityDetails.desc}</p>
                    <div className="flex flex-col gap-2 p-4">
                        <p className="text-lg font-mono text-neutral-600 dark:text-neutral-200"><b className="text-xl">Tourist Spots: </b>{cityDetails.touristSpots}</p>
                        <p className="text-lg font-mono text-neutral-600 dark:text-neutral-200"><b className="text-xl">Gastronomy: </b>{cityDetails.gastronomy}</p>
                        <p className="text-lg font-mono text-neutral-600 dark:text-neutral-200"><b className="text-xl">Currency: </b>{cityDetails.currency}</p>
                    </div>
                </div>
            </div>
                ) : (
                    <p>Loading...</p>
                )}
                <div className="p-3 flex flex-col gap-3">
                    <h3 className="text-xl italic">Under construction</h3>
                    <Link to="/cities" className="btn bg-cyan-400 hover:bg-blue-800 hover:text-white text-center p-3 rounded-md text-md">
                        Back to Cities
                    </Link>
                </div>

            </article>
            
        </section>

    )
}
export default CityDetails