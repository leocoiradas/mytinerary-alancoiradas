import React, {useState, useEffect} from "react";
import Card from "./Card";
function Carousel({arr}){
    const [index, setIndex] = useState(0);
    const prevSlide= () => {
        setIndex((pastIndex) => (pastIndex - 4 > 0 ? pastIndex - 4 : arr.length - 4));
    };
    const nextSlide = () => {
        setIndex((nextIndex) => (nextIndex + 4 < arr.length ? nextIndex + 4 : 0))
    };
    const autoNextSlide = () => {
        nextSlide()
    };
    useEffect(() => {
        const autoPages = setInterval(autoNextSlide, 10000);
        return () => {
            clearInterval(autoPages)
        }
    }, []);
    return (
        <section className=" flex  flex-col items-center justify-center  gap-4">
            <h2 className="font-bold text-2xl md:text-3xl mb-3">MY TINERARIES!!</h2>
            <div className="flex justify-center items-center flex-wrap gap-4">
                {arr.slice(index, index + 4).map((element) => (<Card key={element.id} city={element.name} country={element.country} image={element.img} />))}
            </div>
            <div className="flex justify-center items-center flex-wrap gap-3 md:gap-6 p-3">
                <button className="p-3 rounded-md bg-blue-700 text-white hover:bg-violet-700" onClick={prevSlide}>Previous Page</button>
                <button className="p-3 rounded-md bg-blue-700 text-white hover:bg-violet-700" onClick={nextSlide}>Next Page</button>
            </div>

        </section>
    )
};
export default Carousel