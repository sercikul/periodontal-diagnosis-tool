import React from "react";
import axios from "axios";

export const options = {sorting: true,
    headerStyle: {color: '#193d66',}
    ,actionsColumnIndex: -1,
};

export const actions=[
    {
        icon: 'save',
        tooltip: 'Save Diagnosis',
        iconProps: { style: { fontSize: "24px", color: "#ac145a" } },
        onClick: async (event, rowData) => {
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
                   }); 
        },
    },
    {
        icon: 'delete',
        tooltip: 'Delete Appointment',
        iconProps: { style: { fontSize: "24px", color: "#193d66" } },
        onClick: (event, rowData) => {
            alert("Appointment was deleted")
        }
    }
    ];

export const localization={
    header:{actions:<h4>Actions</h4>},
    body: {emptyDataSourceMessage: <h4 style={{color: "#ac145a"}}>No records to display</h4>},
};
