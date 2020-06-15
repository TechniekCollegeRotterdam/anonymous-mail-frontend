import React, {Component} from 'react';
import clsx from 'clsx'
import {connect} from "react-redux";
import {loginUser} from "../../redux/actions/userActions";
// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

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

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.ui.errors)
            this.setState({errors: nextProps.ui.errors})
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
        const {classes, ui: {loading}} = this.props
        const {errors} = this.state

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
                            <a href="/"><img src={logo} width="70" height="50" alt="logo"/></a>
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
                        type="password"
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

                    {errors.general && (
                        <Typography variant={"body2"}>
                            {errors.general}
                        </Typography>
                    )}

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
                            <CircularProgress size={30} className={classes.progress}/>
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

const mapStateToProps = (state) => ({
    ui: state.ui
})

const mapActionsToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Login));
