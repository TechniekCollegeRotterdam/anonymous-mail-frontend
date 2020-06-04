import React, { Fragment } from 'react';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography"
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import NavDrawer from "../navigation/NavDrawer"
import Modal from "../modals/Modals"
import plus from "../../img/plus.png";

{/*stijl element */ }

const useStyles = makeStyles({
    list: {
        background: '#2980B9',
        background: '-webkit-linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9)',
        background: 'linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9)',
        borderRadius: 2,
        width: 175,
        height: 1900,
        padding: 100
    },
    fullList: {
        width: 'auto'
    },
    deleteButton: {
        backgroundColor: '#b90000 !important',
        marginTop: 15,
        '& *': {
            color: '#ffffff !important'
        }
    },
    addButton: {
        marginTop: 15,
        backgroundColor: '#4A934D'
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

export default function SpammedUsers() {
    const classes = useStyles();

    const addModal = () => {
        return (
            <Fragment>
                <TextField variant="outlined" className={clsx(classes.inputs, classes.textColors)} label={"New spammer"} fullWidth/>
                <Button
                    className={clsx(classes.addButton)}
                    variant="contained"
                    startIcon={<SaveIcon/>}
                >
                    Save
                </Button>
            </Fragment>
        )
    }

    const deleteModal = () => {
        return (
            <Fragment>
                <Typography>
                    Are you sure you want to remove this spammer?<br />
                    Doing this will allow emails from this user to come in your inbox.
                </Typography>
                <Button
                    className={clsx(classes.deleteButton)}
                    variant="contained"
                    startIcon={<DeleteIcon/>}
                >
                    Delete
                </Button>
            </Fragment>
        )
    }

    return (
        <div>
            <NavDrawer>
                <h2 className="spammed-header">Spammed email addresses</h2>
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
                                <StyledTableRow stlye={{ position: 'relative' }} key={row.email}>
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
                                    <StyledTableCell style={{ position: 'relative' }} align="right">
                                        <Modal
                                            title="Remove spammer"
                                            rest={deleteModal()}
                                        >
                                            <div>
                                                <button
                                                    style={{
                                                        position: 'absolute',
                                                        top: -10,
                                                        right: 15
                                                    }}
                                                    className="del1"
                                                >
                                                    <DeleteSharpIcon style={{ color: 'red', cursor: 'pointer' }} />
                                                </button>
                                            </div>
                                        </Modal>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Modal
                        title="Add spammer"
                        rest={addModal()}
                    >
                        <img className={clsx(classes.plusicon)} src={plus} />
                    </Modal>
            </NavDrawer>
        </div>
    );
}