import React, {Fragment, Component} from 'react';
import clsx from 'clsx';
import passomatic from "passomatic"
import dayjs from "dayjs";
import {connect} from "react-redux";
import {getSpammers, addSpammer, deleteSpammer} from "../../redux/actions/dataActions";
import {withStyles} from '@material-ui/core/styles';
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
import LoadingSkeleton from "../skeleton/Skeleton";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = (theme) => ({
    ...theme.spreadThis,
    list: {
        background: '#2980B9 -webkit-linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9) linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9)',
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
    plusicon: {
        position: 'absolute',
        left: '80rem',
        top: '35rem'
    },
    addButton: {
        marginTop: 15,
        backgroundColor: '#4A934D'
    }
})

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        padding: theme.spacing(2)
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

class SpammedUsers extends Component {

    state = {
        errors: {},
        spammedEmail: '',
        spammerId: ''
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.ui.errors)
            this.setState({errors: nextProps.ui.errors})
    }

    componentDidMount() {
        this.props.getSpammers()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newSpammer = {
            spammedEmail: this.state.spammedEmail
        }

        this.props.addSpammer(newSpammer)
    }

    render() {
        const {
            classes,
            data: {
                loading,
                spammerData,
                spamMessage: {message}
            }
        } = this.props

        const {errors} = this.state

        const addModal = () => {
            return (
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        onChange={this.handleChange}
                        name={'spammedEmail'}
                        helperText={errors.spammedEmail}
                        error={errors.spammedEmail ? true : false}
                        value={this.state.spammedEmail || ''}
                        variant="outlined"
                        className={clsx(classes.inputs, classes.textColors)}
                        label={"Email address"}
                        fullWidth
                    />

                    {!loading && (
                        <Typography
                            style={{marginBottom: 20, marginTop: 10}}
                            variant={'body2'}
                        >
                            {message}
                        </Typography>
                    )}

                    <Button
                        type={"submit"}
                        className={clsx(classes.addButton)}
                        variant="contained"
                        disabled={loading}
                        startIcon={<SaveIcon/>}
                    >
                        Save

                        {loading && (
                            <CircularProgress size={30} className={classes.progress}/>
                        )}

                    </Button>
                </form>
            )
        }

        return (
            <div>
                <NavDrawer>
                    <h2 className="spammed-header">Spammed email addresses</h2>

                    {
                        spammerData.length === 0
                        ?
                            <Typography
                                style={{margin: '10% 50%', width: '40vw'}}
                                className={classes.textColors}
                            >You have no spammers</Typography>
                            :
                        loading
                            ?
                            <LoadingSkeleton/>
                            :
                            (
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
                                            {spammerData.map((spammer) => (
                                                //console.log(spammer.spammedEmailId)
                                                <StyledTableRow
                                                    stlye={{position: 'relative'}}
                                                    key={passomatic(Math.ceil(Math.random() * 10))}
                                                    spammerId={spammer.spammedEmailId}
                                                >
                                                    <StyledTableCell component="th" scope="row">
                                                        <TextField
                                                            id="standard-read-only-input"
                                                            value={spammer.spammedEmail}
                                                            InputProps={{
                                                                readOnly: true,
                                                            }}
                                                            fullWidth
                                                        />
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">
                                                        <TextField
                                                            id="standard-read-only-input"
                                                            value={dayjs(spammer.addedAt).format('DD-MM-YYYY')}
                                                            InputProps={{
                                                                readOnly: true,
                                                            }}
                                                        />
                                                    </StyledTableCell>
                                                    <StyledTableCell
                                                        style={{position: 'relative'}}
                                                        align="right"
                                                        spammerId2={this.props.spammerId}
                                                    >
                                                        <div>
                                                            <Button
                                                                /*spammerId={spammer.spammedEmailId}*/
                                                                onClick={
                                                                    () => {
                                                                        this.props.deleteSpammer(spammer.spammedEmailId)
                                                                    }
                                                                }
                                                                type={"button"}
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: 10,
                                                                    right: 15
                                                                }}
                                                                className="del1"
                                                            >
                                                                <DeleteSharpIcon
                                                                    style={{color: 'red', cursor: 'pointer'}}/>
                                                            </Button>
                                                        </div>
                                                        {/*<Modal
                                                            title="Remove spammer"
                                                            rest={deleteModal()}
                                                            spammerId3={this.props.spammerId2}
                                                        >
                                                            <div>
                                                                <button
                                                                    /*spammerId={spammer.spammedEmailId}
                                                                    type={"button"}
                                                                    style={{
                                                                        position: 'absolute',
                                                                        top: -10,
                                                                        right: 15
                                                                    }}
                                                                    className="del1"
                                                                >
                                                                    <Typography>{spammer.spammerId}</Typography>

                                                                    <DeleteSharpIcon
                                                                        style={{color: 'red', cursor: 'pointer'}}/>
                                                                </button>
                                                            </div>
                                                        </Modal>*/}
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )
                    }

                    <Modal
                        title="Add spammer"
                        rest={addModal()}
                    >
                        <img className={clsx(classes.plusicon)} alt="plus icon" src={plus}/>
                    </Modal>
                </NavDrawer>
            </div>
        );
    }
}

const mapActionsToProps = {
    getSpammers,
    addSpammer,
    deleteSpammer
}

const mapStateToProps = (state) => ({
    data: state.data,
    ui: state.ui
})

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(SpammedUsers))
