import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducer";
import detailsReducer from "./reducers/detailsReducer";


const store = configureStore({
    reducer: {
        citiesReducer: citiesReducer,
        detailsReducer: detailsReducer
    }
});
export default store 