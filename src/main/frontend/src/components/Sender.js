// Composant contenant un "label", un <input> avec un "placeholder" et un bouton pour envoyer le texte dans l'input.
import React from 'react';
import axios from '../axios.js';

import "../styles/components/Sender.scss";

 const Sender = (props) => {

    const dataWritten = React.createRef();

    const handleSendData = async (e) => {
        try {
            let params = new URLSearchParams(document.location.search);
            let id = params.get("id");
            let data = dataWritten.current.value;
            const reponse = await axios.get("/session/"+id+"/data?"+props.route+"="+data);
            console.log(reponse.status);
        } catch (error) {
            
        }
    }

    return (
        <div className="senderContainer">
            <p>{props.label}</p>
            <wired-input className="senderInput" placeholder={props.placeholder} ref={dataWritten}></wired-input>
            <wired-button className="senderButton" onClick={handleSendData}>Envoyer</wired-button>
        </div>
    );
}

export default Sender;
