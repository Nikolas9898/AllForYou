import React from "react";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import CategoryPreviewContainer from "../../modules/category/categoryPreview/CategoryPreviewContainer";

function CategoryPage(props) {
  return (
    <React.Fragment>
      <Header />
      <CategoryPreviewContainer />
      <Footer />
    </React.Fragment>
  );
}

export default CategoryPage;
