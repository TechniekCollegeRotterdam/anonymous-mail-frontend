/* 
import PropTypes from 'prop-types';

// Redux
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

// Material-UI
import { withStyles } from "@material-ui/core/styles";
import clsx from 'clsx'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField"
import FormHelperText from "@material-ui/core/FormHelperText"
import CircularProgress from "@material-ui/core/CircularProgress"

// Image
import logo from "../../img/Icon.png";
import btn2 from "../../img/Login.png";

// CSS
import "../../main.css";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
    ...theme.spreadThis,
    root: {
        position: 'relative'
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    email: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 650%)'
    },
    password: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 850%)'
    }
})

class Login extends Component {

    state = {
        errors: {},
        password: '',
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const loginData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(loginData)
    }

    render() {
        const { klassen: classes, ui: { loading } } = this.props
        const { errors } = this.state

        console.log(this.props)

        return (
            <div className={clsx(classes.root)}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={clsx(classes.menuButton)}
                            color="inherit"
                            aria-label="menu"
                        />
                        <Typography variant="h6" className={clsx(classes.title)}>
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
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        name={"email"}
                        type="email"
                        label="E-mail"
                        className={clsx(classes.email)}
                        helperText={errors.email}
                        error={errors.email ? true : false}
                        value={this.state.email}
                        onChange={this.handleChange}
                        autoFocus={true}
                    />
                    <TextField type="password" label="Password" className={clsx(classes.password)} />

                    <FormHelperText>{errors.password}</FormHelperText>

                    {errors.general && (
                        <Typography variant={"body2"} className={clsx(classes.customError)}>
                            {errors.general}
                        </Typography>
                    )}

                    <Button
                        type={"submit"}
                        variant="contained"
                        disabled={loading}
                    >
                        Login
                        {loading && (
                            <CircularProgress size={30} className={clsx(classes.progress)} />
                        )}
                    </Button>
                    <a href="/verifyLogin">

                    </a>

                </form>
                <footer className="footer-login">
                    <span className="copyright">
                        Anonymous Mail &copy; 2020 - All rights reserved
                    </span>
                </footer>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    ui: state.ui
})

const mapActionsToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Login)) */



import React, { Component } from 'react';
import clsx from 'clsx'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";

// Image
import logo from "../../img/Icon.png";


const styles = (theme) => ({
    ...theme.spreadThis,
    root: {
        position: 'relative'
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    LoginButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 1500%)'
    }
})

class Login extends Component {

    state = {
        errors: {},
        password: '',
        showPassword: false,
        email: ''
    }

    /* componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.ui.errors)
            this.setState({ errors: nextProps.ui.errors })
    } */

    handleClickShowPassword = () => {
        this.setState({ ...this.state, showPassword: !this.state.showPassword })
    }

    handleMouseDownPassword = (e) => {
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData, this.props.history)
    }

    render() {
        const { classes, ui: { loading } } = this.props
        const { errors } = this.state

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={clsx(classes.menuButton)}
                            color="inherit"
                            aria-label="menu"
                        />
                        <Typography variant="h6" className={clsx(classes.title)}>
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
                <form onSubmit={this.handleSubmit}>

                    <TextField
                        name={"email"}
                        type="email"
                        label="E-mail"
                        className="Email-login"
                        variant="outlined"
                        id="outlined-basic"
                        helperText={errors.email}
                        error={errors.email ? true : false}
                        value={this.state.email}
                        onChange={this.handleChange}
                        autoFocus={true}
                    />

                    <TextField
                        className="Password2"
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        helperText={errors.password}
                        error={errors.password ? true : false}
                        value={this.state.password}
                        name={"password"}
                        fullWidth
                        onChange={this.handleChange}
                    />

                    {/* TODO:Show general error message */}

                    {/* {errors.general
                        ?
                        (
                            <Typography variant={"body2"}>
                                {errors.general}
                            </Typography>
                        )
                        :
                        (null)
                    }

                    {errors.general && (
                        <Typography variant={"body2"}>
                        {errors.general}
                    </Typography>
                    )} */}

                    <Button
                        type={"submit"}
                        variant={"contained"}
                        color={"primary"}
                        className={classes.LoginButton}
                        disabled={loading}
                    >
                        Login
                            {loading && (
                            <CircularProgress size={30} className={classes.progress} />
                        )}
                    </Button>
                </form>

                <footer className="footer-login">
                    <span className="copyright">
                        Anonymous Mail &copy; 2020 - All rights reserved
                </span>
                </footer>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    ui: state.ui
})

const mapActionsToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Login));
