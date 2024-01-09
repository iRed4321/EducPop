import React from 'react';
//import { Link } from "react-router-dom";
import DownArrow from "../components/DownArrow"
import Logo from "../components/Logo";


class Home extends React.Component {
  render() {
    return (
      <>
        <Logo />
        <button>Se connecter</button>
        <div>
          Rejoindre une session
          <input placeholder="ID de la session"></input>
          <button>Créer une session</button>
          En savoir plus
          <DownArrow />
        </div>
      </>
    );
  }
}

export default Home;