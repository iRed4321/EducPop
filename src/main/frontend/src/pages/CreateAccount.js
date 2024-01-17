import React from "react";
//import { Link } from "react-router-dom";
import 'wired-elements';

import Logo from "../components/Logo";
import "../styles/pages/CreateAccount.scss";

import axios from "../axios.js";
import { useState } from 'react';


const CreateAccount = () => {

  
  let usernameInput = React.createRef();
  let passwordInput = React.createRef();
  let passwordConfirmInput = React.createRef();

  const handleSignUp = async (e) => {
    //axios.post("/api/auth/perform_login2").catch(err => console.log(err));
      try {
        let formData = { };
        formData.username = usernameInput.current.value;
        formData.password = passwordInput.current.value;
        formData.passwordConfirm = passwordConfirmInput.current.value;
        const response = await axios.post("/api/auth/perform_signup", formData);
        console.log(response.data);
        //const token = response.data.token; 
        console.log('CEST BON');
      } catch (error) {
        //there is an error
        console.error('Sign up failed:', error.message);
      }
  }

    return (
      <div id="createAccountPage">
        <div id="createAccountHeader">
        <Logo />
        </div>
        <div id="createAccountBody">
          <label id="usernameLabel" htmlFor='username'> Nom d'utilisateur </label>
          <wired-input id="username" placeholder="Nom d'utilisateur" ref={usernameInput}></wired-input>
          <label id="passwordLabel" htmlFor='password'>Mot de passe</label>
          <wired-input type="password" id="password" placeholder="Mot de passe" ref={passwordInput}></wired-input>
          <label id="passwordConfirmLabel" htmlFor='passwordConfirm'>Confirmation de mot de passe</label>
          <wired-input id="passwordConfirm"type="password" placeholder="Confirmation de mot de passe" ref={passwordConfirmInput}></wired-input>
          <wired-button  onClick={handleSignUp} id="createAccountButton">Créer un compte</wired-button> 
        </div>

      </div>
    );
  }

export default CreateAccount;
