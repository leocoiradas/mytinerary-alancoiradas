import React from "react"; 
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <main className="min-h-[80vh]  flex justify-center items-center ">
            <section className="flex flex-col justify-center items-center rounded-md border-2 border-black w-[75vw] md:w-[35vw] gap-4 p-4">
                <h2 className="text-2xl font-sans font-bold">Sign Up</h2>
                <p className="text-xl text-center">Sign up to create an account and enjoy all the stuff our platflorm can offer.</p>
                <form className=" flex flex-col justify-center items-start gap-3 p-3 w-full">
                <div className="flex flex-col gap-2 w-full">
                        <label for="user" className="md:text-lg">User: </label>
                        <input type="text" name="user"  id="user" className="rounded-md border-2 border-black w-full text-lg  p-1" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label for="email" className="md:text-lg">Email: </label>
                        <input type="email" name="email"  id="email" className="rounded-md border-2 border-black w-full text-lg  p-1" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label for="password" className="md:text-lg">Password: </label>
                        <input type="password" name="password" id="password" className="rounded-md border-2 border-black w-full text-lg  p-1" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label for="image" className="md:text-lg">Image: </label>
                        <input type="text" name="image"  id="image" className="rounded-md border-2 border-black w-full text-lg  p-1" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label for="country" className="md:text-lg">Country: </label>
                        <select type="select" name="country"  id="country" className="rounded-md border-2 border-black w-full text-lg  p-1" />
                    </div>
                </form>
                <p className="text-xl">Already have an account? <Link to="/signin" className="text-blue-600">Sign In</Link></p>
            </section>
        </main>
    )
}

export default SignUp