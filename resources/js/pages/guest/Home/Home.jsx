import { useEffect, useState } from 'react'

//components
import CardPopular from './CardPopular/CardPopular';

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
import arrowGreen from '../../../img/home/arrowGreenWhats.svg'
import camera from '../../../img/home/camera.png'
import ballon from '../../../img/home/ballons.png'
import christmas from '../../../img/home/christmas.png'
import deathDay from '../../../img/home/deathDay.png'
import imgStrawberry from '../../../img/home/imgStrawberry.png'

//assets popular cards
import pop1 from '../../../img/home/popular/pop1.jpg'
import pop2 from '../../../img/home/popular/pop2.jpg'
import pop3 from '../../../img/home/popular/pop3.jpg'
import pop4 from '../../../img/home/popular/pop4.jpg'
import pop5 from '../../../img/home/popular/pop5.jpg'
import pop6 from '../../../img/home/popular/pop6.jpg'
import pop7 from '../../../img/home/popular/pop7.jpg'
import pop8 from '../../../img/home/popular/pop8.jpg'

//assets galery
import img1 from '../../../img/home/galery/img1.svg'
import img2 from '../../../img/home/galery/img2.svg'
import img3 from '../../../img/home/galery/img3.svg'
import img4 from '../../../img/home/galery/img4.svg'
import img5 from '../../../img/home/galery/img5.svg'
import img6 from '../../../img/home/galery/img6.svg'
import img7 from '../../../img/home/galery/img7.svg'
import img8 from '../../../img/home/galery/img8.svg'
import img9 from '../../../img/home/galery/img9.svg'
import img10 from '../../../img/home/galery/img10.svg'
import img11 from '../../../img/home/galery/img11.svg'
import img12 from '../../../img/home/galery/img12.svg'
import img13 from '../../../img/home/galery/img13.svg'
import img14 from '../../../img/home/galery/img14.svg'

//assets pics
import pic1 from '../../../img/home/pics/pic1.svg'
import pic2 from '../../../img/home/pics/pic2.svg'
import pic3 from '../../../img/home/pics/pic3.svg'
import pic4 from '../../../img/home/pics/pic4.svg'
import pic5 from '../../../img/home/pics/pic5.svg'
import pic6 from '../../../img/home/pics/pic6.svg'
import pic7 from '../../../img/home/pics/pic7.svg'
import pic8 from '../../../img/home/pics/pic8.svg'
import pic9 from '../../../img/home/pics/pic9.svg'
import InputText from '../../../components/atoms/InputText/InputText';


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
                            <p className='text-10'>Haz click y pide mediante tu plataforma favorita</p>
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
                        <p >Contrata nuestros servicios para tus fiestas o eventos</p>

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

    const popularLeft = [
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
    ]

    const popularRight = [
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
        {
            img: pop8,
            boxSize: 'Caja mediana',
            cuantity: 'Caja de 9 fresas',
            price: '19.99',
            selected: false,
            id: 8
        },
    ]

    const [changeHeader, setChangeHeader] = useState(false);
    const [sideInPopular, setSideInPopular] = useState(false);
    const [picsSideIn, setPicsSideIn] = useState(false);
    const [containerOferts, setContainerOferts] = useState(false);
    const [popularItemsLeft, setpopularItemsLeft] = useState(popularLeft)
    const [popularItemsRight, setpopularItemsRight] = useState(popularRight)

    console.log("sideInPopular", sideInPopular);
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                // setChangeHeader(window.pageYOffset > 400)
                setSideInPopular(window.pageYOffset > 620)
                setPicsSideIn(window.pageYOffset > 3020)
                setContainerOferts(window.pageYOffset > 5720)
            });
        }
        if (typeof window !== "undefined" && window.screen.width < 1024) {
            window.addEventListener("scroll", () => {
                // setChangeHeader(window.pageYOffset > 400)
                setSideInPopular(window.pageYOffset > 150)
                setPicsSideIn(window.pageYOffset > 520)
                setContainerOferts(window.pageYOffset > 950)
            });
        }


    }, [])

    // useEffect(() => {
    //     if (!changeHeader) {
    //         document.getElementById('chocolateDown').style.top = '-20px'
    //     }
    // }, [changeHeader])

    useEffect(() => {
        if (sideInPopular) {
            document.getElementById('sideInLeft').style.right = '0'
            document.getElementById('sideInRight').style.left = '0'
        } else {
            document.getElementById('sideInLeft').style.right = '-150%'
            document.getElementById('sideInRight').style.left = '-160%'
        }
    }, [sideInPopular])

    useEffect(() => {
        if (window.screen.width > 1023) {
            if (picsSideIn) {
                document.getElementById('left').style.left = '0'
                document.getElementById('right').style.right = '0'
                document.getElementById('center').style.marginTop = '0'
            } else {
                document.getElementById('left').style.left = '-50%'
                document.getElementById('right').style.right = '-50%'
                document.getElementById('center').style.marginTop = '50%'
            }
        }

    }, [picsSideIn])



    useEffect(() => {
    if(window.screen.width > 1023)
    {

        if (containerOferts) {
            document.getElementById('containerOferts').style.left = '0'
        } else {
            document.getElementById('containerOferts').style.left = '-100%'
        }
    }
    else
    {
        if (containerOferts) {
            document.getElementById('containerOferts').style.left = '0'
        } else {
            document.getElementById('containerOferts').style.left = '0%'
        } 
    }
    }, [containerOferts])




    return (
        <div className='home'>
            {/* {
                !changeHeader &&
                <div className='chocolateDown' id='chocolateDown'>
                    <img src={chocolateImg} />
                </div>
            } */}

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
                    {
                        window.screen.width > 1023 ?
                            <>
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
                                    <img className='arrowGreen' src={arrowGreen} />
                                </div>
                            </> :
                            <>
                                <div>
                                    <h1>¿Buscas el regalo <span>perfecto</span>?</h1>
                                </div>
                                <div className='containerResponsive'>
                                    <div className='popular'>
                                        <h5>Populares</h5>
                                        <img src={heartIcon} />
                                    </div>
                                    <div className='whatsapp '>
                                        <p style={{ width: '155px', position: 'relative' }}>Escríbenos por <span>WhatsApp</span> para pedidos especiales</p>
                                        <img className='whatsappImg' src={whatsapp} />
                                        <img className='arrowGreen' src={arrowGreen} />
                                    </div>
                                </div>
                            </>
                    }

                </div>
                <div className='s2-s2'>
                    <div className='parent'>
                        <div className='sideInLeft' id='sideInLeft'>
                            {
                                popularItemsLeft.map((item, idx) => (
                                    <CardPopular
                                        key={idx}
                                        id={item.id}
                                        img={item.img}
                                        boxSize={item.boxSize}
                                        cuantity={item.cuantity}
                                        price={item.price}
                                        selected={item.selected}
                                        items={popularItemsLeft}
                                        setItems={setpopularItemsLeft}
                                    />
                                ))
                            }
                        </div>
                        <div className='sideInRight' id='sideInRight'>
                            {
                                popularItemsRight.map((item, idx) => (
                                    <CardPopular
                                        key={idx}
                                        id={item.id}
                                        img={item.img}
                                        boxSize={item.boxSize}
                                        cuantity={item.cuantity}
                                        price={item.price}
                                        selected={item.selected}
                                        items={popularItemsRight}
                                        setItems={setpopularItemsRight}
                                    />
                                ))
                            }
                        </div>
                    </div>

                </div>
                {/* <CardPopular
                        key={1}
                        id={192}
                        img={popularItemsLeft[0].img}
                        boxSize={popularItemsLeft[0].boxSize}
                        cuantity={popularItemsLeft[0].cuantity}
                        price={popularItemsLeft[0].price}
                        selected={popularItemsLeft[0].selected}
                        items={popularItemsLeft}
                        setItems={setpopularItemsLeft}
                    /> */}
            </div>
            <div className='s3'>
                <div className='leftEffect'>
                    <div style={{ background: `url(${img1})` }}></div>
                    <div style={{ background: `url(${img2})` }}></div>
                    <div style={{ background: `url(${img3})` }}></div>
                    <div style={{ background: `url(${img4})` }}></div>
                    <div style={{ background: `url(${img5})` }}></div>
                    <div style={{ background: `url(${img6})` }}></div>
                    <div style={{ background: `url(${img7})` }}></div>
                    <div style={{ background: `url(${img8})` }}></div>
                    <div style={{ background: `url(${img1})` }}></div>
                    <div style={{ background: `url(${img2})` }}></div>
                    <div style={{ background: `url(${img3})` }}></div>
                    <div style={{ background: `url(${img4})` }}></div>
                </div>
                <div className='leftEffect rightEffect'>

                    <div style={{ background: `url(${img7})` }}></div>
                    <div style={{ background: `url(${img8})` }}></div>
                    <div style={{ background: `url(${img9})` }}></div>
                    <div style={{ background: `url(${img10})` }}></div>
                    <div style={{ background: `url(${img11})` }}></div>
                    <div style={{ background: `url(${img12})` }}></div>
                    <div style={{ background: `url(${img13})` }}></div>
                    <div style={{ background: `url(${img14})` }}></div>
                    <div style={{ background: `url(${img7})` }}></div>
                    <div style={{ background: `url(${img8})` }}></div>
                    <div style={{ background: `url(${img9})` }}></div>
                    <div style={{ background: `url(${img10})` }}></div>
                </div>

                <div className='coverPink'>
                    <button>Ver galería</button>
                </div>

                <div className='camera'>
                    <img src={camera} />
                </div>
            </div>

            <div className='s4'>


                <div className='imgContainer'>
                    <div>
                        <img src={christmas} className='christmas' />
                        <img src={ballon} className='ballon' />
                    </div>

                    <div>
                        <img src={ballon} className='ballon' />
                        {
                            window.screen.width > 1023 ?
                                <>
                                    <img src={deathDay} className='deathDay' />
                                </> : ''

                        }
                    </div>

                </div>

                <div className='text'>
                    <div className='text1'>
                        <p>Acompaña tu mesa de postres con</p>
                        <h3>Eventos</h3>
                        <h5>Muy Fresa</h5>
                    </div>
                    {
                        window.screen.width > 1023 ?
                            <>
                                <div className='containerCards'>
                                    <div className='left' id='left'>
                                        <div className='imgContainer'>
                                            <img src={pic1} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                        <div className='imgContainer'>
                                            <img src={pic2} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                        <div className='imgContainer'>
                                            <img src={pic3} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='center' id='center'>
                                        <div className='imgContainer'>
                                            <img src={pic4} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                        <div className='imgContainer'>
                                            <img src={pic5} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                        <div className='imgContainer'>
                                            <img src={pic6} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='right' id='right'>
                                        <div className='imgContainer'>
                                            <img src={pic7} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                        <div className='imgContainer'>
                                            <img src={pic8} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                        <div className='imgContainer'>
                                            <img src={pic9} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </> :
                            <>
                                <div className='containerCards'>
                                    <div className='left'>
                                        <div className='imgContainer'>
                                            <img src={pic1} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                        <div className='imgContainer'>
                                            <img src={pic2} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                        <div className='imgContainer'>
                                            <img src={pic3} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                        <div className='imgContainer'>
                                            <img src={pic4} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                        <div className='imgContainer'>
                                            <img src={pic5} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                        <div className='imgContainer'>
                                            <img src={pic6} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                        <div className='imgContainer'>
                                            <img src={pic7} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                        <div className='imgContainer'>
                                            <img src={pic8} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                        <div className='imgContainer'>
                                            <img src={pic9} />
                                            <div className='text'>
                                                <h3>Día del padre</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eius nobis, harum ipsam obcaecati id!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                    }
                    {
                        window.screen.width > 1023 ?

                            ''
                            : <>
                                <div className='flex' style={{justifyContent:'flex-end',width:'100%'}}>
                                    <img src={deathDay} width={'150'} className='deathDay' />
                                </div>
                            </>

                    }

                </div>
            </div>

            <div className='s5'>
                <div className='container' id='containerOferts'>
                    <div className='text'>
                        <h3>Recibe <span>ofertas</span> y <span>promociones</span> exclusivas a tu correo</h3>
                        <div className='inputEmail'>
                            <div className='inputContainer'>
                                <InputText
                                    placeholder={'Correo electrónico'}
                                />
                            </div>
                            <button className='joinButton'>Unirme</button>
                        </div>
                    </div>
                    <div className='img'>
                        <img src={imgStrawberry} />
                    </div>

                </div>

            </div>





        </div>
    )
}