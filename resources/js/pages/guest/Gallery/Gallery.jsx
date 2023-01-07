import React, { useState } from 'react'
import Select from '../../../components/atoms/Select/Select'

import './Gallery.scss'

//components
import { DataView } from 'primereact/dataview'

//assets
import picIcon from '../../../img/icons/picIcon.svg'
import camera from '../../../img/home/camera.png'
import videoIcon from '../../../img/icons/videoIcon.svg'
import img1 from '../../../img/gallery/gallery1.jpg'
import img2 from '../../../img/gallery/gallery2.jpg'
import img3 from '../../../img/gallery/gallery3.jpg'
import img4 from '../../../img/gallery/gallery4.jpg'
import img5 from '../../../img/gallery/gallery5.jpg'
import img6 from '../../../img/gallery/gallery6.jpg'
import img7 from '../../../img/gallery/gallery7.jpg'
import img8 from '../../../img/gallery/gallery8.jpg'
import img9 from '../../../img/gallery/gallery9.jpg'
import img10 from '../../../img/gallery/gallery10.jpg'
import img11 from '../../../img/gallery/gallery11.jpg'
import img12 from '../../../img/gallery/gallery12.jpg'

const Gallery = () => {

    const data = [
        {
            type: 0,
            file: img1
        },
        {
            type: 0,
            file: img2
        },
        {
            type: 0,
            file: img3
        },
        {
            type: 1,
            file: img4
        },
        {
            type: 0,
            file: img5
        },
        {
            type: 0,
            file: img6
        },
        {
            type: 1,
            file: img7
        },
        {
            type: 1,
            file: img8
        },
        {
            type: 1,
            file: img9
        },
        {
            type: 0,
            file: img10
        },
        {
            type: 0,
            file: img11
        },
        {
            type: 0,
            file: img12
        },
        {
            type: 0,
            file: img1
        },
        {
            type: 0,
            file: img2
        },
        {
            type: 0,
            file: img3
        },
        {
            type: 1,
            file: img4
        },
        {
            type: 0,
            file: img5
        },
        {
            type: 0,
            file: img6
        },
        {
            type: 1,
            file: img7
        },
        {
            type: 1,
            file: img8
        },
        {
            type: 1,
            file: img9
        },
        {
            type: 0,
            file: img10
        },
        {
            type: 0,
            file: img11
        },
        {
            type: 0,
            file: img12
        },
        {
            type: 0,
            file: img1
        },
        {
            type: 0,
            file: img2
        },
        {
            type: 0,
            file: img3
        },
        {
            type: 1,
            file: img4
        },
        {
            type: 0,
            file: img5
        },
        {
            type: 0,
            file: img6
        },
        {
            type: 1,
            file: img7
        },
        {
            type: 1,
            file: img8
        },
        {
            type: 1,
            file: img9
        },
        {
            type: 0,
            file: img10
        },
        {
            type: 0,
            file: img11
        },
        {
            type: 0,
            file: img12
        },
    ]

    const [dataSelected, setDataSelected] = useState(data)

    const [options, setOptions] = useState([
        {
            id: 0,
            label: 'Imágenes y videos',
            selected: false
        },
        {
            id: 1,
            label: 'Videos',
            selected: false
        },
        {
            id: 2,
            label: 'Imágenes',
            selected: false
        },
    ])

    const cardTemplate = (data) => {
        return (
            <div className='card'>
                {!data.type
                    ?
                    <img className='icon' src={picIcon} />
                    :
                    <img className='icon' src={videoIcon} />
                }
                <img className='pic' src={data.file} />

                <div className='opacity'></div>
            </div>
        )
    }

    const handleChange = (e) => {
        console.log(e, 'e');
        switch (e.target.value) {
            case 'Videos':
                const newData1 = data.filter(item => item.type == 1)
                setDataSelected(newData1)
                break;
            case 'Imágenes':
                const newData2 = data.filter(item => item.type == 0)
                setDataSelected(newData2)
                break;

            default:
                setDataSelected(data)
                break;
        }
    }

    return (
        <div className='gallery'>
            <h3>Galería</h3>
            <h1>Muy Fresa</h1>

            <div className='picContainer'>
                <div className="selectContainer">
                    <Select optionArr={options} onChange={(e) => handleChange(e)}></Select>
                </div>

                <div className='galleryDataView'>
                    <DataView
                        itemTemplate={cardTemplate}
                        value={dataSelected}
                        paginator
                        rows={12}
                        layout={"grid"}
                    ></DataView>
                </div>
            </div>

            <img className='camera' src={camera} />


        </div>
    )
}

export default Gallery
