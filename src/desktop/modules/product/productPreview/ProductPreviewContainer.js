import React, { useState, useEffect } from "react";

import axios from "axios";
import ProductPreview from "./components/ProductPreview/ProductPreview";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>{slug}</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="og:image"
          content="http://reedbarger.com/static/ca-styled-logo-5205dbb0983e1531d228c98584ab5711.png"
        />
        <meta
          name="og:ulr"
          content={`https://zavsekiponeshto.herokuapp.com/product/${slug}`}
        />
        <meta name="og:type" content="article" />
      </Helmet>
      <ProductPreview product={product} previewImages={previewImages} />
    </React.Fragment>
  );
}

export default ProductPreviewContainer;
