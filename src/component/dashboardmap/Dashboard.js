import React, {useState} from 'react';
import NavDrawer from "../navigation/NavDrawer";
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
  },
    extra: {
        margin: 100
    }
});

export default function Dashboard() {
  const classes = useStyles();

  return (
      <NavDrawer>
          <h2 className="overview">Overview</h2>
          <div className={clsx(classes.container)}>
              <p className={clsx(classes.inbox, classes.extra)}>Inbox: 250 emails </p>
              <p className={clsx(classes.trashtext, classes.extra)}>Trash: 25 mails </p>
              <p className={clsx(classes.readtext, classes.extra)}>Read: 5 emails </p>
              <p className={clsx(classes.unreaden, classes.extra)}>Unread: 245 emails </p>
              <p className={clsx(classes.labeltext, classes.extra)}>Labels: 5 </p>
              <a href= "/dashboard"><img className={clsx(classes.plusicon)} src={plus} /></a>  {/* plus icoon van dashboard */}
          </div>
      </NavDrawer>
  )
}
