import MenuLink from '../../atoms/MenuLink/MenuLink'
import { useNavigate } from 'react-router-dom'

//style
import './Header.scss'

//assets
import searchIcon from '../../../img/icons/searchIcon.svg'
import shoppIcon from '../../../img/icons/shoppIcon.svg'
import userIcon from '../../../img/icons/userIcon.svg'

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

    return (
        <header className="header">

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

            <button className='search'>
                <div class="searchInput">
                    <input />
                </div>
                <img src={searchIcon}/>
            </button>
            
            <button>
                <img src={shoppIcon}/>
            </button>

            <button onClick={()=> navigate('/login')}>
                <img src={userIcon}/>
            </button>




        </header>
    )
}