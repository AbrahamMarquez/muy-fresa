import React, { useEffect } from "react";
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
import wha from '../../../../img/icons/whatsapp.svg'
import leftArrow from '../../../../img/icons/leftArrow.svg'
const Arreglo = () => {
    const data = [
        {
            img:c1,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"caja",
            porcent:'15'
        },
        {
            img:c2,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"caja",
            porcent:'0'

        },
        {
            img:c3,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"ramo",
            porcent:'0'
        },
        {
            img:c4,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"caja",
            porcent:'0'
        },
        {
            img:c5,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"caja",
            porcent:'0'
        },
        {
            img:c6,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"ramo",
            porcent:'0'
            
        },
        {
            img:c7,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"caja",
            porcent:'0'
        },
        {
            img:c8,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"caja",
            porcent:'0'
        },
        {
            img:c9,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"ramo",
            porcent:'0'
        },
        {
            img:c10,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"caja",
            porcent:'0'
        },
        {
            img:c1,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"ramo",
            porcent:'0'
        },
        {
            img:c12,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"ramo",
            porcent:'0'
        },
        {
            img:c13,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"ramo",
            porcent:'0'
        },
        {
            img:c1,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"ramo",
            porcent:'0'
        },
        {
            img:c2,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"ramo",
            porcent:'0'
        },
        {
            img:c3,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"ramo",
            porcent:'100'
        },
        {
            img:c4,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"ramo",
            porcent:'0'
        },
        {
            img:c5,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"ramo",
            porcent:'0'
        },
        {
            img:c6,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"ramo",
            porcent:'0'
        },
        {
            img:c7,
            title:"Fresas con chocolate",
            price:'$115.00',
            type:"caja",
            porcent:'0'
        },
        
    ]
    // se filtran las cajas de los ramos
    const dataCajas =[]

    data.map((item)=>
        {
           
            if(item.type == 'caja')
            {
                dataCajas.push(item)
            }
            
        })
     //se filtran  los ramos
     const dataRamos =[]

    data.map((item)=>
        {
           
            if(item.type == 'ramo')
            {
                dataRamos.push(item)
            }
            
        })
    const card = (data)=>
    {
        console.log("data",data)
        return(
            <>

                <ArreglosCard img={data.img} title={data.title} price={data.price} porcent={data.porcent}></ArreglosCard>
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
                    <img className="paginator left " src={leftArrow}/>
                    {/* <Ripple /> */}
                </button>
            )
        },
        'NextPageLink': (options) => {
            return (
                <button type="button" style={{cursor:"pointer!important"}} className={`buton-paginator`} onClick={options.onClick} disabled={options.disabled}>
                    <img style={{transform: 'scaleX(-1)'}} className="paginator right" src={leftArrow}/>
                    {/* <Ripple /> */}
                </button>
            )
        },
        'PageLinks':(options)=>
        {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });

                return <span className={className} style={{ userSelect: 'none' }}>...</span>;
            }

            return (
                <button type="button" className={`buton-paginator-number ${options.className}`} onClick={options.onClick}>
                    {options.page + 1}
                    {/* <Ripple /> */}
                </button>
            )
        }
    }
    return (
        <>
            <div className="generalBackground-mr">
                <div className="Arreglo ">
                    <div className="grid-arreglo">
                        <div className="col1">
                            <SideSearchArregement></SideSearchArregement>
                        </div>
                        <div className="col2">
                            <div className="input-search-container">
                                <InputSearch className={"inputSearch"}></InputSearch>
                            </div>
                            <div className="title">Cajas</div>
                            {/* cards */}
                            <DataView
                                itemTemplate={card}
                                value={dataCajas}
                                paginator
                                rows={8}
                                layout={"grid"}
                                paginatorTemplate={paginator}
                            ></DataView>
                            <div className="title">Ramos</div>
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
                <div className="whatsApp"><img src={wha}></img></div>
                </div>
            </div>

        </>
    )
}
export default Arreglo