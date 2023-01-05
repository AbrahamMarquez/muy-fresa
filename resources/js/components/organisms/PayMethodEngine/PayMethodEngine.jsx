import React, { useState } from "react";
import { useEffect } from "react";
import './PayMethodEngine.scss'

let instancesCount = 0
const config = {
    targetIFrame: "#conektaIframeContainer",
    checkoutRequestId: "8132d8a3-5919-4b88-a5e9-7be905f69134", // // Checkout request ID, es el mismo ID generado en el paso 1
    publicKey: "key_Aezt4ZukDLrh81O6uWP8JJE", // Llaves: https://developers.conekta.com/docs/como-obtener-tus-api-keys
    locale: 'es', // 'es' Español | 'en' Ingles
};
const callbacks = {
    // Evento que permitirá saber que el token se creado de forma satisfactoria, es importante que se consuman los datos que de él derivan.
    onCreateTokenSucceeded: function (token) {
        // setOpenModal(false)

    },
    // Evento que permitirá saber que el token se creado de manera incorrecta, es importante que se consuman los datos que de él derivan y se hagan las correciones pertinentes.
    onCreateTokenError: function (error) {
        // setOpenModal(false)
    }
};




const PayMethodEngineModal = ({ repetir }) => {
    useEffect(() => {
        instancesCount++;
        if (instancesCount === 1) {
            window.ConektaCheckoutComponents.Card({
                config,
                callbacks,
                // //Este componente "allowTokenization" permite personalizar el tokenizador, por lo que su valor siempre será TRUE
                allowTokenization: true,
                targetIFrame: "#conektaIframeContainer",
                options: {
                    theme: 'red',
                    styles: {
                        logo: {
                            size: 'small', // small | medium | large   
                        },
                        // typeImage: 'url', // url | base64
                        // source: 'https://www.junglepark.es/wp-content/uploads/2017/05/garrascasuario-ad.jpg',
                        buttonType: 'rounded', // 'basic' | 'rounded' | 'sharp',
                        inputType: 'rounded',
                        button: {
                            colorText: '#ffffff',
                            text: 'PAGAR',
                            backgroundColor: '#e5133a',
                        },
                        iframe: {
                            colorText: '#000',  // Código de color hexadecimal para el color de la letra de todos los campos a llenar
                            backgroundColor: '#FFFFFF' // Código de color hexadecimal para el fondo del iframe, generalmente es blanco.
                        }
                    },

                }


            })
        }

    }, [repetir])
    instancesCount = 0;
    return (
        <>
            <div id="conektaIframeContainer" className="modal-pay-method-edit" style={{ height: "468px", width: '100%' }}></div>
        </>
    )

}
export default PayMethodEngineModal