import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductPreviewPage from "./pages/ProductPreviewPage/ProductPreviewPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path={"/category/:slug"} exact component={CategoryPage} />
        <Route path={"/product/:slug"} exact component={ProductPreviewPage} />
        <Route path={"/search/:title"} exact component={SearchPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
