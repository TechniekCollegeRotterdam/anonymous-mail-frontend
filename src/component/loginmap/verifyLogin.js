import React from "react";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

// Image
import logo from "../../img/Icon.png";
import continueBtn from "../../img/Continue.png";

// CSS
import "../../main.css";

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

export default function ButtonAppBar() {
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
                </Toolbar>
            </AppBar>

            <h2 className="vl">Verify login</h2>
            <p className="enter-code">
                Please enter the code that you received in your mail box.
            </p>
            <input
                type="text"
                placeholder="Enter code"
                className="enter-code-input"
            />
            <img className="continue-btn" src={continueBtn} alt="continue" />

            <footer className="footer-verify-login">
                <span className="copyright">
                  Anonymous Mail &copy; 2020 - All rights reserved
                </span>
            </footer>
        </div>
    );
}
