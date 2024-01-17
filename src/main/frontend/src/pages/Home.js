import React from 'react';
import { Link } from "react-router-dom";
import DownArrow from "../components/DownArrow"
import Logo from "../components/Logo";
import Sidebar from "../components/Sidebar";
import 'wired-elements';
import axios from '../axios.js';
import { useNavigate } from 'react-router-dom';

import rainforest from "../assets/rainforestAlliance.png";
import Bcertified from "../assets/Bcertified.png";
import sybert from "../assets/sybert.png";
import onePercent from "../assets/1percent.png";
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
        <Sidebar></Sidebar>
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
          <wired-button id="sessionCreateButton" onClick={handleCreateAccount}>Créer une session</wired-button>
          <div id='knowMore'>
          <p id="knowMoreText">En savoir plus</p>
          <DownArrow />
          </div>
        </div>
        <h2>BubblePop, le brainstorming qui fait des bulles</h2>
        <p>
          Récolter des avis, mettre des choses en lien, mesurer la température en réunion, partager des idées...
          C'est bien. Mais s'occuper de faire en sorte que tout ce passe bien, point de vue logistique, c'est toujours un défi.
          Mais pas avec BubblePop.
        </p>
        <br/>
        <p>
          Nous sommes <i>Awrlowloh</i>. Une équipe de développeurs et développeuses, certes, mais une équipe de gens passionnés
          non seulement par l'informatique, mais aussi par les questions importantes de notre siècle.
          Réchauffement climatique, Inégalités, Discrimination, et on en passe. Et on a décidé qu'on resterait pas les bras croisés.
          En fait, on est une microentreprise composée de jeunes qui en avaient marre de coder des projets qui ne servaient à rien ni a personne.
          On s'est lancé sur le marché des sociétés de services sans trop savoir comment ça marchait, mais il est une chose qu'on savait très bien,
          c'est qu'on ne voulait pas coder dans le vent. Donc notre approche, plutôt que de se tourner vers les gros businesses qui
          brassent des sommes astronomique, c'est de répondre à des appels à projets. Qu'ils soient d'ampleur municipale, départementale, régionale ou
          nationale. Ce qu'on veut, c'est aider.
        </p>
        <br/>
        <p>
          Chez <i>Awrlowloh</i>, nous sommes convaincus que les gens n'ont pas besoin de transactions financières entre eux pour s'entendre et
          faire du monde un endroit meilleur. La motivation que procure la collaboration pure et simple alliée à la passion, c'est ça qui peut faire la différence.
          Donc on veut rester proche de cette sphère. C'est pourquoi nous travaillons principalement avec et pour les associations du développement durable, 
          celles qui disposent de certification qui nous prouvent qu'objectivement, elles sont une nécessité pour notre société.
        </p>
        <div className='certifications'>
          <img className='quoteLogo' src={rainforest} alt="logo de la certification Rainforest Alliance" />
          <img className='quoteLogo' src={sybert} alt="logo de la certification Sybert" />
          <img classname='quoteLogo' src={onePercent} alt="logo de la certification 1% for the planet" />
          <img classname='quoteLogo' src={Bcertified} alt="logo de la certification B" />
        </div>

      </div>
    );
}

export default Home;
