import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//

// Material-UI
import { makeStyles } from "@material-ui/core/styles";

// CSS
import "./main.css";

// Pages
import Home from "./Home";
import SignUp from "./component/signupmap/signup";
import Login from "./component/loginmap/login";
import verifyEmail from "./component/signupmap/verifyEmail";
import verifyLogin from "./component/loginmap/verifyLogin";
import Dashboard from "./component/dashboardmap/Dashboard";
import AutoReplies from "./component/automap/AutoReplies";
import spammedUsers from "./component/spammap/spammedUsers";
import Settings from "./component/settingsmap/settings";
import Signout from "./component/signoutmap/Signout";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/verifyEmail" component={verifyEmail} />
          <Route path="/verifyLogin" component={verifyLogin} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/settings" component={Settings} />
          <Route path="/autoreplies" component={AutoReplies} />
          <Route path="/spammedUsers" component={spammedUsers} />
          <Route path="/signout" component={Signout} />
        </Switch>
      </div>
    </Router>
  );
}
