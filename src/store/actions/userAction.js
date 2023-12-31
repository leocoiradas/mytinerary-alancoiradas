import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import axios from "axios";

export const user_photo = createAction('user_photo', (obj) => {


    return {
        payload: {
            photo: obj.photo
        }
    }
})

export const user_login = createAsyncThunk('user_login', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:7000/api/auth/signin', obj.data);
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        return {
            user: data.user,
            token: data.token
        }
    } catch (error) {
        console.log(error);
        return {
            user: null
        }
    }
})

export const google_signin = createAsyncThunk('google_signin', async (obj) => {
    /*try {
        const { data } = await axios.post('http://localhost:7000/api/auth/google', obj.data);
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))

        return {
            user: data.user,
            token: data.token
        }
    } catch (error) {
        console.log(error);
        return {
            user: null
        }
    }*/
    try {

        const { data } = await axios.post('http://localhost:7000/api/auth/google', obj);

        localStorage.setItem('token', data.response.token);
        localStorage.setItem('user', JSON.stringify(data.response.user));

        return {
            user: data.response.user,
            token: data.response.token
        };
    } catch (error) {
        console.log(error);
        return {
            user: null
        };
    }
})

export const user_signup = createAsyncThunk('user_signup', async (obj) => {
    try {
        const response = await axios.post('http://localhost:7000/api/auth/signup', obj.data);
        return response.data;
    } catch (error) {
        console.error("Error in signup:", error);
    }
});

export const user_logout = createAsyncThunk('user_logout', async () => {
    try {
        const token = localStorage.getItem('token');
        if (token) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            await axios.post('http://localhost:7000/api/auth/signout', null, config);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
        return console.log('Logged out successfully.');

    } catch (error) {
        console.log(error);
    }
})

export const user_token = createAction('user_token', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        payload: {
            user
        }
    }
})
