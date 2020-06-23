import React, {Fragment, useState, useEffect, Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import NavDrawer from "../navigation/NavDrawer"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import LoadingSkeleton from "../skeleton/Skeleton";
import Typography from "@material-ui/core/Typography";
import clsx from 'clsx';

import {connect} from "react-redux"; //connecten 
import {getSettingsUser} from "../../redux/actions/dataActions"; // getsettingsUser
import {render} from "react-dom"; // render importen 
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from '@material-ui/core/styles/withStyles';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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


function CustomizedSnackbars() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <button className="settings-save-btn" onClick={handleClick}>
                Save settings
            </button>
            <Snackbar open={open} onClose={handleClose}>
                <Alert onClose={handleClose} style={{ position: 'absolute', width: '614px', height: '40px',
                    right: '-340px', bottom: "-30px" }} severity="success"
                >
                    Settings saved
                </Alert>
            </Snackbar>
        </div>
    );
}

// const [checked, setChecked] = React.useState(false);

// const handleChangeCheckbox = (event) => {
//     setChecked(event.target.checked);
// };

// const [value, setValue] = React.useState('email');

// const handleChange = (event) => {
//     setValue(event.target.value);
// };

const styles = (theme) => ({
    ...theme.spreadThis,
    list: {
        background: '#2980B9 -webkit-linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9) linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9)',
        borderRadius: 2,
        width: 175,
        height: 1900,
        padding: 100,

    },
    fullList: {
        width: 'auto',
    },
    container: {
        position: 'relative',
        color: '#94F0FF',
        fontSize: 24
    },
    plusicon: {
        position: 'absolute',
        right: 10
    },
    extra: {
        margin: 100
    },
    border: {
        borderColor: '#94F0FF',
        color: '#94F0FF'
    },

    settingsemail: {
    position: 'absolute', 
    width: '170px',
    height: '40px'

    }
});



class Settings extends React.Component {

    state = {
        errors: {},
        username:'',
        email:''
    }

    
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.ui.errors)
            this.setState({errors: nextProps.ui.errors})
    }

    componentDidMount() {
      this.setUserData()
    }

    setUserData = () => {

        const userData = getSettingsUser().then((res) => {
            console.log(res)
                
                this.setState({
                    username: res.username, 
                    email: res.email
                })
             })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const settingsData = {
            username: this.state.username,
            email: this.state.email
        }

        this.props.getSettingsUser(settingsData)
    }

    render(){

        const {
            classes,
            data:
                {
                    loading,
                    gmailData: {username,email}
                   
                }
        } = this.props

        const { errors } = this.state



    return (
        <NavDrawer>
            <h2 className="settings-overview">My data</h2>
            <div className={clsx(classes.container)}>

 

        <div className={clsx(classes.plusicon)}>
                 
                    <TextField className= {clsx(classes.settingsemail)}
                        variant="outlined"
                        name={'username'}
                        helperText={errors.username}
                        error={errors.username ? true : false}
                        value={this.state.username }
                        className={clsx(classes.inputs, classes.textColors)}
                        label= {this.state.username}
                        placeholder={"Username"}
                        fullWidth
                        onChange={this.handleChange}
                        
                    />

                        <TextField  className= {clsx(classes.settingsemail)}
                        variant="outlined"
                        name={'email'}
                        helperText={errors.email}
                        error={errors.email ? true : false}
                        value={this.state.email}
                         className={clsx(classes.inputs, classes.textColors)}
                        label=  {this.state.email}   
                        placeholder={"Email"}
                        fullWidth
                        onChange={this.handleChange}
                        
                    />

                <CustomizedSnackbars/>
                <footer className="settings-hidden-footer">
                    <span> </span>
                </footer>
            </div>
            </div>
        </NavDrawer>
    );
    }
}

const mapActionsToProps = {
    getSettingsUser
    
}

const mapStateToProps = (state) => ({
    data: state.data,
    ui: state.ui
})

export default connect(mapStateToProps, {getSettingsUser})(withStyles(styles)(Settings))
