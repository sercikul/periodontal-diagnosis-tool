import React from "react";
import {StyledInput, FeedbackContainer} from './Feedback.elements';
import {InputForm, Header} from '../MedicalAssessment/MedicalElements'
import {Button} from "../../Global.Styles";
import Popup from '../customPopup/PopupControl';
import axios from "axios";
import { withRouter } from 'react-router';

class FeedbackBox extends React.Component {

    constructor(props) {
        super(props);
        this.openPopupHandler = this.openPopupHandler.bind(this);
        this.closePopupHandler = this.closePopupHandler.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {showPopup: false, textAreaValue: sessionStorage.getItem('Feedback')};

        if (this.state.textAreaValue === null){
            this.state.textAreaValue = "";
        }
        this.baseState = this.state
    }

    openPopupHandler = () => {
      this.setState({showPopup: true});
    }
    
    closePopupHandler = () => {
        if((sessionStorage.getItem("Feedback") === null)){
            this.setState(this.baseState);
        }
        this.setState({showPopup: false});
    }

    onChange = (e) => {
        this.setState({textAreaValue: e.target.value});
        sessionStorage.setItem("Feedback", e.target.value);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const feedback_submit = {
            feedback: this.state.textAreaValue,
        }

        axios.post('http://localhost:5000/api/feedback/add', feedback_submit);

        sessionStorage.removeItem('Feedback');
    }

    render() {
      let popup = null;
      let title = '';
      let message = '';

      if (this.state.showPopup){
        if (!sessionStorage.getItem('Feedback'))
            {title = 'Feedback is Empty';
             message='Please enter text inside the feedback box.';}

        else
            {title = 'Feedback Submitted';
             message = 'Thank you for submitting your feedback!'}
          popup = (<Popup title={title} message={message} closeMe={this.closePopupHandler}/>);
      }

      return(
        <>
            <FeedbackContainer>
              <Header>Feedback</Header>
                <InputForm onSubmit = {this.onSubmit}>
                    <StyledInput value={this.state.textAreaValue} onChange={this.onChange}
                                 placeholder = {"We value your feedback! All the feedback provided is totally anonymous!"}/>
                     <Button type ="submit" onClick={()=>(this.openPopupHandler())} big fontBig= "primary">Send</Button>
                    </InputForm>
                {popup}
            </FeedbackContainer>
        </>
      );
    }
  }
export default withRouter(FeedbackBox);