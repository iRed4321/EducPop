import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

//import  from "../components";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Logo/>
    <button>Se connecter</button>
    <div>
        Rejoindre une session
        <input placeholder="ID de la session"></input>
        <button>Créer une session</button>
        En savoir plus
        <DownArrow/>
    </div>
    
  </StrictMode>
);