import React, { useState } from "react";
import { Slider } from 'primereact/slider';
import './SideSearchArregement.scss'
import CheckboxCircle from "../../atoms/CheckBoxCircle/CheckboxCircle";


const SideSearchArregement = () => {
    const [value, setValue] = useState([20, 80]);
    const [cajas, setCajas] = useState(false)
    const [Ramos, setRamos] = useState(false)
    const [Numeros, setNumeros] = useState(false)
    const [Canastas, setCanastas] = useState(false)
    const [Torres, setTorres] = useState(false)
    const [Tazas, setTazas] = useState(false)
    const [Vino, setVino] = useState(false)
    const [Calcetas, setCalcetas] = useState(false)
    const [Flores, setFlores] = useState(false)
    const [Licores, setLicores] = useState(false)
    const [d3a6, setd3a6] = useState(false)
    const [d6a10, setd6a10] = useState(false)
    const [d11a20, setd11a20] = useState(false)
    const [d30a40, setd30a40] = useState(false)

    return (
        <>
            <div className="SideSearchArregement">
                <div className="title">Buscar por...</div>
                <div className="range-container">
                    <div className="title-side">Precio</div>
                    <Slider value={value} onChange={(e) => setValue(e.value)} range />
                    <div className="range-info">
                        <div className="range-data">${value[0] * 10}</div>
                        <div className="range-data">${value[1] * 10}</div>
                    </div>
                </div>
                {/* checks */}
                <div className="title-side" style={{ marginTop: '36px' }}>Categoría</div>
                <CheckboxCircle className={'check'} id='cajas' value={cajas} setValue={setCajas}>Cajas</CheckboxCircle>
                <CheckboxCircle className={'check'} id='Ramos' value={Ramos} setValue={setRamos}>Ramos</CheckboxCircle>
                <CheckboxCircle className={'check'} id='Numeros' value={Numeros} setValue={setNumeros}>Números y letras</CheckboxCircle>
                <CheckboxCircle className={'check'} id='Canastas' value={Canastas} setValue={setCanastas}>Canastas</CheckboxCircle>
                <CheckboxCircle className={'check'} id='Torres' value={Torres} setValue={setTorres}>Torres</CheckboxCircle>
                <CheckboxCircle className={'check'} id='Tazas' value={Tazas} setValue={setTazas}>Tazas</CheckboxCircle>
                <div className="title-side" style={{ marginTop: '36px' }}>Subcategoría</div>
                <CheckboxCircle className={'check'} id='Vino' value={Vino} setValue={setVino}>con vino</CheckboxCircle>
                <CheckboxCircle className={'check'} id='Calcetas' value={Calcetas} setValue={setCalcetas}>con calcetas</CheckboxCircle>
                <CheckboxCircle className={'check'} id='Flores' value={Flores} setValue={setFlores}>con flores</CheckboxCircle>
                <CheckboxCircle className={'check'} id='Licores' value={Licores} setValue={setLicores}>con licores</CheckboxCircle>
                <div className="title-side" style={{ marginTop: '36px' }}>Cantidad de fresas</div>
                <CheckboxCircle className={'check'} id='d3a6' value={d3a6} setValue={setd3a6}>De 3 - 6</CheckboxCircle>
                <CheckboxCircle className={'check'} id='d6a10' value={d6a10} setValue={setd6a10}>De 6 - 10</CheckboxCircle>
                <CheckboxCircle className={'check'} id='d11a20' value={d11a20} setValue={setd11a20}>De 11 - 20</CheckboxCircle>
                <CheckboxCircle className={'check'} id='d30a40' value={d30a40} setValue={setd30a40}>De 30 - 40</CheckboxCircle>
            </div>
        </>
    )
}
export default SideSearchArregement