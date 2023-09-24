
import { useEffect, useRef } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filter_cities, get_cities } from '../store/actions/citiesAction';

function Cities() {
    const cities = useSelector((store) => store.citiesReducer.cities)
    console.log(cities)
    const dispatch = useDispatch()
    let inputSearch = useRef()
    useEffect(() => {
        dispatch(get_cities())
    }, [])
    const handleInputChange = async () => {
        dispatch(filter_cities({
            name: inputSearch.current.value
        }))
        
    }
    return (
        <main className='flex flex-col justify-center items-center min-h-[80vh] w-full pt-10 gap-3'>
           <h2 className='text-3xl font-medium font-sans'>Cities</h2>
            <section className='flex flex-col items-center justify-center p-3 gap-10 w-[75vw]'>
            <input onChange={handleInputChange} ref={inputSearch} className='border-2 rounded-md py-1 px-2 w-3/4 border-slate-950' type='text' placeholder='Write the city name here.' />
                <article className='flex gap-5 flex-wrap justify-center'>
                {cities.length === 0 ? (
                        <p className='text-xl text-black'>No cities found. Please try again.</p>
                    ) : (
                        cities.map((city) => (
                            <Link key={city._id} to={`/cities/${city._id}`}>
                                <Card city={city.cityName} country={city.country} image={city.img} />
                            </Link>
                        ))
                    )}
                </article>

            </section>
        </main>
    )
}
export default Cities