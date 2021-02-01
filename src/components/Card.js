import React from 'react'
import './Card.scss'

const Card = ({ props }) => {

    return (
        <>
            <div className='card'>
                <img src={props.image} alt="" />

                <div className='overlay'>
                    <h2 className='card-title'>{props.name}</h2>

                    <div className="button">
                        <a href={props.linkGithub} target="_blank" rel="noopener noreferrer" className='btn'>view Github</a>
                        <a href={props.linkLiveDemo} target="_blank" rel="noopener noreferrer" className='btn'>Live Demo</a>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Card
