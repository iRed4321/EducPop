import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import "../styles/components/Sidebar.scss";

const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Acceuil
      </a>
      <a className="menu-item" href="/salads">
        Voir ses sessions
      </a>
      <a className="menu-item" href="/pizzas">
        Supprimer son compte
      </a>
    </Menu>
  );
};

export default Sidebar;
