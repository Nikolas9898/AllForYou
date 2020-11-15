import React from "react";
import ProductListContainerStyle from "../../ProductListContainerStyle.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className={ProductListContainerStyle.card} key={product._id}>
      <Link
        to={`/product/${product.slug}`}
        className={ProductListContainerStyle.card_container}
      >
        <img
          className={ProductListContainerStyle.image}
          src={product.mainImage}
          alt="imageNotFound"
        />

        <div className={ProductListContainerStyle.description}>
          <div className={ProductListContainerStyle.name}>{product.title}</div>
          <div className={ProductListContainerStyle.price}>
            {product.price / 100}
            {" лв."}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
