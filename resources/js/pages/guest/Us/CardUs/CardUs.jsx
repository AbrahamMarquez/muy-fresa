import React, { useEffect, useState } from 'react'

import './CardUs.scss'

const CardUs = ({ item, id }) => {

    const [team, setTeam] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setTeam(window.pageYOffset > 1500)
        });
    }, [])

    useEffect(() => {
        const item = document.getElementById(id)
        const par = id.split('item')
        if(team){    
            if (par[1] % 2 === 0) {
                item.style.marginLeft = '0'
            } else {
                item.style.marginRight = '0'
            }
        }else{
            if (par[1] % 2 === 0) {
                item.style.marginLeft = '-100vw'
            } else {
                item.style.marginRight = '-100vw'
            }
        }
    }, [team])


    return (
        <div className='cardUs' id={id}>
            <div className='imgContainer'>
                <img src={item.img} />
            </div>
            <div className='name'>
                <h5>{item.name}</h5>
                <p>{item.charge}</p>
            </div>
        </div>
    )
}

export default CardUs