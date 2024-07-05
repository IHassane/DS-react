import React from "react";
import Voiture from "./Voiture.jsx";
import Moto from "./Moto.jsx";
import Camion from "./Camion.jsx";
import './Garage.css';



const voitures = [
    {marque: 'Honda', anneeFab: '1998', couleur: 'Rouge', klaxon: 'Biiippp Biiippp'},
    {marque: 'Toyota', anneeFab: '2005', couleur: 'Bleue', klaxon: 'Bip Bip'},
];

const motos = [
    {marque: 'BMW', anneeFab: '2006', couleur: 'Verte', klaxon: 'Bup Bup'},
    {marque: 'Harley Davidson', anneeFab: '2010', couleur: 'Noire', klaxon: 'boom boom'},
];

const camions = [
    {marque: 'Mercedes', anneeFab: '1998', couleur: 'Noir', klaxon: 'Honk Honk'},
    {marque: 'Volvo', anneeFab: '2015', couleur: 'Blanc', klaxon: 'Tutu tutu'},
];

function Garage() {

    const voituresList = voitures.map((voiture, index) => (
        <Voiture key={index} {...voiture} />
    ));

    const motosList = motos.map((moto, index) => (
        <Moto key={index} {...moto} />
    ));

    const camionsList = camions.map((camion, index) => (
        <Camion key={index} {...camion} />
    ));

    return (
        <div>
            <div className="voiture">
                <h2 style={{ color: '#333' }}>Voitures :</h2>
                {voituresList}
            </div>
            <div className="moto">
                <h2 style={{ color: '#333' }}>Motos :</h2>
                {motosList}
            </div>
            <div className="camion">
                <h2 style={{ color: '#333' }}>Camions :</h2>
                {camionsList}
            </div>
        </div>
    );
}

export default Garage