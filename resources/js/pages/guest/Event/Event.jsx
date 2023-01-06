import React, { useEffect, useRef, useState } from 'react'

//styles
import './Event.scss'

//assets
import ballons from '../../../img/home/ballons.png'
import strawberry from '../../../img/home/imgStrawberry.png'
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
import gallery1 from '../../../img/events/gallery/gallery1.png'
import gallery2 from '../../../img/events/gallery/gallery2.png'
import gallery3 from '../../../img/events/gallery/gallery3.png'
import gallery4 from '../../../img/events/gallery/gallery4.png'
import gallery5 from '../../../img/events/gallery/gallery5.png'
import gallery6 from '../../../img/events/gallery/gallery6.png'
import gallery7 from '../../../img/events/gallery/gallery7.png'
import gallery8 from '../../../img/events/gallery/gallery8.png'
import gallery9 from '../../../img/events/gallery/gallery9.jpeg'

//components
import { SectionEvent } from './SectionEvent/SectionEvent'
import InputTime from '../../../components/atoms/InputTime/InputTime'
import InputText from '../../../components/atoms/InputText/InputText'
import { ColorValidation, UpdateValue } from '../../../utilities/Validations'
import InputNumber from '../../../components/atoms/InputNumber/InputNumber'
import CheckboxCircle from '../../../components/atoms/CheckBoxCircle/CheckboxCircle'
import { Carousel } from 'primereact/carousel';
import TextArea from '../../../components/atoms/TextArea/TextArea'
import GeneralCalendar from '../../../components/molecules/GeneralCalendar/GeneralCalendar'

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
            name: 'Fresas con crema'
        },

        {
            img: img7,
            name: 'Vaso fresero'
        },

    ]

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <img src={product.img} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className="product-image" />
            </div>
        );
    }

    const [products, setProducts] = useState([
        {
            img: gallery1
        },
        {
            img: gallery2
        },
        {
            img: gallery3
        },
        {
            img: gallery4
        },
        {
            img: gallery5
        },
        {
            img: gallery6
        },
        {
            img: gallery7
        },
        {
            img: gallery8
        },
        {
            img: gallery9
        },
    ])

    const refS3 = useRef(null);
    const refS4 = useRef(null);

    const [showDateInput, setShowDateInput] = useState(false)
    const [date, setDate] = useState()
    const [inputList, setInputList] = useState({
        time: { value: null, validationType: 'empty' },
        name: { value: null, validationType: 'empty' },
        email: { value: null, validationType: "email" },
        phone: { value: null, validationType: "empty" },
        address: { value: null, validationType: "empty" },
        personsNumber: { value: null, validationType: "empty" },
        comments: { value: null, validationType: 'empty' }
    })
    const [checkList, setCheckList] = useState([
        {
            text: 'Brochetas',
            id: 0,
            selected: false
        },
        {
            text: 'Vaso de fresas',
            id: 1,
            selected: false
        },
        {
            text: 'Paleta de hielo',
            id: 2,
            selected: false
        },
        {
            text: 'Bowl (Frutos rojos, crema, chocolater)',
            id: 3,
            selected: false
        },
        {
            text: 'Brochetas',
            id: 4,
            selected: false
        },
        {
            text: 'Brochetas',
            id: 5,
            selected: false
        },
    ])

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList)
            }
            if (propertyName == "email") {
                ColorValidation(propertyName, inputList, "email")
            }
        }
    }, [inputList])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const toS3 = () => {
        refS3.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const toS4 = () => {
        refS4.current?.scrollIntoView({ behavior: 'smooth' });
    };



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
                    <button onClick={toS3}>Mesas para postre</button>
                    <button onClick={toS4}>Fresa móvil</button>
                    <p>Haz tu pedido con mínimo 3 días de anticipación</p>
                    <p>No aplica descuento por anticipación</p>
                </div>
            </div>

            <div ref={refS3}>
                {
                    data.map((item, idx) => (
                        <SectionEvent data={item} key={idx} />
                    ))
                }
            </div>

            <div className='sections s2' ref={refS4}>
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

            <div className='sections s3'>
                <div className='s3-left'>
                    <p>Productos a elegir</p>
                    <span>(Max 3 productos)</span>

                    <div className='imgContainerAll'>

                        {
                            imgs.map((item, idx) => (
                                <div key={idx} className='imgContainer'>
                                    <img src={item.img} />
                                    <p>{item.name}</p>
                                </div>
                            ))
                        }

                    </div>

                </div>
                <div className='s3-right'>
                    <h5>Reserva con anticipación el</h5>
                    <h3>Fresa <span>Móvil</span></h3>

                    <form onSubmit={(e) => handleSubmit(e)} className='form'>
                        <div className='d-flex' style={{ alignItems: 'flex-end' }}>
                            <button type='text' onClick={() => setShowDateInput(true)} className='dateButton'>Seleccionar fecha</button>

                            {
                                showDateInput &&
                                <GeneralCalendar description='Cuentas con 24hrs para confirmar tu reserva de lo contrario de perderá dicha reservación.' className={'backPink'} value={date} setValue={setDate} openModal={setShowDateInput}/>

                            }
                            <InputTime className={'ml-10 w-30'} title={' Hora del evento'} onChange={(e) => { UpdateValue(e, "time", inputList, setInputList) }} id={'time'} placeholder="Hora del evento" />
                        </div>
                        <InputText className={'mt-20'} title={' Nombre completo'} onChange={(e) => { UpdateValue(e, "name", inputList, setInputList) }} id={'name'} placeholder="Nombre completo" />
                        <div className='d-flex mt-20'>
                            <InputText className={'w-40'} title={' Correo electrónico'} onChange={(e) => { UpdateValue(e, "email", inputList, setInputList) }} id={'email'} placeholder="Correo electrónico" />
                            <InputNumber className={'w-30 ml-10'} title={'Teléfono'} onChange={(e) => { UpdateValue(e, "phone", inputList, setInputList) }} id={'phone'} placeholder="Número de teléfono" />
                        </div>
                        <InputText className={'mt-20'} title={'Dirección completa'} onChange={(e) => { UpdateValue(e, "address", inputList, setInputList) }} id={'address'} placeholder="Dirección completa" />
                        <div className='d-flex mt-20'>
                            <InputNumber title={'Número de personas'} onChange={(e) => { UpdateValue(e, "personsNumber", inputList, setInputList) }} id={'personsNumber'} placeholder="00" />
                            <div className='ml-10'>
                                <p>Selecciona 3 productos</p>
                                {
                                    checkList.map((item, idx) => (
                                        <CheckboxCircle key={idx} className={'check'}>{item.text}</CheckboxCircle>
                                    ))
                                }
                            </div>
                        </div>
                        <TextArea className={'mt-20'} title={'Comentarios / Preguntas *'} onChange={(e) => { UpdateValue(e, "comments", inputList, setInputList) }} id={'comments'} placeholder="" />
                        <button type='submit' className='submit mt-20'>Enviar mensaje</button>
                    </form>


                </div>

            </div >
            <div className='s4'>
                <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} />
            </div>

        </div >
    )
}

export default Event
