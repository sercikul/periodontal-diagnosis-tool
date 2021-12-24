import React, {useContext} from 'react';
import {HomeSec, InfoRow, InfoColumn, TextWrapper, ImgWrapper, TopLine, Heading, Subtitle, Img} from './Home.elements';
import {Container,Button} from "../../Global.Styles";
import {Context} from "../../ClassificationState";
import {useHistory} from "react-router-dom";
import AssessmentSwitchAlertDialog from "./AssesmentSwitchPopUp";
import PropTypes from "prop-types";
import {connect} from "react-redux";


const HomeSection = ({topLine, headline, description, primary, buttonLabel,img,alt,AssessmentType,isAuthenticated}) => {

    //Use to get the state of the current assessment and change it to the other one
    //by default the state for AssessmentType in sessionMemory = null
    const [assessmentTypeGlobalState,setAssessmentTypeGlobalState] = useContext(Context);

    // Alert state change
    const [open, setOpen] = React.useState(false);

    //Changing pages + pop up
    const history = useHistory();
    const navigateTo = () => {

        if(!isAuthenticated){history.push('/register')}else{

        if (assessmentTypeGlobalState === AssessmentType || assessmentTypeGlobalState===null)
        {return (setAssessmentTypeGlobalState(AssessmentType), history.push('/PatientDetails'))}
        else{
            return(setOpen(prevState => !prevState))
            }
        };
    };


    return (
        <>
            <AssessmentSwitchAlertDialog open={open} setOpen={setOpen}/>
            <HomeSec>
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                                <Heading>{headline}</Heading>
                                <Subtitle>{description}</Subtitle>
                                    <Button big fontBig={primary}
                                            onClick = {() => {navigateTo();}}>
                                        {buttonLabel}</Button>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                                <ImgWrapper>
                                    <Img src={img} alt={alt} />
                                </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </HomeSec>
        </>
    );

};

HomeSection.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated})

export default connect(mapStateToProps)(HomeSection);

// test for dev branch
