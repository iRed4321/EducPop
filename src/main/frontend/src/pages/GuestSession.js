import React from 'react';

import Logo from "../components/Logo";
import Sender from "../components/Sender"

class GuestSession extends React.Component {
  render() {
    return (
      <>
        <Logo/>
        <Sender label="Mots :" placeholder="Ecrivez un mot ici" route=""></Sender>
        <Sender label="Question ?" placeholder="Une question ?" route=""></Sender>
      </>
    );
  }
}

export default GuestSession;