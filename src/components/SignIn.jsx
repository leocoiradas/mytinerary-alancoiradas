import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
    return (
        <main className="min-h-[80vh]  flex justify-center items-center ">
            <section className="flex flex-col justify-center items-center rounded-md border-2 border-black w-[75vw] md:w-[35vw] h-96 gap-6 p-4">
                <h2 className="text-2xl font-sans font-bold">Sign In</h2>
                <p className="text-xl text-center">Sign in to watch all the content in our website.</p>
                <form className=" flex flex-col justify-center items-start gap-5 p-3 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <label for="email" className="md:text-lg">Email: </label>
                        <input type="email" name="email"  id="email" className="rounded-md border-2 border-black w-full text-lg  p-1" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label for="password" className="md:text-lg">Password: </label>
                        <input type="password" name="password" id="password" className="rounded-md border-2 border-black w-full text-lg  p-1" />
                    </div>
                </form>
                <p className="text-xl">You don't have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link></p>
            </section>
        </main>
    )
}

export default SignIn