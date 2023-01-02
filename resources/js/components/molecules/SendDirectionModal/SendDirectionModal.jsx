import React, { useEffect, useState } from "react";
import './SendDirectionModal.scss'
import xIcon from '../../../img/icons/x.svg'
import InputText from "../../atoms/InputText/InputText";
import Button from "../../atoms/Button/Button";
import InputNumber from "../../atoms/InputNumber/InputNumber";

import { ColorValidation, SubmitValidation, UpdateValue } from "../../../utilities/Validations";
import Select from "../../atoms/Select/Select";
import fresaDirection from "../../../img/icons/fresaDirection.png"
import AddressCard from "../AddressCard/AddressCard";
const SendDirectionModal = ({ setOpenModalAddress,setDirectionSelected,address,setAddress }) => {
    const [inputList, setInputList] = useState({
        name: { value: null, validationType: "empty" },
        phone: { value: null, validationType: "empty" },
        phone2: { value: null, validationType: "optional" },
        address: { value: null, validationType: "empty" },
        street: { value: null, validationType: "empty" },
        number: { value: null, validationType: "empty" },
        colony: { value: null, validationType: "empty" },
        postalCode: { value: null, validationType: "empty" },
        state: { value: null, validationType: "empty" },
        city: { value: null, validationType: "empty" },
        addressType: { value: null, validationType: "empty" },
    })
    const selectOption = [
        {
            label: "1",
            value: "1"
        },
        {
            label: "2",
            value: "2"
        },
        {
            label: "3",
            value: "3"
        },

    ]

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName) && propertyName != "optional" ) {
                ColorValidation(propertyName, inputList)
            }
        }
    }, [inputList])
    const validAddress = () => {
        if (SubmitValidation(inputList, setInputList)) {
            const newAddress = [...address]
            newAddress.push({
                name: inputList.name.value,
                no1: inputList.phone.value,
                no2: inputList.phone2.value,
                street: inputList.street.value,
                state: inputList.state.value,
                reference: "Es una casa azul con reja negra"
                , id: address.length+1
            })
            setAddress(newAddress)
            setOpenModalAddress(false)
            

        }
    }

    const [processCounter, setProcessCounter] = useState(0)
    const [cardIdActive, setCardIdActive] = useState(null)
    
    
    useEffect(() => {


        if (cardIdActive != null) {
            address.map((item) => {
                if (item.id == cardIdActive) {
                    document.getElementById(cardIdActive).style.background = "#77ab39";
                    document.getElementById(cardIdActive).children[1].style.color = "white";
                    document.getElementById(cardIdActive).children[0].style.filter = "brightness(3.5)";
                }
                else {
                    document.getElementById(item.id).style.background = "";
                    document.getElementById(item.id).children[1].style.color = "";
                    document.getElementById(item.id).children[0].style.filter = "";
                }
            })
        }

    }, [cardIdActive])
    const selectAddress = ()=>
    {
        if(cardIdActive !=null){
            setProcessCounter(0)
            setOpenModalAddress(false) 
        }
    }
    return (
        <>
            <div className="SendDirectionModal">
                <div className="card">
                    <div className="x"><img src={xIcon} style={{ cursor: "pointer" }} onClick={() => { setOpenModalAddress(false) }} /></div>


                    <div className="title">Dirección de envío</div>
                    {
                        processCounter == 0 || processCounter == 3 ?

                            <>
                                <div className="grid-direccion-envio">
                                    <div className="col1"><InputText placeholder={"Nombre del destinatario"} title={"Nombre del destinatario"} className={"input-envio"} id="name" onChange={(e) => { UpdateValue(e, 'name', inputList, setInputList) }}></InputText></div>
                                    <div className="col2"><InputNumber placeholder={"Teléfono del destinatario"} title={"Teléfono del destinatario"} className={"input-envio"} id="phone" onChange={(e) => { UpdateValue(e, 'phone', inputList, setInputList) }}></InputNumber></div>
                                    <div className="col3"><InputText placeholder={"Segundo contacto"} title={"Segundo contacto (Opcional)"} className={"input-envio-np"} id="phone2" onChange={(e) => { UpdateValue(e, 'phone2', inputList, setInputList) }}></InputText></div>
                                    <div className="col4"><InputText placeholder={"Intoduce dirección..."} title={"Buscar dirección:"} className={"input-envio"} id="address" onChange={(e) => { UpdateValue(e, 'address', inputList, setInputList) }}></InputText ></div>
                                    <div className="col5"><InputText placeholder={"Calle"} title={"Calle"} className={"input-envio"} id="street" onChange={(e) => { UpdateValue(e, 'street', inputList, setInputList) }}></InputText ></div>
                                    <div className="col6"><InputNumber placeholder={"Número"} title={"Número"} className={"input-envio"} id="number" onChange={(e) => { UpdateValue(e, 'number', inputList, setInputList) }}></InputNumber></div>
                                    <div className="col7"><InputText placeholder={"Colonia"} title={"Colonia"} className={"input-envio"} id="colony" onChange={(e) => { UpdateValue(e, 'colony', inputList, setInputList) }}></InputText></div>
                                    <div className="col8"><InputNumber placeholder={"Código Postal"} title={"Código Postal"} className={"input-envio"} id="postalCode" onChange={(e) => { UpdateValue(e, 'postalCode', inputList, setInputList) }}></InputNumber></div>
                                    <div className="col9"><InputText placeholder={"Estado"} title={"Estado"} className={"input-envio"} id="state" onChange={(e) => { UpdateValue(e, 'state', inputList, setInputList) }}></InputText></div>
                                    <div className="col10"><InputText placeholder={"Ciudad"} title={"Ciudad"} className={"input-envio"} id="city" onChange={(e) => { UpdateValue(e, 'city', inputList, setInputList) }}></InputText></div>
                                    <div className="col11">
                                        <Select  title={"Tipo de domicilio"} optionArr={selectOption} value={inputList.addressType.value} id={"addressType"} onChange={(e) => { UpdateValue(e, "addressType", inputList, setInputList) }}></Select>
                                    </div>
                                </div>

                                {
                                    processCounter == 3 ?
                                        <>
                                            <div style={{ display: "flex", justifyContent: "center",margin:"20px 0px"}} >
                                                <Button classNames={"btnf"} color={"red"} onClick={() => { validAddress() }}>Guardar y continuar</Button>
                                            </div>
                                        </> :
                                        <>
                                            <div className="btn-container">
                                                <Button classNames={"btn"} onClick={() => { setProcessCounter(1) }}>Usar dirección guardada</Button>
                                                <Button classNames={"btn"} color={"red"} onClick={() => { validAddress() }}>Hecho</Button>
                                            </div>
                                        </>
                                }

                            </> :
                            processCounter == 1 ?
                                <>
                                    <div className="noDirection">
                                        <img className="img" src={fresaDirection}></img>
                                        <div className="contentBottom">
                                            <div className="upps">Upps...</div>
                                            <div className="upps-text">Aún no tienes direcciones guardadas</div>
                                        </div>
                                        <div className="hrRed"></div>
                                        <div style={{ width: "100%", marginBottom: "25px" }}>
                                            <Button className={"btn"} onClick={() => { setProcessCounter(2) }}>Agregar dirección</Button>
                                        </div>
                                    </div>
                                </> :
                                processCounter == 2 ?
                                    <>
                                        <div className="addDirection">
                                            {
                                                address.map((item, key) => {
                                                    return (
                                                        <>
                                                            <AddressCard data={item} onClick={() => { setCardIdActive(item.id),setDirectionSelected({street:item.street,state:item.state}) }}></AddressCard>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="btn-container">
                                            <Button classNames={"btn"} onClick={() => { setProcessCounter(3) }}>Agregar dirección</Button>
                                                <Button classNames={"btn"} color={"red"} onClick={() => { selectAddress()}}>Hecho</Button>
                                        </div>
                                    </> : ""
                    }

                </div>
            </div>
            <div className="SendDirectionModalBackgroun"></div>
        </>
    )
}
export default SendDirectionModal