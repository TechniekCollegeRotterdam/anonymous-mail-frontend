import React, { Fragment, Component } from 'react';
import clsx from 'clsx';
import passomatic from "passomatic"
import {connect} from "react-redux";
import {getAutoReplyData} from "../../redux/actions/dataActions"
import plus from "../../img/plus.png";
import NavDrawer from "../navigation/NavDrawer"
import LoadingSkeleton from "../skeleton/Skeleton";
import Modal from "../modals/Modals"
import withStyles from "@material-ui/core/styles/withStyles"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const styles = (theme) => ({
    ...theme.spreadThis,
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
        left: '77rem',
        top: '70rem'
    },
    autoContainer: {
        border: '1px solid #94F0FF',
        borderRadius: 5,
        padding: 20
    }
});

class AutoReplies extends Component {

    componentDidMount() {
        this.props.getAutoReplyData()
    }

    render() {

        const {classes, data: { autoReplyData, loading } } = this.props

        const modalDetails = () => {
            return(
                <Fragment>
                    <TextField variant="outlined" className={clsx(classes.inputs, classes.textColors)} label={"Title"} fullWidth/>
                    <TextField variant="outlined" className={clsx(classes.inputs, classes.textColors)} label={"Subject"} fullWidth/>
                    <TextField variant="outlined" className={clsx(classes.inputs, classes.textColors)} label={"Body"} fullWidth multiline={true}/>
                    <Container className={clsx(classes.autoContainer)}>
                        <Typography style={{marginBottom: 10}}>Send to:</Typography>
                        <TextField variant="outlined" className={clsx(classes.inputs, classes.textColors)} placeholder="janedoe@gmail.com" fullWidth/>
                        <Button
                            className={clsx(classes.button, classes.textColors)}
                            variant="contained"
                        >
                            Save
                        </Button>
                    </Container>
                </Fragment>
            )
        }

        return (
            <NavDrawer>
                <h2 className="overview">Auto replies</h2>
                <div className={clsx(classes.container)}>
                    <form noValidate autoComplete="off">

                        {
                            loading
                                ?
                                <LoadingSkeleton/>
                                :
                                autoReplyData.map((autoReply) => {
                                    return (
                                        <div key={passomatic(1)} className="auto-btns">
                                            <TextField
                                                className="auto-title"
                                                type="text"
                                                id="outlined-basic"
                                                label="Title"
                                                value={autoReply.title || ''}
                                                variant="outlined"
                                            />
                                            <TextField
                                                className="auto-subject"
                                                type="text"
                                                id="outlined-basic"
                                                label="Subject"
                                                value={autoReply.subject || ''}
                                                variant="outlined"
                                            />
                                            <div className="auto-body" style={{padding: 10}}>{autoReply.body}</div>
                                            <div className="send-to">
                                                <span>Send to:</span>
                                                <TextField
                                                    className="ex-mail"
                                                    type="text"
                                                    id="outlined-basic"
                                                    label="E.g. johndoe@gmail.com"
                                                    value={autoReply.to || ''}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </div>
                                    )
                                })
                        }
                        <Modal
                            title="New auto reply"
                            rest={modalDetails()}
                        >
                            <img className={clsx(classes.plusicon)} alt="plus icon" src={plus} />
                        </Modal>
                    </form>
                </div>
            </NavDrawer>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.data
})

export default connect(mapStateToProps, { getAutoReplyData })(withStyles(styles)(AutoReplies))
