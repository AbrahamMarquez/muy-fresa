import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//style
import './HeaderMobile.scss'

//assets
import returnIcon from '../../../img/icons/returniconWhite.svg'
import searchIcon from '../../../img/icons/searchIcon.svg'
import shoppIcon from '../../../img/icons/shoppIcon.svg'
import userIcon from '../../../img/icons/userIcon.svg'
import InputText from '../../atoms/InputText/InputText'
import MenuLink from '../../atoms/MenuLink/MenuLink'

export default function ({
    showSideMenu,
    setShowSideMenu,
    options
}) {

    const navigate = useNavigate()

    const [search, setSearch] = useState('')

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        if (showSideMenu) {
            document.getElementById('headerMobile').style.display = 'block'
            setTimeout(() => {
                document.getElementById('closeContainer').style.display = 'block'
                document.getElementById('sideBarContainer').style.right = '0'
            }, 50);
        } else {
            document.getElementById('closeContainer').style.display = 'none'
            document.getElementById('sideBarContainer').style.right = '-100%'
            setTimeout(() => {
                document.getElementById('headerMobile').style.display = 'none'
            }, 300);
        }
    }, [showSideMenu])


    return (
        <div className='headerMobile' id='headerMobile'>
            <div className='closeContainer' id='closeContainer'></div>
            <div className='sideBarContainer' id='sideBarContainer'>
                <img width='30px' style={{ marginLeft: '-10px' }} src={returnIcon} onClick={() => setShowSideMenu(false)} />

                <button className='loginBtn' onClick={() => navigate('/login')}>
                    <img src={userIcon} />
                </button>

                <div className='search'>
                    <div className='searchInput'>
                        <InputText
                            placeholder={'Buscar'}
                            value={search}
                            onChange={(e) => handleChangeSearch(e)}
                            width={'100%'}
                        />
                    </div>
                    <button className='imgContainer'>
                        <img src={searchIcon} />
                    </button>
                </div>

                {
                    options.map((item, idx) => (
                        <MenuLink
                            key={idx}
                            link={item.link}
                            title={item.title}
                            options={item.subOptions}
                        />
                    ))
                }

                <div className='shoppButtonContainer'>
                    <button onClick={() => navigate('/shopping')} className='shoppButton'>
                        <img src={shoppIcon} />
                        Carrito de compras
                    </button>
                </div>




            </div>

        </div>
    )
}