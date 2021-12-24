import React from "react";
import {PatientContainer, Header, Separater, IndicatorText, ButtonRow, ButtonSeparator} from "../MedicalAssessment/MedicalElements";
import {Button, Container} from "../../Global.Styles";
import {Switch, FormControlLabel, withStyles, Grid} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class ComplexityFactorsBox extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            collapsedBite: JSON.parse(sessionStorage.getItem("collapsedBite")),
            isOcculusion: JSON.parse(sessionStorage.getItem("isOcculusion")),
            teethDrifting: JSON.parse(sessionStorage.getItem("teethDrifting")),
            mobility: JSON.parse(sessionStorage.getItem("mobility")),
            ridgeDefect: JSON.parse(sessionStorage.getItem("ridgeDefect")),
            opposingPairs: JSON.parse(sessionStorage.getItem("opposingPairs"))
        }

        this.setNewState = this.setNewState.bind(this);
        this.checks = this.checks.bind(this);
        this.pageChange = this.pageChange.bind(this);

        Object.keys(this.state).map((key) => {
            if (this.state[key] == null){
                this.state[key] = false;
            }
        });
    }

    setNewState = (evt, name) => {
        let toggled = false;
        if (!this.state[name]){
            toggled = true;
        }
        this.setState({[name]: toggled});
        sessionStorage.setItem(name, toggled);
    }

    checks = () => {
        sessionStorage.setItem("FinalStaging", "3");
        // change to stage 4 if any switches are toggled
        Object.keys(this.state).map((key) => {
            if (this.state[key]){
                sessionStorage.setItem("FinalStaging", "4");
            }
        });
        this.pageChange("/Radiography");
    }

    pageChange = (page) => {
        this.props.history.push(page);
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
    
    render(){
        return (
            <>
            <Container>
                <PatientContainer>
                    <Header>Complexity Factors</Header>
                    <Separater/>
                    <Grid container spacing={1} direction="row" justify="space-between" style={{ flex: 0 }}>
                        <Grid item xs={"auto"}>
                            <FormControlLabel
                                control={<this.colouredSwitch checked={this.state.collapsedBite} 
                                                            onChange={(value) => this.setNewState(value, "collapsedBite")}/>}
                                label="Bite Collapse Present?"
                                labelPlacement="top"/>
                        </Grid>
                        <Grid item xs={"auto"}>
                            <FormControlLabel
                                control={<this.colouredSwitch checked={this.state.isOcculusion} 
                                                            onChange={(value) => this.setNewState(value, "isOcculusion")}/>}
                                label="Secondary trauma from Occlusion?"
                                labelPlacement="top"/>
                        </Grid>
                        <Grid item xs={"auto"}>
                                <FormControlLabel
                                    control={<this.colouredSwitch checked={this.state.teethDrifting} 
                                                                onChange={(value) => this.setNewState(value, "teethDrifting")}/>}
                                    label="Drifting Teeth Present?"
                                    labelPlacement="top"/>
                        </Grid>
                        <Grid item xs={"auto"}>
                            <FormControlLabel
                                control={<this.colouredSwitch checked={this.state.mobility} 
                                                            onChange={(value) => this.setNewState(value, "mobility")}/>}
                                label="≥ 2 degrees of Mobility?"
                                labelPlacement="top"/>
                        </Grid>

                        <Grid item xs={"auto"}>
                            <FormControlLabel
                                control={<this.colouredSwitch checked={this.state.ridgeDefect} 
                                                            onChange={(value) => this.setNewState(value, "ridgeDefect")}/>}
                                label="Severe Ridge Defect Present?"
                                labelPlacement="top"/>
                        </Grid>
                        <Grid item xs={"auto"}>
                            <FormControlLabel
                                control={<this.colouredSwitch checked={this.state.opposingPairs} 
                                                            onChange={(value) => this.setNewState(value, "opposingPairs")}/>}
                                label="< 10 Opposing Pairs Present?"
                                labelPlacement="top"/>
                        </Grid>
                    </Grid>

                    <IndicatorText>*Toggle Switch if true</IndicatorText>

                    <Separater/><Separater/>
                    <ButtonRow>
                        <Button onClick={this.props.history.goBack} big fontBig= "primary">Back</Button>
                        <ButtonSeparator/>
                        <Button onClick={()=>this.checks()} big fontBig= "primary">Next</Button>
                    </ButtonRow>
                </PatientContainer>
            </Container>
            </>
        );
    }
}
export default withRouter(ComplexityFactorsBox);

