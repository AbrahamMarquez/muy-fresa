import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//components
import MenuLink from '../../atoms/MenuLink/MenuLink'
import InputText from '../../atoms/InputText/InputText'
import HeaderMobile from '../HeaderMobile/HeaderMobile'

//style
import './Header.scss'

//assets
import searchIcon from '../../../img/icons/searchIcon.svg'
import shoppIcon from '../../../img/icons/shoppIcon.svg'
import userIcon from '../../../img/icons/userIcon.svg'
import logoMuyFresa from '../../../img/icons/logoMuyFresa.svg'
import burguerIcon from '../../../img/icons/burguerIcon.svg'

export default function () {

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
                    link: '/arrangements/boxes'
                },
                {
                    title: 'Ramos',
                    link: '/arrangements/bouquets'
                },
                {
                    title: 'Números y letras',
                    link: '/arrangements/numbers-and-letters'
                },
                {
                    title: 'Canastas',
                    link: '/arrangements/baskets'
                },
                {
                    title: 'Torres',
                    link: '/arrangements/towers'
                },
                {
                    title: 'Con vino',
                    link: '/arrangements/with-wine'
                },
                {
                    title: 'Con flores',
                    link: '/arrangements/with-flowers'
                }
            ]
        },
        {
            title: 'Antojos',
            link: '/whim'
        },
        {
            title: 'Evento',
            link: 'event'
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
        <header className={!changeHeader ? "header" : "header headerBackground"}>

            <div className={!changeHeader ? "logo" : "logo logoSmall"} onClick={() => navigate('/')}>
                <img src={logoMuyFresa} />
            </div>

            <div className='sideMenu' onClick={() => setShowSideMenu(true)}>
                <img src={burguerIcon} />
            </div>

            <HeaderMobile setShowSideMenu={setShowSideMenu} showSideMenu={showSideMenu} options={options}/>

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

                <button onClick={() => navigate('/login')}>
                    <img src={userIcon} />
                </button>
            </div>


        </header>
    )
}