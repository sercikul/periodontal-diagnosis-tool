import React from "react";
import {Header, FormLabel} from "../MedicalAssessment/MedicalElements";
import {BoldFormLabel, ImplantsDiagnosisContainer} from "./Diagnosis.elements";
import {Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledGrid = withStyles((theme) => ({
    root: {
        "&.MuiGrid-spacing-xs-1": {
            margin: 0,
        }
    }
  }))(Grid);



class ChartSummary extends React.Component{
    render(){
        return (
            <>
                <ImplantsDiagnosisContainer style={this.props.printable === 1 ? ({ border: 'none', borderRadius: 'none', boxShadow: 'none', padding: 'none', marginTop: '-15%'}) : null}>
                    <Header style={this.props.printable === 1 ? ({ fontSize: '24px'}) : null}>Chart Summary</Header>
                        <StyledGrid container spacing={1} direction="row" justify="space-between" style={{ flex: 1 }}>
                            <Grid item xs={4} >
                                <BoldFormLabel style={ {fontSize: '16px'} }>Plaque: </BoldFormLabel>
                            </Grid>
                            <Grid>
                                <FormLabel style={ {fontSize: '16px'} }>{sessionStorage.getItem("PlagueScore") + " %"}</FormLabel>
                            </Grid>
                        </StyledGrid>
                        <StyledGrid container spacing={1} direction="row" justify="space-between" style={{ flex: 1 }}>
                            <Grid item xs={4} >
                                <BoldFormLabel style={ {fontSize: '16px'} }>Deep Sites: </BoldFormLabel>
                            </Grid>
                            <Grid>
                                <FormLabel style={ {fontSize: '16px'} }>{sessionStorage.getItem("DSScore") + " %"}</FormLabel>
                            </Grid>
                        </StyledGrid>
                        <StyledGrid container spacing={1} direction="row" justify="space-between" style={{ flex: 1 }}>
                            <Grid item xs={4} >
                                <BoldFormLabel style={ {fontSize: '16px'} }>Bleeding on Probing: </BoldFormLabel>
                            </Grid>
                            <Grid>
                                <FormLabel style={ {fontSize: '16px'} }>{sessionStorage.getItem("BoPScore") + " %"}</FormLabel>
                            </Grid>
                        </StyledGrid>
                </ImplantsDiagnosisContainer>
            </>
        );
    }
}

export default ChartSummary;

