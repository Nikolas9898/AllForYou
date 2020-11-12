import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import ProductPreviewStyl from "./ProductPreviewStyl.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import axios from "axios";

function ProductPreviewContainer(props) {
  const [product, setProduct] = useState({});
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://allforyouapinodejs.herokuapp.com/api/product/${props.slug}`)
      .then((product) => {
        setProduct(product.data);
        imagesTransformer(product.data);
      });
  }, []);

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
    <div className={ProductPreviewStyl.container}>
      {console.log(previewImages)}
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

export default ProductPreviewContainer;
