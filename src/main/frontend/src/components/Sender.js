// Composant contenant un "label", un <input> avec un "placeholder" et un bouton pour envoyer le texte dans l'input.
import React from 'react';
import axios from '../axios.js';

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
        <>
            <p>{props.label}</p>
            <input placeholder={props.placeholder} ref={dataWritten}></input>
            <button onClick={handleSendData}>Envoyer</button>
        </>
    );
}

export default Sender;