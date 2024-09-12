import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./features/weatherSlice";
import todayForecastReducer from "./features/todayForecast/todayForecastSlice";

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        todayForecast: todayForecastReducer
    }
})