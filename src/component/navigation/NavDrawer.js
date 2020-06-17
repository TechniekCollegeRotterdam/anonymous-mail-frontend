import React, {Fragment} from 'react';
import clsx from 'clsx';
import {Redirect} from "react-router-dom"
import {connect} from "react-redux";
import PropTypes from "prop-types";
import './navbar.css'
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import ReplySharpIcon from '@material-ui/icons/ReplySharp';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';

import logo from "../../img/Icon.png";
import spamUser from "../../img/SpammedUser.png"

import {logoutUser} from "../../redux/actions/userActions"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#333333',
        height: '100vh'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        color: '#94F0FF'
    },
    hide: {
        display: 'none',
        color: '#94F0FF'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        backgroundColor: '#4A4949'
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: '#4A4949'
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
        backgroundColor: '#4A4949'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: '10%'
    },
    logo: {
        color: '#94F0FF',
        width: '3em',
        height: '2em',
        marginBottom: 40,
        scale: 1.6
    },
    icons: {
        color: '#94F0FF',
        scale: 1.5,
        marginBottom: 15,
        marginTop: 15,
        marginLeft: 8
    },
    spamUsers: {
        color: '#94F0FF',
        width: '2em',
        height: '2em',
        marginBottom: 15,
        marginTop: 15,
        scale: 1.4,
        marginLeft: 8
    },
    navbar: {
        backgroundColor: '#4A4949'
    },
    colors: {
        color: '#94F0FF'
    },
    toolbarExtra: {
        backgroundColor: 'transparent !important'
    }
}));

function NavDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const {children, authenticated} = props

    const handleDrawerOpen = () => {
        setOpen(true);

        useStyles.icons = {
            color: '#94F0FF',
            scale: 1.5,
            margin: 'auto'
        }

        useStyles.spamUsers = {
            color: '#94F0FF',
            scale: 1.5,
            margin: 'auto'
        }
    };

    const handleDrawerClose = () => {
        setOpen(false);
        useStyles.icons = {
            color: '#94F0FF',
            scale: 1.5,
            marginBottom: 15,
            marginTop: 15,
            marginLeft: 8
        }
        useStyles.spamUsers = {
            color: '#94F0FF',
            width: '2em',
            height: '2em',
            marginBottom: 15,
            marginTop: 15,
            scale: 1.4,
            marginLeft: 8
        }
    };

    const handleSignOut = (e) => {
        e.preventDefault()
        if (authenticated) {
            props.logoutUser()
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={clsx(classes.toolbarExtra)}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon className={clsx(classes.colors)}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon className={clsx(classes.colors)}/> : <ChevronLeftIcon className={clsx(classes.colors)}/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {['', 'Home', 'Auto replies', 'Spammed users', 'Settings', 'Sign out'].map((text, index) => (
                        <ListItem className={clsx(classes)} button key={text} divider={true}>
                            <ListItemIcon>
                                {index === 0
                                    ?
                                        <a href={'/dashboard'}>
                                            <img className={clsx(classes.logo)} src={logo} alt={'Logo'}/>
                                        </a>
                                    :
                                index === 1
                                    ?
                                        <a href={'/dashboard'}>
                                            <HomeSharpIcon className={clsx(classes.icons)}/>
                                        </a>
                                    :
                                index === 2
                                    ?
                                        <a href={'/autoreplies'}>
                                            <ReplySharpIcon className={clsx(classes.icons)}/>
                                        </a>
                                    :
                                index === 3
                                    ?
                                        <a href={'/spammedUsers'}>
                                            <img src={spamUser} alt={'Spammed users'} className={clsx(classes.spamUsers)}/>
                                        </a>
                                    :
                                index === 4
                                    ?
                                        <a href={'/settings'}>
                                            <SettingsSharpIcon className={clsx(classes.icons)}/>
                                        </a>
                                    :
                                index === 5
                                    ?

                                    <Fragment>
                                        <ExitToAppSharpIcon className={clsx(classes.icons)} onClick={handleSignOut}/>
                                    </Fragment>
                                    :
                                    null
                                }
                            </ListItemIcon>
                            <ListItemText className={clsx(classes.colors)} primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    );
}

NavDrawer.propTypes = {
    authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})


export default connect(mapStateToProps, { logoutUser })(NavDrawer)
