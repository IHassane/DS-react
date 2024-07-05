import React from 'react';


class Vehicule extends React.Component {
    constructor(props) {
        super(props)
        this.AfficherDetails = this.AfficherDetails.bind(this);
        this.klaxonner = this.klaxonner.bind(this);
    }

    AfficherDetails() {
        alert(`Couleur: ${this.props.couleur}`)
    }

    klaxonner() {
        alert(`Bruit: ${this.props.klaxon}`)
    }

    render() {
        return (
            <>
                <div>
                    <div>
                        <p style={{color: '#333'}}>Marque: {this.props.marque}</p>
                        <p style={{color: '#333'}}>Année de Fabrication: {this.props.anneeFab}</p>
                    </div>
                </div>
                <button onClick={this.AfficherDetails}>Afficher details</button>
                <button onClick={this.klaxonner}>Klaxonner !</button>
            </>
        )
    }
}

export default Vehicule