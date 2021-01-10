import React from 'react'
import './About.scss'

const About = () => {
    return (
        <>
            <div className="about container">
                <h2 className='title'>about me.</h2>
                <div className="about-section">
                    <div className="img-section box">
                        <img src="./images/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg" alt="" />
                    </div>
                    <div className="text-section box">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolores quaerat eveniet aut quasi reprehenderit deleniti vero nisi modi quae, aliquid repellat. Quis explicabo enim possimus quibusdam magni quasi dolorum in sint corporis velit blanditiis quaerat aliquam, minima facere suscipit magnam rem fugiat reprehenderit molestias similique reiciendis consectetur unde tenetur!
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
