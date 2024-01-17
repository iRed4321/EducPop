// Balise <p> contenant le nom de la session et la date de la session
import React from 'react';

import "../styles/components/SessionData.scss";

class SessionData extends React.Component {

    render() {
        return (
            <div id="sessionDataContainer">
            <h2> Récapitulatif de la session </h2>
            <p> - Connectés: </p>
            <p> - Temps restant </p>
            <p> - Diapositives: </p>
            </div>
        );
    }
}

export default SessionData;
