import React from 'react'
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";


export const Navdata = [
    {
        title: 'Distance Cal',
        path: '/mainpage',
        icon: <AiIcons.AiOutlineColumnWidth />,
        cName: 'nav-text'
    },
    {
        title: 'Time Zone Cal',
        path: '/timezone',
        icon: <AiIcons.AiOutlineClockCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Closest Country',
        path: '/closestcountry',
        icon: <AiIcons.AiOutlineGlobal />,
        cName: 'nav-text'
    },
    {
        title: 'Keyword Finder',
        path: '/keyword',
        icon: <AiIcons.AiOutlineFileWord />,
        cName: 'nav-text'
    },
]
