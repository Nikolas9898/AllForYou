import React from "react";
import ProductListContainerStyle from "../../ProductListContainerStyle.module.css";
import ContentLoader from "react-content-loader";

function Loader({ index }) {
  return (
    <div className={ProductListContainerStyle.card} key={index}>
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
            <rect x="0" y="10" rx="10" ry="10" width="100%" height="10" />
            <rect x="0" y="30" rx="10" ry="10" width="60%" height="10" />
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
            <rect x="20%" y="30" rx="10" ry="10" width="60%" height="30%" />
          </ContentLoader>
        </div>
      </div>
    </div>
  );
}

export default Loader;
