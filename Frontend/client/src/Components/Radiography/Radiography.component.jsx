import React from "react";
import {Header, Separater, ButtonSeparator, ButtonRow} from "../MedicalAssessment/MedicalElements";
import {FadedLink, RadiographyContainer, ToothBoneLossContainer} from "./Radiography.elements";
import {Button, Container} from "../../Global.Styles";
import {Switch, FormControlLabel, withStyles, Grid, TextField} from '@material-ui/core';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import {Context} from "../../ClassificationState";
import {withRouter} from 'react-router-dom';
import Popup from '../customPopup/PopupControl';
import mainDiagnosis from "../../DiagnosisLogic/mainDiagnosis";
import axios from "axios";
import "./Disclaimer.css";
import {PatientAPI} from "../API.Func/Patient";

class RadiographyComponent extends React.Component{
    static contextType = Context;

    constructor(props){
        super(props);

        this.state = {
            fileSubmit: undefined,
            AssessmentId: sessionStorage.getItem("AssessmentId"),
            boneLoss: sessionStorage.getItem("boneLoss"),
            teethLoss: sessionStorage.getItem("teethLoss"),
            periodontitis: JSON.parse(sessionStorage.getItem("periodontitis")),
            radiographyGDPStage: sessionStorage.getItem("radiographyGDPStage"),
            showPopup: false,
            doctorIdFromAuthToken: localStorage.getItem("token")
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.pageChange = this.pageChange.bind(this);

        if (this.state.periodontitis == null){
            this.state.periodontitis = false;
        }

        //BoneLoss and teethLoss are 0 by default
        if (this.state.boneLoss == null){
            this.state.boneLoss = 0;
        }

        if (this.state.teethLoss == null){
            this.state.teethLoss = 0;
        }
    }

    async componentDidMount() {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        await PatientAPI(config)

        if (!sessionStorage.getItem("AssessmentId"))
            // if no appointment created, create one and assign new patient
        {
            let Assessment = {};
            Assessment['doctorId'] = localStorage.getItem("token");
            Assessment['patientId'] = sessionStorage.getItem("PatientId");
            Assessment['AssessmentType'] = sessionStorage.getItem("AssessmentType");
            Assessment['smokingCigarettes'] = sessionStorage.getItem("smokingCigarettes");
            Assessment['DegreeOfDiabetes'] = sessionStorage.getItem("DegreeOfDiabetes");
            Assessment['ImplantStatusDropItems'] = sessionStorage.getItem("ImplantStatusDropItems");

            await axios.post(
                `https://backendaapefp.azurewebsites.net/api/assessment/`,
                Assessment,
                config
            ).then(async res => {
                this.setState({"AssessmentId": await res.data.id});
                sessionStorage.setItem("AssessmentId", await res.data.id);

                this.setState({"AssessmentDate": await res.data.date});
                sessionStorage.setItem("AssessmentDate", await res.data.date);
            })
        }

    };

    pageChange = (page) => {
        this.props.history.push(page);
    }

    removeSomeDiagnosisSessionStorage = () => {
        sessionStorage.removeItem("BSPscreeningDiagnosis");
        sessionStorage.removeItem("GingivitisDiagnosis");
        sessionStorage.removeItem("AAPscreeningDiagnosis");
        sessionStorage.removeItem("Periodontitis");
        sessionStorage.removeItem("FinalGrading");
        sessionStorage.removeItem("FinalStability");
    }

    removeComplexityFactorsSessionStorage = () => {
        sessionStorage.removeItem("collapsedBite");
        sessionStorage.removeItem("isOcculusion");
        sessionStorage.removeItem("teethDrifting");
        sessionStorage.removeItem("mobility");
        sessionStorage.removeItem("ridgeDefect");
        sessionStorage.removeItem("opposingPairs");
    }

    conditionalPopUp = () => {

        if(!(this.state.fileSubmit === undefined)){this.handleSubmit()}
        this.pageChange("/Diagnosis");

        if((((parseInt(this.state.teethLoss) > 32) || (parseInt(this.state.teethLoss) < 0)) ||
            ((parseInt(this.state.boneLoss) > 100) || (parseInt(this.state.boneLoss) < 0)) || (this.state.boneLoss === ""))){
            return(this.openPopupHandler());
        }else{
            sessionStorage.setItem("boneLoss", this.state.boneLoss);

            // Find deep sides not including wisdom teeth
            let deepSidesWithoutWisdom = mainDiagnosis.deepSidesWithoutWisdomTeeth()[0];

            if((this.context[0] === "1") && ((!deepSidesWithoutWisdom) && (sessionStorage.getItem("PatientStatus") === "Returning patient"))){
                this.removeSomeDiagnosisSessionStorage();
                sessionStorage.removeItem("FinalStaging");
                sessionStorage.setItem("Periodontitis", "Stable - No Deep Sites")
            }
            else if ((this.context[0] === "1") && (sessionStorage.getItem("ImplantStatusDropItems") !== "Yes (all teeth are implants)")){
                this.removeSomeDiagnosisSessionStorage();

                // if stage != 4 remove all complexity factors sessionStorage
                if (sessionStorage.getItem("FinalStaging") !== "4"){
                    this.removeComplexityFactorsSessionStorage();
                }

                mainDiagnosis.aapMain();

            }else if ((this.context[0] === "2") && (sessionStorage.getItem("ImplantStatusDropItems") !== "Yes (all teeth are implants)")){
                if (sessionStorage.getItem("BSPscreeningDiagnosis") === null){
                    if ((parseInt(sessionStorage.getItem("boneLoss")) === 0) && (parseInt(sessionStorage.getItem("bpeValue")) === 3)
                        && (!JSON.parse(sessionStorage.getItem("initialTherapy"))) && (sessionStorage.getItem("ImplantStatusDropItems") === "No")){
                        this.removeSomeDiagnosisSessionStorage();

                        sessionStorage.setItem("AllImplants", JSON.stringify([]));
                        sessionStorage.removeItem("FinalStaging");

                        // Preliminary Diagnosis if BPE 3 but no initial therapy been done
                        sessionStorage.setItem("BSPScreeningPrelimDiagnosis", "“There are some signs of gum" +
                            " disease present. At this stage the correct diagnosis cannot be reached. Initial " +
                            "periodontal therapy is advised and review in 3 months.“");

                    }else if ((parseInt(sessionStorage.getItem("boneLoss")) !== 0) && (parseInt(sessionStorage.getItem("bpeValue")) === 3)
                        && (!JSON.parse(sessionStorage.getItem("initialTherapy"))) && (sessionStorage.getItem("ImplantStatusDropItems") === "No")){
                        sessionStorage.removeItem("BSPScreeningPrelimDiagnosis");
                        sessionStorage.removeItem("GingivitisDiagnosis");
                        sessionStorage.removeItem("BSPscreeningDiagnosis");
                        this.pageChange("/Chart");
                        return;
                    }

                    // some implants present but Preliminary Diagnosis reached
                    else if ((parseInt(sessionStorage.getItem("boneLoss")) === 0) && (parseInt(sessionStorage.getItem("bpeValue")) === 3)
                        && (!JSON.parse(sessionStorage.getItem("initialTherapy"))) && (sessionStorage.getItem("ImplantStatusDropItems") !== "No")){
                        this.removeSomeDiagnosisSessionStorage();
                        sessionStorage.removeItem("FinalStaging");

                        // Preliminary Diagnosis if BPE 3 but no initial therapy been done
                        sessionStorage.setItem("BSPScreeningPrelimDiagnosis", "“There are some signs of gum" +
                            " disease present. At this stage the correct diagnosis cannot be reached. Initial " +
                            "periodontal therapy is advised and review in 3 months.“");
                        sessionStorage.setItem("messageForChart", JSON.stringify(true));
                        this.pageChange("/Chart");
                        return;
                    }
                    else if ((parseInt(sessionStorage.getItem("boneLoss")) !== 0) && (parseInt(sessionStorage.getItem("bpeValue")) === 3)
                        && (!JSON.parse(sessionStorage.getItem("initialTherapy"))) && (sessionStorage.getItem("ImplantStatusDropItems") !== "No")){
                        sessionStorage.removeItem("BSPScreeningPrelimDiagnosis");
                        sessionStorage.removeItem("GingivitisDiagnosis");
                        sessionStorage.removeItem("BSPscreeningDiagnosis");
                        sessionStorage.removeItem("messageForChart");
                        this.pageChange("/Chart");
                        return;
                    }
                    else{
                        mainDiagnosis.bspMain();
                    }
                }
            }else{
                this.removeSomeDiagnosisSessionStorage();
                sessionStorage.removeItem("BSPScreeningPrelimDiagnosis");

                sessionStorage.removeItem("AAPBoneLossStaging");
                this.removeComplexityFactorsSessionStorage();

            }
        }
    }


    changeState = (value, name) => {
        this.setState({[name]: value});
        sessionStorage.setItem(name, value);
    }

    setToggle = (evt, name) => {
        let toggled = false;
        if (!this.state[name]){
            toggled = true;
        }
        this.changeState(toggled, name);

        if (!(this.state.periodontitis)){
            this.clearTeethLossBox();
        }
    }

    clearTeethLossBox = () => {
        this.changeState("0", "teethLoss");
    }

    openPopupHandler = () => {
        this.setState({showPopup: true});
    }

    closePopupHandler = () => {
        this.setState({showPopup: false});
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

    // getUploadParams, handleChangeStatus, handleSubmit methods for upload of x-ray into database
    getUploadParams = ({ meta }) => {
        return {url: ''}
    }

    // called every time a file's `status` changes
    handleChangeStatus = ({ meta, file }, status) => {
        this.setState({fileSubmit: file});
    };

    handleImageUpload = async (config) =>{
        let Assessment = new FormData();
        Assessment.append('xRayImage', this.state.fileSubmit);
        await axios.post(`https://backendaapefp.azurewebsites.net/api/assessment/image/${this.state.AssessmentId}`,
            Assessment,
            config)
    }

    handleSubmit = async () => {

        const config = {
            headers: {
                "Content-Type": "application/json",
            }};

        await this.handleImageUpload(config)
    }

    render(){

        let popup = null;

        if(this.state.showPopup){
            if((parseInt(this.state.teethLoss) > 32) || (parseInt(this.state.teethLoss) < 0)){
                popup = (<Popup title='Tooth Loss Number is Beyond the Boundary' message='Please supply Tooth Loss number between 0-32' closeMe={this.closePopupHandler}/>);
            }else if ((parseInt(this.state.boneLoss) > 32) || (parseInt(this.state.boneLoss) < 0)){
                popup = (<Popup title='Bone Loss Number is Beyond the Boundary' message='Please supply Bone Loss number between 0-100' closeMe={this.closePopupHandler}/>);
            }else{
                popup = (<Popup title='Bone Loss is Empty' message='Please supply Bone Loss number between 0-100' closeMe={this.closePopupHandler}/>);
            }
        }
        return (
            <>
                <Container>
                    <RadiographyContainer>
                        <Header>Radiography</Header>

                        <Dropzone
                            onChangeStatus={this.handleChangeStatus}
                            accept="image/*"
                            maxFiles={1}
                            inputContent="Drag and Drop X-Ray Image of the Worst Case (Max 1 jpg or png)"
                            styles={{
                                dropzone: { width: "90%", height:"300px",overflow: 'auto', border: '1px dotted #999', background: '#f5f5f5', margin:"20px 10px"},
                                inputLabelWithFiles: { margin: '20px 20%', textAlign:'center' }}}>
                        </Dropzone>

                        <Separater/>
                        <ToothBoneLossContainer>
                            <Grid container spacing={1} direction="row" justify="space-between" style={{ flex: 0 }}>
                                {sessionStorage.getItem("ImplantStatusDropItems") !== "Yes (all teeth are implants)" && <>
                                    <Grid item xs={"auto"}>
                                        <this.colouredTextField id="outlined-basic" label={"Bone Loss %"}
                                                                variant="outlined" type="number"
                                                                onChange={(event)=>this.changeState(event.target.value, "boneLoss")}
                                                                defaultValue={this.state.boneLoss}/>
                                    </Grid>
                                </>}

                                {this.context[0] === "1" && <>
                                    <Grid item xs={"auto"}>
                                        <FormControlLabel
                                            control={<this.colouredSwitch checked={this.state.periodontitis}
                                                                          onChange={(value) => this.setToggle(value, "periodontitis")}/>}
                                            label="Tooth Loss Due to Periodontitis?"
                                            labelPlacement="top"/>
                                    </Grid>

                                    {this.state.periodontitis && <>
                                        <Grid item xs={"auto"}>
                                            <this.colouredTextField id="outlined-basic" label={"Teeth Lost Count"}
                                                                    variant="outlined" type="number"
                                                                    onChange={(event)=>this.changeState(event.target.value, "teethLoss")}
                                                                    defaultValue={this.state.teethLoss}/>
                                        </Grid>
                                    </>}
                                </>}
                            </Grid>
                            <Separater/>
                            <FadedLink className="disclaimerWarning">Disclaimer: Radiographic Bone Loss</FadedLink>
                        </ToothBoneLossContainer>

                        <FadedLink className="disclaimerText">Radiographic features of a normal, anatomically intact periodontium would include an intact lamina dura (both laterally and at the alveolar crest),
                            no evidence of bone loss in furcation areas, and 1-3 mm distance, on average, from the most coronal portion of the alveolar bone crest (AC) to the cementoenamel
                            junction (CEJ) (Lang and Bartold, 2018).</FadedLink>
                        <Separater/><Separater/>

                        <ButtonRow>
                            <Button onClick = {this.props.history.goBack} big fontBig= "primary">Back</Button>
                            <ButtonSeparator/>
                            <Button onClick = {()=>this.conditionalPopUp()} big fontBig= "primary">Next</Button>
                        </ButtonRow>
                    </RadiographyContainer>
                </Container>
                {popup}
            </>
        );
    }
}

export default withRouter(RadiographyComponent);