import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Home from "./component/page/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./component/page/Product";
import Service from "./component/page/Service";
import About from "./component/page/About";
import SignIn from "./component/page/SignIn";
import SignUp from "./component/page/SignUp";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/service" component={Service} />
            <Route path="/about" component={About} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
