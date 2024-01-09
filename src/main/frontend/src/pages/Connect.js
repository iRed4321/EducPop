import React from 'react';
import { Link } from "react-router-dom";

import Logo from "../components/Logo";

class Connect extends React.Component {
  render() {
    return (
      <>
        <Logo />
        Retour à l'accueil
        <button>right arrow</button>
        <div>
          Nom d'utilisateur
          <input placeholder="Nom d'utilisateur"></input>
          Mot de passe
          <input placeholder="Mot de passe"></input>
          <button>Se connecter</button>
          <p>Pas de compte ?</p>
          <p>Pas de soucis, s'en créer un, c'est par <Link to={"/signin"}>ici</Link></p>
        </div>
      </>
    );
  }
}

export default Connect;