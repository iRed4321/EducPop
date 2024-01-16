import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

//import  from "../components";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Banner>
        <Menu/>
        <h2>Code d'invitation: <SessionJoiner/></h2>
    </Banner>
    <BubbleWindow></BubbleWindow>
    <SessionData></SessionData>
    <DragNDropQuestions></DragNDropQuestions>
    <MessageWindow hideable="true"></MessageWindow>
    <BigQuestionPopUp></BigQuestionPopUp>
  </StrictMode>
);