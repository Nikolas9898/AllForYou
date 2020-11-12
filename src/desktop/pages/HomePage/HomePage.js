import React from "react";
import Header from "../../layout/Header/Header";
import ProductListContainer from "../../modules/product/productList/ProductListContainer";
import PageStyl from '../../layout/pagesLayout/PageLayout.module.css';
import Footer from "../../layout/Footer/Footer";

function HomePage(props) {
  return (
    <div className={PageStyl.container}>
      <Header/>
      <ProductListContainer/>
      <Footer/>
    </div>
  );
}

export default HomePage;
