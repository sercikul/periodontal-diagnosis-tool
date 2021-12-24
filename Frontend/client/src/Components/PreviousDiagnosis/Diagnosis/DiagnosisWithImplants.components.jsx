import React from "react";
import {Header, Separater, FormLabel, IndicatorText} from "../../MedicalAssessment/MedicalElements";
import {BoldFormLabel, ImplantsDiagnosisContainer} from "./Diagnosis.elements";
import {Grid} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledGrid = withStyles((theme) => ({
    root: {
        "&.MuiGrid-spacing-xs-1": {
            margin: 0,
        }
    }
  }))(Grid);



class ImplantDiagnosisBoxComponent extends React.Component{
    render(){
        return (
            <>
                <ImplantsDiagnosisContainer style={this.props.printable === 1 ? ({ border: 'none', borderRadius: 'none', boxShadow: 'none', padding: 'none', marginTop: '-3%'}) : null}>
                    <Header style={this.props.printable === 1 ? { fontSize: '24px' } : null}>Implants Diagnosis</Header>
                    {this.props.printable === 1 ? 
                     JSON.parse(localStorage.getItem("AllImplants")).map(function(impl, index) {
                        return (
                        <StyledGrid key={index} container spacing={1} direction="row" justify="space-between" style={{ flex: 1 }}>
                            <Grid item xs={4} >
                                <BoldFormLabel style={ {fontSize: '16px'} }>{impl.name}: </BoldFormLabel>
                            </Grid>
                            <Grid>
                                <FormLabel style={ {fontSize: '16px'} }>{impl.diagnosis}</FormLabel>
                            </Grid>
                        </StyledGrid>
                        )})

                        :
                        JSON.parse(localStorage.getItem("AllImplants")).map(function(impl, index) {
                            return (
                            <StyledGrid key={index} container spacing={1} direction="row" justify="space-between" style={{ flex: 1 }}>
                                <Grid item xs={4} >
                                    <BoldFormLabel>{impl.name}: </BoldFormLabel>
                                </Grid>
                                <Grid>
                                    <FormLabel>{impl.diagnosis}</FormLabel>
                                </Grid>
                            </StyledGrid>
                            )})
                }

                </ImplantsDiagnosisContainer>
            </>
        );
    }
}

export default ImplantDiagnosisBoxComponent;

