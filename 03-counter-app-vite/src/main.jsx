import React from 'react'
import ReactDOM from 'react-dom/client';

//Los functional components siempre van capitalizados.
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp/>
        <FirstApp/>
    </React.StrictMode>
);