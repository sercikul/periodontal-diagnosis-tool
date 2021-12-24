export default class implant_screening {
    static implantFilter = (id) => {
      let implant_diagnosis;
      const implant_obj = JSON.parse(sessionStorage.getItem(id));
      if(sessionStorage.getItem("ImplantStatusDropItems") === "No" || (implant_obj["ToothStatus"] !== 1)) {
      }
      else if (implant_obj["Q1"] === "0" && implant_obj["Q2"] !== "1" && implant_obj["Q2a"] === "0" && (implant_obj["Q3"] === "0" || (implant_obj["Q3"] === "0.5" && implant_obj["Q3a"] === "0"))) {
        implant_diagnosis = "Peri-Implant Health";
      }
      else if (implant_obj["Q1"] === "0" && implant_obj["Q2"] !== "1" && implant_obj["Q2a"] === "0" && (implant_obj["Q3"] === "1" || (implant_obj["Q3"] === "0.5" && implant_obj["Q3a"] === "1"))) {
        implant_diagnosis = "Peri-Implant Health with reduced support";
      }
      else if ((implant_obj["Q1"] === "1" | (implant_obj["Q2"] === "1" || implant_obj["Q2a"] === "1")) && (implant_obj["Q3"] === "1" || implant_obj["Q3a"] === "1")) {
        implant_diagnosis = "Peri-Implantitis";
      }
      else {
        implant_diagnosis = "Peri-Implant Mucositis";
      }
      return implant_diagnosis;
    }
}