import React, {Fragment, useEffect} from 'react';
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import SendIcon from '@material-ui/icons/Send';
import clsx from 'clsx';
import withStyles from '@material-ui/core/styles/withStyles';
import plus from "../../img/plus.png";
import NavDrawer from "../navigation/NavDrawer";
import Modal from "../modals/Modals"
import LoadingSkeleton from "../skeleton/Skeleton";

import {connect} from "react-redux";
import {getGmailData} from "../../redux/actions/dataActions";

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

function Dashboard(props) {

    useEffect(() => {
        props.getGmailData()
    }, [])

    const {classes, data: {loading, gmailData: {inboxMessages, trashMessages, unreadMessages, readMessages, labels}}} = props

    const modalDetails = () => {
        return (
            <Fragment>
                <TextField variant="outlined" className={clsx(classes.inputs, classes.textColors)} label={"Title"}
                           fullWidth/>
                <TextField variant="outlined" className={clsx(classes.inputs, classes.textColors)} label={"Subject"}
                           fullWidth/>
                <TextField variant="outlined" className={clsx(classes.inputs, classes.textColors)} label={"Body"}
                           fullWidth multiline={true}/>
                <Button
                    className={clsx(classes.button, classes.textColors)}
                    variant="contained"
                    endIcon={<SendIcon>send</SendIcon>}
                >
                    Send
                </Button>
            </Fragment>
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

const mapStateToProps = (state) => ({
    data: state.data
})

export default connect(mapStateToProps, {getGmailData})(withStyles(styles)(Dashboard))
