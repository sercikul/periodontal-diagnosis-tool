import React from "react";
import {PatientContainer, InputForm, Header, Separater, ButtonSeparator, ButtonRow} from "../MedicalAssessment/MedicalElements";
import {FormLabel} from "./AAPScreening.elements"
import {Button, Container} from "../../Global.Styles";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {PatientStatus, detectableMarginalBoneLoss, CAL, buccalOrOralRecession, BOPAAPScreening} from "./DropdownItems";
import {Checkbox} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Popup from '../customPopup/PopupControl';
import { withRouter } from 'react-router-dom';
import {Context} from "../../ClassificationState";
import {FadedLink} from "../LoginRegister/LoginRegister.elements";

class AAPScreening extends React.Component {
    static contextType = Context

    //Next page changing pages
    pageChange(page) {
        this.props.history.push(page);
    }

    //Alert (conditional) if the required fields are not filled in, then a popup will appear
    conditionalPopUp(){
        sessionStorage.removeItem("messageForChart");
         if (
            (this.state.PatientStatus === "New patient") &&
            (this.state.detectableMarginalBoneLoss === "No/Not sure") &&
            (this.state.CAL === "No") &&
            (this.state.buccalOrOralRecession === "No") &&
             (this.state.BOPAAPScreening !== null)
         )
          {
            if (sessionStorage.getItem("ImplantStatusDropItems") === "No"){
                this.checks('/Diagnosis');
            }else{
                sessionStorage.setItem("messageForChart", JSON.stringify(true));
                this.checks("/Chart");
            }
          }

         else if(
             (this.state.PatientStatus === "New patient") &&
             (this.state.detectableMarginalBoneLoss === "No/Not sure") &&
             (this.state.CAL === "No") &&
             (this.state.buccalOrOralRecession === "Yes")
         )
         {this.checks('/chart')}

         else if(
             (this.state.PatientStatus === "New patient") &&
             (this.state.detectableMarginalBoneLoss === "No/Not sure") &&
             (this.state.CAL === "Yes")
         )
         {this.checks('/chart')}

         else if(
             (this.state.PatientStatus === "New patient") &&
             (this.state.detectableMarginalBoneLoss === "Yes")
         )
         {this.checks('/chart')}

         else if(this.state.PatientStatus === "Returning patient"){
            sessionStorage.removeItem("BSPScreeningPrelimDiagnosis");
            sessionStorage.removeItem("detectableMarginalBoneLoss");
            sessionStorage.removeItem("CAL");
            sessionStorage.removeItem("buccalOrOralRecession");
            sessionStorage.removeItem("BOPAAPScreening");
            this.checks('/chart')
        }
         else(this.openPopupHandler())
    }

    removeChartSessionStorage = () => {
        let allTeethAndImplants = ["11", "12", "13", "14", "15", "16", "17", "18", "21", "22", "23", "24", "25", "26", "27", "28", "31", "32", "33", "34", "35", "36", "37", "38",
                                   "41", "42", "43", "44", "45", "46", "47", "48", 
                                   "i11", "i12", "i13", "i14", "i15", "i16", "i17", "i18", "i21", "i22", "i23", "i24", "i25", "i26", "i27", "i28", "i31", "i32", "i33", "i34", "i35", "i36", "i37", 
                                   "i38", "i41", "i42", "i43", "i44", "i45", "i46", "i47", "i48"];
                                  
        allTeethAndImplants.forEach(element => {
            sessionStorage.removeItem(element);
        });
    }

    checks = (page) => {
        // Gingivitis diagnosis
        if ((page === "/Diagnosis") || (sessionStorage.getItem("messageForChart") === "true")){
            if (this.state.BOPAAPScreening === "<10%"){
                sessionStorage.setItem("AAPscreeningDiagnosis", "Clinical Gingival Health");
            }else if (this.state.BOPAAPScreening === "10<= BOP <=30%"){
                sessionStorage.setItem("AAPscreeningDiagnosis", "Localised Gingivitis");
            }else{
                sessionStorage.setItem("AAPscreeningDiagnosis", "Generalised Gingivitis");
            }
            sessionStorage.removeItem("GingivitisDiagnosis");
            sessionStorage.removeItem("Periodontitis");
            sessionStorage.removeItem("FinalStaging");
            sessionStorage.removeItem("FinalGrading");
            sessionStorage.removeItem("FinalStability");

            this.removeChartSessionStorage();
            this.pageChange(page);
        }else{
            sessionStorage.removeItem("AAPscreeningDiagnosis");
            this.pageChange(page);
        }
    }

    constructor(props){
        super(props);

        this.state = {
            PatientStatus: sessionStorage.getItem("PatientStatus"),
            detectableMarginalBoneLoss: sessionStorage.getItem("detectableMarginalBoneLoss"),
            CAL: sessionStorage.getItem('CAL'),
            buccalOrOralRecession: sessionStorage.getItem('buccalOrOralRecession'),
            BOPAAPScreening: sessionStorage.getItem('BOPAAPScreening'),
            showPopup: false,
        };

        this.setStatus = this.setStatus.bind(this);
        this.getStatusDropdown = this.getStatusDropdown.bind(this);
        this.pageChange = this.pageChange.bind(this);
        this.conditionalPopUp = this.conditionalPopUp.bind(this);
        this.checks = this.checks.bind(this);
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

            if (!this.state.PatientStatus) {
                popup = (<Popup title='Specify patient status'
                                message='Please specify whether the patient is a new patient or a returning patient'
                                closeMe={this.closePopupHandler}/>);
            }

            else if(!this.state.detectableMarginalBoneLoss && this.state.PatientStatus === "New patient") {
                popup = (<Popup title='Specify bone loss'
                                message='Please specify whether a patient has any signs of detectable marginal
                                bone loss in any area of the dentition'
                                closeMe={this.closePopupHandler}/>)
            }

            else if(!this.state.CAL && this.state.detectableMarginalBoneLoss === "No/Not sure") {
                popup = (<Popup title='Specify recession'
                                message='Please specify whether a patient has any signs
                                of buccal or oral recession (CAL ≥ 3mm) with probing pocket
                                depths 3mm at two or more non-adjacent teeth'
                                closeMe={this.closePopupHandler}/>)
            }

            else if(!this.state.buccalOrOralRecession && this.state.CAL === "No") {
                popup = (<Popup title='Specify recession'
                                message='Please specify whether a patient has any signs
                                of buccal or oral recession (CAL ≥ 3mm) with probing pocket
                                depths 3mm at two or more non-adjacent teeth'
                                closeMe={this.closePopupHandler}/>)
            }

            else if(!this.state.BOPAAPScreening && this.state.buccalOrOralRecession === "No") {
                popup = (<Popup title='Specify Bleeding on Probing (BOP)'
                                message='Please specify whether a patient has any signs
                                of buccal or oral recession (CAL ≥ 3mm) with probing pocket
                                depths 3mm at two or more non-adjacent teeth'
                                closeMe={this.closePopupHandler}/>)
            }

        }

        return (
            <>
            <Container>
            <PatientContainer>
                <InputForm>
                    <Header>Screening</Header>


                    {/*Returning/New patient*/}
                    <FormLabel>Is this a new patient assessment?*</FormLabel>
                    <Separater/>
                    {this.getStatusDropdown(this.state.PatientStatus,
                        "PatientStatus", PatientStatus)}

                    {/*Bone loss based on X-Ray*/}
                    {(this.state.PatientStatus === "New patient") ? (
                        <>
                            <Separater/>
                            <FormLabel>In the presence of the full mouth radiographs<br/> of diagnostic quality,
                                is there detectable marginal<br/> bone loss in any area of the dentition?*</FormLabel>
                            <Separater/>
                            {this.getStatusDropdown(this.state.detectableMarginalBoneLoss,
                                "detectableMarginalBoneLoss", detectableMarginalBoneLoss)}
                        </>
                    ):null
                    }

                    {/*CAL*/}
                    {(this.state.PatientStatus === "New patient") &&
                    (this.state.detectableMarginalBoneLoss === "No/Not sure") ?
                        (
                        <>
                        <Separater/>
                        <FormLabel>
                        Based on your clinical assessment, is there any signs<br/>
                        of interdental clinical attachment loss (CAL)<br/>
                        at 2 or more interproximal sites of non-adjacent teeth?*
                        </FormLabel>
                        <FadedLink>
                        (*TIP: Look out for visible CEJ or root showing in the interdental space.<br/>
                        Do not take into account the presence of CAL on the distal aspect <br/>
                        of a second molar associated with malposition or extracted third molar.)
                        </FadedLink>
                        <Separater/>
                        {this.getStatusDropdown(this.state.CAL, "CAL", CAL)}
                        </>
                        ) : null
                    }


                    {/*Recession*/}
                    {(this.state.PatientStatus === "New patient") &&
                     (this.state.detectableMarginalBoneLoss === "No/Not sure") &&
                     (this.state.CAL === "No") ?

                        (
                            <>
                            <Separater/>
                             <FormLabel>
                                Based on your clinical assessment, are there any signs <br/>
                                of buccal or oral recession (CAL ≥ 3mm) with probing pocket<br/>
                                depths 3mm at two or more non-adjacent teeth?
                            </FormLabel>
                            <FadedLink>
                                (*TIP: Do not take into account non-periodontitis related<br/>
                                causes such as gingival recession of traumatic origin,<br/>
                                cervical caries, endodontic lesion etc.)
                            </FadedLink>
                            <Separater/>
                            {this.getStatusDropdown(this.state.buccalOrOralRecession,
                                "buccalOrOralRecession", buccalOrOralRecession)}
                            </>
                        ) : null
                    }

                    {/*BOP*/}

                    {(this.state.PatientStatus === "New patient") &&
                     (this.state.detectableMarginalBoneLoss === "No/Not sure") &&
                     (this.state.CAL === "No") &&
                     (this.state.buccalOrOralRecession === "No") ?
                        (
                            <>
                                <Separater/>
                                <FormLabel>
                                    Bleeding on Probing % (BOP)
                                </FormLabel>
                                <Separater/>
                                {this.getStatusDropdown(this.state.BOPAAPScreening,
                                    "BOPAAPScreening", BOPAAPScreening)}
                            </>
                        ):null}
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

export default withRouter(AAPScreening);