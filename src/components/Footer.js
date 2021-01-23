import React from 'react'
import { FaLinkedin,  FaGithub } from 'react-icons/fa'
import './Footer.scss'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="social-links" target="_blank" rel="noopener noreferrer" >

                    {/* <a href="#" >
                        <SiFiverr className='icons' />

                    </a> */}

                    <a href="https://www.linkedin.com/in/vishal-londhe-6832a1169/" target="_blank" rel="noopener noreferrer" >
                        <FaLinkedin className='icons' />

                    </a>


                    {/* <a href="#" target="_blank" rel="noopener noreferrer" >
                        <FaInstagram className='icons' />

                    </a> */}

                    <a href="https://github.com/vishallondhe48" target="_blank" rel="noopener noreferrer" >
                        <FaGithub className='icons' />

                    </a>




                </div>
                <p>&copy; copyright by vishal londhe 2021</p>
            </footer>
        </>
    )
}

export default Footer
