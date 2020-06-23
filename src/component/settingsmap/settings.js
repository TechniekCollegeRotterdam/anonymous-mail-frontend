import React, {Fragment, useState, useEffect, Component} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import NavDrawer from "../navigation/NavDrawer"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import LoadingSkeleton from "../skeleton/Skeleton";
import Typography from "@material-ui/core/Typography";
import clsx from 'clsx';

import {connect} from "react-redux"; //connecten 
import {getSettingsUser} from "../../redux/actions/userActions"; // getsettingsUser


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
                <Alert onClose={handleClose} style={{
                    position: 'absolute', width: '614px', height: '40px',
                    right: '-340px', bottom: "-30px"
                }} severity="success"
                >
                    Settings saved
                </Alert>
            </Snackbar>
        </div>
    );
}

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
    }
});

class Settings extends React.Component {

    componentDidMount() {
        this.props.getSettingsUser()
    }

    render() {

        const {
            classes,
            user: {
                loading,
                credentials: {
                    username,
                    email
                }
            }
        } = this.props

        return (
            <NavDrawer>
                <h2 className="settings-overview">My data</h2>
                {
                    loading
                        ?
                        <LoadingSkeleton/>
                        :
                        (
                            <div className={clsx(classes.container)}>

                                <div className={clsx(classes.plusicon)}>

                                    <TextField className={clsx(classes.settingsemail)}
                                               variant="outlined"
                                               name={'username'}
                                               value={username}
                                               className={clsx(classes.inputs, classes.textColors)}
                                               label={"Username"}
                                               placeholder={"Username"}
                                               fullWidth

                                    />

                                    <TextField className={clsx(classes.settingsemail)}
                                               variant="outlined"
                                               name={'email'}
                                               value={email}
                                               className={clsx(classes.inputs, classes.textColors)}
                                               label={"Email"}
                                               placeholder={"Email"}
                                               fullWidth

                                    />

                                    <CustomizedSnackbars/>
                                    <footer className="settings-hidden-footer">
                                        <span> </span>
                                    </footer>
                                </div>
                            </div>
                        )

                }
            </NavDrawer>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, {getSettingsUser})(withStyles(styles)(Settings))
