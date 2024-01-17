import React from 'react';
import { Link } from "react-router-dom";
import 'wired-elements';

import Logo from "../components/Logo";
import "../styles/pages/Connect.scss";
import axios from "../axios.js";


import { useState } from 'react';

const Connect = () => {


  let usernameInput = React.createRef();
  let passwordInput = React.createRef();

  const handleLogin = async (e) => {
        try {
            e.preventDefault();
            let username = usernameInput.current.value;
            let password = passwordInput.current.value;
            let formData = { };
            formData.username = username;
            formData.password = password;
            const response = await axios.post("/api/auth/perform_login", formData);
            if (response.code !== 200) {
                console.log('error');
            }
            console.log(response.data);
            const token = response.data.token; 
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
        <p id="returnHomeText">Retour à l'accueil</p>
        <wired-icon-button uid> -> </wired-icon-button>
        </div>
        </div>
        <div id='connectBody'>
        <label id="usernameLabel" htmlFor='username'>Nom d'utilisateur</label>
        <wired-input id="username" name="username" placeholder="Nom d'utilisateur" ref={usernameInput}></wired-input>
        {/*<input id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Nom d'utilisateur"></input>*/}
        <label id="passwordLabel" htmlFor="password">Mot de passe</label>
        <wired-input type='password' name="password" id="password"  placeholder="Mot de passe" ref={passwordInput}></wired-input>
        {/*<input type='password' name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Mot de passe"></input>
            <wired-button id="connectButton" onClick={handleLogin}>Se connecter</wired-button >
            */}
        <wired-button id="connectButton" onClick={handleLogin}>Se connecter</wired-button >
        <p id="createAccountText">Pas de compte ?<br/>
        Pas de soucis, s'en créer un, c'est par <Link to={"/signup"}>ici</Link></p>
        </div>
        </div>
    );
}

export default Connect;
