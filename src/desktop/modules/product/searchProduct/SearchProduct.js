import React, { useEffect, useState } from "react";
import ProductListContainerStyle from "../productList/ProductListContainerStyle.module.css";
import ProductCard from "../productList/components/productCard/ProductCard";
import Loader from "../productList/components/loader/Loader";
import axios from "axios";

function SearchProduct({ title }) {
  const [products, setProducts] = useState([]);
  const [loader] = useState([{}, {}, {}, {}]);

  useEffect(() => {
    axios
      .get(
        `https://allforyouapinodejs.herokuapp.com/api/product/byTitle/${title}`
      )
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      });
  }, [title]);

  return (
    <React.Fragment>
      {products.length === 0 ? (
        <div className={ProductListContainerStyle.container}>
          <div className={ProductListContainerStyle.content}>
            <p>Няма намерени продукти</p>
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

export default SearchProduct;
