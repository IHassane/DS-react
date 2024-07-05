import React from "react";
import Vehicule from "./Vehicule.jsx";

class Voiture extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Vehicule marque={this.props.marque} anneeFab={this.props.anneeFab} couleur={this.props.couleur} klaxon={this.props.klaxon}/>
            </div>
        )
    }
}

export default Voiture