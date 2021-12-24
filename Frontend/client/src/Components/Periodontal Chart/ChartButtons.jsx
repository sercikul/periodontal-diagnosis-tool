import React from "react";
import {ButtonRow, ButtonSeparator} from "../MedicalAssessment/MedicalElements";
import {ButtonsDiagnosisContainer} from "../Diagnosis/Diagnosis.elements";
import {Button, Container} from "../../Global.Styles";
import {withRouter} from 'react-router-dom';
import {Context} from "../../ClassificationState";
import diagnosis from "../../DiagnosisLogic/diagnosis";
import implant_screening from "../../DiagnosisLogic/ImplantDiagnosis";
import periodontitis from "../../DiagnosisLogic/periodontitis";

class ChartButtonsBox extends React.Component{
    static contextType = Context

    pageChange = (page) => {
        this.props.history.push(page);
    }

    checks = () => {
        let Implants = ["11", "12", "13", "14", "15", "16", "17", "18", "21", "22", "23", "24", "25", "26", "27", "28", "31", "32", "33", "34", "35", "36", "37", "38",
                        "41", "42", "43", "44", "45", "46", "47", "48"];
        let ImplantData = [];
        Implants.forEach(function(value) {
            let impl_diagnosis = implant_screening.implantFilter(`i${value}`);
                ImplantData.push({name: "Implant " + value, diagnosis: impl_diagnosis});
            });
        let ImplantDataFilter = ImplantData.filter(implant => implant.diagnosis);
        sessionStorage.setItem("AllImplants", JSON.stringify(ImplantDataFilter));
        
        if(sessionStorage.getItem("boneLoss") !== null){
            if ((parseInt(sessionStorage.getItem("boneLoss")) !== 0) && (parseInt(sessionStorage.getItem("bpeValue")) === 3) 
                      && (!JSON.parse(sessionStorage.getItem("initialTherapy")))){
                // periodontitis section (extent)
                periodontitis.main();
                
                sessionStorage.setItem("FinalStaging", diagnosis.bspStaging());
                sessionStorage.setItem("FinalGrading", diagnosis.getGrade());
                sessionStorage.setItem("FinalStability", diagnosis.getStability());
                this.pageChange("/Diagnosis");
                return;
            }
        }

        if ((this.context[0] === "1") && (sessionStorage.getItem("ImplantStatusDropItems") !== "Yes (all teeth are implants)")){
            if(sessionStorage.getItem("AAPscreeningDiagnosis") !== null){
                this.pageChange("/Diagnosis");
            }else{
                let stage = diagnosis.aapStaging();
                // staging, go to complexity factors in case of stage 3 (suspected stage 4)
                if (stage === "3"){
                    this.pageChange("/ComplexityFactors");
                }else{
                    // move on to next half of grading/stability inside radiography
                    this.pageChange("/Radiography");
                }
            }
        }else if ((this.context[0] === "2") && (sessionStorage.getItem("ImplantStatusDropItems") !== "Yes (all teeth are implants)")){
            // check if general diagnosis has already been reached, no radiography for teeth
            if((sessionStorage.getItem("BSPscreeningDiagnosis") !== null) || ((sessionStorage.getItem("BSPScreeningPrelimDiagnosis") !== null) && (sessionStorage.getItem("ImplantStatusDropItems") !== "No"))){
                this.pageChange("/Diagnosis"); 
            }else{
                this.pageChange("/Radiography"); 
            }
        }

        // if all teeth are only implants, go to diagnosis
        else if (sessionStorage.getItem("ImplantStatusDropItems") === "Yes (all teeth are implants)"){
            this.pageChange("/Diagnosis"); 
        }
    }

    render(){
        return(
            <>
                <Container>
                    <ButtonsDiagnosisContainer>
                        <ButtonRow>
                            <Button big fontBig= "primary" onClick = {this.props.history.goBack}>Back</Button>
                            <ButtonSeparator/>
                            <Button big fontBig= "primary" onClick = {()=>this.checks()}>Next</Button>
                        </ButtonRow>
                    </ButtonsDiagnosisContainer>
                </Container>
            </>
        );
    }
}

export default withRouter(ChartButtonsBox);