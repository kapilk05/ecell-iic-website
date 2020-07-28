import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/nav.js";
import Header from "./components/header.js";
import About from "./components/about.js";
import GetStarted from "./components/getstarted.js";
import Startup from "./components/startup.js";
import AboutUs from "./pages/aboutus.js";
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
        <Route
          path="/about"
          render={(props) => (
            <div>
              <Navbar />
              <AboutUs />
            </div>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
