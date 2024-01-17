// Composant qui permet de lister les sessions d'un compte et d'effectuer un tri par date/nom ou bien une recherche dans cette listein
import React from 'react';
import { Link } from "react-router-dom";
import 'wired-elements';

import Logo from "../components/Logo";
// import "../styles/pages/Connect.css";
import axios from "../axios.js";
import { useState } from 'react';

const ListAndSearch = () => {

    const [sessionsData, setSessionData]=useState([]);

    /*const retrieveSessions = async (e) => {
        try {
            const response = await axios.post("/session/", formData);
            console.log(response.data);
            //const token = response.data.token; 
        } catch (error) {
            //there is an error
            console.error('Login failed:', error.message);
        }
      }*/
    
      const sessions = ['session1','session2','session2'];
      const listItems = sessions.map((number) =>    <li><wired-button><Link to={"/login"}>{number} </Link></wired-button></li>  );
    
        return (
          <div id="connectPage">
            <div id="connectHeader">
            <ul>{listItems}</ul> 
            </div>
          </div>
        );
      }
    
    export default ListAndSearch;
