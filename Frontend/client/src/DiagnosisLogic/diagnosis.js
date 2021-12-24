export default class diagnosis {
    static bspStaging = () => {
        let GDPStage;
        // staging (GDP) logic

        if (parseInt(sessionStorage.getItem("boneLoss")) < 15){
            GDPStage = "1";
        }else if ((parseInt(sessionStorage.getItem("boneLoss")) >= 15) &&
            (parseInt(sessionStorage.getItem("boneLoss")) <= 32)){
            GDPStage = "2";
        }else if ((parseInt(sessionStorage.getItem("boneLoss")) >= 33) &&
            (parseInt(sessionStorage.getItem("boneLoss")) <= 65)){
            GDPStage = "3";
        }else{
            GDPStage = "4";
        }

        if(sessionStorage.getItem("screeningPeriodontitis")){
            GDPStage = "4";
        }

        if (parseInt(sessionStorage.getItem("screeningStage")) > parseInt(GDPStage)){
            GDPStage = sessionStorage.getItem("screeningStage");
        }

        if (GDPStage === ""){
            GDPStage = "Cannot Calculate";
        }

        return GDPStage;
    }

    static aapStaging = () => {
        // Staging (AAP/EFP) logic
        // used CAL equation

        // all teeth without wisdom
        let allTeeth = this.getOnlyTeeth();

        let maxCal = this.getAllMaxCal(allTeeth)[1];

        let stage;

        if (maxCal >= 5){
            stage = "3";
        } else if ((3 <= maxCal) && (maxCal <= 4)) {
            if (this.calStage2Upgrade(allTeeth)) {
                stage = "3";
            } else {
                stage = "2";
            }
        } else {
            stage = "1";
        }
        sessionStorage.setItem("FinalStaging", stage);
        return stage;
    }

    static getGrade = () => {
        let patientDateOfBirth = new Date(sessionStorage.getItem("dobDate"));
        let calculatedAge = ((((new Date()).getTime()) - (patientDateOfBirth.getTime())) / (1000 * 60 * 60 * 24 * 365));

        let boneLossByAge = (parseFloat(sessionStorage.getItem("boneLoss")) / (calculatedAge));

        let grade;

        if (sessionStorage.getItem("AssessmentType") === "1") {
            if (boneLossByAge < 0.25) {
                grade = "A";
            } else if ((boneLossByAge >= 0.25) && (boneLossByAge <= 1.0)) {
                grade = "B";
            } else {
                grade = "C";
            }

            if ((sessionStorage.getItem("smokingCigarettes") === "Yes (≥ 10 cigarettes per day)") || (sessionStorage.getItem("DegreeOfDiabetes") === "Yes (HbA1c ≥ 7.0%)")) {
                grade = "C";
            } else if ((sessionStorage.getItem("smokingCigarettes")  === "Yes (< 10 cigarettes per day)") || (sessionStorage.getItem("DegreeOfDiabetes") === "Yes (HbA1c < 7.0%)")) {
                grade = "B";
            }

        }else{
            if (boneLossByAge < 0.5) {
                grade = "A";
            } else if ((boneLossByAge >= 0.5) && (boneLossByAge <= 1.0)) {
                grade = "B";
            } else {
                grade = "C";
            }
        }

        if (grade === ""){
            grade = "Cannot Calculate";
        }

        return grade;
    }

    static getStability = () => {
        // BOP Characteristics & PPD - Stability
        let teethKeys = this.getOnlyTeeth();
        let PPD = this.getPPD(teethKeys);

        // will return true if there is BOP at sights where probing depth >= 4mm (constraint) and the teeth affected

        // check for unstability
        let checkGinigivalHealth = this.findBOPConstraint(teethKeys);
        let bopAndPDAtConstraint = checkGinigivalHealth[0];

        // check for stability or remission
        let BoPAt4MMSites = this.BOPAt4Sites(teethKeys)[0];

        // BOP score without wisdom
        let currentBop = this.findBOPScoreWithoutWisdom();

        let stability = "";
        if((currentBop < 10) && (PPD <= 4) && (!BoPAt4MMSites)){
            stability = "Stable";
        }else if ((currentBop >= 10) && (PPD <= 4) && (!BoPAt4MMSites)){
            stability = "Remission";
        }else if ((PPD >= 5) || ((PPD >= 4) && (bopAndPDAtConstraint))){
            stability = "Unstable";
        }else if (stability === ""){
            stability = "Cannot Calculate";
        }

        return stability;
    }

    static BOPAt4Sites = (sessionStorageTeethKeys) => {
        let teethAffected = [];
        for (const toothKey of sessionStorageTeethKeys) {
            let currentToothPD = JSON.parse(sessionStorage.getItem(toothKey))["Probing Depth"];
            let currentToothBOP = JSON.parse(sessionStorage.getItem(toothKey))["BoP"];

            // for buccal
            let buccalConstraint = this.buccalOrLingualBOPAndPDAt4Sites("Buccal ", currentToothPD, currentToothBOP);

            // for lingual
            let lingualConstraint = false;
            if(!buccalConstraint){
                lingualConstraint = this.buccalOrLingualBOPAndPDAt4Sites("Lingual ", currentToothPD, currentToothBOP);
            }

            if ((buccalConstraint) || (lingualConstraint)){
                teethAffected.push(toothKey);
            }

        }
        return [(teethAffected.length >= 1), teethAffected];

    }

    static buccalOrLingualBOPAndPDAt4Sites = (buccalOrLingualString, currentToothPD, currentToothBOP) => {
        for (let step = 1; step < 4; step++) {
            let bopKey = "BoP " + buccalOrLingualString + step.toString();
            let pdKey = "PD " + buccalOrLingualString + step.toString();

            let pdValue = currentToothPD[pdKey];
            let bopValue = currentToothBOP[bopKey];
            if((parseInt(pdValue) === 4) && (bopValue)){
                return true;
            }
        }
        return false;
    }

    static findBOPScoreWithoutWisdom = () => {
        let allTeeth = this.getOnlyTeeth();

        let totalBoPScore = 0;
        for (const toothKey of allTeeth) {
            let currentToothBoPScore = JSON.parse(sessionStorage.getItem(toothKey))["BoP"]["BoP Score"];
            totalBoPScore = totalBoPScore + currentToothBoPScore;
        }
        return totalBoPScore/(allTeeth.length*3);
    }

    static getOnlyTeeth = () => {
        let sessionStorageKeys = [];
        Object.keys(sessionStorage).forEach(function(key){
            // use regex to get only the teeth sessionStorage keys
            if(/^\d+$/.test(key)){
                // check teeth status is tooth not implant or missing then add to list of teeth to check
                if (JSON.parse(sessionStorage.getItem(key))["Tooth Status"] === 0){
                    sessionStorageKeys.push(key);
                }
            }
        });

        // remove wisdom teeth
        let wisdomTeeth = ["18", "28", "38", "48"];
        sessionStorageKeys = sessionStorageKeys.filter((element) => !wisdomTeeth.includes(element));

        return sessionStorageKeys;
    }

    // find boxes with probing depth > 6
    static pdGreater6 = (sessionStorageTeethKeys) => {
        for (const toothKey of sessionStorageTeethKeys) {
            let currentToothPD = JSON.parse(sessionStorage.getItem(toothKey))["Probing Depth"];
            if ((this.BuccalOrLingualPD("Buccal ", currentToothPD)) ||
                ((this.BuccalOrLingualPD("Lingual ", currentToothPD)))){
                return true;
            }
        }
        return false;
    }

    // sub method for probing depth of buccal or lingual teeth
    static BuccalOrLingualPD = (buccalOrLingualString, currentToothPD) => {
        for (let step = 1; step < 4; step++) {
            let pdKey = "PD " + buccalOrLingualString + step.toString();

            let pdValue = parseInt(currentToothPD[pdKey]);
            if (pdValue >= 6){
                return true;
            }
        }
        return false;
    }

    // check for teeth at least stage 2 furcation
    static stage2Furcation = (sessionStorageTeethKeys) => {
        let teeth = [];
        for (const toothKey of sessionStorageTeethKeys) {
            let currentToothFurcation = JSON.parse(sessionStorage.getItem(toothKey))["Furcation"];
            let buccal = parseInt(currentToothFurcation["Furcation Buccal"]);
            let lingual1 = parseInt(currentToothFurcation["Furcation Lingual 1"]);
            let lingual2 = parseInt(currentToothFurcation["Furcation Lingual 2"]);
            if ((buccal >= 2) || (lingual1 >= 2) || (lingual2 >= 2)){
                teeth.push(toothKey);
            }
        }
        return [teeth, teeth >= 1];
    }

    // check if worst tooth needs to upgrade to stage 3 or keep to stage 2
    static calStage2Upgrade = (sessionStorageTeethKeys) => {
        // check if teeth that are at furcation stage 2 return true otherwise false
        let onlyStage2teeth = this.stage2Furcation(sessionStorageTeethKeys)[1];

        // then check if pd >= 6 => return true otherwise after each tooth otherwise return false
        let teethAtLeastPdGreater6 = this.pdGreater6(sessionStorageTeethKeys);
        
        return teethAtLeastPdGreater6 || onlyStage2teeth;

    }

    // get tooth with max CAL i.e. worst tooth
    static getAllMaxCal = (sessionStorageTeethKeys) => {
        let allCals = new Map();
        for (const toothKey of sessionStorageTeethKeys) {
            let currentToothPD = JSON.parse(sessionStorage.getItem(toothKey))["Probing Depth"];
            let currentToothGM = JSON.parse(sessionStorage.getItem(toothKey))["Gingival Margin"];

            let currentToothCALs = [];

            // for buccal
            this.buccalOrLingualPDAndGM(currentToothCALs,"Buccal ", currentToothPD, currentToothGM);

            // for lingual
            this.buccalOrLingualPDAndGM(currentToothCALs,"Lingual ", currentToothPD, currentToothGM);

            // allCals will have only the max CAL for each tooth
            allCals.set(toothKey, currentToothCALs.sort((a, b) => b - a)[0]);
        }
        return [allCals, Math.max(...allCals.values())];
    }

    // get worst probing depth value (from worst tooth)
    static getPPD = (sessionStorageTeethKeys) => {
        // find PPD
        let allPDValues = [];
        sessionStorageTeethKeys.forEach(function (toothKey) {
            // get all PD values
            let currentToothPD = JSON.parse(sessionStorage.getItem(toothKey))["Probing Depth"];
            Object.keys(currentToothPD).forEach(function(currentTooth){
                allPDValues.push(parseInt(currentToothPD[currentTooth]));
            });
        });

        // sort in descending order and get highest value first
        return allPDValues.sort((a, b) => b - a)[0]
    }

    // calculate CAL for each box in tooth
    static buccalOrLingualPDAndGM = (currentToothCALs, buccalOrLingualString, currentToothPD, currentToothGM) => {
        for (let step = 1; step < 4; step++) {
            let pdKey = "PD " + buccalOrLingualString + step.toString();
            let gmKey = "GM " + buccalOrLingualString + step.toString();

            let pdValue = parseInt(currentToothPD[pdKey]);
            let gmValue = parseInt(currentToothGM[gmKey]);

            let currentValue = (pdValue+gmValue-3);

            currentToothCALs.push(currentValue);
        }
        return currentToothCALs
    }

    // check for BOP and PD constraint
    static buccalOrLingualBOPAndPD = (buccalOrLingualString, currentToothPD, currentToothBOP) => {
        for (let step = 1; step < 4; step++) {
            let bopKey = "BoP " + buccalOrLingualString + step.toString();
            let pdKey = "PD " + buccalOrLingualString + step.toString();

            let pdValue = currentToothPD[pdKey];
            let bopValue = currentToothBOP[bopKey];
            if((parseInt(pdValue) >= 5) || ((bopValue) && (parseInt(pdValue) === 4))){
                return true;
            }
        }
        return false;
    }

    // BOP only constraint
    static findBOPConstraint = (sessionStorageTeethKeys) => {
        let teethAffected = [];
        for (const toothKey of sessionStorageTeethKeys) {
            let currentToothPD = JSON.parse(sessionStorage.getItem(toothKey))["Probing Depth"];
            let currentToothBOP = JSON.parse(sessionStorage.getItem(toothKey))["BoP"];

            // for buccal
            let buccalConstraint = this.buccalOrLingualBOPAndPD("Buccal ", currentToothPD, currentToothBOP);

            // for lingual
            let lingualConstraint = false;
            if(!buccalConstraint){
                lingualConstraint = this.buccalOrLingualBOPAndPD("Lingual ", currentToothPD, currentToothBOP);
            }

            if ((buccalConstraint) || (lingualConstraint)){
                teethAffected.push(toothKey);
            }
        }
        return [(teethAffected.length >= 1), teethAffected];
    }
}