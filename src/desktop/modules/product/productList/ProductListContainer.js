import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductListContainerStyle from "./ProductListContainerStyle.module.css";
import axios from "axios";
import ProductCard from "./components/productCard/ProductCard";
import Loader from "./components/loader/Loader";

function ProductListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loader] = useState([]);
  useEffect(() => {
    axios
      .get("https://allforyouapinodejs.herokuapp.com/api/product")
      .then((products) => {
        setProducts(products.data);
      });
  }, []);

  return (
    <React.Fragment>
      {products.length === 0 ? (
        <div className={ProductListContainerStyle.container}>
          <div className={ProductListContainerStyle.content}>
            {loader.map((product, index) => {
              return <Loader index={index} key={index} />;
            })}
          </div>
        </div>
      ) : (
        <div className={ProductListContainerStyle.container}> 
          <div className={ProductListContainerStyle.content}>
            {products.map((product) => {
              return <ProductCard product={product} key={product._id} />;

            })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ProductListContainer;
