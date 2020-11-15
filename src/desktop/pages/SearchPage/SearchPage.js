import React from "react";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import SearchProduct from "../../modules/product/searchProduct/SearchProduct";

function SearchPage({ match }) {
  return (
    <React.Fragment>
      <Header />

      <SearchProduct title={match.params.title} />
      <Footer />
    </React.Fragment>
  );
}

export default SearchPage;
