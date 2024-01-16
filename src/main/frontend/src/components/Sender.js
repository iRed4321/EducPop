// Composant contenant un "label", un <input> avec un "placeholder" et un bouton pour envoyer le texte dans l'input.
import React from 'react';


class Sender extends React.Component {

    render() {
        return (
            <>
                <p>{this.props.label}</p>
                <input placeholder={this.props.placeholder}></input>
                <button>Envoyer</button>
            </>
        );
    }
}

export default Sender;