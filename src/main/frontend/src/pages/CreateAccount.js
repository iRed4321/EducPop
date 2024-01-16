import React from "react";
//import { Link } from "react-router-dom";
import 'wired-elements';

import Logo from "../components/Logo";
import "../styles/pages/CreateAccount.scss";


class CreateAccount extends React.Component {
  render() {
    return (
      <div id="createAccountPage">
        <div id="createAccountHeader">
        <Logo />
        </div>
        <div id="createAccountBody">
          <label htmlFor='username'> Nom d'utilisateur </label>
          <wired-input id="username" placeholder="Nom d'utilisateur"></wired-input>
          <label htmlFor='password'>Mot de passe</label>
          <wired-input type="password" id="password" placeholder="Mot de passe"></wired-input>
          <label htmlFor='passwordConfirm'>Confirmation de mot de passe</label>
          <wired-input type="password" id="passwordConfirm" placeholder="Confirmation de mot de passe"></wired-input>
          <wired-button>Créer un compte</wired-button>
        </div>

      </div>
    );
  }
}

export default CreateAccount;
