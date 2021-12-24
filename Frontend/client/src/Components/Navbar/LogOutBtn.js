import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {userLogout} from "../../actions/auth";
import React, {useContext} from "react";
import {Context} from "../../ClassificationState";

const LogOutBtn = ({userLogout}) => {
    const [assessmentTypeGlobalState,setAssessmentTypeGlobalState] = useContext(Context);

    const Submit = async () => {
        await setAssessmentTypeGlobalState(null);
        console.log("assessmentTypeGlobalState from logout btn:",assessmentTypeGlobalState);
        await userLogout();
    }

    return (
        <ul className="log-out-container">
            <li onClick={()=>{Submit()}}>
                <Link to="/" className="log-out-link">
                    Log Out
                </Link>
            </li>
        </ul>
    )}

export default connect(null,{userLogout})(LogOutBtn)