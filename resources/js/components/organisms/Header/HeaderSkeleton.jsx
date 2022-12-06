import { Skeleton } from 'primereact/skeleton'
//components
import MenuLink from '../../atoms/MenuLink/MenuLink'
//style
import './Header.scss'

export default function () {

    const options = [1, 2, 3, 4, 5, 6]

    return (
        <header className="header">

            <div className='logo' onClick={() => navigate('/')}>
                <Skeleton width='100%' height='100%' shape='circle' />
            </div>

            <div className='sideMenu' onClick={() => setShowSideMenu(true)}>
                <Skeleton width='100%' height='100%' />
            </div>

            <div className='rightSide'>
                {
                    options.map((item, idx) => (
                        <MenuLink
                            key={idx}
                            skeleton
                        />
                    ))
                }

                <button className='imgContainer' style={{ padding: '0' }}>
                    <Skeleton width='100%' height='100%' shape='circle' />
                </button>


                <button style={{ padding: '0' }}>
                    <Skeleton width='100%' height='100%' shape='circle' />
                </button>

                <button style={{ padding: '0' }}>
                    <Skeleton width='100%' height='100%' shape='circle' />
                </button>
            </div>


        </header>
    )
}