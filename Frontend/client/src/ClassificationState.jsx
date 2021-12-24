import React, {useState} from 'react';

export const Context = React.createContext();

export function AssessmentTypeFunct(AssessmentType){
    const [globalState, setState] = useState(sessionStorage.getItem(AssessmentType));

    function SetGlobalState(updateAssessmentType){
        sessionStorage.setItem(AssessmentType,updateAssessmentType);
        setState(updateAssessmentType)
    }
    return [globalState,SetGlobalState]
};

const ClassificationState = ({children}) => {
    const [assessmentTypeGlobalState,setAssessmentTypeGlobalState] = AssessmentTypeFunct('AssessmentType');

    return(
        <Context.Provider value={[assessmentTypeGlobalState,setAssessmentTypeGlobalState]}>{children}</Context.Provider>
    )
};

export default ClassificationState;

