import React from 'react'
import './Card.scss'

const Card = ({ props }) => {

    console.log(props)
    return (
        <>
            <div className='card'>
                <img src={props.image} width={300} height={200} alt="" />
                {/* <h2 className='card-title'>{props.name}</h2>

                <div className='overlay'>
                    <p>{props.description}</p>
                    <div className="button">
                        <a href={props.linkGithub} className='btn btn-live'>view Github</a>
                        <a href={props.linkLiveDemo} className='btn btn-github'>Live Demo</a>
                    </div>

                </div> */}
            </div>

        </>
    )
}

export default Card
