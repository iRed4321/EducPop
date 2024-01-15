import React from 'react';
import { Link } from "react-router-dom";
import 'wired-elements';

import Logo from "../components/Logo";
import "../styles/pages/Connect.css";
import axios from "../axios.js";
import { useState } from 'react';

class Connect extends React.Component {


  handleLogin = async (e) => {
    //axios.post("/api/auth/perform_login2").catch(err => console.log(err));
      var data={username:"ejacqui9",password:"passss"}
      try {
        const response = await axios.post("/api/auth/perform_login", {username:"ejacqui9",password:"pass"});
    
        const token = response.data.token; 
        console.log('CEST BON');
      } catch (error) {
        console.error('Login failed:', error.message);
      }
  }

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
          <wired-button id="connectButton" onClick={this.handleLogin}>Se connecter</wired-button >
          <p>Pas de compte ?<br/>
          Pas de soucis, s'en créer un, c'est par <Link to={"/signin"}>ici</Link></p>
        </div>
      </div>
    );
  }
}

export default Connect;
