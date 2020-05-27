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
import NavDrawer from "../navigation/NavDrawer"

{/*stijl element */}

const useStyles = makeStyles({
    list: {
        background: '#2980B9 -webkit-linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9) linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9)',
        borderRadius: 2,
        width: 175,
        height:1900,
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
    }
});

export default function AutoReplies() {
    const classes = useStyles();

    return (
        <NavDrawer>
            <h2 className="overview">Auto replies</h2>
            <div className={clsx(classes.container)}>
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
                <a href= "/dashboard"><img className={clsx(classes.plusicon)} src={plus} /></a>
            </div>
        </NavDrawer>
    );
}
