import React from "react"; 
import { Link } from "react-router-dom";
import { countries } from "../assets/data/countries";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { user_signup } from "../store/actions/userAction";

function SignUp() {
    const [formData, setFormData] = useState({
        user: '',
        email: '',
        password: '',
        image: '',
        country: ''
    })

    const dispatch = useDispatch();

    const handleInput = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    console.log(formData)

    const handleSignIn = async (event) => {
        event.preventDefault();

        try {
            dispatch(user_signup({
                data: formData
            }))
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main className="min-h-[80vh]  flex justify-center items-center ">
            <section className="flex flex-col justify-center items-center rounded-md border-2 border-black w-[75vw] lg:w-[35vw] gap-4 p-4">
                <h2 className="text-2xl font-sans font-bold">Sign Up</h2>
                <p className="text-xl text-center">Sign up to create an account and enjoy all the stuff our platflorm can offer.</p>
                <form className=" flex flex-col justify-center items-start gap-3 p-3 w-full">
                <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="user" className="md:text-lg">User: </label>
                        <input type="text" name="user"  id="user" placeholder="username" onChange={handleInput} className="rounded-md border-2 border-black w-full text-lg  p-1" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="email" className="md:text-lg">Email: </label>
                        <input type="email" name="email"  id="email" placeholder="emailexample@gmail.com" onChange={handleInput} className="rounded-md border-2 border-black w-full text-lg  p-1" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="password" className="md:text-lg">Password: </label>
                        <input type="password" name="password" id="password" placeholder="password" onChange={handleInput} className="rounded-md border-2 border-black w-full text-lg  p-1" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="image" className="md:text-lg">Image: </label>
                        <input type="text" name="image"  id="image" onChange={handleInput} className="rounded-md border-2 border-black w-full text-lg  p-1" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="country" className="md:text-lg">Country: </label>
                        <select type="select" name="country"  id="country" onChange={handleInput} className="rounded-md border-2 border-black w-full text-lg  p-1">
                            {countries.map((country) => <option className="w-28 md:w-full text-sm md:text-base" value={country}>{country}</option>)}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        onClick={handleSignIn}
                    >
                        Sign up
                    </button>
                </form>
                <p className="text-xl">Already have an account? <Link to="/signin" className="text-blue-600">Sign In</Link></p>
            </section>
        </main>
    )
}

export default SignUp