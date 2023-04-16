import React from 'react'
import ReactDOM from 'react-dom/client';

//Los functional components siempre van capitalizados.
import { HelloWorldApp } from './HelloWorldApp';
//Aplicacion de estilos de css.
import './style.css'
import { FirstApp } from './FirstApp';
import {CounterApp} from './CounterApp';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Para mandar numeros u otro tipo de dato distinto a 
        las strings se emplea {} en lugar de "" */}
        {/* <FirstApp /> */}
        <CounterApp value={360}/>
        {/* <FirstApp title = "Hola, soy Zeyan" subTitle={123}/> */}
    </React.StrictMode>
);