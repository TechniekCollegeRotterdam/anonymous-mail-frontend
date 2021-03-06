import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import themeFile from "./util/theme";

// CSS
import './main.css';

// Pages
import Home from "./Home";
import SignUp from "./component/signupmap/signup";
import Login from "./component/loginmap/login";
import Dashboard from './component/dashboardmap/Dashboard';
import AutoReplies from './component/automap/AutoReplies';
import SpammedUsers from './component/spammap/spammedUsers';
import Settings from './component/settingsmap/settings';

import axios from 'axios'
import jwtDecode from "jwt-decode"
import { SET_AUTHENTICATED } from './redux/types'
import { logoutUser } from "./redux/actions/userActions";
import AuthRoute from "./util/AuthRoute";

axios.defaults.baseURL = 'https://europe-west2-anonymous-email-app.cloudfunctions.net/api' 

const token = localStorage.FBToken
if (token){
  const decodedToken = jwtDecode(token)
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser())
    window.location.href = '/login'
  } else {
    store.dispatch({ type: SET_AUTHENTICATED })
    axios.defaults.headers.common['Authorization'] = token
  }
}

const theme = createMuiTheme(themeFile)

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }

}));

export default function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className={classes.root}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path='/signup' component={SignUp} />
              <Route path='/login' component={Login} />
              <AuthRoute exact path='/dashboard' component={Dashboard} />
              <AuthRoute path='/settings' component={Settings} />
              <AuthRoute path='/autoreplies' component={AutoReplies} />
              <AuthRoute path='/spammedUsers' component={SpammedUsers} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
}
