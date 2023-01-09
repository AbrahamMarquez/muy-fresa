import React from 'react'

import './Us.scss'

//assets
import img1 from '../../../img/home/galery/img1.svg'
import img2 from '../../../img/home/galery/img2.svg'
import img4 from '../../../img/home/galery/img4.svg'
import img5 from '../../../img/home/galery/img5.svg'
import img6 from '../../../img/home/galery/img6.svg'
import img7 from '../../../img/home/galery/img7.svg'
import img8 from '../../../img/home/galery/img8.svg'
import img11 from '../../../img/home/galery/img11.svg'

import pic1 from '../../../img/us/pic1.jpeg'
import pic2 from '../../../img/us/pic2.jpeg'
import pic3 from '../../../img/us/pic3.jpeg'

const Us = () => {
    return (
        <div className='us'>
            <div className='s1'>
                <div className='s1-left'>
                    <div className='pic' style={{ background: `url(${pic1})` }}></div>
                    <div className='pic' style={{ background: `url(${pic2})` }}></div>
                    <div className='pic' style={{ background: `url(${pic3})` }}></div>
                </div>
                <div className='s1-right'>
                    <p>Visita en nuestras redes sociales</p>
                    <div className='socialMedia'>
                        <button>
                            <img />
                        </button>
                        <button>
                            <img />
                        </button>
                        <button>
                            <img />
                        </button>
                    </div>

                    <div className='info'>
                        <h3>Sobre Nosotros</h3>

                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                        </span>

                        <button className='ourHistory'> Nuestra Historia</button>
                        <button> Conoce al equipo fresero</button>
                    </div>
                </div>
            </div>
            <div className='s2'>
                <h3>Nuestra Historia</h3>
                <div className='p-container'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. </p>
                </div>
            </div>
            <div className='s3'>
                <div className='leftEffect'>
                    <div style={{ background: `url(${img1})` }}></div>
                    <div style={{ background: `url(${img2})` }}></div>
                    <div style={{ background: `url(${img11})` }}></div>
                    <div style={{ background: `url(${img4})` }}></div>
                    <div style={{ background: `url(${img5})` }}></div>
                    <div style={{ background: `url(${img6})` }}></div>
                    <div style={{ background: `url(${img7})` }}></div>
                    <div style={{ background: `url(${img8})` }}></div>
                    <div style={{ background: `url(${img1})` }}></div>
                    <div style={{ background: `url(${img2})` }}></div>
                    <div style={{ background: `url(${img5})` }}></div>
                    <div style={{ background: `url(${img4})` }}></div>
                </div>
                <div className='coverPink'>

                </div>
            </div>
        </div>
    )
}

export default Us
