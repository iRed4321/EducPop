import React from 'react';
//import { Link } from "react-router-dom";
import DownArrow from "../components/DownArrow"
import Banner from "../components/Banner";
import ListAndSearch from "../components/ListAndSearch";
import 'wired-elements';

import "../styles/pages/SessionList.css";

const SessionList = () => {
    return (
      <div id="sessionPage">
        <div id="sessionHeader"></div>
        {/* <Banner>
            <h1>Vos sessions</h1>
        </Banner> */}
        <h1>Vos sessions</h1>
        <ListAndSearch/>
      </div>
    );
}

export default SessionList;
