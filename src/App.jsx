import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Vehicule from "./Vehicule.jsx";
import Voiture from "./Voiture.jsx";
import Camion from "./Camion.jsx";
import Moto from "./Moto.jsx";
import Garage from "./Garage.jsx";

function App() {


    return (<>
        <h1>Mon Garage :</h1>
        <Garage/>
    </>)
}

export default App
