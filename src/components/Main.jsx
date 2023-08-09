import React from "react";
import Info from "./Welcome";
import Carousel from "./Carousel";
import cities from '../assets/data/Cities'
function Main(){
    const welcome = [{
        title: 'Find the perfect destination',
        description: 'Our App will help you find the perfect path for your next trip. With an easy-to-use interface, and a host of itinerary options, planning your next trip has never been easier.',
        slogan: 'Find your perfect trip, designed by insiders who know and love their cities.' ,
        image: 'src/assets/images/default-image.jpg'  
    }]
    return(
        <main className="flex flex-col justify-center items-center min-h-[80vh] p-5 gap-12">
            <section className="md:h-[90vh] flex justify-center items-center">
            {welcome.map((component, i)=> (<Info key={i} title={component.title} desc={component.description} slogan={component.slogan} img={component.image} />))}
            </section>
            <section>
                <Carousel arr={cities} />
            </section>

        </main>
    )
};
export default Main