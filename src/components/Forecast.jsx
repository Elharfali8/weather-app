import { sun, snow, raining, cloud, cloudy } from '../assets'
import { clearSky, fogy, snowy, rainy } from '../assets/weather-bg';

const Forecast = ({ data }) => {
    
    const { weather, name, main } = data
    const weatherMain = weather[0].main;

    const getBackgroundImage = (main) => {
        switch (main) {
          case 'Clear':
            return clearSky;
          case 'Clouds':
            return fogy;
          case 'Rain':
            return rainy;
          case 'Snow':
            return snowy;
          default:
            return clearSky; 
        }
      };

    const getWeatherImage = (main) => {
        switch (main) {
          case 'Clear':
            return <img src={sun} alt="sun" className='w-full max-w-[148px]' />;
          case 'Clouds':
            return <img src={cloud} alt="cloud" className='w-full max-w-[148px]' />;
          case 'Rain':
            return <img src={raining} alt="raining" className='w-full max-w-[148px]' />;
          case 'Snow':
            return <img src={snow} alt="snow" className='w-full max-w-[148px]' />;
          case 'Drizzle':
            return <img src={cloudy} alt="cloudy" className='w-full max-w-[148px]' />;
          default:
            return <img src={cloud} alt="default" className='w-full max-w-[148px]' />;
        }
      };

  return (
      <div
          className='py-8 lg:py-12 flex items-center justify-between px-2 rounded-xl overflow-hidden '
          style={{
            backgroundImage: `url(${getBackgroundImage(weatherMain)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}    
      >
          <div className='grid gap-y-3 main-opacity py-2 px-4 rounded-xl'>
              <div className='mb-4 lg:mb-8'>
                  <h1 className='poppins-semibold tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>{name}</h1>
                  <p className='text md:text-lg'>{weather[0].description}</p>
              </div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl  tracking-wide poppins-bold'>{main.temp}&deg;</h1>
          </div>
          <div className='grid place-items-center main-opacity py-1 px-2 rounded-xl'>
          {getWeatherImage(weatherMain)}
          </div>
      </div>
      
  )
}

export default Forecast