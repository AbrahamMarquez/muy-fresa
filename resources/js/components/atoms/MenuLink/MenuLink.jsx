//style
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './MenuLink.scss'

export default function ({
    link,
    title,
    options
}) {

    return (
        <div className='menuLink'>
            <NavLink
                to={link}
            >
                {title}
            
            </NavLink>
        </div>
    )
}