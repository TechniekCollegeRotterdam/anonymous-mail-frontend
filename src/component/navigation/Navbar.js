import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

// Image
import logo from "../../img/Icon.png";

// CSS
import '../../main.css';
import ButtonAppBar from "../../Home";
// import "../navigation/navbar.css";

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

export default function NavBar() {
    const classes = useStyles();


    return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        />
                        <Typography variant="h6" className={classes.title}>
                            <img className="logo" src={logo} width="50" height="45" alt="logo"/>
                        </Typography>
                        <Button color="inherit"><a href="#" className="nav-link">Home</a></Button>
                        <Button color="inherit"><a href="#" className="nav-link">SignUp</a></Button>
                        <Button color="inherit"><a href="#" className="nav-link">Login</a></Button>
                    </Toolbar>
                </AppBar>
            </div>
    );
}
