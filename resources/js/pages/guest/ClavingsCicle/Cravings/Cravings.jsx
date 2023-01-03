import React from "react";
import "../../../../routes/Guest/LoginCicleRoutes/LoginCicleRoutes.scss";
import './Cravings.scss'

//assets
import backgroundImg from '../../../../img/cravings/berryShop.png'
import uber from '../../../../img/home/uberImg.svg'
import rappi from '../../../../img/home/rappiImg.svg'
import CravingsCard from "../../../../components/molecules/CravingsCard/CravingsCard";
import img1 from '../../../../img/cravings/cards/img1.jpeg'
import ProductsSection from "../../../../components/molecules/ProductsSection/ProductsSection";

//cards que se imprimiran en los paginators
const card = (data) => {
    return (
        <>

            <CravingsCard img={data.img} name={data.name} description={data.description} price={data.price}></CravingsCard>
        </>
    )
}
const dataFresas = [
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    
]

const dataAntojos = [
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    
]
const dataPostres = [
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    {
        img:img1,
        name:"Bowl",
        description:"Frutos rojos, crema, chocolate y topping de tu elección.",
        price:"40.00"
    },
    
]

const Cravings = () => {
    return (
        <>
            <div className="generalBackgroundWhite">
                <div className="Cravings">
                    <div className="topShopBerry">
                        <img src={backgroundImg} className={"backgroundImg"} />
                        <div className="title-container">
                            <div className="title-red">Conoce nuestros alimentos de temporada</div>
                            <div className="title-green">Disponibles solo en Sucursales y Delivers</div>
                            <div className="sub-title-container">
                                <div className="sub-title"><b>Haz click</b> y pide mediante tu plataforma favorita</div>
                                <div className="outShops-container">
                                    <img src={uber} />
                                    <img src={rappi} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards-container">
                        <ProductsSection cardTemplate={card} data={dataFresas} title="Fresas"></ProductsSection>
                        <ProductsSection cardTemplate={card} data={dataAntojos} title="Antojos"></ProductsSection>
                        <ProductsSection cardTemplate={card} data={dataPostres} title="Antojos"></ProductsSection>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cravings