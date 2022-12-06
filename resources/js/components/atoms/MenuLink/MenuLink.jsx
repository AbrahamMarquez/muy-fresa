import { NavLink } from 'react-router-dom'

//style
import './MenuLink.scss'

//assets
import downIcon from '../../../img/icons/downIconWhite.svg'
import upIcon from '../../../img/icons/upIconPink.svg'
import { Skeleton } from 'primereact/skeleton'

export default function ({
    link,
    title,
    options,
    skeleton
}) {

    return (
        <div>
            {
                !skeleton ?
                    <>

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
                    </>

                    :
                    <div className='menuLink'>
                        <Skeleton width='100px' height='40px' />
                    </div>
            }

        </div>
    )
}