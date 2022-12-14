import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
} from "react-router-dom";

//generak assets
import candado from '../../img/icons/candado.png'
import facebook from '../../img/icons/facebook.svg'
//primereact
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

//components
import Auth from "./Auth/Auth";
import Guest from "./Guest/Guest";

const MainRoute = () => {
    const [fakeAuth, setFakeAuth] = useState("false")
    useEffect(()=>
    {
        if(localStorage.getItem("auth"))
        {
            if(localStorage.getItem("auth")=="true")
            {
                setFakeAuth("true")
                localStorage.setItem("auth","true");
            }
            else
            {
                setFakeAuth("false")
                localStorage.setItem("auth","false");
            }
        }
        else
        {
            localStorage.setItem("auth","false");
        }
        
    },[fakeAuth])

    return (
        <main>
            <Router>
                {fakeAuth=='true' ? (
                    <>
                        <Auth setAuth={setFakeAuth} />
                    </>
                ) : (
                    <>
                        <Guest setAuth={setFakeAuth}></Guest>
                    </>
                )}
            </Router>
        </main>
    );
};

export default MainRoute

if (document.getElementById('reactRoute')) {
    const Index = ReactDOM.createRoot(document.getElementById("reactRoute"));

    Index.render(
        <React.StrictMode>
            <MainRoute />
        </React.StrictMode>
    )
}