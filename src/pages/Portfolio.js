import React from 'react'
import './Portfolio.scss'
import Cards from '../components/Cards'


const Portfolio = () => {
    return (
        <>
            <div className='portfolio'>
                <h1 className='title'>Portfolio</h1>
                <Cards />
            </div>
        </>
    )
}

export default Portfolio
