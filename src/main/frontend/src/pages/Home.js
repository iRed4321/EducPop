import React from 'react';
import { Link } from "react-router-dom";
import DownArrow from "../components/DownArrow"
import Logo from "../components/Logo";
import 'wired-elements';
import axios from '../axios.js';
import { useNavigate } from 'react-router-dom';

import "../styles/pages/Home.scss";

const Home = () => {

    const navigate = useNavigate();

    const handleCreateAccount = async () => {
        try {
            var token = localStorage.getItem("accessToken");
            const reponse = await axios.get("/session/open?token="+token);
            console.log(reponse.data);
            navigate("/host_session?id="+reponse.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <div id="homePage">
        <div id="homeHeader">
        <Logo />
        <Link to="/login">
        <wired-button id="toLoginButton">Se connecter</wired-button>
        </Link>
        </div>
        <div id='homeBody'>
          <p>Rejoindre une session</p>
          <wired-input id="sessionJoinInput" placeholder="ID de la session"></wired-input>
          <wired-button id="sessionCreateButton" onClick={handleCreateAccount}>Créer une session</wired-button>
          <div id='knowMore'>
          <p id="knowMoreText">En savoir plus</p>
          <DownArrow />
          </div>
        </div>

      </div>
    );
}

export default Home;
