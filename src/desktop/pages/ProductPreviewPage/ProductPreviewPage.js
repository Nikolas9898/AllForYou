import React from "react";
import Header from "../../layout/Header/Header";
import ProductPreviewContainer from "../../modules/product/productPreview/ProductPreviewContainer";
import Footer from "../../layout/Footer/Footer";
import { Helmet } from "react-helmet";

function ProductPreviewPage(props, { meta, lang }) {
  return (
    <React.Fragment>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{props.match.params.slug}</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          property="og:image"
          content="http://reedbarger.com/static/ca-styled-logo-5205dbb0983e1531d228c98584ab5711.png"
        />
        <meta
          property="og:ulr"
          content={`https://zavsekiponeshto.herokuapp.com/product/${props.match.params.slug}`}
        />
        <meta property="og:type" content="article" />
      </Helmet> */}

      <Helmet
        title={props.match.params.slug}
        meta={[
          {
            property: "og:url",
            content: `https://zavsekiponeshto.herokuapp.com/product/${props.match.params.slug}`,
          },
          {
            name: "description",
            content: "Gosho e prost",
          },
          {
            property: "og:title",
            content: props.match.params.slug,
          },
          {
            property: "og:image",
            content:
              "http://reedbarger.com/static/ca-styled-logo-5205dbb0983e1531d228c98584ab5711.png",
          },
          {
            property: "og:image:secure_url",
            content:
              "http://reedbarger.com/static/ca-styled-logo-5205dbb0983e1531d228c98584ab5711.png",
          },
          {
            property: "og:description",
            content: "Gosho pa e prost",
          },
          {
            property: "og:type",
            content: "article",
          },
        ]}
      />

      <Header />
      <ProductPreviewContainer slug={props.match.params.slug} />
      <Footer />
    </React.Fragment>
  );
}

export default ProductPreviewPage;
