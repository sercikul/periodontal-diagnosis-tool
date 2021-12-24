import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { DropItems } from "./DropItems";
import './Dropdown.css';

//Do npm i @material-ui/core
import Divider from '@material-ui/core/Divider';
//Redux
import {userLogout} from "../../actions/auth";
import {connect} from "react-redux";
import {Context} from "../../ClassificationState";


const Drop = ({userLogout}) => {
    const [click, setClick] = useState(false)
        const handleClick = () => setClick(!click)

    const [assessmentTypeGlobalState,setAssessmentTypeGlobalState] = useContext(Context);

    const Submit = async () => {
        await setAssessmentTypeGlobalState(null);
        await userLogout();
    }

    return (
        <>
            <ul onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {DropItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path}>
                                {item.title}
                            </Link>
                           
                        </li>
                        
                    )
                })}
                <Divider variant="inset" light={true} className="divider"/>
                <li>
                            <Link className="dropdown-link-log-out" to="/" onClick={() =>
                                Submit()}>
                                Log Out
                            </Link>
                           
                </li>

            </ul>
        </>
    );
}



export default connect(null ,{userLogout})(Drop);





