import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

//import  from "../components";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Banner>
        <h1>Vos sessions</h1>
    </Banner>
    <ListAndSearch/>
  </StrictMode>
);