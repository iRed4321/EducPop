import React from 'react';

import Logo from "../components/Logo";
import Sender from "../components/Sender"

import "../styles/pages/GuestSession.scss";

class GuestSession extends React.Component {
  render() {
    return (
      <div id="guestSessionPage">
        <div id="guestSessionHeader">
        <Logo/>
        </div>
        <div id="guestSessionBody">
        <Sender label="Mots :" placeholder="Ecrivez un mot ici" route="word"></Sender>
        <Sender label="Question ?" placeholder="Une question ?" route="question"></Sender>
        </div>
      </div>
    );
  }
}

export default GuestSession;
