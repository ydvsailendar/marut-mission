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

export default function Header() {
  return (
    <Router>
      <div className="container-fluid fixed">
        <ul className="nav nav-tabs justify-content-end">
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
      </div>
    </Router>
  );
}
