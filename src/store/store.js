import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducer";
import detailsReducer from "./reducers/detailsReducer";
import userReducer from "./reducers/userReducer";
import itineraryReducer from "./reducers/itineraryReducer";


const store = configureStore({
    reducer: {
        citiesReducer: citiesReducer,
        detailsReducer: detailsReducer,
        userReducer: userReducer,
        itineraryReducer: itineraryReducer
    }
});
export default store 