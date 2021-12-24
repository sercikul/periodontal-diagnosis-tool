import React, {useEffect} from 'react';
import {BrowserRouter as Router , Switch, Route } from "react-router-dom";
import './App.css';
import ClassificationState from "./ClassificationState";

//Footer + Header
import Navbar from "./Components/Navbar/Navbar";
import { FooterContainer } from './Components/footer/containers/footer';
import {NotFound} from "./Pages/NotFound/NotFoundComponent";

// Individual pages
import FAQ from "./Pages/FAQPage/FAQ";
import Home from "./Pages/HomePage/Home";
import Feedback from "./Pages/FeedbackPage/Feedback";
import About from "./Pages/AboutPage/About";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import PatientDetails from "./Pages/PatientDetails/PatientDetails";
import PatientHistory from "./Pages/PatientHistory/PatientHistory";
import ComplexityFactors from "./Pages/ComplexityFactors/ComplexityFactors";
import Radiography from "./Pages/Radiography/Radiography";
import PeriodontalChart from "./Pages/Chart/ChartComponent";
import Diagnosis from "./Pages/Diagnosis/Diagnosis";
import Screening from "./Pages/ScreeningPage/Screening";
import ResetPasswordLoggedOutPage from "./Pages/ResetPassword/ResetPassword.LoggedOutPage";
import PreviousAppointments from "./Pages/PreviousAppointments/PreviousAppointments";
import Patients from "./Pages/Patients/Patients";
import Patient from "./Pages/Patients/Patient";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import {loadUser} from "./actions/auth";
import CustomizedSnackbars from "./Components/popUpAlerts/AlertPopUp";
import PrivateRoute from "./Components/Routing/PrivateRoute";
import AAPScreening from "./Components/AAPScreening/AAPScreening";

if(localStorage.token){
    setAuthToken(localStorage.token);
}

function App() {
    useEffect(()=> {
        store.dispatch(loadUser());
    },[])

    return (
        <>
            <Provider store={store}>

              <ClassificationState>
                <div className="Content">
                   <Router>
                       {window.location.pathname!=='/reset_pw_logged_out' ? <Navbar/>:null}
                       <CustomizedSnackbars/>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/FAQ" component={FAQ}/>
                            <Route path="/feed" component={Feedback}/>
                            <Route path="/about" component={About}/>
                            <Route path = "/register" component={Register}/>
                            <Route path = "/login" component={Login}/>
                            <Route path = "/resetpassword/:passwordResetToken" component ={ResetPasswordLoggedOutPage}/>
                            <PrivateRoute path = "/PatientDetails" component={PatientDetails}/>
                            <PrivateRoute path = "/PatientHistory" component={PatientHistory}/>
                            <PrivateRoute path = "/ComplexityFactors" component={ComplexityFactors}/>
                            <PrivateRoute path = "/PreviousAppointments" component={PreviousAppointments}/>
                            <PrivateRoute path = "/Patients" component={Patients}/>
                            <PrivateRoute path = "/Patient" component={Patient}/>
                            <PrivateRoute path = "/Radiography" component={Radiography}/>
                            <PrivateRoute path = "/Diagnosis" component={Diagnosis}/>
                            <PrivateRoute path = "/Screening" component={Screening}/>
                            <PrivateRoute path = "/AAPScreening" component={AAPScreening}/>
                            <PrivateRoute path = "/chart" component={PeriodontalChart}/>
                            <Route render={ () => <NotFound />}/>
                        </Switch>
                    </Router>
                </div>
              {window.location.pathname!=='/reset_pw_logged_out' ? <FooterContainer className = "Footer"/>:null}
          </ClassificationState>

        </Provider>
    </>
  );
}

export default App;