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
                    <div className="rounded-md flex flex-col justify-center items-center gap-3 m-4 border-2 border-neutral-950 p-4">
                        <h2 className="text-4xl">{cityDetails.cityName}</h2>
                        <img className="w-96 h-auto object-cover rounded-md" src={cityDetails.img} alt={`City of ${cityDetails.cityName}`} />
                        <p>Country: {cityDetails.country}</p>
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