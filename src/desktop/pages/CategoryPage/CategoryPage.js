import React from "react";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import CategoryPreviewContainer from "../../modules/category/categoryPreview/CategoryPreviewContainer";
import PageStyl from "../../layout/pagesLayout/PageLayout.module.css";

function CategoryPage({ match, location }) {
  return (
    <div className={PageStyl.container}>
      <Header />

      <CategoryPreviewContainer
        slug={match.params.slug}
        categoryTitle={location.state}
      />
      <Footer />
    </div>
  );
}

export default CategoryPage;
