import diagnosis from "./diagnosis";
import periodontitis from "./periodontitis";

export default class mainDiagnosis {
    static gingivalHealth = () => {
        // Extent: gingivitis section

        // find final BOP score without wisdom
        let gingivalDiagnosis;
        let finalBoPScore = diagnosis.findBOPScoreWithoutWisdom();

        if (finalBoPScore < 10.0) {
            gingivalDiagnosis = "Clinical gingival health on a reduced periodontium in a stable periodontitis patient";
        } else if ((finalBoPScore >= 10.0) && (finalBoPScore <= 30.0)) {
            gingivalDiagnosis = "Localised gingivitis in a patient with a history of periodontitis";
        } else {
            gingivalDiagnosis = "Generalised gingivitis in a patient with a history of periodontitis";
        }
        sessionStorage.removeItem("BSPScreeningPrelimDiagnosis");
        sessionStorage.removeItem("Periodontitis")
        sessionStorage.removeItem("FinalStaging");
        sessionStorage.removeItem("FinalGrading");
        sessionStorage.removeItem("FinalStability");
        sessionStorage.setItem("GingivitisDiagnosis", gingivalDiagnosis);
    }

    // check deep sites for only non-wisdom teeth
    static deepSidesWithoutWisdomTeeth = () => {
        let allTeeth = diagnosis.getOnlyTeeth();
        return diagnosis.findBOPConstraint(allTeeth);
    }

    static aapMain = () => {
        // For AAP: come here after complexity factors (suspected stage 4 or stage 3) or chart

        // check if its gingival health or not
        let checkGinigivalHealth = this.deepSidesWithoutWisdomTeeth();

        let deepSidesPresent = checkGinigivalHealth[0];

        if (!deepSidesPresent){
            this.gingivalHealth();
        }else{
            // boneLoss > 0, Deep Sides > 0, inside suspect periodontitis (periodontal chart) flowchart

            sessionStorage.removeItem("BSPscreeningDiagnosis");
            sessionStorage.removeItem("BSPScreeningPrelimDiagnosis");
            sessionStorage.removeItem("GingivitisDiagnosis");
            sessionStorage.removeItem("AAPscreeningDiagnosis");

            // periodontitis section (extent)
            periodontitis.main();

            // AAP Staging 2nd half, comparing bone loss staging from radiography with the complexity factors one (if present)
            if(parseInt(sessionStorage.getItem("boneLoss")) < 15){
                sessionStorage.setItem("AAPBoneLossStaging", "1");
            }else if((parseInt(sessionStorage.getItem("boneLoss")) <= 33) &&
                (parseInt(sessionStorage.getItem("boneLoss")) >= 15)){
                sessionStorage.setItem("AAPBoneLossStaging", "2");
            }else{
                sessionStorage.setItem("AAPBoneLossStaging", "3");
            }

            if(parseInt(sessionStorage.getItem("AAPBoneLossStaging"))>parseInt(sessionStorage.getItem("FinalStaging"))){
                sessionStorage.setItem("FinalStaging", sessionStorage.getItem("AAPBoneLossStaging"));
            }

            // AAP Grading and stability
            sessionStorage.setItem("FinalGrading", diagnosis.getGrade());
            sessionStorage.setItem("FinalStability", diagnosis.getStability());
        }
    }

    static bspMain = () => {
        // BSP

        // check if its gingival health or not
        let checkGinigivalHealth = this.deepSidesWithoutWisdomTeeth();

        let deepSidesPresent = checkGinigivalHealth[0];

        if ((!deepSidesPresent) && (sessionStorage.getItem("screeningStage") === null)){
            this.gingivalHealth();
        }else{
            sessionStorage.removeItem("BSPscreeningDiagnosis");
            sessionStorage.removeItem("BSPScreeningPrelimDiagnosis");
            sessionStorage.removeItem("GingivitisDiagnosis");
            sessionStorage.removeItem("AAPscreeningDiagnosis");

            // periodontitis section (extent)
            periodontitis.main();

            sessionStorage.setItem("FinalStaging", diagnosis.bspStaging());
            sessionStorage.setItem("FinalGrading", diagnosis.getGrade());
            sessionStorage.setItem("FinalStability", diagnosis.getStability());
        }
    }
}