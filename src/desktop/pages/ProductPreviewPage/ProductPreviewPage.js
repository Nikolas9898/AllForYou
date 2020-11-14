import React from "react";
import Header from "../../layout/Header/Header";
import ProductPreviewContainer from "../../modules/product/productPreview/ProductPreviewContainer";
import Footer from "../../layout/Footer/Footer";
import { Helmet } from "react-helmet";

function ProductPreviewPage(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.match.params.slug}</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="og:image"
          content="http://reedbarger.com/static/ca-styled-logo-5205dbb0983e1531d228c98584ab5711.png"
        />
        <meta
          name="og:ulr"
          content={`https://zavsekiponeshto.herokuapp.com/product/${props.match.params.slug}`}
        />
        <meta name="og:type" content="article" />
      </Helmet>
      <Header />
      <ProductPreviewContainer slug={props.match.params.slug} />
      <Footer />
    </React.Fragment>
  );
}

export default ProductPreviewPage;
