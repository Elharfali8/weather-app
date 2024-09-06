import React from 'react'
import Title from './Title'
import { forecast } from '../utils/data'

const TodayForecast = () => {
  return (
      <div className='secondary-color py-3 lg:py-4 px-2 lg:px-3 rounded-xl'>
          <Title text="today's forecast" />
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
              {forecast.map((item) => {
                  const { id, deg, time, icon } = item
                  return (
                      <div key={id} className='grid place-items-center gap-y-1'>
                          <h2 className='text text-lg'>{time}:00</h2>
                          <span>
                              <img src={icon} alt={time} className='w-full max-w-[55px]' />
                          </span>
                          <p className='poppins-medium text-lg lg:text-xl'>{deg}&deg;</p>
                      </div>
                  )
              })}
          </div>
    </div>
  )
}

export default TodayForecast