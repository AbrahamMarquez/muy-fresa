import React, { useEffect } from 'react'

import './Us.scss'

//components
import CardUs from './CardUs/CardUs'

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

import facebook from '../../../img/us/facebookUs.svg'
import instagram from '../../../img/us/instagramUs.svg'
import ticktock from '../../../img/us/ticktockUs.svg'

import team1 from '../../../img/us/team1.png'
import team2 from '../../../img/us/team2.png'
import team3 from '../../../img/us/team3.png'
import team4 from '../../../img/us/team4.png'
import team5 from '../../../img/us/team5.png'
import team6 from '../../../img/us/team6.png'
import team7 from '../../../img/us/team7.png'

const Us = () => {

    const data = [
        {
            name: 'Andrea',
            charge: 'Fresera Mayor',
            img: team1
        },
        {
            name: 'Yessi',
            charge: 'Repostera Fresera',
            img: team2
        },
        {
            name: 'Andrea',
            charge: 'Contadora Fresera',
            img: team3
        },
        {
            name: 'Ana',
            charge: 'Ventas freseras',
            img: team4
        },
        {
            name: 'Diego',
            charge: 'Ventas freseras',
            img: team5
        },
        {
            name: 'Margarita',
            charge: 'Packaging Fresero',
            img: team6
        },
        {
            name: 'Pedro',
            charge: 'Finanzas Freseras',
            img: team7
        },
    ]

    useEffect(() => {
        document.getElementById('pic1').style.marginLeft = '0'
        document.getElementById('pic2').style.marginLeft = '0'
        document.getElementById('pic3').style.marginLeft = '0'
    }, [])


    return (
        <div className='us'>
            <div className='s1'>
                <div id='s1-left' className='s1-left'>
                    <div id='pic1' className='pic' style={{ background: `url(${pic1})` }}></div>
                    <div id='pic2' className='pic' style={{ background: `url(${pic2})` }}></div>
                    <div id='pic3' className='pic' style={{ background: `url(${pic3})` }}></div>
                </div>
                <div className='s1-right'>
                    <p>Visita en nuestras redes sociales</p>
                    <div className='socialMedia'>
                        <button>
                            <img src={facebook} />
                        </button>
                        <button>
                            <img src={instagram} />
                        </button>
                        <button>
                            <img src={ticktock} />
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
                <div className='coverPink'></div>
            </div>
            <div className='s4'>
                <div className='title'>
                    <h5>Conoce al equipo</h5>
                    <h3>Fresero</h3>
                </div>
                {
                    data.map((item, idx) => (
                        <CardUs item={item} key={idx} id={`item${idx}`}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Us
