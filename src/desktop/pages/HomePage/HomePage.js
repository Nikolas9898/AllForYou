import React from "react";
import Header from "../../layout/Header/Header";
import ProductListContainer from "../../modules/product/productList/ProductListContainer";

function HomePage(props) {
  return (
    <React.Fragment>
      <Header/>
      <ProductListContainer/>
    </React.Fragment>
  );
}

export default HomePage;
