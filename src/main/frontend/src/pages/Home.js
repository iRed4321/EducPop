import React from 'react';
import { Link } from "react-router-dom";
import DownArrow from "../components/DownArrow"
import Logo from "../components/Logo";
import Sidebar from "../components/Sidebar";
import 'wired-elements';

import "../styles/pages/Home.scss";


class Home extends React.Component {
  render() {
    return (
      <div id="homePage">
        <div id="homeHeader">
        <Sidebar></Sidebar>
        <Logo />
        <Link to="/login">
        {
            // check if we have accesToken in localStorage
            // if not, we display the login button
            localStorage.getItem("accessToken") ? <div></div> : <wired-button id="toLoginButton">Se connecter</wired-button>
        }
        </Link>
        </div>
        
        <div id='homeBody'>
          <p>Rejoindre une session</p>
          <wired-input id="sessionJoinInput" placeholder="ID de la session"></wired-input>
          <wired-button id="sessionCreateButton">Créer une session</wired-button>
          <div id='knowMore'>
          <p id="knowMoreText">En savoir plus</p>
          <DownArrow />
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
