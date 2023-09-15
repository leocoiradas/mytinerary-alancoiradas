import { createReducer } from "@reduxjs/toolkit";
import { user_photo, user_login, user_token, user_logout, user_signup } from '../actions/userAction';


const initialState = {
    user: null,
    token: null,
    photo: null
}

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo, (state, action) => {
            return {
                ...state,
                photo: action.payload.photo
            }
        })
        .addCase(user_login.fulfilled, (state, action) => {

            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_token, (state, action) => {

            return {
                ...state,
                user: action.payload.user,
            }
        })
        .addCase(user_logout.fulfilled, (state, action) => {
            return {
                ...initialState
            }
        })
        .addCase(user_signup.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
)

export default userReducer