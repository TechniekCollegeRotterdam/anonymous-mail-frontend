import React from "react";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

// Image
import logo from "../../img/Icon.png";
import btn2 from "../../img/Login.png";

// CSS
import "../../main.css";
import TextField from "@material-ui/core/TextField";

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

export default function Login() {
    const klassen = useStyles();

    return (
        <div className={klassen.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={klassen.menuButton}
                        color="inherit"
                        aria-label="menu"
                    />
                    <Typography variant="h6" className={klassen.title}>
                        <a href="/"><img src={logo} width="70" height="50" alt="logo" /></a>
                    </Typography>
                    <Button color="inherit">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </Button>
                    <Button color="inherit">
                        <a href="/signup" className="nav-link">
                            SignUp
                        </a>
                    </Button>
                    <Button color="inherit">
                        <a href="/login" className="nav-link">
                            Login
                        </a>
                    </Button>
                </Toolbar>
            </AppBar>

            <h2 className="signup-text">Login</h2>
            <form noValidate autoComplete="off">
                <TextField className="Email-login" type="email" id="outlined-basic" label="E-mail"
                           variant="outlined"
                />
                <TextField className="Password2" type="password" id="outlined-basic" label="Password"
                           variant="outlined"
                />
            </form>
            <a href="/verifyLogin">
                <img src={btn2} alt="sign up" className="login-btn" />
            </a>

            <footer className="footer-login">
                <span className="copyright">
                  Anonymous Mail &copy; 2020 - All rights reserved
                </span>
            </footer>
        </div>
    );
}
