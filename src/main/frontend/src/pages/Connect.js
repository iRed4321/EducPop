import React from 'react';
import { Link } from "react-router-dom";
import 'wired-elements';

import Logo from "../components/Logo";
import "../styles/pages/Connect.css";

class Connect extends React.Component {
  render() {
    return (
      <div id="connectPage">
        <div id="connectHeader">
        <Logo />
        <div id='returnHome'>
        <p>Retour à l'accueil</p>
        <button>right arrow</button>
        </div>
        </div>
        <div id='connectBody'>
          <label for='username'>Nom d'utilisateur</label>
          <wired-input id="username" placeholder="Nom d'utilisateur"></wired-input>
          <label for="password">Mot de passe</label>
          <wired-input type='password' id="password" placeholder="Mot de passe"></wired-input>
          <wired-button id="connectButton">Se connecter</wired-button>
          <p>Pas de compte ?<br/>
          Pas de soucis, s'en créer un, c'est par <Link to={"/signin"}>ici</Link></p>
        </div>
      </div>
    );
  }
}

export default Connect;
