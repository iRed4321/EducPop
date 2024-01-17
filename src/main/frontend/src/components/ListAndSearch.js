// Composant qui permet de lister les sessions d'un compte et d'effectuer un tri par date/nom ou bien une recherche dans cette listein
import React from 'react';
import { Link } from "react-router-dom";
import 'wired-elements';

import Logo from "../components/Logo";
import "../styles/pages/Connect.css";
import axios from "../axios.js";
import { useState } from 'react';
import { useEffect } from 'react';

const ListAndSearch = () => {

    const [sessionsData, setSessionData]=useState([]);
    var sessions = [];

    const retriveSessions = async (e) => {
        var token=localStorage.getItem("accessToken");
        console.log(localStorage);
        try {
            console.log("req : /session/saved "+token);
            const response = await axios.get("/session/saved?token="+token);
            sessions=response.data;
            

            
        } catch (error) {
            //there is an error
            console.error('Problem fetching sessions :', error.message);
        }
    }

    useEffect(() => {
        //retriveSessions();
        const getInfo = async () => {
            var token=localStorage.getItem("accessToken");
            try {
                const response = await axios.get("/session/saved?token="+token);
                setSessionData(response.data);
            } catch (error) {
                //there is an error
                console.error('Problem fetching sessions :', error.message);
            }
             
        }
        getInfo();
    });
    



      
      const listItems = sessionsData.map((session) =>    <li><wired-button><Link to={"/login"}>{session.nom} </Link></wired-button></li>  );
    
        return (
          <div id="connectPage">
            <div id="connectHeader">
            <ul>{listItems}</ul> 
            </div>
          </div>
        );
      }
    
    export default ListAndSearch;