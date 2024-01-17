// Composant qui contient le code à taper pour rejoindre une session et le QRcode à flasher pour rejoindre cette même session sans avoir à taper le code

import React from 'react';

import "../styles/components/SessionJoiner.scss";

import QRcode from "./QRcode.js";


class SessionJoiner extends React.Component {

    render() {
        return (
            <div id="sessionJoinerContainer">
            <h2 id="invitationCodeText"> Code d'invitation: {this.props.code} </h2>
                <QRcode />

            </div>
        );
    }
}

export default SessionJoiner;
