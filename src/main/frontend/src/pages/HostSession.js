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

import "../styles/pages/HostSession.scss";


class HostSession extends React.Component {

    render() { // Session joiner is the component that contact the session code and the QR code

        let params = new URLSearchParams(document.location.search);
        let id = "#" + params.get("id");

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
            <DragNDropQuestions></DragNDropQuestions>
            </div>
            <PrintQuestion></PrintQuestion>
            </div>
            <BigQuestionPopUp></BigQuestionPopUp>
            </div>
        );
    }

}

export default HostSession;
