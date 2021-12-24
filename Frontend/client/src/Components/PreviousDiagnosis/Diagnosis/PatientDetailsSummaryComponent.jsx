import React from 'react';
import {Header, FormLabel} from "../../MedicalAssessment/MedicalElements";
import {BoldFormLabel, DiagnosisContainer} from "./Diagnosis.elements";
import {Grid} from '@material-ui/core';
import "./PrintPage.css";


class PatientSummary extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            patientFirstName: localStorage.getItem("firstName"),
            patientLastName: localStorage.getItem("lastName"),
            patientDateOfBirth: localStorage.getItem("dobDate"),
            patientMrnCode: localStorage.getItem('mrnCode'),
            patientHealthStatusSelected: localStorage.getItem('healthStatusSelected'),
            patientSmokingCigarettes: localStorage.getItem('smokingCigarettes'),
            patientSubControlledDiabetes: localStorage.getItem('isDiabetes'),
            patientDegreeOfDiabetes: localStorage.getItem('DegreeOfDiabetes'),
            patientHealthStatusDetails: localStorage.getItem('HealthStatusDetails'),
            implantStatus: localStorage.getItem("ImplantStatusDropItems"),
            AssessmentFeedback: localStorage.getItem("AssessmentFeedback")
        }

        Object.keys(this.state).map((key) => {
            if ((this.state[key] == null) || (this.state[key] === "")){
                this.state[key] = "Not Provided";
            }
        });
        this.today = new Date();
    }

    render(){
        if (this.state.patientDateOfBirth !== "Not Provided"){
            this.patientDateOfBirth = new Date(this.state.patientDateOfBirth);
            let calculatedAge = (((this.today.getTime())-(this.patientDateOfBirth.getTime()))/(1000 * 60 * 60 * 24 * 365));
            if (calculatedAge >= 1){
                this.age = Math.round(calculatedAge);
            }else{
                this.age = calculatedAge.toPrecision(1);
            }
            
        }else{
            this.patientDateOfBirth = "Not Provided";
            localStorage.setItem("patientDateOfBirth", "Not Provided");
        }
        return (
            <>
            <DiagnosisContainer style={this.props.printable === 1 ? ({ border: 'none', borderRadius: 'none', boxShadow: 'none', padding: 'none', marginTop: '5%'}) : null}>
                <Header style={this.props.printable === 1 ? { fontSize: '24px' } : null}>Patient Summary</Header>
                <Grid container spacing={1} direction="row" justify="space-between" style={{ flex: 1 }}>

                    {this.state.patientFirstName !== "Not Provided" && <>
                        <Grid item xs={6}>
                            <BoldFormLabel  style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>First Name:</BoldFormLabel>
                        </Grid>
                        <Grid>
                            <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{this.state.patientFirstName}</FormLabel>
                        </Grid>
                    </>}

                    {this.state.patientLastName !== "Not Provided" && <>
                        <Grid item xs={6}>
                            <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Last Name:</BoldFormLabel>
                        </Grid>
                        <Grid>
                            <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{this.state.patientLastName}</FormLabel>
                        </Grid>
                    </>}

                    {this.state.patientMrnCode !== "Not Provided" && <>
                        <Grid item xs={6}>
                            <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>MRN:</BoldFormLabel>
                        </Grid>

                        <Grid>
                            <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{this.state.patientMrnCode}</FormLabel>
                        </Grid>
                    </>}

                    {this.state.patientDateOfBirth !== "Not Provided" && <>
                        <Grid item xs={6}>
                            <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>DOB:</BoldFormLabel>
                        </Grid>

                        <Grid>
                            {(this.age >= 0) && (this.patientDateOfBirth !== "Not Provided")
                                ? <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{this.patientDateOfBirth.getDate()+"/"+
                                            this.patientDateOfBirth.toLocaleString('en-us', {month: 'short'})+"/"+
                                            this.patientDateOfBirth.getFullYear()}</FormLabel>
                                : <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Not Provided/Possible</FormLabel>}
                        </Grid>
                    </>}

                    {this.patientDateOfBirth !== "Not Provided" && <>
                        <Grid item xs={6}>
                            <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Age:</BoldFormLabel>
                        </Grid>

                        <Grid>
                            {(this.age <= 0) || (this.patientDateOfBirth === "Not Provided")
                                ? <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Not Provided/Possible</FormLabel>
                                : (this.age < 1)
                                    ? <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Less than one years old</FormLabel>
                                    : <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{this.age + " years"}</FormLabel>}
                        </Grid>
                    </>}

                    {this.props.printable != "1" && <>
                    <Grid item xs={6}>
                        <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Appointment Date:</BoldFormLabel>
                    </Grid>
                    <Grid>
                        <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{this.today.getDate()+"/"+
                                    this.today.toLocaleString('en-us', {month: 'short'})+"/"+
                                    this.today.getFullYear()}</FormLabel>
                    </Grid>
                    </>}

                    {this.state.patientHealthStatusSelected !== "Not Provided" && <>
                        <Grid item xs={6}>
                            <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Health Status:</BoldFormLabel>
                        </Grid>

                        <Grid>
                            {(this.patientHealthStatusSelected === "Not Provided")
                                ? <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Not Provided</FormLabel>
                                : <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{this.state.patientHealthStatusSelected}</FormLabel>}
                        </Grid>
                    </>}

                    {this.state.patientSmokingCigarettes !== "Not Provided" && <>
                        <Grid item xs={6}>
                            <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Degree of Smoking:</BoldFormLabel>
                        </Grid>

                        <Grid>
                            <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{this.state.patientSmokingCigarettes}</FormLabel>
                        </Grid> 
                    </>}
                    
                    {this.state.patientDegreeOfDiabetes !== "Not Provided" && <>
                        <Grid item xs={6}>
                            <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Degree of Diabetes:</BoldFormLabel>
                        </Grid>

                        <Grid>
                            <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{this.state.patientDegreeOfDiabetes}</FormLabel>
                        </Grid>
                    </>}

                    {this.state.patientSubControlledDiabetes !== "Not Provided" && <>
                        <Grid item xs={6}>
                            <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Diabetes Sub-Optimally Controlled:</BoldFormLabel>
                        </Grid>

                        <Grid>
                            {(this.patientSubControlledDiabetes)
                                    ? <FormLabel>Yes</FormLabel>
                                    : <FormLabel>No</FormLabel>}
                        </Grid>
                    </>}
                    
                    {this.state.patientHealthStatusDetails !== "Not Provided" && <>
                        <Grid item xs={6}>
                            <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Extra Health Details:</BoldFormLabel>
                        </Grid>

                        <Grid>
                            {(this.patientHealthStatusDetails === "Not Provided")
                                ? <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Not Provided</FormLabel>
                                : <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{this.state.patientHealthStatusDetails}</FormLabel>}
                        </Grid>
                    </>}

                    {this.state.implantStatus !== "Not Provided" && <>
                        <Grid item xs={6}>
                            <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Patient Implant Status:</BoldFormLabel>
                        </Grid>

                        <Grid>
                            <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{this.state.implantStatus}</FormLabel>
                        </Grid>
                    </>}

                    {this.state.AssessmentFeedback !== "Not Provided" && <>
                        <Grid item xs={6}>
                            <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Assessment Feedback:</BoldFormLabel>
                        </Grid>

                        <Grid>
                            <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{this.state.AssessmentFeedback}</FormLabel>
                        </Grid>
                    </>}
                </Grid>
                
            </DiagnosisContainer>
            </>
        );
    }
}

export default PatientSummary;