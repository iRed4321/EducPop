// Logo de l'application
// Composant avec une image de flèche qui descend et qui fait scroller la page vers le bas quand on clique dessus
import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/bubblepop.png'

class Logo extends React.Component {
  render() {
    return (
      <Link to="/"><img src={logo} alt="Logo de l'application BubblePop"/></Link>
    );
  }
}

export default Logo;