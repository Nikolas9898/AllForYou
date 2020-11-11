import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductPreviewPage from "./pages/ProductPreviewPage/ProductPreviewPage";

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path={"/product/:slug"} exact component={ProductPreviewPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
