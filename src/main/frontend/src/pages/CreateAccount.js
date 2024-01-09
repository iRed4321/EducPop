import React from "react";
//import { Link } from "react-router-dom";

import Logo from "../components/Logo";

class CreateAccount extends React.Component {
  render() {
    return (
      <>
        <Logo />
        <div>
          Nom d'utilisateur
          <input placeholder="Nom d'utilisateur"></input>
          Mot de passe
          <input placeholder="Mot de passe"></input>
          Confirmation de mot de passe
          <input placeholder="Confirmation de mot de passe"></input>
          <button>Créer un compte</button>
        </div>

      </>
    );
  }
}

export default CreateAccount;