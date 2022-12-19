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

import chocolate1 from '../../../../../img/icons/chocolate-milk.svg'
import chocolate2 from '../../../../../img/icons/chocolate-black.svg'
import chocolate3 from '../../../../../img/icons/chocolate-combined.svg'
import chocolate4 from '../../../../../img/icons/chocolate-black-2.svg'
import chocolate5 from '../../../../../img/icons/chocolate-green.svg'
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
    const [aux, setAux] = useState(true)
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
    useEffect(() => {

    }, [aux])
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
                            <div className="price-container">
                                <div className="total">Total</div>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="title-container">
                                <div className="title">Fresas con chocolate</div>
                                <div className="sub-title">Disponible</div>
                            </div>
                            <div className="chocolate-title">
                                <div className="title">Chocolate </div>
                                <div className="sub-title"> {' (Máx.3 chocolates)'}</div>
                            </div>
                            <div className="chocolate-containers">
                                {
                                    chocolateData.map((item) => {

                                        return (
                                            <>
                                                <ChocolateType id={item.id} img={item.img} description={item.description} check={item.check} setCheck={item.setCheck} discount={item.discount}></ChocolateType>
                                            </>
                                        )
                                    })
                                }

                            </div>
                            {
                                check3 ?
                                    <>
                                        <div className="chocolate-containers">
                                            {
                                                chocolateDataColor.map((item) => {

                                                    return (
                                                        <>
                                                            <ChocolateType id={item.id} className={'img-clocolate'} img={item.img} description={item.description} check={item.check} setCheck={item.setCheck} discount={item.discount}></ChocolateType>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </> : ""
                            }
                            <div className="chocolate-title">
                                <div className="title">Topping </div>
                                <div className="sub-title"> {' (Máx.6 toppings)'}</div>
                            </div>
                            <div className="toppic-container">
                                {
                                    topping.map((item) => {
                                        return (
                                            <>
                                                <div className={"ch-container"}>
                                                    <CheckboxCircle id={item.id} value={item.check} setValue={item.setCheck}>{item.title}</CheckboxCircle>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="chocolate-title" style={{ marginTop: "35px" }}>
                                <div className="title">Diamantina </div>
                                <CheckboxCircle id="diamantina" className={'checkDiamantina'} value={diamantina} setValue={setDiamantina}>Agregar</CheckboxCircle>

                            </div>
                            <div className="diamantina-descount">
                                <div className="container">
                                    + 10%
                                </div>

                            </div>
                            {
                                diamantina ?
                                    <>
                                        <div className="chocolate-containers">
                                            {
                                                diamantinaData.map((item) => {

                                                    return (
                                                        <>
                                                            <ChocolateType id={item.id} img={item.img} className={'img-diamantina'} description={item.description} check={item.check} setCheck={item.setCheck} discount={item.discount}></ChocolateType>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </> : ""
                            }
                            <div className="chocolate-title">
                                <div className="title">¿Quieres agregar una tarjeta de felicitación?</div>

                            </div>
                            <div className="container-congratulations">
                                {
                                    congratultionCard.map((item) => {
                                        return (
                                            <>
                                                <div className={"ch-container"}>
                                                    <ChocolateType id={item.id} img={item.img} className={'img-congratulations'} description={item.description} check={item.check} setCheck={item.setCheck} discount={item.discount}></ChocolateType>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div style={{ width: "50%" }}>
                                {
                                    congratulations1 || congratulations3 ?
                                        <>
                                            <div className="textarea-container">
                                                <TextArea placeholder='Escribe tu mensaje aqui'></TextArea>
                                            </div>
                                            <div className="anonimo">
                                                <CheckboxCircle id="anomim" value={anonim} setValue={setAnonim}>Anonimo</CheckboxCircle>
                                            </div>
                                            {
                                                !anonim ?
                                                    <>
                                                        <div className="anonimo">
                                                            <InputText placeholder={"Persona que firma el mensaje de la tarjeta"}></InputText>
                                                        </div>
                                                    </> :
                                                    ""

                                            }


                                        </> : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Show