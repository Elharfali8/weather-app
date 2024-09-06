import sun from '../assets/sun.png'

const Forecast = () => {
  return (
      <div className='py-8 lg:py-12 flex items-center justify-between'>
          <div className='grid gap-y-3'>
              <div className='mb-4 lg:mb-8'>
                  <h1 className='poppins-semibold tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Madrid</h1>
                  <p className='text md:text-lg'>Chance of rain: 0%</p>
              </div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl  tracking-wide poppins-bold'>31&deg;</h1>
          </div>
          <div className='grid place-items-center'>
              <img src={sun} alt="sun" className='w-full max-w-[148px]' />
          </div>
      </div>
      
  )
}

export default Forecast