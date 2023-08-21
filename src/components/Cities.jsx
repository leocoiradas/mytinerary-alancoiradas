import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Cities() {
    const [cities, setCities] = useState()
    useEffect(() => {
        axios.get('http://localhost:7000/api/cities')
            .then(response => setCities(response.data.cities))
            .catch((err) => console.log(err))
    }, [])
    const handleInputChange = async () => {
        try {
            
        } catch (error) {
            
        }
    }
    return (
        <main className='flex flex-col justify-center items-center'>
            <input onChange={handleInputChange} className='' />
            <section>
                <h2>Cities</h2>
                <article>
                    {cities.map((city) => {
                        return(
                        <Link key={city._id} to={`/cities/${city._id}`}>
                            <Card city={cities.cityName} country={cities.country} image={cities.img} />
                        </Link>
                        )
                    })}
                </article>

            </section>
        </main>
    )
}
export default Cities