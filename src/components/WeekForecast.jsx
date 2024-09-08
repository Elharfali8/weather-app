import React from 'react'
import Title from './Title'
import { sevenForecast } from '../utils/data'

const WeekForecast = () => {
  
  return (
    <div className='secondary-color px-4 lg:px-8 py-8 lg:py-10 rounded-xl'>
      <Title text='7-day forecast' />
      <div className='grid gap-y-2'>
        {sevenForecast.map((item) => {
          const { id, day, degD, degN, icon, condition } = item
          return (
            <div key={id} className='flex items-center justify-between py-3 lg:py-5 border-b border-b-[#9399A2] px-2 lg:px-3'>
              <h3 className='text capitalize text-lg lg:text-xl poppins-medium tracking-wide'>{day}</h3>
              <div className='flex items-center gap-x-2 lg:gap-x-4'>
                <img src={icon} alt="icon" className='max-w-[50px]' />
                <h2 className='text-lg lg:text-xl poppins-semibold capitalize tracking-wider'>{condition}</h2>
              </div>
              <p className='poppins-semibold sm:text-lg lg:text-xl '>
                {degD}  <span className='text'>/ {degN}</span>
              </p>
            </div>
          )
        })}
      </div>
        </div>
  )
}

export default WeekForecast