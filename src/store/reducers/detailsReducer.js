import { createReducer } from "@reduxjs/toolkit";
import { get_details } from "../actions/detailsAction";
const initialState = {
    cityDetails: []
}

const detailsReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_details.fulfilled, (state, action) => {
            return {
                ...state,
                cityDetails: action.payload.details
            }
        }))

        
export default detailsReducer