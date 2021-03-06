import React, { useState } from 'react'
import './Nav.scss'
import Logo from '../logo.svg';

const Nav = () => {
    const [state, setState] = useState(false)

    const handleToggle = () => {
        setState(!state)
        console.log(state)
    }

    return (

        <nav>
            <div className="wrapper container">
                {/* logo */}
                <a href="/" id='logo'>
                    <img src={Logo} alt="logo" width={40} height={40} />
                </a>


                {/* hamburger toggle */}
                <div className="menu-link-wrapper">
                    <div className={state ? "menu-link menu-trigger-open" : 'menu-link'} onClick={handleToggle}>
                        <span className="lines"></span>
                    </div>
                </div>



                {/* nav-links */}
                <div className={state ? 'nav-links active' : 'nav-links'}>
                    <a href="#portfolio">portfolio</a>
                    <a href="#about">about</a>
                    <a href="#contact">contact</a>
                </div>

            </div>


            {/* navbar-toggler */}

        </nav>

    )
}

export default Nav
