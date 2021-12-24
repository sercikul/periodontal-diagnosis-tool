import React from 'react';
import MaterialTable from "material-table";
import {Container} from "../../../Global.Styles";
import {localization} from "../TabelsStyling";
import axios from "axios";
import { withRouter } from 'react-router-dom';

class PatientsTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            assessments:[],
            doctorId: localStorage.getItem('token')
        }}


    async componentDidMount() {

        const assessment = await axios.get(`https://backendaapefp.azurewebsites.net/api/assessment/getAllPatients/${this.state.doctorId}`)
        this.setState({assessments: assessment.data});
    }

    redirectToReport(rowData) {
        localStorage.setItem("patientId", rowData._id);
        this.props.history.push(`/Patient`);
    }

    render() {
        return (
            <>
                <Container id="appointments">
                    <MaterialTable
                        title={<h1 style={{color: '#193d66'}}>Patients</h1>}
                        columns={[
                            { title: <h4>First Name</h4>, field: 'firstName', type: 'string'},
                            { title: <h4>Last Name</h4>, field: 'lastName', type: 'string'},
                            { title: <h4>MRN</h4>, field: 'MRN', type: 'string'},
                            { title: <h4>Date of Birth</h4>, field: 'DOB', type: 'date' },
                            {title: <h4>id</h4>, field: '_id', type: 'string', hidden: true},
                                ]}
                        data={this.state.assessments}
                        localization={localization}
                        onRowClick={(event, rowData) => {
                            this.redirectToReport(rowData)
                        }}

                    />
                </Container>
            </>
        );
    }
}
export default withRouter(PatientsTable);