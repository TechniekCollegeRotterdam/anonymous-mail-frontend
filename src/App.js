import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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
import VerifyEmail from "./component/signupmap/verifyEmail";
import VerifyLogin from "./component/loginmap/verifyLogin";
import Dashboard from './component/dashboardmap/Dashboard';
import AutoReplies from './component/automap/AutoReplies';
import SpammedUsers from './component/spammap/spammedUsers';
import Settings from './component/settingsmap/settings';

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
              <Route path='/verifyEmail' component={VerifyEmail} />
              <Route path='/verifyLogin' component={VerifyLogin} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/settings' component={Settings} />
              <Route path='/autoreplies' component={AutoReplies} />
              <Route path='/spammedUsers' component={SpammedUsers} />
              <Route path='/signout'>
                {<Redirect to="/" />}
              </Route>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
}
