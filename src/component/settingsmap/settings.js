import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import ReplySharpIcon from '@material-ui/icons/ReplySharp';
import PriorityHighSharpIcon from '@material-ui/icons/PriorityHighSharp';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
import logo from "../../img/Icon.png";

/*
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
*/

const useStyles = makeStyles ((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    list: {
        background: '#2980B9',
        background: '-webkit-linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9)',
        background: 'linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9)',
        borderRadius: 2,
        width: 175,
        height:1900,
        padding: 100
    },
    fullList: {
        width: 'auto'
    }
}));

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState, open, setOpen] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {/* Dashboard Navigatie */}
            <a href='/dashboard'>
                <List>
                    {['Home'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemIcon> <HomeSharpIcon /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </a>
            <Divider />
            <Divider />
            <a href='/autoreplies'>
                <List>
                    {['Auto Replies'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemIcon> <ReplySharpIcon /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </a>
            <Divider />
            <a href='/spammedUsers'>
                <List>
                    {['Spammed Users'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemIcon> <PriorityHighSharpIcon /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </a>
            <Divider />
            <a href='/settings'>
                <List>
                    {['Settings'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemIcon> <SettingsSharpIcon /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </a>
            <Divider />
            <a href='/signout'>
                <List>
                    {['Signout'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemIcon> <ExitToAppSharpIcon /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </a>
            <Divider />
        </div>
    );

    const [checked, setChecked] = React.useState(true);

    const handleChangeCheckbox = (event) => {
        setChecked(event.target.checked);
    };

    const [value, setValue] = React.useState('phone');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    /*
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    */

    return (
        <div>
            {['OPEN MENU'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button className= "knopje" onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
            <h2 className="overview">My data</h2>
            {/* logo image */}
            <a href= "/dashboard"><img className= "db-logo" src={logo} width="70" height="50" alt="logo" /></a>
            <div className="settings-container">
                <input className="settings-email" placeholder="Email address"/>
                <input className="settings-username" placeholder="Username"/>
                <input className="settings-phone" placeholder="Phone number"/>
                <div className="settings-box">
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="end"
                                control={<Checkbox style={{ color: '#94F0FF', top: '11px', left: '30px' }}
                                                   checked={checked}
                                                   onChange={handleChangeCheckbox}
                                />}
                            />
                        </FormGroup>
                    </FormControl>
                    <span className="settings-box-settings">Enable two step authentication:</span>
                    <FormControl component="fieldset" className="radios">
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="phone" control={<Radio style={{ color: '#94F0FF' }}/>}
                                              label="Phone number"
                                              style={{ color: 'white' }}
                            />
                            <FormControlLabel value="email" control={<Radio style={{ color: '#94F0FF' }}/>}
                                              label="Email address"
                                              style={{ color: 'white' }}
                            />
                            <FormControlLabel value="qr" control={<Radio style={{ color: '#94F0FF' }}/>}
                                              label="QR-code"
                                              style={{ color: 'white' }}
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <button className="settings-save-btn">Save settings</button>
            </div>
        </div>
    );
}
