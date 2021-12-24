import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Context} from "../../ClassificationState";
import {useHistory} from "react-router-dom";

export default function AssessmentSwitchAlertDialog({open, setOpen}) {

    //Use to get the state of the current assessment and change it to the other one
    //by default the state for AssessmentType in sessionMemory = null
    const [assessmentTypeGlobalState,setAssessmentTypeGlobalState] = useContext(Context);


    const handleClose = () => {
        setOpen(false);
    };

    const history = useHistory();

    const Continue = () =>{history.push('/PatientDetails')};

    const startNew = () =>{history.push('/PatientDetails');
        sessionStorage.clear();
        {assessmentTypeGlobalState === "1" ? setAssessmentTypeGlobalState("2") : setAssessmentTypeGlobalState("1")}
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Do you want to change type of Classification?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You have already started a {assessmentTypeGlobalState==="1" ? "AAP/EFP" :"BSP"} assessment,
                        by starting a new {assessmentTypeGlobalState==="1" ? "BSP":"AAP/EFP"} assessment, data for the previous assessment will be lost.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ ()=>{handleClose();startNew();}} color="primary">
                        Start {assessmentTypeGlobalState==="1" ? "BSP":"AAP/EFP"}
                    </Button>
                    <Button onClick={Continue} color="primary" autoFocus>
                        Continue {assessmentTypeGlobalState==="1" ? "AAP/EFP":"BSP"}
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}