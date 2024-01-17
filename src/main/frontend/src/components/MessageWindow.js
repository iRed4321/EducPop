// Div contenant la liste des messages envoyés par les participants de la session
// Quand on clique sur un message, il s'affiche dans une <BigQuestionPopUp>
// les éléments de la liste peuvent être réduits pour une meilleure lisibilité
import React from 'react';

import "../styles/components/MessageWindow.scss";

class MessageWindow extends React.Component {

    render() {
        return (
            <div id="messageWindowContainer">
            </div>
        );
    }
}

export default MessageWindow;
