import React from 'react'

//styles
import './Event.scss'

//assets
import ballons from '../../../img/home/ballons.png'
import strawberry from '../../../img/home/imgStrawberry.png'
import { SectionEvent } from './SectionEvent/SectionEvent'
import oval from '../../../img/events/oval.jpg'
import oval1 from '../../../img/events/oval1.jpg'
import oval2 from '../../../img/events/oval2.jpg'
import oval3 from '../../../img/events/oval3.jpg'
import carImg from '../../../img/events/imageCar.png'
import strawberryUser from '../../../img/events/strawberryUser.svg'
import img1 from '../../../img/events/imgs/eventsImg1.jpeg'
import img2 from '../../../img/events/imgs/eventsImg2.jpg'
import img3 from '../../../img/events/imgs/eventsImg3.jpeg'
import img4 from '../../../img/events/imgs/eventsImg4.jpg'
import img5 from '../../../img/events/imgs/eventsImg5.jpg'
import img6 from '../../../img/events/imgs/eventsImg6.jpeg'
import img7 from '../../../img/events/imgs/eventsImg7.jpg'

const Event = () => {

    const data = [
        {
            leftImg: false,
            img: oval,
            title: 'Torres',
            subtitles: [
                {
                    name: 'Torre chica',
                    quantity: '30 fresas aproximadamente',
                    price: '$520'
                },
                {
                    name: 'Torre grande',
                    quantity: '50 fresas aproximadamente',
                    price: '$520'
                },
            ],
            includes: [
                'Base de madera, se entrega envuelto en tul con moño',
                'Fresas decoradas con chocolate y toppings de tu preferencia'
            ]
        },
        {
            leftImg: true,
            img: oval1,
            title: 'Brochetas',
            subtitles: [
                {
                    name: '8 Brochetas con base de madera',
                    quantity: '3 fresas por cada brocheta',
                    price: '$250'
                },
                {
                    name: 'Brocheta individual',
                    quantity: '3 fresas',
                    price: '$35'
                },
            ],
            includes: [
                'Base con 8 brochetas',
                'Cada brocheta contiene 3 fresas',
                'Se entrega en bolsa de celofán con moño',
            ],
            information: 'La base de brochetas es prestada. Se deja un deposito de $100 por c/u y al devolverlas se regresara el dinero.'
        },
        {
            leftImg: false,
            img: oval2,
            title: 'Tarimas',
            subtitles: [
                {
                    name: 'Tarima',
                    quantity: '16 fresas',
                    price: '$260'
                }
            ],
            includes: [
                'Base',
                '16 fresas personalizadas con toppings y chocolate a elegir.'
            ],
            information: 'La base de brochetas es prestada. Se deja un deposito de $100 por c/u y al devolverlas se regresara el dinero.'
        },
        {
            leftImg: true,
            img: oval3,
            title: 'Cajitas de fresas',
            subtitles: [
                {
                    name: 'Individual',
                    quantity: '1 fresa',
                    price: '$25'
                },
                {
                    name: 'Doble',
                    quantity: '2 fresas',
                    price: '$40'
                },
            ],
            includes: [
                'Caja de acetato con moño',
                'Fresa o fresas decoradas con chocolate y toppings a elegir'
            ]
        }
    ]

    const imgs = [
        {
            img: img1,
            name: 'Fresas individuales'
        },
        {
            img: img2,
            name: 'Brochetas'
        },
        {
            img: img3,
            name: 'Vasos de fresas'
        },

        {
            img: img4,
            name: 'Paleta de hielo'
        },

        {
            img: img5,
            name: 'Bowl'
        },

        {
            img: img6,
            name: 'Fresascon crema'
        },

        {
            img: img7,
            name: 'Vaso fresero'
        },

    ]



    return (
        <div className='event'>
            <div className='sections s1'>
                <div className='s1-left'>
                    <div className='s1-left-images'>
                        <img src={ballons} className='ballons' />
                        <div className='strawberry-container'>
                            <img src={strawberry} className='strawberry' />
                        </div>
                        <img src={ballons} className='ballons' />
                    </div>

                    <p>Haz tu pedido con mínimo 3 días de anticipación</p>
                    <p>No aplica descuento por anticipación</p>
                </div>
                <div className='s1-right'>
                    <h5>Eventos</h5>
                    <h3>Muy Fresa</h3>
                    <p>Acompaña tu mesa de postres con nuestros productos especiales para eventos.</p>
                    <button>Mesas para postre</button>
                    <button>Fresa móvil</button>
                    <p>Haz tu pedido con mínimo 3 días de anticipación</p>
                    <p>No aplica descuento por anticipación</p>
                </div>
            </div>

            {
                data.map((item, idx) => (
                    <SectionEvent data={item} key={idx} />
                ))
            }

            <div className='sections s2'>
                <div className='s2-left'>
                    <h3>Fresa <span>Móvil</span></h3>
                    <div>
                        <p>Incluye:</p>
                        <ul>
                            <li>3 Productos a elegir</li>
                            <li>Servicio</li>
                        </ul>
                    </div>
                    <div className='imgContainer'>
                        <img src={carImg} />
                    </div>
                </div>
                <div className='s2-right'>
                    <div className='container'>
                        <h3>Precios</h3>
                        <div className='containerPrices'>
                            <img src={strawberryUser} />
                            <div>
                                <p>Para 50 personas</p>
                                <p>$2,500 MXN</p>
                            </div>
                        </div>
                        <div className='containerPrices'>
                            <img src={strawberryUser} />
                            <div>
                                <p>Para 50 personas</p>
                                <p>$2,500 MXN</p>
                            </div>
                        </div>
                        <div className='containerPrices'>
                            <img src={strawberryUser} />
                            <div>
                                <p>Para 50 personas</p>
                                <p>$2,500 MXN</p>
                            </div>
                        </div>
                        <p>Para más de 150 personas</p>
                        <p>Se cotizará dependiendo el número de personas</p>

                        <p>Si tu evento es fuera de 3er Anillo se cobra extra por traslado</p>
                    </div>
                </div>

            </div>

            {/* <div className='sections s3'>
                <div className='s3-left'>
                    <p>Productos a elegir</p>
                    <span>(Max 3 productos)</span>

                    <div className=''>

                        {
                            imgs.map((item, idx) => (
                                <div key={idx}>
                                    <img src={item.img} />
                                    <p>{item.name}</p>
                                </div>
                            ))
                        }

                    </div>

                </div>
                <div className='s4-right'>

                </div>
            </div> */}

        </div>
    )
}

export default Event
