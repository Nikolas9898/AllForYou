import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductListContainerStyle from "./ProductListContainerStyle.module.css";
import axios from "axios";
import ContentLoader from "react-content-loader";

function ProductListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loader] = useState([{}, {}, {}, {}]);
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
            {loader.map((product) => {
              return (
                <div className={ProductListContainerStyle.card}>
                  <div>
                    <ContentLoader
                      speed={2}
                      width="100%"
                      height="100%"
                      backgroundColor="#999494"
                      foregroundColor="#ecebeb"
                    >
                      <rect
                        x="0"
                        y="0"
                        rx="10"
                        ry="10"
                        width="100%"
                        max-height="calc(100vh - 80px)"
                      />
                    </ContentLoader>
                  </div>

                  <div className={ProductListContainerStyle.description}>
                    <div className={ProductListContainerStyle.name}>
                      <ContentLoader
                        speed={2}
                        width="90%"
                        height="100%"
                        backgroundColor="#999494"
                        foregroundColor="#ecebeb"
                      >
                        <rect
                          x="0"
                          y="10"
                          rx="10"
                          ry="10"
                          width="100%"
                          height="10"
                        />
                        <rect
                          x="0"
                          y="30"
                          rx="10"
                          ry="10"
                          width="60%"
                          height="10"
                        />
                      </ContentLoader>
                    </div>
                    <div className={ProductListContainerStyle.price}>
                      <ContentLoader
                        speed={2}
                        width="50%"
                        height="100%"
                        backgroundColor="#999494"
                        foregroundColor="#ecebeb"
                      >
                        <rect
                          x="20%"
                          y="30"
                          rx="10"
                          ry="10"
                          width="60%"
                          height="30%"
                        />
                      </ContentLoader>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={ProductListContainerStyle.container}>
          <div className={ProductListContainerStyle.content}>
            {products.map((product) => {
              return (
                <div className={ProductListContainerStyle.card}>
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
                      <div className={ProductListContainerStyle.name}>
                        {product.title}
                      </div>
                      <div className={ProductListContainerStyle.price}>
                      {(product.price / 100).toFixed(2) } лв.
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
