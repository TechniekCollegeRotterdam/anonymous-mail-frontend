import React, {Fragment, Component} from 'react';
import clsx from 'clsx';
import passomatic from "passomatic"
import {connect} from "react-redux";
import {getAutoReplyData, addAutoReply} from "../../redux/actions/dataActions"
import plus from "../../img/plus.png";
import NavDrawer from "../navigation/NavDrawer"
import LoadingSkeleton from "../skeleton/Skeleton";
import Modal from "../modals/Modals"
import withStyles from "@material-ui/core/styles/withStyles"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

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

    state = {
        title: '',
        body: '',
        subject: '',
        to: '',
        errors: {}
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.ui.errors) {
            this.setState({
                errors: nextProps.ui.errors
            })
        }
        if (!nextProps.ui.errors && !nextProps.ui.loading) {
            this.setState({
                title: '',
                body: '',
                subject: '',
                to: '',
                errors: {}
            })
        }
    }

    componentDidMount() {
        this.props.getAutoReplyData()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const autoReplyData = {
            title: this.state.title,
            body: this.state.body,
            subject: this.state.subject,
            to: this.state.to
        }

        this.props.addAutoReply(autoReplyData)
    }

    render() {

        const {classes, data: {autoReplyData, autoReplySendMessage: {message}, loading}} = this.props

        const {errors} = this.state

        const modalDetails = () => {
            return (
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        name={'title'}
                        helperText={errors.title}
                        error={errors.title ? true : false}
                        value={this.state.title || ''}
                        variant="outlined"
                        className={clsx(classes.inputs, classes.textColors)}
                        label={"Title"}
                        fullWidth
                        onChange={this.handleChange}
                    />
                    <TextField
                        name={'subject'}
                        helperText={errors.subject}
                        error={errors.subject ? true : false}
                        value={this.state.subject || ''}
                        variant="outlined"
                        className={clsx(classes.inputs, classes.textColors)}
                        label={"Subject"}
                        fullWidth
                        onChange={this.handleChange}
                    />
                    <TextField
                        name={'body'}
                        helperText={errors.body}
                        error={errors.body ? true : false}
                        value={this.state.body || ''}
                        variant="outlined"
                        className={clsx(classes.inputs, classes.textColors)}
                        label={"Body"}
                        fullWidth
                        multiline={true}
                        onChange={this.handleChange}
                    />

                    <Container className={clsx(classes.autoContainer)}>
                        <Typography style={{marginBottom: 10}}>Send to:</Typography>
                        <TextField
                            name={'to'}
                            helperText={errors.to}
                            error={errors.to ? true : false}
                            value={this.state.to || ''}
                            variant="outlined"
                            className={clsx(classes.inputs, classes.textColors)}
                            placeholder="janedoe@gmail.com"
                            fullWidth
                            onChange={this.handleChange}
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
                            type={'submit'}
                            className={clsx(classes.button, classes.textColors)}
                            variant="contained"
                            disabled={loading}
                        >
                            Save

                            {loading && (
                                <CircularProgress size={30} className={classes.progress}/>
                            )}

                        </Button>
                    </Container>
                </form>
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
                                <Grid
                                    container
                                    direction={"row"}
                                >
                                    {autoReplyData.map((autoReply) => {
                                        //console.log(autoReply)
                                        return (
                                            <Fragment>
                                                <Grid
                                                    key={passomatic(1)}
                                                    container
                                                    item
                                                    direction={"column"}
                                                    justify="space-between"
                                                    alignItems="center"
                                                    sm={6}
                                                    m={5}
                                                    style={{
                                                        marginBottom: '20px !important',
                                                        marginTop: 50
                                                    }}
                                                >
                                                    <TextField
                                                        style={{
                                                            marginBottom: '5%'
                                                        }}
                                                        type="text"
                                                        id="outlined-basic"
                                                        label="Title"
                                                        value={autoReply.title || ''}
                                                        variant="outlined"
                                                    />
                                                    <TextField
                                                        style={{
                                                            marginBottom: '5%'
                                                        }}
                                                        type="text"
                                                        id="outlined-basic"
                                                        label="Subject"
                                                        value={autoReply.subject || ''}
                                                        variant="outlined"
                                                    />
                                                    <div className="auto-body"
                                                         style={{padding: 10, marginBottom: '5%'}}>{autoReply.body}</div>
                                                    <div className="send-to" style={{
                                                        marginBottom: '5%'
                                                    }}
                                                    >
                                                        <span style={{padding: 10}}>Send to:</span>
                                                        <TextField
                                                            className="ex-mail"
                                                            type="text"
                                                            id="outlined-basic"
                                                            label="E.g. johndoe@gmail.com"
                                                            value={autoReply.to || ''}
                                                            variant="outlined"
                                                        />
                                                    </div>
                                                </Grid>
                                            </Fragment>
                                        )
                                    })
                                    }
                                </Grid>
                        }
                        <Modal
                            title="New auto reply"
                            rest={modalDetails()}
                        >
                            <img className={clsx(classes.plusicon)} alt="plus icon" src={plus}/>
                        </Modal>
                    </form>
                </div>
            </NavDrawer>
        );
    }
}

const mapActionsToProps = {
    getAutoReplyData,
    addAutoReply
}

const mapStateToProps = (state) => ({
    data: state.data,
    ui: state.ui
})

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(AutoReplies))
