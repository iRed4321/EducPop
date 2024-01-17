// Composant qui permet d'afficher une question qu'on y dépose dans une nouvelle fenêtre (pour la rendre visible à l'écran de diaporama)
import React from 'react';

import "../styles/components/DragNDropQuestions.scss";

import "wired-elements";

class DragNDropQuestions extends React.Component {

    render() {
        return (
            <div id="DragNDropQuestionsContainer">
            <div id="DragNDropQuestionsFrame">
            <p> Glissez une question ici pour l'afficher
                dans une nouvelle fenêtre </p>
            </div>
            </div>
        );
    }
}

export default DragNDropQuestions;
