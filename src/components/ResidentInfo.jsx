import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./ResidentInfo.css"

const ResidentInfo = ({ resident }) => {

    const [users, setUsers] = useState()

    useEffect(() => {
        if (resident === undefined) return;
        const URL = resident
        axios.get(URL)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err.message))
     }, [resident])

    return (
        <article className='container__resident'>
            <header className='container__img'>
                <img src={users?.image} />
                <h1> {`${users?.name}`}</h1>
                <div className='container__status'>
                    <h2>{`Status: ${users?.status}`}</h2>
                </div>
                <div className={`circle circle-${users?.status}`}></div>
            </header>
            <footer className='container__footer-resident'>
                <h2>{`Origin: ${users?.origin.name}`}</h2>
                <h2>{`Number of Episodes: ${users?.episode.length}`}</h2>
            </footer>
        </article>
    )
}

export default ResidentInfo