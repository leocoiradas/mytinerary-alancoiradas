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
                class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        class="rounded-t-lg"
                        src={cityDetails.img}
                        alt={`Image of ${cityDetails.cityName} located in ${cityDetails.country}`} />
                </div>
                <div class="p-6">
                    <h5
                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {cityDetails.cityName}
                    </h5>
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {cityDetails.country}
                    </p>
                    <p class="text-base text-neutral-600 dark:text-neutral-200">
                        <small class="text-neutral-500 dark:text-neutral-400">Last updated 3 mins ago</small>
                    </p>
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