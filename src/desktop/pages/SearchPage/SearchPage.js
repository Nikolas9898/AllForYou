import React from "react";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import SearchProduct from "../../modules/product/searchProduct/SearchProduct";
import PageStyl from '../../layout/pagesLayout/PageLayout.module.css';

function SearchPage({ match }) {
  return (
    <div className={PageStyl.container}>
      <Header />
      <SearchProduct title={match.params.title} />
      <Footer />
    </div>
  );
}

export default SearchPage;
