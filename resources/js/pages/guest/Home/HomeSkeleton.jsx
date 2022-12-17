import { useEffect, useState } from 'react'

//components

//slider

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

//assets popular cards
import pop1 from '../../../img/home/popular/pop1.jpg'
import pop2 from '../../../img/home/popular/pop2.jpg'
import pop3 from '../../../img/home/popular/pop3.jpg'
import pop4 from '../../../img/home/popular/pop4.jpg'
import pop5 from '../../../img/home/popular/pop5.jpg'
import pop6 from '../../../img/home/popular/pop6.jpg'
import pop7 from '../../../img/home/popular/pop7.jpg'
import pop8 from '../../../img/home/popular/pop8.jpg'


import { Skeleton } from 'primereact/skeleton';


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

    
    const [sideInPopular, setSideInPopular] = useState(false);
    const [picsSideIn, setPicsSideIn] = useState(false);
    const [containerOferts, setContainerOferts] = useState(false);
    const [popularItemsLeft, setpopularItemsLeft] = useState(popularLeft)
    const [popularItemsRight, setpopularItemsRight] = useState(popularRight)

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                
                setSideInPopular(620)
                setPicsSideIn(3020)
                setContainerOferts(5720)
            });
        }
        if (typeof window !== "undefined" && window.screen.width < 1024) {
            window.addEventListener("scroll", () => {
                
                setSideInPopular( 250)
                setPicsSideIn( 620)
                setContainerOferts( 1000)
            });
        }


    }, [])

    

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
           

            <div className='s1'>
                {/* <Slider {...settings}>
                    {
                        fakeCarousel.map((item, idx) => {
                            return (<div key={idx}>{item.template(item)}</div>);
                        }
                        )
                    }
                </Slider> */}
            </div>

            <div className='s2'>
                <div className='s2-s1'>
                    {
                        window.screen.width > 1023 ?
                            <>
                                <div>
                                    <h1><Skeleton height='60px'></Skeleton></h1>
                                    <div className='popular'>
                                        <h5><Skeleton height='40px' width='200px' ></Skeleton></h5>
                                        
                                    </div>
                                </div>
                                <div className='whatsapp'>
                                <Skeleton height='90px'></Skeleton>
                                <Skeleton shape="circle" size="94px" />
                                  
                                </div>
                            </> :
                            <>
                                <div>
                                <h1 style={{display:"flex",flexWrap:"wrap"}}><Skeleton height='20px' width='200px'></Skeleton> <span><Skeleton height='20px'  width='100px'></Skeleton></span></h1>
                                </div>
                                <div className='containerResponsive'>
                                    <div className='popular'>
                                        <h5><Skeleton height='20px' width='100px'></Skeleton></h5>
                                        
                                    </div>
                                    <div className='whatsapp '>
                                        <p style={{ width: '155px', position: 'relative' }}><Skeleton height='20px' width='160px'></Skeleton><Skeleton height='20px' width='150px'></Skeleton></p>
                                        <Skeleton shape="circle" size="50px" />
                                        
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
                                    // <CardPopular
                                    //     key={idx}
                                    //     id={item.id}
                                    //     img={item.img}
                                    //     boxSize={item.boxSize}
                                    //     cuantity={item.cuantity}
                                    //     price={item.price}
                                    //     selected={item.selected}
                                    //     items={popularItemsLeft}
                                    //     setItems={setpopularItemsLeft}
                                    // />
                                    window.screen.width>1023?
                                        <>
                                        <Skeleton width='370px' height='453px'/>
                                        </>:
                                        <Skeleton width='154px' height='210px'/>
                                ))
                            }
                        </div>
                        <div className='sideInRight' id='sideInRight'>
                            {
                                popularItemsRight.map((item, idx) => (
                                    // <CardPopular
                                    //     key={idx}
                                    //     id={item.id}
                                    //     img={item.img}
                                    //     boxSize={item.boxSize}
                                    //     cuantity={item.cuantity}
                                    //     price={item.price}
                                    //     selected={item.selected}
                                    //     items={popularItemsRight}
                                    //     setItems={setpopularItemsRight}
                                    // />
                                    
                                    
                                        window.screen.width>1023?
                                        <>
                                        <Skeleton width='370px' height='453px'/>
                                        </>:
                                        <Skeleton width='154px' height='210px'/>
                                    
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
                    {/* <div style={{ background: `url(${img1})` }}></div>
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
                    <div style={{ background: `url(${img4})` }}></div> */}
                </div>
                <div className='leftEffect rightEffect'>

                    {/* <div style={{ background: `url(${img7})` }}></div>
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
                    <div style={{ background: `url(${img10})` }}></div> */}
                </div>

                <div className='coverPink'>
                    {
                        window.screen.width>1023?
                        <>
                        <Skeleton width='300px' height='100px'/>
                        </>:
                        <Skeleton width='124px' height='42px'/>
                    }
                
                </div>

                <div className='camera'>
                
                </div>
            </div>

            <div className='s4'>


                <div className='imgContainer'>
                    <div>
                        
                        {
                        window.screen.width>1023?
                        <>
                        <Skeleton shape="circle" size="400px" />
                        </>:
                        <Skeleton shape="circle" size="86px" />
                    }
                        
                    </div>

                    <div>
                        
                        {
                            window.screen.width > 1023 ?
                                <>
                                     <Skeleton shape="circle" size="86px" />
                                </> : ''

                        }
                    </div>

                </div>

                <div className='text'>
                    <div className='text1'>
                    {
                        window.screen.width>1023?
                        <>
                        <p><Skeleton width='996px' height='87px'/></p>
                        <h3><Skeleton width='831px' height='217px'/></h3>
                        
                        </>:
                        <>
                        <p><Skeleton width='231px' height='16px'/></p>
                        <h3><Skeleton width='200px' height='36px'/></h3>
                        <h5><Skeleton width='231px' height='36px'/></h5>
                        </>
                        
                    }
                        
                    </div>
                    {
                        window.screen.width > 1023 ?
                            <>
                                <div className='containerCards'>
                                    <div className='left' id='left'>
                                        <div className='imgContainer'>
                                        <Skeleton width='100%' height='100%'/>
                                        </div>
                                        <div className='imgContainer'>
                                        <Skeleton width='100%' height='100%'/>
                                        </div>
                                        <div className='imgContainer'>
                                        <Skeleton width='100%' height='100%'/>
                                        </div>
                                    </div>
                                    <div className='center' id='center'>
                                    <div className='imgContainer'>
                                        <Skeleton width='100%' height='100%'/>
                                        </div>
                                        <div className='imgContainer'>
                                        <Skeleton width='100%' height='100%'/>
                                        </div>
                                        <div className='imgContainer'>
                                        <Skeleton width='100%' height='100%'/>
                                        </div>
                                    </div>
                                    <div className='right' id='right'>
                                        <div className='imgContainer'>
                                        <Skeleton width='100%' height='100%'/>
                                        </div>
                                        <div className='imgContainer'>
                                        <Skeleton width='100%' height='100%'/>
                                        </div>
                                        <div className='imgContainer'>
                                        <Skeleton width='100%' height='100%'/>
                                        </div>
                                    </div>

                                </div>
                            </> :
                            <>
                                <div className='containerCards'>
                                    <div className='left'>
                                        <div className='imgContainer'>
                                        <Skeleton width='144px' height='208px'/>
                                        </div>
                                        <div className='imgContainer'>
                                            <Skeleton width='144px' height='208px'/>
                                        </div>
                                        <div className='imgContainer'>
                                        <Skeleton width='144px' height='208px'/>
                                        </div>
                                        <div className='imgContainer'>
                                        <Skeleton width='144px' height='208px'/>
                                        </div>
                                        <div className='imgContainer'>
                                        <Skeleton width='144px' height='208px'/>
                                        </div>
                                        <div className='imgContainer'>
                                        <Skeleton width='144px' height='208px'/>
                                        </div>
                                        <div className='imgContainer'>
                                        <Skeleton width='144px' height='208px'/>
                                        </div>
                                        <div className='imgContainer'>
                                        <Skeleton width='144px' height='208px'/>
                                        </div>
                                        <div className='imgContainer'>
                                        <Skeleton width='144px' height='208px'/>
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
                                <Skeleton shape="circle" size="150px" />
                                </div>
                            </>

                    }

                </div>
            </div>

            <div className='s5'>
                <div className='container' id='containerOferts' style={{alignItems:'center'}}>
                    <div className='text'>
                    {
                        window.screen.width > 1023 ?

                            <>
                            <Skeleton width='100%' height='300px'/>
                            </>
                            : <>
                                <div className='flex' style={{width:'100%'}}>
                                <Skeleton width='258px' height='32px'/>
                                </div>
                            </>

                    }

                       
                        
                        <div className='inputEmail'>
                        {
                        window.screen.width > 1023 ?

                            <>
                            <div className='inputContainer'>
                            <Skeleton width='100%' height='100%'/>
                            </div>
                            <Skeleton width='100%' height='100%'/>
                           
                            </>
                            : <>
                               <div className='inputContainer'>
                            <Skeleton width='100%' height='27px'/>
                            </div>
                            <Skeleton width='100%' height='27px'/>
                            </>

                        }
                            
                        </div>
                    </div>
                    <div className='img'>
                    {
                        window.screen.width > 1023 ?

                            <>
                            <Skeleton width='100%' height='800px'/>
                           
                            </>
                            : <>
                               <Skeleton width='100%' height='200px'/>
                            </>

                        }
                    
                    </div>

                </div>

            </div>





        </div>
    )
}