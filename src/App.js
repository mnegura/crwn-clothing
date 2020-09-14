import React from "react";
import "./App.css";
import HomePage from './views/homepage/homepage.jsx';
import { Route } from 'react-router-dom';

const HatsPage = () => (
  <div>Hats Page</div>
);

function App() {
  return <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/shop/hats" component={HatsPage} />
  </div>;
}

export default App;
