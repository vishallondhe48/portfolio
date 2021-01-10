import React from 'react'
import './Card.scss'

const Card = ({ props }) => {

    console.log(props)
    return (
        <>
            {/* <div className='flip-card'>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={`${props.image}`} alt="" />
                        <h3>{props.name}</h3>
                    </div>
                    <div className="flip-card-back">
                        <h1>{props.name}</h1>
                        <p>{props.description}</p>
                        <a href={props.linkGithub}>view Github</a>
                        <a href={props.linkLiveDemo}>Live Demo</a>
                    </div>
                </div>

            </div> */}
            <div className="card-wrapper">
                <div className="card">

                </div>
                <h2 className='card-title'>{props.name}</h2>

            </div>


        </>
    )
}

export default Card
