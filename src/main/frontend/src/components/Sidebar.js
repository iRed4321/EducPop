import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";

import "../styles/components/Sidebar.scss";
import axios from '../axios.js';

import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate();

  const removeUser = () => {
    const response = axios.get("/removeUser?token="+localStorage.getItem("accessToken"));
    localStorage.removeItem("accessToken");
    navigate("/");
  }

  if(localStorage.getItem("accessToken")!=undefined){
    return (<Menu>
      <Link className="menu-item" to="/">
        Acceuil
      </Link>
      <Link className="menu-item" to="/sessions">
        Voir ses sessions
      </Link>
      <wired-button className="menu-item" onClick={removeUser}>Supprimer son compte</wired-button>
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
