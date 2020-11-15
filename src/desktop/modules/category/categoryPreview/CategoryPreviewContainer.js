import React, { useEffect, useState } from "react";
import CategoryPreviewStyl from "./CategoryPreviewStyl.module.css";
import { Link } from "react-router-dom";
import ContentLoader from "react-content-loader";
import axios from "axios";

function CategoryPreviewContainer({ slug }) {
  const [products, setProducts] = useState([]);
  const [loader] = useState([{}, {}, {}, {}]);

  useEffect(() => {
    axios
      .get(
        `https://allforyouapinodejs.herokuapp.com/api/product/byCategory/${slug}`
      )
      .then((products) => {
        setProducts(products.data);
      });
  }, [slug]);

  return (
    <React.Fragment>
      {products.length === 0 ? (
        <div className={CategoryPreviewStyl.container}>
          <div className={CategoryPreviewStyl.content}>
            {loader.map((product, index) => {
              return (
                <div className={CategoryPreviewStyl.card} key={index}>
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

                  <div className={CategoryPreviewStyl.description}>
                    <div className={CategoryPreviewStyl.name}>
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
                    <div className={CategoryPreviewStyl.price}>
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
        <div className={CategoryPreviewStyl.container}>
          <div className={CategoryPreviewStyl.title}>Категорията</div>
          <div className={CategoryPreviewStyl.content}>
            
            {products.map((product) => {
              return (
                <div className={CategoryPreviewStyl.card} key={product._id}>
                  <Link
                    to={`/product/${product.slug}`}
                    className={CategoryPreviewStyl.card_container}
                  >
                    <img
                      className={CategoryPreviewStyl.image}
                      src={product.mainImage}
                      alt="imageNotFound"
                    />

                    <div className={CategoryPreviewStyl.description}>
                      <div className={CategoryPreviewStyl.name}>
                        {product.title}
                      </div>
                      <div className={CategoryPreviewStyl.price}>
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

export default CategoryPreviewContainer;
