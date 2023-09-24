import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { user_login } from "../store/actions/userAction";
import { GoogleSignin } from "./GoogleSignIn";

function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch();

    const handleInput = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSignIn = async (event) => {
        event.preventDefault();
        try {
            dispatch(user_login({
                data: formData
            }))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="min-h-[80vh]  flex justify-center items-center ">
            <section className="flex flex-col justify-center items-center rounded-md border-2 border-black w-[75vw] md:w-[35vw]  gap-6 p-4">
                <h2 className="text-2xl font-sans font-bold">Sign In</h2>
                <p className="text-xl text-center">Sign in to watch all the content in our website.</p>
                <form onSubmit={handleSignIn} action="" className=" flex flex-col justify-center items-start gap-5 p-3 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <label for="email" className="md:text-lg">Email: </label>
                        <input type="email" name="email" id="email" onChange={handleInput} className="rounded-md border-2 border-black w-full text-lg  p-1" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label for="password" className="md:text-lg">Password: </label>
                        <input type="password" name="password" id="password" onChange={handleInput} className="rounded-md border-2 border-black w-full text-lg  p-1" />
                    </div>
                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        onClick={handleSignIn}
                    >
                        Sign in
                    </button>
                </form>
                <GoogleSignin />
                <p className="text-xl">You don't have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link></p>
            </section>
        </main>
    )
}

export default SignIn