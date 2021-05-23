import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Rental from "./components/rentals";
import NotFound from "./components/notfound";
import Customers from "./components/customers";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import "./App.css";
import MovieForm from "./components/movieForm";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rental" component={Rental} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}
export default App;
