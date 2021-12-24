//////////////Patient//////////////
import moment from "moment";
import axios from "axios";

export const PatientAPI = async (config) =>{

    if (!sessionStorage.getItem("PatientId"))
        // If there is no PatientId, then create a new patient
    {
        const patient = {
            'firstName': sessionStorage.getItem("firstName"),
            'lastName': sessionStorage.getItem("lastName"),
            'DOB': moment(sessionStorage.getItem("dobDate")).add(12, 'hours').toISOString(),
            'MRN': sessionStorage.getItem('mrnCode')
        }

        const res = await axios.post(
            `https://backendaapefp.azurewebsites.net/api/patient`,
            patient,
            config
        )
        const patientId = await res.data;
        sessionStorage.setItem("PatientId", patientId)
    } else
        // If there is a PatientId, then update patient details

    {
        const patientUpdate = {
            'firstName': sessionStorage.getItem("firstName"),
            'lastName': sessionStorage.getItem("lastName")
        }

        await axios.post(
            `https://backendaapefp.azurewebsites.net/api/patient/update/${sessionStorage.getItem("PatientId")}`,
            patientUpdate,
            config
        )
    }

};