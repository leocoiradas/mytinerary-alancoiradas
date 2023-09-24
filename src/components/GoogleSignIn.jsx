import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { google_signin } from "../store/actions/userAction";
import { useDispatch } from "react-redux";

export const GoogleSignin = () => {
    const dispatch = useDispatch()

    const googleButton = useRef();



    const handleCredentialResponse = async (response) => {
        const data = {
            token_id: response.credential
        }
        //console.log(data)
        const userResponse = await axios.post('http://localhost:7000/api/auth/google', data);
        dispatch(google_signin(data))
        //console.log(userResponse.data.response.user)
        // console.log(userResponse)
    }
    const handleGoogleSignIn = async (event) => {
        event.preventDefault();
        try {
            // console.log('Token recibido:', response.credential);
            dispatch(google_signin({
                token_id: response.credential // Asegúrate de pasar el token_id
            }))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        /*window.onload = function () {
            window.google.accounts.id.initialize({
                client_id: "280288090319-ih52c4vv3s1irphnm68ra1a81t3bfo8g.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'pill', theme: "filled_blue", size: "large", text: 'signin_with' }  // customization attributes

            );
            googleButton.current.onclick = () => {
                // Llama a la acción google_signin
                dispatch(google_signin({}));
            };
        }*/
        const initializeGoogleSignIn = async () => {
            await new Promise((resolve) => {
                window.google.accounts.id.initialize({
                    client_id: "280288090319-ih52c4vv3s1irphnm68ra1a81t3bfo8g.apps.googleusercontent.com",
                    callback: handleCredentialResponse,
                    // Otras opciones de configuración aquí
                });
                resolve();
            });

            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'pill', theme: "filled_blue", size: "large", text: 'signin_with' }
            );

            googleButton.current.onclick = () => {
                // Llama a la acción google_signin
                dispatch(google_signin({}));
            };
            
        }
        initializeGoogleSignIn();
    }, [dispatch])

    return (
        <div ref={googleButton} onClick={handleGoogleSignIn}></div>
    )
}
