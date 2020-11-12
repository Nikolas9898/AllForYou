import React from "react";
import HeaderStyle from "./HeaderStyle.module.css";
import logo from '../../../images/logo.png';
import { Link } from "react-router-dom";
function Header(props) {
  return (
       <nav className={HeaderStyle.container}>
         <div className={HeaderStyle.content}>
         <Link to='/'>
           <img className={HeaderStyle.logo} src={logo}/>
         </Link>
      
         </div>
      </nav>
  );
}

export default Header;
