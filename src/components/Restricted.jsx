import React from "react";
import { Link } from "react-router-dom";

function Restricted() {
    return (
        <main className=" flex justify-center items-center min-h-[80vh] p-3">
            <section className="flex flex-col justify-center items-center md:w-[60vw] border-2 rounded-md border-black gap-5 p-5 text-2xl text-center">
                <h2>Alert!! This is a restricted destiny!! 🛬</h2>
                <p>The content you want to see is for our users only. If you want to see all the content we have to offer, please sign up with the button down here.</p>
                <Link to='/signup' className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-xl text-white hover:bg-violet-500">Sign Up</Link>
                <p>Have a great day!! 😄</p>
            </section>
        </main>
    )
}

export default Restricted