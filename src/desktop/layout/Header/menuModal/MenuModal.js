import React from "react";
import MenuModalStyl from "./MenuModalStyl.module.css";
import { Link } from "react-router-dom";

function MenuModal({ isMenuOpen, categories }) {
  return (
    <div>
      {isMenuOpen === true ? (
        <div className={MenuModalStyl.container}>
          <div className={MenuModalStyl.content}>
            <h1>Категории</h1>
            {categories.map((category) => {
              return (
                <Link
                  className={MenuModalStyl.category}
                  to={`/category/${category.title}`}
                >
                  {category.title}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MenuModal;
