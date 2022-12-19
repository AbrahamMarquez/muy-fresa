import React from "react";
import './Show.scss';
import '../../../../MainRouter/MainRouter.scss'
import { useParams } from "react-router-dom";
import { Galleria } from 'primereact/galleria';

//carrusel images
import i1 from '../../../../../img/arreglos/show/carrusel/1.jpg'
import i2 from '../../../../../img/arreglos/show/carrusel/2.jpg'
import i3 from '../../../../../img/arreglos/show/carrusel/3.jpg'
import i4 from '../../../../../img/arreglos/show/carrusel/4.jpg'
import i5 from '../../../../../img/arreglos/show/carrusel/5.jpg'
const Show = () => {
    const { product } = useParams()

    const images = [
        {
            "itemImageSrc": i1,
            "thumbnailImageSrc": i1,
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": i2,
            "thumbnailImageSrc": i2,
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": i3,
            "thumbnailImageSrc": i3,
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": i4,
            "thumbnailImageSrc": i4,
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "itemImageSrc": i5,
            "thumbnailImageSrc": i5,
            "alt": "Description for Image 1",
            "title": "Title 1"
        },

    ];
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 4,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 4,
            numScroll: 3
        },
        {
            breakpoint: '673px',
            numVisible: 4,
            numScroll: 3
        }
    ];



    const itemTemplate = (item) => {
        return (
            <img
                src={`images/${item.itemImageSrc}`}
                onError={(e) => (e.target.src = item.itemImageSrc)}
                alt={item.alt}
                className="imagenG"
            // style={{ width: "526px", height: "563px" }}
            />
        );
    };

    const thumbnailTemplate = (item) => {
        return (
            <img
                src={`images/${item.thumbnailImageSrc}`}
                onError={(e) => (e.target.src = item.itemImageSrc)}
                alt={item.alt}
                className="imagenP"
            // style={{ width: "134px",}}
            />
        );
    };
    return (
        <>
            <div className="generalBackground-mr">
                <div className="ShowArreglo">
                    <div className="route-top">Arreglos &nbsp;<span className="label">{`> ${product}`}</span></div>

                    <div className="grid-show-areglo">
                        <div className="col1">
                            <div className="carrusel">
                                <div className="card">
                                    <Galleria showItemNavigators value={images} responsiveOptions={responsiveOptions} numVisible={5} thumbnailsPosition="left" style={{ maxWidth: '640px' }}
                                        item={itemTemplate} thumbnail={thumbnailTemplate} />
                                </div>
                            </div>
                        </div>
                        <div className="col2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Show