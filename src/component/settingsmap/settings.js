import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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

    const [value, setValue] = React.useState('phone');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <NavDrawer>
            <h2 className="overview">My data</h2>
            <div className="settings-container">
                <input className="settings-email" placeholder="Email address"/>
                <input className="settings-username" placeholder="Username"/>
                <input className="settings-phone" placeholder="Phone number"/>
                <div className="settings-box">
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="end"
                                control={
                                    <Checkbox 
                                        style={{ color: '#94F0FF', top: '11px', left: '30px' }}          
                                        checked={checked}           
                                        onChange={handleChangeCheckbox}
                                    />
                                }
                            />
                        </FormGroup>
                    </FormControl>
                    <span className="settings-box-settings">Enable two step authentication:</span>
                    <FormControl component="fieldset" className="radios">
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel 
                                value="phone" 
                                control={
                                    <Radio 
                                        style={{ color: '#94F0FF' }}
                                    />
                                }
                                label="Phone number"
                                style={{ color: 'white' }}
                                disabled={checked ? false : true}
                            />
                            <FormControlLabel value="email" control={<Radio style={{ color: '#94F0FF' }}/>}
                                              label="Email address"
                                              style={{ color: 'white' }}
                                              disabled={checked ? false : true}
                            />
                            <FormControlLabel value="qr" control={<Radio style={{ color: '#94F0FF' }}/>}
                                              label="QR-code"
                                              style={{ color: 'white' }}
                                              disabled={checked ? false : true}
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <CustomizedSnackbars/>
                <footer className="settings-hidden-footer">
                    <span> </span>
                </footer>
            </div>
        </NavDrawer>
    );
}
