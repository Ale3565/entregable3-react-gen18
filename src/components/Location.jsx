import React from 'react'
import "./Location.css"

const Location = ({ locations }) => {

    return (
        <article className='container__location'>
            <header className='container__name'>
                <h1>{locations?.name}</h1>
            </header>
            <footer className='footer__location'>
                <h2>{`Type:  ${locations?.type}`}</h2>
                <h2>{`Dimension: ${locations?.dimension}`}</h2>
                <h2>{`Population: ${locations?.residents.length}`}</h2>
            </footer>
        </article>
    )
}

export default Location