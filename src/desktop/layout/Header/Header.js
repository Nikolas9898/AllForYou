import React, { useState, useEffect } from "react";
import HeaderStyle from "./HeaderStyle.module.css";
import logo from "../../../images/logo2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuModal from "./menuModal/MenuModal";
import axios from "axios";

function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios
      .get("https://allforyouapinodejs.herokuapp.com/api/category")
      .then((categories) => {
        console.log(categories);
        setCategories(categories.data);
      });
  };

  function handleMenu() {
    isMenuOpen === true ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }

  // const categories = ["Спорт", "Игри", "Козметика", "Джаджи"];

  return (
    <nav className={HeaderStyle.container}>
      <div className={HeaderStyle.content}>
        <Link to="/">
          <img className={HeaderStyle.logo} src={logo} alt={"notFound"} />
        </Link>
        <FontAwesomeIcon
          onClick={handleMenu}
          className={HeaderStyle.menu}
          icon={faBars}
        />
      </div>

      <MenuModal categories={categories} isMenuOpen={isMenuOpen} />
    </nav>
  );
}

export default Header;
