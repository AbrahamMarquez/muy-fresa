import React from "react";
import './GeneralCalendar.scss'
import { Calendar } from 'primereact/calendar';
import tachuela from '../../../img/icons/tachuela.png'
const GeneralCalendar = ({ value, setValue, openModal }) => {
    return (
        <>
            <div className="Calendar">
                <Calendar id="touchUI" value={value} onChange={(e) => setValue(e.value)} inline showWeek />
                <div className="container">
                    <div className="remeber">
                        <div className="title">Recuerda :</div>
                        <img src={tachuela} width="45" alt="" />
                    </div>
                    <div className="description">
                        Te recomendamos consumir tus fresas el mismo día de la entrega, Se mantiene hasta 2 días en refrigeración.
                    </div>
                </div>
            </div>
            <div className="calendar-background" onClick={() => { openModal(false) }}>
            </div>
        </>
    )
}
export default GeneralCalendar