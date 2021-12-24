import React from "react";
import {PatientContainer, Header, FormLabel, InputForm, Separater, IndicatorText, ButtonRow, ButtonSeparator} from "../MedicalAssessment/MedicalElements";
import {Button, Container} from "../../Global.Styles";
import {Switch, FormControlLabel, withStyles, TextField} from "@material-ui/core";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {withRouter} from 'react-router-dom';
import {Context} from "../../ClassificationState";
import Popup from '../customPopup/PopupControl';

class ScreeningComponent extends React.Component{
    static contextType = Context
    constructor(props){
        super(props);

        this.state = {
            isEvidence: JSON.parse(sessionStorage.getItem("isEvidence")),
            bopValue: sessionStorage.getItem("bopValue"),
            bpeValue: sessionStorage.getItem("bpeValue"),
            initialTherapy: JSON.parse(sessionStorage.getItem("initialTherapy")),
            screeningStage: sessionStorage.getItem("screeningStage"),
            screeningPeriodontitis: JSON.parse(sessionStorage.getItem("screeningPeriodontitis")),
            BSPscreeningDiagnosis: sessionStorage.getItem("BSPscreeningDiagnosis"),
            teethLoss: sessionStorage.getItem("teethLoss"),
            ImplantStatusDropItems: sessionStorage.getItem("ImplantStatusDropItems"),
            BSPCalLoss: JSON.parse(sessionStorage.getItem("BSPCalLoss")),
            showPopup: false
        }

        this.setNewToggleState = this.setNewToggleState.bind(this);
        this.clearBoxes = this.clearBoxes.bind(this);
        this.pageChange = this.pageChange.bind(this);
        this.checks = this.checks.bind(this);
        this.messageForChart = this.messageForChart.bind(this);

        if (this.state.screeningStage == null){
            this.state.screeningStage = "0";
        }
        if (this.state.isEvidence == null){
            this.state.isEvidence = false;
        }
        if (this.state.initialTherapy == null){
            this.state.initialTherapy = false;
        }
        if (this.state.screeningPeriodontitis == null) {
            this.state.screeningPeriodontitis = false;
        }
        if (this.state.BSPCalLoss == null) {
            this.state.BSPCalLoss = false;
        }

    }

    pageChange = (page) => {
        this.props.history.push(page);
    }

    messageForChart = () => {
        if(((parseInt(this.state.bpeValue) <= 2) && (!this.state.initialTherapy)) &&
            ((!this.state.screeningPeriodontitis) && (!this.state.BSPCalLoss) && (!this.state.isEvidence))){
            sessionStorage.setItem("messageForChart", JSON.stringify(true));
        }else{
            sessionStorage.setItem("messageForChart", JSON.stringify(false));
        }
    }

    openPopupHandler = () => {
        this.setState({showPopup: true});
    }

    closePopupHandler = () => {
        this.setState({showPopup: false});
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

    checks = () => {
        if ((parseInt(this.state.teethLoss) > 32) || (parseInt(this.state.teethLoss) < 0)){
            return(this.openPopupHandler());
        }

        if (this.state.screeningPeriodontitis){
            // go to chart
            sessionStorage.removeItem("BSPscreeningDiagnosis");
            sessionStorage.removeItem("BSPCalLoss");
            sessionStorage.removeItem("messageForChart");
            sessionStorage.removeItem("bpeValue");
            sessionStorage.removeItem("initialTherapy");
            sessionStorage.removeItem("bopValue");
            sessionStorage.removeItem("boneLoss");
            sessionStorage.removeItem("BSPScreeningPrelimDiagnosis");
            this.setState({screeningStage: "4"});
            sessionStorage.setItem("screeningStage", "4");
            this.pageChange("/chart");
        } else if (this.state.BSPCalLoss){
            // go to chart
            sessionStorage.removeItem("BSPscreeningDiagnosis");
            sessionStorage.removeItem("screeningPeriodontitis");
            sessionStorage.removeItem("teethLoss");
            sessionStorage.removeItem("messageForChart");
            sessionStorage.removeItem("screeningStage");
            sessionStorage.removeItem("bpeValue");
            sessionStorage.removeItem("initialTherapy");
            sessionStorage.removeItem("bopValue");
            sessionStorage.removeItem("boneLoss");
            sessionStorage.removeItem("BSPScreeningPrelimDiagnosis");
            this.pageChange("/chart");
        } else if (this.state.isEvidence){
            // go to chart
            sessionStorage.removeItem("BSPscreeningDiagnosis");
            sessionStorage.removeItem("screeningPeriodontitis");
            sessionStorage.removeItem("BSPCalLoss");
            sessionStorage.removeItem("teethLoss");
            sessionStorage.removeItem("messageForChart");
            sessionStorage.removeItem("screeningStage");
            sessionStorage.removeItem("bpeValue");
            sessionStorage.removeItem("initialTherapy");
            sessionStorage.removeItem("bopValue");
            sessionStorage.removeItem("boneLoss");
            sessionStorage.removeItem("BSPScreeningPrelimDiagnosis");
            this.pageChange("/chart");

        }else{
            if((!this.state.bpeValue || !this.state.bopValue) || ((this.state.bpeValue === "None") || ((this.state.bopValue === "None") && (this.state.bpeValue !== "3")))) {return(this.openPopupHandler())} 
            else {
                if ((parseInt(this.state.bpeValue) <= 2) && (this.state.bopValue !== null)){
                let diagnosis = "";
                if (this.state.bopValue === "<10%"){
                    diagnosis = "Clinical Gingival Health";
                }else if(this.state.bopValue === "10-30%"){
                    diagnosis = "Localised Gingivitis";
                }else if (this.state.bopValue === ">30%"){
                    diagnosis = "Generalised Gingivitis";
                }else{
                    this.openPopupHandler();
                    return;
                }

                sessionStorage.removeItem("screeningStage");
                sessionStorage.removeItem("screeningPeriodontitis");
                sessionStorage.removeItem("BSPCalLoss");
                sessionStorage.removeItem("teethLoss");
                sessionStorage.removeItem("boneLoss");

                sessionStorage.removeItem("GingivitisDiagnosis");
                sessionStorage.removeItem("BSPscreeningDiagnosis");
                sessionStorage.removeItem("BSPScreeningPrelimDiagnosis");
                sessionStorage.removeItem("Periodontitis");
                sessionStorage.removeItem("FinalStaging");
                sessionStorage.removeItem("FinalGrading");
                sessionStorage.removeItem("FinalStability");
                
                if (this.state.ImplantStatusDropItems === "No"){
                    sessionStorage.removeItem("boneLoss");
                    this.setState({BSPscreeningDiagnosis: diagnosis});
                    sessionStorage.setItem("BSPscreeningDiagnosis", diagnosis);

                    //Redirect to diagnosis if only teeth are present
                    //And remove all sessionstorage for chart if it exists
                    this.removeChartSessionStorage();
                    this.pageChange("/Diagnosis");
                }else{
                    sessionStorage.removeItem("boneLoss");
                    this.setState({BSPscreeningDiagnosis: diagnosis});
                    sessionStorage.setItem("BSPscreeningDiagnosis", diagnosis);
                    this.messageForChart();
                    this.pageChange("/chart");
                }

            }else if (parseInt(this.state.bpeValue) === 3){
                if (this.state.initialTherapy){
                    // go to chart
                    sessionStorage.removeItem("BSPscreeningDiagnosis");
                    sessionStorage.removeItem("screeningStage");
                    sessionStorage.removeItem("screeningPeriodontitis");
                    sessionStorage.removeItem("BSPCalLoss");
                    sessionStorage.removeItem("teethLoss");
                    sessionStorage.removeItem("messageForChart");
                    sessionStorage.removeItem("boneLoss");

                    sessionStorage.removeItem("GingivitisDiagnosis");
                    sessionStorage.removeItem("BSPScreeningPrelimDiagnosis");
                    sessionStorage.removeItem("Periodontitis");
                    sessionStorage.removeItem("FinalStaging");
                    sessionStorage.removeItem("FinalGrading");
                    sessionStorage.removeItem("FinalStability");
                    this.pageChange("/chart");
                }else{
                    // go to radiography or chart
                    sessionStorage.removeItem("BSPscreeningDiagnosis");
                    sessionStorage.removeItem("screeningPeriodontitis");
                    sessionStorage.removeItem("BSPCalLoss");
                    sessionStorage.removeItem("screeningStage");
                    sessionStorage.removeItem("teethLoss");
                    sessionStorage.removeItem("messageForChart");
                    sessionStorage.removeItem("boneLoss");

                    // preliminary diagnosis -
                    // Diagnosis:“There are some signs of gum disease present. At this stage the correct diagnosis
                    // cannot be reached. Initial periodontal therapy is advised and review in 3 months

                    // Remove all chart sessionStorage if it exists
                    this.removeChartSessionStorage();
                    this.pageChange("/Radiography");
                }
            }else if (this.state.bpeValue === "4"){
                // go to chart
                sessionStorage.removeItem("BSPscreeningDiagnosis");
                sessionStorage.removeItem("screeningStage");
                sessionStorage.removeItem("screeningPeriodontitis");
                sessionStorage.removeItem("BSPCalLoss");
                sessionStorage.removeItem("teethLoss");
                sessionStorage.removeItem("messageForChart");
                sessionStorage.removeItem("boneLoss");
                this.pageChange("/chart");
                }
            }
        }
    }

    setNewToggleState = (evt, name) => {
        let toggled = false;
        if (!this.state[name]){
            toggled = true;
        }
        this.setStatus(toggled, name);

        if ((name === "isEvidence") && (!this.state.isEvidence)){
            this.clearBoxes();
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

    clearBoxes = () => {
        this.setStatus("Select an Option", "bopValue");
        this.setStatus("Select an Option", "bpeValue");
        this.setStatus(false, "initialTherapy");
    }

    colouredSwitch = withStyles({
        switchBase: {
          color: "#193d66",
          '&$checked': {
            color: "#ac145a",
          },
          '&$checked + $track': {
            backgroundColor: "#ac145a",
          },
        },
        checked: {},
        track: {}
    })(Switch);

    colouredTextField = withStyles({
        root: {
            '& label.Mui-focused': {
                color: '#193d66',
                width: 150
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#193d66',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#193d66',
                },
                '&:hover fieldset': {
                    borderColor: '#193d66',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#193d66',
                },
            },
        },
    })(TextField);

    render(){

        let popup = null;
        if(this.state.showPopup){
            if((parseInt(this.state.teethLoss) > 32) || (parseInt(this.state.teethLoss) < 0)){
                popup = (<Popup title='Tooth Loss Number is Beyond the Boundary' message='Please supply Tooth Loss number between 0-32' closeMe={this.closePopupHandler}/>);
            }
            if ((!this.state.bpeValue && !this.state.bopValue) || ((this.state.bpeValue === "None") && (this.state.bopValue === "None"))) {
                popup = (<Popup title='Invalid Form' message='Please provide BPE score and specify extent of BOP'
                                closeMe={this.closePopupHandler}/>)
            }

            else if((!this.state.bpeValue) || (this.state.bpeValue === "None")) {popup = (<Popup title='Invalid Form' message='Please provide BPE score'
                                                           closeMe={this.closePopupHandler}/>)
            }

            else if((!this.state.bopValue) || (this.state.bopValue === "None")) {popup = (<Popup title='Invalid Form' message='Please specify extent of BOP'
                                                           closeMe={this.closePopupHandler}/>)
            }
        }

        return (
            <>
            <Container>
                <PatientContainer>
                    <InputForm>
                        <Header>Screening</Header>
                        <FormControlLabel
                            control={<this.colouredSwitch checked={this.state.screeningPeriodontitis} 
                                                          onChange={(value) => this.setNewToggleState(value, "screeningPeriodontitis")}/>}
                            label="Tooth Loss Due to Periodontitis?"
                            labelPlacement="top"/>

                        <Separater/>

                        {(this.state.screeningPeriodontitis) ? (
                            <>
                                <this.colouredTextField id="outlined-basic" label={"Teeth Lost Count"}
                                                    variant="outlined" type="number"
                                                    onChange={(event)=>this.setStatus(event.target.value, "teethLoss")}
                                                    defaultValue={this.state.teethLoss}/>
                            </>
                        ):null}

                        <Separater/>

                        {(!this.state.screeningPeriodontitis) ? (
                            <>
                                <FormControlLabel control={<this.colouredSwitch checked={this.state.BSPCalLoss}
                                                          onChange={(value) => this.setNewToggleState(value, "BSPCalLoss")}/>}
                                label="Evidence of interdental CAL loss?"
                                labelPlacement="top"/>
                            </>
                        ):null}

                        <Separater/>

                        {(!this.state.BSPCalLoss && !this.state.screeningPeriodontitis) ? (
                            <>
                                <FormControlLabel control={<this.colouredSwitch checked={this.state.isEvidence} 
                                                          onChange={(value) => this.setNewToggleState(value, "isEvidence")}/>}
                                label="Is there evidence of historic Periodontitis?"
                                labelPlacement="top"/>
                            </>
                        ):null}

                        <Separater/>

                        {(!this.state.isEvidence && !this.state.BSPCalLoss && !this.state.screeningPeriodontitis) ? (
                            <>
                                <FormLabel>BPE</FormLabel>

                                {this.getStatusDropdown(this.state.bpeValue, "bpeValue", ["None","0","1","2","3","4"])}
                                <Separater/>

                                <FormLabel>BOP</FormLabel>
                                {this.getStatusDropdown(this.state.bopValue, "bopValue", ["None","<10%", "10-30%", ">30%"])}
                                <Separater/>

                                <FormControlLabel
                                    control={<this.colouredSwitch checked={this.state.initialTherapy}
                                                                onChange={(value) => this.setNewToggleState(value, "initialTherapy")}/>}
                                    label="Has the Patient received initial Periodontal therapy?"
                                    labelPlacement="top"/>
                            </>
                        ):null}
                        
                        <Separater/>
                        <IndicatorText>*Toggle Switch if true</IndicatorText>
                        
                    </InputForm>
                    <ButtonRow>
                            <Button onClick={this.props.history.goBack} big fontBig= "primary">Back</Button>
                            <ButtonSeparator/>
                            <Button onClick={()=>this.checks()} big fontBig= "primary">Next</Button>
                    </ButtonRow>
                </PatientContainer>
                {popup}
            </Container>
            </>
        );
    }
}

export default withRouter(ScreeningComponent);