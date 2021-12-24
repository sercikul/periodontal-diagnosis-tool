import React from 'react';
import DiagnosisBoxComponent from "./Diagnosis.components";
import PatientSummary from "./PatientDetailsSummaryComponent";
import ButtonsBoxComponent from "./DiagnosisButtons.components";
import ChartComponent from "../Periodontal Chart/Chart";
import ChartSummary from "./ChartSummary";
import {ReportHeader, FormLabelReport} from "../MedicalAssessment/MedicalElements";
import {BoldFormLabelReport} from "./Diagnosis.elements";
import {Grid} from '@material-ui/core';
import "./PrintPage.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AssessmentAPI} from "../API.Func/Assessments";
import {PatientAPI} from "../API.Func/Patient";

const mapStateToProps = state => ({
    lname: state.auth.doctor.lname
});

class Diagnosis extends React.Component{

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

    async componentDidMount() {

        console.log("Component mounted on Diagnosis!")
        await PatientAPI()
        const {id,date} = await AssessmentAPI()
        this.setState({"AssessmentId": id});
        this.setState({"AssessmentDate": date});

    };
    render(){
        this.classificationArray = ["None", "AAP/EFP", "BSP"];

        if(sessionStorage.getItem("AssessmentDate") !== null){
            sessionStorage.setItem("AssessmentDate", sessionStorage.getItem("AssessmentDate").substring(0,10))
        }

        return (
            <>
                <div className="no_print">
                    <ButtonsBoxComponent/>
                    <PatientSummary/>
                    <DiagnosisBoxComponent/>
                </div>
                <div className="print_this">
                    <ReportHeader className="report_header">Assessment Report (ID:  {sessionStorage.getItem("AssessmentId")})</ReportHeader>
                    <Grid container spacing={1} direction="row" justify="space-evenly" alignItems="center">
                        <Grid item xs={"auto"}>
                            <BoldFormLabelReport>Clinician:</BoldFormLabelReport>
                            <FormLabelReport>Dr. {this.props.lname}</FormLabelReport>
                        </Grid>
                        <Grid item xs={"auto"}>
                            <BoldFormLabelReport>Appointment Date:</BoldFormLabelReport>
                            <FormLabelReport>{sessionStorage.getItem("AssessmentDate")}</FormLabelReport>
                        </Grid>
                        <Grid item xs={"auto"}>
                            <BoldFormLabelReport>Assessment Type:</BoldFormLabelReport>
                            <FormLabelReport>{this.classificationArray[parseInt(sessionStorage.getItem("AssessmentType"))]}</FormLabelReport>
                        </Grid>
                    </Grid>
                    <PatientSummary printable = {1}/>
                    <DiagnosisBoxComponent printable = {1}/>

                    {(((sessionStorage.getItem("AAPscreeningDiagnosis") === null) || (sessionStorage.getItem("ImplantStatusDropItems") !== "No"))
                        && ((sessionStorage.getItem("BSPScreeningPrelimDiagnosis") === null) || (sessionStorage.getItem("ImplantStatusDropItems") !== "No"))
                        && ((sessionStorage.getItem("BSPscreeningDiagnosis") === null) || (sessionStorage.getItem("ImplantStatusDropItems") !== "No"))) && <>
                        <ChartSummary printable = {1}/>
                        <div className="print_this" id="chart"> <ChartComponent printableVersion={1}/> </div>
                    </>}
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps,null) (Diagnosis);