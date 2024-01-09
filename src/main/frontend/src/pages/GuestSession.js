import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

//import  from "../components";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    
    <div>
        <logo/>
        <Sender label="Mots :" placeholder="Ecrivez un mot ici" route=""></Sender>
        <Sender label="Question ?" placeholder="Une question ?" route=""></Sender>
    </div>
    
  </StrictMode>
);