
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
    const handleInputChange = async (city) => {
        console.log(cities)
        try {
            const response = await axios.get(`http://localhost:7000/api/cities?cityName=${city.target.value}`)
            setCities(response.data.cities)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main className='flex flex-col justify-center items-center min-h-[80vh]'>
            <input onChange={handleInputChange} className='border-2 rounded-md' type='text' placeholder='Write the city name here.' />
            <section className='flex flex-col items-center justify-center p-3'>
                <h2>Cities</h2>
                <article>
                    {cities?.map( (city) => {
                        return(
                                <Link key={city._id} to={`/cities/${city._id}`}>
                                    <Card city={city.cityName} country={city.country} image={city.img} />
                                </Link>
                        )
                    })}
                </article>

            </section>
        </main>
    )
}
export default Cities