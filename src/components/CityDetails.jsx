import { useParams } from "react-router-dom";
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
            <article className="w-[85vw] flex justify-center items-center">
                {cityDetails ? (
                    <div>
                        <h2>{cityDetails.cityName}</h2>
                        <img src={cityDetails.img} alt={`City of ${cityDetails.cityName}`} />
                        <p>Country: {cityDetails.country}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </article>
        </section>

    )
}
export default CityDetails