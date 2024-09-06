import { TiWeatherPartlySunny } from "react-icons/ti";
import { CiBoxList } from "react-icons/ci";
import { LuBadgeInfo } from "react-icons/lu";
import { LuContact2 } from "react-icons/lu";
import cloud from '../assets/cloud.png'
import cloudy from '../assets/cloudy.png'
import raining from '../assets/raining.png'
import sun from '../assets/sun.png'

export const navLinks = [
    {
        id: 1,
        title: 'weather',
        icon: <TiWeatherPartlySunny size={24} />,
        path: '/'
    },
    {
        id: 2,
        title: 'cities',
        icon: <CiBoxList size={24}/>,
        path: '/cities'
    },
    {
        id: 3,
        title: 'about us',
        icon: <LuBadgeInfo size={24} />,
        path: '/about'
    },
    {
        id: 4,
        title: 'contact',
        icon: <LuContact2 size={24} />,
        path: '/contact'
    },
]

export const forecast = [
    {
        id: 1,
        time: 6,
        deg: 25,
        icon: cloud
    },
    {
        id: 2,
        time: 9,
        deg: 28,
        icon: cloudy
    },
    {
        id: 3,
        time: 12,
        deg: 33,
        icon: sun
    },
    {
        id: 4,
        time: 3,
        deg: 34,
        icon: sun
    },
    {
        id: 5,
        time: 6,
        deg: 25,
        icon: raining
    },
]

export const sevenForecast = [
    {
        id: 1,
        day: 'Today',
        degD: '25',
        degN: '17',
        icon: cloud,
        condition: 'cloudy'
    },
    {
        id: 3,
        day: 'tue',
        degD: '33',
        degN: '26',
        icon: sun,
        condition: 'sunny'
    },
    {
        id: 4,
        day: 'wed',
        degD: '34',
        degN: '28',
        icon: sun,
        condition: 'sunny'
    },
    {
        id: 5,
        day: 'Thu',
        degD: '27',
        degN: '19',
        icon: raining,
        condition: 'rainy'
    },
    {
        id: 2,
        day: 'fri',
        degD: '25',
        degN: '20',
        icon: cloudy,
        condition: 'cloudy'
    },
    {
        id: 6,
        day: 'Sat',
        degD: '20',
        degN: '14',
        icon: cloudy,
        condition: 'cloudy'
    },
    {
        id: 7,
        day: 'sun',
        degD: '22',
        degN: '16',
        icon: cloudy,
        condition: 'cloudy'
    },
]