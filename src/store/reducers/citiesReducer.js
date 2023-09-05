import { createReducer } from "@reduxjs/toolkit";
import {get_cities, filter_cities} from "../actions/citiesAction.js";

const initialState = {
    cities: []
}

const citiesReducer = createReducer(initialState, 
    (builder) => builder
    .addCase(get_cities.fulfilled, (state, action) => {
        return {
            ...state,
            cities: action.payload.cities
        }
    })
    .addCase(filter_cities.fulfilled, (state, action) => {
        return {
            ...state,
            cities: action.payload.cities
        }
    }))

export default citiesReducer