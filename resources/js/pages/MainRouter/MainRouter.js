import React from "react";
import ReactDOM from 'react-dom/client';

export default function  MainRoute(){

    return(
        <>
            <h1>Muy Fresa</h1>
        </>
    )

}


if (document.getElementById('reactRoute')) {
    const Index = ReactDOM.createRoot(document.getElementById("reactRoute"));

    Index.render(
        <React.StrictMode>
            <MainRoute/>
        </React.StrictMode>
    )
}