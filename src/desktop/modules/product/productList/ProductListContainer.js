import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductListContainerStyle from "./ProductListContainerStyle.module.css";
import axios from "axios";

function ProductListContainer(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://allforyouapinodejs.herokuapp.com/api/product")
      .then((products) => {
        setProducts(products.data);
      });
  }, []);

  return (
    <React.Fragment>
      {products && (
        <div className={ProductListContainerStyle.container}>
          <div className={ProductListContainerStyle.content}>
            {products.map((product) => {
              console.log(product);
              return (
                <div className={ProductListContainerStyle.card}>
                  <Link
                    to={`/product/${product.slug}`}
                    className={ProductListContainerStyle.card_container}
                  >
                    <div>
                      <img
                        className={ProductListContainerStyle.image}
                        src={product.mainImage}
                      />
                    </div>
                    <div className={ProductListContainerStyle.description}>
                      <div className={ProductListContainerStyle.name}>
                        {product.title}
                      </div>
                      <div className={ProductListContainerStyle.price}>
                        {product.price / 100}
                        {" лв."}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ProductListContainer;
