import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";

import {useState, useEffect} from 'react';
// import state management for react 



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

  const logOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  }

    const [menuOpenState, setMenuOpenState] = useState(false);

    useEffect(() => {
        // when we click on the menu but not on a link, we want to close the menu
        const closeMenu = (e) => {
            if (e.target.className != "menu-item")
            {
                setMenuOpenState(false);
            }
        }
        // add the listener to the document
        document.addEventListener('click', closeMenu);

    });

    if(localStorage.getItem("accessToken")!=undefined){
        return (<Menu isOpen={menuOpenState} onStateChange={(state) => setMenuOpenState(state.isOpen)}>
            <Link className="menu-item" to="/">
            Acceuil
            </Link>
            <Link className="menu-item" to="/sessions">
            Voir ses sessions
            </Link>
            <wired-button id="deleteAccountButton" className="menu-item" onClick={removeUser}>Supprimer son compte </wired-button>
            <wired-button className="menu-item" onClick={logOut}>Se déconnecter</wired-button>
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
