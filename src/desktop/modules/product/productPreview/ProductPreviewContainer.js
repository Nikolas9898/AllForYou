import React, { useState, useEffect } from "react";

import axios from "axios";
import ProductPreview from "./components/ProductPreview/ProductPreview";

function ProductPreviewContainer({ slug }) {
  const [product, setProduct] = useState({});
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get(`https://allforyouapinodejs.herokuapp.com/api/product/${slug}`)
      .then((product) => {
        setProduct(product.data);
        imagesTransformer(product.data);
      });
  };

  const imagesTransformer = (e) => {
    let productImages = [];
    e.galleryImages.map((image) => {
      let imageToBePushed = {
        original: image.imageUrl,
        thumbnail: image.imageUrl,
      };
      productImages.push(imageToBePushed);
    });
    setPreviewImages(productImages);
  };

  return (
    <React.Fragment>
      <ProductPreview product={product} previewImages={previewImages} />
    </React.Fragment>
  );
}

export default ProductPreviewContainer;
