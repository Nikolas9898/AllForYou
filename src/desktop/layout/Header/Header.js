import React,{useState} from "react";
import HeaderStyle from "./HeaderStyle.module.css";
import logo from '../../../images/logo2.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuModal from "./menuModal/MenuModal";


function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 function handleMenu(){
      isMenuOpen===true?
      setIsMenuOpen(false):
      setIsMenuOpen(true)
  }
  return (
       <nav className={HeaderStyle.container}>
         <div className={HeaderStyle.content}>
            <Link to='/'>
           <img className={HeaderStyle.logo} src={logo}/>
         </Link>
           <FontAwesomeIcon onClick={handleMenu} className={HeaderStyle.menu} icon={faBars} />
          </div>
       
          <MenuModal isMenuOpen={isMenuOpen} />
      </nav>
  );
}

export default Header;
