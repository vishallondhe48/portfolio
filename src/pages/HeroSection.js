import React from 'react'
import './HeroSection.scss'

const HeroSection = () => {

    return (
        <>
            <div className="parent container">

                <div className="box box-1" >
                    <h2>Hi,</h2>
                    <p className='subtitle'>i am <span className='profile'> web developer</span></p>
                    <p className='text'>check out my work</p>
                    <a href='#' className='cta'>check work</a>
                </div>
                {/* <div className="box box-2">
                    <img src="./images/Header.png" alt="" />
                </div> */}
            </div>
        </>
    )
}

export default HeroSection









