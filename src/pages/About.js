import React from 'react'
import './About.scss'

const About = () => {
    return (
        <div className='about'>
            <section className="left">
                <img src="https://images.unsplash.com/flagged/photo-1574874897534-036671407eda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=398&q=80" alt="" />
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
