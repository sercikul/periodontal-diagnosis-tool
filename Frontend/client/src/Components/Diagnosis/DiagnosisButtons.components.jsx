import React from "react";
import {ButtonSeparator} from "../MedicalAssessment/MedicalElements";
import {Button as PageButton} from "../../Global.Styles";
import {ButtonsDiagnosisContainer, DiagnosisRow} from "./Diagnosis.elements";
import Popup from '../customPopup/PopupControl';
import {withRouter} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {StyledInput} from "../Diagnosis/Diagnosis.elements";

import axios from "axios";
import {Context} from "../../ClassificationState";

class DiagnosisButtonsBox extends React.Component{
    static contextType = Context;

    constructor(props){
        super(props);

        this.state = {
            showPopup: false,
            AssessmentFeedback: sessionStorage.getItem("AssessmentFeedback"),
            popupAssessmentOutcomeMessage: false,
            popupAssessmentOutcomeMessagePopup: null
        }

        if(this.state.AssessmentFeedback === null){
            this.state.AssessmentFeedback = "";
        }
    }

    async componentDidMount(){
        this.classContext = this.context;
    }
    
    closePopupHandler = () => {
        this.setState({showPopup: false});
    }
    
    openPopupHandler = () => {
        this.setState({showPopup: true});
    }

    closeFeedbackOutcomePopupHandler = () => {
        this.setState({popupAssessmentOutcomeMessage: false});
        window.location.reload();
    }

    openFeedbackOutcomePopupHandler = () => {
        this.setState({popupAssessmentOutcomeMessage: true});
    }

    updateAssessmentFeedback = (e) => {
        sessionStorage.setItem("AssessmentFeedback", e.target.value);
        this.setState({AssessmentFeedback: e.target.value});
    }
    
    send = () => {
        this.openFeedbackOutcomePopupHandler();
        this.closePopupHandler();
        if((this.state.AssessmentFeedback === null) || (this.state.AssessmentFeedback === "")){
            // show popup with message indicaing empty
            this.showFeedbackOutcome('Diagnosis Feedback is empty', 'Please provide feedback on this diagnosis');
        }else{
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            let Assessment = {};
            Assessment['doctorId'] = localStorage.getItem("token");
            Assessment['patientId'] = sessionStorage.getItem("PatientId");

            Object.keys(sessionStorage).forEach((key) => {
                Assessment[key] = sessionStorage.getItem(key);
            });
            
            axios.post(
                `https://backendaapefp.azurewebsites.net/api/assessment/update/${sessionStorage.getItem("AssessmentId")}`,
                Assessment,
                config
            )
            this.showFeedbackOutcome('Diagnosis Feedback', 'Diagnosis Feedback has been sent');
        }
    }
    
    pageChange = (page) => {
        this.props.history.push(page);
    }

    saveButtonAction = () => {
        this.classContext[1](null);
        sessionStorage.clear();
        this.pageChange("/");
    }

    showFeedbackOutcome = (title, message) =>{
        this.title = title;
        this.message = message;
        this.setState({"popupAssessmentOutcomeMessage": true});
    }
         
    render(){
        if(this.state.showPopup){
            return (          
                <div>
                  <Dialog open={true} onClose={this.closePopupHandler}>
                      <DialogTitle>Diagnosis Feedback</DialogTitle>
                      <DialogContent>
                          <DialogContentText>Please provide feedback on this diagnosis</DialogContentText>
                          <StyledInput value={this.state.AssessmentFeedback} onChange={this.updateAssessmentFeedback}/>
                      </DialogContent>
                      <DialogActions>
                          <Button onClick={this.closePopupHandler} color="primary">Close</Button>
                          <Button onClick={this.send} color="primary">Send</Button>
                      </DialogActions>
                  </Dialog>
                </div>
              );
        }

        if(this.state.popupAssessmentOutcomeMessage){
            return(
                <Popup title={this.title} message={this.message} closeMe={this.closeFeedbackOutcomePopupHandler}/>
            );
        }

        return (
            <>
            <ButtonsDiagnosisContainer style={ {width: '1000px'} }>
            <DiagnosisRow>
            <PageButton onClick={this.props.history.goBack} big fontBig= "primary">Back</PageButton>
            <ButtonSeparator/>
            <PageButton onClick={this.openPopupHandler} big fontBig= "primary">Feedback</PageButton>
            <ButtonSeparator/>
            <PageButton onClick={window.print} big fontBig= "primary">Print</PageButton>
            <ButtonSeparator/>
            <PageButton onClick={this.saveButtonAction} big fontBig= "primary">Save</PageButton>
            <ButtonSeparator/>
            </DiagnosisRow>
            </ButtonsDiagnosisContainer>
        </>
        );
    }
}
            
    export default withRouter(DiagnosisButtonsBox);