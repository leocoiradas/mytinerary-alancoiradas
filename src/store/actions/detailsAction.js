import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const details_action = createAsyncThunk('details_action', async(obj) =>{
    try {
        const response = await axios.get(`http://localhost:7000/api/cities/${obj.id}`)
        return {
            cityDetails: response.data.cityById
    }
    } catch (error) {
        console.log(error)
    }
})

export default details_action