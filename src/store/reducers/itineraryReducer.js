import { createReducer } from "@reduxjs/toolkit";
import { create_itinerary } from "../actions/itineraryAction";

const initialState = {
    itinerary: []
}

const itineraryReducer = createReducer(initialState, 
    (builder) => builder
        .addCase(create_itinerary.fulfilled, (state, action) => {
            return {
                ...state,
                itinerary: action.payload.itinerary
            }
        }))

export default itineraryReducer