import React from 'react';
import './App.css';
import RouterView from "./router/RouterView";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <RouterView/>
            </BrowserRouter>
        </div>
    );
}

export default App;
