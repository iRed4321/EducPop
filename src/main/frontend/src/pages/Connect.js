import React from 'react';
import { Link } from "react-router-dom";
import 'wired-elements';

import Logo from "../components/Logo";
import "../styles/pages/Connect.css";
import axios from "../axios.js";
import { useState } from 'react';

const Connect = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleLogin = async (e) => {
    //axios.post("/api/auth/perform_login2").catch(err => console.log(err));
      try {
        const response = await axios.post("/api/auth/perform_login", formData);
        console.log(response.data);
        //const token = response.data.token; 
      } catch (error) {
        //there is an error
        console.error('Login failed:', error.message);
      }
  }

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
          {/* <wired-input id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Nom d'utilisateur"></wired-input> */}
          <input id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Nom d'utilisateur"></input>
          <label for="password">Mot de passe</label>
          {/* <wired-input type='password' name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Mot de passe"></wired-input> */}
          <input type='password' name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Mot de passe"></input>
          <wired-button id="connectButton" onClick={handleLogin}>Se connecter</wired-button >
          <p>Pas de compte ?<br/>
          Pas de soucis, s'en créer un, c'est par <Link to={"/signin"}>ici</Link></p>
        </div>
      </div>
    );
  }

export default Connect;
