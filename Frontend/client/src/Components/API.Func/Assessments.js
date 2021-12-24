//////////////Assessment//////////////
import axios from "axios";


export const AssessmentAPI = async () => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (!sessionStorage.getItem("AssessmentId"))
        // if no appointment created, create one and assign new patient
    {
        let Assessment = {};
        Assessment['doctorId'] = localStorage.getItem("token");
        Assessment['patientId'] = sessionStorage.getItem("PatientId");

        await Object.keys(sessionStorage).forEach((key) => {
            Assessment[key] = sessionStorage.getItem(key);
        });

        const res = await axios.post(
            `https://backendaapefp.azurewebsites.net/api/assessment/`,
            Assessment,
            config)
            sessionStorage.setItem("AssessmentId", await res.data.id);
            console.log("console.log(res.data.id)",await res.data.id);

            sessionStorage.setItem("AssessmentDate", await res.data.date);
            console.log("res.data.id",await res.data.id)
            const data = {id: await res.data.id,date: await res.data.date}
            return(data)

    } else
        // if there is an appointment created, add missing data
    {
        let Assessment = {};
        Assessment['doctorId'] = localStorage.getItem("token");
        Assessment['patientId'] = sessionStorage.getItem("PatientId");

        Object.keys(sessionStorage).forEach((key) => {
            Assessment[key] = sessionStorage.getItem(key);
        });

        await axios.post(
            `https://backendaapefp.azurewebsites.net/api/assessment/update/${sessionStorage.getItem("AssessmentId")}`,
            Assessment,
            config
        ).then(res => {
                sessionStorage.setItem("AssessmentId", res.data.id);
                sessionStorage.setItem("AssessmentDate", res.data.date);
                return{id:res.data.id,date:res.data.date};
            }
        )

    }
};

