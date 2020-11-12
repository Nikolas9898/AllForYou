import React from "react";
import HeaderStyle from "./HeaderStyle.module.css";
import logo from '../../../images/logo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
       <nav className={HeaderStyle.container}>
         <div className={HeaderStyle.content}>
         <FontAwesomeIcon className={HeaderStyle.menu} icon={faBars} />
         <Link to='/'>
           <img className={HeaderStyle.logo} src={logo}/>
         </Link>
      
         </div>
      </nav>
  );
}

export default Header;
