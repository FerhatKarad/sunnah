import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import { GiTeacher } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import './Navbar.css'

export default function () {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(click => !click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect(() => {
       showButton()
    },[])

    window.addEventListener('resize', showButton);
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <GiTeacher className='navbar-icon' />
                        Sunnah
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links'  onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/kalender' className='nav-links'  onClick={closeMobileMenu}>
                                Kalender
                            </Link>
                        </li>                       
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/projekte' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>Projekte</Button>
                                </Link>
                            ) : (<Link to='/project' className='btn-link'  onClick={closeMobileMenu}>
                                <Button buttonStyle='btn--outline'>Projekte</Button>
                            </Link>)}
                        </li>
                        <li className="nav-item">
                            <Link to='/sunnahs' className='nav-links'  onClick={closeMobileMenu}>
                            Sunnahs
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}
