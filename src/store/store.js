import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducer";
import detailsReducer from "./reducers/detailsReducer";
import userReducer from "./reducers/userReducer";


const store = configureStore({
    reducer: {
        citiesReducer: citiesReducer,
        detailsReducer: detailsReducer,
        userReducer: userReducer
    }
});
export default store 