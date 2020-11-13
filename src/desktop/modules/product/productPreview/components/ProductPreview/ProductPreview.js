import React from "react";
import ImageGallery from "react-image-gallery";
import ProductPreviewStyl from "../../ProductPreviewStyl.module.css";
import "react-image-gallery/styles/css/image-gallery.css";

function ProductPreview({ product, previewImages }) {
  return (
    <div className={ProductPreviewStyl.container}>
      <div>
        <ImageGallery items={previewImages} />
      </div>
      <h1>{product.title}</h1>
      <div className={ProductPreviewStyl.description_container}>
        <h3>Описание</h3>
        <p>{product.description}</p>
      </div>

      <div className={ProductPreviewStyl.price_container}>
        {product.price / 100} лв.
      </div>
    </div>
  );
}

export default ProductPreview;
