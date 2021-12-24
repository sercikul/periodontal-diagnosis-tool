// do npm --save install react-date-picker
import React from "react";
import {PatientContainer, FormLabel, InputForm, Header, ButtonRow, Separater, ButtonSeparator} from "../MedicalAssessment/MedicalElements";
import {FormInput} from "./PatientDetails.elements";
import {Button, Container} from "../../Global.Styles";
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import Popup from '../customPopup/PopupControl';
import { withRouter } from 'react-router-dom';
import "./PickDate.css";
import "./PickCalendar.css";

class PatientDetailsBox extends React.Component {

    //Next page changing pages
    pageChange(page) {
        this.props.history.push(page);
    }

    //Alert (conditional) if the required fields are not filled in, then a popup will appear
    conditionalPopUp(){
        ((!this.state.dobDate) || (!this.state.mrnCode) || ((this.state.dobDate > new Date())
            && (this.state.dobDate < new Date("1/1/1901")))) ?
            this.openPopupHandler() : this.pageChange('/PatientHistory')
    }

    constructor(props){
        super(props);
        this.state = {
            firstName: sessionStorage.getItem('firstName'), 
            lastName: sessionStorage.getItem('lastName'), 
            dobDate: sessionStorage.getItem('dobDate'),
            mrnCode: sessionStorage.getItem('mrnCode'),
            showPopup: false,
        };
        
        this.setNameChange = this.setNameChange.bind(this);
        this.setDatePickerChange = this.setDatePickerChange.bind(this);
        this.getInputField = this.getInputField.bind(this);
        this.closePopupHandler = this.closePopupHandler.bind(this);
        this.openPopupHandler = this.openPopupHandler.bind(this);
        this.pageChange = this.pageChange.bind(this);
        this.conditionalPopUp = this.conditionalPopUp.bind(this);

        if (Date.parse(this.state.dobDate)){
            this.state.dobDate = new Date(this.state.dobDate);
        }
    }

    setNameChange = (e, stateKey) => {
        this.setState({[stateKey]: e});
        sessionStorage.setItem(stateKey, e);
    }

    setDatePickerChange = (dobDate) => {
        if (dobDate == null){
            dobDate = '';
            this.openPopupHandler();
        }
        this.setNameChange(dobDate, "dobDate");
    }

    getInputField = (fullStateKey, stateKey, placeholderText) => {
        if(fullStateKey){
            return (<FormInput onChange={(event)=>this.setNameChange(event.target.value.replace(/^\s+|\s+$/g,''), stateKey)}
                               defaultValue={fullStateKey}/>);
        }else{
            return (<FormInput onChange={(event)=>this.setNameChange(event.target.value.replace(/^\s+|\s+$/g,''), stateKey)}
                               placeholder={placeholderText}/>);
        }
    }

    closePopupHandler = () => {
        this.setState({showPopup: false});
    }

    openPopupHandler = () => {
        this.setState({showPopup: true});
    }


    render(){
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let popup = null;

        if(this.state.showPopup){
            if ((!this.state.dobDate) && (!this.state.mrnCode)){
                popup = (<Popup title='The Date and MRN fields are required' message='Please supply a valid date and MRN to continue' closeMe={this.closePopupHandler}/>)
            }else if (!this.state.dobDate){
                popup = (<Popup title='The Date field is required' message='Please supply a valid date to continue' closeMe={this.closePopupHandler}/>)
            }else if (this.state.dobDate > new Date()){
                popup = (<Popup title='Invalid Date!' message='Please supply a valid past date to continue' closeMe={this.closePopupHandler}/>)
            }else if (this.state.dobDate < new Date("1/1/1901")){
                popup = (<Popup title='Invalid Date!' message='Please supply a valid date to continue' closeMe={this.closePopupHandler}/>)
            }else{
                popup = (<Popup title='The MRN field is required' message="Please supply patient's MRN to continue" closeMe={this.closePopupHandler}/>)
            }
        }

        return (
            <>
            <Container>
            <PatientContainer>
              <Header>Patient Details</Header>
                    <InputForm>
                        <FormLabel>First Name</FormLabel>
                        {this.getInputField(this.state.firstName, "firstName", "Patient First Name")}

                        <FormLabel>Last Name</FormLabel>
                        {this.getInputField(this.state.lastName, "lastName", "Patient Last Name")}

                        <FormLabel>Date of Birth*</FormLabel>
                        <DatePicker onChange={(value) => this.setDatePickerChange(value)} value={this.state.dobDate}
                                    maxDate={new Date()} minDate={new Date("1/1/1901")}/>

                        <FormLabel>MRN/Code*</FormLabel>
                        {this.getInputField(this.state.mrnCode, "mrnCode", "Patient Medical Record Number")}

                        <Separater/>
                    </InputForm>
                    <ButtonRow>
                        <Button big fontBig= "primary" onClick = {this.props.history.goBack}>Back</Button>
                        <ButtonSeparator/>
                        <Button big fontBig= "primary" onClick = {()=>{this.conditionalPopUp()}}>Next</Button>
                    </ButtonRow>
                    {popup}
            </PatientContainer>
            </Container>
            </>
        );
    }
}

export default withRouter(PatientDetailsBox);