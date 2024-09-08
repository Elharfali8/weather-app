import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    weather: [],
    query: '',
    error: null,
}

const apiKey = import.meta.env.VITE_API_KEY

export const fetchWeatherData = createAsyncThunk('fetch/fetchWeatherData', async ({ city }) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        const data = response.data
        return data
    } catch (error) {
        throw new Error(error.message || `there was an error`)
    }
})

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.weather = action.payload;
                state.error = null;
            })
            .addCase(fetchWeatherData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    }
})

export const {setQuery} = weatherSlice.actions

export default weatherSlice.reducer