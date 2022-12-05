import { NavLink } from 'react-router-dom'

//style
import './MenuLink.scss'

//assets
import downIcon from '../../../img/icons/downIconWhite.svg'
import upIcon from '../../../img/icons/upIconPink.svg'

export default function ({
    link,
    title,
    options
}) {

    return (
        <div>
            <NavLink
                to={link}
                className='menuLink'
            >
                {title}
                {
                    options &&
                    <>
                        <img src={downIcon} className='down' />
                        <img src={upIcon} className='up' />
                    </>
                }

            </NavLink>
            {
                options &&
                <div className='options'>
                    {
                        options.map((item, idx) => (
                            <NavLink
                                key={idx}
                                to={item.link}
                                className='subMenuLink'
                            >{item.title}</NavLink>
                        ))
                    }
                </div>
            }

        </div>
    )
}