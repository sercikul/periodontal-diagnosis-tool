import React from 'react';
import MaterialTable from "material-table";
import {Container} from "../../../Global.Styles";
import {options, localization} from '../TabelsStyling';
import './table.css';
import axios from "axios";
import PeriodontalChartPagePrev from "../../../Components/PreviousAppointments/ChartPagePrev";
import PrevDiagnosis from "../../../Components/PreviousDiagnosis/Diagnosis/OverallDiagnosisPrev.components";
import ChartSummary from "../../../Components/PreviousDiagnosis/Diagnosis/ChartSummary"; 



class AppointmentTable extends React.Component{

    

    constructor(props){
        super(props);
        this.state = {
            assessments:[],
            doctorId: localStorage.getItem('token'),
            exists: 0
    }}
    
    fillInData = async (event, rowData) => {
            this.setState({exists: 0});
            const body ={doctorId: localStorage.getItem('token')}

            await axios.post(
                `https://backendaapefp.azurewebsites.net/api/assessment/singleAssessment/${rowData._id}`,body).then(assess => {
                    const assessment = JSON.parse(assess.data);
                    let Teeth = ["11", "12", "13", "14", "15", "16", "17", "18", "21", "22", "23", "24", "25", "26", "27", "28", "31", "32", "33", "34", "35", "36", "37", "38",
                    "41", "42", "43", "44", "45", "46", "47", "48"];
                    Teeth.forEach(function(value) {
                        if(assessment[value]) {
                            localStorage.setItem(value, JSON.stringify(assessment[value]))
                        }
                    });
                    if(assessment["ImplantStatusDropItems"]) {
                        localStorage.setItem("ImplantStatusDropItems", assessment["ImplantStatusDropItems"]);
                    }
                    if(assessment["BSPscreeningDiagnosis"]) {
                        localStorage.setItem("BSPscreeningDiagnosis", assessment["BSPscreeningDiagnosis"]);
                    }
                    if(assessment["BSPscreeningPrelimDiagnosis"]) {
                        localStorage.setItem("BSPscreeningPrelimDiagnosis", assessment["BSPscreeningPrelimDiagnosis"]);
                    }
                    if(assessment["AAPscreeningDiagnosis"]) {
                        localStorage.setItem("AAPscreeningDiagnosis", assessment["AAPscreeningDiagnosis"]);
                    }
                    if(assessment["GingivitisDiagnosis"]) {
                        localStorage.setItem("GingivitisDiagnosis", assessment["GingivitisDiagnosis"]);
                    }
                    if(assessment["Periodontitis"]) {
                        localStorage.setItem("Periodontitis", assessment["Periodontitis"]);
                    }
                    if(assessment["FinalStaging"]) {
                        localStorage.setItem("FinalStaging", assessment["FinalStaging"]);
                    }
                    if(assessment["FinalGrading"]) {
                        localStorage.setItem("FinalGrading", assessment["FinalGrading"]);
                    }
                    if(assessment["FinalStability"]) {
                        localStorage.setItem("FinalStability", assessment["FinalStability"]);
                    }
                    if(rowData._id) {
                        localStorage.setItem("AssessmentId", rowData._id);
                    }
                    if(assessment["date"]) {
                        localStorage.setItem("AssessmentDate", assessment["date"]);
                    }
                    if(assessment["AssessmentType"]) {
                        localStorage.setItem("AssessmentType", assessment["AssessmentType"]);
                    }
                    if(rowData.firstName) {
                        localStorage.setItem("firstName", rowData.firstName);
                    }
                    if(rowData.lastName) {
                        localStorage.setItem("lastName", rowData.lastName);
                    }
                    if(rowData.DOB) {
                        localStorage.setItem("dobDate", rowData.DOB);
                    }
                    if(rowData.MRN) {
                        localStorage.setItem("mrnCode", rowData.MRN);
                    }
                    if(assessment["healthStatusSelected"]) {
                        localStorage.setItem("healthStatusSelected", assessment["healthStatusSelected"]);
                    }
                    if(assessment["HealthStatusDetails"]) {
                        localStorage.setItem("HealthStatusDetails", assessment["HealthStatusDetails"]);
                    }
                    if(assessment["smokingCigarettes"]) {
                        localStorage.setItem("smokingCigarettes", assessment["smokingCigarettes"]);
                    }
                    if(assessment["DegreeOfDiabetes"]) {
                        localStorage.setItem("DegreeOfDiabetes", assessment["DegreeOfDiabetes"]);
                    }
                    if(assessment["AllImplants"]) {
                        localStorage.setItem("AllImplants", assessment["AllImplants"]);
                    }
                    if(assessment["BoPScore"]) {
                        localStorage.setItem("BoPScore", assessment["BoPScore"]);
                    }
                    if(assessment["PlagueScore"]) {
                        localStorage.setItem("PlagueScore", assessment["PlagueScore"]);
                    }
                    if(assessment["DSScore"]) {
                        localStorage.setItem("DSScore", assessment["DSScore"]);
                    }
                    if(assessment["AssessmentFeedback"]) {
                        localStorage.setItem("AssessmentFeedback", assessment["AssessmentFeedback"]);
                    }
                   }); 

            this.setState({exists: 1});

            setTimeout(() => {
                window.print();
                const token = localStorage.getItem("token");
                localStorage.clear();
                localStorage.setItem("token", token);
              }, 750);
        };


    async componentDidMount() {

        const assessment = await axios.get(
            `https://backendaapefp.azurewebsites.net/api/assessment/getAllAssessments/${this.state.doctorId}`
        )
        this.setState({assessments: assessment.data});
    };



    render(){
        const {assessments} = this.state;
        
    return (
        <>
        <div className="no_print">
            <Container id="appointments">
                <MaterialTable title={<h1 style={{color: '#193d66'}}>Previous Appointments</h1>}
                               columns={[
                                   { title: <h4>Appointment Date</h4>, field: "date", type: 'date'},
                                   { title: <h4>First Name</h4>, field: "firstName", type: 'string'},
                                   { title: <h4>Last Name</h4>, field: "lastName", type: 'string'},
                                   { title: <h4>Date of Birth</h4>, field: "DOB", type: 'date' },
                                   { title: <h4>MRN</h4>, field: "MRN", type: 'string'},
                                   { title: <h4>ID</h4>, field: "_id", type: 'string', hidden: true}
                                    ]}

                               data={assessments}
                               options={options}
                               actions={[
                                   {
                                    icon: 'save',
                                    iconProps: { style: { fontSize: "24px", color: "#ac145a" } },
                                    onClick: this.fillInData,  
                                   },
                                   {
                                    icon: 'delete',
                                    tooltip: 'Delete Appointment',
                                    iconProps: { style: { fontSize: "24px", color: "#193d66" } },
                                    onClick: (event, rowData) => {
                                        axios.delete('https://backendaapefp.azurewebsites.net/api/assessment',
                                            {data: {assessmentId:rowData._id}}
                                            ).then(res => {if(res.status == 200) {
                                                alert("Appointment was deleted")
                                            const del = assessments.filter(assessment => rowData._id !== assessment._id)
                                            this.setState({assessments:del})
                                            }})
                                    }
                                }
                               ]}
                            localization={localization}

                />
            </Container>
            </div>
            <div className="print_this">
                {this.state.exists === 1 && <> 
                    <PrevDiagnosis/>
                    {(((localStorage.getItem("AAPscreeningDiagnosis") === null) || (localStorage.getItem("ImplantStatusDropItems") !== "No")) 
                        && ((localStorage.getItem("BSPScreeningPrelimDiagnosis") === null) || (localStorage.getItem("ImplantStatusDropItems") !== "No"))
                        && ((localStorage.getItem("BSPscreeningDiagnosis") === null) || (localStorage.getItem("ImplantStatusDropItems") !== "No"))) && <>
                            <ChartSummary printable = {1}/>
                            <div id="chart"> <PeriodontalChartPagePrev/> </div>
                    </>}
                </>}
            </div>
        </>
    );
    }
}

export default AppointmentTable;
