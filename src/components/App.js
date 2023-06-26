import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import GettingStarted from "./blog/GettingStarted";
import MyShoppe from "./blog/MyShoppe";
import TailwindAndReactSetup from "./blog/TailwindAndReactSetup";

function App() {
  return (
    <BrowserRouter>
      <div class="flex flex-col min-h-screen">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/insights/Getting-Started"
          component={GettingStarted}
        />
        <Route
          exact
          path="/programming/How-to-Fully-Access-MyShoppe-POS-in-C"
          component={MyShoppe}
        />
        <Route
          exact
          path="/programming/Guide-to-Complete-TailwindCSS-and-React-Setup"
          component={TailwindAndReactSetup}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
