// Balise <p> contenant le nom de la session et la date de la session
import React from 'react';
import 'wired-elements';
import "../styles/components/SessionData.scss";
import axios from '../axios.js';

import { useNavigate } from 'react-router-dom';

const SessionData = () => {

    const navigate = useNavigate();

    const newDiapo = async () => {
        try {
            var token = localStorage.getItem("accessToken");
            var params = new URLSearchParams(document.location.search);
            var id = params.get("id");
            const reponse = await axios.get("/session/"+id+"/newDiapo?token="+token);
        } catch (error) {
            console.log(error);
        }
    }

    const closeSession = async () => {
        try {
            var token = localStorage.getItem("accessToken");
            var params = new URLSearchParams(document.location.search);
            var id = params.get("id");
            const reponse = await axios.get("/session/"+id+"/close?token="+token);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div id="sessionDataContainer">
        <h2> Récapitulatif de la session </h2>
        <p> - Connectés: </p>
        <p> - Temps restant </p>
        <p> - Diapositives: </p>
        <wired-button id="newDiapositiveButton" onClick={newDiapo}> Nouvelle diapo </wired-button>
        <wired-button id="closeSessionButton" onClick={closeSession}> Clore la session </wired-button>

        </div>
    );
}

export default SessionData;
