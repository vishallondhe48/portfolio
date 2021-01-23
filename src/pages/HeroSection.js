import React from 'react'
import './HeroSection.scss'

const HeroSection = () => {

    return (
        <>
            <div className="parent container">

                <div className="box box-1" >
                    <h2 className="name">vishal londhe</h2>
                    <p className='subtitle'>I’M A WEB DEVELOPER BASED IN PUNE</p>
                    <a href='#portfolio' className='cta'>check work</a>
                </div>


                <div className="moving-mouse-holder">
                    <div className="mouse">
                        <div className="mouse-button">&nbsp;</div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default HeroSection









