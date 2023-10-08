import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create_itinerary } from "../store/actions/itineraryAction";

function CreateItinerary() {
    const dispatch = useDispatch()

    const user = useSelector(store => store.userReducer.user);
    let cityDetails = useSelector(store => store.detailsReducer.cityDetails);

    const [money, setMoney] = useState("");

    let [itinerary, setItinerary] = useState({
        user: user._id,
        city: "",
        title: "",
        desc: "",
        price: "",
        duration: 1,
        hashtags: ""

    })

    useEffect(() => {
        setItinerary(prevItinerary => ({
            ...prevItinerary,
            city: cityDetails._id
        }));
    }, [cityDetails]);

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
                case "hashtags":
                    return {
                        ...prevItinerary,
                        [event.target.name]: event.target.value.split(" ")
                    }
                default:
                    return {
                        ...prevItinerary,
                        [event.target.name]: event.target.value,
                    };
            }
        });
    }
    console.log(itinerary)
    //console.log(itinerary.price.length)

    const handlePricePositive = (event) => {
        event.preventDefault();
        if (itinerary.price.length / 2 < 5) {
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

    const handleItinerary = async (event) => {
        event.preventDefault();
        try {
            dispatch(create_itinerary(itinerary))
        } catch (error) {
            console.log(error)
        }

    }


    return (
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
                        <input type="text" id="price" name="price" onChange={handleInput} value={itinerary.price} className=" w-full p-2 rounded-md" required />
                    </div>
                    <label htmlFor="duration" className="items-start text-white text-xl font-mono">Duration</label>
                    <input type="number" name="duration" id="duration" onChange={handleInput} min={1} className=" w-full p-2 rounded-md" required />
                    <label htmlFor="hashtags" className="items-start text-white text-xl font-mono">Hashtags</label>
                    <input type="text" id="hashtags" name="hashtags" onChange={handleInput} className=" w-full p-2 rounded-md" required />
                    <button type="submit" onClick={handleItinerary} className="bg-cyan-400 hover:bg-purple-400 p-3 rounded-md">Send Itinerary</button>
                </div>
            </form>
        </section>
    )
};

export default CreateItinerary