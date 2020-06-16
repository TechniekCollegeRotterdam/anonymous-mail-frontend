import React, {Fragment, useState, useEffect, Component} from 'react';
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import SendIcon from '@material-ui/icons/Send';
import clsx from 'clsx';
import withStyles from '@material-ui/core/styles/withStyles';
import plus from "../../img/plus.png";
import NavDrawer from "../navigation/NavDrawer";
import Modal from "../modals/Modals"
import LoadingSkeleton from "../skeleton/Skeleton";
import Typography from "@material-ui/core/Typography";

import {connect} from "react-redux";
import {getGmailData, sendMail} from "../../redux/actions/dataActions";
import {render} from "react-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = (theme) => ({
    ...theme.spreadThis,
    list: {
        background: '#2980B9 -webkit-linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9) linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9)',
        borderRadius: 2,
        width: 175,
        height: 1900,
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
    },
    border: {
        borderColor: '#94F0FF',
        color: '#94F0FF'
    }
});

class Dashboard extends Component {

    state = {
        errors: {},
        to: '',
        subject: '',
        message: ''
    }
    const

    componentDidMount() {
        this.props.getGmailData()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const mailData = {
            to: this.state.to,
            subject: this.state.subject,
            message: this.state.message
        }
        this.props.sendMail(mailData)
    }

    render() {

        const {
            classes,
            data:
                {
                    loading,
                    gmailData: {inboxMessages, trashMessages, unreadMessages, readMessages, labels},
                    sendMailMessage: { message }
                }
        } = this.props

        let modalDetails;
        modalDetails = () => {
            return (
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        variant="outlined"
                        name={'to'}
                        value={this.state.to || ''}
                        className={clsx(classes.inputs, classes.textColors)}
                        placeholder={"To"}
                        fullWidth
                        onChange={this.handleChange}
                    />
                    <TextField
                        variant="outlined"
                        name={'subject'}
                        value={this.state.subject || ''}
                        className={clsx(classes.inputs, classes.textColors)}
                        placeholder={"Subject"}
                        fullWidth
                        onChange={this.handleChange}
                    />
                    <TextField
                        variant="outlined"
                        name={'message'}
                        value={this.state.message || ''}
                        className={clsx(classes.inputs, classes.textColors)}
                        placeholder={"Message"}
                        fullWidth
                        multiline={true}
                        onChange={this.handleChange}/>

                    {!loading && (
                        <Typography
                            style={{ marginBottom: 20, marginTop: 10 }}
                            variant={'body2'}
                        >
                            {message}
                        </Typography>
                    )}

                    <Button
                        type={'submit'}
                        className={clsx(classes.button, classes.textColors)}
                        variant="contained"
                        endIcon={<SendIcon>send</SendIcon>}
                        disabled={loading}
                    >
                        Send

                        {loading && (
                            <CircularProgress size={30} className={classes.progress}/>
                        )}
                    </Button>
                </form>
            )
        }

        return (
            <NavDrawer>
                <h2 className="overview"> Overview </h2>
                <div className={clsx(classes.container)}>

                    {
                        loading
                            ?
                            <LoadingSkeleton/>
                            :
                            (
                                <Fragment>
                                    <p className={clsx(classes.extra)}> Inbox: {`${inboxMessages}`} emails </p>
                                    <p className={clsx(classes.extra)}> Trash: {`${trashMessages}`} mails </p>
                                    <p className={clsx(classes.extra)}> Read: {`${readMessages}`} emails </p>
                                    <p className={clsx(classes.extra)}> Unread: {`${unreadMessages}`} emails </p>
                                    <p className={clsx(classes.extra)}> Labels: {`${labels}`} </p>
                                </Fragment>
                            )
                    }
                    <div className={clsx(classes.plusicon)}>
                        <Modal
                            title="New Email"
                            rest={modalDetails()}
                        >
                            <img className={clsx(classes.plusicon)} alt="plus icon" src={plus}/>
                        </Modal>
                    </div>
                </div>
            </NavDrawer>
        )
    }
}

const mapActionsToProps = {
    getGmailData,
    sendMail
}

const mapStateToProps = (state) => ({
    data: state.data
})

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Dashboard))
