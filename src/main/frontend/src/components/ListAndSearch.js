// Composant qui permet de lister les sessions d'un compte et d'effectuer un tri par date/nom ou bien une recherche dans cette listein
import React from 'react';
import { Link } from "react-router-dom";
import 'wired-elements';
import { useNavigate } from 'react-router-dom';

import Logo from "../components/Logo";
// import "../styles/pages/Connect.css";
import axios from "../axios.js";
import { useState } from 'react';
import { useEffect } from 'react';

const ListAndSearch = () => {

    let navigate = useNavigate();

    const [sessionsData, setSessionData]=useState([]);

    useEffect(() => {
        const getInfo = async () => {
            var token=localStorage.getItem("accessToken");
            try {
                const response = await axios.get("/session/saved?token="+token);
                setSessionData(response.data);
                console.log(response.data);
            } catch (error) {
                //there is an error
                console.error('Problem fetching sessions :', error.message);
            }
             
        }
        getInfo();
    },[]);
    
    const handleGoToSession = async (id,e) => {
      var token=localStorage.getItem("accessToken");
      try {
          const response = await axios.get("/session/saved/load?token="+token+"&id="+id);
          const urlCurrSession ="/host_session?id="+ response.data;
          navigate(urlCurrSession);
      } catch (error) {
          //there is an error
          console.error('Problem fetching session :', error.message);
      }
    }

      const listItems = sessionsData.map((session) => <li key={session.id}><wired-button onClick={(e) => handleGoToSession(session.id, e)}>{(session.nom==undefined)?"Session "+session.id:session.nom}</wired-button></li>  );
    
        return (
          <div id="connectPage">
            <div id="connectHeader">
            <ul>{listItems}</ul>
            </div>
          </div>
        );
      }
    
    export default ListAndSearch;
