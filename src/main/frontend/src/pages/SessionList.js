import React from 'react';
//import { Link } from "react-router-dom";
import DownArrow from "../components/DownArrow"
import Banner from "../components/Banner";
import ListAndSearch from "../components/ListAndSearch";
import 'wired-elements';

import "../styles/pages/SessionList.css";
import Sidebar from '../components/Sidebar';

const SessionList = () => {
    return (
      <div id="sessionPage">
        <div id="sessionHeader">
          {/* <Sidebar></Sidebar> */}
            
        </div>
        <h1>Vos sessions</h1>
        <ListAndSearch/>
      </div>
    );
}

export default SessionList;
