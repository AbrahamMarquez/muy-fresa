import React, { useEffect, useState } from "react";
import './Arreglo.scss'
import '../../../MainRouter/MainRouter.scss'
import SideSearchArregement from "../../../../components/organisms/SideSearchArregement/SideSearchArregement";
import InputSearch from "../../../../components/atoms/InputSearch/InputSearch";
import ArreglosCard from "../../../../components/organisms/ArreglosCard/ArreglosCard";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";

//imports paginator
import { classNames } from 'primereact/utils';
//imagenes de las cards
import c1 from '../../../../img/arreglos/cards/c1.jpg'
import c2 from '../../../../img/arreglos/cards/c2.png'
import c3 from '../../../../img/arreglos/cards/c3.jpg'
import c4 from '../../../../img/arreglos/cards/c4.jpg'
import c5 from '../../../../img/arreglos/cards/c5.jpg'
import c6 from '../../../../img/arreglos/cards/c6.jpg'
import c7 from '../../../../img/arreglos/cards/c7.jpg'
import c8 from '../../../../img/arreglos/cards/c8.jpg'
import c9 from '../../../../img/arreglos/cards/c9.jpg'
import c10 from '../../../../img/arreglos/cards/c10.jpg'
import c12 from '../../../../img/arreglos/cards/c12.jpg'
import c13 from '../../../../img/arreglos/cards/c13.jpg'

//paginator images
import wha from '../../../../img/icons/whatsapps.svg'
import leftArrow from '../../../../img/icons/leftArrow.svg'
import { Skeleton } from "primereact/skeleton";
const ArregloSkeleton = () => {
    const [openFilter, setOpenFilter] = useState(false)
    const data = [
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
        {
            img: c5,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "caja",
            porcent: '0'
        },
        {
            img: c6,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "ramo",
            porcent: '0'

        },
        {
            img: c7,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "caja",
            porcent: '0'
        },
        {
            img: c8,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "caja",
            porcent: '0'
        },
        {
            img: c9,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "ramo",
            porcent: '0'
        },
        {
            img: c10,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "caja",
            porcent: '0'
        },
        {
            img: c1,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "ramo",
            porcent: '0'
        },
        {
            img: c12,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "ramo",
            porcent: '0'
        },
        {
            img: c13,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "ramo",
            porcent: '0'
        },
        {
            img: c1,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "ramo",
            porcent: '0'
        },
        {
            img: c2,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "ramo",
            porcent: '0'
        },
        {
            img: c3,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "ramo",
            porcent: '100'
        },
        {
            img: c4,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "ramo",
            porcent: '0'
        },
        {
            img: c5,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "ramo",
            porcent: '0'
        },
        {
            img: c6,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "ramo",
            porcent: '0'
        },
        {
            img: c7,
            title: "Fresas con chocolate",
            price: '$115.00',
            type: "caja",
            porcent: '0'
        },

    ]
    // se filtran las cajas de los ramos
    const dataCajas = []

    data.map((item) => {

        if (item.type == 'caja') {
            dataCajas.push(item)
        }

    })
    //se filtran  los ramos
    const dataRamos = []

    data.map((item) => {

        if (item.type == 'ramo') {
            dataRamos.push(item)
        }

    })
    const card = (data) => {
        console.log("data", data)
        return (
            <>

                <Skeleton width="252px" height="334px"/>
            </>
        )
    }
    //paginator template
    const paginator =
    {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        'PrevPageLink': (options) => {
            return (
                <button type="button" className={"buton-paginator"} onClick={options.onClick} disabled={options.disabled}>
                    <Skeleton width="30px" height="30px" />
                </button>
            )
        },
        'NextPageLink': (options) => {
            return (
                <button type="button" style={{ cursor: "pointer!important" }} className={`buton-paginator`} onClick={options.onClick} disabled={options.disabled}>
                    <Skeleton width="30px" height="30px" />
                    {/* <Ripple /> */}
                </button>
            )
        },
        'PageLinks': (options) => {
            
            return (
                <button type="button" className={`buton-paginator-number ${options.className}`} onClick={options.onClick}>
                    <Skeleton width="30px" height="30px" />
                    {/* <Ripple /> */}
                </button>
            )
        }
    }
    useEffect(() => {
        const col1 = document.getElementById('col1')
        if (openFilter) {
            col1.style.left = "0px"
            col1.style.transition = "all .5s"
        }
        else {
            col1.style.left = "-250px"
            col1.style.transition = "all .5s"
        }

    }, [openFilter])
    useEffect(() => {
        if (window.screen.width > 1023) {
            setOpenFilter(true)
        }
    }, [])
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                if (window.pageYOffset > 600) {

                    setOpenFilter(false)
                }
            }

            );
        }

    }, [])  
    
    return (
        <>
            <div className="generalBackground-mr" style={{paddingTop:"100px"}}>
                <div className="Arreglo ">
                    <div className="grid-arreglo">
                        <div className={`col1 `} id="col1">
                            {
                                window.screen.width > 1023 ?
                                    <>
                                        <Skeleton width="333px" height="100%" />
                                    </> :
                                    ""

                            }

                        </div>
                        <div className="col2">
                            <div className="input-search-container">

                                {
                                    window.screen.width < 1024 ?
                                        <>
                                            <div className="searchFor-responsive" onClick={() => setOpenFilter(true)}><Skeleton width="100px" height="10px"/></div>
                                        </> :
                                        ""
                                }
                               
                                <Skeleton width="100px" height="20px" className={"inputSearch"}/>
                            </div>
                            <div className="title"><Skeleton width="100px" height="40px"/></div>
                            {/* cards */}
                            <DataView
                                itemTemplate={card}
                                value={dataCajas}
                                paginator
                                rows={8}
                                layout={"grid"}
                                paginatorTemplate={paginator}
                            ></DataView>
                            <div className="title"><Skeleton width="100px" height="20px"/></div>
                            {/* cards */}

                            <DataView
                                itemTemplate={card}
                                value={dataRamos}
                                paginator
                                paginatorTemplate={paginator}
                                rows={8}
                                layout={"grid"}
                            ></DataView>


                        </div>
                    </div>
                    <div className="whatsApp"><Skeleton  width="40px" height="40px"/></div>
                    
                </div>
            </div>

        </>
    )
}
export default ArregloSkeleton