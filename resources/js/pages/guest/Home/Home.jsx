import { useEffect, useState } from 'react'

//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//style
import './Home.scss'

//assets
import chocolateImg from '../../../img/header/animationChocolate.png'
import imgCarousel1 from '../../../img/home/carousel1.jpeg'
import imgCarousel2 from '../../../img/home/carousel2.svg'
import imgCarousel3 from '../../../img/home/carousel3.svg'
import uber from '../../../img/home/uberImg.svg'
import rappi from '../../../img/home/rappiImg.svg'
import heartIcon from '../../../img/icons/heartIconPink.svg'
import whatsapp from '../../../img/icons/whatsapp.png'

//assets popular cards
import pop1 from '../../../img/home/popular/pop1.jpg'
import pop2 from '../../../img/home/popular/pop2.jpg'
import pop3 from '../../../img/home/popular/pop3.jpg'
import pop4 from '../../../img/home/popular/pop4.jpg'
import pop5 from '../../../img/home/popular/pop5.jpg'
import pop6 from '../../../img/home/popular/pop6.jpg'
import pop7 from '../../../img/home/popular/pop7.jpg'
import CardPopular from './CardPopular/CardPopular';

export default function () {

    const template1 = (item) => {
        return (
            <div className="item">
                <div className='item-image'>
                    <img src={item.img} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.title} className="image" />
                    <div className='container food'>
                        <div style={{ alignItems: 'flex-start' }}>
                            <h3>Conoce nuestros alimentos de temporada</h3>
                            <button className='whimButton'>¡Date un antojo!</button>
                        </div>
                        <div >
                            <p>Haz click y pide mediante tu plataforma favorita</p>
                            <div className='imgsCont'>
                                <img src={uber} />
                                <img src={rappi} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const template2 = (item) => {
        return (
            <div className="item">
                <div className='item-image'>
                    <img src={item.img} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.title} className="image" />
                    <div className='container bowl'>

                        <p>¿Un postre <span>delicioso</span> y saludable?</p>
                        <h5>Pide ya un <span>Bowl</span> de tus fresas favoritas</h5>


                    </div>
                </div>
            </div>

        );
    }

    const template3 = (item) => {
        return (
            <div className="item">
                <div className='item-image'>
                    <img src={item.img} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.title} className="image" />
                    <div className='container events'>
                        <h3>Eventos Muy Fresa</h3>
                        <p>Contrata nuestros servicios para tus fiestas o eventos</p>

                        <button className='whimButton'>Ver paquetes</button>


                    </div>
                </div>
            </div >
        );
    }

    const fakeCarousel = [
        {
            img: imgCarousel1,
            template: template1
        },
        {
            img: imgCarousel2,
            template: template2
        },
        {
            img: imgCarousel3,
            template: template3
        }
    ]

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
    };

    const popular = [
        {
            img: pop1,
            boxSize: 'Caja mediana',
            cuantity: 'Caja de 9 fresas',
            price: '19.99',
            selected: false,
            id: 1
        },
        {
            img: pop2,
            boxSize: 'Caja mediana',
            cuantity: 'Caja de 9 fresas',
            price: '19.99',
            selected: false,
            id: 2
        },
        {
            img: pop3,
            boxSize: 'Caja mediana',
            cuantity: 'Caja de 9 fresas',
            price: '19.99',
            selected: false,
            id: 3
        },
        {
            img: pop4,
            boxSize: 'Caja mediana',
            cuantity: 'Caja de 9 fresas',
            price: '19.99',
            selected: false,
            id: 4
        },
        {
            img: pop5,
            boxSize: 'Caja mediana',
            cuantity: 'Caja de 9 fresas',
            price: '19.99',
            selected: false,
            id: 5
        },
        {
            img: pop6,
            boxSize: 'Caja mediana',
            cuantity: 'Caja de 9 fresas',
            price: '19.99',
            selected: false,
            id: 6
        },
        {
            img: pop7,
            boxSize: 'Caja mediana',
            cuantity: 'Caja de 9 fresas',
            price: '19.99',
            selected: false,
            id: 7
        },
    ]

    const [changeHeader, setChangeHeader] = useState(false);
    const [popularItems, setpopularItems] = useState(popular)


    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setChangeHeader(window.pageYOffset > 400)
            );
        }
    }, [])

    useEffect(() => {
        if (!changeHeader) {
            document.getElementById('chocolateDown').style.top = '-20px'
        }
    }, [changeHeader])



    return (
        <div className='home'>
            {
                !changeHeader &&
                <div className='chocolateDown' id='chocolateDown'>
                    <img src={chocolateImg} />
                </div>
            }

            <div className='s1'>
                <Slider {...settings}>
                    {
                        fakeCarousel.map((item, idx) => {
                            return (<div key={idx}>{item.template(item)}</div>);
                        }
                        )
                    }
                </Slider>
            </div>

            <div className='s2'>
                <div className='s2-s1'>
                    <div>
                        <h1>¿Buscas el regalo <span>perfecto</span>?</h1>
                        <div className='popular'>
                            <h5>Populares</h5>
                            <img src={heartIcon} />
                        </div>
                    </div>
                    <div className='whatsapp'>
                        <p>Escríbenos por <span>WhatsApp</span> para pedidos especiales</p>
                        <img className='whatsappImg' src={whatsapp} />
                    </div>
                </div>
                <div className='s2-s2'>
                    <div className='parent'>
                        {
                            popularItems.map((item, idx) => (
                                <CardPopular
                                    key={idx}
                                    id={item.id}
                                    img={item.img}
                                    boxSize={item.boxSize}
                                    cuantity={item.cuantity}
                                    price={item.price}
                                    selected={item.selected}
                                    items={popularItems}
                                    setItems={setpopularItems}
                                />
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className='s3'>

            </div>
            <div className='s4'>

            </div>
            <div className='s5'>

            </div>





        </div>
    )
}