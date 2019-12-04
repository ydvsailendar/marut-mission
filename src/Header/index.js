import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Components/Home";
import Story from "../Components/Story";
import Contact from "../Components/Contact";
import Products from "../Components/Products";
import Downloads from "../Components/Downloads";
import Contribute from "../Components/Contribute";
import Departments from "../Components/Departments";
import Volunteering from "../Components/Volunteering";
import "./index.css";

export default function Header() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/volunteering">
                Volunteering
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contribute">
                Contribute
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/story">
                Success Story
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/downloads">
                Downloads
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/departments">
                Our Departments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Our Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/volunteering">
          <Volunteering />
        </Route>
        <Route path="/contribute">
          <Contribute />
        </Route>
        <Route path="/story">
          <Story />
        </Route>
        <Route path="/downloads">
          <Downloads />
        </Route>
        <Route path="/departments">
          <Departments />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </Router>
  );
}
