import React, { Fragment } from 'react';
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import SendIcon from '@material-ui/icons/Send';
import clsx from 'clsx';
import withStyles from '@material-ui/core/styles/withStyles';
import plus from "../../img/plus.png";
import NavDrawer from "../navigation/NavDrawer";
import Modal from "../modals/Modals"

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
  const {classes} = props

  const modalDetails = () => {
    return (
        <Fragment>
          <TextField variant="outlined" className={clsx(classes.inputs, classes.textColors)} label={"Title"} fullWidth/>
          <TextField variant="outlined" className={clsx(classes.inputs, classes.textColors)} label={"Subject"} fullWidth/>
          <TextField variant="outlined" className={clsx(classes.inputs, classes.textColors)} label={"Body"} fullWidth multiline={true}/>
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
        <p className={clsx(classes.extra)}> Inbox: 250 emails </p>
        <p className={clsx(classes.extra)}> Trash: 25 mails </p>
        <p className={clsx(classes.extra)}> Read: 5 emails </p>
        <p className={clsx(classes.extra)}> Unread: 245 emails </p>
        <p className={clsx(classes.extra)}> Labels: 5 </p>
        <div className={clsx(classes.plusicon)}>
          <Modal 
            title="New Email"
            rest={modalDetails}
          >
            <img className={clsx(classes.plusicon)} src={plus} />
          </Modal>
        </div>
      </div>
    </NavDrawer>
  )
}

export default (withStyles(styles)(Dashboard))