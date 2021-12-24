const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema

// data without chart is added
const AssessmentSchema = new Schema({
        AssessmentType:{type: Number, required:true},
        doctorId:{type: Schema.Types.ObjectId, ref: 'Doctors', required:true},
        patientId:{type: Schema.Types.ObjectId, ref: 'Patients'},
        xRayImage:{data:Buffer, type: String},
        date: {type: Date, default: Date.now},
        //
        healthStatusSelected: {type: String, required: false},
        HealthStatusDetails: {type: String, required: false},
        smokingCigarettes: {type: String, required: true},
        DegreeOfDiabetes: {type: String, required: true},
        ImplantStatusDropItems: {type: String, required: true},
        //
        PatientStatus: {type: String, required: false},
        detectableMarginalBoneLoss: {type: String, required: false},
        CAL: {type: String, required: false},
        buccalOrOralRecession: {type: String, required: false},
        BOPAAPScreening: {type: String, required: false},

        BoPScore:{type: String, required: false},
        PlagueScore:{type: String, required: false},
        DSScore:{type: String, required: false},

        screeningPeriodontitis: {type: String, required: false},
        teethLoss: {type: String, required: false},
        BSPCalLoss: {type: String, required: false},
        isEvidence: {type: String, required: false},
        bopValue: {type: String, required: false},
        bpeValue: {type: String, required: false},
        initialTherapy: {type: String, required: false},

        collapsedBite: {type: String, required: false},
        isOcculusion: {type: String, required: false},
        teethDrifting: {type: String, required: false},
        mobility: {type: String, required: false},
        ridgeDefect: {type: String, required: false},
        opposingPairs: {type:String, required: false},

        boneLoss: {type: String, required: false},
        periodontitis: {type: String, required: false},

        BSPscreeningDiagnosis: {type: String, required: false},
        BSPScreeningPrelimDiagnosis: {type: String, required: false},
        AAPscreeningDiagnosis: {type: String, required: false},
        GingivitisDiagnosis: {type: String, required: false},
        Periodontitis: {type: String, required: false},
        FinalStaging: {type: String, required: false},
        FinalGrading: {type: String, required: false},
        FinalStability: {type: String, required: false},
        AssessmentFeedback:{type:String},

        11: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
                },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
                },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
                },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
            },

        12: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        13: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        14: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        15: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        16: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        17: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        18: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        21: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        22: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        23: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        24: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        25: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        26: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        27: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        28: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        31: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        32: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        33: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        34: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        35: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        36: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        37: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        38: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        41: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        42: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        43: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        44: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        45: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        46: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        47: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },

        48: {Note:{type: String},
            Mobility:{type: Number},
            "Tooth Status":{type: Number},
            "Furcation":{
                "Furcation Buccal":{type: Number},
                "Furcation Lingual 1":{type: Number},
                "Furcation Lingual 2":{type: Number}
            },
            BoP:{
                "BoP Buccal 1":{type: Boolean},
                "BoP Buccal 2":{type: Boolean},
                "BoP Buccal 3":{type: Boolean},
                "BoP Lingual 1":{type: Boolean},
                "BoP Lingual 2":{type: Boolean},
                "BoP Lingual 3":{type: Boolean},
                "BoP Score":{type: Number}
            },
            "Plague":{
                "Plague Buccal 1":{type: Boolean},
                "Plague Buccal 2":{type: Boolean},
                "Plague Buccal 3":{type: Boolean},
                "Plague Lingual 1":{type: Boolean},
                "Plague Lingual 2":{type: Boolean},
                "Plague Lingual 3":{type: Boolean},
                "Plague Score":{type: Number}
            },
            "Gingival Margin":{
                "GM Buccal 1":{type: Number},
                "GM Buccal 2":{type: Number},
                "GM Buccal 3":{type: Number},
                "GM Lingual 1":{type: Number},
                "GM Lingual 2":{type: Number},
                "GM Lingual 3":{type: Number}
            },
            "Probing Depth":{
                "PD Buccal 1":{type: Number},
                "PD Buccal 2":{type: Number},
                "PD Buccal 3":{type: Number},
                "PD Lingual 1":{type: Number},
                "PD Lingual 2":{type: Number},
                "PD Lingual 3":{type: Number}
            }
        },
        AllImplants:{type: String},// "[{"name":"Implant 14","diagnosis":"Peri-Implant Health"},{"name":"Implant 24","diagnosis":"Peri-Implant Health"}]"



        // //"{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     12:{type: String}, //"{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     13:{type: String}, //"{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     14:{type: String}, //"{"Note":"","Mobility":0,"Tooth Status":1,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":0,"Furcation Lingual 2":0},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     15:{type: String}, //"{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     16:{type: String}, // "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":0,"Furcation Lingual 1":0,"Furcation Lingual 2":0},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     17:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":0,"Furcation Lingual 1":0,"Furcation Lingual 2":0},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     18:{type: String},//"{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":0,"Furcation Lingual 1":0,"Furcation Lingual 2":0},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     21:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     22:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     23:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     24:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":1,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":0,"Furcation Lingual 2":0},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     25:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     26:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":0,"Furcation Lingual 1":0,"Furcation Lingual 2":0},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     27:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":0,"Furcation Lingual 1":0,"Furcation Lingual 2":0},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     28:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":0,"Furcation Lingual 1":0,"Furcation Lingual 2":0},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     31:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     32:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     33:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     34:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     35:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     36:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":0,"Furcation Lingual 1":0,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     37:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":0,"Furcation Lingual 1":0,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     38:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":0,"Furcation Lingual 1":0,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     41:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     42:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     43:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     44:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     45:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":null,"Furcation Lingual 1":null,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     46:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":0,"Furcation Lingual 1":0,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     47:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":0,"Furcation Lingual 1":0,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"
        //     48:{type: String},// "{"Note":"","Mobility":0,"Tooth Status":0,"Furcation":{"Furcation Buccal":0,"Furcation Lingual 1":0,"Furcation Lingual 2":null},"BoP":{"BoP Buccal 1":false,"BoP Buccal 2":false,"BoP Buccal 3":false,"BoP Lingual 1":false,"BoP Lingual 2":false,"BoP Lingual 3":false,"BoP Score":0},"Plague":{"Plague Buccal 1":false,"Plague Buccal 2":false,"Plague Buccal 3":false,"Plague Lingual 1":false,"Plague Lingual 2":false,"Plague Lingual 3":false,"Plague Score":0},"Gingival Margin":{"GM Buccal 1":0,"GM Buccal 2":0,"GM Buccal 3":0,"GM Lingual 1":0,"GM Lingual 2":0,"GM Lingual 3":0},"Probing Depth":{"PD Buccal 1":0,"PD Buccal 2":0,"PD Buccal 3":0,"PD Lingual 1":0,"PD Lingual 2":0,"PD Lingual 3":0}}"


    // [11,12,13,14,15,16,17,18,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,41,42,43,44, 45, 46, 47, 48]


        i11:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i12:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i13:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i14:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":1}"
        i15:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i16:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i17:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i18:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}

        },// "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i21:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i22:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i23:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i24:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":1}"
        i25:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i26:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i27:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
             },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i28:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i31:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i32:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
            },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i33:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
        },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i34:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
        },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i35:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
        },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i36:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
        },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i37:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
        },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i38:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
        },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i41:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
        },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i42:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
        },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i43:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
        },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i44:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
        },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i45:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
        },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i46: {
            Q1: {type: Number},
            Q2: {type: Number},
            Q2a: {type: Number},
            Q3: {type: Number},
            Q3a: {type: Number},
            ToothStatus: {type: Number}
        },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i47:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
        },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        i48:{
            Q1:{type: Number},
            Q2:{type: Number},
            Q2a:{type: Number},
            Q3:{type: Number},
            Q3a:{type: Number},
            ToothStatus:{type: Number}
        },
        // "{"Q1":"0","Q2":"0.5","Q2a":"0","Q3":"0.5","Q3a":"0","ToothStatus":0}"
        messageForChart:{type: String},// "true"



    },
    // Specifying the collection to send/fetch the data to/from
    { collection: 'Assessments' });

module.exports = Assessment = mongoose.model('Assessment', AssessmentSchema);
