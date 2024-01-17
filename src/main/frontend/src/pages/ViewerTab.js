import React from "react";
import BubbleWindow from "../components/BubbleWindow";

import { useState, useEffect } from "react";
import axios from "../axios";

import "../styles/pages/HostSession.scss";

const ViewerTab = () => {

    return (
        <div id="hostSessionPage">
        <div id="hostSessionBody">
        <BubbleWindow></BubbleWindow>
        </div>
        </div>
    );

}

export default ViewerTab;