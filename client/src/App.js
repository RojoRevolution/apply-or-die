import React from "react";
import Dashboard from "./Pages/Dashboard";
import Search from "./Pages/Search";
import NoMatch from "./Pages/NoMatch";
import NewEntry from "./Pages/NewEntry";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/new" component={NewEntry} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
