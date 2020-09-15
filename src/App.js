import React from "react";
import "./App.scss";
import HomePage from "./views/homepage/homepage.jsx";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./views/shop/shop";
import { Header } from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
