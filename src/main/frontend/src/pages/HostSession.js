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

const HostSession = () => {

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
      const interval = setInterval(() => setTime(Date.now()), 1000)
      return () => {
        clearInterval(interval);
      };
    }, []);

    let params = new URLSearchParams(document.location.search);
    let id = "#" + params.get("id");

    return (
        <div id="hostSessionPage">
        <Banner>
        <Sidebar></Sidebar>
        <SessionJoiner code={id}></SessionJoiner>
        </Banner>
        <div id="hostSessionBody">
        <BubbleWindow>{time}</BubbleWindow>
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
