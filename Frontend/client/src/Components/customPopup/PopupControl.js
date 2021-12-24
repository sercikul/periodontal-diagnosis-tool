// do npm install --save @material-ui/core

import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const Alert = (props) => {
    return (
      <div>
        <Dialog open={true} onClose={props.closeMe}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{props.message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.closeMe} color="primary">Close</Button>
            </DialogActions>
        </Dialog>
      </div>
    );
}

export default Alert;