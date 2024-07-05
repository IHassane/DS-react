import React from "react";
import Vehicule from "./Vehicule.jsx";

class Camion extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Camion :</h1>
                <Vehicule marque={this.props.marque} anneFab={this.props.anneFab} couleur={this.props.couleur} klaxon={this.props.klaxon}/>
            </div>
        )
    }
}

export default Camion