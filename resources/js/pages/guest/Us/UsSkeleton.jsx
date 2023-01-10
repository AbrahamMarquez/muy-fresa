import React from 'react'
import {Skeleton} from 'primereact/skeleton'

import './Us.scss'

//components
import CardUs from './CardUs/CardUs'

const UsSkeleton = () => {

    const data = [1, 2, 3, 4, 5, 6, 7]

    return (
        <div className='us'>
            <div className='s1'>
                <div className='s1-left'>
                    <div id='s1-left' className='move'>
                        
                    </div>
                </div>
                <div className='s1-right'>
                    <div className='titleInfo' id='titleInfo'>
                        <Skeleton width='100px' height='22px'/>
                        <div className='socialMedia'>
                            <div className='button'>
                                <Skeleton width='100%' height='100%'/>
                            </div>
                            <div className='button'>
                                <Skeleton width='100%' height='100%'/>
                            </div>
                            <div className='button'>
                                <Skeleton width='100%' height='100%'/>
                            </div>
                        </div>
                    </div>

                    <div className='info'>

                        <Skeleton width='30%' height='40px'/>

                        <Skeleton width='100%' height='40px'/>

                        <div className='button'>
                          <Skeleton width='100%' borderRadius='30px' height='100%'/>
                        </div>
                        <div className='button'>
                          <Skeleton width='100%' borderRadius='30px' height='100%'/>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className='s2'>
                <Skeleton width='50%' height='40px'/>
                <div className='p-container'>
                    <Skeleton width='100%' height='100%'/>
                </div>
            </div>
            <div className='s3'>
                <Skeleton width='100%' height='100%'/>
                <div className='coverPink'></div>
            </div>
            <div className='s4'>
                <div className='title'>
                   <Skeleton width='100px' height='40px'/>
                   <Skeleton width='100px' height='40px'/>
                </div>
                {
                    data.map((item, idx) => (
                        <CardUs item={item} skeleton key={idx} id={`item${idx}`} />
                    ))
                }
            </div>
        </div>
    )
}

export default UsSkeleton
