import React, { Fragment } from 'react';
import clsx from 'clsx';
import plus from "../../img/plus.png";
import NavDrawer from "../navigation/NavDrawer"
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

function AutoReplies(props) {
    const {classes} = props

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
                <div className="auto-btns">
                    <input className="auto-title" placeholder="Title"/>
                    <input className="auto-subject" placeholder="Subject"/>
                    <div className="auto-body"></div>
                    <div className="send-to">
                        <span>Send to:</span>
                        <input type="text" placeholder="johndoe@gmail.com" className="ex-mail"/>
                        <input type="text" className="ex-mail-1-2"/>
                        <img className= "plusicon-auto-add" alt="plus icon" src={plus} />
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
                        <img className= "plusicon-auto-add-2" alt="plus icon" src={plus} />
                    </div>
                    <button className="auto-save-btn-2">Save</button>
                </div>
                <Modal
                    title="New auto reply"
                    rest={modalDetails()}
                >
                    <img className={clsx(classes.plusicon)} alt="plus icon" src={plus} />
                </Modal>
            </div>
        </NavDrawer>
    );
}

export default (withStyles(styles)(AutoReplies))
