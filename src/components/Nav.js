import React, { useState } from 'react'
import './Nav.scss'

const Nav = () => {
    const [state, setState] = useState(false)

    const handleToggle = () => {
        setState(!state)
    }
    return (
        <div className='nav-wrapper'>
            <nav>
                <a href="#" className='logo'>vishal londhe</a>
                <div className='hamburger_btn' onClick={handleToggle}>
                    <div className={state ? 'bar change1' : 'bar'}></div>
                    <div className={state ? 'bar change2' : 'bar'}></div>
                    <div className={state ? 'bar change3' : 'bar'}></div>
                </div>
                <ul>
                    <a href="#">about</a>
                    <a href="#">work</a>
                    <a href="#">contact</a>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
