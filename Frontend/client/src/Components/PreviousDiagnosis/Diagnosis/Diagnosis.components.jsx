import React from "react";
import {Header, FormLabel, OnlyImplantMarginSeparator, Separater} from "../../MedicalAssessment/MedicalElements";
import {DiagnosisContainer, BoldFormLabel, FadedLink} from "./Diagnosis.elements";
import ImplantDiagnosisBoxComponent from "./DiagnosisWithImplants.components";
import {Grid} from '@material-ui/core';
import {Context} from "../../../ClassificationState";

class DiagnosisBoxComponent extends React.Component{
    static contextType = Context;

    render(){
        return (
            <>
                    <DiagnosisContainer style={this.props.printable === 1 ? ({ border: 'none', borderRadius: 'none', boxShadow: 'none', padding: 'none'}) : null}>
                        {(localStorage.getItem("ImplantStatusDropItems") !== "Yes (all teeth are implants)") && (localStorage.getItem("ImplantStatusDropItems") !== null) && <>

                            <Header style={this.props.printable === 1 ? ({ fontSize: '24px'}) : null}>General Diagnosis</Header>

                            <Grid container spacing={1} direction="row" justify="space-between" style={{ flex: 0 }}>
                                {/* BPE 0/1/2 only*/}
                                {localStorage.getItem("BSPscreeningDiagnosis") !== null && <>
                                    <Grid>
                                        <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{localStorage.getItem("BSPscreeningDiagnosis")}</FormLabel>
                                    </Grid>
                                </>}

                                {/* BPE 3 but no initial therapy been done*/}
                                {localStorage.getItem("BSPScreeningPrelimDiagnosis") !== null && <>
                                    <Grid item xs={6}>
                                        <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Preliminary Diagnosis:</BoldFormLabel>
                                    </Grid>
                                    <Grid>
                                        <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{localStorage.getItem("BSPScreeningPrelimDiagnosis")}</FormLabel>
                                    </Grid>
                                </>}

                                {/* AAP/EFP Screening Diagnosis only*/}
                                {localStorage.getItem("AAPscreeningDiagnosis") !== null && <>
                                    <Grid>
                                        <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{localStorage.getItem("AAPscreeningDiagnosis")}</FormLabel>
                                    </Grid>
                                </>}

                                {/* Gingivitis diagnosis (after chart) only*/}
                                {localStorage.getItem("GingivitisDiagnosis") !== null && <>
                                    <Grid>
                                        <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{localStorage.getItem("GingivitisDiagnosis")}</FormLabel>
                                    </Grid>
                                </>}

                                {/* Extent + Staging/Grading/Stability/Risk Factors*/}

                                {/* Periodontitis Extent*/}
                                {localStorage.getItem("Periodontitis") !== null && <>
                                    <Grid item xs={6}>
                                        <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Periodontitis:</BoldFormLabel>
                                    </Grid>
                                    <Grid>
                                        <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{localStorage.getItem("Periodontitis")}</FormLabel>
                                    </Grid>
                                </>}

                                {localStorage.getItem("FinalStaging") !== null && <>
                                    <Grid item xs={6}>
                                        <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Stage:</BoldFormLabel>
                                    </Grid>
                                    <Grid>
                                        <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{localStorage.getItem("FinalStaging")}</FormLabel>
                                    </Grid>
                                </>}

                                {localStorage.getItem("FinalGrading") !== null && <>
                                    <Grid item xs={6}>
                                        <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Grade:</BoldFormLabel>
                                    </Grid>
                                    <Grid>
                                        <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{localStorage.getItem("FinalGrading")}</FormLabel>
                                    </Grid>
                                </>}

                                {localStorage.getItem("FinalStability") !== null && <>
                                    <Grid item xs={6}>
                                        <BoldFormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>Stability:</BoldFormLabel>
                                    </Grid>
                                    <Grid>
                                        <FormLabel style={this.props.printable === 1 ? ({ fontSize: '16px'}) : null}>{localStorage.getItem("FinalStability")}</FormLabel>
                                    </Grid>
                                </>}
                            </Grid>

                            <FadedLink href="/About">Disclaimer</FadedLink>
                            <Separater/><Separater/>
                        </>}
                        

                        {(localStorage.getItem("AllImplants") !== null) && (localStorage.getItem("AllImplants") !== undefined) && <>
                                <OnlyImplantMarginSeparator>
                                    <ImplantDiagnosisBoxComponent printable={this.props.printable === 1 ? 1 : 0}/>
                                </OnlyImplantMarginSeparator>
                        </>}
                        
                        <Separater/><Separater/>

                    </DiagnosisContainer>
            </>
        );
    }
}

export default DiagnosisBoxComponent;