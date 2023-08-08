import React, {useState} from "react";
import Card from "./Card";
function Carousel({arr}){
    const [index, setIndex] = useState(0);
    const prevSlide= () => {
        setIndex((pastIndex) => (pastIndex - 4 > 0 ? pastIndex - 4 : arr.length - 4));
    }
    const nextSlide = () => {
        setIndex((nextIndex) => (nextIndex + 4 < arr.length ? nextIndex + 4 : 0))
    }
    return (
        <section className="w-[60vw]">
            <div className="flex justify-center items-center flex-wrap gap-4">
                {arr.slice(index, index + 4).map((element) => (<Card key={element.id} city={element.name} country={element.country} image={element.img} />))}
            </div>
            <div className="flex justify-center items-center flex-wrap gap-3 p-3">
                <button className="p-3 rounded-md bg-cyan-700" onClick={prevSlide}>Previous Page</button>
                <button className="p-3 rounded-md bg-cyan-700" onClick={nextSlide}>Next Page</button>
            </div>

        </section>
    )
};
export default Carousel