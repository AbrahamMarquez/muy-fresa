
import React from 'react'

//style
import './SectionEvent.scss'

//assets
import whatsapp from '../../../../img/icons/whatsapp.svg'
import { Skeleton } from 'primereact/skeleton'

export const SectionEvent = ({ data, skeleton }) => {
    return (
        <>
            {
                !skeleton ?

                    <div className='section'>
                        {
                            data.leftImg &&
                            <div className='imgLeft'>
                                <div className='imgContainer'>
                                    <img src={data.img} />
                                </div>

                            </div>
                        }
                        <div className='info'>
                            <h3 className='title'>{data.title}</h3>
                            {
                                data.subtitles.map((item, idx) => (
                                    <div key={idx} className='subtitle'>
                                        <div>
                                            <h5>{item.name}</h5>
                                            <span>({item.quantity})</span>
                                        </div>
                                        <h3>{item.price} <span>MXN</span></h3>
                                    </div>
                                ))
                            }

                            <p className='includes'>Incluye:</p>
                            <ul>
                                {
                                    data.includes.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))
                                }
                            </ul>

                            {
                                data.information && <p className='information'>{data.information}</p>
                            }

                            <button>
                                <img src={whatsapp} />
                                Personalizarla
                            </button>
                        </div>
                        {
                            !data.leftImg &&
                            <div className='imgRight'>
                                <div className='imgContainer'>
                                    <img src={data.img} />
                                </div>
                            </div>
                        }

                    </div>
                    :
                    <div className='section'>
                        {
                            data.leftImg &&
                            <div className='imgLeft'>
                                <div className='imgContainer'>
                                    <Skeleton width='100%' height='100%' shape='circle' />
                                </div>

                            </div>
                        }
                        <div className='info'>
                            <Skeleton width='100px' height='40px' />


                            <Skeleton width='100px' height='40px' borderRadius='20px' />

                        </div>
                        {
                            !data.leftImg &&
                            <div className='imgRight'>
                                <div className='imgContainer'>
                                    <Skeleton width='100%' height='100%' />
                                </div>
                            </div>
                        }

                    </div>
            }
        </>
    )
}
