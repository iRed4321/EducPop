import React from "react";
//import { Link } from "react-router-dom";
import 'wired-elements';

import Logo from "../components/Logo";
import "../styles/pages/CreateAccount.scss";

import axios from "../axios.js";
import { useState } from 'react';


const CreateAccount = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirm: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    //axios.post("/api/auth/perform_login2").catch(err => console.log(err));
      try {
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
          {/* <label htmlFor='username'> Nom d'utilisateur </label>
          <wired-input id="username" placeholder="Nom d'utilisateur"></wired-input>
          <label htmlFor='password'>Mot de passe</label>
          <wired-input type="password" id="password" placeholder="Mot de passe"></wired-input>
          <label htmlFor='passwordConfirm'>Confirmation de mot de passe</label>
          <wired-input type="password" id="passwordConfirm" placeholder="Confirmation de mot de passe"></wired-input>
          <wired-button>Créer un compte</wired-button> */}
          <label htmlFor='username'> Nom d'utilisateur </label>
          <input id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Nom d'utilisateur"></input>
          <label htmlFor='password'>Mot de passe</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Mot de passe"></input>
          <label htmlFor='passwordConfirm'>Confirmation de mot de passe</label>
          <input type="password" id="passwordConfirm" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange} placeholder="Confirmation de mot de passe"></input>
          <wired-button onClick={handleSignUp}>Créer un compte</wired-button>
        </div>

      </div>
    );
  }

export default CreateAccount;
