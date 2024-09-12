import React, { useEffect } from 'react'
import Title from './Title'
import { sun, cloud, cloudy, raining, snow, moon } from '../assets'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodayForecast } from '../features/todayForecast/todayForecastSlice'

const TodayForecast = ({city}) => {
    const { isLoading, data, error } = useSelector((store) => store.todayForecast)
    const dispatch = useDispatch()

    useEffect(() => {
        // Dispatch the action to fetch the weather forecast for a specific city
        dispatch(fetchTodayForecast({ city }));
    }, [dispatch, city]);



    const getWeatherImage = (weatherMain, hour) => {
        
        const time = hour.split(' ')[1]; 
        const currentHour = parseInt(time.split(':')[0], 10); 
    
        
        const isNight = currentHour >= 18 || currentHour < 6;
    
        switch (weatherMain) {
            case 'Clear':
                return isNight ? moon : sun; 
            case 'Clouds':
                return cloud;
            case 'Rain':
                return raining;
            case 'Snow':
                return snow;
            case 'Drizzle':
                return cloudy;
            default:
                return cloud; 
        }
    };
    
    
    
  return (
      <div className='secondary-color py-3 lg:py-4 px-2 lg:px-3 rounded-xl'>
          <Title text="today's forecast" />
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4'>
          {data?.map((hour, index) => {
                    const weatherMain = hour.weather[0].main; 
                    const icon = getWeatherImage(weatherMain, hour.dt_txt); 
                    
                    
                    return (
                        <div key={index} className='grid place-items-center gap-y-1'>
                            <h2 className='text text-lg'>{hour.dt_txt.split(' ')[1]}</h2>
                            <span>
                                <img src={icon} alt={weatherMain} className='w-full max-w-[55px]' />
                            </span>
                            <p className='poppins-medium text-lg lg:text-xl'>{hour.main.temp}°C</p>
                        </div>
                    );
                })}
          </div>
    </div>
  )
}

export default TodayForecast