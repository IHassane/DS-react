import React from 'react';


class Vehicule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            details: ''
        };
        this.AfficherDetails = this.AfficherDetails.bind(this);
        this.klaxonner = this.klaxonner.bind(this);
    }

    AfficherDetails() {
        const {marque, anneFab, couleur} = this.props;
        const details = `Marque: ${marque}, Année de fabrication: ${anneFab}, Couleur: ${couleur}`
        this.setState(details)
    }

    klaxonner() {
        alert(`Bruit: ${this.props.klaxon}`)
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={this.AfficherDetails}>Afficher details</button>
                    <button onClick={this.klaxonner}>Klaxonner !</button>
                    {this.state.details && <p>{this.state.details}</p>}
                </div>
            </>
        )
    }
}

export default Vehicule