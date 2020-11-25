import React from 'react'
import './HeaderBody.scss'

const HeaderBody = () => {
    return (
        <div className='HeaderBody'>
            <div className='img-section'>
                <img src="./images/Header.png" alt="" />
            </div>
            <div className='text-section'>
                <p>Hello, i am</p>
                <p className='name'>VISHAL LONDHE</p>
                <p className='desc'>i am a <span className='highlight'>web developer</span></p>
                <a href="#">check my work</a>
            </div>
        </div>
    )
}

export default HeaderBody
