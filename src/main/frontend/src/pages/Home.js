import React from 'react';
//import { Link } from "react-router-dom";
import DownArrow from "../components/DownArrow"
import Logo from "../components/Logo";
import 'wired-elements';

import "../styles/pages/Home.css";



class Home extends React.Component {
  render() {
    return (
      <div id="homePage">
        <div id="homeHeader">
        <Logo />
        <wired-button>Se connecter</wired-button>
        </div>
        <div id='homeBody'>
          <p>Rejoindre une session</p>
          <wired-input placeholder="ID de la session"></wired-input>
          <wired-button>Créer une session</wired-button>
          <div id='knowMore'>
          <p>En savoir plus</p>
          <DownArrow />
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
