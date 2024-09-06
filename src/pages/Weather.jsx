import React from 'react'
import { AirConditions, Forecast, SearchInput, TodayForecast, WeekForecast } from '../components'

const Weather = () => {
  return (
    <main className='lg:ml-[130px] xl:ml-[130px] px-4 py-6 pb-14 lg:pb-6'>
      <div className='grid lg:grid-cols-3 xl:grid-cols-7 gap-2'>
        <div className='h-full w-full grid gap-y-4  col-span-1 lg:col-span-2 xl:col-span-4'>
          <SearchInput />
          <Forecast />
          <TodayForecast />
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