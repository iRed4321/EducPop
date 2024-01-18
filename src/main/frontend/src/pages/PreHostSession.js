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
import HostSession from "./HostSession";

const PreHostSession = () => {
    


    return (
        <HostSession></HostSession>
    );

}

export default PreHostSession;
