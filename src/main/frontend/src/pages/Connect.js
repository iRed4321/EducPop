import React from 'react';
import { Link } from "react-router-dom";
import 'wired-elements';

import Logo from "../components/Logo";
import "../styles/pages/Connect.scss";
import axios from "../axios.js";

import { useState } from 'react';



class Connect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    console.log("ça change")
    let formData = this.state;
    this.setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  async handleLogin(e) {
    //axios.post("/api/auth/perform_login2").catch(err => console.log(err));
      try {
        let formData = this.state;
        const response = await axios.post("/api/auth/perform_login", formData);
        console.log(response.data);
        const token = response.data.token; 
      } catch (error) {
        //there is an error
        console.error('Login failed:', error.message);
      }
  }

  render() {

    return (
      <div id="connectPage">
        <div id="connectHeader">
        <Logo />
        <div id='returnHome'>
        <p id="retkurnHomeText">Retour à l'accueil</p>
        <button uid>right arrow</button>
        </div>
        </div>
        <div id='connectBody'>
          <label id="usernameLabel" htmlFor='username'>Nom d'utilisateur</label>
           <wired-input id="username" name="username" placeholder="Nom d'utilisateur"></wired-input>
          {/*<input id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Nom d'utilisateur"></input>*/}
          <label id="passwordLabel" htmlFor="password">Mot de passe</label>
           <wired-input type='password' name="password" id="password"  placeholder="Mot de passe"></wired-input>
          {/*<input type='password' name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Mot de passe"></input>
          <wired-button id="connectButton" onClick={handleLogin}>Se connecter</wired-button >
          */}
          <wired-button id="connectButton" >Se connecter</wired-button >
          <p id="createAccountText">Pas de compte ?<br/>
          Pas de soucis, s'en créer un, c'est par <Link to={"/signin"}>ici</Link></p>
        </div>
      </div>
    );
    }
}

export default Connect;
