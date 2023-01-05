
import React from 'react'

//style
import './SectionEvent.scss'

//assets
import whatsapp from '../../../../img/icons/whatsapp.svg'

export const SectionEvent = ({ data }) => {
    return (
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
                    <img src={whatsapp}/>
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
    )
}
