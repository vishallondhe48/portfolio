import React from 'react'
import './Portfolio.scss'
import Card from '../components/Card'

const Portfolio = () => {
    return (
        <>
            <div className='portfolio'>
                <h1 className='title'>Portfolio</h1>
                <p className='subtitle'>Here is some of my work</p>
                <div className="card-container">
                    <Card className='card' />
                    <Card className='card' />
                    <Card className='card' />
                    <Card className='card' />
                </div>
            </div>
        </>
    )
}

export default Portfolio
