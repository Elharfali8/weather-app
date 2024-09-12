import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchTodayForecast = createAsyncThunk('todayForecast/fetchTodayForecast', async ({city}, thunkAPI) => {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            
            const today = new Date().toISOString().split('T')[0];
            const todayForecast = data.list.filter(forecast => forecast.dt_txt.startsWith(today));

            return todayForecast;
        } else {
            return thunkAPI.rejectWithValue(data.message);
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const todayForecastSlice = createSlice({
    name: 'todayForecast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodayForecast.pending, (state) => {
                state.isLoading = true;
                state.error = null; 
            })
            .addCase(fetchTodayForecast.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload; 
            })
            .addCase(fetchTodayForecast.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload; 
            });
    },
})

export default todayForecastSlice.reducer