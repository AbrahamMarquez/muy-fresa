import React, { useEffect, useState } from "react";
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

import chocolate1 from '../../../../../img/icons/chocolate-milk.png'
import chocolate2 from '../../../../../img/icons/chocolate-black.png'
import chocolate3 from '../../../../../img/icons/chocolate-combined.png'
import chocolate4 from '../../../../../img/icons/chocolate-black-2.png'
import chocolate5 from '../../../../../img/icons/chocolate-green.png'
import ChocolateType from "../../../../../components/organisms/ChocolateType/ChocolateType";
import CheckboxCircle from "../../../../../components/atoms/CheckBoxCircle/CheckboxCircle";

import white from '../../../../../img/icons/white.png'
import pink from '../../../../../img/icons/pink.png'
import red from '../../../../../img/icons/red.png'
import blue from '../../../../../img/icons/blue.png'
import green from '../../../../../img/icons/green.png'
import purple from '../../../../../img/icons/purple.png'
import yellow from '../../../../../img/icons/yellow.png'
import orange from '../../../../../img/icons/orange.png'

import diamantinaGold from '../../../../../img/icons/diamantinaGold.png'
import diamantinaSilver from '../../../../../img/icons/diamantinaSilver.png'
import diamantinaPink from '../../../../../img/icons/diamantinaPink.png'
import dimantinaRed from '../../../../../img/icons/diamantinaRed.png'
import diamantinaBlue from '../../../../../img/icons/diamantinaBlue.png'

import congratulation1 from '../../../../../img/icons/congratulation1.png'
import congratulation2 from '../../../../../img/icons/congratulation2.png'
import congratulation3 from '../../../../../img/icons/congratulation3.png'
import TextArea from "../../../../../components/atoms/TextArea/TextArea";
import InputText from "../../../../../components/atoms/InputText/InputText";
import Counter from "../../../../../components/molecules/Counter/Counter";
import Button from "../../../../../components/atoms/Button/Button";

import carritoRed from '../../../../../img/icons/carrito-red.svg'
import Description from "../../../../../components/atoms/Description/Description";
import ArreglosCard from "../../../../../components/organisms/ArreglosCard/ArreglosCard";


import c1 from '../../../../../img/arreglos/cards/c1.jpg'
import c2 from '../../../../../img/arreglos/cards/c2.png'
import c3 from '../../../../../img/arreglos/cards/c3.jpg'
import c4 from '../../../../../img/arreglos/cards/c4.jpg'

import heard from '../../../../../img/icons/heard.svg'
import heardFill from '../../../../../img/icons/heard-fill.svg'
import { Skeleton } from "primereact/skeleton";

const ShowSkeleton = () => {
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
        // {
        //     breakpoint: '320px',
        //     numVisible: 4,
        //     numScroll: 3
        // },
        // {
        //     breakpoint: '768px',
        //     numVisible: 4,
        //     numScroll: 3
        // },
        // {
        //     breakpoint: '673px',
        //     numVisible: 4,
        //     numScroll: 3
        // }
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
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)
    const [check5, setCheck5] = useState(false)

    const [oreo, setOreo] = useState(false)
    const [Coco, setCoco] = useState(false)
    const [Galleta, setGalleta] = useState(false)
    const [Lineas, setLineas] = useState(false)
    const [Original, setOriginal] = useState(false)
    const [Nuez, setNuez] = useState(false)
    const [Mixx, setMixx] = useState(false)

    const [whitee, setWhite] = useState(false);
    const [pinke, setPink] = useState(false);
    const [rede, setRed] = useState(false);
    const [bluee, setblue] = useState(false);
    const [greene, setGreen] = useState(false);
    const [purplee, setPurple] = useState(false);
    const [yellowe, setYellow] = useState(false);
    const [orangee, setOrange] = useState(false);

    const [diamantinaDorada, setDiamantinaDorada] = useState(false)
    const [diamantinaPlateada, setDiamantinaPlateada] = useState(false)
    const [diamantinaRosa, setDiamantinaRosa] = useState(false)
    const [diamantinaRoja, setDiamantinaRoja] = useState(false)
    const [diamantinaAzul, setDiamantinaAzul] = useState(false)

    const [congratulations1, setCongratulations1] = useState(false)
    const [congratulations2, setCongratulations2] = useState(false)
    const [congratulations3, setCongratulations3] = useState(false)

    const [anonim, setAnonim] = useState(false)

    const [diamantina, setDiamantina] = useState(false)
    const [counter, setCounter] = useState(0)
    const [like, setLike] = useState(false)
    const [chocolateData, setChocolateData] = useState(
        [
            {
                img: chocolate1,
                description: "Chocolate con leche",
                check: check1,
                setCheck: setCheck1,
                discount: "0",
                id: "chocolateId1"
            },
            {
                img: chocolate2,
                description: "Chocolate semiamargo",
                check: check2,
                setCheck: setCheck2,
                discount: "0",
                id: "chocolateId2"
            },
            {
                img: chocolate3,
                description: "Chocolate blanco",
                check: check3,
                setCheck: setCheck3,
                discount: "0",
                id: "chocolateId3"
            },
            {
                img: chocolate4,
                description: "Chocolate sin azucar",
                check: check4,
                setCheck: setCheck4,
                discount: "30",
                id: "chocolateId4"
            },
            {
                img: chocolate5,
                description: "Chocolate de Matcha (Té verde)",
                check: check5,
                setCheck: setCheck5,
                discount: "10"
                , id: "chocolateId5"
            },

        ]
    )
    const [chocolateDataColor, setChocolateDataColor] = useState(
        [
            {
                img: white,
                description: "Blanco",
                check: whitee,
                setCheck: setWhite,
                discount: "0",
                id: "white"
            },
            {
                img: purple,
                description: "Morado",
                check: purplee,
                setCheck: setPurple,
                discount: "0",
                id: "purple"
            },
            {
                img: orange,
                description: "Naranja",
                check: orangee,
                setCheck: setOrange,
                discount: "0",
                id: "orange"
            },
            {
                img: red,
                description: " Rojo",
                check: rede,
                setCheck: setRed,
                discount: "0",
                id: "red"
            },
            {
                img: pink,
                description: " Rosa",
                check: pinke,
                setCheck: setPink,
                discount: "0"
                , id: "pink"
            },
            {
                img: green,
                description: " Verde",
                check: greene,
                setCheck: setGreen,
                discount: "0"
                , id: "green"
            },
            {
                img: yellow,
                description: "Amarillo",
                check: yellowe,
                setCheck: setYellow,
                discount: "0"
                , id: "yellow"
            },
            {
                img: blue,
                description: "Azul",
                check: bluee,
                setCheck: setblue,
                discount: "0"
                , id: "blue"
            },

        ]
    )
    const [diamantinaData, setDiamantinaData] = useState(
        [
            {
                img: diamantinaGold,
                description: "Dorada",
                check: diamantinaDorada,
                setCheck: setDiamantinaDorada,
                discount: "0",
                id: "diamantinaGold"
            },
            {
                img: diamantinaSilver,
                description: "Plateada",
                check: diamantinaPlateada,
                setCheck: setDiamantinaPlateada,
                discount: "0",
                id: "diamantinaSilver"
            },
            {
                img: diamantinaPink,
                description: "Rosa",
                check: diamantinaRosa,
                setCheck: setDiamantinaRosa,
                discount: "0",
                id: "diamantinaPink"
            },
            {
                img: dimantinaRed,
                description: " Roja",
                check: diamantinaRoja,
                setCheck: setDiamantinaRoja,
                discount: "0",
                id: "dimantinaRed"
            },
            {
                img: diamantinaBlue,
                description: " Azul",
                check: diamantinaAzul,
                setCheck: setDiamantinaAzul,
                discount: "0"
                , id: "diamantinaBlue"
            },
        ]
    )
    const topping = [
        {
            title: "OREO",
            id: "oreo",
            check: oreo,
            setCheck: setOreo,
        },
        {
            title: "Coco",
            id: "Coco",
            check: Coco,
            setCheck: setCoco,
        },
        {
            title: "Nuez",
            id: "Nuez",
            check: Nuez,
            setCheck: setNuez,
        },
        {
            title: "Galleta fresca",
            id: "Galleta",
            check: Galleta,
            setCheck: setGalleta,
        },
        {
            title: "Lineas de chocolate",
            id: "Lineas",
            check: Lineas,
            setCheck: setLineas,
        },
        {
            title: "Original (OREO,coco,linea,nuez)",
            id: "Original",
            check: Original,
            setCheck: setOriginal,
        },
        {
            title: "Mix (todos los clásicos) ",
            id: "Mix ",
            check: Mixx,
            setCheck: setMixx,
        },
    ]
    const [congratultionCard, setCongratulationCard] = useState([
        {
            img: congratulation1,
            description: "Tarjeta de cumpleaños",
            check: congratulations1,
            setCheck: setCongratulations1,
            discount: "0",
            id: "congratulations1"
        },
        {
            img: congratulation2,
            description: "Tarjeta de agradecimiento",
            check: congratulations2,
            setCheck: setCongratulations2,
            discount: "0",
            id: "congratulations2"
        },
        {
            img: congratulation3,
            description: "Tarjeta en blanco",
            check: congratulations3,
            setCheck: setCongratulations3,
            discount: "0",
            id: "congratulations3"
        },
    ])
    const [cardsProductsData, setCardsProductsData] = useState([
        {
            img: c1,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "caja",
            porcent: '15'
        },
        {
            img: c2,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "caja",
            porcent: '0'

        },
        {
            img: c3,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "ramo",
            porcent: '0'
        },
        {
            img: c4,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "caja",
            porcent: '0'
        },
    ])
    const [cardsProductsDataR, setCardsProductsDataR] = useState([
        {
            img: c1,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "caja",
            porcent: '15'
        },
        {
            img: c2,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "caja",
            porcent: '0'

        },
        {
            img: c3,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "ramo",
            porcent: '0'
        },
    ])
    return (
        <>
            <div className="generalBackground-mr" >
                <div className="ShowArreglo">
                    <div className="route-top"><Skeleton width="250px" height="20px"/></div>
                    {
                        window.screen.width < 1024 ?
                            <>
                                <div className="title-container">
                                    <div className="title"><Skeleton width="200px" height="20px"/></div>
                                    <div className="sub-title"><Skeleton width="100px" height="20px"/></div>
                                </div>
                            </> : ""
                    }
                    <div className="grid-show-areglo">
                        <div className="col1">
                            <div className="carrusel">
                                <div className="card">
                                <Skeleton width="335px" height="436px"/>
                                </div>
                            </div>
                            <div className="contentPay">

                                {
                                    window.screen.width > 1023 ?
                                        <>
                                            <div className="price-container-l">
                                                <div className="total"><Skeleton width="50px" height="20px"/></div>
                                                <div className="discount-container-l">
                                                    <div className="discount"><Skeleton width="40px" height="40px"/></div>
                                                    <div className="price-container-b">
                                                        <div className="price"><Skeleton width="100px" height="40px"/></div>
                                                        <div className="envio"><Skeleton width="200px" height="20px"/></div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="counter-element">
                                            <Skeleton width="100px" height="62px"/>
                                            </div>
                                            <div className="buttons-show-array">
                                            <Skeleton  className={"button-array"} width="80%" height="55px"/>
                                            <Skeleton  className={"button-array"} width="80%" height="55px"/>
                                            </div>
                                        </> : ""
                                }

                                <div className="container-description">
                                    <Skeleton  className={"button-array"} width="95%" height="637px"/>
                                </div>
                            </div>

                        </div>
                        <div className="col2">
                            {
                                window.screen.width > 1023 ?
                                    <>
                                        <div className="title-container">
                                            <Skeleton width="100px" height="20px"/>
                                        </div>
                                    </> : ""
                            }

                            <div className="chocolate-title">
                                <div className="title"><Skeleton width="200px" height="20px"/> </div>
                            </div>
                            <div className="chocolate-containers">
                                {
                                    chocolateData.map((item) => {

                                        return (
                                            <>
                                                {/* <ChocolateType className={'img-clocolate-top'} id={item.id} img={item.img} description={item.description} check={item.check} setCheck={item.setCheck} discount={item.discount}></ChocolateType> */}
                                                <Skeleton width="127px" height="129px"/>
                                            </>
                                        )
                                    })
                                }

                            </div>
                            <div className="chocolate-title">
                            <Skeleton width="200px" height="20px"/>
                            </div>
                            <div className="toppic-container">
                                {
                                    topping.map((item) => {
                                        return (
                                            <>
                                                <div className={"ch-container"}>
                                                <Skeleton width="200px" height="20px"/>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="chocolate-title" style={{ marginTop: "35px" }}>
                                <div className="title"><Skeleton width="200px" height="20px"/> </div>
                                

                            </div>
                            <div className="diamantina-descount">
                                <div className="container">
                                <Skeleton width="50px" height="20px"/>
                                </div>

                            </div>
                           
                            <div className="chocolate-title">
                                <div className="title"><Skeleton width="300px" height="20px"/></div>

                            </div>
                            <div className="container-congratulations">
                                {
                                    congratultionCard.map((item) => {
                                        return (
                                            <>
                                                <div className={"ch-container"}>
                                                <Skeleton width="130px" height="141px"/>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            
                        </div>
                    </div>
                    {
                        window.screen.width < 1024 ?
                            <>
                                 <div className="price-container-l">
                                                <div className="total"><Skeleton width="50px" height="20px"/></div>
                                                <div className="discount-container-l">
                                                    <div className="discount"><Skeleton width="40px" height="40px"/></div>
                                                    <div className="price-container-b">
                                                        <div className="price"><Skeleton width="100px" height="40px"/></div>
                                                        <div className="envio"><Skeleton width="200px" height="20px"/></div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="counter-element">
                                            <Skeleton width="100px" height="62px"/>
                                            </div>
                                            <div className="buttons-show-array">
                                            <Skeleton  className={"button-array"} width="80%" height="55px"/>
                                            <Skeleton  className={"button-array"} width="80%" height="55px"/>
                                            </div>
                            </> : ""
                    }

                    <div className="products-r ">
                        <div className="title-containerr">
                            <hr className="line" />
                            <div className="title"><Skeleton width="100%" height="20px"/></div>
                            <hr className="line" />
                        </div>
                    </div>
                    <div className="cards-container">
                        {
                            window.screen.width < 1024 ?
                                <>
                                    {

                                        cardsProductsDataR.map((data) => {
                                            return (
                                                <>
                                                <Skeleton width="93px" height="154px"/>
                                                </>
                                            )
                                        })
                                    }
                                </>:
                                <>
                                {
                                    cardsProductsData.map((data) => {
                                        return (
                                            <>
                                                <Skeleton width="252px" height="334px"/>
                                            </>
                                        )
                                    })
                                }
                                </>

                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShowSkeleton