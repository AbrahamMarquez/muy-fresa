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
const Show = () => {
    const { product } = useParams()

    const images = [
        {
            itemImageSrc: i1,
            thumbnailImageSrc: i1,
            alt: "",
            title: product + "1"
        },
        {
            itemImageSrc: i2,
            thumbnailImageSrc: i2,
            alt: "",
            title: product + "2"
        },
        {
            itemImageSrc: i3,
            thumbnailImageSrc: i3,
            alt: "",
            title: product + "3"
        },
        {
            itemImageSrc: i4,
            thumbnailImageSrc: i4,
            alt: "",
            title: product + "4"
        },
    ];
    const breakpoint = [
        {
            breakpoint: "768px",
            numVisible: 3
        },
        {
            breakpoint: "560px",
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return (
            <img
                src={item.itemImageSrc}
                onError={(e) =>
                (e.target.src =
                    "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                }
                alt={item.alt}
                style={{ width: "100%", display: "block" }}
            />
        );
    };
    const thumbnailTemplate = (item) => {
        return (
            <img
                src={item.thumbnailImageSrc}
                onError={(e) =>
                (e.target.src =
                    "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                }
                alt={item.alt}
                style={{ width: "100%", display: "block" }}
            />
        );
    };
    return (
        <>
            <div className="generalBackground-mr">
                <div className="ShowArreglo">
                    <div className="route-top">Arreglos &nbsp;<span className="label">{`> ${product}`}</span></div>
                </div>
                <div className="grid-show-areglo">
                    <div className="col1">
                        <div className="carrusel">
                            <div className="card">
                                <Galleria value={images} responsiveOptions={breakpoint} numVisible={3} thumbnailsPosition="left" style={{ maxWidth: '640px' }}
                                    item={itemTemplate} thumbnail={thumbnailTemplate} />
                            </div>
                        </div>
                    </div>
                    <div className="col2"></div>
                </div>
            </div>
        </>
    )
}
export default Show