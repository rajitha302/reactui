import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import Logo from "../assets/images/logo.png"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Navdata } from './navdata'
import { IconContext } from 'react-icons'

function Navigation() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navibar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <div className="pt-5">
                            {Navdata.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </div>

                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navigation
