import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

//import  from "../components";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Logo/>
    Retour à l'accueil
    <button>right arrow</button>
    <div>
        Nom d'utilisateur
        <input placeholder="Nom d'utilisateur"></input>
        Mot de passe
        <input placeholder="Mot de passe"></input>
        <button>Se connecter</button>
        <p>Pas de compte ?</p>
        <p>Pas de soucis, s'en créer un, c'est par <a>ici</a></p>
    </div>
    
  </StrictMode>
);