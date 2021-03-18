import React, { useEffect } from "react";
import Dashboard from "./Pages/Dashboard";
import Search from "./Pages/Search";
import NoMatch from "./Pages/NoMatch";
import NewEntry from "./Pages/NewEntry";
import SingleEntry from "./Pages/SingleEntry";
import EditEntry from "./Pages/EditEntry";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import NewNote from "./Pages/NewNote";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { useAtom } from "jotai";
import { loggedInStatus } from "./utils/Atoms"


// export const fakeAuth = {
//   signedIn: true
// };

// const RequireAuth = ({ children }) => {
//   if (!fakeAuth.signedIn) {
//     return <Redirect to={"/login"} />
//   }

//   return children;
// };



function App() {

  const [loggedIn] = useAtom(loggedInStatus);
  console.log('LoggedIn: ', loggedIn)

  // Required Auth creates Authentication for all Interior Routes
  const RequireAuth = ({ children }) => {
    if (!loggedIn) {
      console.log("Not Logged In")
      return <Redirect to={"/login"} />
    }

    return children;
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />
          <RequireAuth>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/new" component={NewEntry} />
            <Route exact path="/logs/:id" component={SingleEntry} />
            <Route exact path="/edit/:id" component={EditEntry} />
            <Route exact path="/newnote/:id" component={NewNote} />
          </RequireAuth>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
