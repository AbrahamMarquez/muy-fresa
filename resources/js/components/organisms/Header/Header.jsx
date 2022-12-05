//style
import MenuLink from '../../atoms/MenuLink/MenuLink'
import './Header.scss'

export default function () {

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

            

        </header>
    )
}