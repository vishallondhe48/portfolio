import React from 'react'
import './About.scss'

const About = () => {
    return (
        <>
            <div className="about container">
                <h2 className='section-title'>about me.</h2>
                <div className="about-section">
                    <div className="img-section box">
                        <img src="./images/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg" alt="" />
                    </div>
                    <div className="text-section box">
                        <p>
                            Hello, my name is vishal londhe and i am self taught web developer.
                            i can design and create websites using html,css, javascript and frontend frameworks like react.
                        </p>
                        <p>I also use backend technologies likes of express, mongoDB to create full stack web sites.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About
