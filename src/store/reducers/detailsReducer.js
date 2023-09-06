import { createReducer } from "@reduxjs/toolkit";
import details_action from "../actions/detailsAction";
const initialState = {
    cityDetails: []
}

const detailsReducer = createReducer(initialState,
    (builder) => builder
        .addCase(details_action.fulfilled, (state, action) => {
            return {
                ...state,
                cityDetails: action.payload.cityDetails
            }
        }))

        
export default detailsReducer