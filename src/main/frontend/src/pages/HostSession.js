import React from "react";
import Banner from "../components/Banner";
import Menu from "../components/Menu";
import SessionJoiner from "../components/SessionJoiner";
import BubbleWindow from "../components/BubbleWindow";
import SessionData from "../components/SessionData";
import DragNDropQuestions from "../components/DragNDropQuestions";
import MessageWindow from "../components/MessageWindow";
import BigQuestionPopUp from "../components/BigQuestionPopUp";

import "../styles/pages/HostSession.scss";


class HostSession extends React.Component {

    render() { // Session joiner is the component that contact the session code and the QR code
        return (
            <div id="hostSessionPage">
            <Banner>
            <Menu/>
            <SessionJoiner code="#JRKCC"></SessionJoiner>
            </Banner>
            <div id="hostSessionBody">
            <BubbleWindow></BubbleWindow>
            <div id="dataAndQuestionsDropContainer">
            <SessionData></SessionData>
            <DragNDropQuestions></DragNDropQuestions>
            </div>
            <MessageWindow></MessageWindow>
            </div>
            <BigQuestionPopUp></BigQuestionPopUp>
            </div>
        );
    }

}

export default HostSession;
