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
import logo from "../../img/Icon.png";
import plus from "../../img/plus.png";

{/*stijl element */}

const useStyles = makeStyles({
    list: {
        background: '#2980B9',
        background: '-webkit-linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9)',
        background: 'linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9)',
        borderRadius: 2,
        width: 175,
        height:1900,
        padding: 100,

    },
    fullList: {
        width: 'auto',

    },
});

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
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
            <h2 className="overview">Auto replies</h2>
            {/* logo image */}
            <a href= "/dashboard"><img className= "db-logo" src={logo} width="70" height="50" alt="logo" /></a>
            <div className="auto-btns">
                <input className="auto-title" placeholder="Title"/>
                <input className="auto-subject" placeholder="Subject"/>
                <div className="auto-body"></div>
                <div className="send-to">
                    <span>Send to:</span>
                    <input type="text" placeholder="johndoe@gmail.com" className="ex-mail"/>
                    <input type="text" className="ex-mail-1-2"/>
                    <img className= "plusicon-auto-add" src={plus} />
                </div>
                <button className="auto-save-btn">Save</button>
            </div>
            <div className="auto-btns-2">
                <input className="auto-title" placeholder="Title"/>
                <input className="auto-subject" placeholder="Subject"/>
                <div className="auto-body-2"></div>
                <div className="send-to-2">
                    <span>Send to:</span>
                    <input type="text" placeholder="janedoe@gmail.com" className="ex-mail-2"/>
                    <input type="text" className="ex-mail-2-2"/>
                    <img className= "plusicon-auto-add-2" src={plus} />
                </div>
                <button className="auto-save-btn-2">Save</button>
            </div>
            <a href= "/dashboard"><img className= "plusicon-auto" src={plus} /></a>
        </div>
    );
}
