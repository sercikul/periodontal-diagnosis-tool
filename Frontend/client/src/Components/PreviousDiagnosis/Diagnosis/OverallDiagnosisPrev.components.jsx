import React from 'react';
import DiagnosisBoxComponent from "./Diagnosis.components";
import PatientSummary from "./PatientDetailsSummaryComponent";
import {ReportHeader, FormLabelReport} from "../../MedicalAssessment/MedicalElements";
import {BoldFormLabelReport} from "./Diagnosis.elements";
import {Grid} from '@material-ui/core';
import "./PrintPage.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    lname: state.auth.doctor.lname
});

class PrevDiagnosis extends React.Component{

     // Redux
     static propTypes = {
        lname: PropTypes.string
    };
    constructor(props){
        super(props)
        this.state = {
            AssessmentId: null,
            AssessmentDate: null
        }
    }

    render(){
        this.classificationArray = ["None", "AAP/EFP", "BSP"];

        if(localStorage.getItem("AssessmentDate") !== null){
            localStorage.setItem("AssessmentDate", localStorage.getItem("AssessmentDate").substring(0,10))
        }

        return (
            <>
                <ReportHeader className="report_header">Assessment Report (ID:  {localStorage.getItem("AssessmentId")})</ReportHeader>
                <Grid container spacing={1} direction="row" justify="space-evenly" alignItems="center">
                    <Grid item xs={"auto"}>
                        <BoldFormLabelReport>Clinician:</BoldFormLabelReport>
                        <FormLabelReport>Dr. {this.props.lname}</FormLabelReport>
                    </Grid>
                    <Grid item xs={"auto"}>
                        <BoldFormLabelReport>Appointment Date:</BoldFormLabelReport>
                        <FormLabelReport>{localStorage.getItem("AssessmentDate")}</FormLabelReport>
                    </Grid>
                    <Grid item xs={"auto"}>
                        <BoldFormLabelReport>Assessment Type:</BoldFormLabelReport>
                        <FormLabelReport>{this.classificationArray[parseInt(localStorage.getItem("AssessmentType"))]}</FormLabelReport>
                    </Grid>
                </Grid>
                    <PatientSummary printable = {1}/>
                    <DiagnosisBoxComponent printable = {1}/>
            </>
        )
    }
}

export default connect(mapStateToProps,null) (PrevDiagnosis);