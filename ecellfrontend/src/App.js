import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./pages/nav.js";
import Header from "./pages/header.js";
import About from "./pages/about.js";
import AboutUs from "./pages/aboutus.js";
import GetStarted from "./pages/getstarted.js";
import Startup from "./pages/startup.js";
import "./style.css";
import { FontAwesome } from "react-icons/fa";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          exact
          path="/"
          render={(props) => (
            <div>
              <Navbar />
              <Header />
              <About />
              <GetStarted />
              <Startup />
            </div>
          )}
        />
        <Route path="/about" component={AboutUs} />
      </div>
    </BrowserRouter>
  );
}

export default App;
