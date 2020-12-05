import React from 'react'
import Practiceprops from './Practiceprops'
import './Practice.scss'
import data from './data'

const Practice = () => {
    return (
        <div className='cards'>

            {
                data.map(data => (
                    <Practiceprops key={data.id} props={data} />
                    // <Practiceprops name={name} />
                ))
            }

        </div>
    )
}

export default Practice
