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
        <title>My Title</title>
        <meta
          name="og:image"
          property="og:image"
          content="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/-Hn0KbzDJps.png"
        />

        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <ProductPreviewContainer slug={props.match.params.slug} />
      <Footer />
    </React.Fragment>
  );
}

export default ProductPreviewPage;
