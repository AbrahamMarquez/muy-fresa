import React from "react";
import './SendDirectionModal.scss'
import xIcon from  '../../../img/icons/x.svg'
import InputText from "../../atoms/InputText/InputText";
const SendDirectionModal = ({setOpenModalAddress})=>
{
    return(
        <>
            <div className="SendDirectionModal">
                <div className="card">
                    <div className="x"><img src={xIcon} /></div>
                    <div className="title">Dirección de envío</div>
                    <div className="grid-direccion-envio">
                        <div className="col1"><InputText title={"Nombre del destinatario"} className={"input-envio"}></InputText></div>
                        <div className="col2"><InputText title={"Teléfono del destinatario"} className={"input-envio"}></InputText></div>
                        <div className="col3"><InputText title={"Segundo contacto (Opcional) "} className={"input-envio-np"}></InputText></div>
                        <div className="col4"><InputText title={"Buscar dirección:"} className={"input-envio"}></InputText></div>
                        <div className="col5"><InputText title={"Calle"} className={"input-envio"}></InputText></div>
                        <div className="col6"><InputText title={"Número"} className={"input-envio"}></InputText></div>
                        <div className="col7"><InputText title={"Colonia"} className={"input-envio"}></InputText></div>
                        <div className="col8"><InputText title={"Código Postal"} className={"input-envio"}></InputText></div>
                        <div className="col9"><InputText title={"Estado"} className={"input-envio"}></InputText></div>
                        <div className="col10"><InputText title={"Ciudad"} className={"input-envio"}></InputText></div>
                        <div className="col11"><InputText title={"Tipo de domicilio"} className={"input-envio"}></InputText></div>
                      
                    </div>
                </div>
            </div>
            <div className="SendDirectionModalBackgroun"></div>
        </>
    )
}
export default SendDirectionModal