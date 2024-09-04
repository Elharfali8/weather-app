import { TiWeatherPartlySunny } from "react-icons/ti";
import { CiBoxList } from "react-icons/ci";
import { LuBadgeInfo } from "react-icons/lu";
import { LuContact2 } from "react-icons/lu";

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