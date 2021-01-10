import React from 'react'
import Card from './Card'
import './Cards.scss'
import data from '../data'

const Cards = () => {
    return (
        <div className='cards'>

            {
                data.map(data => (
                    <Card key={data.id} props={data} />

                ))
            }

        </div>
    )
}

export default Cards
