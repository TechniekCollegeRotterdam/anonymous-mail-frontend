import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// Material-UI
import {
  makeStyles
} from "@material-ui/core/styles";

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
          <Route exact path="/"component={Home}/> 
          <Route exact path="signup"component={SignUp}/> 
          <Route exact path="/login"component={Login}/> 
          <Route exact path="/verifyEmail"component={verifyEmail}/> 
          <Route exact path="/verifyLogin"component={verifyLogin}/> 
          <Route exact path="/dashboard"component={Dashboard}/> 
          <Route exact path="/settings"component={Settings}/> 
          <Route exact path="/autoreplies"component={AutoReplies}/> 
          <Route exact path="/spammedUsers"component={spammedUsers}/> 
          <Route exact path="/signout"component={Signout}/> 
        </Switch>
      </div>
    </Router>
  );
}