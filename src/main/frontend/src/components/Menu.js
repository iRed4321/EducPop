// Bouton avec le symbole de trois barres qui, quand on clique dessus, affiche un bandeau latéral avec une liste de pages que l'on peut rejoindre quand on clique dessus

import React from 'react';
import "../styles/components/Menu.scss";

class Menu extends React.Component {
  render() {
    return (
        <div id="menuId">
            Menu
            <div id="menuButtonBarId" > <p> Voir ses sessions </p> </div>
            <div id="menuButtonBarId"> <p> Supprimer son compte </p> </div>
            <div id="menuButtonBarId"></div>
        </div>
    );
  }
}

export default Menu;
