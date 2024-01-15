import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

//import  from "../components";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Banner>
      <Menu/>
      <h2>Info session <SessionTitleInfo/> </h2>
      <Logo/>
    </Banner>
    <BubbleWindow></BubbleWindow>
    <MessageWindow></MessageWindow>
    
  </StrictMode>
);