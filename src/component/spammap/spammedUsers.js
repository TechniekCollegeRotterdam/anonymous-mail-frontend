import React from 'react';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import DeleteIcon from '@material-ui/icons/Delete';
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
    }
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        padding: theme.spacing(2)
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #94f0ff',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        alignItems: 'center',
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(email, addedAt) {
    return { email, addedAt };
}

const rows = [
    createData('hacker@outlook.com', '25 march 2020'),
    createData('hacker@outlook.com', '25 march 2020'),
    createData('hacker@outlook.com', '25 march 2020'),
    createData('hacker@outlook.com', '25 march 2020'),
    createData('hacker@outlook.com', '25 march 2020'),
    createData('hacker@outlook.com', '25 march 2020'),
    createData('hacker@outlook.com', '25 march 2020'),
    createData('hacker@outlook.com', '25 march 2020')
];

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
            <h2 className="spammed-header">Spammed email addresses</h2>
            {/* logo image */}
            <a href= "/dashboard"><img className= "db-logo" src={logo} width="70" height="50" alt="logo" /></a>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Email addresses:</StyledTableCell>
                            <StyledTableCell align="right">Added at:</StyledTableCell>
                            <StyledTableCell align="right"> </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.email}>
                                <StyledTableCell component="th" scope="row">
                                    <TextField
                                        id="standard-read-only-input"
                                        defaultValue={row.email}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <TextField
                                        id="standard-read-only-input"
                                        defaultValue={row.addedAt}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.deleteEmail}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/*  Delete buttons */}
            <div>
                <button className= "del1" onClick={handleOpen}>
                    <DeleteSharpIcon style = {{color: 'red', cursor: 'pointer'}}  />
                </button>
                <button className= "del2" onClick={handleOpen}>
                    <DeleteSharpIcon style = {{color: 'red', cursor: 'pointer'}}  />
                </button>
                <button className= "del3" onClick={handleOpen}>
                    <DeleteSharpIcon style = {{color: 'red', cursor: 'pointer'}}  />
                </button>
                <button className= "del4" onClick={handleOpen}>
                    <DeleteSharpIcon style = {{color: 'red', cursor: 'pointer'}}  />
                </button>
                <button className= "del5" onClick={handleOpen}>
                    <DeleteSharpIcon style = {{color: 'red', cursor: 'pointer'}}  />
                </button>
                <button className= "del6" onClick={handleOpen}>
                    <DeleteSharpIcon style = {{color: 'red', cursor: 'pointer'}}  />
                </button>
                <button className= "del7" onClick={handleOpen}>
                    <DeleteSharpIcon style = {{color: 'red', cursor: 'pointer'}}  />
                </button>
                <button className= "del8" onClick={handleOpen}>
                    <DeleteSharpIcon style = {{color: 'red', cursor: 'pointer'}}  />
                </button>

                <Modal style= {{left: '60ch', width: 500, top: '220px'}}
                       aria-labelledby="transition-modal-title"
                       aria-describedby="transition-modal-description"
                       className={classes.modal}
                       open={open}
                       onClose={handleClose}
                       closeAfterTransition
                       BackdropComponent={Backdrop}
                       BackdropProps={{
                           timeout: 800,
                       }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h3 id="transition-modal-title">Remove spammer</h3>
                            <hr/>
                            <p id="transition-modal-description">Are you sure you want to remove this spammer?<br/>
                               Doing this will allow emails from this user to come in your inbox.</p>
                            <Button style = {{left: '200px', top: '100px', backgroundColor: 'red'}}
                                    variant="contained"
                                    className={classes.button}
                                    startIcon={<DeleteIcon style={{ color: 'white' }}/>}
                            >
                                <span style={{ color: 'white' }}>Delete</span>
                            </Button>
                        </div>
                    </Fade>
                </Modal>
            </div>
            <a href= "/dashboard"><img className= "spammed-plusicon" src={plus} /></a>  {/* + icon of the dashboard */}
        </div>
    );
}
