import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_details = createAsyncThunk('get_details', async (obj) => {
    try {
        const response = await axios.get(`http://localhost:7000/api/cities/${obj.cityId}`)
        console.log(response.data.cityById)
        return {
            details: response.data.cityById
        }
    } catch (error) {
        console.log(error)
    }
})

