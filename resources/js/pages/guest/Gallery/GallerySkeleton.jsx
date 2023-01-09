import React, { useState } from 'react'

import './Gallery.scss'

//components
import { DataView } from 'primereact/dataview'
import { Skeleton } from 'primereact/skeleton'

const GallerySkeleton = () => {

    const data = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    ]

    const cardTemplate = (data) => {
        return (
            <div className='card'>
                <div className='opacity'>
                  <Skeleton width='100%' height='100%'/>
                </div>
            </div>
        )
    }

    return (
        <div className='gallery'>
            <Skeleton width='20%' height='40px' borderRadius='10px'/>
            <Skeleton width='30%' height='40px' borderRadius='10px'/>

            <div className='picContainer'>
                <div className="selectContainer">
                    <Skeleton width='100%' height='100%' borderRadius='20px'/>
                </div>

                <div className='galleryDataView'>
                    <DataView
                        itemTemplate={cardTemplate}
                        value={data}
                        paginator
                        rows={12}
                        layout={"grid"}
                    ></DataView>
                </div>
            </div>

        </div>
    )
}

export default GallerySkeleton
