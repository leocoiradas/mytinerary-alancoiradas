import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const create_itinerary = createAsyncThunk('create_itinerary', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:7000/api/itineraries', obj);
        return {
            itinerary: data
        }
    } catch (error) {
        console.log(error)
    }
})