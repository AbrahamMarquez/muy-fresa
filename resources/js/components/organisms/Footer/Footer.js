// react
import React from "react";
import { Link } from "react-router-dom";

// assets
import instagram from "../../../img/icons/instagram.svg"
import whatsapp from "../../../img/icons/whatsapp.svg"

// styles
import './Footer.scss';

const Footer = () => {

    return (
        <footer className="mf-Footer">
            <div className="footer-left">
                <Link to={'#'} className="termsconditions">
                    Términos y condiciones
                </Link>
                <Link  to={'#'} className="privacyPolicy">
                    Políticas de privacidad
                </Link>
                <Link  to={'#'} className="frequentQuestions">
                    Preguntas frecuentes
                </Link>
            </div>

            <div className="footer-right">
                <Link to={'#'}>
                    <img src={instagram} alt="Instagram logo" />
                </Link>
                <Link to={'#'}>
                    <img src={whatsapp} alt="Whatsapp logo" />
                </Link>
            </div>

            <div className="footer-down">
                <div className="linea"></div>
                <p>© 2022 Muy fresa.  Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;