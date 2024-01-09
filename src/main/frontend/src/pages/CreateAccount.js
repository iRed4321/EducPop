import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../App.css";

import Logo from "../components/Logo";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Logo/>
    <div>
        Nom d'utilisateur
        <input placeholder="Nom d'utilisateur"></input>
        Mot de passe
        <input placeholder="Mot de passe"></input>
        Confirmation de mot de passe
        <input placeholder="Confirmation de mot de passe"></input>
        <button>Créer un compte</button>
    </div>
    
  </StrictMode>
);

export default root;