import React from 'react'
import './About.scss'

const About = () => {
    return (
        <div className='about'>
            <section className="left">
                <img src="./images/Saly-13.png" width='600px' height='auto' alt="" />
            </section>
            <section className="right">
                <h2>About <span>me</span> </h2>
                <p>Hi, i am vishal londhe and i am the web developer.i can create awesome functional websites for you.</p>
                <a href="#">Download cv</a>
            </section>
        </div>
    )
}

export default About
