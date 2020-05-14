import React from "react";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// CSS
import "./main.css";

// Images
import logo from "./img/Icon.png";
import laptop from './img/Vectary.png';
import rectangle from './img/Rectangle.png';
import ellipse from './img/Ellipse.png';
import line from './img/Line.png';
import btn from './img/CTA.png';
import box from './img/box.png';
import downloadBtn from './img/download-btn.png';
import windows from './img/windows-logo.png';
import macos from './img/apple-logo.png';
import linux from './img/linux-logo.png';

// Pages


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(1)
    }
}));

export default function Home() {
    const classes = useStyles();

    let background = '#323232';
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
                        <a href="/"><img src={logo} width="70" height="50" alt="logo" /></a>
                    </Typography>
                    <Button color="inherit"><a href="/" className="nav-link">Home</a></Button>
                    <Button color="inherit"><a href="/signup" className="nav-link">Signup</a></Button>
                    <Button color="inherit"><a href="/login" className="nav-link">Login</a></Button>
                </Toolbar>
            </AppBar>

            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <h1 className="head-text">Anonymous Mail</h1>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} className={background}/>
                </Grid>
                <Grid item xs={4}>
                    <img src={laptop} alt="laptop" width="350" height="250" className={classes.paper} className="laptop"/>
                </Grid>
            </Grid>

            <Typography>
                <img src={rectangle} alt="rectangle" className="rec"/>
                <img src={ellipse} alt="ellipse" className="ellipse"/>
            </Typography>

            <div className="about">
                <h2 className="about-text">About</h2>
                <p className="fstp">We at Anonymous Mail are three dudes that have an eye for privacy and strongly believe that your Gmail
                   inbox should be.</p>
                <p className="quote">"</p>
                <p className="thanos-quote">Perfectly balanced, as all things should be.</p>
                <img src={line} alt="line" className="line"/>
                <p className="thanos">Thanos</p>
                <p className="about-info-one">We made Anonymous mail to help you clean up your gmail inbox without having to
                   login to Gmail to place everything by hand in the spam box. Anonymous mail allows you to place email from
                   given emailadresses in your spam box, block certain emailadresses, send auto-replies an more!</p>
                <p className="about-info-two">It is not time for spammers to out smart you, but that you should out smart
                   spammers. Join us today and allow us to clean up your Gmail inbox</p>
            </div>

            <div>
                <a href="components/signupmap/signup.component.js"><img src={btn} alt="button" className="btn"/></a>
            </div>

            <div className="download">
                <h2 className="download-for">Download for:</h2>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <img src={box} alt="Download for Windows" className="box1"/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={box} alt="Download for Mac" className="box2"/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={box} alt="Download for Linux" className="box3"/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={downloadBtn} alt="Download button" className="btn1"/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={downloadBtn} alt="Download button" className="btn2"/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={downloadBtn} alt="Download button" className="btn3"/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={windows} alt="Windows logo" className="windows"/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={macos} alt="Apple logo" className="macos"/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={linux} alt="Linux logo" className="linux"/>
                    </Grid>
                </Grid>
            </div>

            <footer>
                <span className="copyright">Anonymous Mail &copy; 2020 - All rights reserved</span>
            </footer>
        </div>
    );
}
