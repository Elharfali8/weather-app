import React from 'react'
import Title from './Title'
import temp from '../assets/temp.png'
import wind from '../assets/wind.png'
import drop from '../assets/drop.png'
import sun from '../assets/sun-icon.png'

const AirConditions = () => {
  return (
      <div className='secondary-color py-3 lg:py-4 px-2 lg:px-3 rounded-xl'>
          <div className='flex items-center justify-between'>
              <Title text='air conditions' />
              <button type="button" className='px-4 py-1 rounded-xl capitalize bg-[#9399A2] tracking-wider text-lg poppins-medium'>see more</button>
          </div>
          <div className='grid grid-cols-2 mt-2 lg:mt-4 gap-y-4 lg:gap-y-8'>
              {/* -------------------- */}
              <div>
                  <h3 className='flex items-center gap-x-2 text text-lg lg:text-xl tracking-wide'>
                      <img src={temp} alt="tempe" className='w-[25px]' />
                      Real Feel
                  </h3>
                  <h2 className='mt-2 lg:mt-3 text-xl md:text-2xl lg:text-3xl tracking-wide poppins-medium'>30&deg;</h2>
              </div>
              {/* -------------------- */}
              <div>
                  <h3 className='flex items-center gap-x-2 text text-lg lg:text-xl tracking-wide'>
                      <img src={wind} alt="wind" className='w-[25px]' />
                      Wind
                  </h3>
                  <h2 className='mt-2 lg:mt-3 text-xl md:text-2xl lg:text-3xl tracking-wide poppins-medium'>0.2 km/h</h2>
              </div>
                {/* -------------------- */}
                <div>
                  <h3 className='flex items-center gap-x-2 text text-lg lg:text-xl tracking-wide'>
                      <img src={drop} alt="drop" className='w-[25px]' />
                      Chance of rain
                  </h3>
                  <h2 className='mt-2 lg:mt-3 text-xl md:text-2xl lg:text-3xl tracking-wide poppins-medium'>0%</h2>
              </div>
              {/* -------------------- */}
              <div>
                  <h3 className='flex items-center gap-x-2 text text-lg lg:text-xl tracking-wide'>
                      <img src={sun} alt="sun" className='w-[25px]' />
                      UV Index
                  </h3>
                  <h2 className='mt-2 lg:mt-3 text-xl md:text-2xl lg:text-3xl tracking-wide poppins-medium'>3</h2>
              </div>
                {/* -------------------- */}
          </div>
    </div>
)
}

export default AirConditions