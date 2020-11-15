import React, { useState, useEffect } from "react";
import HeaderStyle from "./HeaderStyle.module.css";
import logo from "../../../images/logo2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MenuModal from "./menuModal/MenuModal";
import axios from "axios";

import { useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSeacrhOpen, setIsSearchOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

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

  const handleMenu = () => {
    isMenuOpen === true ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };
  // function handleSearch() {
  //   isSeacrhOpen === true ? setIsSearchOpen(false) : setIsSearchOpen(true);
  // }

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      history.push(`/search/${search}`);
    }
  };

  const goToSearch = () => {
    history.push(`/search/${search}`);
  };

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

          <input
            className={HeaderStyle.search_input}
            onChange={handleInput}
            value={search}
            onKeyDown={handleKeyDown}
          />
          <FontAwesomeIcon
            onClick={goToSearch}
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
