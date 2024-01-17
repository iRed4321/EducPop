import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";

import "../styles/components/Sidebar.scss";

const Sidebar = () => {

  if(localStorage.getItem("accessToken")!=undefined){
    return (<Menu>
      <Link className="menu-item" to="/">
        Acceuil
      </Link>
      <Link className="menu-item" to="/sessions">
        Voir ses sessions
      </Link>
      <Link className="menu-item" to="/">
          Supprimer son compte
      </Link>
    </Menu>
  );
  }else{
    return (<Menu>
        <Link className="menu-item" to="/">
          Acceuil
        </Link>
      </Menu>);
  }
      
    
  
};

export default Sidebar;
