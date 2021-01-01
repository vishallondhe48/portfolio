import React, { useState } from 'react'
import './Nav.scss'

const Nav = () => {
    const [state, setState] = useState(false)

    const handleToggle = () => {
        setState(!state)
        console.log(state)
    }
    const handleClick = () => {
        console.log('clicked!')
    }
    return (

        <nav>
            <div className="wrapper container">
                {/* logo */}
                <a href="#" id='logo'>vishal</a>

                <div className="toggler-btn">
                    <button onClick={handleToggle}>submit</button>
                </div>
                {/* nav-links */}
                <div className={state ? 'nav-links active' : 'nav-links'}>
                    <a href="#">portfolio</a>
                    <a href="#">about</a>
                    <a href="#">contact</a>
                </div>
            </div>


            {/* navbar-toggler */}

        </nav>

    )
}

export default Nav
