import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//components
import MenuLink from '../../atoms/MenuLink/MenuLink'
import InputText from '../../atoms/InputText/InputText'
import HeaderMobile from '../HeaderMobile/HeaderMobile'
import { useLocation } from "react-router-dom";
//style
import './Header.scss'
import '../../../pages/MainRouter/MainRouter.scss'
//assets
import searchIcon from '../../../img/icons/searchIcon.svg'
import shoppIcon from '../../../img/icons/shoppIcon.svg'
import userIcon from '../../../img/icons/userIcon.svg'
import logoMuyFresa from '../../../img/icons/logoMuyFresa.svg'
import burguerIcon from '../../../img/icons/burguerIcon.svg'
import chocolateImg from '../../../img/header/animationChocolate.png'

export default function () {

    const [profileModal, setProfileModal] = useState(false)


    const navigate = useNavigate()

    const options = [
        {
            title: 'Inicio',
            link: '/',

        },
        {
            title: 'Arreglos',
            link: '/arrangements',
            subOptions: [
                {
                    title: 'Cajas',
                    link: '/arrangements'
                },
                {
                    title: 'Ramos',
                    link: '/arrangements'
                },
                {
                    title: 'Números y letras',
                    link: '/arrangements'
                },
                {
                    title: 'Canastas',
                    link: '/arrangements'
                },
                {
                    title: 'Torres',
                    link: '/arrangements'
                },
                {
                    title: 'Con vino',
                    link: '/arrangements'
                },
                {
                    title: 'Con flores',
                    link: '/arrangements'
                }
            ]
        },
        {
            title: 'Antojos',
            link: '/cravings'
        },
        {
            title: 'Evento',
            link: '/event'
        },
        {
            title: 'Galería',
            link: '/galery'
        },
        {
            title: 'Nosotros',
            link: '/us'
        }
    ]

    const [search, setSearch] = useState('')
    const [showSideMenu, setShowSideMenu] = useState(false)
    const [changeHeader, setChangeHeader] = useState(false);


    const handleShowInput = () => {
        if (document.getElementById('searchInput').style.width == '0px' || document.getElementById('searchInput').style.width == '') {
            document.getElementById('searchInput').style.width = '820px'
            document.getElementById('searchInput').style.padding = '0px 45px'
            document.getElementById('searchInput').style.border = '2px solid #db0032'
        } else {
            document.getElementById('searchInput').style.width = '0px'
            document.getElementById('searchInput').style.padding = '0'
            document.getElementById('searchInput').style.border = 'none'
        }
    }
    useEffect(() => {
        if (!changeHeader) {
            document.getElementById('chocolateDown').style.top = '-20px'
            document.getElementById('img-chocolate').style.display = 'initial'
            document.getElementById('chocolateDown').style.background = 'transparent'
        }
        else {
            document.getElementById('chocolateDown').style.top = '-150px'
            document.getElementById('chocolateDown').style.background = '#3b2b1e'
            document.getElementById('img-chocolate').style.display = 'none'
        }
    }, [changeHeader])
    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setChangeHeader(window.pageYOffset > 400)
            );
        }

    }, [])


    return (
        <header id={"header"} className={!changeHeader ? "header" : "header headerBackground "}>

            {/* {
                !changeHeader && */}
            <div className='chocolateDown' id='chocolateDown'>
                <img id='img-chocolate' src={chocolateImg} />
            </div>
            {/* }    */}
            <div id='logo' className={!changeHeader ? "logo" : "logo logoSmall"} onClick={() => navigate('/')}>

                <img src={logoMuyFresa} />
               
            </div>

            <div className='sideMenu' onClick={() => setShowSideMenu(true)}>
                <img src={burguerIcon} />
                
            </div>

            <HeaderMobile setShowSideMenu={setShowSideMenu} showSideMenu={showSideMenu} options={options} />

            <div className='rightSide'>
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

                <div className='search'>
                    <div id='searchInput' className="searchInput">
                        <InputText
                            placeholder={'Buscar'}
                            value={search}
                            onChange={(e) => handleChangeSearch(e)}
                            width={'100%'}
                        />
                    </div>
                    <button className='imgContainer' onClick={handleShowInput}>
                        <img src={searchIcon} />
                    </button>
                </div>

                <button onClick={() => navigate('/shopping')}>
                    <img src={shoppIcon} />
                </button>
                <div className="button-login-container">
                    <button className='btn btn1' onClick={()=>{navigate("/login")}}>Inicia sesión</button>
                    <button className='btn btn2' onClick={()=>{navigate("/register")}}>Regístrate</button>
                </div>
                
            </div>
            

        </header>
    )
}