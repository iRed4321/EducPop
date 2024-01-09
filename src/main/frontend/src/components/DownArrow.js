// Composant avec une image de flèche qui descend et qui fait scroller la page vers le bas quand on clique dessus
import React from 'react';
import { Link } from "react-router-dom";

import downarrow from "../assets/downarrow.png"

class DownArrow extends React.Component {
  render() {
    return (
      <Link ><img src={downarrow} alt="Flèche qui descend"/></Link>
    );
  }
}

export default DownArrow;