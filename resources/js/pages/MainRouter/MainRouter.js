import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
} from "react-router-dom";

//components
import Auth from "./Auth/Auth";
import Guest from "./Guest/Guest";

const MainRoute = () => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("auth") == 1) {
            setAuth(true);
        } else {
            setAuth(false);
            localStorage.setItem("auth", 0);
        }
    }, [auth]);

    return (
        <main>
            <Router>
                {auth ? (
                    <>
                        <Auth setAuth={setAuth} />
                    </>
                ) : (
                    <>
                        <Guest setAuth={setAuth}></Guest>
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