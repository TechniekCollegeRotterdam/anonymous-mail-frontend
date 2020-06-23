import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { signUpUser } from "../../redux/actions/userActions";

// Material-UI
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";

// Image
import logo from "../../img/Icon.png";

// CSS
import "../../main.css";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
    ...theme.spreadThis,
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
})

class SignUp extends Component {

    state = {
        errors: {},
        password: '',
        email: '',
        username: ''
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.ui.errors)
            this.setState({ errors: nextProps.ui.errors })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
        }
        this.props.signUpUser(newUserData, this.props.history)
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
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        />
                        <Typography variant="h6" className={classes.title}>
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
    
                <h2 className="signup-text">Signup</h2>
                <form style={{position: 'relative'}} onSubmit={this.handleSubmit}>
    
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
                        className="Username"
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        helperText={errors.username}
                        error={errors.username ? true : false}
                        value={this.state.username}
                        name={"username"}
                        fullWidth
                        onChange={this.handleChange}
                    />
    
                    <TextField
                        className="Password3"
                        id="outlined-basic"
                        label="Password"
                        type="password"
                        variant="outlined"
                        helperText={errors.password}
                        error={errors.password ? true : false}
                        value={this.state.password}
                        name={"password"}
                        fullWidth
                        onChange={this.handleChange}
                    />
    
                    {errors.general && (
                        <Typography style={{position: 'absolute', bottom: 0}} variant={"body2"}>
                            {errors.general}
                        </Typography>
                    )}
    
                    <Button
                        type={"submit"}
                        variant={"contained"}
                        color={"primary"}
                        className="signup-btn"
                        disabled={loading}
                    >
                        Sign up
                                {loading && (
                            <CircularProgress size={30} className={classes.progress} />
                        )}
                    </Button>
                </form>
                <p className="log-in">Already have an account? &nbsp;<a href="/login" className="log-in-2">Log in</a></p>
    
                <footer className="footer-signup">
                    <span className="copyright">
                        Anonymous Mail &copy; 2020 - All rights reserved
                    </span>
                </footer>
            </div>
        );
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired,
    signUpUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    ui: state.ui
})

const mapActionsToProps = {
    signUpUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(SignUp))
