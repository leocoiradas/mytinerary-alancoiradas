import { createReducer } from "@reduxjs/toolkit";
import {get_events} from "../actions/citiesAction.js";

const initialState = {
    cities: []
}

const citiesReducer = createReducer(initialState, 
    (builder) => builder
    .addCase(get_events.fulfilled, (state, action) => {
        return{
            ...state,
            cities: action.payload.cities
        }
    })
    .addCase())

export default citiesReducer