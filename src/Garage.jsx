import React from "react";
import Voiture from "./Voiture.jsx";
import Moto from "./Moto.jsx";
import Camion from "./Camion.jsx";
import './Garage.css'; // Import du CSS


class Garage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
                <h1>Dans mon garage il y a :</h1>
                <div className="vehicule">
                    <Voiture marque="Honda" anneFab="1998" couleur="Rouge" klaxon="Biiippp Biiippp"/>
                </div>
                <div className="vehicule">
                    <Moto marque="BMW" anneFab="2006" couleur="Verte" klaxon="Bup Bup"/>
                </div>
                <div className="vehicule">
                    <Camion marque="Mercedes" anneFab="1998" couleur="Noir" klaxon="Honk Honk"/>
                </div>
            </>
        )
    }

}

export default Garage