import Home from "./views/Home";
import Divisions from "./views/Divisions";
import About from "./views/About";
import FuelDiscounts from "./views/FuelDiscounts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppBar from "./components/appbar/AppBar";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />
        <Switch>
          <Router path="/" exact>
            <Home />
          </Router>
          <Router path="/Divisions">
            <Divisions />
          </Router>
          <Router path="/About">
            <About />
          </Router>
          <Router path="/Fuel Discounts">
            <FuelDiscounts />
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
