import React from "react";
import ImageGallery from "react-image-gallery";
import ProductPreviewStyl from "../../ProductPreviewStyl.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ContentLoader from "react-content-loader";

function ProductPreview({ product, previewImages }) {
  return (
    <div className={ProductPreviewStyl.container}>
      {previewImages.length === 0 ? (
        <div>
          <ContentLoader
            speed={2}
            width="100%"
            height="100%"
            viewBox="0 0 110 110"
            backgroundColor="#999494"
            foregroundColor="#ecebeb"
          >
            <rect
              x="0"
              y="0"
              rx="0"
              ry="0"
              width="100%"
              max-height="calc(100vh - 80px)"
            />
          </ContentLoader>

          <ContentLoader
            speed={2}
            width="100%"
            height="100%"
            viewBox="0 0 100 30"
            backgroundColor="#999494"
            foregroundColor="#ecebeb"
          >
            <rect x="17" y="0" rx="0" ry="0" width="20" height="20" />
            <rect x="39" y="0" rx="0" ry="0" width="20" height="20" />
            <rect x="61" y="0" rx="0" ry="0" width="20" height="20" />
          </ContentLoader>

          <ContentLoader
            speed={2}
            width="90%"
            height="100%"
            viewBox="0 0 100 30"
            backgroundColor="#999494"
            foregroundColor="#ecebeb"
          >
            <rect x="10" y="0" rx="5" ry="5" width="90%" height="8" />
            <rect x="10" y="13" rx="5" ry="5" width="60%" height="8" />
          </ContentLoader>

          <ContentLoader
            speed={2}
            width="100%"
            height="90%"
            viewBox="0 0 300 300"
            backgroundColor="#999494"
            foregroundColor="#ecebeb"
          >
            <rect x="10" y="0" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="15" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="30" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="45" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="60" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="75" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="90" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="105" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="120" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="135" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="150" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="165" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="180" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="195" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="210" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="225" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="240" rx="3" ry="3" width="93%" height="10" />
            <rect x="10" y="255" rx="3" ry="3" width="93%" height="10" />
          </ContentLoader>

          <div className={ProductPreviewStyl.price_container}>
            <ContentLoader
              speed={2}
              width="50%"
              height="100%"
              viewBox="0 0 100 30"
              backgroundColor="#999494"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="10" ry="10" width="100%" height="20" />
            </ContentLoader>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <ImageGallery items={previewImages} />
          </div>

          <div className={ProductPreviewStyl.description_container}>
            <h1>{product.title}</h1>
            <h3>Описание</h3>
            <p>{product.description}</p>
          </div>

          <div className={ProductPreviewStyl.price_container}>
            {(product.price / 100).toFixed(2)} лв.
          </div>
          <div className={ProductPreviewStyl.order_container}>
            <div className={ProductPreviewStyl.order}>Бърза поръчка:</div>
            <a className={ProductPreviewStyl.number} href="tel:+359883771333">
              +359 883 771 333
            </a>
            <div className={ProductPreviewStyl.time}>
              (без почивен ден от 9:00 до 22:00)
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPreview;
