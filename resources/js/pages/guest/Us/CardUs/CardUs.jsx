import { Skeleton } from 'primereact/skeleton'
import React, { useEffect, useState } from 'react'

import './CardUs.scss'

const CardUs = ({ item, id, skeleton }) => {

    const [team, setTeam] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.screen.width > 968) {
                setTeam(window.pageYOffset > 1500)
            } else {
                setTeam(window.pageYOffset > 860)
            }
        });
    }, [])

    useEffect(() => {
        const item = document.getElementById(id)
        const par = id.split('item')
        if (team) {
            if (par[1] % 2 === 0) {
                item.style.marginLeft = '0'
            } else {
                item.style.marginRight = '0'
            }
        } else {
            if (par[1] % 2 === 0) {
                item.style.marginLeft = '-100vw'
            } else {
                item.style.marginRight = '-100vw'
            }
        }
    }, [team])


    return (
        <>
            {
                !skeleton ?
                    <div className='cardUs' id={id}>
                        <div className='imgContainer'>
                            <img src={item.img} />
                        </div>
                        <div className='name'>
                            <h5>{item.name}</h5>
                            <p>{item.charge}</p>
                        </div>
                    </div>
                    :
                    <div className='cardUs' id={id}>
                        <div className='imgContainer'>
                           <Skeleton width='100%' height='100%' shape='circle'/>
                        </div>
                        <div className='name'>
                            <Skeleton width='50px' height='30px'/>
                            <Skeleton width='100px' height='40px'/>
                        </div>
                    </div>
            }
        </>
    )
}

export default CardUs