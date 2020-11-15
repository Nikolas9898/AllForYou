import React, { useState, useEffect } from "react";
import HeaderStyle from "./HeaderStyle.module.css";
import logo from "../../../images/logo2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MenuModal from "./menuModal/MenuModal";
import axios from "axios";

function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSeacrhOpen, setIsSearchOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios
      .get("https://allforyouapinodejs.herokuapp.com/api/category")
      .then((categories) => {
        setCategories(categories.data);
      });
  };

  function handleMenu() {
    isMenuOpen === true ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }
  function handleSearch() {
    isSeacrhOpen === true ? setIsSearchOpen(false) : setIsSearchOpen(true);
  }

  return (
    <nav className={HeaderStyle.container}>
      <div className={HeaderStyle.content}>
        <Link to="/">
          <img className={HeaderStyle.logo} src={logo} alt={"notFound"} />
        </Link>
        <div className={HeaderStyle.menu_container}>
            <FontAwesomeIcon
            onClick={handleMenu}
            className={HeaderStyle.menu}
            icon={faBars}
            />
          
    
                <input  className={HeaderStyle.search_input}/>
                <FontAwesomeIcon
                onClick={handleSearch}
                className={HeaderStyle.search_icon}
                icon={faSearch}
                />
                
              </div>
    
       
      </div>

      <MenuModal
        categories={categories}
        isMenuOpen={isMenuOpen}
        handleMenu={handleMenu}
      />
    </nav>
  );
}

export default Header;
