import React, { Component, useEffect, useState } from 'react';
import { Logged_Out } from './LoginItems';
import { MenuItems } from "./MenuItems"
import { UserItems } from "./DropItems"
import './navbar.css'
import {LogoImage} from "./Navbar.elements";
import Drop from './Dropdown'
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import LogOutBtn from './LogOutBtn';

// Purely for resizing
const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        let timeoutId = null;
        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setWidth(window.innerWidth), 150);
        };
        window.addEventListener("resize", resizeListener);

        return () => window.removeEventListener("resize", resizeListener);
    }, []);

    return {width};
}

// Purely for resizing
const DynamicHeader = () => {
    const { width } = useViewport();
    const breakpoint = 1310;

    return width < breakpoint ? <span>EDIT</span> : <span>Eastman Periodontal Diagnosis Tool (EDIT)</span>;
}


// Essential menu items i.e. Feedback, FAQ etc
const MenuView = () => {

    return MenuItems.map(function(item, index) {
                                    return (
                                        <li key={index}>
                                            <Link className={item.cName} to={item.url}>
                                                {item.title}
                                            </Link>
                                        </li>)})}



// Options once logged in i.e. previous appointments and patients
const SessionView = () => {

    return UserItems.map(function(item, index) {
        return ( 
            <ul className="user-container" key={index}>
                <li>
                    <Link to={item.path} className={item.cName} >
                        {item.title}
                    </Link>
                </li>
            </ul>
            )})}

//Right now, the navbar will change provisionally, when we click on the title header.
//Change this code later, when we work with the backend. The navbar will change, once user logs in.
class Navbar extends Component {
    // Redux
    static propTypes = {
        // setAlert: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        lname: PropTypes.string,
        generalState: PropTypes.object
    };

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    };

    constructor(props) {
        super(props);

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
            dropdown: false
        }; 
    }
    
    onClickChange = () => {
        this.setState({dropdown: !this.state.dropdown})
    }

    onMouseEnter() {
        this.setState({dropdown: true});
    }

    onMouseLeave() {
        this.setState({dropdown: false});
    }

    render() {
        return(
            <nav className="NavbarItems">
                    <Link to="/" className="logo-text">
                        <LogoImage className="navbar-logo" src={process.env.PUBLIC_URL + '/client Logo.jpg'}/>
                        <DynamicHeader className="client-name"/>
                    </Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {this.props.isAuthenticated ?
                        <> <MenuView/> <SessionView />
                            <Divider variant="inset" light={true} className="divider"/>
                            <LogOutBtn/>
                        </>: <MenuView />}

                    {this.props.isAuthenticated ?
                        <li className="drop-hover" onMouseOver={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onClick={this.onClickChange}>
                            <Link className="session-user">
                            Dr. {this.props.lname}   <i className="fas fa-caret-down" />
                            </Link>

                            {this.state.dropdown && <Drop />}
                        </li>

                        : Logged_Out.map(function(item, index) {
                            return (
                            <li key={index}>
                            <Link to={item.url} className={item.cName} >
                              {item.title}
                          </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    lname: state.auth.doctor.lname,
    generalState: state.auth
});


export default connect(mapStateToProps,null)(Navbar);




