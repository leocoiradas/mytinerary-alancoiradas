import React from "react";
import Info from "./Welcome";
import Carousel from "./Carousel";
import cities from '../assets/data/Cities'
function Main(){
    const welcome = [{
        title: 'Find the perfect destination',
        description: 'Our App will help you find the perfect path for your next trip. With an easy-to-use interface, and a host of itinerary options, planning your next trip has never been easier',
        image: 'https://www.xtrafondos.com/wallpapers/montanas-con-nieve-en-el-bosque-3934.jpg'  
    }]
    return(
        <main className="flex flex-col justify-center items-center min-h-[80vh] p-5 gap-6">
            <section className="h-[90vh] flex justify-center items-center">
            {welcome.map((component, i)=> (<Info key={i} title={component.title} desc={component.description} img={component.image} />))}
            </section>
            <section>
                <Carousel arr={cities} />
            </section>

        </main>
    )
};
export default Main