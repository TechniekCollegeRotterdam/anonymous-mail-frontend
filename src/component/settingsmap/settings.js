import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import NavDrawer from "../navigation/NavDrawer"

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles ((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    list: {
        background: '#2980B9 -webkit-linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9) linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9)',
        borderRadius: 2,
        width: 175,
        height:1900,
        padding: 100
    },
    fullList: {
        width: 'auto'
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

export default function Settings() {

    const [checked, setChecked] = React.useState(false);

    const handleChangeCheckbox = (event) => {
        setChecked(event.target.checked);
    };

    const [value, setValue] = React.useState('email');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <NavDrawer>
            <h2 className="settings-overview">My data</h2>
            <div className="settings-container">
                <input className="settings-email" placeholder="Email address"/>
                <input className="settings-username" placeholder="Username"/>
                <CustomizedSnackbars/>
                <footer className="settings-hidden-footer">
                    <span> </span>
                </footer>
            </div>
        </NavDrawer>
    );
}
