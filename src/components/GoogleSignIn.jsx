import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react"

export const GoogleSignin = () => {

    const googleButton = useRef();

    const handleCredentialResponse = async (response) => {
        const data = {
            token_id: response.credential
        }

        const userResponse = await axios.post('http://localhost:7000/api/auth/google', data);

        console.log(userResponse)
    }

    useEffect(() => {
        window.onload = function () {
            window.google.accounts.id.initialize({
                client_id: "280288090319-ih52c4vv3s1irphnm68ra1a81t3bfo8g.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                {type: 'standard', shape: 'pill', theme: "filled_blue", size: "large", text: 'signin_with' }  // customization attributes
            );
        }
    }, [])

    return (
        <div ref={googleButton}></div>
    )
}
