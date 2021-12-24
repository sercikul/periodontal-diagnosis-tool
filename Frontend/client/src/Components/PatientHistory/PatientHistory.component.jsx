import React from "react";
import {PatientContainer, FormLabel, InputForm, Header, Separater, ButtonSeparator, ButtonRow} from "../MedicalAssessment/MedicalElements";
import {StyledTextArea} from "./PatientHistory.elements";
import {Button, Container} from "../../Global.Styles";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {HealthStatusDropItems, DiabetesStatusDropItems, SmokerStatusDropItems, ImplantStatusDropItems} from "./DropdownItems";
import {Checkbox} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Popup from '../customPopup/PopupControl';
import { withRouter } from 'react-router-dom';
import {Context} from "../../ClassificationState";

class PatientHistoryBox extends React.Component {

    //Getting state of the assessment
    static contextType = Context

    //Next page changing pages
    pageChange(page) {
        this.props.history.push(page);
    }

    //Alert (conditional) if the required fields are not filled in, then a popup will appear
    conditionalPopUp(){
         if ((!this.state.smokingCigarettes) || (!this.state.DegreeOfDiabetes)|| (!this.state.ImplantStatusDropItems))
         {return(this.openPopupHandler())}
        else {
            if(this.state.ImplantStatusDropItems === "No" || this.state.ImplantStatusDropItems === "Yes (Some implants present)"){
                sessionStorage.removeItem("messageForChart");
                if(this.context[0] === "2"){
                    this.pageChange('/Screening');
                }else{
                    this.pageChange('/AAPScreening');
                }
            }else{
                sessionStorage.setItem("messageForChart", JSON.stringify(true));
                this.pageChange('/chart');
            }
        }
    }

    constructor(props){
        super(props);

        this.state = {
            healthStatusSelected: sessionStorage.getItem("healthStatusSelected"),
            healthStatusDetails: sessionStorage.getItem("HealthStatusDetails"),
            DegreeOfDiabetes: sessionStorage.getItem("DegreeOfDiabetes"),
            showPopup: false,
            smokingCigarettes: sessionStorage.getItem("smokingCigarettes"),
            ImplantStatusDropItems: sessionStorage.getItem("ImplantStatusDropItems")
        };

        this.setStatus = this.setStatus.bind(this);
        this.getStatusDropdown = this.getStatusDropdown.bind(this);
        this.getHealthStatusTextArea = this.getHealthStatusTextArea.bind(this);
        this.setMedCheckbox = this.setMedCheckbox.bind(this);
        this.pageChange = this.pageChange.bind(this);
        this.conditionalPopUp = this.conditionalPopUp.bind(this);

        if (this.state.healthStatusSelected === null){
            this.state.healthStatusSelected = "Not Provided";
        }
    }

    setStatus = (value, stateKey) => {
        this.setState({[stateKey]: value});
        sessionStorage.setItem(stateKey, value);
    }

    getStatusDropdown = (dropdownState, storageKey, alDropdownItems) => {
        if (dropdownState){
            return (<Dropdown options={alDropdownItems} onChange={(event) => this.setStatus(event.value, storageKey)} 
                              placeholder={dropdownState}/>);
        }else{
            return (<Dropdown options={alDropdownItems} onChange={(event) => this.setStatus(event.value, storageKey)} 
                              placeholder={"Select an Option"}/>);
        }
    }

    getHealthStatusTextArea = () => {
        if(this.state.healthStatusDetails){
            return (<StyledTextArea onChange={(event) => this.setStatus(event.target.value.replace(/^\s+|\s+$/g,''), "HealthStatusDetails")} 
                                    defaultValue={this.state.healthStatusDetails}/>);
        }else{
            return (<StyledTextArea onChange={(event) => this.setStatus(event.target.value.replace(/^\s+|\s+$/g,''), "HealthStatusDetails")} 
                                    placeholder="Provide details about patient's health status"/>);
        }
    }

        setMedCheckbox = (event, name) => {
        let toggled = false;
        if (!this.state[name]){
            toggled = true;
        }
        this.setStatus(toggled, name);
    }

    customColouredCheckbox = withStyles({
        root: {
          color: "#193d66",
          '&$checked': {
            color: "#ac145a",
          },
        },
        checked: {}
      })((props) => <Checkbox color="default" {...props} />);
    
    closePopupHandler = () => {
        this.setState({showPopup: false});
    }

    openPopupHandler = () => {
        this.setState({showPopup: true});
    }

    render(){
        let popup = null;

        if(this.state.showPopup){
            if (
                (!this.state.smokingCigarettes) &&
                (!this.state.DegreeOfDiabetes) &&
                (!this.state.ImplantStatusDropItems)
            ){
                popup = (<Popup title='The Degree of Diabetes, Smoking and other dropdown menus are required'
                                message='Please supply Degree of Diabetes and Smoking other dropdown menus'
                                closeMe={this.closePopupHandler}/>);
            }else if((!this.state.smokingCigarettes) && (!this.state.DegreeOfDiabetes)){
                popup = (<Popup title='The Degree of Smoking and Degree of Diabetes is required'
                                message='Please supply Degree of Smoking and Degree of Diabetes to continue' closeMe={this.closePopupHandler}/>);
            }else if((!this.state.smokingCigarettes) && (!this.state.ImplantStatusDropItems)){
                popup = (<Popup title='The Degree of Smoking and Implant Presence Status is required'
                                message='Please supply Degree of Smoking and Implant Presence Status to continue' closeMe={this.closePopupHandler}/>);
            }else if((!this.state.DegreeOfDiabetes) && (!this.state.ImplantStatusDropItems)){
                popup = (<Popup title='The Degree of Diabetes and Implant Presence Status is required'
                                message='Please supply Degree of Diabetes and Implant Presence Status to continue' closeMe={this.closePopupHandler}/>);
            }else if (!this.state.smokingCigarettes){
                popup = (<Popup title='The Degree of Smoking is required'
                                message='Please supply Degree of Smoking to continue' closeMe={this.closePopupHandler}/>);
            }else if (!this.state.DegreeOfDiabetes){
                popup = (<Popup title='The Degree of Diabetes is required'
                                message='Please supply Degree of Diabetes to continue' closeMe={this.closePopupHandler}/>);
            }else if (!this.state.ImplantStatusDropItems) {popup = (<Popup title='Implant Presence Status is required'
                          message='Please supply Presence of implants to continue' closeMe={this.closePopupHandler}/>)}
            else return false
        }

        return (
            <>
            <Container>
            <PatientContainer>
                <InputForm>
                    <Header>Patient History</Header>

                    <FormLabel>Health Status:</FormLabel>
                    <Separater/>
                    {this.getStatusDropdown(this.state.healthStatusSelected, "healthStatusSelected", HealthStatusDropItems)}

                    <FormLabel>Details:</FormLabel>
                    <Separater/>
                    {this.getHealthStatusTextArea()}

                    <FormLabel>Is Patient a Smoker?*</FormLabel>
                    <Separater/>
                    {this.getStatusDropdown(this.state.smokingCigarettes, "smokingCigarettes", SmokerStatusDropItems)}

                    <FormLabel>Does Patient have Diabetes?*</FormLabel>
                    <Separater/>
                    {this.getStatusDropdown(this.state.DegreeOfDiabetes, "DegreeOfDiabetes", DiabetesStatusDropItems)}

                    <FormLabel>Does Patient have any Implants?*</FormLabel>
                    <Separater/>
                    {this.getStatusDropdown(this.state.ImplantStatusDropItems, "ImplantStatusDropItems", ImplantStatusDropItems)}


                </InputForm>

                <ButtonRow>
                    <Button big fontBig= "primary" onClick={this.props.history.goBack}>Back</Button>
                    <ButtonSeparator/>
                    <Button big fontBig= "primary" onClick={()=>{this.conditionalPopUp()}}>Next</Button>
                </ButtonRow>
            </PatientContainer>
            </Container>
            {popup}
            </>
        );
    }
}

export default withRouter(PatientHistoryBox);