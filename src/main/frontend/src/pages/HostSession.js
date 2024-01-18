import React from "react";
import Banner from "../components/Banner";
import SessionJoiner from "../components/SessionJoiner";
import BubbleWindow from "../components/BubbleWindow";
import SessionData from "../components/SessionData";
import DragNDropQuestions from "../components/DragNDropQuestions";
import MessageWindow from "../components/MessageWindow";
import BigQuestionPopUp from "../components/BigQuestionPopUp";
import Sidebar from "../components/Sidebar";
import PrintQuestion from "../components/PrintQuestion";

import { useState, useEffect } from "react";

import "../styles/pages/HostSession.scss";
import axios from "../axios";

const HostSession = () => {

    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");

    return (
        <div id="hostSessionPage">
        <Banner>
        <Sidebar></Sidebar>
        <SessionJoiner code={id}></SessionJoiner>
        </Banner>
        <div id="hostSessionBody">
        <BubbleWindow></BubbleWindow>
        <div id="dataAndQuestionsDropContainer">
        <SessionData></SessionData>
        <DragNDropQuestions displayDropZone={true}> </DragNDropQuestions>
        </div>
        <PrintQuestion displayDropZone={false}></PrintQuestion>
        </div>
        <BigQuestionPopUp></BigQuestionPopUp>
        </div>
    );

}

export default HostSession;
