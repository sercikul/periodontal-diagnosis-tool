import diagnosis from "./diagnosis";

export default class periodontitis {
    static generalPeriodontisis = (allTeeth, teethAffected) => {
        // Periodontitis (localised or generalised)
        let percentageTeethAffected = teethAffected.length/allTeeth.length * 100;
        if (percentageTeethAffected <= 30){
            sessionStorage.setItem("Periodontitis", "Localised Periodontitis");
        }else{
            sessionStorage.setItem("Periodontitis", "Generalised Periodontitis");
        }
    }

    static main = () => {
        // check if first molars are infected (only check deep sides of 1st molars: 16, 26, 46, 36)
        // getPPD with only 1st molars passed inside, and check if 1st value has condition:
        // Are there areas with pocket depth >=5mm or probing depth >= 4mm and BOP present

        let allTeeth = diagnosis.getOnlyTeeth();
        let firstMolars = ["16", "26", "36", "46"];

        let checkGinigivalHealth = diagnosis.findBOPConstraint(allTeeth);

        let teethAffected = checkGinigivalHealth[1];

        const foundFirstMolarsAffected = teethAffected.some(r=> firstMolars.indexOf(r) >= 0);

        if(!foundFirstMolarsAffected){
            this.generalPeriodontisis(allTeeth, teethAffected);
        }else{
            // are there any > 2 teeth from the list of canines, premolar or 2nd molar affected?
            let caninesPremolarsSecondMolars = ["13", "23", "33", "43", "14", "15", "24", "25", "44", "45", "34",
                                                "35", "17", "27", "37", "47"];

            let compare = (teethAffected, caninesPremolarsSecondMolars) => teethAffected.reduce((a, c) => a + caninesPremolarsSecondMolars.includes(c), 0);

            if(compare(teethAffected, caninesPremolarsSecondMolars) > 2){
                this.generalPeriodontisis(allTeeth, teethAffected);
            }else{
                sessionStorage.setItem("Periodontitis", "Molar/Incisor Pattern");
            }
        }
    }
}