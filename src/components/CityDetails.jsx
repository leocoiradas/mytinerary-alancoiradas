import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { get_details } from "../store/actions/detailsAction";

function CityDetails() {

    const dispatch = useDispatch()
    const { id } = useParams()
    const cityDetails = useSelector((store) => store.detailsReducer.cityDetails);
    const user = useSelector(store => store.userReducer.user);
    useEffect(() => {
        dispatch(get_details({
            cityId: id
        }))
    }, [dispatch, id]);

    const [money, setMoney] = useState("");
    const [hours, setHours] = useState("0");

    const [itinerary, setItinerary] = useState({
        title: "",
        desc: "",
        price: "",
        duration: 1,
        hashtags: []

    })
    const handleInput = (event) => {
        setItinerary((prevItinerary) => {
            switch (event.target.name) {
              case "duration":
                return {
                  ...prevItinerary,
                  [event.target.name]: event.target.value + " Hours",
                };
              case "price":
                return {
                  ...prevItinerary,
                  [event.target.name]: money,
                };
              default:
                return {
                  ...prevItinerary,
                  [event.target.name]: event.target.value,
                };
            }
          });
        /*if (event.target.name == "duration") {
            setItinerary({
                ...itinerary,
                [event.target.name]: event.target.value + " Hours"
            })
        } else {
            setItinerary({
                ...itinerary,
                [event.target.name]: event.target.value
            })
        }*/
    
    }
    console.log(itinerary)
    console.log(itinerary.price.length)
    /*let handlePricePositive = (event) => {
        event.preventDefault();
        console.log(money.length)
        if (money.length < 10) {
            setMoney(money + "💵")
        }
        event.preventDefault();
        if (money.length < 10) {
            setMoney(money + "💵");
            const currentPrice = parseFloat(itinerary.price || 0);
            setItinerary((prevItinerary) => ({
                ...prevItinerary,
                price: (currentPrice + 1).toString(),
            }));
        }
        console.log(money)
    };
    let handlePriceNegative = (event) => {
        event.preventDefault();
        if (money.length >= 0) {
            setMoney(money.slice(0, money.length - 2))
        }

    };*/
    /*const handlePricePositive = (event) => {
        event.preventDefault();
        setItinerary((prevItinerary) => ({
            ...prevItinerary,
            price: prevItinerary.price + "💵"
        }));
    };
    
    const handlePriceNegative = (event) => {
        event.preventDefault();
        if (itinerary.price.length > 0) {
            setItinerary((prevItinerary) => ({
                ...prevItinerary,
                price: prevItinerary.price.slice(0, prevItinerary.price.length - 1)
            }));
        }
    };*/

    const handlePricePositive = (event) => {
        event.preventDefault();
        if (itinerary.price.length / 2 < 5) { // Verifica que no haya más de 5 emojis de billetes
            setItinerary((prevItinerary) => ({
                ...prevItinerary,
                price: prevItinerary.price + "💵"
            }));
        }
    };
    
    const handlePriceNegative = (event) => {
        event.preventDefault();
        if (itinerary.price.length > 0) {
            setItinerary((prevItinerary) => ({
                ...prevItinerary,
                price: prevItinerary.price.slice(0, prevItinerary.price.length - 2)
            }));
        }
    };
    
    
    //console.log(cityDetails)

    return (
        <section className="min-h-[80vh] p-10 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
            <article className="w-[75vw] flex flex-col justify-center items-center gap-6">
                {cityDetails ? (
                    <div className="flex flex-col gap-8">
                        <div
                            className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-slate-900">
                            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                                <img
                                    className="rounded-t-lg object-cover w-full"
                                    src={cityDetails.img}
                                    alt={`Image of ${cityDetails.cityName} located in ${cityDetails.country}`} />
                            </div>
                            <div className="p-6 flex flex-col justify-center items-center">
                                <h5
                                    className="mb-2 text-3xl text-center font-sans font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    {cityDetails.cityName}
                                </h5>
                                <p className="mb-4 text-xl text-center text-neutral-600 dark:text-neutral-200">
                                    {cityDetails.country}
                                </p>
                                <p className="mb-4 text-2xl text-center text-neutral-600 dark:text-neutral-200 italic">{cityDetails.desc}</p>
                                <div className="flex flex-col gap-2 p-4">
                                    <p className="text-lg font-mono text-neutral-600 dark:text-neutral-200"><b className="text-xl text-sky-500">Tourist Spots: </b>{cityDetails.touristSpots}</p>
                                    <p className="text-lg font-mono text-neutral-600 dark:text-neutral-200"><b className="text-xl text-sky-500">Gastronomy: </b>{cityDetails.gastronomy}</p>
                                    <p className="text-lg font-mono text-neutral-600 dark:text-neutral-200"><b className="text-xl text-sky-500">Currency: </b>{cityDetails.currency}</p>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col items-center mt-6 gap-8">
                            <h3 className="text-3xl font-sans font-medium leading-tight">Itineraries</h3>
                            {cityDetails.itineraries ? (
                                cityDetails.itineraries.length > 0 ? (
                                    cityDetails.itineraries.map((element, index) => {
                                        return (
                                            <div key={index} className="bg-slate-900 p-4 w-full flex flex-wrap rounded-md ">
                                                <div className="w-full md:w-1/3 flex flex-col items-center gap-3 p-4">
                                                    <div className="w-24 h-24 md:w-36 md:h-36 mx-auto">
                                                        <img src={element.user.image} className="rounded-full md:rounded object-cover w-full h-full" alt={element.user.user} />
                                                    </div>
                                                    <p className="text-lg text-center font-mono text-neutral-600 dark:text-neutral-200">{element.user.user}</p>
                                                </div>
                                                <div className="h-full md:w-2/3 flex flex-col p-4">
                                                    <p className="md:text-2xl font-mono text-neutral-600 dark:text-neutral-200"><b className="text-2xl text-sky-500">Duration:</b> {element.duration}</p>
                                                    <p className="md:text-2xl font-mono text-neutral-600 dark:text-neutral-200"><b className="text-2xl text-sky-500">Price:</b> {element.price}</p>
                                                    <div className="flex gap-3 mb-5">
                                                        {element.hashtags.map((hashtag) => {
                                                            return (<p className="md:text-2xl font-mono text-neutral-600 dark:text-neutral-200">{hashtag} </p>)
                                                        })}
                                                    </div>
                                                    <div>
                                                        <Link to='*' className="btn bg-cyan-400 text-center hover:bg-blue-800 hover:text-white p-3 rounded-md text-md">View More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p>There are no itineraries for this city</p>
                                )
                            ) : (
                                <p>Loading itineraries</p>
                            )}
                            {user ?
                                <section className="md:w-[75vw] flex flex-wrap justify-center items-center bg-slate-800 rounded-md border-2 border-black p-5 gap-5">
                                    <div className="  flex flex-1 flex-col justify-center items-center gap-5">
                                        <div className="w-24 h-24 md:w-36 md:h-36">
                                            <img src={user.image} className="rounded-full md:rounded object-cover w-full h-full" />
                                        </div>
                                        <p className="text-center text-white font-mono text-xl">{user.user}</p>
                                    </div>
                                    <form action="" className="flex flex-col justify-center items-center w-full md:w-2/3 gap-3">
                                        <h4 className="text-center text-white text-xl font-mono">Create an itinerary</h4>
                                        <div className="flex flex-col gap-3 justify-center items-start p-2 w-full">
                                            <label htmlFor="title" className="items-start text-white text-xl font-mono">Title</label>
                                            <input type="text" onChange={handleInput} className=" w-full p-2 rounded-md" name="title" id="title" placeholder="Insert the title of the itinerary here." />
                                            <label htmlFor="desc" className="text-start text-white text-xl font-mono">Description</label>
                                            <textarea onChange={handleInput} className="w-full min-h-[12rem] p-2 rounded-md" name="desc" id="desc" placeholder="Insert the description of the itinerary here." required />
                                            <label htmlFor="price" className="items-start text-white text-xl font-mono">Price</label>
                                            <div className="flex gap-1 w-full">
                                                <button onClick={handlePricePositive} className="w-24 p-2 text-sm bg-cyan-400 rounded-md hover:bg-purple-400">+1 💵</button>
                                                <button onClick={handlePriceNegative} className="w-24 p-2 bg-cyan-400 rounded-md hover:bg-purple-400">-1 💵</button>
                                                <input type="text" id="price" name="price" onChange={handleInput} value={itinerary.price} className=" w-full p-2 rounded-md"  required />
                                            </div>
                                            <label htmlFor="duration" className="items-start text-white text-xl font-mono">Duration</label>
                                            <input type="number" name="duration" id="duration" onChange={handleInput} min={1} className=" w-full p-2 rounded-md" required />
                                            <label htmlFor="hashtags" className="items-start text-white text-xl font-mono">Hashtags</label>
                                            <input type="text" id="hashtags" onChange={handleInput} className=" w-full p-2 rounded-md" required />
                                            <button type="submit" className="bg-cyan-400 hover:bg-purple-400 p-3 rounded-md">Send Itinerary</button>
                                        </div>

                                    </form>
                                </section>
                                : null}
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
export default CityDetails;
