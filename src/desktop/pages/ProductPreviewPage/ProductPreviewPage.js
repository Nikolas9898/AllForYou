import React from "react";
import Header from "../../layout/Header/Header";
import ProductPreviewContainer from "../../modules/product/productPreview/ProductPreviewContainer";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
function ProductPreviewPage(props) {
  return (
    <React.Fragment>
      <Header />

      <ProductPreviewContainer slug={props.match.params.slug} />
    </React.Fragment>
  );
}

export default ProductPreviewPage;
