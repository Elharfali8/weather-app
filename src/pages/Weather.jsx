import React, { useEffect, useState } from 'react'
import { AirConditions, Forecast, SearchInput, TodayForecast, WeekForecast } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherData, setQuery } from '../features/weatherSlice'

const Weather = () => {
  const { isLoading, weather, error, query } = useSelector((store) => store.weather)
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [mainValue, setMainValue] = useState(query ? query : '')

  const handleValue = (e) => {
    const value = e.target.value
    setValue(value)
  }

  const submitBtn = (e) => {
    e.preventDefault()
    if (!value) {
      return
    }
    setMainValue(value)
    dispatch(setQuery(value))
  }

  useEffect(() => {
    dispatch(fetchWeatherData({city: mainValue}))
  }, [dispatch, mainValue])

  if (isLoading) {
    return (
      <main className='lg:ml-[130px] xl:ml-[130px] px-4 py-6 pb-14 lg:pb-6 grid place-items-center'>
        <div className="w-full h-[80vh]">
          Loading...
        </div>
      </main>
    )
  }

  if (weather.length < 1) {
    return (
      <main className='lg:ml-[130px] xl:ml-[130px] px-4 py-6 pb-14 lg:pb-6 grid place-items-center h-[80vh]'>
        <div className="w-full max-w-[800px]  text-center grid gap-y-3">
          <h1 className='tracking-wider poppins-bold text-3xl lg:text-4xl xl:text-5xl'>Stay Updated with Live Weather Forecasts</h1>
          <h3 className='tracking-wider poppins-medium text-lg lg:text-xl xl:text-2xl'>Enter any city name to get the latest weather updates and plan your day with confidence.</h3>
        <SearchInput value={value} handleValue={handleValue} submitBtn={submitBtn} />
        </div>
      </main>
    )
  }

  return (
    <main className='lg:ml-[130px] xl:ml-[130px] px-4 py-6 pb-14 lg:pb-6'>
      <div className='grid lg:grid-cols-4 xl:grid-cols-8 gap-2'>
        <div className='h-full w-full grid gap-y-4  col-span-1 lg:col-span-3 xl:col-span-5'>
          <SearchInput value={value} handleValue={handleValue} submitBtn={submitBtn} />
          <Forecast data={weather} />
          <TodayForecast city={mainValue} />
          <AirConditions />
        </div>
        <div className='h-full w-full  col-span-1 xl:col-span-3 lg:pt-14'>
          <WeekForecast />
        </div>
      </div>
    </main>
  )
}

export default Weather