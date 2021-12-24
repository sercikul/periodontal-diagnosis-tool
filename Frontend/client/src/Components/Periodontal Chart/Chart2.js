import React, { useEffect, useLayoutEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './Chart.css';
import Button from '@material-ui/core/Button';
import ProgressBar from "./Calculations";
import { AiOutlineClose } from 'react-icons/ai';
import './Implants.css';
import { IconContext } from 'react-icons';
import { HeaderImplant, SubHeaderImplant } from './Chart-Styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

//Table Styling

const StyledFormControl = withStyles((theme) => ({
  root: {
      color: '#fff',
      width: "80%",
      maxWidth: "600px",
      top: "195%",
      position: 'absolute',
      marginRight: "-10%",
  }
}))(FormControl);

const StyledFormControlLabel = withStyles((theme) => ({
  root: {
      color: '#F5F5F5',
      position: 'relative',
      marginRight: "10%",
      overflow: 'visible',
    },
  label: {
      fontSize: '0.85rem',
  }
}))(FormControlLabel);

const StyledFormLabel = withStyles((theme) => ({
  root: {
    color: '#F5F5F5',
    fontSize: "1rem",
    fontWeight: "bold",
    "&.Mui-focused": {
      color: "#F5F5F5"
    }
  }
}))(FormLabel);


const StyledRadio = withStyles((theme) => ({
  root: {
    color: '#F5F5F5',
    '&$checked': {
      color: '#F5F5F5',
    },
  },
  checked: {},
}))(Radio);

const StyledRadioGroup = withStyles((theme) => ({
  root: {
    color: '#fff',
    marginBottom: "4%",
    marginLeft: "4%",
  }
}))(RadioGroup);


const PlagueTableCell = withStyles((theme) => ({

  body: {
    borderTop: 'none',
    borderBottom: 'none',
    borderLeft: 'none',
    borderWidth: '1px',
    marginBottom: '-10px'
  },

  footer: {
    color: theme.palette.common.white,
    fontSize: 12,
  }
}))(TableCell);

const PlagueButton = withStyles((theme) => ({
  root: {
      backgroundColor: '#eee',
      minHeight: '21px',
      marginInlineStart: '-21px',
      marginInlineEnd: '-28px',
      marginBottom: '5px',
      borderRadius: '100%',
  
  }
}))(Button);

const SpaceCell = withStyles((theme) => ({
  root: {
  height: '27px',
  border: 'none',
},
}))(TableCell);



const StyledContainer1 = withStyles((theme) => ({
  root: {
      width: 536,
      marginTop: 50,
      marginLeft: 250,
      left: '-1px',
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
      borderWidth: .01, 
      borderColor: 'transparent',
      borderBottomStyle: 'hidden',
      borderRightStyle: 'hidden',
      borderLeftStyle: 'hidden',
      overflow: 'hidden'
  }
}))(TableContainer);


const StyledContainer2 = withStyles((theme) => ({
root: {
    width: 536,
    marginTop: 50,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: .01, 
    borderColor: 'transparent',
    borderBottomStyle: 'hidden',
    borderRightStyle: 'hidden',
    borderLeftStyle: 'hidden',
    overflow: 'hidden'
}
}))(TableContainer);



const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.white,
    fontSize: 12,
  },
  body: {
    fontSize: 12,
    textAlign: 'center',
    width: 67
  },

  footer: {
    color: theme.palette.common.white,
    fontSize: 12,
  }
}))(TableCell);


const ImgCell = withStyles((theme) => ({
  root: {
    height: '90px',
    maxWidth: '34px',
    zIndex: '100',
    border: 'none'
  },
}))(TableCell);



const StyledButton = withStyles((theme) => ({
    root: {
        backgroundColor: '#eee',
        minHeight: '26px',
        marginInlineStart: '-21px',
        marginInlineEnd: '-28px',
        marginTop: '-7px',
        marginBottom: '-5px',
    
    }
  }))(Button);


  const StyledButtonLast = withStyles((theme) => ({
    root: {
        backgroundColor: '#eee',
        minHeight: '26px',
        marginInlineStart: '-29px',
        marginInlineEnd: '-28px',
        marginTop: '-7px',
        marginBottom: '-5px',
    
    }
  }))(Button);


//makeStyles framework to style various table elements
const useStyles = makeStyles({
  table: {
    minWidth: '200px',
  },

  disabled: {
    display: 'none',
    position: 'fixed'
  },
 
  disable_furcation: {
    visibility: 'hidden',
  },

  implant: {
    height: '20px',
    width: '20px',
    position: 'absolute'
  },

  furc: {
    height: '40px',
    width: '40px',
    position: 'absolute',
    marginRight: '-13px',
    marginBottom: '-8px'
  },

  furc_roman: {
    height: '40px',
    width: '40px',
    position: 'absolute',
    marginRight: '3px',
    marginBottom: '-4px',
    fontSize: '20px',
    color: '#af1058', 
    fontWeight: 'bold'
  },


  furc_img_18: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '3px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '68px'
  },

  furc_img_18_l: {
    height: '40px',
    width: '40px',
    marginLeft: '2px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '86px'
  },

  furc_img_17: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '5px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '75px'
  }, 

  furc_img_17_l: {
    height: '40px',
    width: '40px',
    marginLeft: '4px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '89px' 
  },


  furc_img_16: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '1px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '76px'
  },

  furc_img_16_l: {
    height: '40px',
    width: '40px',
    marginLeft: '7px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '84px'
  }, 



  furc_img_28: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '7px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '72px'
  },

  furc_img_28_l: {
    height: '40px',
    width: '40px',
    marginLeft: '5px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '91px'
  },


  furc_img_27: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '7px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '74px'
  },

  furc_img_27_l: {
    height: '40px',
    width: '40px',
    marginLeft: '4px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '90px'
  },

  furc_img_26: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '6px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '78px'
  },

  furc_img_26_l: {
    height: '40px',
    width: '40px',
    marginLeft: '0px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '84px'
  },


  first_half: {
    backgroundColor: '#193d66',
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: '#4972a1',
    }
  },
  second_half: {
    backgroundColor:  '#af1058',
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: '#a1607d',
    }
  },
  
  small_btn: {
      position: 'relative',
      height: '15px'
  },
  small_btn_1: {
      position: 'absolute',
      minWidth: '9px',
      paddingRight: '7px',
      paddingLeft: '12px',
      left: '6px',
      top: '1.5px',
      transition: 'all 0.2s ease-out',
  },

  small_btn_1_bop: {
    position: 'absolute',
    minWidth: '9px',
    paddingRight: '7px',
    paddingLeft: '12px',
    left: '6px',
    top: '1.5px',
    backgroundColor: 'red',
    transition: 'all 0.2s ease-out',
    "&:hover": {
      backgroundColor: 'red'
    }
},

small_btn_1_Plague: {
  position: 'absolute',
  minWidth: '9px',
  paddingRight: '7px',
  paddingLeft: '12px',
  left: '6px',
  top: '1.5px',
  backgroundColor: '#6a0dad',
  transition: 'all 0.2s ease-out',
  "&:hover": {
    backgroundColor: '#6a0dad'
  }
},

  small_btn_2: {
    position: 'absolute',
    minWidth: '6px',
    paddingRight: '7px',
    paddingLeft: '12px',
    left: '28.5px',
    top: '1.5px',
    transition: 'all 0.2s ease-out',
  },

  small_btn_2_bop: {
    position: 'absolute',
    minWidth: '6px',
    paddingRight: '7px',
    paddingLeft: '12px',
    left: '28.5px',
    top: '1.5px',
    backgroundColor: 'red',
    transition: 'all 0.2s ease-out',
    "&:hover": {
      backgroundColor: 'red'
    }
},

small_btn_2_Plague: {
  position: 'absolute',
  minWidth: '6px',
  paddingRight: '7px',
  paddingLeft: '12px',
  left: '28.5px',
  top: '1.5px',
  backgroundColor: '#6a0dad',
  transition: 'all 0.2s ease-out',
  "&:hover": {
    backgroundColor: '#6a0dad'
  }
},



  small_btn_3: {
    position: 'absolute',
    minWidth: '9px',
    paddingRight: '7px',
    paddingLeft: '12px',
    right: '5px',
    top: '1.5px',
    transition: 'all 0.2s ease-out',
  },

  small_btn_3_lst: {
    position: 'absolute',
    minWidth: '9px',
    paddingRight: '7px',
    paddingLeft: '12px',
    right: '14px',
    top: '1.5px',
    transition: 'all 0.2s ease-out',
  },



  small_btn_3_bop: {
    position: 'absolute',
    minWidth: '9px',
    paddingRight: '7px',
    paddingLeft: '12px',
    right: '5px',
    top: '1.5px',
    backgroundColor: 'red',
    transition: 'all 0.2s ease-out',
    "&:hover": {
      backgroundColor: 'red'
    }
},
small_btn_3_bop_lst: {
  position: 'absolute',
  minWidth: '9px',
  paddingRight: '7px',
  paddingLeft: '12px',
  right: '14px',
  top: '1.5px',
  backgroundColor: 'red',
  transition: 'all 0.2s ease-out',
  "&:hover": {
    backgroundColor: 'red'
  }
},
small_btn_3_Plague: {
  position: 'absolute',
  minWidth: '9px',
  paddingRight: '7px',
  paddingLeft: '12px',
  right: '5px',
  top: '1.5px',
  backgroundColor: '#6a0dad',
  transition: 'all 0.2s ease-out',
  "&:hover": {
    backgroundColor: '#6a0dad'
  }
},

small_btn_3_Plague_lst: {
  position: 'absolute',
  minWidth: '9px',
  paddingRight: '7px',
  paddingLeft: '12px',
  right: '14px',
  top: '1.5px',
  backgroundColor: '#6a0dad',
  transition: 'all 0.2s ease-out',
  "&:hover": {
    backgroundColor: '#6a0dad'
  }
},

  medium_btn: {
    position: 'relative',
    height: '15px',
  },

  medium_btn_1: {
    position: 'absolute',
    minWidth: '15px',
    left: '6px',
    top: '1.5px',
    transition: 'all 0.2s ease-out',
    paddingRight: '13px',
},

  medium_btn_2: {
    position: 'absolute',
    minWidth: '15px',
    right: '5px',
    top: '1.5px',
    transition: 'all 0.2s ease-out',
    paddingRight: '13px',
  },




  tooth_img_18: {
    width: '56px',
    marginRight: '-24px',
    marginLeft: '-6px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '-2px',
    height: '160px'
  },

  tooth_img_17: {
    width: '60px',
    marginRight: '-24px',
    marginLeft: '-13px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '0px',
    height: '160px'
  },

  tooth_img_16: {
    width: '63px',
    marginRight: '-22px',
    marginLeft: '-14px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '6px',
    height: '156px'
  },

  tooth_img_15: {
    width: '46px',
    marginRight: '-18px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '7px',
    height: '160px'

  },

  tooth_img_14: {
    width: '47px',
    marginRight: '-24px',
    marginLeft: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '9.5px'
  },

  tooth_img_13: {
    width: '46px',
    marginRight: '-20px',
    marginLeft: '-6px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '11px'
  },

  tooth_img_12: {
    width: '42px',
    marginRight: '-22px',
    marginLeft: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '6px',
    height: '162px'
  },

  tooth_img_11: {
    width: '47px',
    height: '160px',
    marginRight: '-22px',
    marginLeft: '-8px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '6px',
  },

  tooth_img_18b: {
    width: '56px',
    marginRight: '-24px',
    marginLeft: '-6px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '30px',
    height: '160px'
  },

  tooth_img_17b: {
    marginTop: '28px',
    width: '61px',
    marginRight: '-24px',
    marginLeft: '-13px',
    position: 'absolute',
    zIndex: '-10',
    height: '160px'

  },

  tooth_img_16b: {
    width: '63px',
    marginRight: '-22px',
    marginLeft: '-14px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    height: '156px',
    marginTop: '29px'
  },

  tooth_img_15b: {
    width: '46px',
    marginRight: '-18px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '26px',
    height: '160px'

  },

  tooth_img_14b: {
    width: '46.5px',
    marginRight: '-24px',
    marginLeft: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '19px'
  },

  tooth_img_13b: {
    width: '46px',
    marginRight: '-20px',
    marginLeft: '-6px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '17px',
    height: '158px'
  },

  tooth_img_12b: {
    marginTop: '25px',
    width: '42px',
    marginRight: '-22px',
    marginLeft: '-4px',
    position: 'absolute',
    zIndex: '-10',
    height: '152px'
  },

  tooth_img_11b: {
    marginTop: '24px',
    width: '47px',
    height: '160px',
    marginRight: '-22px',
    marginLeft: '-8px',
    position: 'absolute',
    zIndex: '-10',
  },

  tooth_img_28: {
    width: '56px',
    marginLeft: '-13px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '-2px',
    height: '160px'
  },

  tooth_img_27: {
    width: '60px',
    marginRight: '-22px',
    marginLeft: '-11px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '0px',
    height: '160px'
  },

  tooth_img_26: {
    width: '62px',
    marginRight: '-24px',
    marginLeft: '-13px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '6px',
    height: '156px'
  },

  tooth_img_25: {
    width: '46px',
    marginLeft: '-8px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '4px',
    height: '161px'

  },

  tooth_img_24: {
    width: '47px',
    marginRight: '-24px',
    marginLeft: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '6px'
  },

  tooth_img_23: {
    width: '46px',
    marginRight: '-20px',
    marginLeft: '-6px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '12px'
  },

  tooth_img_22: {
    width: '40px',
    marginRight: '-24px',
    marginLeft: '-1px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '6.25px'
  },

  tooth_img_21: {
    width: '47px',
    height: '158px',
    marginRight: '-18px',
    marginLeft: '-3px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '10px',
  },

  tooth_img_28b: {
    width: '56px',
    marginLeft: '-13px',
    position: 'absolute',
    zIndex: '-10',
    height: '150px',
    marginTop: '32px',
  },

  tooth_img_27b: {
    width: '60px',
    marginRight: '-22px',
    marginLeft: '-11px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '29px',
    height: '160px'

  },

  tooth_img_26b: {
    width: '62px',
    marginRight: '-24px',
    marginLeft: '-13px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '30px',
    height: '160px'
  },

  tooth_img_25b: {
    width: '46px',
    marginLeft: '-8px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    height: '161px',
    marginTop: '26px'

  },

  tooth_img_24b: {
    width: '46.5px',
    marginRight: '-24px',
    marginLeft: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '20px'
  },

  tooth_img_23b: {
    width: '42px',
    marginRight: '-20px',
    marginLeft: '-6px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '20px'
  },

  tooth_img_22b: {
    width: '41px',
    marginTop: '23px',
    marginRight: '-24px',
    marginLeft: '-1px',
    position: 'absolute',
    zIndex: '-10',
  },

  tooth_img_21b: {
    width: '47px',
    height: '158px',
    marginRight: '-18px',
    marginLeft: '-3px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '22px'
  },

  gingivalLine: {
    position: 'absolute',
    zIndex: '2',
    width: '68px'
  },

  pocketAtt: {
    position: 'absolute',
    zIndex: '1',
    width: '68px'
  },

  disable_line: {
    position: 'absolute',
    visibility: 'hidden'
  },

  divider: {
    color: '#193d66',
    backgroundColor: '#193d66',
    height: '10px',
    width: '80%',
    marginLeft: '180px'
  },

  img_change: {
    cursor: 'pointer',
    overflow: 'hidden'
  },
  lower: {
    maxHeight: '160px'
  },

  plague_separator: {
    lineHeight: '30px'
  },
});


//Lines that cover tooth images
function ToothLines1() {
  return <svg width="68px">
    <line x1="0" y1="11" x2="68" y2="11" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="18" x2="68" y2="18" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="25" x2="68" y2="25" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="32" x2="68" y2="32" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="39" x2="68" y2="39" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="46" x2="68" y2="46" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="53" x2="68" y2="53" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="60" x2="68" y2="60" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="67" x2="68" y2="67" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="74" x2="68" y2="74" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="81" x2="68" y2="81" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="88" x2="68" y2="88" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="95" x2="68" y2="95" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="102" x2="68" y2="102" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="109" x2="68" y2="109" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="116" x2="68" y2="116" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    </svg>

};


function ToothLines2() {
  return <svg width="68px" height="190px">
    <line x1="0" y1="74" x2="68" y2="74" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="81" x2="68" y2="81" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="88" x2="68" y2="88" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="95" x2="68" y2="95" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="102" x2="68" y2="102" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="109" x2="68" y2="109" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="116" x2="68" y2="116" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="123" x2="68" y2="123" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="130" x2="68" y2="130" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="137" x2="68" y2="137" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="144" x2="68" y2="144" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="151" x2="68" y2="151" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="158" x2="68" y2="158" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="165" x2="68" y2="165" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="172" x2="68" y2="172" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    <line x1="0" y1="179" x2="68" y2="179" stroke="#193d66" strokeWidth="2px" strokeOpacity="0.2" fill="none"/>
    </svg>

};


function CustomizedTables(props) {
  //Define props variables and initialise React Hooks
  const { printableVersion, dataBoP1, dataPlague1, dataDS1, lock18, lock17, lock16, lock15, lock14, lock13, lock12, lock11, lock28, lock27, lock26, lock25, lock24, lock23, lock22, lock21} = props;

  const [implantScreening, setImplantScreening] = useState(false);
  const [implantScreeningB, setImplantScreeningB] = useState(false);

  const classes = useStyles();

  const [Mob, setMob] = useState({
    t48: 0, t47: 0, t46: 0, t45: 0, t44: 0, t43: 0, t42: 0, t41: 0,
    t38: 0, t37: 0, t36: 0, t35: 0, t34: 0, t33: 0, t32: 0, t31: 0,
  });

  const [Note, setNote] = useState({
    t48: "", t47: "", t46: "", t45: "", t44: "", t43: "", t42: "", t41: "",
    t38: "", t37: "", t36: "", t35: "", t34: "", t33: "", t32: "", t31: "",
  });

  const [GM, setGM] = useState({
    t48_1: 0, t47_1: 0, t46_1: 0, t45_1: 0, t44_1: 0, t43_1: 0, t42_1: 0, t41_1: 0,
    t48_2: 0, t47_2: 0, t46_2: 0, t45_2: 0, t44_2: 0, t43_2: 0, t42_2: 0, t41_2: 0,
    t48_3: 0, t47_3: 0, t46_3: 0, t45_3: 0, t44_3: 0, t43_3: 0, t42_3: 0, t41_3: 0,

    t38_1: 0, t37_1: 0, t36_1: 0, t35_1: 0, t34_1: 0, t33_1: 0, t32_1: 0, t31_1: 0,
    t38_2: 0, t37_2: 0, t36_2: 0, t35_2: 0, t34_2: 0, t33_2: 0, t32_2: 0, t31_2: 0,
    t38_3: 0, t37_3: 0, t36_3: 0, t35_3: 0, t34_3: 0, t33_3: 0, t32_3: 0, t31_3: 0,

    t48_1_lg: 0, t47_1_lg: 0, t46_1_lg: 0, t45_1_lg: 0, t44_1_lg: 0, t43_1_lg: 0, t42_1_lg: 0, t41_1_lg: 0,
    t48_2_lg: 0, t47_2_lg: 0, t46_2_lg: 0, t45_2_lg: 0, t44_2_lg: 0, t43_2_lg: 0, t42_2_lg: 0, t41_2_lg: 0,
    t48_3_lg: 0, t47_3_lg: 0, t46_3_lg: 0, t45_3_lg: 0, t44_3_lg: 0, t43_3_lg: 0, t42_3_lg: 0, t41_3_lg: 0,

    t38_1_lg: 0, t37_1_lg: 0, t36_1_lg: 0, t35_1_lg: 0, t34_1_lg: 0, t33_1_lg: 0, t32_1_lg: 0, t31_1_lg: 0,
    t38_2_lg: 0, t37_2_lg: 0, t36_2_lg: 0, t35_2_lg: 0, t34_2_lg: 0, t33_2_lg: 0, t32_2_lg: 0, t31_2_lg: 0,
    t38_3_lg: 0, t37_3_lg: 0, t36_3_lg: 0, t35_3_lg: 0, t34_3_lg: 0, t33_3_lg: 0, t32_3_lg: 0, t31_3_lg: 0,
    
  });

  const [Probe, setProbe] = useState({
    p48_1: 0, p47_1: 0, p46_1: 0, p45_1: 0, p44_1: 0, p43_1: 0, p42_1: 0, p41_1: 0,
    p48_2: 0, p47_2: 0, p46_2: 0, p45_2: 0, p44_2: 0, p43_2: 0, p42_2: 0, p41_2: 0,
    p48_3: 0, p47_3: 0, p46_3: 0, p45_3: 0, p44_3: 0, p43_3: 0, p42_3: 0, p41_3: 0,

    p38_1: 0, p37_1: 0, p36_1: 0, p35_1: 0, p34_1: 0, p33_1: 0, p32_1: 0, p31_1: 0,
    p38_2: 0, p37_2: 0, p36_2: 0, p35_2: 0, p34_2: 0, p33_2: 0, p32_2: 0, p31_2: 0,
    p38_3: 0, p37_3: 0, p36_3: 0, p35_3: 0, p34_3: 0, p33_3: 0, p32_3: 0, p31_3: 0,

    p48_1_lg: 0, p47_1_lg: 0, p46_1_lg: 0, p45_1_lg: 0, p44_1_lg: 0, p43_1_lg: 0, p42_1_lg: 0, p41_1_lg: 0,
    p48_2_lg: 0, p47_2_lg: 0, p46_2_lg: 0, p45_2_lg: 0, p44_2_lg: 0, p43_2_lg: 0, p42_2_lg: 0, p41_2_lg: 0,
    p48_3_lg: 0, p47_3_lg: 0, p46_3_lg: 0, p45_3_lg: 0, p44_3_lg: 0, p43_3_lg: 0, p42_3_lg: 0, p41_3_lg: 0,

    p38_1_lg: 0, p37_1_lg: 0, p36_1_lg: 0, p35_1_lg: 0, p34_1_lg: 0, p33_1_lg: 0, p32_1_lg: 0, p31_1_lg: 0,
    p38_2_lg: 0, p37_2_lg: 0, p36_2_lg: 0, p35_2_lg: 0, p34_2_lg: 0, p33_2_lg: 0, p32_2_lg: 0, p31_2_lg: 0,
    p38_3_lg: 0, p37_3_lg: 0, p36_3_lg: 0, p35_3_lg: 0, p34_3_lg: 0, p33_3_lg: 0, p32_3_lg: 0, p31_3_lg: 0,
    
  });


  const [Lock, setLock] = useState({
    t48: 0, t47: 0, t46: 0, t45: 0, t44: 0, t43: 0, t42: 0, t41: 0,
    t38: 0, t37: 0, t36: 0, t35: 0, t34: 0, t33: 0, t32: 0, t31: 0,
  });


   const [BoP, setBoP] = useState({
    BoP48_1: false, BoP48_2: false, BoP48_3: false, BoP47_1: false, BoP47_2: false, BoP47_3: false, BoP46_1: false, BoP46_2: false, BoP46_3: false, BoP45_1: false, BoP45_2: false, BoP45_3: false,
    BoP44_1: false, BoP44_2: false, BoP44_3: false, BoP43_1: false, BoP43_2: false, BoP43_3: false, BoP42_1: false, BoP42_2: false, BoP42_3: false, BoP41_1: false, BoP41_2: false,  BoP41_3: false,
    BoP38_1: false, BoP38_2: false, BoP38_3: false, BoP37_1: false, BoP37_2: false, BoP37_3: false, BoP36_1: false, BoP36_2: false, BoP36_3: false, BoP35_1: false, BoP35_2: false, BoP35_3: false,
    BoP34_1: false, BoP34_2: false, BoP34_3: false, BoP33_1: false, BoP33_2: false, BoP33_3: false, BoP32_1: false, BoP32_2: false, BoP32_3: false, BoP31_1: false, BoP31_2: false,  BoP31_3: false,

    BoP48_1_lg: false, BoP48_2_lg: false, BoP48_3_lg: false, BoP47_1_lg: false, BoP47_2_lg: false, BoP47_3_lg: false, BoP46_1_lg: false, BoP46_2_lg: false, BoP46_3_lg: false, BoP45_1_lg: false, BoP45_2_lg: false, BoP45_3_lg: false,
    BoP44_1_lg: false, BoP44_2_lg: false, BoP44_3_lg: false, BoP43_1_lg: false, BoP43_2_lg: false, BoP43_3_lg: false, BoP42_1_lg: false, BoP42_2_lg: false, BoP42_3_lg: false, BoP41_1_lg: false, BoP41_2_lg: false,  BoP41_3_lg: false,
    BoP38_1_lg: false, BoP38_2_lg: false, BoP38_3_lg: false, BoP37_1_lg: false, BoP37_2_lg: false, BoP37_3_lg: false, BoP36_1_lg: false, BoP36_2_lg: false, BoP36_3_lg: false, BoP35_1_lg: false, BoP35_2_lg: false, BoP35_3_lg: false,
    BoP34_1_lg: false, BoP34_2_lg: false, BoP34_3_lg: false, BoP33_1_lg: false, BoP33_2_lg: false, BoP33_3_lg: false, BoP32_1_lg: false, BoP32_2_lg: false, BoP32_3_lg: false, BoP31_1_lg: false, BoP31_2_lg: false,  BoP31_3_lg: false
    
    ,BoP_total_48: 0, BoP_total_47: 0, BoP_total_46: 0, BoP_total_45: 0, BoP_total_44: 0, BoP_total_43: 0, BoP_total_42: 0, BoP_total_41: 0,
    BoP_total_38: 0, BoP_total_37: 0, BoP_total_36: 0, BoP_total_35: 0, BoP_total_34: 0, BoP_total_33: 0, BoP_total_32: 0, BoP_total_31: 0,
  });

   const [Plague, setPlague] = useState({
    Plague48_1: false, Plague48_2: false, Plague48_3: false, Plague47_1: false, Plague47_2: false, Plague47_3: false, Plague46_1: false, Plague46_2: false, Plague46_3: false, Plague45_1: false, Plague45_2: false, Plague45_3: false,
    Plague44_1: false, Plague44_2: false, Plague44_3: false, Plague43_1: false, Plague43_2: false, Plague43_3: false, Plague42_1: false, Plague42_2: false, Plague42_3: false, Plague41_1: false, Plague41_2: false,  Plague41_3: false,
    Plague38_1: false, Plague38_2: false, Plague38_3: false, Plague37_1: false, Plague37_2: false, Plague37_3: false, Plague36_1: false, Plague36_2: false, Plague36_3: false, Plague35_1: false, Plague35_2: false, Plague35_3: false,
    Plague34_1: false, Plague34_2: false, Plague34_3: false, Plague33_1: false, Plague33_2: false, Plague33_3: false, Plague32_1: false, Plague32_2: false, Plague32_3: false, Plague31_1: false, Plague31_2: false,  Plague31_3: false,

    Plague48_1_lg: false, Plague48_2_lg: false, Plague48_3_lg: false, Plague47_1_lg: false, Plague47_2_lg: false, Plague47_3_lg: false, Plague46_1_lg: false, Plague46_2_lg: false, Plague46_3_lg: false, Plague45_1_lg: false, Plague45_2_lg: false, Plague45_3_lg: false,
    Plague44_1_lg: false, Plague44_2_lg: false, Plague44_3_lg: false, Plague43_1_lg: false, Plague43_2_lg: false, Plague43_3_lg: false, Plague42_1_lg: false, Plague42_2_lg: false, Plague42_3_lg: false, Plague41_1_lg: false, Plague41_2_lg: false,  Plague41_3_lg: false,
    Plague38_1_lg: false, Plague38_2_lg: false, Plague38_3_lg: false, Plague37_1_lg: false, Plague37_2_lg: false, Plague37_3_lg: false, Plague36_1_lg: false, Plague36_2_lg: false, Plague36_3_lg: false, Plague35_1_lg: false, Plague35_2_lg: false, Plague35_3_lg: false,
    Plague34_1_lg: false, Plague34_2_lg: false, Plague34_3_lg: false, Plague33_1_lg: false, Plague33_2_lg: false, Plague33_3_lg: false, Plague32_1_lg: false, Plague32_2_lg: false, Plague32_3_lg: false, Plague31_1_lg: false, Plague31_2_lg: false,  Plague31_3_lg: false,
  
    Plague_total_48: 0, Plague_total_47: 0, Plague_total_46: 0, Plague_total_45: 0, Plague_total_44: 0, Plague_total_43: 0, Plague_total_42: 0, Plague_total_41: 0,
    Plague_total_38: 0, Plague_total_37: 0, Plague_total_36: 0, Plague_total_35: 0, Plague_total_34: 0, Plague_total_33: 0, Plague_total_32: 0, Plague_total_31: 0,
  });



  const [Furc, setFurc] = useState({
    FurcCount48: 0, FurcCount47: 0, FurcCount46: 0,
    FurcCount48b: 0, FurcCount47b: 0, FurcCount46b: 0, FurcCount44b: 0, 
    FurcCount48br: 0, FurcCount47br: 0, FurcCount46br: 0, FurcCount44br: 0,

    FurcCount38: 0, FurcCount37: 0, FurcCount36: 0, 
    FurcCount38b: 0, FurcCount37b: 0, FurcCount36b: 0, FurcCount34b: 0,
    FurcCount38br: 0, FurcCount37br: 0, FurcCount36br: 0, FurcCount34br: 0,

  })

  function furc_flow48() { 
    if (Furc.FurcCount48 === 0) {
      return () => setFurc({ ...Furc, FurcCount48: Furc.FurcCount48 + 1});
    } else if (Furc.FurcCount48 === 1) {
      return () => setFurc({ ...Furc, FurcCount48: Furc.FurcCount48 + 1});
    } else if (Furc.FurcCount48 === 2) {
      return () => setFurc({ ...Furc, FurcCount48: Furc.FurcCount48 + 1});
    } else if (Furc.FurcCount48 === 3) {
      return () => setFurc({ ...Furc, FurcCount48: 0});
    }
  };
  function furc_flow48b() {
    if (Furc.FurcCount48b === 0) {
      return () => setFurc({ ...Furc, FurcCount48b: Furc.FurcCount48b + 1});
    } else if (Furc.FurcCount48b === 1) {
      return () => setFurc({ ...Furc, FurcCount48b: Furc.FurcCount48b + 1});
    } else if (Furc.FurcCount48b === 2) {
      return () => setFurc({ ...Furc, FurcCount48b: Furc.FurcCount48b + 1});
    } else if (Furc.FurcCount48b === 3) {
      return () => setFurc({ ...Furc, FurcCount48b: 0});
    }
  };
  function furc_flow47() { 
    if (Furc.FurcCount47 === 0) {
      return () => setFurc({ ...Furc, FurcCount47: Furc.FurcCount47 + 1});
    } else if (Furc.FurcCount47 === 1) {
      return () => setFurc({ ...Furc, FurcCount47: Furc.FurcCount47 + 1});
    } else if (Furc.FurcCount47 === 2) {
      return () => setFurc({ ...Furc, FurcCount47: Furc.FurcCount47 + 1});
    } else if (Furc.FurcCount47 === 3) {
      return () => setFurc({ ...Furc, FurcCount47: 0});
    }
  };
  function furc_flow47b() {
    if (Furc.FurcCount47b === 0) {
      return () => setFurc({ ...Furc, FurcCount47b: Furc.FurcCount47b + 1});
    } else if (Furc.FurcCount47b === 1) {
      return () => setFurc({ ...Furc, FurcCount47b: Furc.FurcCount47b + 1});
    } else if (Furc.FurcCount47b === 2) {
      return () => setFurc({ ...Furc, FurcCount47b: Furc.FurcCount47b + 1});
    } else if (Furc.FurcCount47b === 3) {
      return () => setFurc({ ...Furc, FurcCount47b: 0});
    }
  };

  function furc_flow46() { 
    if (Furc.FurcCount46 === 0) {
      return () => setFurc({ ...Furc, FurcCount46: Furc.FurcCount46 + 1});
    } else if (Furc.FurcCount46 === 1) {
      return () => setFurc({ ...Furc, FurcCount46: Furc.FurcCount46 + 1});
    } else if (Furc.FurcCount46 === 2) {
      return () => setFurc({ ...Furc, FurcCount46: Furc.FurcCount46 + 1});
    } else if (Furc.FurcCount46 === 3) {
      return () => setFurc({ ...Furc, FurcCount46: 0});
    }
  };
  function furc_flow46b() {
    if (Furc.FurcCount46b === 0) {
      return () => setFurc({ ...Furc, FurcCount46b: Furc.FurcCount46b + 1});
    } else if (Furc.FurcCount46b === 1) {
      return () => setFurc({ ...Furc, FurcCount46b: Furc.FurcCount46b + 1});
    } else if (Furc.FurcCount46b === 2) {
      return () => setFurc({ ...Furc, FurcCount46b: Furc.FurcCount46b + 1});
    } else if (Furc.FurcCount46b === 3) {
      return () => setFurc({ ...Furc, FurcCount46b: 0});
    }
  };

  function furc_flow36() { 
    if (Furc.FurcCount36 === 0) {
      return () => setFurc({ ...Furc, FurcCount36: Furc.FurcCount36 + 1});
    } else if (Furc.FurcCount36 === 1) {
      return () => setFurc({ ...Furc, FurcCount36: Furc.FurcCount36 + 1});
    } else if (Furc.FurcCount36 === 2) {
      return () => setFurc({ ...Furc, FurcCount36: Furc.FurcCount36 + 1});
    } else if (Furc.FurcCount36 === 3) {
      return () => setFurc({ ...Furc, FurcCount36: 0});
    }
  };
  function furc_flow36b() { 
    if (Furc.FurcCount36b === 0) {
      return () => setFurc({ ...Furc, FurcCount36b: Furc.FurcCount36b + 1});
    } else if (Furc.FurcCount36b === 1) {
      return () => setFurc({ ...Furc, FurcCount36b: Furc.FurcCount36b + 1});
    } else if (Furc.FurcCount36b === 2) {
      return () => setFurc({ ...Furc, FurcCount36b: Furc.FurcCount36b + 1});
    } else if (Furc.FurcCount36b === 3) {
      return () => setFurc({ ...Furc, FurcCount36b: 0});
    }
  };
  function furc_flow37() { 
    if (Furc.FurcCount37 === 0) {
      return () => setFurc({ ...Furc, FurcCount37: Furc.FurcCount37 + 1});
    } else if (Furc.FurcCount37 === 1) {
      return () => setFurc({ ...Furc, FurcCount37: Furc.FurcCount37 + 1});
    } else if (Furc.FurcCount37 === 2) {
      return () => setFurc({ ...Furc, FurcCount37: Furc.FurcCount37 + 1});
    } else if (Furc.FurcCount37 === 3) {
      return () => setFurc({ ...Furc, FurcCount37: 0});
    }
  };
  function furc_flow37b() { 
    if (Furc.FurcCount37b === 0) {
      return () => setFurc({ ...Furc, FurcCount37b: Furc.FurcCount37b + 1});
    } else if (Furc.FurcCount37b === 1) {
      return () => setFurc({ ...Furc, FurcCount37b: Furc.FurcCount37b + 1});
    } else if (Furc.FurcCount37b === 2) {
      return () => setFurc({ ...Furc, FurcCount37b: Furc.FurcCount37b + 1});
    } else if (Furc.FurcCount37b === 3) {
      return () => setFurc({ ...Furc, FurcCount37b: 0});
    }
  };

  function furc_flow38() { 
    if (Furc.FurcCount38 === 0) {
      return () => setFurc({ ...Furc, FurcCount38: Furc.FurcCount38 + 1});
    } else if (Furc.FurcCount38 === 1) {
      return () => setFurc({ ...Furc, FurcCount38: Furc.FurcCount38 + 1});
    } else if (Furc.FurcCount38 === 2) {
      return () => setFurc({ ...Furc, FurcCount38: Furc.FurcCount38 + 1});
    } else if (Furc.FurcCount38 === 3) {
      return () => setFurc({ ...Furc, FurcCount38: 0});
    }
  };
  function furc_flow38b() { 
    if (Furc.FurcCount38b === 0) {
      return () => setFurc({ ...Furc, FurcCount38b: Furc.FurcCount38b + 1});
    } else if (Furc.FurcCount38b === 1) {
      return () => setFurc({ ...Furc, FurcCount38b: Furc.FurcCount38b + 1});
    } else if (Furc.FurcCount38b === 2) {
      return () => setFurc({ ...Furc, FurcCount38b: Furc.FurcCount38b + 1});
    } else if (Furc.FurcCount38b === 3) {
      return () => setFurc({ ...Furc, FurcCount38b: 0});
    }
  };

  
  //Gingival margin and Probing Depth Visualisations

  function Gingival(line_id, poly_id, t1, t2, t3, s1) {
    const polyline = document.getElementById(poly_id);
    const line = document.getElementById(line_id);
    const g_margin_1 = t1;
    const g_margin_2 = t2;
    const g_margin_3 = t3;
    const g_margin_next = s1;
    if (polyline == null || line == null) {
      return;
    }

    let  Xstart = 9;
    let  Xend = 60;
    let Xmid = (Xstart + Xend) / 2;
    let GM1 = 116 - 7 * g_margin_1;
    let GM2 = 116 - 7 * g_margin_2;
    let GM3 = 116 - 7 * g_margin_3;

   
    let  string = Xstart + ", " + GM1 + "  " + 
      Xmid + ", " + GM2 + "  " + 
     Xend + ", " + GM3;

    polyline.setAttribute("points", string);

    let GMnext = 116 - 7 * g_margin_next;

    line.setAttribute("x1", Xend);
    line.setAttribute("y1", GM3);
    line.setAttribute("y2", GMnext);
  };

  function GingivalLg(line_id, poly_id, t1, t2, t3, s1) {
    const polyline = document.getElementById(poly_id);
    const line = document.getElementById(line_id);
    const g_margin_1 = t1;
    const g_margin_2 = t2;
    const g_margin_3 = t3;
    const g_margin_next = s1;
    if (polyline == null || line == null) {
      return;
    }

    let  Xstart = 9;
    let  Xend = 60;
    let Xmid = (Xstart + Xend) / 2;
    let GM1 = 74 + 7 * g_margin_1;
    let GM2 = 74 + 7 * g_margin_2;
    let GM3 = 74 + 7 * g_margin_3;

   
    let  string = Xstart + ", " + GM1 + "  " + 
      Xmid + ", " + GM2 + "  " + 
     Xend + ", " + GM3;

    polyline.setAttribute("points", string);

    let GMnext = 74 + 7 * g_margin_next;

    line.setAttribute("x1", Xend);
    line.setAttribute("y1", GM3);
    line.setAttribute("y2", GMnext);
  };


  function PocketAttachment(polygon_p,  polygon_inter, line_att, poly_att, gm1, gm2, gm3, pd1, pd2, pd3, pd_next, gm_next) {
    const polygon_pocket = document.getElementById(polygon_p);
    const inter_pocket = document.getElementById(polygon_inter);

    const polyAtt = document.getElementById(poly_att);
    const lineAtt = document.getElementById(line_att);

    const g_margin_1 = gm1;
    const g_margin_2 = gm2;
    const g_margin_3 = gm3;
    const g_margin_next = gm_next;

    const probing_d1 = pd1;
    const probing_d2 = pd2;
    const probing_d3 = pd3;
    const probing_d_next = pd_next;

    if (polygon_pocket == null || inter_pocket == null || polyAtt == null || lineAtt == null) {
      return;
    }

    let  Xstart = 9;
    let  Xend = 60;
    let Xmid = (Xstart + Xend) / 2;

    let GM1 = 116 - 7 * g_margin_1;
    let GM2 = 116 - 7 * g_margin_2;
    let GM3 = 116 - 7 * g_margin_3;
    let GMnext = 116 - 7 * g_margin_next;

    let PD1 = 7 * probing_d1;
    let PD2 = 7 * probing_d2;
    let PD3 = 7 * probing_d3;
    let PDnext = 7 * probing_d_next;

    let attLvlPrior = GM3 - PD3;
    let attLvlNext = GMnext - PDnext;

    let  pocketString = Xstart + ", " + (GM1-PD1) + "  " + 
      Xmid + ", " + (GM2-PD2) + "  " + 
     Xend + ", " + (GM3-PD3) + "  " + 
     Xend + ", " + GM3 + "  " +
     Xmid + ", " + GM2 + "  " + 
     Xstart + ", " + GM1
     ;

    let attLevelString = Xstart + ", " + (GM1-PD1) + "  " + 
    Xmid + ", " + (GM2-PD2) + "  " + 
    Xend + ", " + (GM3-PD3);

    let pocketInterString = Xend + ", " + (GM3-PD3) + "  " +
      76.5 + ", " + attLvlNext + "  " + 
      76.5 + ", " + GMnext + "  " + 
      Xend + ", " + GM3;


    polygon_pocket.setAttribute("points", pocketString);
    polyAtt.setAttribute("points", attLevelString);
    inter_pocket.setAttribute("points", pocketInterString);

    lineAtt.setAttribute("x1", Xend);
    lineAtt.setAttribute("y1", attLvlPrior);
    lineAtt.setAttribute("y2", attLvlNext);
  };

  function PocketAttachmentLg(polygon_p,  polygon_inter, line_att, poly_att, gm1, gm2, gm3, pd1, pd2, pd3, pd_next, gm_next) {
    const polygon_pocket = document.getElementById(polygon_p);
    const inter_pocket = document.getElementById(polygon_inter);

    const polyAtt = document.getElementById(poly_att);
    const lineAtt = document.getElementById(line_att);

    const g_margin_1 = gm1;
    const g_margin_2 = gm2;
    const g_margin_3 = gm3;
    const g_margin_next = gm_next;

    const probing_d1 = pd1;
    const probing_d2 = pd2;
    const probing_d3 = pd3;
    const probing_d_next = pd_next;

    if (polygon_pocket == null || inter_pocket == null || polyAtt == null || lineAtt == null) {
      return;
    }

    let  Xstart = 9;
    let  Xend = 60;
    let Xmid = (Xstart + Xend) / 2;

    let GM1 = 74 + 7 * g_margin_1;
    let GM2 = 74 + 7 * g_margin_2;
    let GM3 = 74 + 7 * g_margin_3;
    let GMnext = 74 + 7 * g_margin_next;

    let PD1 = 7 * probing_d1;
    let PD2 = 7 * probing_d2;
    let PD3 = 7 * probing_d3;
    let PDnext = 7 * probing_d_next;

    let attLvlPrior = GM3 + PD3;
    let attLvlNext = GMnext + PDnext;

    let  pocketString = Xstart + ", " + (GM1+PD1) + "  " + 
      Xmid + ", " + (GM2+PD2) + "  " + 
     Xend + ", " + (GM3+PD3) + "  " + 
     Xend + ", " + GM3 + "  " +
     Xmid + ", " + GM2 + "  " + 
     Xstart + ", " + GM1
     ;

    let attLevelString = Xstart + ", " + (GM1+PD1) + "  " + 
    Xmid + ", " + (GM2+PD2) + "  " + 
    Xend + ", " + (GM3+PD3);

    let pocketInterString = Xend + ", " + (GM3+PD3) + "  " +
      76.5 + ", " + attLvlNext + "  " + 
      76.5 + ", " + GMnext + "  " + 
      Xend + ", " + GM3;


    polygon_pocket.setAttribute("points", pocketString);
    polyAtt.setAttribute("points", attLevelString);
    inter_pocket.setAttribute("points", pocketInterString);

    lineAtt.setAttribute("x1", Xend);
    lineAtt.setAttribute("y1", attLvlPrior);
    lineAtt.setAttribute("y2", attLvlNext);
  };

  //First Half

  Gingival("line_48", "polyline_48", GM.t48_1, GM.t48_2, GM.t48_3, GM.t47_1);
  Gingival("line_47", "polyline_47", GM.t47_1, GM.t47_2, GM.t47_3, GM.t46_1);
  Gingival("line_46", "polyline_46", GM.t46_1, GM.t46_2, GM.t46_3, GM.t45_1);
  Gingival("line_45", "polyline_45", GM.t45_1, GM.t45_2, GM.t45_3, GM.t44_1);
  Gingival("line_44", "polyline_44", GM.t44_1, GM.t44_2, GM.t44_3, GM.t43_1);
  Gingival("line_43", "polyline_43", GM.t43_1, GM.t43_2, GM.t43_3, GM.t42_1);
  Gingival("line_42", "polyline_42", GM.t42_1, GM.t42_2, GM.t42_3, GM.t41_1);
  Gingival("line_41", "polyline_41", GM.t41_1, GM.t41_2, GM.t41_3, 0);

  GingivalLg("line_48_lg", "polyline_48_lg", GM.t48_1_lg, GM.t48_2_lg, GM.t48_3_lg, GM.t47_1_lg);
  GingivalLg("line_47_lg", "polyline_47_lg", GM.t47_1_lg, GM.t47_2_lg, GM.t47_3_lg, GM.t46_1_lg);
  GingivalLg("line_46_lg", "polyline_46_lg", GM.t46_1_lg, GM.t46_2_lg, GM.t46_3_lg, GM.t45_1_lg);
  GingivalLg("line_45_lg", "polyline_45_lg", GM.t45_1_lg, GM.t45_2_lg, GM.t45_3_lg, GM.t44_1_lg);
  GingivalLg("line_44_lg", "polyline_44_lg", GM.t44_1_lg, GM.t44_2_lg, GM.t44_3_lg, GM.t43_1_lg);
  GingivalLg("line_43_lg", "polyline_43_lg", GM.t43_1_lg, GM.t43_2_lg, GM.t43_3_lg, GM.t42_1_lg);
  GingivalLg("line_42_lg", "polyline_42_lg", GM.t42_1_lg, GM.t42_2_lg, GM.t42_3_lg, GM.t41_1_lg);
  GingivalLg("line_41_lg", "polyline_41_lg", GM.t41_1_lg, GM.t41_2_lg, GM.t41_3_lg, 0);


  PocketAttachment("polygon_48", "interpoly_48", "interline_48_attachment", "polyline_48_attachment", GM.t48_1, GM.t48_2, GM.t48_3, Probe.p48_1, Probe.p48_2, Probe.p48_3, Probe.p47_1, GM.t47_1);
  PocketAttachment("polygon_47", "interpoly_47", "interline_47_attachment", "polyline_47_attachment", GM.t47_1, GM.t47_2, GM.t47_3, Probe.p47_1, Probe.p47_2, Probe.p47_3, Probe.p46_1, GM.t46_1);
  PocketAttachment("polygon_46", "interpoly_46", "interline_46_attachment", "polyline_46_attachment", GM.t46_1, GM.t46_2, GM.t46_3, Probe.p46_1, Probe.p46_2, Probe.p46_3, Probe.p45_1, GM.t45_1);
  PocketAttachment("polygon_45", "interpoly_45", "interline_45_attachment", "polyline_45_attachment", GM.t45_1, GM.t45_2, GM.t45_3, Probe.p45_1, Probe.p45_2, Probe.p45_3, Probe.p44_1, GM.t44_1);
  PocketAttachment("polygon_44", "interpoly_44", "interline_44_attachment", "polyline_44_attachment", GM.t44_1, GM.t44_2, GM.t44_3, Probe.p44_1, Probe.p44_2, Probe.p44_3, Probe.p43_1, GM.t43_1);
  PocketAttachment("polygon_43", "interpoly_43", "interline_43_attachment", "polyline_43_attachment", GM.t43_1, GM.t43_2, GM.t43_3, Probe.p43_1, Probe.p43_2, Probe.p43_3, Probe.p42_1, GM.t42_1);
  PocketAttachment("polygon_42", "interpoly_42", "interline_42_attachment", "polyline_42_attachment", GM.t42_1, GM.t42_2, GM.t42_3, Probe.p42_1, Probe.p42_2, Probe.p42_3, Probe.p41_1, GM.t41_1);
  PocketAttachment("polygon_41", "interpoly_41", "interline_41_attachment", "polyline_41_attachment", GM.t41_1, GM.t41_2, GM.t41_3, Probe.p41_1, Probe.p41_2, Probe.p41_3, 0, 0);

  PocketAttachmentLg("polygon_48_lg", "interpoly_48_lg", "interline_48_attachment_lg", "polyline_48_attachment_lg", GM.t48_1_lg, GM.t48_2_lg, GM.t48_3_lg, Probe.p48_1_lg, Probe.p48_2_lg, Probe.p48_3_lg, Probe.p47_1_lg, GM.t47_1_lg);
  PocketAttachmentLg("polygon_47_lg", "interpoly_47_lg", "interline_47_attachment_lg", "polyline_47_attachment_lg", GM.t47_1_lg, GM.t47_2_lg, GM.t47_3_lg, Probe.p47_1_lg, Probe.p47_2_lg, Probe.p47_3_lg, Probe.p46_1_lg, GM.t46_1_lg);
  PocketAttachmentLg("polygon_46_lg", "interpoly_46_lg", "interline_46_attachment_lg", "polyline_46_attachment_lg", GM.t46_1_lg, GM.t46_2_lg, GM.t46_3_lg, Probe.p46_1_lg, Probe.p46_2_lg, Probe.p46_3_lg, Probe.p45_1_lg, GM.t45_1_lg);
  PocketAttachmentLg("polygon_45_lg", "interpoly_45_lg", "interline_45_attachment_lg", "polyline_45_attachment_lg", GM.t45_1_lg, GM.t45_2_lg, GM.t45_3_lg, Probe.p45_1_lg, Probe.p45_2_lg, Probe.p45_3_lg, Probe.p44_1_lg, GM.t44_1_lg);
  PocketAttachmentLg("polygon_44_lg", "interpoly_44_lg", "interline_44_attachment_lg", "polyline_44_attachment_lg", GM.t44_1_lg, GM.t44_2_lg, GM.t44_3_lg, Probe.p44_1_lg, Probe.p44_2_lg, Probe.p44_3_lg, Probe.p43_1_lg, GM.t43_1_lg);
  PocketAttachmentLg("polygon_43_lg", "interpoly_43_lg", "interline_43_attachment_lg", "polyline_43_attachment_lg", GM.t43_1_lg, GM.t43_2_lg, GM.t43_3_lg, Probe.p43_1_lg, Probe.p43_2_lg, Probe.p43_3_lg, Probe.p42_1_lg, GM.t42_1_lg);
  PocketAttachmentLg("polygon_42_lg", "interpoly_42_lg", "interline_42_attachment_lg", "polyline_42_attachment_lg", GM.t42_1_lg, GM.t42_2_lg, GM.t42_3_lg, Probe.p42_1_lg, Probe.p42_2_lg, Probe.p42_3_lg, Probe.p41_1_lg, GM.t41_1_lg);
  PocketAttachmentLg("polygon_41_lg", "interpoly_41_lg", "interline_41_attachment_lg", "polyline_41_attachment_lg", GM.t41_1_lg, GM.t41_2_lg, GM.t41_3_lg, Probe.p41_1_lg, Probe.p41_2_lg, Probe.p41_3_lg, 0, 0);



  //Second Half 
  
  Gingival("line_38", "polyline_38", GM.t38_1, GM.t38_2, GM.t38_3, 0);
  Gingival("line_37", "polyline_37", GM.t37_1, GM.t37_2, GM.t37_3, GM.t38_1);
  Gingival("line_36", "polyline_36", GM.t36_1, GM.t36_2, GM.t36_3, GM.t37_1);
  Gingival("line_35", "polyline_35", GM.t35_1, GM.t35_2, GM.t35_3, GM.t36_1);
  Gingival("line_34", "polyline_34", GM.t34_1, GM.t34_2, GM.t34_3, GM.t35_1);
  Gingival("line_33", "polyline_33", GM.t33_1, GM.t33_2, GM.t33_3, GM.t34_1);
  Gingival("line_32", "polyline_32", GM.t32_1, GM.t32_2, GM.t32_3, GM.t33_1);
  Gingival("line_31", "polyline_31", GM.t31_1, GM.t31_2, GM.t31_3, GM.t32_1);

  GingivalLg("line_38_lg", "polyline_38_lg", GM.t38_1_lg, GM.t38_2_lg, GM.t38_3_lg, 0);
  GingivalLg("line_37_lg", "polyline_37_lg", GM.t37_1_lg, GM.t37_2_lg, GM.t37_3_lg, GM.t38_1_lg);
  GingivalLg("line_36_lg", "polyline_36_lg", GM.t36_1_lg, GM.t36_2_lg, GM.t36_3_lg, GM.t37_1_lg);
  GingivalLg("line_35_lg", "polyline_35_lg", GM.t35_1_lg, GM.t35_2_lg, GM.t35_3_lg, GM.t36_1_lg);
  GingivalLg("line_34_lg", "polyline_34_lg", GM.t34_1_lg, GM.t34_2_lg, GM.t34_3_lg, GM.t35_1_lg);
  GingivalLg("line_33_lg", "polyline_33_lg", GM.t33_1_lg, GM.t33_2_lg, GM.t33_3_lg, GM.t34_1_lg);
  GingivalLg("line_32_lg", "polyline_32_lg", GM.t32_1_lg, GM.t32_2_lg, GM.t32_3_lg, GM.t33_1_lg);
  GingivalLg("line_31_lg", "polyline_31_lg", GM.t31_1_lg, GM.t31_2_lg, GM.t31_3_lg, GM.t32_1_lg);


  PocketAttachment("polygon_38", "interpoly_38", "interline_38_attachment", "polyline_38_attachment", GM.t38_1, GM.t38_2, GM.t38_3, Probe.p38_1, Probe.p38_2, Probe.p38_3, 0, 0);
  PocketAttachment("polygon_37", "interpoly_37", "interline_37_attachment", "polyline_37_attachment", GM.t37_1, GM.t37_2, GM.t37_3, Probe.p37_1, Probe.p37_2, Probe.p37_3, Probe.p38_1, GM.t38_1);
  PocketAttachment("polygon_36", "interpoly_36", "interline_36_attachment", "polyline_36_attachment", GM.t36_1, GM.t36_2, GM.t36_3, Probe.p36_1, Probe.p36_2, Probe.p36_3, Probe.p37_1, GM.t37_1);
  PocketAttachment("polygon_35", "interpoly_35", "interline_35_attachment", "polyline_35_attachment", GM.t35_1, GM.t35_2, GM.t35_3, Probe.p35_1, Probe.p35_2, Probe.p35_3, Probe.p36_1, GM.t36_1);
  PocketAttachment("polygon_34", "interpoly_34", "interline_34_attachment", "polyline_34_attachment", GM.t34_1, GM.t34_2, GM.t34_3, Probe.p34_1, Probe.p34_2, Probe.p34_3, Probe.p35_1, GM.t35_1);
  PocketAttachment("polygon_33", "interpoly_33", "interline_33_attachment", "polyline_33_attachment", GM.t33_1, GM.t33_2, GM.t33_3, Probe.p33_1, Probe.p33_2, Probe.p33_3, Probe.p34_1, GM.t34_1);
  PocketAttachment("polygon_32", "interpoly_32", "interline_32_attachment", "polyline_32_attachment", GM.t32_1, GM.t32_2, GM.t32_3, Probe.p32_1, Probe.p32_2, Probe.p32_3, Probe.p33_1, GM.t33_1);
  PocketAttachment("polygon_31", "interpoly_31", "interline_31_attachment", "polyline_31_attachment", GM.t31_1, GM.t31_2, GM.t31_3, Probe.p31_1, Probe.p31_2, Probe.p31_3, Probe.p32_1, GM.t32_1);

  PocketAttachmentLg("polygon_38_lg", "interpoly_38_lg", "interline_38_attachment_lg", "polyline_38_attachment_lg", GM.t38_1_lg, GM.t38_2_lg, GM.t38_3_lg, Probe.p38_1_lg, Probe.p38_2_lg, Probe.p38_3_lg, 0, 0);
  PocketAttachmentLg("polygon_37_lg", "interpoly_37_lg", "interline_37_attachment_lg", "polyline_37_attachment_lg", GM.t37_1_lg, GM.t37_2_lg, GM.t37_3_lg, Probe.p37_1_lg, Probe.p37_2_lg, Probe.p37_3_lg, Probe.p38_1_lg, GM.t38_1_lg);
  PocketAttachmentLg("polygon_36_lg", "interpoly_36_lg", "interline_36_attachment_lg", "polyline_36_attachment_lg", GM.t36_1_lg, GM.t36_2_lg, GM.t36_3_lg, Probe.p36_1_lg, Probe.p36_2_lg, Probe.p36_3_lg, Probe.p37_1_lg, GM.t37_1_lg);
  PocketAttachmentLg("polygon_35_lg", "interpoly_35_lg", "interline_35_attachment_lg", "polyline_35_attachment_lg", GM.t35_1_lg, GM.t35_2_lg, GM.t35_3_lg, Probe.p35_1_lg, Probe.p35_2_lg, Probe.p35_3_lg, Probe.p36_1_lg, GM.t36_1_lg);
  PocketAttachmentLg("polygon_34_lg", "interpoly_34_lg", "interline_34_attachment_lg", "polyline_34_attachment_lg", GM.t34_1_lg, GM.t34_2_lg, GM.t34_3_lg, Probe.p34_1_lg, Probe.p34_2_lg, Probe.p34_3_lg, Probe.p35_1_lg, GM.t35_1_lg);
  PocketAttachmentLg("polygon_33_lg", "interpoly_33_lg", "interline_33_attachment_lg", "polyline_33_attachment_lg", GM.t33_1_lg, GM.t33_2_lg, GM.t33_3_lg, Probe.p33_1_lg, Probe.p33_2_lg, Probe.p33_3_lg, Probe.p34_1_lg, GM.t34_1_lg);
  PocketAttachmentLg("polygon_32_lg", "interpoly_32_lg", "interline_32_attachment_lg", "polyline_32_attachment_lg", GM.t32_1_lg, GM.t32_2_lg, GM.t32_3_lg, Probe.p32_1_lg, Probe.p32_2_lg, Probe.p32_3_lg, Probe.p33_1_lg, GM.t33_1_lg);
  PocketAttachmentLg("polygon_31_lg", "interpoly_31_lg", "interline_31_attachment_lg", "polyline_31_attachment_lg", GM.t31_1_lg, GM.t31_2_lg, GM.t31_3_lg, Probe.p31_1_lg, Probe.p31_2_lg, Probe.p31_3_lg, Probe.p32_1_lg, GM.t32_1_lg);


  
//Session Storage for all the teeth
  //t48
  const tooth48 = { 
  "Note": Note.t48,
  "Mobility": Mob.t48 === "" ? 0 : Mob.t48,
  "Tooth Status": Lock.t48,
  "Furcation":  {
    "Furcation Buccal": Furc.FurcCount48,
    "Furcation Lingual 1": Furc.FurcCount48b,
    "Furcation Lingual 2": null },
  "BoP": {
    "BoP Buccal 1": BoP.BoP48_1,
    "BoP Buccal 2": BoP.BoP48_2,
    "BoP Buccal 3": BoP.BoP48_3,
    "BoP Lingual 1": BoP.BoP48_1_lg,
    "BoP Lingual 2": BoP.BoP48_2_lg,
    "BoP Lingual 3": BoP.BoP48_3_lg,
    "BoP Score": BoP.BoP_total_48 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague48_1,
    "Plague Buccal 2": Plague.Plague48_2,
    "Plague Buccal 3": Plague.Plague48_3,
    "Plague Lingual 1": Plague.Plague48_1_lg,
    "Plague Lingual 2": Plague.Plague48_2_lg,
    "Plague Lingual 3": Plague.Plague48_3_lg,
    "Plague Score": Plague.Plague_total_48 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t48_1 === "" ? 0 : GM.t48_1,
      "GM Buccal 2": GM.t48_2 === "" ? 0 : GM.t48_2,
      "GM Buccal 3": GM.t48_3 === "" ? 0 : GM.t48_3,
      "GM Lingual 1": GM.t48_1_lg === "" ? 0 : GM.t48_1_lg,
      "GM Lingual 2": GM.t48_2_lg === "" ? 0 : GM.t48_2_lg,
      "GM Lingual 3": GM.t48_3_lg === "" ? 0 : GM.t48_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p48_1 === "" ? 0 : Probe.p48_1,
      "PD Buccal 2": Probe.p48_2 === "" ? 0 : Probe.p48_2,
      "PD Buccal 3": Probe.p48_3 === "" ? 0 : Probe.p48_3,
      "PD Lingual 1": Probe.p48_1_lg === "" ? 0 : Probe.p48_1_lg,
      "PD Lingual 2": Probe.p48_2_lg === "" ? 0 : Probe.p48_2_lg,
      "PD Lingual 3": Probe.p48_3_lg === "" ? 0 : Probe.p48_3_lg },   
  };

  //t47
  const tooth47 = { 
    "Note": Note.t47,
    "Mobility": Mob.t47 === "" ? 0 : Mob.t47,
    "Tooth Status": Lock.t47,
    "Furcation":  {
      "Furcation Buccal": Furc.FurcCount47,
      "Furcation Lingual 1": Furc.FurcCount47b,
      "Furcation Lingual 2": null },
    "BoP": {
      "BoP Buccal 1": BoP.BoP47_1,
      "BoP Buccal 2": BoP.BoP47_2,
      "BoP Buccal 3": BoP.BoP47_3,
      "BoP Lingual 1": BoP.BoP47_1_lg,
      "BoP Lingual 2": BoP.BoP47_2_lg,
      "BoP Lingual 3": BoP.BoP47_3_lg,
      "BoP Score": BoP.BoP_total_47  },
    "Plague": {
      "Plague Buccal 1": Plague.Plague47_1,
      "Plague Buccal 2": Plague.Plague47_2,
      "Plague Buccal 3": Plague.Plague47_3,
      "Plague Lingual 1": Plague.Plague47_1_lg,
      "Plague Lingual 2": Plague.Plague47_2_lg,
      "Plague Lingual 3": Plague.Plague47_3_lg,
      "Plague Score": Plague.Plague_total_47 },
      "Gingival Margin": {
        "GM Buccal 1": GM.t47_1 === "" ? 0 : GM.t47_1,
        "GM Buccal 2": GM.t47_2 === "" ? 0 : GM.t47_2,
        "GM Buccal 3": GM.t47_3 === "" ? 0 : GM.t47_3,
        "GM Lingual 1": GM.t47_1_lg === "" ? 0 : GM.t47_1_lg,
        "GM Lingual 2": GM.t47_2_lg === "" ? 0 : GM.t47_2_lg,
        "GM Lingual 3": GM.t47_3_lg === "" ? 0 : GM.t47_3_lg },
      "Probing Depth": {
        "PD Buccal 1": Probe.p47_1 === "" ? 0 : Probe.p47_1,
        "PD Buccal 2": Probe.p47_2 === "" ? 0 : Probe.p47_2,
        "PD Buccal 3": Probe.p47_3 === "" ? 0 : Probe.p47_3,
        "PD Lingual 1": Probe.p47_1_lg === "" ? 0 : Probe.p47_1_lg,
        "PD Lingual 2": Probe.p47_2_lg === "" ? 0 : Probe.p47_2_lg,
        "PD Lingual 3": Probe.p47_3_lg === "" ? 0 : Probe.p47_3_lg },  
    };

    //t46
        const tooth46 = { 
        "Note": Note.t46,
        "Mobility": Mob.t46 === "" ? 0 : Mob.t46,
        "Tooth Status": Lock.t46,
        "Furcation":  {
          "Furcation Buccal": Furc.FurcCount46,
          "Furcation Lingual 1": Furc.FurcCount46b,
          "Furcation Lingual 2": null },
        "BoP": {
          "BoP Buccal 1": BoP.BoP46_1,
          "BoP Buccal 2": BoP.BoP46_2,
          "BoP Buccal 3": BoP.BoP46_3,
          "BoP Lingual 1": BoP.BoP46_1_lg,
          "BoP Lingual 2": BoP.BoP46_2_lg,
          "BoP Lingual 3": BoP.BoP46_3_lg,
          "BoP Score": BoP.BoP_total_46 },
        "Plague": {
          "Plague Buccal 1": Plague.Plague46_1,
          "Plague Buccal 2": Plague.Plague46_2,
          "Plague Buccal 3": Plague.Plague46_3,
          "Plague Lingual 1": Plague.Plague46_1_lg,
          "Plague Lingual 2": Plague.Plague46_2_lg,
          "Plague Lingual 3": Plague.Plague46_3_lg,
          "Plague Score": Plague.Plague_total_46 },
          "Gingival Margin": {
            "GM Buccal 1": GM.t46_1 === "" ? 0 : GM.t46_1,
            "GM Buccal 2": GM.t46_2 === "" ? 0 : GM.t46_2,
            "GM Buccal 3": GM.t46_3 === "" ? 0 : GM.t46_3,
            "GM Lingual 1": GM.t46_1_lg === "" ? 0 : GM.t46_1_lg,
            "GM Lingual 2": GM.t46_2_lg === "" ? 0 : GM.t46_2_lg,
            "GM Lingual 3": GM.t46_3_lg === "" ? 0 : GM.t46_3_lg },
          "Probing Depth": {
            "PD Buccal 1": Probe.p46_1 === "" ? 0 : Probe.p46_1,
            "PD Buccal 2": Probe.p46_2 === "" ? 0 : Probe.p46_2,
            "PD Buccal 3": Probe.p46_3 === "" ? 0 : Probe.p46_3,
            "PD Lingual 1": Probe.p46_1_lg === "" ? 0 : Probe.p46_1_lg,
            "PD Lingual 2": Probe.p46_2_lg === "" ? 0 : Probe.p46_2_lg,
            "PD Lingual 3": Probe.p46_3_lg === "" ? 0 : Probe.p46_3_lg }, 
        };

    //t45
    const tooth45 = { 
    "Note": Note.t45,
    "Mobility": Mob.t45 === "" ? 0 : Mob.t45,
    "Tooth Status": Lock.t45,
    "Furcation":  {
      "Furcation Buccal": null,
      "Furcation Lingual 1": null,
      "Furcation Lingual 2": null },
    "BoP": {
      "BoP Buccal 1": BoP.BoP45_1,
      "BoP Buccal 2": BoP.BoP45_2,
      "BoP Buccal 3": BoP.BoP45_3,
      "BoP Lingual 1": BoP.BoP45_1_lg,
      "BoP Lingual 2": BoP.BoP45_2_lg,
      "BoP Lingual 3": BoP.BoP45_3_lg,
      "BoP Score": BoP.BoP_total_45 },
    "Plague": {
      "Plague Buccal 1": Plague.Plague45_1,
      "Plague Buccal 2": Plague.Plague45_2,
      "Plague Buccal 3": Plague.Plague45_3,
      "Plague Lingual 1": Plague.Plague45_1_lg,
      "Plague Lingual 2": Plague.Plague45_2_lg,
      "Plague Lingual 3": Plague.Plague45_3_lg,
      "Plague Score": Plague.Plague_total_45 },
      "Gingival Margin": {
        "GM Buccal 1": GM.t45_1 === "" ? 0 : GM.t45_1,
        "GM Buccal 2": GM.t45_2 === "" ? 0 : GM.t45_2,
        "GM Buccal 3": GM.t45_3 === "" ? 0 : GM.t45_3,
        "GM Lingual 1": GM.t45_1_lg === "" ? 0 : GM.t45_1_lg,
        "GM Lingual 2": GM.t45_2_lg === "" ? 0 : GM.t45_2_lg,
        "GM Lingual 3": GM.t45_3_lg === "" ? 0 : GM.t45_3_lg },
      "Probing Depth": {
        "PD Buccal 1": Probe.p45_1 === "" ? 0 : Probe.p45_1,
        "PD Buccal 2": Probe.p45_2 === "" ? 0 : Probe.p45_2,
        "PD Buccal 3": Probe.p45_3 === "" ? 0 : Probe.p45_3,
        "PD Lingual 1": Probe.p45_1_lg === "" ? 0 : Probe.p45_1_lg,
        "PD Lingual 2": Probe.p45_2_lg === "" ? 0 : Probe.p45_2_lg,
        "PD Lingual 3": Probe.p45_3_lg === "" ? 0 : Probe.p45_3_lg },  
    };

    //t44
    const tooth44 = { 
    "Note": Note.t44,
    "Mobility": Mob.t44 === "" ? 0 : Mob.t44,
    "Tooth Status": Lock.t44,
    "Furcation":  {
      "Furcation Buccal": null,
      "Furcation Lingual 1": null,
      "Furcation Lingual 2": null },
    "BoP": {
      "BoP Buccal 1": BoP.BoP44_1,
      "BoP Buccal 2": BoP.BoP44_2,
      "BoP Buccal 3": BoP.BoP44_3,
      "BoP Lingual 1": BoP.BoP44_1_lg,
      "BoP Lingual 2": BoP.BoP44_2_lg,
      "BoP Lingual 3": BoP.BoP44_3_lg,
      "BoP Score": BoP.BoP_total_44 },
    "Plague": {
      "Plague Buccal 1": Plague.Plague44_1,
      "Plague Buccal 2": Plague.Plague44_2,
      "Plague Buccal 3": Plague.Plague44_3,
      "Plague Lingual 1": Plague.Plague44_1_lg,
      "Plague Lingual 2": Plague.Plague44_2_lg,
      "Plague Lingual 3": Plague.Plague44_3_lg,
      "Plague Score": Plague.Plague_total_44 },
      "Gingival Margin": {
        "GM Buccal 1": GM.t44_1 === "" ? 0 : GM.t44_1,
        "GM Buccal 2": GM.t44_2 === "" ? 0 : GM.t44_2,
        "GM Buccal 3": GM.t44_3 === "" ? 0 : GM.t44_3,
        "GM Lingual 1": GM.t44_1_lg === "" ? 0 : GM.t44_1_lg,
        "GM Lingual 2": GM.t44_2_lg === "" ? 0 : GM.t44_2_lg,
        "GM Lingual 3": GM.t44_3_lg === "" ? 0 : GM.t44_3_lg },
      "Probing Depth": {
        "PD Buccal 1": Probe.p44_1 === "" ? 0 : Probe.p44_1,
        "PD Buccal 2": Probe.p44_2 === "" ? 0 : Probe.p44_2,
        "PD Buccal 3": Probe.p44_3 === "" ? 0 : Probe.p44_3,
        "PD Lingual 1": Probe.p44_1_lg === "" ? 0 : Probe.p44_1_lg,
        "PD Lingual 2": Probe.p44_2_lg === "" ? 0 : Probe.p44_2_lg,
        "PD Lingual 3": Probe.p44_3_lg === "" ? 0 : Probe.p44_3_lg },  
    };

    //t43
    const tooth43 = { 
    "Note": Note.t43,
    "Mobility": Mob.t43 === "" ? 0 : Mob.t43,
    "Tooth Status": Lock.t43,
    "Furcation":  {
      "Furcation Buccal": null,
      "Furcation Lingual 1": null,
      "Furcation Lingual 2": null },
    "BoP": {
      "BoP Buccal 1": BoP.BoP43_1,
      "BoP Buccal 2": BoP.BoP43_2,
      "BoP Buccal 3": BoP.BoP43_3,
      "BoP Lingual 1": BoP.BoP43_1_lg,
      "BoP Lingual 2": BoP.BoP43_2_lg,
      "BoP Lingual 3": BoP.BoP43_3_lg,
      "BoP Score": BoP.BoP_total_43 },
    "Plague": {
      "Plague Buccal 1": Plague.Plague43_1,
      "Plague Buccal 2": Plague.Plague43_2,
      "Plague Buccal 3": Plague.Plague43_3,
      "Plague Lingual 1": Plague.Plague43_1_lg,
      "Plague Lingual 2": Plague.Plague43_2_lg,
      "Plague Lingual 3": Plague.Plague43_3_lg,
      "Plague Score": Plague.Plague_total_43 },
      "Gingival Margin": {
        "GM Buccal 1": GM.t43_1 === "" ? 0 : GM.t43_1,
        "GM Buccal 2": GM.t43_2 === "" ? 0 : GM.t43_2,
        "GM Buccal 3": GM.t43_3 === "" ? 0 : GM.t43_3,
        "GM Lingual 1": GM.t43_1_lg === "" ? 0 : GM.t43_1_lg,
        "GM Lingual 2": GM.t43_2_lg === "" ? 0 : GM.t43_2_lg,
        "GM Lingual 3": GM.t43_3_lg === "" ? 0 : GM.t43_3_lg },
      "Probing Depth": {
        "PD Buccal 1": Probe.p43_1 === "" ? 0 : Probe.p43_1,
        "PD Buccal 2": Probe.p43_2 === "" ? 0 : Probe.p43_2,
        "PD Buccal 3": Probe.p43_3 === "" ? 0 : Probe.p43_3,
        "PD Lingual 1": Probe.p43_1_lg === "" ? 0 : Probe.p43_1_lg,
        "PD Lingual 2": Probe.p43_2_lg === "" ? 0 : Probe.p43_2_lg,
        "PD Lingual 3": Probe.p43_3_lg === "" ? 0 : Probe.p43_3_lg },   
    };

    //t42
    const tooth42 = { 
    "Note": Note.t42,
    "Mobility": Mob.t42 === "" ? 0 : Mob.t42,
    "Tooth Status": Lock.t42,
    "Furcation":  {
      "Furcation Buccal": null,
      "Furcation Lingual 1": null,
      "Furcation Lingual 2": null },
    "BoP": {
      "BoP Buccal 1": BoP.BoP42_1,
      "BoP Buccal 2": BoP.BoP42_2,
      "BoP Buccal 3": BoP.BoP42_3,
      "BoP Lingual 1": BoP.BoP42_1_lg,
      "BoP Lingual 2": BoP.BoP42_2_lg,
      "BoP Lingual 3": BoP.BoP42_3_lg,
      "BoP Score": BoP.BoP_total_42 },
    "Plague": {
      "Plague Buccal 1": Plague.Plague42_1,
      "Plague Buccal 2": Plague.Plague42_2,
      "Plague Buccal 3": Plague.Plague42_3,
      "Plague Lingual 1": Plague.Plague42_1_lg,
      "Plague Lingual 2": Plague.Plague42_2_lg,
      "Plague Lingual 3": Plague.Plague42_3_lg,
      "Plague Score": Plague.Plague_total_42 },
      "Gingival Margin": {
        "GM Buccal 1": GM.t42_1 === "" ? 0 : GM.t42_1,
        "GM Buccal 2": GM.t42_2 === "" ? 0 : GM.t42_2,
        "GM Buccal 3": GM.t42_3 === "" ? 0 : GM.t42_3,
        "GM Lingual 1": GM.t42_1_lg === "" ? 0 : GM.t42_1_lg,
        "GM Lingual 2": GM.t42_2_lg === "" ? 0 : GM.t42_2_lg,
        "GM Lingual 3": GM.t42_3_lg === "" ? 0 : GM.t42_3_lg },
      "Probing Depth": {
        "PD Buccal 1": Probe.p42_1 === "" ? 0 : Probe.p42_1,
        "PD Buccal 2": Probe.p42_2 === "" ? 0 : Probe.p42_2,
        "PD Buccal 3": Probe.p42_3 === "" ? 0 : Probe.p42_3,
        "PD Lingual 1": Probe.p42_1_lg === "" ? 0 : Probe.p42_1_lg,
        "PD Lingual 2": Probe.p42_2_lg === "" ? 0 : Probe.p42_2_lg,
        "PD Lingual 3": Probe.p42_3_lg === "" ? 0 : Probe.p42_3_lg },   
    };

    //t41
    const tooth41 = { 
    "Note": Note.t41, 
    "Mobility": Mob.t41 === "" ? 0 : Mob.t41,
    "Tooth Status": Lock.t41,
    "Furcation":  {
      "Furcation Buccal": null,
      "Furcation Lingual 1": null,
      "Furcation Lingual 2": null },
    "BoP": {
      "BoP Buccal 1": BoP.BoP41_1,
      "BoP Buccal 2": BoP.BoP41_2,
      "BoP Buccal 3": BoP.BoP41_3,
      "BoP Lingual 1": BoP.BoP41_1_lg,
      "BoP Lingual 2": BoP.BoP41_2_lg,
      "BoP Lingual 3": BoP.BoP41_3_lg,
      "BoP Score": BoP.BoP_total_41 },
    "Plague": {
      "Plague Buccal 1": Plague.Plague41_1,
      "Plague Buccal 2": Plague.Plague41_2,
      "Plague Buccal 3": Plague.Plague41_3,
      "Plague Lingual 1": Plague.Plague41_1_lg,
      "Plague Lingual 2": Plague.Plague41_2_lg,
      "Plague Lingual 3": Plague.Plague41_3_lg,
      "Plague Score": Plague.Plague_total_41 },
  "Gingival Margin": {
    "GM Buccal 1": GM.t41_1 === "" ? 0 : GM.t41_1,
    "GM Buccal 2": GM.t41_2 === "" ? 0 : GM.t41_2,
    "GM Buccal 3": GM.t41_3 === "" ? 0 : GM.t41_3,
    "GM Lingual 1": GM.t41_1_lg === "" ? 0 : GM.t41_1_lg,
    "GM Lingual 2": GM.t41_2_lg === "" ? 0 : GM.t41_2_lg,
    "GM Lingual 3": GM.t41_3_lg === "" ? 0 : GM.t41_3_lg },
  "Probing Depth": {
    "PD Buccal 1": Probe.p41_1 === "" ? 0 : Probe.p41_1,
    "PD Buccal 2": Probe.p41_2 === "" ? 0 : Probe.p41_2,
    "PD Buccal 3": Probe.p41_3 === "" ? 0 : Probe.p41_3,
    "PD Lingual 1": Probe.p41_1_lg === "" ? 0 : Probe.p41_1_lg,
    "PD Lingual 2": Probe.p41_2_lg === "" ? 0 : Probe.p41_2_lg,
    "PD Lingual 3": Probe.p41_3_lg === "" ? 0 : Probe.p41_3_lg },   
    };

  //t31
  const tooth31 = { 
  "Note": Note.t31,
  "Mobility": Mob.t31 === "" ? 0 : Mob.t31,
  "Tooth Status": Lock.t31,
  "Furcation":  {
    "Furcation Buccal": null,
    "Furcation Lingual 1": null,
    "Furcation Lingual 2": null },
  "BoP": {
    "BoP Buccal 1": BoP.BoP31_1,
    "BoP Buccal 2": BoP.BoP31_2,
    "BoP Buccal 3": BoP.BoP31_3,
    "BoP Lingual 1": BoP.BoP31_1_lg,
    "BoP Lingual 2": BoP.BoP31_2_lg,
    "BoP Lingual 3": BoP.BoP31_3_lg,
    "BoP Score": BoP.BoP_total_31 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague31_1,
    "Plague Buccal 2": Plague.Plague31_2,
    "Plague Buccal 3": Plague.Plague31_3,
    "Plague Lingual 1": Plague.Plague31_1_lg,
    "Plague Lingual 2": Plague.Plague31_2_lg,
    "Plague Lingual 3": Plague.Plague31_3_lg,
    "Plague Score": Plague.Plague_total_31 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t31_1 === "" ? 0 : GM.t31_1,
      "GM Buccal 2": GM.t31_2 === "" ? 0 : GM.t31_2,
      "GM Buccal 3": GM.t31_3 === "" ? 0 : GM.t31_3,
      "GM Lingual 1": GM.t31_1_lg === "" ? 0 : GM.t31_1_lg,
      "GM Lingual 2": GM.t31_2_lg === "" ? 0 : GM.t31_2_lg,
      "GM Lingual 3": GM.t31_3_lg === "" ? 0 : GM.t31_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p31_1 === "" ? 0 : Probe.p31_1,
      "PD Buccal 2": Probe.p31_2 === "" ? 0 : Probe.p31_2,
      "PD Buccal 3": Probe.p31_3 === "" ? 0 : Probe.p31_3,
      "PD Lingual 1": Probe.p31_1_lg === "" ? 0 : Probe.p31_1_lg,
      "PD Lingual 2": Probe.p31_2_lg === "" ? 0 : Probe.p31_2_lg,
      "PD Lingual 3": Probe.p31_3_lg === "" ? 0 : Probe.p31_3_lg },  
  };  

  //t32
  const tooth32 = { 
  "Note": Note.t32, 
  "Mobility": Mob.t32 === "" ? 0 : Mob.t32,
  "Tooth Status": Lock.t32,
  "Furcation":  {
    "Furcation Buccal": null,
    "Furcation Lingual 1": null,
    "Furcation Lingual 2": null },
  "BoP": {
    "BoP Buccal 1": BoP.BoP32_1,
    "BoP Buccal 2": BoP.BoP32_2,
    "BoP Buccal 3": BoP.BoP32_3,
    "BoP Lingual 1": BoP.BoP32_1_lg,
    "BoP Lingual 2": BoP.BoP32_2_lg,
    "BoP Lingual 3": BoP.BoP32_3_lg,
    "BoP Score": BoP.BoP_total_32 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague32_1,
    "Plague Buccal 2": Plague.Plague32_2,
    "Plague Buccal 3": Plague.Plague32_3,
    "Plague Lingual 1": Plague.Plague32_1_lg,
    "Plague Lingual 2": Plague.Plague32_2_lg,
    "Plague Lingual 3": Plague.Plague32_3_lg,
    "Plague Score": Plague.Plague_total_32 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t32_1 === "" ? 0 : GM.t32_1,
      "GM Buccal 2": GM.t32_2 === "" ? 0 : GM.t32_2,
      "GM Buccal 3": GM.t32_3 === "" ? 0 : GM.t32_3,
      "GM Lingual 1": GM.t32_1_lg === "" ? 0 : GM.t32_1_lg,
      "GM Lingual 2": GM.t32_2_lg === "" ? 0 : GM.t32_2_lg,
      "GM Lingual 3": GM.t32_3_lg === "" ? 0 : GM.t32_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p32_1 === "" ? 0 : Probe.p32_1,
      "PD Buccal 2": Probe.p32_2 === "" ? 0 : Probe.p32_2,
      "PD Buccal 3": Probe.p32_3 === "" ? 0 : Probe.p32_3,
      "PD Lingual 1": Probe.p32_1_lg === "" ? 0 : Probe.p32_1_lg,
      "PD Lingual 2": Probe.p32_2_lg === "" ? 0 : Probe.p32_2_lg,
      "PD Lingual 3": Probe.p32_3_lg === "" ? 0 : Probe.p32_3_lg },  
  };

  //t33
  const tooth33 = { 
  "Note": Note.t33,
  "Mobility": Mob.t33 === "" ? 0 : Mob.t33,
  "Tooth Status": Lock.t33,
  "Furcation":  {
    "Furcation Buccal": null,
    "Furcation Lingual 1": null,
    "Furcation Lingual 2": null },
  "BoP": {
    "BoP Buccal 1": BoP.BoP33_1,
    "BoP Buccal 2": BoP.BoP33_2,
    "BoP Buccal 3": BoP.BoP33_3,
    "BoP Lingual 1": BoP.BoP33_1_lg,
    "BoP Lingual 2": BoP.BoP33_2_lg,
    "BoP Lingual 3": BoP.BoP33_3_lg,
    "BoP Score": BoP.BoP_total_33 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague33_1,
    "Plague Buccal 2": Plague.Plague33_2,
    "Plague Buccal 3": Plague.Plague33_3,
    "Plague Lingual 1": Plague.Plague33_1_lg,
    "Plague Lingual 2": Plague.Plague33_2_lg,
    "Plague Lingual 3": Plague.Plague33_3_lg,
    "Plague Score": Plague.Plague_total_33 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t33_1 === "" ? 0 : GM.t33_1,
      "GM Buccal 2": GM.t33_2 === "" ? 0 : GM.t33_2,
      "GM Buccal 3": GM.t33_3 === "" ? 0 : GM.t33_3,
      "GM Lingual 1": GM.t33_1_lg === "" ? 0 : GM.t33_1_lg,
      "GM Lingual 2": GM.t33_2_lg === "" ? 0 : GM.t33_2_lg,
      "GM Lingual 3": GM.t33_3_lg === "" ? 0 : GM.t33_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p33_1 === "" ? 0 : Probe.p33_1,
      "PD Buccal 2": Probe.p33_2 === "" ? 0 : Probe.p33_2,
      "PD Buccal 3": Probe.p33_3 === "" ? 0 : Probe.p33_3,
      "PD Lingual 1": Probe.p33_1_lg === "" ? 0 : Probe.p33_1_lg,
      "PD Lingual 2": Probe.p33_2_lg === "" ? 0 : Probe.p33_2_lg,
      "PD Lingual 3": Probe.p33_3_lg === "" ? 0 : Probe.p33_3_lg },   
  };

  //t34
  const tooth34 = { 
  "Note": Note.t34, 
  "Mobility": Mob.t34 === "" ? 0 : Mob.t34,
  "Tooth Status": Lock.t34,
  "Furcation":  {
    "Furcation Buccal": null,
    "Furcation Lingual 1": null,
    "Furcation Lingual 2": null },
  "BoP": {
    "BoP Buccal 1": BoP.BoP34_1,
    "BoP Buccal 2": BoP.BoP34_2,
    "BoP Buccal 3": BoP.BoP34_3,
    "BoP Lingual 1": BoP.BoP34_1_lg,
    "BoP Lingual 2": BoP.BoP34_2_lg,
    "BoP Lingual 3": BoP.BoP34_3_lg,
    "BoP Score": BoP.BoP_total_34 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague34_1,
    "Plague Buccal 2": Plague.Plague34_2,
    "Plague Buccal 3": Plague.Plague34_3,
    "Plague Lingual 1": Plague.Plague34_1_lg,
    "Plague Lingual 2": Plague.Plague34_2_lg,
    "Plague Lingual 3": Plague.Plague34_3_lg,
    "Plague Score": Plague.Plague_total_34 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t34_1 === "" ? 0 : GM.t34_1,
      "GM Buccal 2": GM.t34_2 === "" ? 0 : GM.t34_2,
      "GM Buccal 3": GM.t34_3 === "" ? 0 : GM.t34_3,
      "GM Lingual 1": GM.t34_1_lg === "" ? 0 : GM.t34_1_lg,
      "GM Lingual 2": GM.t34_2_lg === "" ? 0 : GM.t34_2_lg,
      "GM Lingual 3": GM.t34_3_lg === "" ? 0 : GM.t34_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p34_1 === "" ? 0 : Probe.p34_1,
      "PD Buccal 2": Probe.p34_2 === "" ? 0 : Probe.p34_2,
      "PD Buccal 3": Probe.p34_3 === "" ? 0 : Probe.p34_3,
      "PD Lingual 1": Probe.p34_1_lg === "" ? 0 : Probe.p34_1_lg,
      "PD Lingual 2": Probe.p34_2_lg === "" ? 0 : Probe.p34_2_lg,
      "PD Lingual 3": Probe.p34_3_lg === "" ? 0 : Probe.p34_3_lg },  
  };

  //t35
  const tooth35 = { 
  "Note": Note.t35, 
  "Mobility": Mob.t35 === "" ? 0 : Mob.t35,
  "Tooth Status": Lock.t35,
  "Furcation":  {
    "Furcation Buccal": null,
    "Furcation Lingual 1": null,
    "Furcation Lingual 2": null },
  "BoP": {
    "BoP Buccal 1": BoP.BoP35_1,
    "BoP Buccal 2": BoP.BoP35_2,
    "BoP Buccal 3": BoP.BoP35_3,
    "BoP Lingual 1": BoP.BoP35_1_lg,
    "BoP Lingual 2": BoP.BoP35_2_lg,
    "BoP Lingual 3": BoP.BoP35_3_lg,
    "BoP Score": BoP.BoP_total_35 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague35_1,
    "Plague Buccal 2": Plague.Plague35_2,
    "Plague Buccal 3": Plague.Plague35_3,
    "Plague Lingual 1": Plague.Plague35_1_lg,
    "Plague Lingual 2": Plague.Plague35_2_lg,
    "Plague Lingual 3": Plague.Plague35_3_lg,
    "Plague Score": Plague.Plague_total_35 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t35_1 === "" ? 0 : GM.t35_1,
      "GM Buccal 2": GM.t35_2 === "" ? 0 : GM.t35_2,
      "GM Buccal 3": GM.t35_3 === "" ? 0 : GM.t35_3,
      "GM Lingual 1": GM.t35_1_lg === "" ? 0 : GM.t35_1_lg,
      "GM Lingual 2": GM.t35_2_lg === "" ? 0 : GM.t35_2_lg,
      "GM Lingual 3": GM.t35_3_lg === "" ? 0 : GM.t35_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p35_1 === "" ? 0 : Probe.p35_1,
      "PD Buccal 2": Probe.p35_2 === "" ? 0 : Probe.p35_2,
      "PD Buccal 3": Probe.p35_3 === "" ? 0 : Probe.p35_3,
      "PD Lingual 1": Probe.p35_1_lg === "" ? 0 : Probe.p35_1_lg,
      "PD Lingual 2": Probe.p35_2_lg === "" ? 0 : Probe.p35_2_lg,
      "PD Lingual 3": Probe.p35_3_lg === "" ? 0 : Probe.p35_3_lg },   
  };

  //t36
  const tooth36 = { 
  "Note": Note.t36,
  "Mobility": Mob.t36 === "" ? 0 : Mob.t36,
  "Tooth Status": Lock.t36,
  "Furcation":  {
    "Furcation Buccal": Furc.FurcCount36,
    "Furcation Lingual 1": Furc.FurcCount36b,
    "Furcation Lingual 2": null },
  "BoP": {
    "BoP Buccal 1": BoP.BoP36_1,
    "BoP Buccal 2": BoP.BoP36_2,
    "BoP Buccal 3": BoP.BoP36_3,
    "BoP Lingual 1": BoP.BoP36_1_lg,
    "BoP Lingual 2": BoP.BoP36_2_lg,
    "BoP Lingual 3": BoP.BoP36_3_lg,
    "BoP Score": BoP.BoP_total_36 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague36_1,
    "Plague Buccal 2": Plague.Plague36_2,
    "Plague Buccal 3": Plague.Plague36_3,
    "Plague Lingual 1": Plague.Plague36_1_lg,
    "Plague Lingual 2": Plague.Plague36_2_lg,
    "Plague Lingual 3": Plague.Plague36_3_lg,
    "Plague Score": Plague.Plague_total_36 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t36_1 === "" ? 0 : GM.t36_1,
      "GM Buccal 2": GM.t36_2 === "" ? 0 : GM.t36_2,
      "GM Buccal 3": GM.t36_3 === "" ? 0 : GM.t36_3,
      "GM Lingual 1": GM.t36_1_lg === "" ? 0 : GM.t36_1_lg,
      "GM Lingual 2": GM.t36_2_lg === "" ? 0 : GM.t36_2_lg,
      "GM Lingual 3": GM.t36_3_lg === "" ? 0 : GM.t36_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p36_1 === "" ? 0 : Probe.p36_1,
      "PD Buccal 2": Probe.p36_2 === "" ? 0 : Probe.p36_2,
      "PD Buccal 3": Probe.p36_3 === "" ? 0 : Probe.p36_3,
      "PD Lingual 1": Probe.p36_1_lg === "" ? 0 : Probe.p36_1_lg,
      "PD Lingual 2": Probe.p36_2_lg === "" ? 0 : Probe.p36_2_lg,
      "PD Lingual 3": Probe.p36_3_lg === "" ? 0 : Probe.p36_3_lg },   
  };

  //t37
  const tooth37 = { 
  "Note": Note.t37,
  "Mobility": Mob.t37 === "" ? 0 : Mob.t37,
  "Tooth Status": Lock.t37,
  "Furcation":  {
    "Furcation Buccal": Furc.FurcCount37,
    "Furcation Lingual 1": Furc.FurcCount37b,
    "Furcation Lingual 2": null},
  "BoP": {
    "BoP Buccal 1": BoP.BoP37_1,
    "BoP Buccal 2": BoP.BoP37_2,
    "BoP Buccal 3": BoP.BoP37_3,
    "BoP Lingual 1": BoP.BoP37_1_lg,
    "BoP Lingual 2": BoP.BoP37_2_lg,
    "BoP Lingual 3": BoP.BoP37_3_lg,
    "BoP Score": BoP.BoP_total_37 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague37_1,
    "Plague Buccal 2": Plague.Plague37_2,
    "Plague Buccal 3": Plague.Plague37_3,
    "Plague Lingual 1": Plague.Plague37_1_lg,
    "Plague Lingual 2": Plague.Plague37_2_lg,
    "Plague Lingual 3": Plague.Plague37_3_lg,
    "Plague Score": Plague.Plague_total_37 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t37_1 === "" ? 0 : GM.t37_1,
      "GM Buccal 2": GM.t37_2 === "" ? 0 : GM.t37_2,
      "GM Buccal 3": GM.t37_3 === "" ? 0 : GM.t37_3,
      "GM Lingual 1": GM.t37_1_lg === "" ? 0 : GM.t37_1_lg,
      "GM Lingual 2": GM.t37_2_lg === "" ? 0 : GM.t37_2_lg,
      "GM Lingual 3": GM.t37_3_lg === "" ? 0 : GM.t37_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p37_1 === "" ? 0 : Probe.p37_1,
      "PD Buccal 2": Probe.p37_2 === "" ? 0 : Probe.p37_2,
      "PD Buccal 3": Probe.p37_3 === "" ? 0 : Probe.p37_3,
      "PD Lingual 1": Probe.p37_1_lg === "" ? 0 : Probe.p37_1_lg,
      "PD Lingual 2": Probe.p37_2_lg === "" ? 0 : Probe.p37_2_lg,
      "PD Lingual 3": Probe.p37_3_lg === "" ? 0 : Probe.p37_3_lg },   
  };

  //t38
  const tooth38 = { 
  "Note": Note.t38,
  "Mobility": Mob.t38 === "" ? 0 : Mob.t38,
  "Tooth Status": Lock.t38,
  "Furcation":  {
    "Furcation Buccal": Furc.FurcCount38,
    "Furcation Lingual 1": Furc.FurcCount38b,
    "Furcation Lingual 2": null },
  "BoP": {
    "BoP Buccal 1": BoP.BoP38_1,
    "BoP Buccal 2": BoP.BoP38_2,
    "BoP Buccal 3": BoP.BoP38_3,
    "BoP Lingual 1": BoP.BoP38_1_lg,
    "BoP Lingual 2": BoP.BoP38_2_lg,
    "BoP Lingual 3": BoP.BoP38_3_lg,
    "BoP Score": BoP.BoP_total_38 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague38_1,
    "Plague Buccal 2": Plague.Plague38_2,
    "Plague Buccal 3": Plague.Plague38_3,
    "Plague Lingual 1": Plague.Plague38_1_lg,
    "Plague Lingual 2": Plague.Plague38_2_lg,
    "Plague Lingual 3": Plague.Plague38_3_lg,
    "Plague Score": Plague.Plague_total_38 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t38_1 === "" ? 0 : GM.t38_1,
      "GM Buccal 2": GM.t38_2 === "" ? 0 : GM.t38_2,
      "GM Buccal 3": GM.t38_3 === "" ? 0 : GM.t38_3,
      "GM Lingual 1": GM.t38_1_lg === "" ? 0 : GM.t38_1_lg,
      "GM Lingual 2": GM.t38_2_lg === "" ? 0 : GM.t38_2_lg,
      "GM Lingual 3": GM.t38_3_lg === "" ? 0 : GM.t38_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p38_1 === "" ? 0 : Probe.p38_1,
      "PD Buccal 2": Probe.p38_2 === "" ? 0 : Probe.p38_2,
      "PD Buccal 3": Probe.p38_3 === "" ? 0 : Probe.p38_3,
      "PD Lingual 1": Probe.p38_1_lg === "" ? 0 : Probe.p38_1_lg,
      "PD Lingual 2": Probe.p38_2_lg === "" ? 0 : Probe.p38_2_lg,
      "PD Lingual 3": Probe.p38_3_lg === "" ? 0 : Probe.p38_3_lg }, 
  };


  //Get Data from session storage
  useEffect(() => {
    const data48 = JSON.parse(sessionStorage.getItem("48"));
    const data47 = JSON.parse(sessionStorage.getItem("47"));
    const data46 = JSON.parse(sessionStorage.getItem("46"));
    const data45 = JSON.parse(sessionStorage.getItem("45"));
    const data44 = JSON.parse(sessionStorage.getItem("44"));
    const data43 = JSON.parse(sessionStorage.getItem("43"));
    const data42 = JSON.parse(sessionStorage.getItem("42"));
    const data41 = JSON.parse(sessionStorage.getItem("41"));
    const data31 = JSON.parse(sessionStorage.getItem("31"));
    const data32 = JSON.parse(sessionStorage.getItem("32"));
    const data33 = JSON.parse(sessionStorage.getItem("33"));
    const data34 = JSON.parse(sessionStorage.getItem("34"));
    const data35 = JSON.parse(sessionStorage.getItem("35"));
    const data36 = JSON.parse(sessionStorage.getItem("36"));
    const data37 = JSON.parse(sessionStorage.getItem("37"));
    const data38 = JSON.parse(sessionStorage.getItem("38"));
    if (data48 && data47 && data46 && data45 && data44 && data43 && data42 && data41 && data31 && data32 && data33 && data34 && data35 && data36 && data37 && data38) {
      setNote( {...Note, t48: data48["Note"],  t47: data47["Note"], t46: data46["Note"], t45: data45["Note"], t44: data44["Note"], t43: data43["Note"], t42: data42["Note"], t41: data41["Note"], 
                      t38: data38["Note"],  t37: data37["Note"], t36: data36["Note"], t35: data35["Note"], t34: data34["Note"], t33: data33["Note"], t32: data32["Note"], t31: data31["Note"]});      
      setMob( {...Mob, t48: data48["Mobility"],  t47: data47["Mobility"], t46: data46["Mobility"], t45: data45["Mobility"], t44: data44["Mobility"], t43: data43["Mobility"], t42: data42["Mobility"], t41: data41["Mobility"], 
                      t38: data38["Mobility"],  t37: data37["Mobility"], t36: data36["Mobility"], t35: data35["Mobility"], t34: data34["Mobility"], t33: data33["Mobility"], t32: data32["Mobility"], t31: data31["Mobility"]});      
      setLock( { ...Lock, t48: data48["Tooth Status"], t47: data47["Tooth Status"], t46: data46["Tooth Status"], t45: data45["Tooth Status"], t44: data44["Tooth Status"], t43: data43["Tooth Status"], t42: data42["Tooth Status"], t41: data41["Tooth Status"], 
                        t38: data38["Tooth Status"], t37: data37["Tooth Status"], t36: data36["Tooth Status"], t35: data35["Tooth Status"], t34: data34["Tooth Status"], t33: data33["Tooth Status"], t32: data32["Tooth Status"], t31: data31["Tooth Status"]});
      setFurc( {...Furc, FurcCount48: data48["Furcation"]["Furcation Buccal"], FurcCount48b: data48["Furcation"]["Furcation Lingual 1"], 
                        FurcCount47: data47["Furcation"]["Furcation Buccal"], FurcCount47b: data47["Furcation"]["Furcation Lingual 1"], 
                        FurcCount46: data46["Furcation"]["Furcation Buccal"], FurcCount46b: data46["Furcation"]["Furcation Lingual 1"], 
                        FurcCount36: data36["Furcation"]["Furcation Buccal"], FurcCount36b: data36["Furcation"]["Furcation Lingual 1"],
                        FurcCount37: data37["Furcation"]["Furcation Buccal"], FurcCount37b: data37["Furcation"]["Furcation Lingual 1"],
                        FurcCount38: data38["Furcation"]["Furcation Buccal"], FurcCount38b: data38["Furcation"]["Furcation Lingual 1"],});
      setBoP( {...BoP, BoP48_1: data48["BoP"]["BoP Buccal 1"], BoP48_2: data48["BoP"]["BoP Buccal 2"], BoP48_3: data48["BoP"]["BoP Buccal 3"], BoP48_1_lg: data48["BoP"]["BoP Lingual 1"], BoP48_2_lg: data48["BoP"]["BoP Lingual 2"], BoP48_3_lg: data48["BoP"]["BoP Lingual 3"], BoP_total_48: data48["BoP"]["BoP Score"],
                      BoP47_1: data47["BoP"]["BoP Buccal 1"], BoP47_2: data47["BoP"]["BoP Buccal 2"], BoP47_3: data47["BoP"]["BoP Buccal 3"], BoP47_1_lg: data47["BoP"]["BoP Lingual 1"], BoP47_2_lg: data47["BoP"]["BoP Lingual 2"], BoP47_3_lg: data47["BoP"]["BoP Lingual 3"], BoP_total_47: data47["BoP"]["BoP Score"],
                      BoP46_1: data46["BoP"]["BoP Buccal 1"], BoP46_2: data46["BoP"]["BoP Buccal 2"], BoP46_3: data46["BoP"]["BoP Buccal 3"], BoP46_1_lg: data46["BoP"]["BoP Lingual 1"], BoP46_2_lg: data46["BoP"]["BoP Lingual 2"], BoP46_3_lg: data46["BoP"]["BoP Lingual 3"], BoP_total_46: data46["BoP"]["BoP Score"],
                      BoP45_1: data45["BoP"]["BoP Buccal 1"], BoP45_2: data45["BoP"]["BoP Buccal 2"], BoP45_3: data45["BoP"]["BoP Buccal 3"], BoP45_1_lg: data45["BoP"]["BoP Lingual 1"], BoP45_2_lg: data45["BoP"]["BoP Lingual 2"], BoP45_3_lg: data45["BoP"]["BoP Lingual 3"], BoP_total_45: data45["BoP"]["BoP Score"],
                      BoP44_1: data44["BoP"]["BoP Buccal 1"], BoP44_2: data44["BoP"]["BoP Buccal 2"], BoP44_3: data44["BoP"]["BoP Buccal 3"], BoP44_1_lg: data44["BoP"]["BoP Lingual 1"], BoP44_2_lg: data44["BoP"]["BoP Lingual 2"], BoP44_3_lg: data44["BoP"]["BoP Lingual 3"], BoP_total_44: data44["BoP"]["BoP Score"],
                      BoP43_1: data43["BoP"]["BoP Buccal 1"], BoP43_2: data43["BoP"]["BoP Buccal 2"], BoP43_3: data43["BoP"]["BoP Buccal 3"], BoP43_1_lg: data43["BoP"]["BoP Lingual 1"], BoP43_2_lg: data43["BoP"]["BoP Lingual 2"], BoP43_3_lg: data43["BoP"]["BoP Lingual 3"], BoP_total_43: data43["BoP"]["BoP Score"],
                      BoP42_1: data42["BoP"]["BoP Buccal 1"], BoP42_2: data42["BoP"]["BoP Buccal 2"], BoP42_3: data42["BoP"]["BoP Buccal 3"], BoP42_1_lg: data42["BoP"]["BoP Lingual 1"], BoP42_2_lg: data42["BoP"]["BoP Lingual 2"], BoP42_3_lg: data42["BoP"]["BoP Lingual 3"], BoP_total_42: data42["BoP"]["BoP Score"],
                      BoP41_1: data41["BoP"]["BoP Buccal 1"], BoP41_2: data41["BoP"]["BoP Buccal 2"], BoP41_3: data41["BoP"]["BoP Buccal 3"], BoP41_1_lg: data41["BoP"]["BoP Lingual 1"], BoP41_2_lg: data41["BoP"]["BoP Lingual 2"], BoP41_3_lg: data41["BoP"]["BoP Lingual 3"], BoP_total_41: data41["BoP"]["BoP Score"],
                      BoP38_1: data38["BoP"]["BoP Buccal 1"], BoP38_2: data38["BoP"]["BoP Buccal 2"], BoP38_3: data38["BoP"]["BoP Buccal 3"], BoP38_1_lg: data38["BoP"]["BoP Lingual 1"], BoP38_2_lg: data38["BoP"]["BoP Lingual 2"], BoP38_3_lg: data38["BoP"]["BoP Lingual 3"], BoP_total_38: data38["BoP"]["BoP Score"],
                      BoP37_1: data37["BoP"]["BoP Buccal 1"], BoP37_2: data37["BoP"]["BoP Buccal 2"], BoP37_3: data37["BoP"]["BoP Buccal 3"], BoP37_1_lg: data37["BoP"]["BoP Lingual 1"], BoP37_2_lg: data37["BoP"]["BoP Lingual 2"], BoP37_3_lg: data37["BoP"]["BoP Lingual 3"], BoP_total_37: data37["BoP"]["BoP Score"],
                      BoP36_1: data36["BoP"]["BoP Buccal 1"], BoP36_2: data36["BoP"]["BoP Buccal 2"], BoP36_3: data36["BoP"]["BoP Buccal 3"], BoP36_1_lg: data36["BoP"]["BoP Lingual 1"], BoP36_2_lg: data36["BoP"]["BoP Lingual 2"], BoP36_3_lg: data36["BoP"]["BoP Lingual 3"], BoP_total_36: data36["BoP"]["BoP Score"],
                      BoP35_1: data35["BoP"]["BoP Buccal 1"], BoP35_2: data35["BoP"]["BoP Buccal 2"], BoP35_3: data35["BoP"]["BoP Buccal 3"], BoP35_1_lg: data35["BoP"]["BoP Lingual 1"], BoP35_2_lg: data35["BoP"]["BoP Lingual 2"], BoP35_3_lg: data35["BoP"]["BoP Lingual 3"], BoP_total_35: data35["BoP"]["BoP Score"],
                      BoP34_1: data34["BoP"]["BoP Buccal 1"], BoP34_2: data34["BoP"]["BoP Buccal 2"], BoP34_3: data34["BoP"]["BoP Buccal 3"], BoP34_1_lg: data34["BoP"]["BoP Lingual 1"], BoP34_2_lg: data34["BoP"]["BoP Lingual 2"], BoP34_3_lg: data34["BoP"]["BoP Lingual 3"], BoP_total_34: data34["BoP"]["BoP Score"],
                      BoP33_1: data33["BoP"]["BoP Buccal 1"], BoP33_2: data33["BoP"]["BoP Buccal 2"], BoP33_3: data33["BoP"]["BoP Buccal 3"], BoP33_1_lg: data33["BoP"]["BoP Lingual 1"], BoP33_2_lg: data33["BoP"]["BoP Lingual 2"], BoP33_3_lg: data33["BoP"]["BoP Lingual 3"], BoP_total_33: data33["BoP"]["BoP Score"],
                      BoP32_1: data32["BoP"]["BoP Buccal 1"], BoP32_2: data32["BoP"]["BoP Buccal 2"], BoP32_3: data32["BoP"]["BoP Buccal 3"], BoP32_1_lg: data32["BoP"]["BoP Lingual 1"], BoP32_2_lg: data32["BoP"]["BoP Lingual 2"], BoP32_3_lg: data32["BoP"]["BoP Lingual 3"], BoP_total_32: data32["BoP"]["BoP Score"],
                      BoP31_1: data31["BoP"]["BoP Buccal 1"], BoP31_2: data31["BoP"]["BoP Buccal 2"], BoP31_3: data31["BoP"]["BoP Buccal 3"], BoP31_1_lg: data31["BoP"]["BoP Lingual 1"], BoP31_2_lg: data31["BoP"]["BoP Lingual 2"], BoP31_3_lg: data31["BoP"]["BoP Lingual 3"], BoP_total_31: data31["BoP"]["BoP Score"],});
      setPlague( {...Plague, Plague48_1: data48["Plague"]["Plague Buccal 1"], Plague48_2: data48["Plague"]["Plague Buccal 2"], Plague48_3: data48["Plague"]["Plague Buccal 3"], Plague48_1_lg: data48["Plague"]["Plague Lingual 1"], Plague48_2_lg: data48["Plague"]["Plague Lingual 2"], Plague48_3_lg: data48["Plague"]["Plague Lingual 3"], Plague_total_48: data48["Plague"]["Plague Score"],
                          Plague47_1: data47["Plague"]["Plague Buccal 1"], Plague47_2: data47["Plague"]["Plague Buccal 2"], Plague47_3: data47["Plague"]["Plague Buccal 3"], Plague47_1_lg: data47["Plague"]["Plague Lingual 1"], Plague47_2_lg: data47["Plague"]["Plague Lingual 2"], Plague47_3_lg: data47["Plague"]["Plague Lingual 3"], Plague_total_47: data47["Plague"]["Plague Score"],
                          Plague46_1: data46["Plague"]["Plague Buccal 1"], Plague46_2: data46["Plague"]["Plague Buccal 2"], Plague46_3: data46["Plague"]["Plague Buccal 3"], Plague46_1_lg: data46["Plague"]["Plague Lingual 1"], Plague46_2_lg: data46["Plague"]["Plague Lingual 2"], Plague46_3_lg: data46["Plague"]["Plague Lingual 3"], Plague_total_46: data46["Plague"]["Plague Score"],
                          Plague45_1: data45["Plague"]["Plague Buccal 1"], Plague45_2: data45["Plague"]["Plague Buccal 2"], Plague45_3: data45["Plague"]["Plague Buccal 3"], Plague45_1_lg: data45["Plague"]["Plague Lingual 1"], Plague45_2_lg: data45["Plague"]["Plague Lingual 2"], Plague45_3_lg: data45["Plague"]["Plague Lingual 3"], Plague_total_45: data45["Plague"]["Plague Score"],
                          Plague44_1: data44["Plague"]["Plague Buccal 1"], Plague44_2: data44["Plague"]["Plague Buccal 2"], Plague44_3: data44["Plague"]["Plague Buccal 3"], Plague44_1_lg: data44["Plague"]["Plague Lingual 1"], Plague44_2_lg: data44["Plague"]["Plague Lingual 2"], Plague44_3_lg: data44["Plague"]["Plague Lingual 3"], Plague_total_44: data44["Plague"]["Plague Score"],
                          Plague43_1: data43["Plague"]["Plague Buccal 1"], Plague43_2: data43["Plague"]["Plague Buccal 2"], Plague43_3: data43["Plague"]["Plague Buccal 3"], Plague43_1_lg: data43["Plague"]["Plague Lingual 1"], Plague43_2_lg: data43["Plague"]["Plague Lingual 2"], Plague43_3_lg: data43["Plague"]["Plague Lingual 3"], Plague_total_43: data43["Plague"]["Plague Score"],
                          Plague42_1: data42["Plague"]["Plague Buccal 1"], Plague42_2: data42["Plague"]["Plague Buccal 2"], Plague42_3: data42["Plague"]["Plague Buccal 3"], Plague42_1_lg: data42["Plague"]["Plague Lingual 1"], Plague42_2_lg: data42["Plague"]["Plague Lingual 2"], Plague42_3_lg: data42["Plague"]["Plague Lingual 3"], Plague_total_42: data42["Plague"]["Plague Score"],
                          Plague41_1: data41["Plague"]["Plague Buccal 1"], Plague41_2: data41["Plague"]["Plague Buccal 2"], Plague41_3: data41["Plague"]["Plague Buccal 3"], Plague41_1_lg: data41["Plague"]["Plague Lingual 1"], Plague41_2_lg: data41["Plague"]["Plague Lingual 2"], Plague41_3_lg: data41["Plague"]["Plague Lingual 3"], Plague_total_41: data41["Plague"]["Plague Score"],
                          Plague38_1: data38["Plague"]["Plague Buccal 1"], Plague38_2: data38["Plague"]["Plague Buccal 2"], Plague38_3: data38["Plague"]["Plague Buccal 3"], Plague38_1_lg: data38["Plague"]["Plague Lingual 1"], Plague38_2_lg: data38["Plague"]["Plague Lingual 2"], Plague38_3_lg: data38["Plague"]["Plague Lingual 3"], Plague_total_38: data38["Plague"]["Plague Score"],
                          Plague37_1: data37["Plague"]["Plague Buccal 1"], Plague37_2: data37["Plague"]["Plague Buccal 2"], Plague37_3: data37["Plague"]["Plague Buccal 3"], Plague37_1_lg: data37["Plague"]["Plague Lingual 1"], Plague37_2_lg: data37["Plague"]["Plague Lingual 2"], Plague37_3_lg: data37["Plague"]["Plague Lingual 3"], Plague_total_37: data37["Plague"]["Plague Score"],
                          Plague36_1: data36["Plague"]["Plague Buccal 1"], Plague36_2: data36["Plague"]["Plague Buccal 2"], Plague36_3: data36["Plague"]["Plague Buccal 3"], Plague36_1_lg: data36["Plague"]["Plague Lingual 1"], Plague36_2_lg: data36["Plague"]["Plague Lingual 2"], Plague36_3_lg: data36["Plague"]["Plague Lingual 3"], Plague_total_36: data36["Plague"]["Plague Score"],
                          Plague35_1: data35["Plague"]["Plague Buccal 1"], Plague35_2: data35["Plague"]["Plague Buccal 2"], Plague35_3: data35["Plague"]["Plague Buccal 3"], Plague35_1_lg: data35["Plague"]["Plague Lingual 1"], Plague35_2_lg: data35["Plague"]["Plague Lingual 2"], Plague35_3_lg: data35["Plague"]["Plague Lingual 3"], Plague_total_35: data35["Plague"]["Plague Score"],
                          Plague34_1: data34["Plague"]["Plague Buccal 1"], Plague34_2: data34["Plague"]["Plague Buccal 2"], Plague34_3: data34["Plague"]["Plague Buccal 3"], Plague34_1_lg: data34["Plague"]["Plague Lingual 1"], Plague34_2_lg: data34["Plague"]["Plague Lingual 2"], Plague34_3_lg: data34["Plague"]["Plague Lingual 3"], Plague_total_34: data34["Plague"]["Plague Score"],
                          Plague33_1: data33["Plague"]["Plague Buccal 1"], Plague33_2: data33["Plague"]["Plague Buccal 2"], Plague33_3: data33["Plague"]["Plague Buccal 3"], Plague33_1_lg: data33["Plague"]["Plague Lingual 1"], Plague33_2_lg: data33["Plague"]["Plague Lingual 2"], Plague33_3_lg: data33["Plague"]["Plague Lingual 3"], Plague_total_33: data33["Plague"]["Plague Score"],
                          Plague32_1: data32["Plague"]["Plague Buccal 1"], Plague32_2: data32["Plague"]["Plague Buccal 2"], Plague32_3: data32["Plague"]["Plague Buccal 3"], Plague32_1_lg: data32["Plague"]["Plague Lingual 1"], Plague32_2_lg: data32["Plague"]["Plague Lingual 2"], Plague32_3_lg: data32["Plague"]["Plague Lingual 3"], Plague_total_32: data32["Plague"]["Plague Score"],
                          Plague31_1: data31["Plague"]["Plague Buccal 1"], Plague31_2: data31["Plague"]["Plague Buccal 2"], Plague31_3: data31["Plague"]["Plague Buccal 3"], Plague31_1_lg: data31["Plague"]["Plague Lingual 1"], Plague31_2_lg: data31["Plague"]["Plague Lingual 2"], Plague31_3_lg: data31["Plague"]["Plague Lingual 3"], Plague_total_31: data31["Plague"]["Plague Score"],});
      setGM( {...GM, t48_1: data48["Gingival Margin"]["GM Buccal 1"], t48_2: data48["Gingival Margin"]["GM Buccal 2"], t48_3: data48["Gingival Margin"]["GM Buccal 3"], t48_1_lg: data48["Gingival Margin"]["GM Lingual 1"], t48_2_lg: data48["Gingival Margin"]["GM Lingual 2"], t48_3_lg: data48["Gingival Margin"]["GM Lingual 3"],
                  t47_1: data47["Gingival Margin"]["GM Buccal 1"], t47_2: data47["Gingival Margin"]["GM Buccal 2"], t47_3: data47["Gingival Margin"]["GM Buccal 3"], t47_1_lg: data47["Gingival Margin"]["GM Lingual 1"], t47_2_lg: data47["Gingival Margin"]["GM Lingual 2"], t47_3_lg: data47["Gingival Margin"]["GM Lingual 3"],
                  t46_1: data46["Gingival Margin"]["GM Buccal 1"], t46_2: data46["Gingival Margin"]["GM Buccal 2"], t46_3: data46["Gingival Margin"]["GM Buccal 3"], t46_1_lg: data46["Gingival Margin"]["GM Lingual 1"], t46_2_lg: data46["Gingival Margin"]["GM Lingual 2"], t46_3_lg: data46["Gingival Margin"]["GM Lingual 3"],
                  t45_1: data45["Gingival Margin"]["GM Buccal 1"], t45_2: data45["Gingival Margin"]["GM Buccal 2"], t45_3: data45["Gingival Margin"]["GM Buccal 3"], t45_1_lg: data45["Gingival Margin"]["GM Lingual 1"], t45_2_lg: data45["Gingival Margin"]["GM Lingual 2"], t45_3_lg: data45["Gingival Margin"]["GM Lingual 3"],
                  t44_1: data44["Gingival Margin"]["GM Buccal 1"], t44_2: data44["Gingival Margin"]["GM Buccal 2"], t44_3: data44["Gingival Margin"]["GM Buccal 3"], t44_1_lg: data44["Gingival Margin"]["GM Lingual 1"], t44_2_lg: data44["Gingival Margin"]["GM Lingual 2"], t44_3_lg: data44["Gingival Margin"]["GM Lingual 3"],
                  t43_1: data43["Gingival Margin"]["GM Buccal 1"], t43_2: data43["Gingival Margin"]["GM Buccal 2"], t43_3: data43["Gingival Margin"]["GM Buccal 3"], t43_1_lg: data43["Gingival Margin"]["GM Lingual 1"], t43_2_lg: data43["Gingival Margin"]["GM Lingual 2"], t43_3_lg: data43["Gingival Margin"]["GM Lingual 3"],
                  t42_1: data42["Gingival Margin"]["GM Buccal 1"], t42_2: data42["Gingival Margin"]["GM Buccal 2"], t42_3: data42["Gingival Margin"]["GM Buccal 3"], t42_1_lg: data42["Gingival Margin"]["GM Lingual 1"], t42_2_lg: data42["Gingival Margin"]["GM Lingual 2"], t42_3_lg: data42["Gingival Margin"]["GM Lingual 3"],
                  t41_1: data41["Gingival Margin"]["GM Buccal 1"], t41_2: data41["Gingival Margin"]["GM Buccal 2"], t41_3: data41["Gingival Margin"]["GM Buccal 3"], t41_1_lg: data41["Gingival Margin"]["GM Lingual 1"], t41_2_lg: data41["Gingival Margin"]["GM Lingual 2"], t41_3_lg: data41["Gingival Margin"]["GM Lingual 3"],
                  t38_1: data38["Gingival Margin"]["GM Buccal 1"], t38_2: data38["Gingival Margin"]["GM Buccal 2"], t38_3: data38["Gingival Margin"]["GM Buccal 3"], t38_1_lg: data38["Gingival Margin"]["GM Lingual 1"], t38_2_lg: data38["Gingival Margin"]["GM Lingual 2"], t38_3_lg: data38["Gingival Margin"]["GM Lingual 3"],
                  t37_1: data37["Gingival Margin"]["GM Buccal 1"], t37_2: data37["Gingival Margin"]["GM Buccal 2"], t37_3: data37["Gingival Margin"]["GM Buccal 3"], t37_1_lg: data37["Gingival Margin"]["GM Lingual 1"], t37_2_lg: data37["Gingival Margin"]["GM Lingual 2"], t37_3_lg: data37["Gingival Margin"]["GM Lingual 3"],
                  t36_1: data36["Gingival Margin"]["GM Buccal 1"], t36_2: data36["Gingival Margin"]["GM Buccal 2"], t36_3: data36["Gingival Margin"]["GM Buccal 3"], t36_1_lg: data36["Gingival Margin"]["GM Lingual 1"], t36_2_lg: data36["Gingival Margin"]["GM Lingual 2"], t36_3_lg: data36["Gingival Margin"]["GM Lingual 3"],
                  t35_1: data35["Gingival Margin"]["GM Buccal 1"], t35_2: data35["Gingival Margin"]["GM Buccal 2"], t35_3: data35["Gingival Margin"]["GM Buccal 3"], t35_1_lg: data35["Gingival Margin"]["GM Lingual 1"], t35_2_lg: data35["Gingival Margin"]["GM Lingual 2"], t35_3_lg: data35["Gingival Margin"]["GM Lingual 3"],
                  t34_1: data34["Gingival Margin"]["GM Buccal 1"], t34_2: data34["Gingival Margin"]["GM Buccal 2"], t34_3: data34["Gingival Margin"]["GM Buccal 3"], t34_1_lg: data34["Gingival Margin"]["GM Lingual 1"], t34_2_lg: data34["Gingival Margin"]["GM Lingual 2"], t34_3_lg: data34["Gingival Margin"]["GM Lingual 3"],
                  t33_1: data33["Gingival Margin"]["GM Buccal 1"], t33_2: data33["Gingival Margin"]["GM Buccal 2"], t33_3: data33["Gingival Margin"]["GM Buccal 3"], t33_1_lg: data33["Gingival Margin"]["GM Lingual 1"], t33_2_lg: data33["Gingival Margin"]["GM Lingual 2"], t33_3_lg: data33["Gingival Margin"]["GM Lingual 3"],
                  t32_1: data32["Gingival Margin"]["GM Buccal 1"], t32_2: data32["Gingival Margin"]["GM Buccal 2"], t32_3: data32["Gingival Margin"]["GM Buccal 3"], t32_1_lg: data32["Gingival Margin"]["GM Lingual 1"], t32_2_lg: data32["Gingival Margin"]["GM Lingual 2"], t32_3_lg: data32["Gingival Margin"]["GM Lingual 3"],
                  t31_1: data31["Gingival Margin"]["GM Buccal 1"], t31_2: data31["Gingival Margin"]["GM Buccal 2"], t31_3: data31["Gingival Margin"]["GM Buccal 3"], t31_1_lg: data31["Gingival Margin"]["GM Lingual 1"], t31_2_lg: data31["Gingival Margin"]["GM Lingual 2"], t31_3_lg: data31["Gingival Margin"]["GM Lingual 3"]});
      setProbe( {...Probe, p48_1: data48["Probing Depth"]["PD Buccal 1"], p48_2: data48["Probing Depth"]["PD Buccal 2"], p48_3: data48["Probing Depth"]["PD Buccal 3"], p48_1_lg: data48["Probing Depth"]["PD Lingual 1"], p48_2_lg: data48["Probing Depth"]["PD Lingual 2"], p48_3_lg: data48["Probing Depth"]["PD Lingual 3"],
                          p47_1: data47["Probing Depth"]["PD Buccal 1"], p47_2: data47["Probing Depth"]["PD Buccal 2"], p47_3: data47["Probing Depth"]["PD Buccal 3"], p47_1_lg: data47["Probing Depth"]["PD Lingual 1"], p47_2_lg: data47["Probing Depth"]["PD Lingual 2"], p47_3_lg: data47["Probing Depth"]["PD Lingual 3"],
                          p46_1: data46["Probing Depth"]["PD Buccal 1"], p46_2: data46["Probing Depth"]["PD Buccal 2"], p46_3: data46["Probing Depth"]["PD Buccal 3"], p46_1_lg: data46["Probing Depth"]["PD Lingual 1"], p46_2_lg: data46["Probing Depth"]["PD Lingual 2"], p46_3_lg: data46["Probing Depth"]["PD Lingual 3"],
                          p45_1: data45["Probing Depth"]["PD Buccal 1"], p45_2: data45["Probing Depth"]["PD Buccal 2"], p45_3: data45["Probing Depth"]["PD Buccal 3"], p45_1_lg: data45["Probing Depth"]["PD Lingual 1"], p45_2_lg: data45["Probing Depth"]["PD Lingual 2"], p45_3_lg: data45["Probing Depth"]["PD Lingual 3"],
                          p44_1: data44["Probing Depth"]["PD Buccal 1"], p44_2: data44["Probing Depth"]["PD Buccal 2"], p44_3: data44["Probing Depth"]["PD Buccal 3"], p44_1_lg: data44["Probing Depth"]["PD Lingual 1"], p44_2_lg: data44["Probing Depth"]["PD Lingual 2"], p44_3_lg: data44["Probing Depth"]["PD Lingual 3"],
                          p43_1: data43["Probing Depth"]["PD Buccal 1"], p43_2: data43["Probing Depth"]["PD Buccal 2"], p43_3: data43["Probing Depth"]["PD Buccal 3"], p43_1_lg: data43["Probing Depth"]["PD Lingual 1"], p43_2_lg: data43["Probing Depth"]["PD Lingual 2"], p43_3_lg: data43["Probing Depth"]["PD Lingual 3"],
                          p42_1: data42["Probing Depth"]["PD Buccal 1"], p42_2: data42["Probing Depth"]["PD Buccal 2"], p42_3: data42["Probing Depth"]["PD Buccal 3"], p42_1_lg: data42["Probing Depth"]["PD Lingual 1"], p42_2_lg: data42["Probing Depth"]["PD Lingual 2"], p42_3_lg: data42["Probing Depth"]["PD Lingual 3"],
                          p41_1: data41["Probing Depth"]["PD Buccal 1"], p41_2: data41["Probing Depth"]["PD Buccal 2"], p41_3: data41["Probing Depth"]["PD Buccal 3"], p41_1_lg: data41["Probing Depth"]["PD Lingual 1"], p41_2_lg: data41["Probing Depth"]["PD Lingual 2"], p41_3_lg: data41["Probing Depth"]["PD Lingual 3"],
                          p31_1: data31["Probing Depth"]["PD Buccal 1"], p31_2: data31["Probing Depth"]["PD Buccal 2"], p31_3: data31["Probing Depth"]["PD Buccal 3"], p31_1_lg: data31["Probing Depth"]["PD Lingual 1"], p31_2_lg: data31["Probing Depth"]["PD Lingual 2"], p31_3_lg: data31["Probing Depth"]["PD Lingual 3"],
                          p32_1: data32["Probing Depth"]["PD Buccal 1"], p32_2: data32["Probing Depth"]["PD Buccal 2"], p32_3: data32["Probing Depth"]["PD Buccal 3"], p32_1_lg: data32["Probing Depth"]["PD Lingual 1"], p32_2_lg: data32["Probing Depth"]["PD Lingual 2"], p32_3_lg: data32["Probing Depth"]["PD Lingual 3"],
                          p33_1: data33["Probing Depth"]["PD Buccal 1"], p33_2: data33["Probing Depth"]["PD Buccal 2"], p33_3: data33["Probing Depth"]["PD Buccal 3"], p33_1_lg: data33["Probing Depth"]["PD Lingual 1"], p33_2_lg: data33["Probing Depth"]["PD Lingual 2"], p33_3_lg: data33["Probing Depth"]["PD Lingual 3"],
                          p34_1: data34["Probing Depth"]["PD Buccal 1"], p34_2: data34["Probing Depth"]["PD Buccal 2"], p34_3: data34["Probing Depth"]["PD Buccal 3"], p34_1_lg: data34["Probing Depth"]["PD Lingual 1"], p34_2_lg: data34["Probing Depth"]["PD Lingual 2"], p34_3_lg: data34["Probing Depth"]["PD Lingual 3"],
                          p35_1: data35["Probing Depth"]["PD Buccal 1"], p35_2: data35["Probing Depth"]["PD Buccal 2"], p35_3: data35["Probing Depth"]["PD Buccal 3"], p35_1_lg: data35["Probing Depth"]["PD Lingual 1"], p35_2_lg: data35["Probing Depth"]["PD Lingual 2"], p35_3_lg: data35["Probing Depth"]["PD Lingual 3"],
                          p36_1: data36["Probing Depth"]["PD Buccal 1"], p36_2: data36["Probing Depth"]["PD Buccal 2"], p36_3: data36["Probing Depth"]["PD Buccal 3"], p36_1_lg: data36["Probing Depth"]["PD Lingual 1"], p36_2_lg: data36["Probing Depth"]["PD Lingual 2"], p36_3_lg: data36["Probing Depth"]["PD Lingual 3"],
                          p37_1: data37["Probing Depth"]["PD Buccal 1"], p37_2: data37["Probing Depth"]["PD Buccal 2"], p37_3: data37["Probing Depth"]["PD Buccal 3"], p37_1_lg: data37["Probing Depth"]["PD Lingual 1"], p37_2_lg: data37["Probing Depth"]["PD Lingual 2"], p37_3_lg: data37["Probing Depth"]["PD Lingual 3"],
                          p38_1: data38["Probing Depth"]["PD Buccal 1"], p38_2: data38["Probing Depth"]["PD Buccal 2"], p38_3: data38["Probing Depth"]["PD Buccal 3"], p38_1_lg: data38["Probing Depth"]["PD Lingual 1"], p38_2_lg: data38["Probing Depth"]["PD Lingual 2"], p38_3_lg: data38["Probing Depth"]["PD Lingual 3"]});
    }
  }, []);

  //Save data inside session storage
  useEffect(() => {
    sessionStorage.setItem("48", JSON.stringify(tooth48));
    sessionStorage.setItem("47", JSON.stringify(tooth47));
    sessionStorage.setItem("46", JSON.stringify(tooth46));
    sessionStorage.setItem("45", JSON.stringify(tooth45));
    sessionStorage.setItem("44", JSON.stringify(tooth44));
    sessionStorage.setItem("43", JSON.stringify(tooth43));
    sessionStorage.setItem("42", JSON.stringify(tooth42));
    sessionStorage.setItem("41", JSON.stringify(tooth41));
    sessionStorage.setItem("31", JSON.stringify(tooth31));
    sessionStorage.setItem("32", JSON.stringify(tooth32));
    sessionStorage.setItem("33", JSON.stringify(tooth33));
    sessionStorage.setItem("34", JSON.stringify(tooth34));
    sessionStorage.setItem("35", JSON.stringify(tooth35));
    sessionStorage.setItem("36", JSON.stringify(tooth36));
    sessionStorage.setItem("37", JSON.stringify(tooth37));
    sessionStorage.setItem("38", JSON.stringify(tooth38));
  });


  //Disable data based on Lock
  const dataLocker48 = () => {
    setMob( {...Mob, t48: 0} );
    setLock( {...Lock, t48: 2} );
    setFurc( {...Furc, FurcCount48: 0, FurcCount48b: 0} );
    setBoP( {...BoP, BoP48_1: false, BoP48_2: false, BoP48_3: false, BoP48_1_lg: false, BoP48_2_lg: false, BoP48_3_lg: false, BoP_total_48: 0});
    setGM( {...GM, t48_1: 0, t48_2: 0, t48_3: 0, t48_1_lg: 0, t48_2_lg: 0, t48_3_lg: 0 });
    setProbe( {...Probe, p48_1: 0, p48_2: 0, p48_3: 0, p48_1_lg: 0, p48_2_lg: 0, p48_3_lg: 0});
    setPlague( {...Plague, Plague48_1: false, Plague48_2: false, Plague48_3: false, Plague48_1_lg: false, Plague48_2_lg: false, Plague48_3_lg: false, Plague_total_48: 0})
  }
  const implantLocker48 = () => {
    setLock( {...Lock, t48: 1} );
    setFurc( {...Furc, FurcCount48: 0, FurcCount48b: 0} );
  }
  const dataLocker47 = () => {
    setMob( {...Mob, t47: 0} );
    setLock( {...Lock, t47: 2} );
    setFurc( {...Furc, FurcCount47: 0, FurcCount47b: 0} );
    setBoP( {...BoP, BoP47_1: false, BoP47_2: false, BoP47_3: false, BoP47_1_lg: false, BoP47_2_lg: false, BoP47_3_lg: false, BoP_total_47: 0} );
    setGM( {...GM, t47_1: 0, t47_2: 0, t47_3: 0, t47_1_lg: 0, t47_2_lg: 0, t47_3_lg: 0 });
    setProbe( {...Probe, p47_1: 0, p47_2: 0, p47_3: 0, p47_1_lg: 0, p47_2_lg: 0, p47_3_lg: 0});
    setPlague( {...Plague, Plague47_1: false, Plague47_2: false, Plague47_3: false, Plague47_1_lg: false, Plague47_2_lg: false, Plague47_3_lg: false, Plague_total_47: 0})
  }
  const implantLocker47 = () => {
    setLock( {...Lock, t47: 1} );
    setFurc( {...Furc, FurcCount47: 0, FurcCount47b: 0} );
  }
  const dataLocker46 = () => {
    setMob( {...Mob, t46: 0} );
    setLock( {...Lock, t46: 2} );
    setFurc( {...Furc, FurcCount46: 0, FurcCount46b: 0} );
    setBoP( {...BoP, BoP46_1: false, BoP46_2: false, BoP46_3: false, BoP46_1_lg: false, BoP46_2_lg: false, BoP46_3_lg: false, BoP_total_46: 0} );
    setGM( {...GM, t46_1: 0, t46_2: 0, t46_3: 0, t46_1_lg: 0, t46_2_lg: 0, t46_3_lg: 0 });
    setProbe( {...Probe, p46_1: 0, p46_2: 0, p46_3: 0, p46_1_lg: 0, p46_2_lg: 0, p46_3_lg: 0});
    setPlague( {...Plague, Plague46_1: false, Plague46_2: false, Plague46_3: false, Plague46_1_lg: false, Plague46_2_lg: false, Plague46_3_lg: false, Plague_total_46: 0})
  }
  const implantLocker46 = () => {
    setLock( {...Lock, t46: 1} );
    setFurc( {...Furc, FurcCount46: 0, FurcCount46b: 0} );
  }
  const dataLocker45 = () => {
    setMob( {...Mob, t45: 0} );
    setLock( {...Lock, t45: 2} );
    setBoP( {...BoP, BoP45_1: false, BoP45_2: false, BoP45_3: false, BoP45_1_lg: false, BoP45_2_lg: false, BoP45_3_lg: false, BoP_total_45: 0} );
    setGM( {...GM, t45_1: 0, t45_2: 0, t45_3: 0, t45_1_lg: 0, t45_2_lg: 0, t45_3_lg: 0 });
    setProbe( {...Probe, p45_1: 0, p45_2: 0, p45_3: 0, p45_1_lg: 0, p45_2_lg: 0, p45_3_lg: 0});
    setPlague( {...Plague, Plague45_1: false, Plague45_2: false, Plague45_3: false, Plague45_1_lg: false, Plague45_2_lg: false, Plague45_3_lg: false, Plague_total_45: 0})
  }
  const dataLocker44 = () => {
    setMob( {...Mob, t44: 0} );
    setLock( {...Lock, t44: 2} );
    setBoP( {...BoP, BoP44_1: false, BoP44_2: false, BoP44_3: false, BoP44_1_lg: false, BoP44_2_lg: false, BoP44_3_lg: false, BoP_total_44: 0} );
    setGM( {...GM, t44_1: 0, t44_2: 0, t44_3: 0, t44_1_lg: 0, t44_2_lg: 0, t44_3_lg: 0 });
    setProbe( {...Probe, p44_1: 0, p44_2: 0, p44_3: 0, p44_1_lg: 0, p44_2_lg: 0, p44_3_lg: 0});
    setPlague( {...Plague, Plague44_1: false, Plague44_2: false, Plague44_3: false, Plague44_1_lg: false, Plague44_2_lg: false, Plague44_3_lg: false, Plague_total_44: 0})
  }
  const dataLocker43 = () => {
    setMob( {...Mob, t43: 0} );
    setLock( {...Lock, t43: 2} );
    setBoP( {...BoP, BoP43_1: false, BoP43_2: false, BoP43_3: false, BoP43_1_lg: false, BoP43_2_lg: false, BoP43_3_lg: false, BoP_total_43: 0} );
    setGM( {...GM, t43_1: 0, t43_2: 0, t43_3: 0, t43_1_lg: 0, t43_2_lg: 0, t43_3_lg: 0 });
    setProbe( {...Probe, p43_1: 0, p43_2: 0, p43_3: 0, p43_1_lg: 0, p43_2_lg: 0, p43_3_lg: 0});
    setPlague( {...Plague, Plague43_1: false, Plague43_2: false, Plague43_3: false, Plague43_1_lg: false, Plague43_2_lg: false, Plague43_3_lg: false, Plague_total_43: 0})
  }
  const dataLocker42 = () => {
    setMob( {...Mob, t42: 0} );
    setLock( {...Lock, t42: 2} );
    setBoP( {...BoP, BoP42_1: false, BoP42_2: false, BoP42_3: false, BoP42_1_lg: false, BoP42_2_lg: false, BoP42_3_lg: false, BoP_total_42: 0} );
    setGM( {...GM, t42_1: 0, t42_2: 0, t42_3: 0, t42_1_lg: 0, t42_2_lg: 0, t42_3_lg: 0 });
    setProbe( {...Probe, p42_1: 0, p42_2: 0, p42_3: 0, p42_1_lg: 0, p42_2_lg: 0, p42_3_lg: 0});
    setPlague( {...Plague, Plague42_1: false, Plague42_2: false, Plague42_3: false, Plague42_1_lg: false, Plague42_2_lg: false, Plague42_3_lg: false, Plague_total_42: 0})
  }
  const dataLocker41 = () => {
    setMob( {...Mob, t41: 0} );
    setLock( {...Lock, t41: 2} );
    setBoP( {...BoP, BoP41_1: false, BoP41_2: false, BoP41_3: false, BoP41_1_lg: false, BoP41_2_lg: false, BoP41_3_lg: false, BoP_total_41: 0} );
    setGM( {...GM, t41_1: 0, t41_2: 0, t41_3: 0, t41_1_lg: 0, t41_2_lg: 0, t41_3_lg: 0 });
    setProbe( {...Probe, p41_1: 0, p41_2: 0, p41_3: 0, p41_1_lg: 0, p41_2_lg: 0, p41_3_lg: 0});
    setPlague( {...Plague, Plague41_1: false, Plague41_2: false, Plague41_3: false, Plague41_1_lg: false, Plague41_2_lg: false, Plague41_3_lg: false, Plague_total_41: 0})
  }
  const dataLocker31 = () => {
    setMob( {...Mob, t31: 0} );
    setLock( {...Lock, t31: 2} );
    setBoP( {...BoP, BoP31_1: false, BoP31_2: false, BoP31_3: false, BoP31_1_lg: false, BoP31_2_lg: false, BoP31_3_lg: false, BoP_total_31: 0} );
    setGM( {...GM, t31_1: 0, t31_2: 0, t31_3: 0, t31_1_lg: 0, t31_2_lg: 0, t31_3_lg: 0 });
    setProbe( {...Probe, p31_1: 0, p31_2: 0, p31_3: 0, p31_1_lg: 0, p31_2_lg: 0, p31_3_lg: 0});
    setPlague( {...Plague, Plague31_1: false, Plague31_2: false, Plague31_3: false, Plague31_1_lg: false, Plague31_2_lg: false, Plague31_3_lg: false, Plague_total_31: 0})
  }
  const dataLocker32 = () => {
    setMob( {...Mob, t32: 0} );
    setLock( {...Lock, t32: 2} );
    setBoP( {...BoP, BoP32_1: false, BoP32_2: false, BoP32_3: false, BoP32_1_lg: false, BoP32_2_lg: false, BoP32_3_lg: false, BoP_total_32: 0} );
    setGM( {...GM, t32_1: 0, t32_2: 0, t32_3: 0, t32_1_lg: 0, t32_2_lg: 0, t32_3_lg: 0 });
    setProbe( {...Probe, p32_1: 0, p32_2: 0, p32_3: 0, p32_1_lg: 0, p32_2_lg: 0, p32_3_lg: 0});
    setPlague( {...Plague, Plague32_1: false, Plague32_2: false, Plague32_3: false, Plague32_1_lg: false, Plague32_2_lg: false, Plague32_3_lg: false, Plague_total_32: 0})
  }
  const dataLocker33 = () => {
    setMob( {...Mob, t33: 0} );
    setLock( {...Lock, t33: 2} );
    setBoP( {...BoP, BoP33_1: false, BoP33_2: false, BoP33_3: false, BoP33_1_lg: false, BoP33_2_lg: false, BoP33_3_lg: false, BoP_total_33: 0} );
    setGM( {...GM, t33_1: 0, t33_2: 0, t33_3: 0, t33_1_lg: 0, t33_2_lg: 0, t33_3_lg: 0 });
    setProbe( {...Probe, p33_1: 0, p33_2: 0, p33_3: 0, p33_1_lg: 0, p33_2_lg: 0, p33_3_lg: 0});
    setPlague( {...Plague, Plague33_1: false, Plague33_2: false, Plague33_3: false, Plague33_1_lg: false, Plague33_2_lg: false, Plague33_3_lg: false, Plague_total_33: 0})
  }
  const dataLocker34 = () => {
    setMob( {...Mob, t34: 0} );
    setLock( {...Lock, t34: 2} );
    setBoP( {...BoP, BoP34_1: false, BoP34_2: false, BoP34_3: false, BoP34_1_lg: false, BoP34_2_lg: false, BoP34_3_lg: false, BoP_total_34: 0} );
    setGM( {...GM, t34_1: 0, t34_2: 0, t34_3: 0, t34_1_lg: 0, t34_2_lg: 0, t34_3_lg: 0 });
    setProbe( {...Probe, p34_1: 0, p34_2: 0, p34_3: 0, p34_1_lg: 0, p34_2_lg: 0, p34_3_lg: 0});
    setPlague( {...Plague, Plague34_1: false, Plague34_2: false, Plague34_3: false, Plague34_1_lg: false, Plague34_2_lg: false, Plague34_3_lg: false, Plague_total_34: 0})
  }
  const dataLocker35 = () => {
    setMob( {...Mob, t35: 0} );
    setLock( {...Lock, t35: 2} )
    setBoP( {...BoP, BoP35_1: false, BoP35_2: false, BoP35_3: false, BoP35_1_lg: false, BoP35_2_lg: false, BoP35_3_lg: false, BoP_total_35: 0} );
    setGM( {...GM, t35_1: 0, t35_2: 0, t35_3: 0, t35_1_lg: 0, t35_2_lg: 0, t35_3_lg: 0 });
    setProbe( {...Probe, p35_1: 0, p35_2: 0, p35_3: 0, p35_1_lg: 0, p35_2_lg: 0, p35_3_lg: 0});
    setPlague( {...Plague, Plague35_1: false, Plague35_2: false, Plague35_3: false, Plague35_1_lg: false, Plague35_2_lg: false, Plague35_3_lg: false, Plague_total_35: 0})
  }
  const dataLocker36 = () => {
    setMob( {...Mob, t36: 0} );
    setLock( {...Lock, t36: 2} );
    setFurc( {...Furc, FurcCount36: 0, FurcCount36b: 0} );
    setBoP( {...BoP, BoP36_1: false, BoP36_2: false, BoP36_3: false, BoP36_1_lg: false, BoP36_2_lg: false, BoP36_3_lg: false, BoP_total_36: 0} );
    setGM( {...GM, t36_1: 0, t36_2: 0, t36_3: 0, t36_1_lg: 0, t36_2_lg: 0, t36_3_lg: 0 });
    setProbe( {...Probe, p36_1: 0, p36_2: 0, p36_3: 0, p36_1_lg: 0, p36_2_lg: 0, p36_3_lg: 0});
    setPlague( {...Plague, Plague36_1: false, Plague36_2: false, Plague36_3: false, Plague36_1_lg: false, Plague36_2_lg: false, Plague36_3_lg: false, Plague_total_36: 0})
  }
  const implantLocker36 = () => {
    setLock( {...Lock, t36: 1} );
    setFurc( {...Furc, FurcCount36: 0, FurcCount36b: 0} );
  }
  const dataLocker37 = () => {
    setMob( {...Mob, t37: 0} );
    setLock( {...Lock, t37: 2} );
    setFurc( {...Furc, FurcCount37: 0, FurcCount37b: 0} );
    setBoP( {...BoP, BoP37_1: false, BoP37_2: false, BoP37_3: false, BoP37_1_lg: false, BoP37_2_lg: false, BoP37_3_lg: false, BoP_total_37: 0} );
    setGM( {...GM, t37_1: 0, t37_2: 0, t37_3: 0, t37_1_lg: 0, t37_2_lg: 0, t37_3_lg: 0 });
    setProbe( {...Probe, p37_1: 0, p37_2: 0, p37_3: 0, p37_1_lg: 0, p37_2_lg: 0, p37_3_lg: 0});
    setPlague( {...Plague, Plague37_1: false, Plague37_2: false, Plague37_3: false, Plague37_1_lg: false, Plague37_2_lg: false, Plague37_3_lg: false, Plague_total_37: 0})
  }
  const implantLocker37 = () => {
    setLock( {...Lock, t37: 1} );
    setFurc( {...Furc, FurcCount37: 0, FurcCount37b: 0} );
  }
  const dataLocker38 = () => {
    setMob( {...Mob, t38: 0} );
    setLock( {...Lock, t38: 2} );
    setFurc( {...Furc, FurcCount38: 0, FurcCount38b: 0} );
    setBoP( {...BoP, BoP38_1: false, BoP38_2: false, BoP38_3: false, BoP38_1_lg: false, BoP38_2_lg: false, BoP38_3_lg: false, BoP_total_38: 0} );
    setGM( {...GM, t38_1: 0, t38_2: 0, t38_3: 0, t38_1_lg: 0, t38_2_lg: 0, t38_3_lg: 0 });
    setProbe( {...Probe, p38_1: 0, p38_2: 0, p38_3: 0, p38_1_lg: 0, p38_2_lg: 0, p38_3_lg: 0});
    setPlague( {...Plague, Plague38_1: false, Plague38_2: false, Plague38_3: false, Plague38_1_lg: false, Plague38_2_lg: false, Plague38_3_lg: false, Plague_total_38: 0})
  }
  const implantLocker38 = () => {
    setLock( {...Lock, t38: 1} );
    setFurc( {...Furc, FurcCount38: 0, FurcCount38b: 0} );
  }
  
  //Calculate Scores
  const dataBoP2 = BoP.BoP_total_41 + BoP.BoP_total_42 + BoP.BoP_total_43 + BoP.BoP_total_44 + BoP.BoP_total_45 + 
                  BoP.BoP_total_46 + BoP.BoP_total_47 + BoP.BoP_total_48 + BoP.BoP_total_31 + BoP.BoP_total_32 + 
                  BoP.BoP_total_33 + BoP.BoP_total_34 + BoP.BoP_total_35 + BoP.BoP_total_36 + 
                  BoP.BoP_total_37 + BoP.BoP_total_38;
  const dataPlague2 = Plague.Plague_total_41 + Plague.Plague_total_42 + Plague.Plague_total_43 + 
                    Plague.Plague_total_44 + Plague.Plague_total_45 + Plague.Plague_total_46 +
                    Plague.Plague_total_47 + Plague.Plague_total_48 + Plague.Plague_total_31 + 
                    Plague.Plague_total_32 + Plague.Plague_total_33 + Plague.Plague_total_34 + 
                    Plague.Plague_total_35 + Plague.Plague_total_36 + Plague.Plague_total_37 + 
                    Plague.Plague_total_38;



  const deepSides2 = () => {
    var ds48_1 = ((Probe.p48_1 == 4 && BoP.BoP48_1) || Probe.p48_1 > 4) ? 1 : 0; var ds48_2 = ((Probe.p48_2 == 4 && BoP.BoP48_2) || Probe.p48_2 > 4) ? 1 : 0; var ds48_3 = ((Probe.p48_3 == 4 && BoP.BoP48_3) || Probe.p48_3 > 4) ? 1 : 0;
    var ds47_1 = ((Probe.p47_1 == 4 && BoP.BoP47_1) || Probe.p47_1 > 4) ? 1 : 0; var ds47_2 = ((Probe.p47_2 == 4 && BoP.BoP47_2) || Probe.p47_2 > 4) ? 1 : 0; var ds47_3 = ((Probe.p47_3 == 4 && BoP.BoP47_3) || Probe.p47_3 > 4) ? 1 : 0;
    var ds46_1 = ((Probe.p46_1 == 4 && BoP.BoP46_1) || Probe.p46_1 > 4) ? 1 : 0; var ds46_2 = ((Probe.p46_2 == 4 && BoP.BoP46_2) || Probe.p46_2 > 4) ? 1 : 0; var ds46_3 = ((Probe.p46_3 == 4 && BoP.BoP46_3) || Probe.p46_3 > 4) ? 1 : 0;
    var ds45_1 = ((Probe.p45_1 == 4 && BoP.BoP45_1) || Probe.p45_1 > 4) ? 1 : 0; var ds45_2 = ((Probe.p45_2 == 4 && BoP.BoP45_2) || Probe.p45_2 > 4) ? 1 : 0; var ds45_3 = ((Probe.p45_3 == 4 && BoP.BoP45_3) || Probe.p45_3 > 4) ? 1 : 0;
    var ds44_1 = ((Probe.p44_1 == 4 && BoP.BoP44_1) || Probe.p44_1 > 4) ? 1 : 0; var ds44_2 = ((Probe.p44_2 == 4 && BoP.BoP44_2) || Probe.p44_2 > 4) ? 1 : 0; var ds44_3 = ((Probe.p44_3 == 4 && BoP.BoP44_3) || Probe.p44_3 > 4) ? 1 : 0; 
    var ds43_1 = ((Probe.p43_1 == 4 && BoP.BoP43_1) || Probe.p43_1 > 4) ? 1 : 0; var ds43_2 = ((Probe.p43_2 == 4 && BoP.BoP43_2) || Probe.p43_2 > 4) ? 1 : 0; var ds43_3 = ((Probe.p43_3 == 4 && BoP.BoP43_3) || Probe.p43_3 > 4) ? 1 : 0; 
    var ds42_1 = ((Probe.p42_1 == 4 && BoP.BoP42_1) || Probe.p42_1 > 4) ? 1 : 0; var ds42_2 = ((Probe.p42_2 == 4 && BoP.BoP42_2) || Probe.p42_2 > 4) ? 1 : 0; var ds42_3 = ((Probe.p42_3 == 4 && BoP.BoP42_3) || Probe.p42_3 > 4) ? 1 : 0;
    var ds41_1 = ((Probe.p41_1 == 4 && BoP.BoP41_1) || Probe.p41_1 > 4) ? 1 : 0; var ds41_2 = ((Probe.p41_2 == 4 && BoP.BoP41_2) || Probe.p41_2 > 4) ? 1 : 0; var ds41_3 = ((Probe.p41_3 == 4 && BoP.BoP41_3) || Probe.p41_3 > 4) ? 1 : 0;
    var ds31_1 = ((Probe.p31_1 == 4 && BoP.BoP31_1) || Probe.p31_1 > 4) ? 1 : 0; var ds31_2 = ((Probe.p31_2 == 4 && BoP.BoP31_2) || Probe.p31_2 > 4) ? 1 : 0; var ds31_3 = ((Probe.p31_3 == 4 && BoP.BoP31_3) || Probe.p31_3 > 4) ? 1 : 0;
    var ds32_1 = ((Probe.p32_1 == 4 && BoP.BoP32_1) || Probe.p32_1 > 4) ? 1 : 0; var ds32_2 = ((Probe.p32_2 == 4 && BoP.BoP32_2) || Probe.p32_2 > 4) ? 1 : 0; var ds32_3 = ((Probe.p32_3 == 4 && BoP.BoP32_3) || Probe.p32_3 > 4) ? 1 : 0;
    var ds33_1 = ((Probe.p33_1 == 4 && BoP.BoP33_1) || Probe.p33_1 > 4) ? 1 : 0; var ds33_2 = ((Probe.p33_2 == 4 && BoP.BoP33_2) || Probe.p33_2 > 4) ? 1 : 0; var ds33_3 = ((Probe.p33_3 == 4 && BoP.BoP33_3) || Probe.p33_3 > 4) ? 1 : 0;
    var ds34_1 = ((Probe.p34_1 == 4 && BoP.BoP34_1) || Probe.p34_1 > 4) ? 1 : 0; var ds34_2 = ((Probe.p34_2 == 4 && BoP.BoP34_2) || Probe.p34_2 > 4) ? 1 : 0; var ds34_3 = ((Probe.p34_3 == 4 && BoP.BoP34_3) || Probe.p34_3 > 4) ? 1 : 0;
    var ds35_1 = ((Probe.p35_1 == 4 && BoP.BoP35_1) || Probe.p35_1 > 4) ? 1 : 0; var ds35_2 = ((Probe.p35_2 == 4 && BoP.BoP35_2) || Probe.p35_2 > 4) ? 1 : 0; var ds35_3 = ((Probe.p35_3 == 4 && BoP.BoP35_3) || Probe.p35_3 > 4) ? 1 : 0;
    var ds36_1 = ((Probe.p36_1 == 4 && BoP.BoP36_1) || Probe.p36_1 > 4) ? 1 : 0; var ds36_2 = ((Probe.p36_2 == 4 && BoP.BoP36_2) || Probe.p36_2 > 4) ? 1 : 0; var ds36_3 = ((Probe.p36_3 == 4 && BoP.BoP36_3) || Probe.p36_3 > 4) ? 1 : 0;
    var ds37_1 = ((Probe.p37_1 == 4 && BoP.BoP37_1) || Probe.p38_1 > 4) ? 1 : 0; var ds37_2 = ((Probe.p37_2 == 4 && BoP.BoP37_2) || Probe.p37_2 > 4) ? 1 : 0; var ds37_3 = ((Probe.p37_3 == 4 && BoP.BoP37_3) || Probe.p37_3 > 4) ? 1 : 0;
    var ds38_1 = ((Probe.p38_1 == 4 && BoP.BoP38_1) || Probe.p38_1 > 4) ? 1 : 0; var ds38_2 = ((Probe.p38_2 == 4 && BoP.BoP38_2) || Probe.p38_2 > 4) ? 1 : 0; var ds38_3 = ((Probe.p38_3 == 4 && BoP.BoP38_3) || Probe.p38_3 > 4) ? 1 : 0;

    var ds48_1_lg = ((Probe.p48_1_lg == 4 && BoP.BoP48_1_lg) || Probe.p48_1_lg > 4) ? 1 : 0; var ds48_2_lg = ((Probe.p48_2_lg == 4 && BoP.BoP48_2_lg) || Probe.p48_2_lg > 4) ? 1 : 0; var ds48_3_lg = ((Probe.p48_3_lg == 4 && BoP.BoP48_3_lg) || Probe.p48_3_lg > 4) ? 1 : 0;
    var ds47_1_lg = ((Probe.p47_1_lg == 4 && BoP.BoP47_1_lg) || Probe.p47_1_lg > 4) ? 1 : 0; var ds47_2_lg = ((Probe.p47_2_lg == 4 && BoP.BoP47_2_lg) || Probe.p47_2_lg > 4) ? 1 : 0; var ds47_3_lg = ((Probe.p47_3_lg == 4 && BoP.BoP47_3_lg) || Probe.p47_3_lg > 4) ? 1 : 0;
    var ds46_1_lg = ((Probe.p46_1_lg == 4 && BoP.BoP46_1_lg) || Probe.p46_1_lg > 4) ? 1 : 0; var ds46_2_lg = ((Probe.p46_2_lg == 4 && BoP.BoP46_2_lg) || Probe.p46_2_lg > 4) ? 1 : 0; var ds46_3_lg = ((Probe.p46_3_lg == 4 && BoP.BoP46_3_lg) || Probe.p46_3_lg > 4) ? 1 : 0;
    var ds45_1_lg = ((Probe.p45_1_lg == 4 && BoP.BoP45_1_lg) || Probe.p45_1_lg > 4) ? 1 : 0; var ds45_2_lg = ((Probe.p45_2_lg == 4 && BoP.BoP45_2_lg) || Probe.p45_2_lg > 4) ? 1 : 0; var ds45_3_lg = ((Probe.p45_3_lg == 4 && BoP.BoP45_3_lg) || Probe.p45_3_lg > 4) ? 1 : 0;
    var ds44_1_lg = ((Probe.p44_1_lg == 4 && BoP.BoP44_1_lg) || Probe.p44_1_lg > 4) ? 1 : 0; var ds44_2_lg = ((Probe.p44_2_lg == 4 && BoP.BoP44_2_lg) || Probe.p44_2_lg > 4) ? 1 : 0; var ds44_3_lg = ((Probe.p44_3_lg == 4 && BoP.BoP44_3_lg) || Probe.p44_3_lg > 4) ? 1 : 0; 
    var ds43_1_lg = ((Probe.p43_1_lg == 4 && BoP.BoP43_1_lg) || Probe.p43_1_lg > 4) ? 1 : 0; var ds43_2_lg = ((Probe.p43_2_lg == 4 && BoP.BoP43_2_lg) || Probe.p43_2_lg > 4) ? 1 : 0; var ds43_3_lg = ((Probe.p43_3_lg == 4 && BoP.BoP43_3_lg) || Probe.p43_3_lg > 4) ? 1 : 0; 
    var ds42_1_lg = ((Probe.p42_1_lg == 4 && BoP.BoP42_1_lg) || Probe.p42_1_lg > 4) ? 1 : 0; var ds42_2_lg = ((Probe.p42_2_lg == 4 && BoP.BoP42_2_lg) || Probe.p42_2_lg > 4) ? 1 : 0; var ds42_3_lg = ((Probe.p42_3_lg == 4 && BoP.BoP42_3_lg) || Probe.p42_3_lg > 4) ? 1 : 0;
    var ds41_1_lg = ((Probe.p41_1_lg == 4 && BoP.BoP41_1_lg) || Probe.p41_1_lg > 4) ? 1 : 0; var ds41_2_lg = ((Probe.p41_2_lg == 4 && BoP.BoP41_2_lg) || Probe.p41_2_lg > 4) ? 1 : 0; var ds41_3_lg = ((Probe.p41_3_lg == 4 && BoP.BoP41_3_lg) || Probe.p41_3_lg > 4) ? 1 : 0;
    var ds31_1_lg = ((Probe.p31_1_lg == 4 && BoP.BoP31_1_lg) || Probe.p31_1_lg > 4) ? 1 : 0; var ds31_2_lg = ((Probe.p31_2_lg == 4 && BoP.BoP31_2_lg) || Probe.p31_2_lg > 4) ? 1 : 0; var ds31_3_lg = ((Probe.p31_3_lg == 4 && BoP.BoP31_3_lg) || Probe.p31_3_lg > 4) ? 1 : 0;
    var ds32_1_lg = ((Probe.p32_1_lg == 4 && BoP.BoP32_1_lg) || Probe.p32_1_lg > 4) ? 1 : 0; var ds32_2_lg = ((Probe.p32_2_lg == 4 && BoP.BoP32_2_lg) || Probe.p32_2_lg > 4) ? 1 : 0; var ds32_3_lg = ((Probe.p32_3_lg == 4 && BoP.BoP32_3_lg) || Probe.p32_3_lg > 4) ? 1 : 0;
    var ds33_1_lg = ((Probe.p33_1_lg == 4 && BoP.BoP33_1_lg) || Probe.p33_1_lg > 4) ? 1 : 0; var ds33_2_lg = ((Probe.p33_2_lg == 4 && BoP.BoP33_2_lg) || Probe.p33_2_lg > 4) ? 1 : 0; var ds33_3_lg = ((Probe.p33_3_lg == 4 && BoP.BoP33_3_lg) || Probe.p33_3_lg > 4) ? 1 : 0;
    var ds34_1_lg = ((Probe.p34_1_lg == 4 && BoP.BoP34_1_lg) || Probe.p34_1_lg > 4) ? 1 : 0; var ds34_2_lg = ((Probe.p34_2_lg == 4 && BoP.BoP34_2_lg) || Probe.p34_2_lg > 4) ? 1 : 0; var ds34_3_lg = ((Probe.p34_3_lg == 4 && BoP.BoP34_3_lg) || Probe.p34_3_lg > 4) ? 1 : 0;
    var ds35_1_lg = ((Probe.p35_1_lg == 4 && BoP.BoP35_1_lg) || Probe.p35_1_lg > 4) ? 1 : 0; var ds35_2_lg = ((Probe.p35_2_lg == 4 && BoP.BoP35_2_lg) || Probe.p35_2_lg > 4) ? 1 : 0; var ds35_3_lg = ((Probe.p35_3_lg == 4 && BoP.BoP35_3_lg) || Probe.p35_3_lg > 4) ? 1 : 0;
    var ds36_1_lg = ((Probe.p36_1_lg == 4 && BoP.BoP36_1_lg) || Probe.p36_1_lg > 4) ? 1 : 0; var ds36_2_lg = ((Probe.p36_2_lg == 4 && BoP.BoP36_2_lg) || Probe.p36_2_lg > 4) ? 1 : 0; var ds36_3_lg = ((Probe.p36_3_lg == 4 && BoP.BoP36_3_lg) || Probe.p36_3_lg > 4) ? 1 : 0;
    var ds37_1_lg = ((Probe.p37_1_lg == 4 && BoP.BoP37_1_lg) || Probe.p38_1_lg > 4) ? 1 : 0; var ds37_2_lg = ((Probe.p37_2_lg == 4 && BoP.BoP37_2_lg) || Probe.p37_2_lg > 4) ? 1 : 0; var ds37_3_lg = ((Probe.p37_3_lg == 4 && BoP.BoP37_3_lg) || Probe.p37_3_lg > 4) ? 1 : 0;
    var ds38_1_lg = ((Probe.p38_1_lg == 4 && BoP.BoP38_1_lg) || Probe.p38_1_lg > 4) ? 1 : 0; var ds38_2_lg = ((Probe.p38_2_lg == 4 && BoP.BoP38_2_lg) || Probe.p38_2_lg > 4) ? 1 : 0; var ds38_3_lg = ((Probe.p38_3_lg == 4 && BoP.BoP38_3_lg) || Probe.p38_3_lg > 4) ? 1 : 0;


    var totDSUpper = ds48_1 + ds48_2 + ds48_3 + ds47_1 + ds47_2 + ds47_3 + ds46_1 + ds46_2 + ds46_3 + ds45_1 + ds45_2 + ds45_3 + ds44_1 + ds44_2 + ds44_3 + ds43_1 + ds43_2 + ds43_3 + ds42_1 + ds42_2 + ds42_3 + ds41_1 + ds41_2 + ds41_3 
    + ds31_1 + ds31_2 + ds31_3 + ds32_1 + ds32_2 + ds32_3 + ds33_1 + ds33_2 + ds33_3 + ds34_1 + ds34_2 + ds34_3 + ds35_1 + ds35_2 + ds35_3 + ds36_1 + ds36_2 + ds36_3 + ds37_1 + ds37_2 + ds37_3 + ds38_1 + ds38_2 + ds38_3;

    var totDSLower = ds48_1_lg + ds48_2_lg + ds48_3_lg + ds47_1_lg + ds47_2_lg + ds47_3_lg + ds46_1_lg + ds46_2_lg + ds46_3_lg + ds45_1_lg + ds45_2_lg + ds45_3_lg + ds44_1_lg + ds44_2_lg + ds44_3_lg + ds43_1_lg + ds43_2_lg + ds43_3_lg + ds42_1_lg + ds42_2_lg + ds42_3_lg + ds41_1_lg + ds41_2_lg + ds41_3_lg 
    + ds31_1_lg + ds31_2_lg + ds31_3_lg + ds32_1_lg + ds32_2_lg + ds32_3_lg + ds33_1_lg + ds33_2_lg + ds33_3_lg + ds34_1_lg + ds34_2_lg + ds34_3_lg + ds35_1_lg + ds35_2_lg + ds35_3_lg + ds36_1_lg + ds36_2_lg + ds36_3_lg + ds37_1_lg + ds37_2_lg + ds37_3_lg + ds38_1_lg + ds38_2_lg + ds38_3_lg;

    var totDS = totDSUpper + totDSLower;

    return totDS
  };
 
 
  //Progress Bar Visualisations
 
  const BoPScore = (((dataBoP1 + dataBoP2 ) / 192) * 100).toFixed(1);
  const PlagueScore = (((dataPlague1 + dataPlague2) / 192) * 100).toFixed(1);
  const DSScore = (((dataDS1 + deepSides2()) / 192) * 100).toFixed(1);
  
useEffect(() => {
  sessionStorage.setItem("BoPScore", BoPScore);
  sessionStorage.setItem("PlagueScore", PlagueScore);
  sessionStorage.setItem("DSScore", DSScore);
});
  const oralData = [
    { variable: "Plaque", subtitle: "", bgcolor: "#6a0dad", completed: PlagueScore },
    { variable: "Deep Sites", subtitle: "(Probing Depth >= 5mm or = 4mm + BoP)", bgcolor: "#af1058", completed: DSScore},
    { variable: "Bleeding on Probing", subtitle: "",  bgcolor: "red", completed: BoPScore },
  ];

  //Mobility constraints
  const mobLimit48 = () => {
    if(Mob.t48 > 3){
      setMob({...Mob, t48: 3})
    }
    if(Mob.t48 < 0) {
      setMob({ ...Mob, t48: 0})
    }
  }

  const mobLimit47 = () => {
    if(Mob.t47 > 3){
      setMob({...Mob, t47: 3})
    }
    if(Mob.t47 < 0) {
      setMob({ ...Mob, t47: 0})
    }
  }
  const mobLimit46 = () => {
    if(Mob.t46 > 3){
      setMob({...Mob, t46: 3})
    }
    if(Mob.t46 < 0) {
      setMob({ ...Mob, t46: 0})
    }
  }
  const mobLimit45 = () => {
    if(Mob.t45 > 3){
      setMob({...Mob, t45: 3})
    }
    if(Mob.t45 < 0) {
      setMob({ ...Mob, t45: 0})
    }
  }
  const mobLimit44 = () => {
    if(Mob.t44 > 3){
      setMob({...Mob, t44: 3})
    }
    if(Mob.t44 < 0) {
      setMob({ ...Mob, t44: 0})
    }
  }
  const mobLimit43 = () => {
    if(Mob.t43 > 3){
      setMob({...Mob, t43: 3})
    }
    if(Mob.t43 < 0) {
      setMob({ ...Mob, t43: 0})
    }
  }
  const mobLimit42 = () => {
    if(Mob.t42 > 3){
      setMob({...Mob, t42: 3})
    }
    if(Mob.t42 < 0) {
      setMob({ ...Mob, t42: 0})
    }
  }
  const mobLimit41 = () => {
    if(Mob.t41 > 3){
      setMob({...Mob, t41: 3})
    }
    if(Mob.t41 < 0) {
      setMob({ ...Mob, t41: 0})
    }
  }
  const mobLimit31 = () => {
    if(Mob.t31 > 3){
      setMob({...Mob, t31: 3})
    }
    if(Mob.t31 < 0) {
      setMob({ ...Mob, t31: 0})
    }
  }
  const mobLimit32 = () => {
    if(Mob.t32 > 3){
      setMob({...Mob, t32: 3})
    }
    if(Mob.t32 < 0) {
      setMob({ ...Mob, t32: 0})
    }
  }
  const mobLimit33 = () => {
    if(Mob.t33 > 3){
      setMob({...Mob, t33: 3})
    }
    if(Mob.t33 < 0) {
      setMob({ ...Mob, t33: 0})
    }
  }
  const mobLimit34 = () => {
    if(Mob.t34 > 3){
      setMob({...Mob, t34: 3})
    }
    if(Mob.t34 < 0) {
      setMob({ ...Mob, t34: 0})
    }
  }
  const mobLimit35 = () => {
    if(Mob.t35 > 3){
      setMob({...Mob, t35: 3})
    }
    if(Mob.t35 < 0) {
      setMob({ ...Mob, t35: 0})
    }
  }
  const mobLimit36 = () => {
    if(Mob.t36 > 3){
      setMob({...Mob, t36: 3})
    }
    if(Mob.t36 < 0) {
      setMob({ ...Mob, t36: 0})
    }
  }
  const mobLimit37 = () => {
    if(Mob.t37 > 3){
      setMob({...Mob, t37: 3})
    }
    if(Mob.t37 < 0) {
      setMob({ ...Mob, t37: 0})
    }
  }
  const mobLimit38 = () => {
    if(Mob.t38 > 3){
      setMob({...Mob, t38: 3})
    }
    if(Mob.t38 < 0) {
      setMob({ ...Mob, t38: 0})
    }
  }


 const handleChange = (event) => {
    event.target.select();
  }

  //GM constraints
    const gmLimit48 = () => {
    if(GM.t48_1 > 15) {setGM({ ...GM, t48_1: 15})} if(GM.t48_2 > 15) {setGM({ ...GM, t48_2: 15})} if(GM.t48_3 > 15) {setGM({ ...GM, t48_3: 15})}
    if(GM.t48_1_lg > 15) {setGM({ ...GM, t48_1_lg: 15})} if(GM.t48_2_lg > 15) {setGM({ ...GM, t48_2_lg: 15})} if(GM.t48_3_lg > 15) {setGM({ ...GM, t48_3_lg: 15})}
    if(GM.t48_1 < -10){setGM({ ...GM, t48_1: (-10)})} if(GM.t48_2 < -10){setGM({ ...GM, t48_2: (-10)})} if(GM.t48_3 < -10){setGM({ ...GM, t48_3: (-10)})}
    if(GM.t48_1_lg < -10){setGM({ ...GM, t48_1_lg: (-10)})} if(GM.t48_2_lg < -10){setGM({ ...GM, t48_2_lg: (-10)})} if(GM.t48_3_lg < -10){setGM({ ...GM, t48_3_lg: (-10)})}
  };
  const gmLimit47 = () => {
    if(GM.t47_1 > 15) {setGM({ ...GM, t47_1: 15})} if(GM.t47_2 > 15) {setGM({ ...GM, t47_2: 15})} if(GM.t47_3 > 15) {setGM({ ...GM, t47_3: 15})}
    if(GM.t47_1_lg > 15) {setGM({ ...GM, t47_1_lg: 15})} if(GM.t47_2_lg > 15) {setGM({ ...GM, t47_2_lg: 15})} if(GM.t47_3_lg > 15) {setGM({ ...GM, t47_3_lg: 15})}
    if(GM.t47_1 < -10){setGM({ ...GM, t47_1: (-10)})} if(GM.t47_2 < -10){setGM({ ...GM, t47_2: (-10)})} if(GM.t47_3 < -10){setGM({ ...GM, t47_3: (-10)})}
    if(GM.t47_1_lg < -10){setGM({ ...GM, t47_1_lg: (-10)})} if(GM.t47_2_lg < -10){setGM({ ...GM, t47_2_lg: (-10)})} if(GM.t47_3_lg < -10){setGM({ ...GM, t47_3_lg: (-10)})}
  };
  const gmLimit46 = () => {
    if(GM.t46_1 > 15) {setGM({ ...GM, t46_1: 15})} if(GM.t46_2 > 15) {setGM({ ...GM, t46_2: 15})} if(GM.t46_3 > 15) {setGM({ ...GM, t46_3: 15})}
    if(GM.t46_1_lg > 15) {setGM({ ...GM, t46_1_lg: 15})} if(GM.t46_2_lg > 15) {setGM({ ...GM, t46_2_lg: 15})} if(GM.t46_3_lg > 15) {setGM({ ...GM, t46_3_lg: 15})}
    if(GM.t46_1 < -10){setGM({ ...GM, t46_1: (-10)})} if(GM.t46_2 < -10){setGM({ ...GM, t46_2: (-10)})} if(GM.t46_3 < -10){setGM({ ...GM, t46_3: (-10)})}
    if(GM.t46_1_lg < -10){setGM({ ...GM, t46_1_lg: (-10)})} if(GM.t46_2_lg < -10){setGM({ ...GM, t46_2_lg: (-10)})} if(GM.t46_3_lg < -10){setGM({ ...GM, t46_3_lg: (-10)})}
  };
  const gmLimit45 = () => {
    if(GM.t45_1 > 15) {setGM({ ...GM, t45_1: 15})} if(GM.t45_2 > 15) {setGM({ ...GM, t45_2: 15})} if(GM.t45_3 > 15) {setGM({ ...GM, t45_3: 15})}
    if(GM.t45_1_lg > 15) {setGM({ ...GM, t45_1_lg: 15})} if(GM.t45_2_lg > 15) {setGM({ ...GM, t45_2_lg: 15})} if(GM.t45_3_lg > 15) {setGM({ ...GM, t45_3_lg: 15})}
    if(GM.t45_1 < -10){setGM({ ...GM, t45_1: (-10)})} if(GM.t45_2 < -10){setGM({ ...GM, t45_2: (-10)})} if(GM.t45_3 < -10){setGM({ ...GM, t45_3: (-10)})}
    if(GM.t45_1_lg < -10){setGM({ ...GM, t45_1_lg: (-10)})} if(GM.t45_2_lg < -10){setGM({ ...GM, t45_2_lg: (-10)})} if(GM.t45_3_lg < -10){setGM({ ...GM, t45_3_lg: (-10)})}
  };
  const gmLimit44 = () => {
    if(GM.t44_1 > 15) {setGM({ ...GM, t44_1: 15})} if(GM.t44_2 > 15) {setGM({ ...GM, t44_2: 15})} if(GM.t44_3 > 15) {setGM({ ...GM, t44_3: 15})}
    if(GM.t44_1_lg > 15) {setGM({ ...GM, t44_1_lg: 15})} if(GM.t44_2_lg > 15) {setGM({ ...GM, t44_2_lg: 15})} if(GM.t44_3_lg > 15) {setGM({ ...GM, t44_3_lg: 15})}
    if(GM.t44_1 < -10){setGM({ ...GM, t44_1: (-10)})} if(GM.t44_2 < -10){setGM({ ...GM, t44_2: (-10)})} if(GM.t44_3 < -10){setGM({ ...GM, t44_3: (-10)})}
    if(GM.t44_1_lg < -10){setGM({ ...GM, t44_1_lg: (-10)})} if(GM.t44_2_lg < -10){setGM({ ...GM, t44_2_lg: (-10)})} if(GM.t44_3_lg < -10){setGM({ ...GM, t44_3_lg: (-10)})}
  };
  const gmLimit43 = () => {
    if(GM.t43_1 > 15) {setGM({ ...GM, t43_1: 15})} if(GM.t43_2 > 15) {setGM({ ...GM, t43_2: 15})} if(GM.t43_3 > 15) {setGM({ ...GM, t43_3: 15})}
    if(GM.t43_1_lg > 15) {setGM({ ...GM, t43_1_lg: 15})} if(GM.t43_2_lg > 15) {setGM({ ...GM, t43_2_lg: 15})} if(GM.t43_3_lg > 15) {setGM({ ...GM, t43_3_lg: 15})}
    if(GM.t43_1 < -10){setGM({ ...GM, t43_1: (-10)})} if(GM.t43_2 < -10){setGM({ ...GM, t43_2: (-10)})} if(GM.t43_3 < -10){setGM({ ...GM, t43_3: (-10)})}
    if(GM.t43_1_lg < -10){setGM({ ...GM, t43_1_lg: (-10)})} if(GM.t43_2_lg < -10){setGM({ ...GM, t43_2_lg: (-10)})} if(GM.t43_3_lg < -10){setGM({ ...GM, t43_3_lg: (-10)})}
  };
  const gmLimit42 = () => {
    if(GM.t42_1 > 15) {setGM({ ...GM, t42_1: 15})} if(GM.t42_2 > 15) {setGM({ ...GM, t42_2: 15})} if(GM.t42_3 > 15) {setGM({ ...GM, t42_3: 15})}
    if(GM.t42_1_lg > 15) {setGM({ ...GM, t42_1_lg: 15})} if(GM.t42_2_lg > 15) {setGM({ ...GM, t42_2_lg: 15})} if(GM.t42_3_lg > 15) {setGM({ ...GM, t42_3_lg: 15})}
    if(GM.t42_1 < -10){setGM({ ...GM, t42_1: (-10)})} if(GM.t42_2 < -10){setGM({ ...GM, t42_2: (-10)})} if(GM.t42_3 < -10){setGM({ ...GM, t42_3: (-10)})}
    if(GM.t42_1_lg < -10){setGM({ ...GM, t42_1_lg: (-10)})} if(GM.t42_2_lg < -10){setGM({ ...GM, t42_2_lg: (-10)})} if(GM.t42_3_lg < -10){setGM({ ...GM, t42_3_lg: (-10)})}
  };
  const gmLimit41 = () => {
    if(GM.t41_1 > 15) {setGM({ ...GM, t41_1: 15})} if(GM.t41_2 > 15) {setGM({ ...GM, t41_2: 15})} if(GM.t41_3 > 15) {setGM({ ...GM, t41_3: 15})}
    if(GM.t41_1_lg > 15) {setGM({ ...GM, t41_1_lg: 15})} if(GM.t41_2_lg > 15) {setGM({ ...GM, t41_2_lg: 15})} if(GM.t41_3_lg > 15) {setGM({ ...GM, t41_3_lg: 15})}
    if(GM.t41_1 < -10){setGM({ ...GM, t41_1: (-10)})} if(GM.t41_2 < -10){setGM({ ...GM, t41_2: (-10)})} if(GM.t41_3 < -10){setGM({ ...GM, t41_3: (-10)})}
    if(GM.t41_1_lg < -10){setGM({ ...GM, t41_1_lg: (-10)})} if(GM.t41_2_lg < -10){setGM({ ...GM, t41_2_lg: (-10)})} if(GM.t41_3_lg < -10){setGM({ ...GM, t41_3_lg: (-10)})}
  };
  const gmLimit31 = () => {
    if(GM.t31_1 > 15) {setGM({ ...GM, t31_1: 15})} if(GM.t31_2 > 15) {setGM({ ...GM, t31_2: 15})} if(GM.t31_3 > 15) {setGM({ ...GM, t31_3: 15})}
    if(GM.t31_1_lg > 15) {setGM({ ...GM, t31_1_lg: 15})} if(GM.t31_2_lg > 15) {setGM({ ...GM, t31_2_lg: 15})} if(GM.t31_3_lg > 15) {setGM({ ...GM, t31_3_lg: 15})}
    if(GM.t31_1 < -10){setGM({ ...GM, t31_1: (-10)})} if(GM.t31_2 < -10){setGM({ ...GM, t31_2: (-10)})} if(GM.t31_3 < -10){setGM({ ...GM, t31_3: (-10)})}
    if(GM.t31_1_lg < -10){setGM({ ...GM, t31_1_lg: (-10)})} if(GM.t31_2_lg < -10){setGM({ ...GM, t31_2_lg: (-10)})} if(GM.t31_3_lg < -10){setGM({ ...GM, t31_3_lg: (-10)})}
  };
  const gmLimit32 = () => {
    if(GM.t32_1 > 15) {setGM({ ...GM, t32_1: 15})} if(GM.t32_2 > 15) {setGM({ ...GM, t32_2: 15})} if(GM.t32_3 > 15) {setGM({ ...GM, t32_3: 15})}
    if(GM.t32_1_lg > 15) {setGM({ ...GM, t32_1_lg: 15})} if(GM.t32_2_lg > 15) {setGM({ ...GM, t32_2_lg: 15})} if(GM.t32_3_lg > 15) {setGM({ ...GM, t32_3_lg: 15})}
    if(GM.t32_1 < -10){setGM({ ...GM, t32_1: (-10)})} if(GM.t32_2 < -10){setGM({ ...GM, t32_2: (-10)})} if(GM.t32_3 < -10){setGM({ ...GM, t32_3: (-10)})}
    if(GM.t32_1_lg < -10){setGM({ ...GM, t32_1_lg: (-10)})} if(GM.t32_2_lg < -10){setGM({ ...GM, t32_2_lg: (-10)})} if(GM.t32_3_lg < -10){setGM({ ...GM, t32_3_lg: (-10)})}
  };
  const gmLimit33 = () => {
    if(GM.t33_1 > 15) {setGM({ ...GM, t33_1: 15})} if(GM.t33_2 > 15) {setGM({ ...GM, t33_2: 15})} if(GM.t33_3 > 15) {setGM({ ...GM, t33_3: 15})}
    if(GM.t33_1_lg > 15) {setGM({ ...GM, t33_1_lg: 15})} if(GM.t33_2_lg > 15) {setGM({ ...GM, t33_2_lg: 15})} if(GM.t33_3_lg > 15) {setGM({ ...GM, t33_3_lg: 15})}
    if(GM.t33_1 < -10){setGM({ ...GM, t33_1: (-10)})} if(GM.t33_2 < -10){setGM({ ...GM, t33_2: (-10)})} if(GM.t33_3 < -10){setGM({ ...GM, t33_3: (-10)})}
    if(GM.t33_1_lg < -10){setGM({ ...GM, t33_1_lg: (-10)})} if(GM.t33_2_lg < -10){setGM({ ...GM, t33_2_lg: (-10)})} if(GM.t33_3_lg < -10){setGM({ ...GM, t33_3_lg: (-10)})}
  };
  const gmLimit34 = () => {
    if(GM.t34_1 > 15) {setGM({ ...GM, t34_1: 15})} if(GM.t34_2 > 15) {setGM({ ...GM, t34_2: 15})} if(GM.t34_3 > 15) {setGM({ ...GM, t34_3: 15})}
    if(GM.t34_1_lg > 15) {setGM({ ...GM, t34_1_lg: 15})} if(GM.t34_2_lg > 15) {setGM({ ...GM, t34_2_lg: 15})} if(GM.t34_3_lg > 15) {setGM({ ...GM, t34_3_lg: 15})}
    if(GM.t34_1 < -10){setGM({ ...GM, t34_1: (-10)})} if(GM.t34_2 < -10){setGM({ ...GM, t34_2: (-10)})} if(GM.t34_3 < -10){setGM({ ...GM, t34_3: (-10)})}
    if(GM.t34_1_lg < -10){setGM({ ...GM, t34_1_lg: (-10)})} if(GM.t34_2_lg < -10){setGM({ ...GM, t34_2_lg: (-10)})} if(GM.t34_3_lg < -10){setGM({ ...GM, t34_3_lg: (-10)})}
  };
  const gmLimit35 = () => {
    if(GM.t35_1 > 15) {setGM({ ...GM, t35_1: 15})} if(GM.t35_2 > 15) {setGM({ ...GM, t35_2: 15})} if(GM.t35_3 > 15) {setGM({ ...GM, t35_3: 15})}
    if(GM.t35_1_lg > 15) {setGM({ ...GM, t35_1_lg: 15})} if(GM.t35_2_lg > 15) {setGM({ ...GM, t35_2_lg: 15})} if(GM.t35_3_lg > 15) {setGM({ ...GM, t35_3_lg: 15})}
    if(GM.t35_1 < -10){setGM({ ...GM, t35_1: (-10)})} if(GM.t35_2 < -10){setGM({ ...GM, t35_2: (-10)})} if(GM.t35_3 < -10){setGM({ ...GM, t35_3: (-10)})}
    if(GM.t35_1_lg < -10){setGM({ ...GM, t35_1_lg: (-10)})} if(GM.t35_2_lg < -10){setGM({ ...GM, t35_2_lg: (-10)})} if(GM.t35_3_lg < -10){setGM({ ...GM, t35_3_lg: (-10)})}
  };
  const gmLimit36 = () => {
    if(GM.t36_1 > 15) {setGM({ ...GM, t36_1: 15})} if(GM.t36_2 > 15) {setGM({ ...GM, t36_2: 15})} if(GM.t36_3 > 15) {setGM({ ...GM, t36_3: 15})}
    if(GM.t36_1_lg > 15) {setGM({ ...GM, t36_1_lg: 15})} if(GM.t36_2_lg > 15) {setGM({ ...GM, t36_2_lg: 15})} if(GM.t36_3_lg > 15) {setGM({ ...GM, t36_3_lg: 15})}
    if(GM.t36_1 < -10){setGM({ ...GM, t36_1: (-10)})} if(GM.t36_2 < -10){setGM({ ...GM, t36_2: (-10)})} if(GM.t36_3 < -10){setGM({ ...GM, t36_3: (-10)})}
    if(GM.t36_1_lg < -10){setGM({ ...GM, t36_1_lg: (-10)})} if(GM.t36_2_lg < -10){setGM({ ...GM, t36_2_lg: (-10)})} if(GM.t36_3_lg < -10){setGM({ ...GM, t36_3_lg: (-10)})}
  };
  const gmLimit37 = () => {
    if(GM.t37_1 > 15) {setGM({ ...GM, t37_1: 15})} if(GM.t37_2 > 15) {setGM({ ...GM, t37_2: 15})} if(GM.t37_3 > 15) {setGM({ ...GM, t37_3: 15})}
    if(GM.t37_1_lg > 15) {setGM({ ...GM, t37_1_lg: 15})} if(GM.t37_2_lg > 15) {setGM({ ...GM, t37_2_lg: 15})} if(GM.t37_3_lg > 15) {setGM({ ...GM, t37_3_lg: 15})}
    if(GM.t37_1 < -10){setGM({ ...GM, t37_1: (-10)})} if(GM.t37_2 < -10){setGM({ ...GM, t37_2: (-10)})} if(GM.t37_3 < -10){setGM({ ...GM, t37_3: (-10)})}
    if(GM.t37_1_lg < -10){setGM({ ...GM, t37_1_lg: (-10)})} if(GM.t37_2_lg < -10){setGM({ ...GM, t37_2_lg: (-10)})} if(GM.t37_3_lg < -10){setGM({ ...GM, t37_3_lg: (-10)})}
  };
  const gmLimit38 = () => {
    if(GM.t38_1 > 15) {setGM({ ...GM, t38_1: 15})} if(GM.t38_2 > 15) {setGM({ ...GM, t38_2: 15})} if(GM.t38_3 > 15) {setGM({ ...GM, t38_3: 15})}
    if(GM.t38_1_lg > 15) {setGM({ ...GM, t38_1_lg: 15})} if(GM.t38_2_lg > 15) {setGM({ ...GM, t38_2_lg: 15})} if(GM.t38_3_lg > 15) {setGM({ ...GM, t38_3_lg: 15})}
    if(GM.t38_1 < -10){setGM({ ...GM, t38_1: (-10)})} if(GM.t38_2 < -10){setGM({ ...GM, t38_2: (-10)})} if(GM.t38_3 < -10){setGM({ ...GM, t38_3: (-10)})}
    if(GM.t38_1_lg < -10){setGM({ ...GM, t38_1_lg: (-10)})} if(GM.t38_2_lg < -10){setGM({ ...GM, t38_2_lg: (-10)})} if(GM.t38_3_lg < -10){setGM({ ...GM, t38_3_lg: (-10)})}
  };

//Probe Limit
  const ProbeLimit48 = () => {
    if(Probe.p48_1 > 15) {setProbe({ ...Probe, p48_1: 15})} if(Probe.p48_2 > 15) {setProbe({ ...Probe, p48_2: 15})} if(Probe.p48_3 > 15) {setProbe({ ...Probe, p48_3: 15})}
    if(Probe.p48_1_lg > 15) {setProbe({ ...Probe, p48_1_lg: 15})} if(Probe.p48_2_lg > 15) {setProbe({ ...Probe, p48_2_lg: 15})} if(Probe.p48_3_lg > 15) {setProbe({ ...Probe, p48_3_lg: 15})}
    if(Probe.p48_1 < 0){setProbe({ ...Probe, p48_1: (0)})} if(Probe.p48_2 < 0){setProbe({ ...Probe, p48_2: (0)})} if(Probe.p48_3 < 0){setProbe({ ...Probe, p48_3: (0)})}
    if(Probe.p48_1_lg < 0){setProbe({ ...Probe, p48_1_lg: (0)})} if(Probe.p48_2_lg < 0){setProbe({ ...Probe, p48_2_lg: (0)})} if(Probe.p48_3_lg < 0){setProbe({ ...Probe, p48_3_lg: (0)})}
  };
  const ProbeLimit47 = () => {
    if(Probe.p47_1 > 15) {setProbe({ ...Probe, p47_1: 15})} if(Probe.p47_2 > 15) {setProbe({ ...Probe, p47_2: 15})} if(Probe.p47_3 > 15) {setProbe({ ...Probe, p47_3: 15})}
    if(Probe.p47_1_lg > 15) {setProbe({ ...Probe, p47_1_lg: 15})} if(Probe.p47_2_lg > 15) {setProbe({ ...Probe, p47_2_lg: 15})} if(Probe.p47_3_lg > 15) {setProbe({ ...Probe, p47_3_lg: 15})}
    if(Probe.p47_1 < 0){setProbe({ ...Probe, p47_1: (0)})} if(Probe.p47_2 < 0){setProbe({ ...Probe, p47_2: (0)})} if(Probe.p47_3 < 0){setProbe({ ...Probe, p47_3: (0)})}
    if(Probe.p47_1_lg < 0){setProbe({ ...Probe, p47_1_lg: (0)})} if(Probe.p47_2_lg < 0){setProbe({ ...Probe, p47_2_lg: (0)})} if(Probe.p47_3_lg < 0){setProbe({ ...Probe, p47_3_lg: (0)})}
  };
  const ProbeLimit46 = () => {
    if(Probe.p46_1 > 15) {setProbe({ ...Probe, p46_1: 15})} if(Probe.p46_2 > 15) {setProbe({ ...Probe, p46_2: 15})} if(Probe.p46_3 > 15) {setProbe({ ...Probe, p46_3: 15})}
    if(Probe.p46_1_lg > 15) {setProbe({ ...Probe, p46_1_lg: 15})} if(Probe.p46_2_lg > 15) {setProbe({ ...Probe, p46_2_lg: 15})} if(Probe.p46_3_lg > 15) {setProbe({ ...Probe, p46_3_lg: 15})}
    if(Probe.p46_1 < 0){setProbe({ ...Probe, p46_1: (0)})} if(Probe.p46_2 < 0){setProbe({ ...Probe, p46_2: (0)})} if(Probe.p46_3 < 0){setProbe({ ...Probe, p46_3: (0)})}
    if(Probe.p46_1_lg < 0){setProbe({ ...Probe, p46_1_lg: (0)})} if(Probe.p46_2_lg < 0){setProbe({ ...Probe, p46_2_lg: (0)})} if(Probe.p46_3_lg < 0){setProbe({ ...Probe, p46_3_lg: (0)})}
  };
  const ProbeLimit45 = () => {
    if(Probe.p45_1 > 15) {setProbe({ ...Probe, p45_1: 15})} if(Probe.p45_2 > 15) {setProbe({ ...Probe, p45_2: 15})} if(Probe.p45_3 > 15) {setProbe({ ...Probe, p45_3: 15})}
    if(Probe.p45_1_lg > 15) {setProbe({ ...Probe, p45_1_lg: 15})} if(Probe.p45_2_lg > 15) {setProbe({ ...Probe, p45_2_lg: 15})} if(Probe.p45_3_lg > 15) {setProbe({ ...Probe, p45_3_lg: 15})}
    if(Probe.p45_1 < 0){setProbe({ ...Probe, p45_1: (0)})} if(Probe.p45_2 < 0){setProbe({ ...Probe, p45_2: (0)})} if(Probe.p45_3 < 0){setProbe({ ...Probe, p45_3: (0)})}
    if(Probe.p45_1_lg < 0){setProbe({ ...Probe, p45_1_lg: (0)})} if(Probe.p45_2_lg < 0){setProbe({ ...Probe, p45_2_lg: (0)})} if(Probe.p45_3_lg < 0){setProbe({ ...Probe, p45_3_lg: (0)})}
  };
  const ProbeLimit44 = () => {
    if(Probe.p44_1 > 15) {setProbe({ ...Probe, p44_1: 15})} if(Probe.p44_2 > 15) {setProbe({ ...Probe, p44_2: 15})} if(Probe.p44_3 > 15) {setProbe({ ...Probe, p44_3: 15})}
    if(Probe.p44_1_lg > 15) {setProbe({ ...Probe, p44_1_lg: 15})} if(Probe.p44_2_lg > 15) {setProbe({ ...Probe, p44_2_lg: 15})} if(Probe.p44_3_lg > 15) {setProbe({ ...Probe, p44_3_lg: 15})}
    if(Probe.p44_1 < 0){setProbe({ ...Probe, p44_1: (0)})} if(Probe.p44_2 < 0){setProbe({ ...Probe, p44_2: (0)})} if(Probe.p44_3 < 0){setProbe({ ...Probe, p44_3: (0)})}
    if(Probe.p44_1_lg < 0){setProbe({ ...Probe, p44_1_lg: (0)})} if(Probe.p44_2_lg < 0){setProbe({ ...Probe, p44_2_lg: (0)})} if(Probe.p44_3_lg < 0){setProbe({ ...Probe, p44_3_lg: (0)})}
  };
  const ProbeLimit43 = () => {
    if(Probe.p43_1 > 15) {setProbe({ ...Probe, p43_1: 15})} if(Probe.p43_2 > 15) {setProbe({ ...Probe, p43_2: 15})} if(Probe.p43_3 > 15) {setProbe({ ...Probe, p43_3: 15})}
    if(Probe.p43_1_lg > 15) {setProbe({ ...Probe, p43_1_lg: 15})} if(Probe.p43_2_lg > 15) {setProbe({ ...Probe, p43_2_lg: 15})} if(Probe.p43_3_lg > 15) {setProbe({ ...Probe, p43_3_lg: 15})}
    if(Probe.p43_1 < 0){setProbe({ ...Probe, p43_1: (0)})} if(Probe.p43_2 < 0){setProbe({ ...Probe, p43_2: (0)})} if(Probe.p43_3 < 0){setProbe({ ...Probe, p43_3: (0)})}
    if(Probe.p43_1_lg < 0){setProbe({ ...Probe, p43_1_lg: (0)})} if(Probe.p43_2_lg < 0){setProbe({ ...Probe, p43_2_lg: (0)})} if(Probe.p43_3_lg < 0){setProbe({ ...Probe, p43_3_lg: (0)})}
  };
  const ProbeLimit42 = () => {
    if(Probe.p42_1 > 15) {setProbe({ ...Probe, p42_1: 15})} if(Probe.p42_2 > 15) {setProbe({ ...Probe, p42_2: 15})} if(Probe.p42_3 > 15) {setProbe({ ...Probe, p42_3: 15})}
    if(Probe.p42_1_lg > 15) {setProbe({ ...Probe, p42_1_lg: 15})} if(Probe.p42_2_lg > 15) {setProbe({ ...Probe, p42_2_lg: 15})} if(Probe.p42_3_lg > 15) {setProbe({ ...Probe, p42_3_lg: 15})}
    if(Probe.p42_1 < 0){setProbe({ ...Probe, p42_1: (0)})} if(Probe.p42_2 < 0){setProbe({ ...Probe, p42_2: (0)})} if(Probe.p42_3 < 0){setProbe({ ...Probe, p42_3: (0)})}
    if(Probe.p42_1_lg < 0){setProbe({ ...Probe, p42_1_lg: (0)})} if(Probe.p42_2_lg < 0){setProbe({ ...Probe, p42_2_lg: (0)})} if(Probe.p42_3_lg < 0){setProbe({ ...Probe, p42_3_lg: (0)})}
  };
  const ProbeLimit41 = () => {
    if(Probe.p41_1 > 15) {setProbe({ ...Probe, p41_1: 15})} if(Probe.p41_2 > 15) {setProbe({ ...Probe, p41_2: 15})} if(Probe.p41_3 > 15) {setProbe({ ...Probe, p41_3: 15})}
    if(Probe.p41_1_lg > 15) {setProbe({ ...Probe, p41_1_lg: 15})} if(Probe.p41_2_lg > 15) {setProbe({ ...Probe, p41_2_lg: 15})} if(Probe.p41_3_lg > 15) {setProbe({ ...Probe, p41_3_lg: 15})}
    if(Probe.p41_1 < 0){setProbe({ ...Probe, p41_1: (0)})} if(Probe.p41_2 < 0){setProbe({ ...Probe, p41_2: (0)})} if(Probe.p41_3 < 0){setProbe({ ...Probe, p41_3: (0)})}
    if(Probe.p41_1_lg < 0){setProbe({ ...Probe, p41_1_lg: (0)})} if(Probe.p41_2_lg < 0){setProbe({ ...Probe, p41_2_lg: (0)})} if(Probe.p41_3_lg < 0){setProbe({ ...Probe, p41_3_lg: (0)})}
  };
  const ProbeLimit31 = () => {
    if(Probe.p31_1 > 15) {setProbe({ ...Probe, p31_1: 15})} if(Probe.p31_2 > 15) {setProbe({ ...Probe, p31_2: 15})} if(Probe.p31_3 > 15) {setProbe({ ...Probe, p31_3: 15})}
    if(Probe.p31_1_lg > 15) {setProbe({ ...Probe, p31_1_lg: 15})} if(Probe.p31_2_lg > 15) {setProbe({ ...Probe, p31_2_lg: 15})} if(Probe.p31_3_lg > 15) {setProbe({ ...Probe, p31_3_lg: 15})}
    if(Probe.p31_1 < 0){setProbe({ ...Probe, p31_1: (0)})} if(Probe.p31_2 < 0){setProbe({ ...Probe, p31_2: (0)})} if(Probe.p31_3 < 0){setProbe({ ...Probe, p31_3: (0)})}
    if(Probe.p31_1_lg < 0){setProbe({ ...Probe, p31_1_lg: (0)})} if(Probe.p31_2_lg < 0){setProbe({ ...Probe, p31_2_lg: (0)})} if(Probe.p31_3_lg < 0){setProbe({ ...Probe, p31_3_lg: (0)})}
  };
  const ProbeLimit32 = () => {
    if(Probe.p32_1 > 15) {setProbe({ ...Probe, p32_1: 15})} if(Probe.p32_2 > 15) {setProbe({ ...Probe, p32_2: 15})} if(Probe.p32_3 > 15) {setProbe({ ...Probe, p32_3: 15})}
    if(Probe.p32_1_lg > 15) {setProbe({ ...Probe, p32_1_lg: 15})} if(Probe.p32_2_lg > 15) {setProbe({ ...Probe, p32_2_lg: 15})} if(Probe.p32_3_lg > 15) {setProbe({ ...Probe, p32_3_lg: 15})}
    if(Probe.p32_1 < 0){setProbe({ ...Probe, p32_1: (0)})} if(Probe.p32_2 < 0){setProbe({ ...Probe, p32_2: (0)})} if(Probe.p32_3 < 0){setProbe({ ...Probe, p32_3: (0)})}
    if(Probe.p32_1_lg < 0){setProbe({ ...Probe, p32_1_lg: (0)})} if(Probe.p32_2_lg < 0){setProbe({ ...Probe, p32_2_lg: (0)})} if(Probe.p32_3_lg < 0){setProbe({ ...Probe, p32_3_lg: (0)})}
  };
  const ProbeLimit33 = () => {
    if(Probe.p33_1 > 15) {setProbe({ ...Probe, p33_1: 15})} if(Probe.p33_2 > 15) {setProbe({ ...Probe, p33_2: 15})} if(Probe.p33_3 > 15) {setProbe({ ...Probe, p33_3: 15})}
    if(Probe.p33_1_lg > 15) {setProbe({ ...Probe, p33_1_lg: 15})} if(Probe.p33_2_lg > 15) {setProbe({ ...Probe, p33_2_lg: 15})} if(Probe.p33_3_lg > 15) {setProbe({ ...Probe, p33_3_lg: 15})}
    if(Probe.p33_1 < 0){setProbe({ ...Probe, p33_1: (0)})} if(Probe.p33_2 < 0){setProbe({ ...Probe, p33_2: (0)})} if(Probe.p33_3 < 0){setProbe({ ...Probe, p33_3: (0)})}
    if(Probe.p33_1_lg < 0){setProbe({ ...Probe, p33_1_lg: (0)})} if(Probe.p33_2_lg < 0){setProbe({ ...Probe, p33_2_lg: (0)})} if(Probe.p33_3_lg < 0){setProbe({ ...Probe, p33_3_lg: (0)})}
  };
  const ProbeLimit34 = () => {
    if(Probe.p34_1 > 15) {setProbe({ ...Probe, p34_1: 15})} if(Probe.p34_2 > 15) {setProbe({ ...Probe, p34_2: 15})} if(Probe.p34_3 > 15) {setProbe({ ...Probe, p34_3: 15})}
    if(Probe.p34_1_lg > 15) {setProbe({ ...Probe, p34_1_lg: 15})} if(Probe.p34_2_lg > 15) {setProbe({ ...Probe, p34_2_lg: 15})} if(Probe.p34_3_lg > 15) {setProbe({ ...Probe, p34_3_lg: 15})}
    if(Probe.p34_1 < 0){setProbe({ ...Probe, p34_1: (0)})} if(Probe.p34_2 < 0){setProbe({ ...Probe, p34_2: (0)})} if(Probe.p34_3 < 0){setProbe({ ...Probe, p34_3: (0)})}
    if(Probe.p34_1_lg < 0){setProbe({ ...Probe, p34_1_lg: (0)})} if(Probe.p34_2_lg < 0){setProbe({ ...Probe, p34_2_lg: (0)})} if(Probe.p34_3_lg < 0){setProbe({ ...Probe, p34_3_lg: (0)})}
  };
  const ProbeLimit35 = () => {
    if(Probe.p35_1 > 15) {setProbe({ ...Probe, p35_1: 15})} if(Probe.p35_2 > 15) {setProbe({ ...Probe, p35_2: 15})} if(Probe.p35_3 > 15) {setProbe({ ...Probe, p35_3: 15})}
    if(Probe.p35_1_lg > 15) {setProbe({ ...Probe, p35_1_lg: 15})} if(Probe.p35_2_lg > 15) {setProbe({ ...Probe, p35_2_lg: 15})} if(Probe.p35_3_lg > 15) {setProbe({ ...Probe, p35_3_lg: 15})}
    if(Probe.p35_1 < 0){setProbe({ ...Probe, p35_1: (0)})} if(Probe.p35_2 < 0){setProbe({ ...Probe, p35_2: (0)})} if(Probe.p35_3 < 0){setProbe({ ...Probe, p35_3: (0)})}
    if(Probe.p35_1_lg < 0){setProbe({ ...Probe, p35_1_lg: (0)})} if(Probe.p35_2_lg < 0){setProbe({ ...Probe, p35_2_lg: (0)})} if(Probe.p35_3_lg < 0){setProbe({ ...Probe, p35_3_lg: (0)})}
  };
  const ProbeLimit36 = () => {
    if(Probe.p36_1 > 15) {setProbe({ ...Probe, p36_1: 15})} if(Probe.p36_2 > 15) {setProbe({ ...Probe, p36_2: 15})} if(Probe.p36_3 > 15) {setProbe({ ...Probe, p36_3: 15})}
    if(Probe.p36_1_lg > 15) {setProbe({ ...Probe, p36_1_lg: 15})} if(Probe.p36_2_lg > 15) {setProbe({ ...Probe, p36_2_lg: 15})} if(Probe.p36_3_lg > 15) {setProbe({ ...Probe, p36_3_lg: 15})}
    if(Probe.p36_1 < 0){setProbe({ ...Probe, p36_1: (0)})} if(Probe.p36_2 < 0){setProbe({ ...Probe, p36_2: (0)})} if(Probe.p36_3 < 0){setProbe({ ...Probe, p36_3: (0)})}
    if(Probe.p36_1_lg < 0){setProbe({ ...Probe, p36_1_lg: (0)})} if(Probe.p36_2_lg < 0){setProbe({ ...Probe, p36_2_lg: (0)})} if(Probe.p36_3_lg < 0){setProbe({ ...Probe, p36_3_lg: (0)})}
  };
  const ProbeLimit37 = () => {
    if(Probe.p37_1 > 15) {setProbe({ ...Probe, p37_1: 15})} if(Probe.p37_2 > 15) {setProbe({ ...Probe, p37_2: 15})} if(Probe.p37_3 > 15) {setProbe({ ...Probe, p37_3: 15})}
    if(Probe.p37_1_lg > 15) {setProbe({ ...Probe, p37_1_lg: 15})} if(Probe.p37_2_lg > 15) {setProbe({ ...Probe, p37_2_lg: 15})} if(Probe.p37_3_lg > 15) {setProbe({ ...Probe, p37_3_lg: 15})}
    if(Probe.p37_1 < 0){setProbe({ ...Probe, p37_1: (0)})} if(Probe.p37_2 < 0){setProbe({ ...Probe, p37_2: (0)})} if(Probe.p37_3 < 0){setProbe({ ...Probe, p37_3: (0)})}
    if(Probe.p37_1_lg < 0){setProbe({ ...Probe, p37_1_lg: (0)})} if(Probe.p37_2_lg < 0){setProbe({ ...Probe, p37_2_lg: (0)})} if(Probe.p37_3_lg < 0){setProbe({ ...Probe, p37_3_lg: (0)})}
  };
  const ProbeLimit38 = () => {
    if(Probe.p38_1 > 15) {setProbe({ ...Probe, p38_1: 15})} if(Probe.p38_2 > 15) {setProbe({ ...Probe, p38_2: 15})} if(Probe.p38_3 > 15) {setProbe({ ...Probe, p38_3: 15})}
    if(Probe.p38_1_lg > 15) {setProbe({ ...Probe, p38_1_lg: 15})} if(Probe.p38_2_lg > 15) {setProbe({ ...Probe, p38_2_lg: 15})} if(Probe.p38_3_lg > 15) {setProbe({ ...Probe, p38_3_lg: 15})}
    if(Probe.p38_1 < 0){setProbe({ ...Probe, p38_1: (0)})} if(Probe.p38_2 < 0){setProbe({ ...Probe, p38_2: (0)})} if(Probe.p38_3 < 0){setProbe({ ...Probe, p38_3: (0)})}
    if(Probe.p38_1_lg < 0){setProbe({ ...Probe, p38_1_lg: (0)})} if(Probe.p38_2_lg < 0){setProbe({ ...Probe, p38_2_lg: (0)})} if(Probe.p38_3_lg < 0){setProbe({ ...GM, p38_3_lg: (0)})}
  };

  //Implant Screening
  const [current, setCurrent] = useState(0);
  const [currentB, setCurrentB] = useState(0);
  const [inflam, setInflam] = useState({t21: "0", t22: "0", t23: "0", t24: "0", t25: "0", t26: "0", t27: "0", t28: "0", t31: "0", t32: "0", t33: "0", t34: "0", t35: "0", t36: "0", t37: "0", t38: "0",
                                        t11: "0", t12: "0", t13: "0", t14: "0", t15: "0", t16: "0", t17: "0", t18: "0", t41: "0", t42: "0", t43: "0", t44: "0", t45: "0", t46: "0", t47: "0", t48: "0"});
  const [incPD, setIncPD] = useState({t21: "0.5", t22: "0.5", t23: "0.5", t24: "0.5", t25: "0.5", t26: "0.5", t27: "0.5", t28: "0.5", t31: "0.5", t32: "0.5", t33: "0.5", t34: "0.5", t35: "0.5", t36: "0.5", t37: "0.5", t38: "0.5",
                                      t11: "0.5", t12: "0.5", t13: "0.5", t14: "0.5", t15: "0.5", t16: "0.5", t17: "0.5", t18: "0.5", t41: "0.5", t42: "0.5", t43: "0.5", t44: "0.5", t45: "0.5", t46: "0.5", t47: "0.5", t48: "0.5",});
  const [incPDA, setIncPDA] = useState({t21: "0", t22: "0", t23: "0", t24: "0", t25: "0", t26: "0", t27: "0", t28: "0", t31: "0", t32: "0", t33: "0", t34: "0", t35: "0", t36: "0", t37: "0", t38: "0",
                                        t11: "0", t12: "0", t13: "0", t14: "0", t15: "0", t16: "0", t17: "0", t18: "0", t41: "0", t42: "0", t43: "0", t44: "0", t45: "0", t46: "0", t47: "0", t48: "0"});
  const [bone, setBone] = useState({t21: "0.5", t22: "0.5", t23: "0.5", t24: "0.5", t25: "0.5", t26: "0.5", t27: "0.5", t28: "0.5", t31: "0.5", t32: "0.5", t33: "0.5", t34: "0.5", t35: "0.5", t36: "0.5", t37: "0.5", t38: "0.5",
                                    t11: "0.5", t12: "0.5", t13: "0.5", t14: "0.5", t15: "0.5", t16: "0.5", t17: "0.5", t18: "0.5", t41: "0.5", t42: "0.5", t43: "0.5", t44: "0.5", t45: "0.5", t46: "0.5", t47: "0.5", t48: "0.5"});
  const [boneA, setBoneA] = useState({t21: "0", t22: "0", t23: "0", t24: "0", t25: "0", t26: "0", t27: "0", t28: "0", t31: "0", t32: "0", t33: "0", t34: "0", t35: "0", t36: "0", t37: "0", t38: "0",
                                      t11: "0", t12: "0", t13: "0", t14: "0", t15: "0", t16: "0", t17: "0", t18: "0", t41: "0", t42: "0", t43: "0", t44: "0", t45: "0", t46: "0", t47: "0", t48: "0"});

  //Implant Data
  const SliderData = [
    {
      image: 'Teeth/21i.png',
      name: '21',
      toothStatus: lock21,
      Question1: inflam.t21, 
      Question2: incPD.t21,
      Question2a: incPD.t21 === "0" || incPD.t21 === "0.5" ? incPDA.t21 : null,
      Question3: bone.t21,
      Question3a: bone.t21 === "0" || bone.t21 === "0.5" ? boneA.t21 : null
  },
  {
      image: 'Teeth/22i.png',
      name: '22',
      toothStatus: lock22,
      Question1: inflam.t22, 
      Question2: incPD.t22,
      Question2a: incPD.t22 === "0" || incPD.t22 === "0.5" ? incPDA.t22 : null,
      Question3: bone.t22,
      Question3a: bone.t22 === "0" || bone.t22 === "0.5" ? boneA.t22 : null
  },
  {
      image: 'Teeth/23i.png',
      name: '23',
      toothStatus: lock23,
      Question1: inflam.t23, 
      Question2: incPD.t23,
      Question2a: incPD.t23 === "0" || incPD.t23 === "0.5" ? incPDA.t23 : null,
      Question3: bone.t23,
      Question3a: bone.t23 === "0" || bone.t23 === "0.5" ? boneA.t23 : null
  },
  {
      image: 'Teeth/24i.png',
      name: '24',
      toothStatus: lock24,
      Question1: inflam.t24, 
      Question2: incPD.t24,
      Question2a: incPD.t24 === "0" || incPD.t24 === "0.5" ? incPDA.t24 : null,
      Question3: bone.t24,
      Question3a: bone.t24 === "0" || bone.t24 === "0.5" ? boneA.t24 : null
  },
  {
      image: 'Teeth/25i.png',
      name: '25',
      toothStatus: lock25,
      Question1: inflam.t25, 
      Question2: incPD.t25,
      Question2a: incPD.t25 === "0" || incPD.t25 === "0.5" ? incPDA.t25 : null,
      Question3: bone.t25,
      Question3a: bone.t25 === "0" || bone.t25 === "0.5" ? boneA.t25 : null
  },
  {
      image: 'Teeth/26i.png',
      name: '26',
      toothStatus: lock26,
      Question1: inflam.t26,
      Question2: incPD.t26,
      Question2a: incPD.t26 === "0" || incPD.t26 === "0.5" ? incPDA.t26 : null, 
      Question3: bone.t26,
      Question3a: bone.t26 === "0" || bone.t26 === "0.5" ? boneA.t26 : null

  },
  {
      image: 'Teeth/27i.png',
      name: '27',
      toothStatus: lock27,
      Question1: inflam.t27, 
      Question2: incPD.t27,
      Question2a: incPD.t27 === "0" || incPD.t27 === "0.5" ? incPDA.t27 : null, 
      Question3: bone.t27,
      Question3a: bone.t27 === "0" || bone.t27 === "0.5" ? boneA.t27 : null
  },
  {
      image: 'Teeth/28i.png',
      name: '28',
      toothStatus: lock28,
      Question1: inflam.t28, 
      Question2: incPD.t28,
      Question2a: incPD.t28 === "0" || incPD.t28 === "0.5" ? incPDA.t28 : null,
      Question3: bone.t28,
      Question3a: bone.t28 === "0" || bone.t28 === "0.5" ? boneA.t28 : null
  },
    {
        image: 'Teeth/31i.png',
        name: '31',
        toothStatus: Lock.t31,
        Question1: inflam.t31, 
        Question2: incPD.t31,
        Question2a: incPD.t31 === "0" || incPD.t31 === "0.5" ? incPDA.t31 : null,
        Question3: bone.t31,
        Question3a: bone.t31 === "0" || bone.t31 === "0.5" ? boneA.t31 : null
    },
    {
        image: 'Teeth/32i.png',
        name: '32',
        toothStatus: Lock.t32,
        Question1: inflam.t32, 
        Question2: incPD.t32,
        Question2a: incPD.t32 === "0" || incPD.t32 === "0.5" ? incPDA.t32 : null,
        Question3: bone.t32,
        Question3a: bone.t32 === "0" || bone.t32 === "0.5" ? boneA.t32 : null
    },
    {
        image: 'Teeth/33i.png',
        name: '33',
        toothStatus: Lock.t33,
        Question1: inflam.t33, 
        Question2: incPD.t33,
        Question2a: incPD.t33 === "0" || incPD.t33 === "0.5" ? incPDA.t33 : null,
        Question3: bone.t33,
        Question3a: bone.t33 === "0" || bone.t33 === "0.5" ? boneA.t33 : null
    },
    {
        image: 'Teeth/34i.png',
        name: '34',
        toothStatus: Lock.t34,
        Question1: inflam.t34, 
        Question2: incPD.t34,
        Question2a: incPD.t34 === "0" || incPD.t34 === "0.5" ? incPDA.t34 : null,
        Question3: bone.t34,
        Question3a: bone.t34 === "0" || bone.t34 === "0.5" ? boneA.t34 : null
    },
    {
        image: 'Teeth/35i.png',
        name: '35',
        toothStatus: Lock.t35,
        Question1: inflam.t35, 
        Question2: incPD.t35,
        Question2a: incPD.t35 === "0" || incPD.t35 === "0.5" ? incPDA.t35 : null,
        Question3: bone.t35,
        Question3a: bone.t35 === "0" || bone.t35 === "0.5" ? boneA.t35 : null
    },
    {
        image: 'Teeth/36i.png',
        name: '36',
        toothStatus: Lock.t36,
        Question1: inflam.t36, 
        Question2: incPD.t36,
        Question2a: incPD.t36 === "0" || incPD.t36 === "0.5" ? incPDA.t36 : null,
        Question3: bone.t36,
        Question3a: bone.t36 === "0" || bone.t36 === "0.5" ? boneA.t36 : null
    },
    {
        image: 'Teeth/37i.png',
        name: '37',
        toothStatus: Lock.t37,
        Question1: inflam.t37, 
        Question2: incPD.t37,
        Question2a: incPD.t37 === "0" || incPD.t37 === "0.5" ? incPDA.t37 : null,
        Question3: bone.t37,
        Question3a: bone.t37 === "0" || bone.t37 === "0.5" ? boneA.t37 : null
    },
    {
        image: 'Teeth/38i.png',
        name: '38',
        toothStatus: Lock.t38,
        Question1: inflam.t38, 
        Question2: incPD.t38,
        Question2a: incPD.t38 === "0" || incPD.t38 === "0.5" ? incPDA.t38 : null,
        Question3: bone.t38,
        Question3a: bone.t38 === "0" || bone.t38 === "0.5" ? boneA.t38 : null
    },
  ]
  
  const SliderDataFilter = SliderData.filter(implant => implant.toothStatus === 1);


  //Implant Sidebar
  function ImplantSidemenu({slides}) {
    const length = slides.length;


    useLayoutEffect(() => {
      if(current === length && length > 0) {
        setCurrent(current - 1)
      }
    });
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current -1)
    };
 
    useLayoutEffect(() => {
      if (!Array.isArray(slides) || slides.length <= 0) {
        setImplantScreening(false);
     }
    });

    return(
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className={implantScreening ? 'side-menu' : 'disable_implant'}>
            <div className='implant-items'>
                <AiOutlineClose className="menu-icon-implants" onClick={() => setImplantScreening(!implantScreening)}/>
                <HeaderImplant>Implant Screening</HeaderImplant>
                <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
                {SliderDataFilter.map((slide, index) => {
                  return (
                    <div className="slide" key={index}>
                      {index === current && (
                        <>
                        <SubHeaderImplant>{slide.name}</SubHeaderImplant>
                        <img src={process.env.PUBLIC_URL + slide.image} className='implant_img'/>
                        <StyledFormControl component="fieldset">
                        <StyledFormLabel className="implant_questions" component="legend">1. Are there any clinical signs of inflammation/bleeding and/or suppuration on gentle probing? </StyledFormLabel>
                          <StyledRadioGroup row value={slide.Question1} onChange={(e) => setInflam({...inflam, [`t${slide.name}`]: e.target.value})}>
                            <StyledFormControlLabel value="1" control={<StyledRadio />} label="Yes" />
                            <StyledFormControlLabel value="0" control={<StyledRadio />} label="No" />
                          </StyledRadioGroup>
                        <StyledFormLabel className="implant_questions" component="legend">2.	Have you identified an increase in probing depth compared to previous examinations? </StyledFormLabel>
                          <StyledRadioGroup row value={slide.Question2} onChange={(e) => setIncPD({...incPD, [`t${slide.name}`]: e.target.value})}>
                            <StyledFormControlLabel value="1" control={<StyledRadio />} label="Yes" />
                            <StyledFormControlLabel value="0" control={<StyledRadio />} label="No" />
                            <StyledFormControlLabel value="0.5" control={<StyledRadio />} label="No previous records" />
                          </StyledRadioGroup>
                          <div className={slide.Question2 === "0.5" || slide.Question2 === "0" ? "implant_questions_cond" : "disable_question"}>
                          <StyledFormLabel component="legend">2a. Is there a pocket of ≥6 mm present? </StyledFormLabel>
                          <StyledRadioGroup row value={slide.Question2a} onChange={(e) => setIncPDA({...incPDA, [`t${slide.name}`]: e.target.value})}>
                            <StyledFormControlLabel value="1" control={<StyledRadio />} label="Yes" />
                            <StyledFormControlLabel value="0" control={<StyledRadio />} label="No" />
                          </StyledRadioGroup>
                          </div>
                        <StyledFormLabel className="implant_questions" component="legend">3.	Have you identified any bone loss >2mm compared to the radiograph taken at the time of implant loading? </StyledFormLabel>
                          <StyledRadioGroup row value={slide.Question3} onChange={(e) => setBone({...bone, [`t${slide.name}`]: e.target.value})}>
                            <StyledFormControlLabel value="1" control={<StyledRadio />} label="Yes" />
                            <StyledFormControlLabel value="0" control={<StyledRadio />} label="No" />
                            <StyledFormControlLabel value="0.5" control={<StyledRadio />} label="No previous records" />
                          </StyledRadioGroup>
                          <div className={slide.Question3 === "0.5" ? "implant_questions_cond" : "disable_question"}> 
                          <StyledFormLabel component="legend">3a.	Are the bone levels ≥3 mm apical of the most coronal portion of the intraosseous part of the implant? </StyledFormLabel>
                          <StyledRadioGroup row value={slide.Question3a} onChange={(e) => setBoneA({...boneA, [`t${slide.name}`]: e.target.value})}>
                            <StyledFormControlLabel value="1" control={<StyledRadio />} label="Yes" />
                            <StyledFormControlLabel value="0" control={<StyledRadio />} label="No" />
                          </StyledRadioGroup>
                          </div>
                        </StyledFormControl>
                        </>
                      )}
                    </div>
                  )
                })}
                </section>
            </div>
            </div>
        </IconContext.Provider>
        </>
    );       
};

//Blue Side

const SliderDataB = [
  {
    image: 'Teeth/11i.png',
    name: '11',
    toothStatus: lock11,
    Question1: inflam.t11, 
    Question2: incPD.t11,
    Question2a: incPD.t11 === "0" || incPD.t11 === "0.5" ? incPDA.t11 : null,
    Question3: bone.t11,
    Question3a: bone.t11 === "0" || bone.t11 === "0.5" ? boneA.t11 : null
},
{
    image: 'Teeth/12i.png',
    name: '12',
    toothStatus: lock12,
    Question1: inflam.t12, 
    Question2: incPD.t12,
    Question2a: incPD.t12 === "0" || incPD.t12 === "0.5" ? incPDA.t12 : null,
    Question3: bone.t12,
    Question3a: bone.t12 === "0" || bone.t12 === "0.5" ? boneA.t12 : null
},
{
    image: 'Teeth/13i.png',
    name: '13',
    toothStatus: lock13,
    Question1: inflam.t13, 
    Question2: incPD.t13,
    Question2a: incPD.t13 === "0" || incPD.t13 === "0.5" ? incPDA.t13 : null,
    Question3: bone.t13,
    Question3a: bone.t13 === "0" || bone.t13 === "0.5" ? boneA.t13 : null
},
{
    image: 'Teeth/14i.png',
    name: '14',
    toothStatus: lock14,
    Question1: inflam.t14, 
    Question2: incPD.t14,
    Question2a: incPD.t14 === "0" || incPD.t14 === "0.5" ? incPDA.t14 : null,
    Question3: bone.t14,
    Question3a: bone.t14 === "0" || bone.t14 === "0.5" ? boneA.t14 : null
},
{
    image: 'Teeth/15i.png',
    name: '15',
    toothStatus: lock15,
    Question1: inflam.t15, 
    Question2: incPD.t15,
    Question2a: incPD.t15 === "0" || incPD.t15 === "0.5" ? incPDA.t15 : null,
    Question3: bone.t15,
    Question3a: bone.t15 === "0" || bone.t15 === "0.5" ? boneA.t15 : null
},
{
    image: 'Teeth/16i.png',
    name: '16',
    toothStatus: lock16,
    Question1: inflam.t16,
    Question2: incPD.t16,
    Question2a: incPD.t16 === "0" || incPD.t16 === "0.5" ? incPDA.t16 : null, 
    Question3: bone.t16,
    Question3a: bone.t16 === "0" || bone.t16 === "0.5" ? boneA.t16 : null

},
{
    image: 'Teeth/17i.png',
    name: '17',
    toothStatus: lock17,
    Question1: inflam.t17, 
    Question2: incPD.t17,
    Question2a: incPD.t17 === "0" || incPD.t17 === "0.5" ? incPDA.t17 : null, 
    Question3: bone.t17,
    Question3a: bone.t17 === "0" || bone.t17 === "0.5" ? boneA.t17 : null
},
{
    image: 'Teeth/18i.png',
    name: '18',
    toothStatus: lock18,
    Question1: inflam.t18, 
    Question2: incPD.t18,
    Question2a: incPD.t18 === "0" || incPD.t18 === "0.5" ? incPDA.t18 : null,
    Question3: bone.t18,
    Question3a: bone.t18 === "0" || bone.t18 === "0.5" ? boneA.t18 : null
},
  {
      image: 'Teeth/41i.png',
      name: '41',
      toothStatus: Lock.t41,
      Question1: inflam.t41, 
      Question2: incPD.t41,
      Question2a: incPD.t41 === "0" || incPD.t41 === "0.5" ? incPDA.t41 : null,
      Question3: bone.t41,
      Question3a: bone.t41 === "0" || bone.t41 === "0.5" ? boneA.t41 : null
  },
  {
      image: 'Teeth/42i.png',
      name: '42',
      toothStatus: Lock.t42,
      Question1: inflam.t42, 
      Question2: incPD.t42,
      Question2a: incPD.t42 === "0" || incPD.t42 === "0.5" ? incPDA.t42 : null,
      Question3: bone.t42,
      Question3a: bone.t42 === "0" || bone.t42 === "0.5" ? boneA.t42 : null
  },
  {
      image: 'Teeth/43i.png',
      name: '43',
      toothStatus: Lock.t43,
      Question1: inflam.t43, 
      Question2: incPD.t43,
      Question2a: incPD.t43 === "0" || incPD.t43 === "0.5" ? incPDA.t43 : null,
      Question3: bone.t43,
      Question3a: bone.t43 === "0" || bone.t43 === "0.5" ? boneA.t43 : null
  },
  {
      image: 'Teeth/44i.png',
      name: '44',
      toothStatus: Lock.t44,
      Question1: inflam.t44, 
      Question2: incPD.t44,
      Question2a: incPD.t44 === "0" || incPD.t44 === "0.5" ? incPDA.t44 : null,
      Question3: bone.t44,
      Question3a: bone.t44 === "0" || bone.t44 === "0.5" ? boneA.t44 : null
  },
  {
      image: 'Teeth/45i.png',
      name: '45',
      toothStatus: Lock.t45,
      Question1: inflam.t45, 
      Question2: incPD.t45,
      Question2a: incPD.t45 === "0" || incPD.t45 === "0.5" ? incPDA.t45 : null,
      Question3: bone.t45,
      Question3a: bone.t45 === "0" || bone.t45 === "0.5" ? boneA.t45 : null
  },
  {
      image: 'Teeth/46i.png',
      name: '46',
      toothStatus: Lock.t46,
      Question1: inflam.t46, 
      Question2: incPD.t46,
      Question2a: incPD.t46 === "0" || incPD.t46 === "0.5" ? incPDA.t46 : null,
      Question3: bone.t46,
      Question3a: bone.t46 === "0" || bone.t46 === "0.5" ? boneA.t46 : null
  },
  {
      image: 'Teeth/47i.png',
      name: '47',
      toothStatus: Lock.t47,
      Question1: inflam.t47, 
      Question2: incPD.t47,
      Question2a: incPD.t47 === "0" || incPD.t47 === "0.5" ? incPDA.t47 : null,
      Question3: bone.t47,
      Question3a: bone.t47 === "0" || bone.t47 === "0.5" ? boneA.t47 : null
  },
  {
      image: 'Teeth/48i.png',
      name: '48',
      toothStatus: Lock.t48,
      Question1: inflam.t48, 
      Question2: incPD.t48,
      Question2a: incPD.t48 === "0" || incPD.t48 === "0.5" ? incPDA.t48 : null,
      Question3: bone.t48,
      Question3a: bone.t48 === "0" || bone.t48 === "0.5" ? boneA.t48 : null
  },
]

const SliderDataFilterB = SliderDataB.filter(implant => implant.toothStatus === 1);

console.log(SliderDataFilterB);

function ImplantSidemenuB({slides}) {
  const length = slides.length;


  useLayoutEffect(() => {
    if(currentB === length && length > 0) {
      setCurrentB(currentB - 1)
    }
  });
  const nextSlide = () => {
    setCurrentB(currentB === length - 1 ? 0 : currentB + 1)
  };

  const prevSlide = () => {
    setCurrentB(currentB === 0 ? length - 1 : currentB -1)
  };

  useLayoutEffect(() => {
    if (!Array.isArray(slides) || slides.length <= 0) {
      setImplantScreeningB(false);
   }
  });

  return(
      <>
      <IconContext.Provider value={{color: '#fff'}}>
          <div className={implantScreeningB ? 'side-menu-b' : 'disable_implant'}>
          <div className='implant-items'>
              <AiOutlineClose className="menu-icon-implants" onClick={() => setImplantScreeningB(!implantScreeningB)}/>
              <HeaderImplant>Implant Screening</HeaderImplant>
              <section className="slider">
              <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
              <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
              {SliderDataFilterB.map((slide, index) => {
                return (
                  <div className="slide" key={index}>
                    {index === currentB && (
                      <>
                      <SubHeaderImplant>{slide.name}</SubHeaderImplant>
                      <img src={process.env.PUBLIC_URL + slide.image} className='implant_img'/>
                      <StyledFormControl component="fieldset">
                      <StyledFormLabel className="implant_questions" component="legend">1. Are there any clinical signs of inflammation/bleeding and/or suppuration on gentle probing? </StyledFormLabel>
                        <StyledRadioGroup row value={slide.Question1} onChange={(e) => setInflam({...inflam, [`t${slide.name}`]: e.target.value})}>
                          <StyledFormControlLabel value="1" control={<StyledRadio />} label="Yes" />
                          <StyledFormControlLabel value="0" control={<StyledRadio />} label="No" />
                        </StyledRadioGroup>
                      <StyledFormLabel className="implant_questions" component="legend">2.	Have you identified an increase in probing depth compared to previous examinations? </StyledFormLabel>
                        <StyledRadioGroup row value={slide.Question2} onChange={(e) => setIncPD({...incPD, [`t${slide.name}`]: e.target.value})}>
                          <StyledFormControlLabel value="1" control={<StyledRadio />} label="Yes" />
                          <StyledFormControlLabel value="0" control={<StyledRadio />} label="No" />
                          <StyledFormControlLabel value="0.5" control={<StyledRadio />} label="No previous records" />
                        </StyledRadioGroup>
                        <div className={slide.Question2 === "0.5" || slide.Question2 === "0" ? "implant_questions_cond" : "disable_question"}>
                        <StyledFormLabel component="legend">2a. Is there a pocket of ≥6 mm present? </StyledFormLabel>
                        <StyledRadioGroup row value={slide.Question2a} onChange={(e) => setIncPDA({...incPDA, [`t${slide.name}`]: e.target.value})}>
                          <StyledFormControlLabel value="1" control={<StyledRadio />} label="Yes" />
                          <StyledFormControlLabel value="0" control={<StyledRadio />} label="No" />
                        </StyledRadioGroup>
                        </div>
                      <StyledFormLabel className="implant_questions" component="legend">3.	Have you identified any bone loss >2mm compared to the radiograph taken at the time of implant loading? </StyledFormLabel>
                        <StyledRadioGroup row value={slide.Question3} onChange={(e) => setBone({...bone, [`t${slide.name}`]: e.target.value})}>
                          <StyledFormControlLabel value="1" control={<StyledRadio />} label="Yes" />
                          <StyledFormControlLabel value="0" control={<StyledRadio />} label="No" />
                          <StyledFormControlLabel value="0.5" control={<StyledRadio />} label="No previous records" />
                        </StyledRadioGroup>
                        <div className={slide.Question3 === "0.5" ? "implant_questions_cond" : "disable_question"}> 
                        <StyledFormLabel component="legend">3a.	Are the bone levels ≥3 mm apical of the most coronal portion of the intraosseous part of the implant? </StyledFormLabel>
                        <StyledRadioGroup row value={slide.Question3a} onChange={(e) => setBoneA({...boneA, [`t${slide.name}`]: e.target.value})}>
                          <StyledFormControlLabel value="1" control={<StyledRadio />} label="Yes" />
                          <StyledFormControlLabel value="0" control={<StyledRadio />} label="No" />
                        </StyledRadioGroup>
                        </div>
                      </StyledFormControl>
                      </>
                    )}
                  </div>
                )
              })}
              </section>
          </div> 
          </div>
      </IconContext.Provider>
      </>
  );       
};
//Session Storage Implants
const implant21 = {
  "Q1": inflam.t21, 
  "Q2": incPD.t21,
  "Q2a": incPDA.t21,
  "Q3": bone.t21,
  "Q3a": boneA.t21,
  "ToothStatus": lock21
};
const implant22 = { 
  "Q1": inflam.t22, 
  "Q2": incPD.t22,
  "Q2a": incPDA.t22,
  "Q3": bone.t22,
  "Q3a": boneA.t22,
  "ToothStatus": lock22
};
const implant23 = { 
  "Q1": inflam.t23, 
  "Q2": incPD.t23,
  "Q2a": incPDA.t23,
  "Q3": bone.t23,
  "Q3a": boneA.t23,
  "ToothStatus": lock23
};
const implant24 = { 
  "Q1": inflam.t24, 
  "Q2": incPD.t24,
  "Q2a": incPDA.t24,
  "Q3": bone.t24,
  "Q3a": boneA.t24,
  "ToothStatus": lock24
};
const implant25 = { 
  "Q1": inflam.t25, 
  "Q2": incPD.t25,
  "Q2a": incPDA.t25,
  "Q3": bone.t25,
  "Q3a": boneA.t25,
  "ToothStatus": lock25
};
const implant26 = { 
  "Q1": inflam.t26, 
  "Q2": incPD.t26,
  "Q2a": incPDA.t26,
  "Q3": bone.t26,
  "Q3a": boneA.t26,
  "ToothStatus": lock26
};
const implant27 = { 
  "Q1": inflam.t27, 
  "Q2": incPD.t27,
  "Q2a": incPDA.t27,
  "Q3": bone.t27,
  "Q3a": boneA.t27,
  "ToothStatus": lock27
};
const implant28 = { 
  "Q1": inflam.t28, 
  "Q2": incPD.t28,
  "Q2a": incPDA.t28,
  "Q3": bone.t28,
  "Q3a": boneA.t28,
  "ToothStatus": lock28
};
const implant31 = { 
  "Q1": inflam.t31, 
  "Q2": incPD.t31,
  "Q2a": incPDA.t31,
  "Q3": bone.t31,
  "Q3a": boneA.t31,
  "ToothStatus": Lock.t31
};
const implant32 = { 
  "Q1": inflam.t32, 
  "Q2": incPD.t32,
  "Q2a": incPDA.t32,
  "Q3": bone.t32,
  "Q3a": boneA.t32,
  "ToothStatus": Lock.t32
};
const implant33 = { 
  "Q1": inflam.t33, 
  "Q2": incPD.t33,
  "Q2a": incPDA.t33,
  "Q3": bone.t33,
  "Q3a": boneA.t33,
  "ToothStatus": Lock.t33
};
const implant34 = { 
  "Q1": inflam.t34, 
  "Q2": incPD.t34,
  "Q2a": incPDA.t34,
  "Q3": bone.t34,
  "Q3a": boneA.t34,
  "ToothStatus": Lock.t34
};
const implant35 = { 
  "Q1": inflam.t35, 
  "Q2": incPD.t35,
  "Q2a": incPDA.t35,
  "Q3": bone.t35,
  "Q3a": boneA.t35,
  "ToothStatus": Lock.t35
};
const implant36 = { 
  "Q1": inflam.t36, 
  "Q2": incPD.t36,
  "Q2a": incPDA.t36,
  "Q3": bone.t36,
  "Q3a": boneA.t36,
  "ToothStatus": Lock.t36
};
const implant37 = { 
  "Q1": inflam.t37, 
  "Q2": incPD.t37,
  "Q2a": incPDA.t37,
  "Q3": bone.t37,
  "Q3a": boneA.t37,
  "ToothStatus": Lock.t37
};
const implant38 = { 
  "Q1": inflam.t38, 
  "Q2": incPD.t38,
  "Q2a": incPDA.t38,
  "Q3": bone.t38,
  "Q3a": boneA.t38,
  "ToothStatus": Lock.t38
};
const implant41 = { 
  "Q1": inflam.t41, 
  "Q2": incPD.t41,
  "Q2a": incPDA.t41,
  "Q3": bone.t41,
  "Q3a": boneA.t41,
  "ToothStatus": Lock.t41
};
const implant42 = { 
  "Q1": inflam.t42, 
  "Q2": incPD.t42,
  "Q2a": incPDA.t42,
  "Q3": bone.t42,
  "Q3a": boneA.t42,
  "ToothStatus": Lock.t42
};
const implant43 = { 
  "Q1": inflam.t43, 
  "Q2": incPD.t43,
  "Q2a": incPDA.t43,
  "Q3": bone.t43,
  "Q3a": boneA.t43,
  "ToothStatus": Lock.t43
};
const implant44 = { 
  "Q1": inflam.t44, 
  "Q2": incPD.t44,
  "Q2a": incPDA.t44,
  "Q3": bone.t44,
  "Q3a": boneA.t44,
  "ToothStatus": Lock.t44
};
const implant45 = { 
  "Q1": inflam.t45, 
  "Q2": incPD.t45,
  "Q2a": incPDA.t45,
  "Q3": bone.t45,
  "Q3a": boneA.t45,
  "ToothStatus": Lock.t45
};
const implant46 = { 
  "Q1": inflam.t46, 
  "Q2": incPD.t46,
  "Q2a": incPDA.t46,
  "Q3": bone.t46,
  "Q3a": boneA.t46,
  "ToothStatus": Lock.t46
};
const implant47 = { 
  "Q1": inflam.t47, 
  "Q2": incPD.t47,
  "Q2a": incPDA.t47,
  "Q3": bone.t47,
  "Q3a": boneA.t47,
  "ToothStatus": Lock.t47
};
const implant48 = { 
  "Q1": inflam.t48, 
  "Q2": incPD.t48,
  "Q2a": incPDA.t48,
  "Q3": bone.t48,
  "Q3a": boneA.t48,
  "ToothStatus": Lock.t48
};
const implant11 = { 
  "Q1": inflam.t11, 
  "Q2": incPD.t11,
  "Q2a": incPDA.t11,
  "Q3": bone.t11,
  "Q3a": boneA.t11,
  "ToothStatus": lock11
};
const implant12 = { 
  "Q1": inflam.t12, 
  "Q2": incPD.t12,
  "Q2a": incPDA.t12,
  "Q3": bone.t12,
  "Q3a": boneA.t12,
  "ToothStatus": lock12
};
const implant13 = { 
  "Q1": inflam.t13, 
  "Q2": incPD.t13,
  "Q2a": incPDA.t13,
  "Q3": bone.t13,
  "Q3a": boneA.t13,
  "ToothStatus": lock13
};
const implant14 = { 
  "Q1": inflam.t14, 
  "Q2": incPD.t14,
  "Q2a": incPDA.t14,
  "Q3": bone.t14,
  "Q3a": boneA.t14,
  "ToothStatus": lock14
};
const implant15 = { 
  "Q1": inflam.t15, 
  "Q2": incPD.t15,
  "Q2a": incPDA.t15,
  "Q3": bone.t15,
  "Q3a": boneA.t15,
  "ToothStatus": lock15
};
const implant16 = { 
  "Q1": inflam.t16, 
  "Q2": incPD.t16,
  "Q2a": incPDA.t16,
  "Q3": bone.t16,
  "Q3a": boneA.t16,
  "ToothStatus": lock16
};
const implant17 = { 
  "Q1": inflam.t17, 
  "Q2": incPD.t17,
  "Q2a": incPDA.t17,
  "Q3": bone.t17,
  "Q3a": boneA.t17,
  "ToothStatus": lock17
};
const implant18 = { 
  "Q1": inflam.t18, 
  "Q2": incPD.t18,
  "Q2a": incPDA.t18,
  "Q3": bone.t18,
  "Q3a": boneA.t18,
  "ToothStatus": lock18
};


useEffect(() => {
  const i28 = JSON.parse(sessionStorage.getItem("i28"));
  const i27 = JSON.parse(sessionStorage.getItem("i27"));
  const i26 = JSON.parse(sessionStorage.getItem("i26"));
  const i25 = JSON.parse(sessionStorage.getItem("i25"));
  const i24 = JSON.parse(sessionStorage.getItem("i24"));
  const i23 = JSON.parse(sessionStorage.getItem("i23"));
  const i22 = JSON.parse(sessionStorage.getItem("i22"));
  const i21 = JSON.parse(sessionStorage.getItem("i21"));
  const i31 = JSON.parse(sessionStorage.getItem("i31"));
  const i32 = JSON.parse(sessionStorage.getItem("i32"));
  const i33 = JSON.parse(sessionStorage.getItem("i33"));
  const i34 = JSON.parse(sessionStorage.getItem("i34"));
  const i35 = JSON.parse(sessionStorage.getItem("i35"));
  const i36 = JSON.parse(sessionStorage.getItem("i36"));
  const i37 = JSON.parse(sessionStorage.getItem("i37"));
  const i38 = JSON.parse(sessionStorage.getItem("i38"));
  const i18 = JSON.parse(sessionStorage.getItem("i18"));
  const i17 = JSON.parse(sessionStorage.getItem("i17"));
  const i16 = JSON.parse(sessionStorage.getItem("i16"));
  const i15 = JSON.parse(sessionStorage.getItem("i15"));
  const i14 = JSON.parse(sessionStorage.getItem("i14"));
  const i13 = JSON.parse(sessionStorage.getItem("i13"));
  const i12 = JSON.parse(sessionStorage.getItem("i12"));
  const i11 = JSON.parse(sessionStorage.getItem("i11"));
  const i41 = JSON.parse(sessionStorage.getItem("i41"));
  const i42 = JSON.parse(sessionStorage.getItem("i42"));
  const i43 = JSON.parse(sessionStorage.getItem("i43"));
  const i44 = JSON.parse(sessionStorage.getItem("i44"));
  const i45 = JSON.parse(sessionStorage.getItem("i45")); 
  const i46 = JSON.parse(sessionStorage.getItem("i46"));
  const i47 = JSON.parse(sessionStorage.getItem("i47"));
  const i48 = JSON.parse(sessionStorage.getItem("i48"));
  if (i28 && i27 && i26 && i25 && i24 && i23 && i22 && i21 && i31 && i32 && i33 && i34 && i35 && i36 && i37 && i38 && 
    i18 && i17 && i16 && i15 && i14 && i13 && i12 && i11 && i41 && i42 && i43 && i44 && i45 && i46 && i47 && i48) {
    setInflam({...inflam, t21: i21["Q1"], t22: i22["Q1"], t23: i23["Q1"], t24: i24["Q1"], t25: i25["Q1"], t26: i26["Q1"], t27: i27["Q1"], t28: i28["Q1"],
    t31: i31["Q1"], t32: i32["Q1"], t33: i33["Q1"], t34: i34["Q1"], t35: i35["Q1"], t36: i36["Q1"], t37: i37["Q1"], t38: i38["Q1"],
    t11: i11["Q1"], t12: i12["Q1"], t13: i13["Q1"], t14: i14["Q1"], t15: i15["Q1"], t16: i16["Q1"], t17: i17["Q1"], t18: i18["Q1"],
    t41: i41["Q1"], t42: i42["Q1"], t43: i43["Q1"], t44: i44["Q1"], t45: i45["Q1"], t46: i46["Q1"], t47: i47["Q1"], t48: i48["Q1"]});
    setIncPD({...incPD, t21: i21["Q2"], t22: i22["Q2"], t23: i23["Q2"], t24: i24["Q2"], t25: i25["Q2"], t26: i26["Q2"], t27: i27["Q2"], t28: i28["Q2"],
    t31: i31["Q2"], t32: i32["Q2"], t33: i33["Q2"], t34: i34["Q2"], t35: i35["Q2"], t36: i36["Q2"], t37: i37["Q2"], t38: i38["Q2"],
    t11: i11["Q2"], t12: i12["Q2"], t13: i13["Q2"], t14: i14["Q2"], t15: i15["Q2"], t16: i16["Q2"], t17: i17["Q2"], t18: i18["Q2"],
    t41: i41["Q2"], t42: i42["Q2"], t43: i43["Q2"], t44: i44["Q2"], t45: i45["Q2"], t46: i46["Q2"], t47: i47["Q2"], t48: i48["Q2"]});
    setIncPDA({...incPDA, t21: i21["Q2a"], t22: i22["Q2a"], t23: i23["Q2a"], t24: i24["Q2a"], t25: i25["Q2a"], t26: i26["Q2a"], t27: i27["Q2a"], t28: i28["Q2a"],
    t31: i31["Q2a"], t32: i32["Q2a"], t33: i33["Q2a"], t34: i34["Q2a"], t35: i35["Q2a"], t36: i36["Q2a"], t37: i37["Q2a"], t38: i38["Q2a"],
    t11: i11["Q2a"], t12: i12["Q2a"], t13: i13["Q2a"], t14: i14["Q2a"], t15: i15["Q2a"], t16: i16["Q2a"], t17: i17["Q2a"], t18: i18["Q2a"],
    t41: i41["Q2a"], t42: i42["Q2a"], t43: i43["Q2a"], t44: i44["Q2a"], t45: i45["Q2a"], t46: i46["Q2a"], t47: i47["Q2a"], t48: i48["Q2a"]});
    setBone({...bone, t21: i21["Q3"], t22: i22["Q3"], t23: i23["Q3"], t24: i24["Q3"], t25: i25["Q3"], t26: i26["Q3"], t27: i27["Q3"], t28: i28["Q3"],
    t31: i31["Q3"], t32: i32["Q3"], t33: i33["Q3"], t34: i34["Q3"], t35: i35["Q3"], t36: i36["Q3"], t37: i37["Q3"], t38: i38["Q3"],
    t11: i11["Q3"], t12: i12["Q3"], t13: i13["Q3"], t14: i14["Q3"], t15: i15["Q3"], t16: i16["Q3"], t17: i17["Q3"], t18: i18["Q3"],
    t41: i41["Q3"], t42: i42["Q3"], t43: i43["Q3"], t44: i44["Q3"], t45: i45["Q3"], t46: i46["Q3"], t47: i47["Q3"], t48: i48["Q3"]});
    setBoneA({...boneA, t21: i21["Q3a"], t22: i22["Q3a"], t23: i23["Q3a"], t24: i24["Q3a"], t25: i25["Q3a"], t26: i26["Q3a"], t27: i27["Q3a"], t28: i28["Q3a"],
    t31: i31["Q3a"], t32: i32["Q3a"], t33: i33["Q3a"], t34: i34["Q3a"], t35: i35["Q3a"], t36: i36["Q3a"], t37: i37["Q3a"], t38: i38["Q3a"],
    t11: i11["Q3a"], t12: i12["Q3a"], t13: i13["Q3a"], t14: i14["Q3a"], t15: i15["Q3a"], t16: i16["Q3a"], t17: i17["Q3a"], t18: i18["Q3a"],
    t41: i41["Q3a"], t42: i42["Q3a"], t43: i43["Q3a"], t44: i44["Q3a"], t45: i45["Q3a"], t46: i46["Q3a"], t47: i47["Q3a"], t48: i48["Q3a"]});
  }
}, []);


useEffect(() => {
  
    sessionStorage.setItem("i28", JSON.stringify(implant28));
    sessionStorage.setItem("i27", JSON.stringify(implant27));
    sessionStorage.setItem("i26", JSON.stringify(implant26));
    sessionStorage.setItem("i25", JSON.stringify(implant25));
    sessionStorage.setItem("i24", JSON.stringify(implant24));
    sessionStorage.setItem("i23", JSON.stringify(implant23));
    sessionStorage.setItem("i22", JSON.stringify(implant22));
    sessionStorage.setItem("i21", JSON.stringify(implant21));
    sessionStorage.setItem("i31", JSON.stringify(implant31));
    sessionStorage.setItem("i32", JSON.stringify(implant32));
    sessionStorage.setItem("i33", JSON.stringify(implant33));
    sessionStorage.setItem("i34", JSON.stringify(implant34));
    sessionStorage.setItem("i35", JSON.stringify(implant35));
    sessionStorage.setItem("i36", JSON.stringify(implant36));
    sessionStorage.setItem("i37", JSON.stringify(implant37));
    sessionStorage.setItem("i38", JSON.stringify(implant38));
    sessionStorage.setItem("i18", JSON.stringify(implant18));
    sessionStorage.setItem("i17", JSON.stringify(implant17));
    sessionStorage.setItem("i16", JSON.stringify(implant16));
    sessionStorage.setItem("i15", JSON.stringify(implant15));
    sessionStorage.setItem("i14", JSON.stringify(implant14));
    sessionStorage.setItem("i13", JSON.stringify(implant13));
    sessionStorage.setItem("i12", JSON.stringify(implant12));
    sessionStorage.setItem("i11", JSON.stringify(implant11));
    sessionStorage.setItem("i41", JSON.stringify(implant41));
    sessionStorage.setItem("i42", JSON.stringify(implant42));
    sessionStorage.setItem("i43", JSON.stringify(implant43));
    sessionStorage.setItem("i44", JSON.stringify(implant44));
    sessionStorage.setItem("i45", JSON.stringify(implant45));
    sessionStorage.setItem("i46", JSON.stringify(implant46));
    sessionStorage.setItem("i47", JSON.stringify(implant47));
    sessionStorage.setItem("i48", JSON.stringify(implant48));
});



  return (
    <div>
    <ImplantSidemenu slides={SliderDataFilter}/>
    <ImplantSidemenuB slides={SliderDataFilterB}/>
    <div className="group_vertical">
    <div className={Lock.t31 === 1 || Lock.t32 === 1 || Lock.t33 === 1 || Lock.t34 === 1 || Lock.t35 === 1 
      || Lock.t36 === 1 || Lock.t37 === 1 || Lock.t38 === 1 || lock28 === 1 || lock27 === 1 || lock26 === 1 
      || lock25 === 1 || lock24 === 1 || lock23 === 1 || lock22 === 1 || lock21 === 1 ?
       "implant_svg_pink": "disable_implant_screening_pink"} onClick={() => setImplantScreening(!implantScreening)}>
      <img src={process.env.PUBLIC_URL + 'Teeth/implant_pink.svg'}></img>
      </div>
      <div className={Lock.t41 === 1 || Lock.t42 === 1 || Lock.t43 === 1 || Lock.t44 === 1 || Lock.t45 === 1 
      || Lock.t46 === 1 || Lock.t47 === 1 || Lock.t48 === 1 || lock18 === 1 || lock17 === 1 || lock16 === 1 
      || lock15 === 1 || lock14 === 1 || lock13 === 1 || lock12 === 1 || lock11 === 1 ?
       "implant_svg_blue": "disable_implant_screening_blue"} onClick={() => setImplantScreeningB(!implantScreeningB)}>
      <img src={process.env.PUBLIC_URL + 'Teeth/implant_blue.svg'}></img>
      </div>
    <div className="group">
      <div className="labels">
      <div className="medical-data-buccal">
          <a>Note</a>
          <a>Mobility</a>
          <a>Implant / Missing</a>
          <a>Furcation</a>
          <a>Bleeding on Probing</a>
          <a>Gingival Margin</a>
          <a>Probing Depth</a>
        </div>
        <div className="buccal-lingual">
          <a>Lingual</a>
        </div>
        <div className="medical-data-buccal">
          <a id="plaque">Plaque</a>
        </div>
        <div className="buccal-lingual">
          <a>Buccal</a>
        </div>
        <div className="medical-data-lingual">
          <a>Gingival Margin</a>
          <a>Probing Depth</a>
          <a>Bleeding on Probing</a>
          <a>Furcation</a>
        </div>
      </div>
      <div className="grid-form">
    <StyledContainer1 >
      <Table className={classes.table} size="small" aria-label="customized table" >
      <TableHead>
          <TableRow>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t48 !== 2 ? dataLocker48 : () => setLock({ ...Lock, t48: 0})}>48</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t47 !== 2 ? dataLocker47 : () => setLock({ ...Lock, t47: 0})}>47</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t46 !== 2 ? dataLocker46 : () => setLock({ ...Lock, t46: 0})}>46</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t45 !== 2 ? dataLocker45 : () => setLock({ ...Lock, t45: 0})}>45</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t44 !== 2 ? dataLocker44 : () => setLock({ ...Lock, t44: 0})}>44</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t43 !== 2 ? dataLocker43 : () => setLock({ ...Lock, t43: 0})}>43</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t42 !== 2 ? dataLocker42 : () => setLock({ ...Lock, t42: 0})}>42</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t41 !== 2 ? dataLocker41 : () => setLock({ ...Lock, t41: 0})}>41</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
                <StyledTableCell align="center"><input tabIndex="501" type="text" value={Note.t48} onChange={(e) => setNote({...Note, t48: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="502" type="text" value={Note.t47} onChange={(e) => setNote({...Note, t47: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="503" type="text" value={Note.t46} onChange={(e) => setNote({...Note, t46: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="504" type="text" value={Note.t45} onChange={(e) => setNote({...Note, t45: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="505" type="text" value={Note.t44} onChange={(e) => setNote({...Note, t44: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="506" type="text" value={Note.t43} onChange={(e) => setNote({...Note, t43: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="507" type="text" value={Note.t42} onChange={(e) => setNote({...Note, t42: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="508" type="text" value={Note.t41} onChange={(e) => setNote({...Note, t41: e.target.value})} className="input_note_last"/></StyledTableCell>
               
            </TableRow>
        <TableRow>
                <StyledTableCell align="center"><input tabIndex="517" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t48 > 3 || Mob.t48 < 0 ? mobLimit48() : Mob.t48} onChange={(e) => setMob({...Mob, t48: e.target.value})} className={Lock.t48 !== 2 ? "input_mobility": "input_mobility_disabled"}/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="518" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t47 > 3 || Mob.t47 < 0 ? mobLimit47() : Mob.t47} onChange={(e) => setMob({...Mob, t47: e.target.value})} className={Lock.t47 !== 2 ? "input_mobility": "input_mobility_disabled"}/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="519" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t46 > 3 || Mob.t46 < 0 ? mobLimit46() : Mob.t46} onChange={(e) => setMob({...Mob, t46: e.target.value})} className={Lock.t46 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="520" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t45 > 3 || Mob.t45 < 0 ? mobLimit45() : Mob.t45} onChange={(e) => setMob({...Mob, t45: e.target.value})} className={Lock.t45 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="521" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t44 > 3 || Mob.t44 < 0 ? mobLimit44() : Mob.t44} onChange={(e) => setMob({...Mob, t44: e.target.value})} className={Lock.t44 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="522" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t43 > 3 || Mob.t43 < 0 ? mobLimit43() : Mob.t43} onChange={(e) => setMob({...Mob, t43: e.target.value})} className={Lock.t43 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="523" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t42 > 3 || Mob.t42 < 0 ? mobLimit42() : Mob.t42} onChange={(e) => setMob({...Mob, t42: e.target.value})} className={Lock.t42 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="524" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t41 > 3 || Mob.t41 < 0 ? mobLimit41() : Mob.t41} onChange={(e) => setMob({...Mob, t41: e.target.value})} className={Lock.t41 !== 2 ? "input_mobility_last": "input_mobility_disabled"} /></StyledTableCell>
               
            </TableRow>
        <TableRow>
                <StyledTableCell align="center"><StyledButton tabIndex="533" onClick={ Lock.t48 === 0 ? implantLocker48 : Lock.t48 === 1 ? dataLocker48 : () => setLock({ ...Lock, t48: 0})} size="large" ><img src={Lock.t48 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t48 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t48 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="534" onClick={ Lock.t47 === 0 ? implantLocker47 : Lock.t47 === 1 ? dataLocker47 : () => setLock({ ...Lock, t47: 0})} size="large" ><img src={Lock.t47 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t47 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t47 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="535" onClick={ Lock.t46 === 0 ? implantLocker46 : Lock.t46 === 1 ? dataLocker46 : () => setLock({ ...Lock, t46: 0})} size="large" ><img src={Lock.t46 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t46 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t46 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="536" onClick={ Lock.t45 === 0 ? () => setLock({ ...Lock, t45: 1}): Lock.t45 === 1 ? dataLocker45 : () => setLock({ ...Lock, t45: 0})} size="large" ><img src={Lock.t45 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t45 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t45 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="537" onClick={ Lock.t44 === 0 ? () => setLock({ ...Lock, t44: 1}): Lock.t44 === 1 ? dataLocker44 : () => setLock({ ...Lock, t44: 0})} size="large" ><img src={Lock.t44 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t44 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t44 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="538" onClick={ Lock.t43 === 0 ? () => setLock({ ...Lock, t43: 1}): Lock.t43 === 1 ? dataLocker43 : () => setLock({ ...Lock, t43: 0})} size="large" ><img src={Lock.t43 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t43 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t43 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="539" onClick={ Lock.t42 === 0 ? () => setLock({ ...Lock, t42: 1}): Lock.t42 === 1 ? dataLocker42 : () => setLock({ ...Lock, t42: 0})} size="large" ><img src={Lock.t42 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t42 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t42 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButtonLast tabIndex="540" onClick={ Lock.t41 === 0 ? () => setLock({ ...Lock, t41: 1}): Lock.t41 === 1 ? dataLocker41 : () => setLock({ ...Lock, t41: 0})} size="large" ><img src={Lock.t41 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t41 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t41 !== 0 ? classes.implant: classes.disabled}/></StyledButtonLast></StyledTableCell>
               
            </TableRow>
            <TableRow>
                <StyledTableCell align="center"><StyledButton tabIndex="549" onClick={furc_flow48()} size="large" className={Lock.t48 !== 0 ? classes.disable_furcation: null}>
                    <a className={Furc.FurcCount48 === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount48 === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount48 === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a></StyledButton>
                </StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="550" onClick={furc_flow47()} size="large" className={Lock.t47 !== 0 ? classes.disable_furcation: null}>
                   <a className={Furc.FurcCount47 === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount47 === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount47 === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a></StyledButton>
                </StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="551" onClick={furc_flow46()} size="large" className={Lock.t46 !== 0 ? classes.disable_furcation: null}>
                <a className={Furc.FurcCount46 === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount46 === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount46 === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a></StyledButton>
                </StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell> 
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell> 
               
            </TableRow>
            <TableRow>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="555" onClick={ BoP.BoP48_1 === true ? () => setBoP({ ...BoP, BoP48_1: !BoP.BoP48_1, BoP_total_48: BoP.BoP_total_48 - 1}) : () => setBoP({ ...BoP, BoP48_1: !BoP.BoP48_1, BoP_total_48: BoP.BoP_total_48 + 1})} className={Lock.t48 !== 2 ? (BoP.BoP48_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="556" onClick={ BoP.BoP48_2 === true ? () => setBoP({ ...BoP, BoP48_2: !BoP.BoP48_2, BoP_total_48: BoP.BoP_total_48 - 1}) : () => setBoP({ ...BoP, BoP48_2: !BoP.BoP48_2, BoP_total_48: BoP.BoP_total_48 + 1})} className={Lock.t48 !== 2 ? (BoP.BoP48_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="557" onClick={ BoP.BoP48_3 === true ? () => setBoP({ ...BoP, BoP48_3: !BoP.BoP48_3, BoP_total_48: BoP.BoP_total_48 - 1}) : () => setBoP({ ...BoP, BoP48_3: !BoP.BoP48_3, BoP_total_48: BoP.BoP_total_48 + 1})} className={Lock.t48 !== 2 ? (BoP.BoP48_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="558" onClick={ BoP.BoP47_1 === true ? () => setBoP({ ...BoP, BoP47_1: !BoP.BoP47_1, BoP_total_47: BoP.BoP_total_47 - 1}) : () => setBoP({ ...BoP, BoP47_1: !BoP.BoP47_1, BoP_total_47: BoP.BoP_total_47 + 1})} className={Lock.t47 !== 2 ? (BoP.BoP47_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="559" onClick={ BoP.BoP47_2 === true ? () => setBoP({ ...BoP, BoP47_2: !BoP.BoP47_2, BoP_total_47: BoP.BoP_total_47 - 1}) : () => setBoP({ ...BoP, BoP47_2: !BoP.BoP47_2, BoP_total_47: BoP.BoP_total_47 + 1})} className={Lock.t47 !== 2 ? (BoP.BoP47_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="560" onClick={ BoP.BoP47_3 === true ? () => setBoP({ ...BoP, BoP47_3: !BoP.BoP47_3, BoP_total_47: BoP.BoP_total_47 - 1}) : () => setBoP({ ...BoP, BoP47_3: !BoP.BoP47_3, BoP_total_47: BoP.BoP_total_47 + 1})} className={Lock.t47 !== 2 ? (BoP.BoP47_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="561" onClick={ BoP.BoP46_1 === true ? () => setBoP({ ...BoP, BoP46_1: !BoP.BoP46_1, BoP_total_46: BoP.BoP_total_46 - 1}) : () => setBoP({ ...BoP, BoP46_1: !BoP.BoP46_1, BoP_total_46: BoP.BoP_total_46 + 1})} className={Lock.t46 !== 2 ? (BoP.BoP46_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="562" onClick={ BoP.BoP46_2 === true ? () => setBoP({ ...BoP, BoP46_2: !BoP.BoP46_2, BoP_total_46: BoP.BoP_total_46 - 1}) : () => setBoP({ ...BoP, BoP46_2: !BoP.BoP46_2, BoP_total_46: BoP.BoP_total_46 + 1})} className={Lock.t46 !== 2 ? (BoP.BoP46_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="563" onClick={ BoP.BoP46_3 === true ? () => setBoP({ ...BoP, BoP46_3: !BoP.BoP46_3, BoP_total_46: BoP.BoP_total_46 - 1}) : () => setBoP({ ...BoP, BoP46_3: !BoP.BoP46_3, BoP_total_46: BoP.BoP_total_46 + 1})} className={Lock.t46 !== 2 ? (BoP.BoP46_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="564" onClick={ BoP.BoP45_1 === true ? () => setBoP({ ...BoP, BoP45_1: !BoP.BoP45_1, BoP_total_45: BoP.BoP_total_45 - 1}) : () => setBoP({ ...BoP, BoP45_1: !BoP.BoP45_1, BoP_total_45: BoP.BoP_total_45 + 1})} className={Lock.t45 !== 2 ? (BoP.BoP45_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="565" onClick={ BoP.BoP45_2 === true ? () => setBoP({ ...BoP, BoP45_2: !BoP.BoP45_2, BoP_total_45: BoP.BoP_total_45 - 1}) : () => setBoP({ ...BoP, BoP45_2: !BoP.BoP45_2, BoP_total_45: BoP.BoP_total_45 + 1})} className={Lock.t45 !== 2 ? (BoP.BoP45_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="566" onClick={ BoP.BoP45_3 === true ? () => setBoP({ ...BoP, BoP45_3: !BoP.BoP45_3, BoP_total_45: BoP.BoP_total_45 - 1}) : () => setBoP({ ...BoP, BoP45_3: !BoP.BoP45_3, BoP_total_45: BoP.BoP_total_45 + 1})} className={Lock.t45 !== 2 ? (BoP.BoP45_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="567" onClick={ BoP.BoP44_1 === true ? () => setBoP({ ...BoP, BoP44_1: !BoP.BoP44_1, BoP_total_44: BoP.BoP_total_44 - 1}) : () => setBoP({ ...BoP, BoP44_1: !BoP.BoP44_1, BoP_total_44: BoP.BoP_total_44 + 1})} className={Lock.t44 !== 2 ? (BoP.BoP44_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="568" onClick={ BoP.BoP44_2 === true ? () => setBoP({ ...BoP, BoP44_2: !BoP.BoP44_2, BoP_total_44: BoP.BoP_total_44 - 1}) : () => setBoP({ ...BoP, BoP44_2: !BoP.BoP44_2, BoP_total_44: BoP.BoP_total_44 + 1})} className={Lock.t44 !== 2 ? (BoP.BoP44_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="569" onClick={ BoP.BoP44_3 === true ? () => setBoP({ ...BoP, BoP44_3: !BoP.BoP44_3, BoP_total_44: BoP.BoP_total_44 - 1}) : () => setBoP({ ...BoP, BoP44_3: !BoP.BoP44_3, BoP_total_44: BoP.BoP_total_44 + 1})} className={Lock.t44 !== 2 ? (BoP.BoP44_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="570" onClick={ BoP.BoP43_1 === true ? () => setBoP({ ...BoP, BoP43_1: !BoP.BoP43_1, BoP_total_43: BoP.BoP_total_43 - 1}) : () => setBoP({ ...BoP, BoP43_1: !BoP.BoP43_1, BoP_total_43: BoP.BoP_total_43 + 1})} className={Lock.t43 !== 2 ? (BoP.BoP43_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="571" onClick={ BoP.BoP43_2 === true ? () => setBoP({ ...BoP, BoP43_2: !BoP.BoP43_2, BoP_total_43: BoP.BoP_total_43 - 1}) : () => setBoP({ ...BoP, BoP43_2: !BoP.BoP43_2, BoP_total_43: BoP.BoP_total_43 + 1})} className={Lock.t43 !== 2 ? (BoP.BoP43_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="572" onClick={ BoP.BoP43_3 === true ? () => setBoP({ ...BoP, BoP43_3: !BoP.BoP43_3, BoP_total_43: BoP.BoP_total_43 - 1}) : () => setBoP({ ...BoP, BoP43_3: !BoP.BoP43_3, BoP_total_43: BoP.BoP_total_43 + 1})} className={Lock.t43 !== 2 ? (BoP.BoP43_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="573" onClick={ BoP.BoP42_1 === true ? () => setBoP({ ...BoP, BoP42_1: !BoP.BoP42_1, BoP_total_42: BoP.BoP_total_42 - 1}) : () => setBoP({ ...BoP, BoP42_1: !BoP.BoP42_1, BoP_total_42: BoP.BoP_total_42 + 1})} className={Lock.t42 !== 2 ? (BoP.BoP42_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="574" onClick={ BoP.BoP42_2 === true ? () => setBoP({ ...BoP, BoP42_2: !BoP.BoP42_2, BoP_total_42: BoP.BoP_total_42 - 1}) : () => setBoP({ ...BoP, BoP42_2: !BoP.BoP42_2, BoP_total_42: BoP.BoP_total_42 + 1})} className={Lock.t42 !== 2 ? (BoP.BoP42_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="575" onClick={ BoP.BoP42_3 === true ? () => setBoP({ ...BoP, BoP42_3: !BoP.BoP42_3, BoP_total_42: BoP.BoP_total_42 - 1}) : () => setBoP({ ...BoP, BoP42_3: !BoP.BoP42_3, BoP_total_42: BoP.BoP_total_42 + 1})} className={Lock.t42 !== 2 ? (BoP.BoP42_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="576" onClick={ BoP.BoP41_1 === true ? () => setBoP({ ...BoP, BoP41_1: !BoP.BoP41_1, BoP_total_41: BoP.BoP_total_41 - 1}) : () => setBoP({ ...BoP, BoP41_1: !BoP.BoP41_1, BoP_total_41: BoP.BoP_total_41 + 1})} className={Lock.t41 !== 2 ? (BoP.BoP41_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="577" onClick={ BoP.BoP41_2 === true ? () => setBoP({ ...BoP, BoP41_2: !BoP.BoP41_2, BoP_total_41: BoP.BoP_total_41 - 1}) : () => setBoP({ ...BoP, BoP41_2: !BoP.BoP41_2, BoP_total_41: BoP.BoP_total_41 + 1})} className={Lock.t41 !== 2 ? (BoP.BoP41_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="578" onClick={ BoP.BoP41_3 === true ? () => setBoP({ ...BoP, BoP41_3: !BoP.BoP41_3, BoP_total_41: BoP.BoP_total_41 - 1}) : () => setBoP({ ...BoP, BoP41_3: !BoP.BoP41_3, BoP_total_41: BoP.BoP_total_41 + 1})} className={Lock.t41 !== 2 ? (BoP.BoP41_3 ? classes.small_btn_3_bop_lst : classes.small_btn_3_lst) : classes.disable_furcation} /></div></StyledTableCell>
           
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="603" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t48_1 > 15 || GM.t48_1 < (-10) ? gmLimit48() : GM.t48_1} onChange={(e) => setGM({...GM, t48_1: e.target.value})} className={Lock.t48 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="604" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t48_2 > 15 || GM.t48_2 < (-10) ? gmLimit48() : GM.t48_2} onChange={(e) => setGM({...GM, t48_2: e.target.value})}  className={Lock.t48 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="605" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t48_3 > 15 || GM.t48_3 < (-10) ? gmLimit48() : GM.t48_3} onChange={(e) => setGM({...GM, t48_3: e.target.value})} className={Lock.t48 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="606" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t47_1 > 15 || GM.t47_1 < (-10) ? gmLimit47() : GM.t47_1} onChange={(e) => setGM({...GM, t47_1: e.target.value})} className={Lock.t47 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="607" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t47_2 > 15 || GM.t47_2 < (-10) ? gmLimit47() : GM.t47_2} onChange={(e) => setGM({...GM, t47_2: e.target.value})}  className={Lock.t47 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="608" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t47_3 > 15 || GM.t47_3 < (-10) ? gmLimit47() : GM.t47_3} onChange={(e) => setGM({...GM, t47_3: e.target.value})} className={Lock.t47 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="609" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t46_1 > 15 || GM.t46_1 < (-10) ? gmLimit46() : GM.t46_1} onChange={(e) => setGM({...GM, t46_1: e.target.value})} className={Lock.t46 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="610" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t46_2 > 15 || GM.t46_2 < (-10) ? gmLimit46() : GM.t46_2} onChange={(e) => setGM({...GM, t46_2: e.target.value})}  className={Lock.t46 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="611" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t46_3 > 15 || GM.t46_3 < (-10) ? gmLimit46() : GM.t46_3} onChange={(e) => setGM({...GM, t46_3: e.target.value})} className={Lock.t46 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="612" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t45_1 > 15 || GM.t45_1 < (-10) ? gmLimit45() : GM.t45_1} onChange={(e) => setGM({...GM, t45_1: e.target.value})} className={Lock.t45 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="613" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t45_2 > 15 || GM.t45_2 < (-10) ? gmLimit45() : GM.t45_2} onChange={(e) => setGM({...GM, t45_2: e.target.value})}  className={Lock.t45 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="614" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t45_3 > 15 || GM.t45_3 < (-10) ? gmLimit45() : GM.t45_3} onChange={(e) => setGM({...GM, t45_3: e.target.value})} className={Lock.t45 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="615" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t44_1 > 15 || GM.t44_1 < (-10) ? gmLimit44() : GM.t44_1} onChange={(e) => setGM({...GM, t44_1: e.target.value})} className={Lock.t44 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="616" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t44_2 > 15 || GM.t44_2 < (-10) ? gmLimit44() : GM.t44_2} onChange={(e) => setGM({...GM, t44_2: e.target.value})}  className={Lock.t44 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="617" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t44_3 > 15 || GM.t44_3 < (-10) ? gmLimit44() : GM.t44_3} onChange={(e) => setGM({...GM, t44_3: e.target.value})} className={Lock.t44 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="618" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t43_1 > 15 || GM.t43_1 < (-10) ? gmLimit43() : GM.t43_1} onChange={(e) => setGM({...GM, t43_1: e.target.value})} className={Lock.t43 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="619" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t43_2 > 15 || GM.t43_2 < (-10) ? gmLimit43() : GM.t43_2} onChange={(e) => setGM({...GM, t43_2: e.target.value})}  className={Lock.t43 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="620" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t43_3 > 15 || GM.t43_3 < (-10) ? gmLimit43() : GM.t43_3} onChange={(e) => setGM({...GM, t43_3: e.target.value})} className={Lock.t43 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="621" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t42_1 > 15 || GM.t42_1 < (-10) ? gmLimit42() : GM.t42_1} onChange={(e) => setGM({...GM, t42_1: e.target.value})} className={Lock.t42 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="622" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t42_2 > 15 || GM.t42_2 < (-10) ? gmLimit42() : GM.t42_2} onChange={(e) => setGM({...GM, t42_2: e.target.value})}  className={Lock.t42 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="623" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t42_3 > 15 || GM.t42_3 < (-10) ? gmLimit42() : GM.t42_3} onChange={(e) => setGM({...GM, t42_3: e.target.value})} className={Lock.t42 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="624" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t41_1 > 15 || GM.t41_1 < (-10) ? gmLimit41() : GM.t41_1} onChange={(e) => setGM({...GM, t41_1: e.target.value})} className={Lock.t41 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="625" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t41_2 > 15 || GM.t41_2 < (-10) ? gmLimit41() : GM.t41_2} onChange={(e) => setGM({...GM, t41_2: e.target.value})}  className={Lock.t41 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="626" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t41_3 > 15 || GM.t41_3 < (-10) ? gmLimit41() : GM.t41_3} onChange={(e) => setGM({...GM, t41_3: e.target.value})} className={Lock.t41 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
           
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="653" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p48_1 > 15 || Probe.p48_1 < 0 ? ProbeLimit48() : Probe.p48_1} onChange={(e) => setProbe({...Probe, p48_1: e.target.value})} className={Lock.t48 !== 2 ? (((Probe.p48_1 == 4 && BoP.BoP48_1) || Probe.p48_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="654" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p48_2 > 15 || Probe.p48_2 < 0 ? ProbeLimit48() : Probe.p48_2} onChange={(e) => setProbe({...Probe, p48_2: e.target.value})}  className={Lock.t48 !== 2 ? (((Probe.p48_2 == 4 && BoP.BoP48_2) || Probe.p48_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="655" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p48_3 > 15 || Probe.p48_3 < 0 ? ProbeLimit48() : Probe.p48_3} onChange={(e) => setProbe({...Probe, p48_3: e.target.value})} className={Lock.t48 !== 2 ? (((Probe.p48_3 == 4 && BoP.BoP48_3) || Probe.p48_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="656" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p47_1 > 15 || Probe.p47_1 < 0 ? ProbeLimit47() : Probe.p47_1} onChange={(e) => setProbe({...Probe, p47_1: e.target.value})} className={Lock.t47 !== 2 ? (((Probe.p47_1 == 4 && BoP.BoP47_1) || Probe.p47_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="657" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p47_2 > 15 || Probe.p47_2 < 0 ? ProbeLimit47() : Probe.p47_2} onChange={(e) => setProbe({...Probe, p47_2: e.target.value})}  className={Lock.t47 !== 2 ? (((Probe.p47_2 == 4 && BoP.BoP47_2) || Probe.p47_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="658" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p47_3 > 15 || Probe.p47_3 < 0 ? ProbeLimit47() : Probe.p47_3} onChange={(e) => setProbe({...Probe, p47_3: e.target.value})} className={Lock.t47 !== 2 ? (((Probe.p47_3 == 4 && BoP.BoP47_3) || Probe.p47_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="659" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p46_1 > 15 || Probe.p46_1 < 0 ? ProbeLimit46() : Probe.p46_1} onChange={(e) => setProbe({...Probe, p46_1: e.target.value})} className={Lock.t46 !== 2 ? (((Probe.p46_1 == 4 && BoP.BoP46_1) || Probe.p46_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="660" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p46_2 > 15 || Probe.p46_2 < 0 ? ProbeLimit46() : Probe.p46_2} onChange={(e) => setProbe({...Probe, p46_2: e.target.value})}  className={Lock.t46 !== 2 ? (((Probe.p46_2 == 4 && BoP.BoP46_2) || Probe.p46_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="661" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p46_3 > 15 || Probe.p46_3 < 0 ? ProbeLimit46() : Probe.p46_3} onChange={(e) => setProbe({...Probe, p46_3: e.target.value})} className={Lock.t46 !== 2 ? (((Probe.p46_3 == 4 && BoP.BoP46_3) || Probe.p46_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="662" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p45_1 > 15 || Probe.p45_1 < 0 ? ProbeLimit45() : Probe.p45_1} onChange={(e) => setProbe({...Probe, p45_1: e.target.value})} className={Lock.t45 !== 2 ? (((Probe.p45_1 == 4 && BoP.BoP45_1) || Probe.p45_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="663" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p45_2 > 15 || Probe.p45_2 < 0 ? ProbeLimit45() : Probe.p45_2} onChange={(e) => setProbe({...Probe, p45_2: e.target.value})}  className={Lock.t45 !== 2 ? (((Probe.p45_2 == 4 && BoP.BoP45_2) || Probe.p45_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="664" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p45_3 > 15 || Probe.p45_3 < 0 ? ProbeLimit45() : Probe.p45_3} onChange={(e) => setProbe({...Probe, p45_3: e.target.value})} className={Lock.t45 !== 2 ? (((Probe.p45_3 == 4 && BoP.BoP45_3) || Probe.p45_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="665" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p44_1 > 15 || Probe.p44_1 < 0 ? ProbeLimit44() : Probe.p44_1} onChange={(e) => setProbe({...Probe, p44_1: e.target.value})} className={Lock.t44 !== 2 ? (((Probe.p44_1 == 4 && BoP.BoP44_1) || Probe.p44_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="666" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p44_2 > 15 || Probe.p44_2 < 0 ? ProbeLimit44() : Probe.p44_2} onChange={(e) => setProbe({...Probe, p44_2: e.target.value})}  className={Lock.t44 !== 2 ? (((Probe.p44_2 == 4 && BoP.BoP44_2) || Probe.p44_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="667" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p44_3 > 15 || Probe.p44_3 < 0 ? ProbeLimit44() : Probe.p44_3} onChange={(e) => setProbe({...Probe, p44_3: e.target.value})} className={Lock.t44 !== 2 ? (((Probe.p44_3 == 4 && BoP.BoP44_3) || Probe.p44_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="668" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p43_1 > 15 || Probe.p43_1 < 0 ? ProbeLimit43() : Probe.p43_1} onChange={(e) => setProbe({...Probe, p43_1: e.target.value})} className={Lock.t43 !== 2 ? (((Probe.p43_1 == 4 && BoP.BoP43_1) || Probe.p43_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="669" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p43_2 > 15 || Probe.p43_2 < 0 ? ProbeLimit43() : Probe.p43_2} onChange={(e) => setProbe({...Probe, p43_2: e.target.value})}  className={Lock.t43 !== 2 ? (((Probe.p43_2 == 4 && BoP.BoP43_2) || Probe.p43_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="670" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p43_3 > 15 || Probe.p43_3 < 0 ? ProbeLimit43() : Probe.p43_3} onChange={(e) => setProbe({...Probe, p43_3: e.target.value})} className={Lock.t43 !== 2 ? (((Probe.p43_3 == 4 && BoP.BoP43_3) || Probe.p43_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="671" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p42_1 > 15 || Probe.p42_1 < 0 ? ProbeLimit42() : Probe.p42_1} onChange={(e) => setProbe({...Probe, p42_1: e.target.value})} className={Lock.t42 !== 2 ? (((Probe.p42_1 == 4 && BoP.BoP42_1) || Probe.p42_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="672" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p42_2 > 15 || Probe.p42_2 < 0 ? ProbeLimit42() : Probe.p42_2} onChange={(e) => setProbe({...Probe, p42_2: e.target.value})}  className={Lock.t42 !== 2 ? (((Probe.p42_2 == 4 && BoP.BoP42_2) || Probe.p42_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="673" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p42_3 > 15 || Probe.p42_3 < 0 ? ProbeLimit42() : Probe.p42_3} onChange={(e) => setProbe({...Probe, p42_3: e.target.value})} className={Lock.t42 !== 2 ? (((Probe.p42_3 == 4 && BoP.BoP42_3) || Probe.p42_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="674" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p41_1 > 15 || Probe.p41_1 < 0 ? ProbeLimit41() : Probe.p41_1} onChange={(e) => setProbe({...Probe, p41_1: e.target.value})} className={Lock.t41 !== 2 ? (((Probe.p41_1 == 4 && BoP.BoP41_1) || Probe.p41_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="675" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p41_2 > 15 || Probe.p41_2 < 0 ? ProbeLimit41() : Probe.p41_2} onChange={(e) => setProbe({...Probe, p41_2: e.target.value})}  className={Lock.t41 !== 2 ? (((Probe.p41_2 == 4 && BoP.BoP41_2) || Probe.p41_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="676" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p41_3 > 15 || Probe.p41_3 < 0 ? ProbeLimit41() : Probe.p41_3} onChange={(e) => setProbe({...Probe, p41_3: e.target.value})} className={Lock.t41 !== 2 ? (((Probe.p41_3 == 4 && BoP.BoP41_3) || Probe.p41_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
           
        </TableRow>
        <TableRow>
          <ImgCell className={classes.img_change} onClick={ Lock.t48 === 0 ? implantLocker48 : Lock.t48 === 1 ? dataLocker48 : () => setLock({ ...Lock, t48: 0})}> <img src={Lock.t48 === 0 ? process.env.PUBLIC_URL + 'Teeth/48.png': Lock.t48 === 1 ? process.env.PUBLIC_URL + 'Teeth/48i.png': process.env.PUBLIC_URL + 'Teeth/48x.png'} className={classes.tooth_img_18} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'}  className={Lock.t48 === 0 && Furc.FurcCount48 === 1 ? classes.furc_img_18: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t48 === 0 && Furc.FurcCount48 === 2 ? classes.furc_img_18: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t48 === 0 && Furc.FurcCount48 === 3 ? classes.furc_img_18: classes.disabled}/>
                      <svg className={Lock.t48 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_48" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t48 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_48" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t48 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_48" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t48 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_48_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t48 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_48" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t48 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_48_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t47 === 0 ? implantLocker47 : Lock.t47 === 1 ? dataLocker47 : () => setLock({ ...Lock, t47: 0})}><img src={Lock.t47 === 0 ? process.env.PUBLIC_URL + 'Teeth/47.png': Lock.t47 === 1 ? process.env.PUBLIC_URL + 'Teeth/47i.png': process.env.PUBLIC_URL + 'Teeth/47x.png'} className={classes.tooth_img_17} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t47 === 0 && Furc.FurcCount47 === 1 ? classes.furc_img_17: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t47 === 0 && Furc.FurcCount47 === 2 ? classes.furc_img_17: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t47 === 0 && Furc.FurcCount47 === 3 ? classes.furc_img_17: classes.disabled}/>
                      <svg className={Lock.t47 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_47" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t47 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_47" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t47 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_47" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t47 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_47_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t47 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_47" border="none" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t47 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_47_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t46 === 0 ? implantLocker46 : Lock.t46 === 1 ? dataLocker46 : () => setLock({ ...Lock, t46: 0})}><img src={Lock.t46 === 0 ? process.env.PUBLIC_URL + 'Teeth/46.png': Lock.t46 === 1 ? process.env.PUBLIC_URL + 'Teeth/46i.png': process.env.PUBLIC_URL + 'Teeth/46x.png'} className={classes.tooth_img_16} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t46 === 0 && Furc.FurcCount46 === 1 ? classes.furc_img_16: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t46 === 0 && Furc.FurcCount46 === 2 ? classes.furc_img_16: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t46 === 0 && Furc.FurcCount46 === 3 ? classes.furc_img_16: classes.disabled}/>
                      <svg className={Lock.t46 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_46" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t46 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_46" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t46 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_46" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t46 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_46_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t46 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_46" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t46 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_46_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t45 === 0 ? () => setLock({ ...Lock, t45: 1}): Lock.t45 === 1 ? dataLocker45 : () => setLock({ ...Lock, t45: 0})}><img src={Lock.t45 === 0 ? process.env.PUBLIC_URL + 'Teeth/45.png': Lock.t45 === 1 ? process.env.PUBLIC_URL + 'Teeth/45i.png': process.env.PUBLIC_URL + 'Teeth/45x.png'} className={classes.tooth_img_15} />
                      <svg className={Lock.t45 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_45" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t45 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_45" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t45 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_45" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t45 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_45_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t45 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_45" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t45 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_45_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t44 === 0 ? () => setLock({ ...Lock, t44: 1}): Lock.t44 === 1 ? dataLocker44 : () => setLock({ ...Lock, t44: 0})}><img src={Lock.t44 === 0 ? process.env.PUBLIC_URL + 'Teeth/44.png': Lock.t44 === 1 ? process.env.PUBLIC_URL + 'Teeth/44i.png': process.env.PUBLIC_URL + 'Teeth/44x.png'} className={classes.tooth_img_14} />
                      <svg className={Lock.t44 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_44" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t44 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_44" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t44 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_44" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t44 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_44_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t44 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_44" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t44 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_44_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t43 === 0 ? () => setLock({ ...Lock, t43: 1}): Lock.t43 === 1 ? dataLocker43 : () => setLock({ ...Lock, t43: 0})}><img src={Lock.t43 === 0 ? process.env.PUBLIC_URL + 'Teeth/43.png': Lock.t43 === 1 ? process.env.PUBLIC_URL + 'Teeth/43i.png': process.env.PUBLIC_URL + 'Teeth/43x.png'} className={classes.tooth_img_13} />
                      <svg className={Lock.t43 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_43" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t43 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_43" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t43 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_43" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t43 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_43_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t43 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_43" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t43 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_43_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t42 === 0 ? () => setLock({ ...Lock, t42: 1}): Lock.t42 === 1 ? dataLocker42 : () => setLock({ ...Lock, t42: 0})}><img src={Lock.t42 === 0 ? process.env.PUBLIC_URL + 'Teeth/42.png': Lock.t42 === 1 ? process.env.PUBLIC_URL + 'Teeth/42i.png': process.env.PUBLIC_URL + 'Teeth/42x.png'} className={classes.tooth_img_12} />
                      <svg className={Lock.t42 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_42" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t42 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_42" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t42 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_42" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t42 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_42_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t42 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_42" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t42 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_42_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t41 === 0 ? () => setLock({ ...Lock, t41: 1}): Lock.t41 === 1 ? dataLocker41 : () => setLock({ ...Lock, t41: 0})}><img src={Lock.t41 === 0 ? process.env.PUBLIC_URL + 'Teeth/41.png': Lock.t41 === 1 ? process.env.PUBLIC_URL + 'Teeth/41i.png': process.env.PUBLIC_URL + 'Teeth/41x.png'} className={classes.tooth_img_11} />
                      <svg className={Lock.t41 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_41" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t41 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_41" display="none"/></svg>
                      <svg className={Lock.t41 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_41" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t41 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_41_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t41 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_41" display="none"/></svg>
                      <svg className={Lock.t41 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_41_attachment" display="none"/></svg>
            <ToothLines1 />
            
          </ImgCell>
         
        </TableRow>
        <TableRow><SpaceCell></SpaceCell></TableRow>
        <TableRow>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="701" onClick={ Plague.Plague48_1 === true ? () => setPlague({ ...Plague, Plague48_1: !Plague.Plague48_1, Plague_total_48: Plague.Plague_total_48 - 1}) : () => setPlague({ ...Plague, Plague48_1: !Plague.Plague48_1, Plague_total_48: Plague.Plague_total_48 + 1})} className={Lock.t48 !== 2 ? (Plague.Plague48_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="702" onClick={ Plague.Plague48_2 === true ? () => setPlague({ ...Plague, Plague48_2: !Plague.Plague48_2, Plague_total_48: Plague.Plague_total_48 - 1}) : () => setPlague({ ...Plague, Plague48_2: !Plague.Plague48_2, Plague_total_48: Plague.Plague_total_48 + 1})} className={Lock.t48 !== 2 ? (Plague.Plague48_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="703" onClick={ Plague.Plague48_3 === true ? () => setPlague({ ...Plague, Plague48_3: !Plague.Plague48_3, Plague_total_48: Plague.Plague_total_48 - 1}) : () => setPlague({ ...Plague, Plague48_3: !Plague.Plague48_3, Plague_total_48: Plague.Plague_total_48 + 1})} className={Lock.t48 !== 2 ? (Plague.Plague48_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="704" onClick={ Plague.Plague47_1 === true ? () => setPlague({ ...Plague, Plague47_1: !Plague.Plague47_1, Plague_total_47: Plague.Plague_total_47 - 1}) : () => setPlague({ ...Plague, Plague47_1: !Plague.Plague47_1, Plague_total_47: Plague.Plague_total_47 + 1})} className={Lock.t47 !== 2 ? (Plague.Plague47_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="705" onClick={ Plague.Plague47_2 === true ? () => setPlague({ ...Plague, Plague47_2: !Plague.Plague47_2, Plague_total_47: Plague.Plague_total_47 - 1}) : () => setPlague({ ...Plague, Plague47_2: !Plague.Plague47_2, Plague_total_47: Plague.Plague_total_47 + 1})} className={Lock.t47 !== 2 ? (Plague.Plague47_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="706" onClick={ Plague.Plague47_3 === true ? () => setPlague({ ...Plague, Plague47_3: !Plague.Plague47_3, Plague_total_47: Plague.Plague_total_47 - 1}) : () => setPlague({ ...Plague, Plague47_3: !Plague.Plague47_3, Plague_total_47: Plague.Plague_total_47 + 1})} className={Lock.t47 !== 2 ? (Plague.Plague47_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="707" onClick={ Plague.Plague46_1 === true ? () => setPlague({ ...Plague, Plague46_1: !Plague.Plague46_1, Plague_total_46: Plague.Plague_total_46 - 1}) : () => setPlague({ ...Plague, Plague46_1: !Plague.Plague46_1, Plague_total_46: Plague.Plague_total_46 + 1})} className={Lock.t46 !== 2 ? (Plague.Plague46_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="708" onClick={ Plague.Plague46_2 === true ? () => setPlague({ ...Plague, Plague46_2: !Plague.Plague46_2, Plague_total_46: Plague.Plague_total_46 - 1}) : () => setPlague({ ...Plague, Plague46_2: !Plague.Plague46_2, Plague_total_46: Plague.Plague_total_46 + 1})} className={Lock.t46 !== 2 ? (Plague.Plague46_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="709" onClick={ Plague.Plague46_3 === true ? () => setPlague({ ...Plague, Plague46_3: !Plague.Plague46_3, Plague_total_46: Plague.Plague_total_46 - 1}) : () => setPlague({ ...Plague, Plague46_3: !Plague.Plague46_3, Plague_total_46: Plague.Plague_total_46 + 1})} className={Lock.t46 !== 2 ? (Plague.Plague46_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="710" onClick={ Plague.Plague45_1 === true ? () => setPlague({ ...Plague, Plague45_1: !Plague.Plague45_1, Plague_total_45: Plague.Plague_total_45 - 1}) : () => setPlague({ ...Plague, Plague45_1: !Plague.Plague45_1, Plague_total_45: Plague.Plague_total_45 + 1})} className={Lock.t45 !== 2 ? (Plague.Plague45_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="711" onClick={ Plague.Plague45_2 === true ? () => setPlague({ ...Plague, Plague45_2: !Plague.Plague45_2, Plague_total_45: Plague.Plague_total_45 - 1}) : () => setPlague({ ...Plague, Plague45_2: !Plague.Plague45_2, Plague_total_45: Plague.Plague_total_45 + 1})} className={Lock.t45 !== 2 ? (Plague.Plague45_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="712" onClick={ Plague.Plague45_3 === true ? () => setPlague({ ...Plague, Plague45_3: !Plague.Plague45_3, Plague_total_45: Plague.Plague_total_45 - 1}) : () => setPlague({ ...Plague, Plague45_3: !Plague.Plague45_3, Plague_total_45: Plague.Plague_total_45 + 1})} className={Lock.t45 !== 2 ? (Plague.Plague45_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="713" onClick={ Plague.Plague44_1 === true ? () => setPlague({ ...Plague, Plague44_1: !Plague.Plague44_1, Plague_total_44: Plague.Plague_total_44 - 1}) : () => setPlague({ ...Plague, Plague44_1: !Plague.Plague44_1, Plague_total_44: Plague.Plague_total_44 + 1})} className={Lock.t44 !== 2 ? (Plague.Plague44_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="714" onClick={ Plague.Plague44_2 === true ? () => setPlague({ ...Plague, Plague44_2: !Plague.Plague44_2, Plague_total_44: Plague.Plague_total_44 - 1}) : () => setPlague({ ...Plague, Plague44_2: !Plague.Plague44_2, Plague_total_44: Plague.Plague_total_44 + 1})} className={Lock.t44 !== 2 ? (Plague.Plague44_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="715" onClick={ Plague.Plague44_3 === true ? () => setPlague({ ...Plague, Plague44_3: !Plague.Plague44_3, Plague_total_44: Plague.Plague_total_44 - 1}) : () => setPlague({ ...Plague, Plague44_3: !Plague.Plague44_3, Plague_total_44: Plague.Plague_total_44 + 1})} className={Lock.t44 !== 2 ? (Plague.Plague44_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="716" onClick={ Plague.Plague43_1 === true ? () => setPlague({ ...Plague, Plague43_1: !Plague.Plague43_1, Plague_total_43: Plague.Plague_total_43 - 1}) : () => setPlague({ ...Plague, Plague43_1: !Plague.Plague43_1, Plague_total_43: Plague.Plague_total_43 + 1})} className={Lock.t43 !== 2 ? (Plague.Plague43_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="717" onClick={ Plague.Plague43_2 === true ? () => setPlague({ ...Plague, Plague43_2: !Plague.Plague43_2, Plague_total_43: Plague.Plague_total_43 - 1}) : () => setPlague({ ...Plague, Plague43_2: !Plague.Plague43_2, Plague_total_43: Plague.Plague_total_43 + 1})} className={Lock.t43 !== 2 ? (Plague.Plague43_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="718" onClick={ Plague.Plague43_3 === true ? () => setPlague({ ...Plague, Plague43_3: !Plague.Plague43_3, Plague_total_43: Plague.Plague_total_43 - 1}) : () => setPlague({ ...Plague, Plague43_3: !Plague.Plague43_3, Plague_total_43: Plague.Plague_total_43 + 1})} className={Lock.t43 !== 2 ? (Plague.Plague43_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="719" onClick={ Plague.Plague42_1 === true ? () => setPlague({ ...Plague, Plague42_1: !Plague.Plague42_1, Plague_total_42: Plague.Plague_total_42 - 1}) : () => setPlague({ ...Plague, Plague42_1: !Plague.Plague42_1, Plague_total_42: Plague.Plague_total_42 + 1})} className={Lock.t42 !== 2 ? (Plague.Plague42_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="720" onClick={ Plague.Plague42_2 === true ? () => setPlague({ ...Plague, Plague42_2: !Plague.Plague42_2, Plague_total_42: Plague.Plague_total_42 - 1}) : () => setPlague({ ...Plague, Plague42_2: !Plague.Plague42_2, Plague_total_42: Plague.Plague_total_42 + 1})} className={Lock.t42 !== 2 ? (Plague.Plague42_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="721" onClick={ Plague.Plague42_3 === true ? () => setPlague({ ...Plague, Plague42_3: !Plague.Plague42_3, Plague_total_42: Plague.Plague_total_42 - 1}) : () => setPlague({ ...Plague, Plague42_3: !Plague.Plague42_3, Plague_total_42: Plague.Plague_total_42 + 1})} className={Lock.t42 !== 2 ? (Plague.Plague42_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="722" onClick={ Plague.Plague41_1 === true ? () => setPlague({ ...Plague, Plague41_1: !Plague.Plague41_1, Plague_total_41: Plague.Plague_total_41 - 1}) : () => setPlague({ ...Plague, Plague41_1: !Plague.Plague41_1, Plague_total_41: Plague.Plague_total_41 + 1})} className={Lock.t41 !== 2 ? (Plague.Plague41_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="723" onClick={ Plague.Plague41_2 === true ? () => setPlague({ ...Plague, Plague41_2: !Plague.Plague41_2, Plague_total_41: Plague.Plague_total_41 - 1}) : () => setPlague({ ...Plague, Plague41_2: !Plague.Plague41_2, Plague_total_41: Plague.Plague_total_41 + 1})} className={Lock.t41 !== 2 ? (Plague.Plague41_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="724" onClick={ Plague.Plague41_3 === true ? () => setPlague({ ...Plague, Plague41_3: !Plague.Plague41_3, Plague_total_41: Plague.Plague_total_41 - 1}) : () => setPlague({ ...Plague, Plague41_3: !Plague.Plague41_3, Plague_total_41: Plague.Plague_total_41 + 1})} className={Lock.t41 !== 2 ? (Plague.Plague41_3 ? classes.small_btn_3_Plague_lst : classes.small_btn_3_lst) : classes.disable_furcation} /></div></PlagueTableCell>
           
        </TableRow>
        <TableRow>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="748" onClick={ Plague.Plague48_1_lg === true ? () => setPlague({ ...Plague, Plague48_1_lg: !Plague.Plague48_1_lg, Plague_total_48: Plague.Plague_total_48 - 1}) : () => setPlague({ ...Plague, Plague48_1_lg: !Plague.Plague48_1_lg, Plague_total_48: Plague.Plague_total_48 + 1})} className={Lock.t48 !== 2 ? (Plague.Plague48_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="749" onClick={ Plague.Plague48_2_lg === true ? () => setPlague({ ...Plague, Plague48_2_lg: !Plague.Plague48_2_lg, Plague_total_48: Plague.Plague_total_48 - 1}) : () => setPlague({ ...Plague, Plague48_2_lg: !Plague.Plague48_2_lg, Plague_total_48: Plague.Plague_total_48 + 1})} className={Lock.t48 !== 2 ? (Plague.Plague48_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="750" onClick={ Plague.Plague48_3_lg === true ? () => setPlague({ ...Plague, Plague48_3_lg: !Plague.Plague48_3_lg, Plague_total_48: Plague.Plague_total_48 - 1}) : () => setPlague({ ...Plague, Plague48_3_lg: !Plague.Plague48_3_lg, Plague_total_48: Plague.Plague_total_48 + 1})} className={Lock.t48 !== 2 ? (Plague.Plague48_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="751" onClick={ Plague.Plague47_1_lg === true ? () => setPlague({ ...Plague, Plague47_1_lg: !Plague.Plague47_1_lg, Plague_total_47: Plague.Plague_total_47 - 1}) : () => setPlague({ ...Plague, Plague47_1_lg: !Plague.Plague47_1_lg, Plague_total_47: Plague.Plague_total_47 + 1})} className={Lock.t47 !== 2 ? (Plague.Plague47_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="752" onClick={ Plague.Plague47_2_lg === true ? () => setPlague({ ...Plague, Plague47_2_lg: !Plague.Plague47_2_lg, Plague_total_47: Plague.Plague_total_47 - 1}) : () => setPlague({ ...Plague, Plague47_2_lg: !Plague.Plague47_2_lg, Plague_total_47: Plague.Plague_total_47 + 1})} className={Lock.t47 !== 2 ? (Plague.Plague47_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="753" onClick={ Plague.Plague47_3_lg === true ? () => setPlague({ ...Plague, Plague47_3_lg: !Plague.Plague47_3_lg, Plague_total_47: Plague.Plague_total_47 - 1}) : () => setPlague({ ...Plague, Plague47_3_lg: !Plague.Plague47_3_lg, Plague_total_47: Plague.Plague_total_47 + 1})} className={Lock.t47 !== 2 ? (Plague.Plague47_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="754" onClick={ Plague.Plague46_1_lg === true ? () => setPlague({ ...Plague, Plague46_1_lg: !Plague.Plague46_1_lg, Plague_total_46: Plague.Plague_total_46 - 1}) : () => setPlague({ ...Plague, Plague46_1_lg: !Plague.Plague46_1_lg, Plague_total_46: Plague.Plague_total_46 + 1})} className={Lock.t46 !== 2 ? (Plague.Plague46_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="755" onClick={ Plague.Plague46_2_lg === true ? () => setPlague({ ...Plague, Plague46_2_lg: !Plague.Plague46_2_lg, Plague_total_46: Plague.Plague_total_46 - 1}) : () => setPlague({ ...Plague, Plague46_2_lg: !Plague.Plague46_2_lg, Plague_total_46: Plague.Plague_total_46 + 1})} className={Lock.t46 !== 2 ? (Plague.Plague46_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="756" onClick={ Plague.Plague46_3_lg === true ? () => setPlague({ ...Plague, Plague46_3_lg: !Plague.Plague46_3_lg, Plague_total_46: Plague.Plague_total_46 - 1}) : () => setPlague({ ...Plague, Plague46_3_lg: !Plague.Plague46_3_lg, Plague_total_46: Plague.Plague_total_46 + 1})} className={Lock.t46 !== 2 ? (Plague.Plague46_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="757" onClick={ Plague.Plague45_1_lg === true ? () => setPlague({ ...Plague, Plague45_1_lg: !Plague.Plague45_1_lg, Plague_total_45: Plague.Plague_total_45 - 1}) : () => setPlague({ ...Plague, Plague45_1_lg: !Plague.Plague45_1_lg, Plague_total_45: Plague.Plague_total_45 + 1})} className={Lock.t45 !== 2 ? (Plague.Plague45_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="758" onClick={ Plague.Plague45_2_lg === true ? () => setPlague({ ...Plague, Plague45_2_lg: !Plague.Plague45_2_lg, Plague_total_45: Plague.Plague_total_45 - 1}) : () => setPlague({ ...Plague, Plague45_2_lg: !Plague.Plague45_2_lg, Plague_total_45: Plague.Plague_total_45 + 1})} className={Lock.t45 !== 2 ? (Plague.Plague45_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="759" onClick={ Plague.Plague45_3_lg === true ? () => setPlague({ ...Plague, Plague45_3_lg: !Plague.Plague45_3_lg, Plague_total_45: Plague.Plague_total_45 - 1}) : () => setPlague({ ...Plague, Plague45_3_lg: !Plague.Plague45_3_lg, Plague_total_45: Plague.Plague_total_45 + 1})} className={Lock.t45 !== 2 ? (Plague.Plague45_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="760" onClick={ Plague.Plague44_1_lg === true ? () => setPlague({ ...Plague, Plague44_1_lg: !Plague.Plague44_1_lg, Plague_total_44: Plague.Plague_total_44 - 1}) : () => setPlague({ ...Plague, Plague44_1_lg: !Plague.Plague44_1_lg, Plague_total_44: Plague.Plague_total_44 + 1})} className={Lock.t44 !== 2 ? (Plague.Plague44_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="761" onClick={ Plague.Plague44_2_lg === true ? () => setPlague({ ...Plague, Plague44_2_lg: !Plague.Plague44_2_lg, Plague_total_44: Plague.Plague_total_44 - 1}) : () => setPlague({ ...Plague, Plague44_2_lg: !Plague.Plague44_2_lg, Plague_total_44: Plague.Plague_total_44 + 1})} className={Lock.t44 !== 2 ? (Plague.Plague44_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="762" onClick={ Plague.Plague44_3_lg === true ? () => setPlague({ ...Plague, Plague44_3_lg: !Plague.Plague44_3_lg, Plague_total_44: Plague.Plague_total_44 - 1}) : () => setPlague({ ...Plague, Plague44_3_lg: !Plague.Plague44_3_lg, Plague_total_44: Plague.Plague_total_44 + 1})} className={Lock.t44 !== 2 ? (Plague.Plague44_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="763" onClick={ Plague.Plague43_1_lg === true ? () => setPlague({ ...Plague, Plague43_1_lg: !Plague.Plague43_1_lg, Plague_total_43: Plague.Plague_total_43 - 1}) : () => setPlague({ ...Plague, Plague43_1_lg: !Plague.Plague43_1_lg, Plague_total_43: Plague.Plague_total_43 + 1})} className={Lock.t43 !== 2 ? (Plague.Plague43_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="764" onClick={ Plague.Plague43_2_lg === true ? () => setPlague({ ...Plague, Plague43_2_lg: !Plague.Plague43_2_lg, Plague_total_43: Plague.Plague_total_43 - 1}) : () => setPlague({ ...Plague, Plague43_2_lg: !Plague.Plague43_2_lg, Plague_total_43: Plague.Plague_total_43 + 1})} className={Lock.t43 !== 2 ? (Plague.Plague43_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="765" onClick={ Plague.Plague43_3_lg === true ? () => setPlague({ ...Plague, Plague43_3_lg: !Plague.Plague43_3_lg, Plague_total_43: Plague.Plague_total_43 - 1}) : () => setPlague({ ...Plague, Plague43_3_lg: !Plague.Plague43_3_lg, Plague_total_43: Plague.Plague_total_43 + 1})} className={Lock.t43 !== 2 ? (Plague.Plague43_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="766" onClick={ Plague.Plague42_1_lg === true ? () => setPlague({ ...Plague, Plague42_1_lg: !Plague.Plague42_1_lg, Plague_total_42: Plague.Plague_total_42 - 1}) : () => setPlague({ ...Plague, Plague42_1_lg: !Plague.Plague42_1_lg, Plague_total_42: Plague.Plague_total_42 + 1})} className={Lock.t42 !== 2 ? (Plague.Plague42_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="767" onClick={ Plague.Plague42_2_lg === true ? () => setPlague({ ...Plague, Plague42_2_lg: !Plague.Plague42_2_lg, Plague_total_42: Plague.Plague_total_42 - 1}) : () => setPlague({ ...Plague, Plague42_2_lg: !Plague.Plague42_2_lg, Plague_total_42: Plague.Plague_total_42 + 1})} className={Lock.t42 !== 2 ? (Plague.Plague42_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="768" onClick={ Plague.Plague42_3_lg === true ? () => setPlague({ ...Plague, Plague42_3_lg: !Plague.Plague42_3_lg, Plague_total_42: Plague.Plague_total_42 - 1}) : () => setPlague({ ...Plague, Plague42_3_lg: !Plague.Plague42_3_lg, Plague_total_42: Plague.Plague_total_42 + 1})} className={Lock.t42 !== 2 ? (Plague.Plague42_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="769" onClick={ Plague.Plague41_1_lg === true ? () => setPlague({ ...Plague, Plague41_1_lg: !Plague.Plague41_1_lg, Plague_total_41: Plague.Plague_total_41 - 1}) : () => setPlague({ ...Plague, Plague41_1_lg: !Plague.Plague41_1_lg, Plague_total_41: Plague.Plague_total_41 + 1})} className={Lock.t41 !== 2 ? (Plague.Plague41_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="770" onClick={ Plague.Plague41_2_lg === true ? () => setPlague({ ...Plague, Plague41_2_lg: !Plague.Plague41_2_lg, Plague_total_41: Plague.Plague_total_41 - 1}) : () => setPlague({ ...Plague, Plague41_2_lg: !Plague.Plague41_2_lg, Plague_total_41: Plague.Plague_total_41 + 1})} className={Lock.t41 !== 2 ? (Plague.Plague41_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="771" onClick={ Plague.Plague41_3_lg === true ? () => setPlague({ ...Plague, Plague41_3_lg: !Plague.Plague41_3_lg, Plague_total_41: Plague.Plague_total_41 - 1}) : () => setPlague({ ...Plague, Plague41_3_lg: !Plague.Plague41_3_lg, Plague_total_41: Plague.Plague_total_41 + 1})} className={Lock.t41 !== 2 ? (Plague.Plague41_3_lg ? classes.small_btn_3_Plague_lst : classes.small_btn_3_lst) : classes.disable_furcation} /></div></PlagueTableCell>
           
        </TableRow>
        <TableRow>
        <ImgCell className={classes.img_change} onClick={ Lock.t48 === 0 ? implantLocker48 : Lock.t48 === 1 ? dataLocker48 : () => setLock({ ...Lock, t48: 0})}><img src={Lock.t48 === 0 ? process.env.PUBLIC_URL + 'Teeth/48b.png': Lock.t48 === 1 ? process.env.PUBLIC_URL + 'Teeth/48bi.png': process.env.PUBLIC_URL + 'Teeth/48bx.png'} className={classes.tooth_img_18b} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t48 === 0 && Furc.FurcCount48b === 1 ? classes.furc_img_18_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t48 === 0 && Furc.FurcCount48b === 2 ? classes.furc_img_18_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t48 === 0 && Furc.FurcCount48b === 3 ? classes.furc_img_18_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t48 === 0 && Furc.FurcCount48br === 1 ? classes.furc_img_18_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t48 === 0 && Furc.FurcCount48br === 2 ? classes.furc_img_18_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t48 === 0 && Furc.FurcCount48br === 3 ? classes.furc_img_18_r: classes.disabled}/>
                      <svg className={Lock.t48 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_48_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t48 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_48_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t48 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_48_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t48 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_48_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t48 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_48_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t48 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_48_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t47 === 0 ? implantLocker47 : Lock.t47 === 1 ? dataLocker47 : () => setLock({ ...Lock, t47: 0})}><img src={Lock.t47 === 0 ? process.env.PUBLIC_URL + 'Teeth/47b.png': Lock.t47 === 1 ? process.env.PUBLIC_URL + 'Teeth/47bi.png': process.env.PUBLIC_URL + 'Teeth/47bx.png'} className={classes.tooth_img_17b} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t47 === 0 && Furc.FurcCount47b === 1 ? classes.furc_img_17_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t47 === 0 && Furc.FurcCount47b === 2 ? classes.furc_img_17_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t47 === 0 && Furc.FurcCount47b === 3 ? classes.furc_img_17_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t47 === 0 && Furc.FurcCount47br === 1 ? classes.furc_img_17_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t47 === 0 && Furc.FurcCount47br === 2 ? classes.furc_img_17_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t47 === 0 && Furc.FurcCount47br === 3 ? classes.furc_img_17_r: classes.disabled}/>
                      <svg className={Lock.t47 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_47_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t47 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_47_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t47 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_47_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t47 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_47_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t47 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_47_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t47 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_47_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t46 === 0 ? implantLocker46 : Lock.t46 === 1 ? dataLocker46 : () => setLock({ ...Lock, t46: 0})}><img src={Lock.t46 === 0 ? process.env.PUBLIC_URL + 'Teeth/46b.png': Lock.t46 === 1 ? process.env.PUBLIC_URL + 'Teeth/46bi.png': process.env.PUBLIC_URL + 'Teeth/46bx.png'} className={classes.tooth_img_16b} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t46 === 0 && Furc.FurcCount46b === 1 ? classes.furc_img_16_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t46 === 0 && Furc.FurcCount46b === 2 ? classes.furc_img_16_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t46 === 0 && Furc.FurcCount46b === 3 ? classes.furc_img_16_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t46 === 0 && Furc.FurcCount46br === 1 ? classes.furc_img_16_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t46 === 0 && Furc.FurcCount46br === 2 ? classes.furc_img_16_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t46 === 0 && Furc.FurcCount46br === 3 ? classes.furc_img_16_r: classes.disabled}/>
                      <svg className={Lock.t46 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_46_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t46 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_46_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t46 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_46_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t46 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_46_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t46 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_46_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t46 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_46_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t45 === 0 ? () => setLock({ ...Lock, t45: 1}): Lock.t45 === 1 ? dataLocker45 : () => setLock({ ...Lock, t45: 0})}><img src={Lock.t45 === 0 ? process.env.PUBLIC_URL + 'Teeth/45b.png': Lock.t45 === 1 ? process.env.PUBLIC_URL + 'Teeth/45bi.png': process.env.PUBLIC_URL + 'Teeth/45bx.png'} className={classes.tooth_img_15b} />
                      <svg className={Lock.t45 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_45_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t45 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_45_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t45 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_45_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t45 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_45_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t45 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_45_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t45 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_45_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
          <ToothLines2 /></ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t44 === 0 ? () => setLock({ ...Lock, t44: 1}): Lock.t44 === 1 ? dataLocker44 : () => setLock({ ...Lock, t44: 0})}><img src={Lock.t44 === 0 ? process.env.PUBLIC_URL + 'Teeth/44b.png': Lock.t44 === 1 ? process.env.PUBLIC_URL + 'Teeth/44bi.png': process.env.PUBLIC_URL + 'Teeth/44bx.png'} className={classes.tooth_img_14b} />
                      <svg className={Lock.t44 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_44_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t44 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_44_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t44 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_44_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t44 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_44_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t44 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_44_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t44 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_44_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t43 === 0 ? () => setLock({ ...Lock, t43: 1}): Lock.t43 === 1 ? dataLocker43 : () => setLock({ ...Lock, t43: 0})}><img src={Lock.t43 === 0 ? process.env.PUBLIC_URL + 'Teeth/43b.png': Lock.t43 === 1 ? process.env.PUBLIC_URL + 'Teeth/43bi.png': process.env.PUBLIC_URL + 'Teeth/43bx.png'} className={classes.tooth_img_13b} />
                      <svg className={Lock.t43 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_43_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t43 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_43_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t43 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_43_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t43 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_43_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t43 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_43_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t43 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_43_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
          <ToothLines2 /></ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t42 === 0 ? () => setLock({ ...Lock, t42: 1}): Lock.t42 === 1 ? dataLocker42 : () => setLock({ ...Lock, t42: 0})}><img src={Lock.t42 === 0 ? process.env.PUBLIC_URL + 'Teeth/42b.png': Lock.t42 === 1 ? process.env.PUBLIC_URL + 'Teeth/42bi.png': process.env.PUBLIC_URL + 'Teeth/42bx.png'} className={classes.tooth_img_12b} />
                      <svg className={Lock.t42 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_42_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t42 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_42_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t42 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_42_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t42 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_42_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t42 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_42_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t42 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_42_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
          <ToothLines2 /></ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t41 === 0 ? () => setLock({ ...Lock, t41: 1}): Lock.t41 === 1 ? dataLocker41 : () => setLock({ ...Lock, t41: 0})}><img src={Lock.t41 === 0 ? process.env.PUBLIC_URL + 'Teeth/41b.png': Lock.t41 === 1 ? process.env.PUBLIC_URL + 'Teeth/41bi.png': process.env.PUBLIC_URL + 'Teeth/41bx.png'} className={classes.tooth_img_11b} />
                      <svg className={Lock.t41 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_41_lg" display="none"/></svg>
                      <svg className={Lock.t41 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_41_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t41 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_41_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t41 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_41_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t41 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_41_lg" display="none"/></svg>
                      <svg className={Lock.t41 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_41_attachment_lg" display="none"/></svg>
          <ToothLines2 /></ImgCell>
         
        </TableRow> 
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="796" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t48_1_lg > 15 || GM.t48_1_lg < (-10) ? gmLimit48() : GM.t48_1_lg} onChange={(e) => setGM({...GM, t48_1_lg: e.target.value})} className={Lock.t48 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="797" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t48_2_lg > 15 || GM.t48_2_lg < (-10) ? gmLimit48() : GM.t48_2_lg} onChange={(e) => setGM({...GM, t48_2_lg: e.target.value})}  className={Lock.t48 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="798" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t48_3_lg > 15 || GM.t48_3_lg < (-10) ? gmLimit48() : GM.t48_3_lg} onChange={(e) => setGM({...GM, t48_3_lg: e.target.value})} className={Lock.t48 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="799" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t47_1_lg > 15 || GM.t47_1_lg < (-10) ? gmLimit47() : GM.t47_1_lg} onChange={(e) => setGM({...GM, t47_1_lg: e.target.value})} className={Lock.t47 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="800" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t47_2_lg > 15 || GM.t47_2_lg < (-10) ? gmLimit47() : GM.t47_2_lg} onChange={(e) => setGM({...GM, t47_2_lg: e.target.value})}  className={Lock.t47 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="801" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t47_3_lg > 15 || GM.t47_3_lg < (-10) ? gmLimit47() : GM.t47_3_lg} onChange={(e) => setGM({...GM, t47_3_lg: e.target.value})} className={Lock.t47 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="802" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t46_1_lg > 15 || GM.t46_1_lg < (-10) ? gmLimit46() : GM.t46_1_lg} onChange={(e) => setGM({...GM, t46_1_lg: e.target.value})} className={Lock.t46 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="803" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t46_2_lg > 15 || GM.t46_2_lg < (-10) ? gmLimit46() : GM.t46_2_lg} onChange={(e) => setGM({...GM, t46_2_lg: e.target.value})}  className={Lock.t46 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="804" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t46_3_lg > 15 || GM.t46_3_lg < (-10) ? gmLimit46() : GM.t46_3_lg} onChange={(e) => setGM({...GM, t46_3_lg: e.target.value})} className={Lock.t46 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="805" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t45_1_lg > 15 || GM.t45_1_lg < (-10) ? gmLimit45() : GM.t45_1_lg} onChange={(e) => setGM({...GM, t45_1_lg: e.target.value})} className={Lock.t45 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="806" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t45_2_lg > 15 || GM.t45_2_lg < (-10) ? gmLimit45() : GM.t45_2_lg} onChange={(e) => setGM({...GM, t45_2_lg: e.target.value})}  className={Lock.t45 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="807" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t45_3_lg > 15 || GM.t45_3_lg < (-10) ? gmLimit45() : GM.t45_3_lg} onChange={(e) => setGM({...GM, t45_3_lg: e.target.value})} className={Lock.t45 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="808" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t44_1_lg > 15 || GM.t44_1_lg < (-10) ? gmLimit44() : GM.t44_1_lg} onChange={(e) => setGM({...GM, t44_1_lg: e.target.value})} className={Lock.t44 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="809" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t44_2_lg > 15 || GM.t44_2_lg < (-10) ? gmLimit44() : GM.t44_2_lg} onChange={(e) => setGM({...GM, t44_2_lg: e.target.value})}  className={Lock.t44 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="810" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t44_3_lg > 15 || GM.t44_3_lg < (-10) ? gmLimit44() : GM.t44_3_lg} onChange={(e) => setGM({...GM, t44_3_lg: e.target.value})} className={Lock.t44 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="811" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t43_1_lg > 15 || GM.t43_1_lg < (-10) ? gmLimit43() : GM.t43_1_lg} onChange={(e) => setGM({...GM, t43_1_lg: e.target.value})} className={Lock.t43 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="812" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t43_2_lg > 15 || GM.t43_2_lg < (-10) ? gmLimit43() : GM.t43_2_lg} onChange={(e) => setGM({...GM, t43_2_lg: e.target.value})}  className={Lock.t43 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="813" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t43_3_lg > 15 || GM.t43_3_lg < (-10) ? gmLimit43() : GM.t43_3_lg} onChange={(e) => setGM({...GM, t43_3_lg: e.target.value})} className={Lock.t43 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="814" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t42_1_lg > 15 || GM.t42_1_lg < (-10) ? gmLimit42() : GM.t42_1_lg} onChange={(e) => setGM({...GM, t42_1_lg: e.target.value})} className={Lock.t42 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="815" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t42_2_lg > 15 || GM.t42_2_lg < (-10) ? gmLimit42() : GM.t42_2_lg} onChange={(e) => setGM({...GM, t42_2_lg: e.target.value})}  className={Lock.t42 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="816" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t42_3_lg > 15 || GM.t42_3_lg < (-10) ? gmLimit42() : GM.t42_3_lg} onChange={(e) => setGM({...GM, t42_3_lg: e.target.value})} className={Lock.t42 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="817" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t41_1_lg > 15 || GM.t41_1_lg < (-10) ? gmLimit41() : GM.t41_1_lg} onChange={(e) => setGM({...GM, t41_1_lg: e.target.value})} className={Lock.t41 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="818" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t41_2_lg > 15 || GM.t41_2_lg < (-10) ? gmLimit41() : GM.t41_2_lg} onChange={(e) => setGM({...GM, t41_2_lg: e.target.value})}  className={Lock.t41 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="819" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t41_3_lg > 15 || GM.t41_3_lg < (-10) ? gmLimit41() : GM.t41_3_lg} onChange={(e) => setGM({...GM, t41_3_lg: e.target.value})} className={Lock.t41 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
           
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="844" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p48_1_lg > 15 || Probe.p48_1_lg < 0 ? ProbeLimit48() : Probe.p48_1_lg} onChange={(e) => setProbe({...Probe, p48_1_lg: e.target.value})} className={Lock.t48 !== 2 ? (((Probe.p48_1_lg == 4 && BoP.BoP48_1_lg) || Probe.p48_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="845" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p48_2_lg > 15 || Probe.p48_2_lg < 0 ? ProbeLimit48() : Probe.p48_2_lg} onChange={(e) => setProbe({...Probe, p48_2_lg: e.target.value})}  className={Lock.t48 !== 2 ? (((Probe.p48_2_lg == 4 && BoP.BoP48_2_lg) || Probe.p48_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="846" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p48_3_lg > 15 || Probe.p48_3_lg < 0 ? ProbeLimit48() : Probe.p48_3_lg} onChange={(e) => setProbe({...Probe, p48_3_lg: e.target.value})} className={Lock.t48 !== 2 ? (((Probe.p48_3_lg == 4 && BoP.BoP48_3_lg) || Probe.p48_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="847" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p47_1_lg > 15 || Probe.p47_1_lg < 0 ? ProbeLimit47() : Probe.p47_1_lg} onChange={(e) => setProbe({...Probe, p47_1_lg: e.target.value})} className={Lock.t47 !== 2 ? (((Probe.p47_1_lg == 4 && BoP.BoP47_1_lg) || Probe.p47_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="848" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p47_2_lg > 15 || Probe.p47_2_lg < 0 ? ProbeLimit47() : Probe.p47_2_lg} onChange={(e) => setProbe({...Probe, p47_2_lg: e.target.value})}  className={Lock.t47 !== 2 ? (((Probe.p47_2_lg == 4 && BoP.BoP47_2_lg) || Probe.p47_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="849" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p47_3_lg > 15 || Probe.p47_3_lg < 0 ? ProbeLimit47() : Probe.p47_3_lg} onChange={(e) => setProbe({...Probe, p47_3_lg: e.target.value})} className={Lock.t47 !== 2 ? (((Probe.p47_3_lg == 4 && BoP.BoP47_3_lg) || Probe.p47_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="850" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p46_1_lg > 15 || Probe.p46_1_lg < 0 ? ProbeLimit46() : Probe.p46_1_lg} onChange={(e) => setProbe({...Probe, p46_1_lg: e.target.value})} className={Lock.t46 !== 2 ? (((Probe.p46_1_lg == 4 && BoP.BoP46_1_lg) || Probe.p46_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="851" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p46_2_lg > 15 || Probe.p46_2_lg < 0 ? ProbeLimit46() : Probe.p46_2_lg} onChange={(e) => setProbe({...Probe, p46_2_lg: e.target.value})}  className={Lock.t46 !== 2 ? (((Probe.p46_2_lg == 4 && BoP.BoP46_2_lg) || Probe.p46_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="852" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p46_3_lg > 15 || Probe.p46_3_lg < 0 ? ProbeLimit46() : Probe.p46_3_lg} onChange={(e) => setProbe({...Probe, p46_3_lg: e.target.value})} className={Lock.t46 !== 2 ? (((Probe.p46_3_lg == 4 && BoP.BoP46_3_lg) || Probe.p46_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="853" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p45_1_lg > 15 || Probe.p45_1_lg < 0 ? ProbeLimit45() : Probe.p45_1_lg} onChange={(e) => setProbe({...Probe, p45_1_lg: e.target.value})} className={Lock.t45 !== 2 ? (((Probe.p45_1_lg == 4 && BoP.BoP45_1_lg) || Probe.p45_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="854" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p45_2_lg > 15 || Probe.p45_2_lg < 0 ? ProbeLimit45() : Probe.p45_2_lg} onChange={(e) => setProbe({...Probe, p45_2_lg: e.target.value})}  className={Lock.t45 !== 2 ? (((Probe.p45_2_lg == 4 && BoP.BoP45_2_lg) || Probe.p45_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="855" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p45_3_lg > 15 || Probe.p45_3_lg < 0 ? ProbeLimit45() : Probe.p45_3_lg} onChange={(e) => setProbe({...Probe, p45_3_lg: e.target.value})} className={Lock.t45 !== 2 ? (((Probe.p45_3_lg == 4 && BoP.BoP45_3_lg) || Probe.p45_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="856" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p44_1_lg > 15 || Probe.p44_1_lg < 0 ? ProbeLimit44() : Probe.p44_1_lg} onChange={(e) => setProbe({...Probe, p44_1_lg: e.target.value})} className={Lock.t44 !== 2 ? (((Probe.p44_1_lg == 4 && BoP.BoP44_1_lg) || Probe.p44_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="857" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p44_2_lg > 15 || Probe.p44_2_lg < 0 ? ProbeLimit44() : Probe.p44_2_lg} onChange={(e) => setProbe({...Probe, p44_2_lg: e.target.value})}  className={Lock.t44 !== 2 ? (((Probe.p44_2_lg == 4 && BoP.BoP44_2_lg) || Probe.p44_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="858" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p44_3_lg > 15 || Probe.p44_3_lg < 0 ? ProbeLimit44() : Probe.p44_3_lg} onChange={(e) => setProbe({...Probe, p44_3_lg: e.target.value})} className={Lock.t44 !== 2 ? (((Probe.p44_3_lg == 4 && BoP.BoP44_3_lg) || Probe.p44_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="859" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p43_1_lg > 15 || Probe.p43_1_lg < 0 ? ProbeLimit43() : Probe.p43_1_lg} onChange={(e) => setProbe({...Probe, p43_1_lg: e.target.value})} className={Lock.t43 !== 2 ? (((Probe.p43_1_lg == 4 && BoP.BoP43_1_lg) || Probe.p43_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="860"onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p43_2_lg > 15 || Probe.p43_2_lg < 0 ? ProbeLimit43() : Probe.p43_2_lg} onChange={(e) => setProbe({...Probe, p43_2_lg: e.target.value})}  className={Lock.t43 !== 2 ? (((Probe.p43_2_lg == 4 && BoP.BoP43_2_lg) || Probe.p43_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="861" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p43_3_lg > 15 || Probe.p43_3_lg < 0 ? ProbeLimit43() : Probe.p43_3_lg} onChange={(e) => setProbe({...Probe, p43_3_lg: e.target.value})} className={Lock.t43 !== 2 ? (((Probe.p43_3_lg == 4 && BoP.BoP43_3_lg) || Probe.p43_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="862" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p42_1_lg > 15 || Probe.p42_1_lg < 0 ? ProbeLimit42() : Probe.p42_1_lg} onChange={(e) => setProbe({...Probe, p42_1_lg: e.target.value})} className={Lock.t42 !== 2 ? (((Probe.p42_1_lg == 4 && BoP.BoP42_1_lg) || Probe.p42_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="863" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p42_2_lg > 15 || Probe.p42_2_lg < 0 ? ProbeLimit42() : Probe.p42_2_lg} onChange={(e) => setProbe({...Probe, p42_2_lg: e.target.value})}  className={Lock.t42 !== 2 ? (((Probe.p42_2_lg == 4 && BoP.BoP42_2_lg) || Probe.p42_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="864" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p42_3_lg > 15 || Probe.p42_3_lg < 0 ? ProbeLimit42() : Probe.p42_3_lg} onChange={(e) => setProbe({...Probe, p42_3_lg: e.target.value})} className={Lock.t42 !== 2 ? (((Probe.p42_3_lg == 4 && BoP.BoP42_3_lg) || Probe.p42_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="865" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p41_1_lg > 15 || Probe.p41_1_lg < 0 ? ProbeLimit41() : Probe.p41_1_lg} onChange={(e) => setProbe({...Probe, p41_1_lg: e.target.value})} className={Lock.t41 !== 2 ? (((Probe.p41_1_lg == 4 && BoP.BoP41_1_lg) || Probe.p41_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="866" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p41_2_lg > 15 || Probe.p41_2_lg < 0 ? ProbeLimit41() : Probe.p41_2_lg} onChange={(e) => setProbe({...Probe, p41_2_lg: e.target.value})}  className={Lock.t41 !== 2 ? (((Probe.p41_2_lg == 4 && BoP.BoP41_2_lg) || Probe.p41_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="867" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p41_3_lg > 15 || Probe.p41_3_lg < 0 ? ProbeLimit41() : Probe.p41_3_lg} onChange={(e) => setProbe({...Probe, p41_3_lg: e.target.value})} className={Lock.t41 !== 2 ? (((Probe.p41_3_lg == 4 && BoP.BoP41_3_lg) || Probe.p41_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
           
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="913" onClick={ BoP.BoP48_1_lg === true ? () => setBoP({ ...BoP, BoP48_1_lg: !BoP.BoP48_1_lg, BoP_total_48: BoP.BoP_total_48 - 1}) : () => setBoP({ ...BoP, BoP48_1_lg: !BoP.BoP48_1_lg, BoP_total_48: BoP.BoP_total_48 + 1})} className={Lock.t48 !== 2 ? (BoP.BoP48_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="914" onClick={ BoP.BoP48_2_lg === true ? () => setBoP({ ...BoP, BoP48_2_lg: !BoP.BoP48_2_lg, BoP_total_48: BoP.BoP_total_48 - 1}) : () => setBoP({ ...BoP, BoP48_2_lg: !BoP.BoP48_2_lg, BoP_total_48: BoP.BoP_total_48 + 1})} className={Lock.t48 !== 2 ? (BoP.BoP48_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="915" onClick={ BoP.BoP48_3_lg === true ? () => setBoP({ ...BoP, BoP48_3_lg: !BoP.BoP48_3_lg, BoP_total_48: BoP.BoP_total_48 - 1}) : () => setBoP({ ...BoP, BoP48_3_lg: !BoP.BoP48_3_lg, BoP_total_48: BoP.BoP_total_48 + 1})} className={Lock.t48 !== 2 ? (BoP.BoP48_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="916" onClick={ BoP.BoP47_1_lg === true ? () => setBoP({ ...BoP, BoP47_1_lg: !BoP.BoP47_1_lg, BoP_total_47: BoP.BoP_total_47 - 1}) : () => setBoP({ ...BoP, BoP47_1_lg: !BoP.BoP47_1_lg, BoP_total_47: BoP.BoP_total_47 + 1})} className={Lock.t47 !== 2 ? (BoP.BoP47_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="917" onClick={ BoP.BoP47_2_lg === true ? () => setBoP({ ...BoP, BoP47_2_lg: !BoP.BoP47_2_lg, BoP_total_47: BoP.BoP_total_47 - 1}) : () => setBoP({ ...BoP, BoP47_2_lg: !BoP.BoP47_2_lg, BoP_total_47: BoP.BoP_total_47 + 1})} className={Lock.t47 !== 2 ? (BoP.BoP47_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="918" onClick={ BoP.BoP47_3_lg === true ? () => setBoP({ ...BoP, BoP47_3_lg: !BoP.BoP47_3_lg, BoP_total_47: BoP.BoP_total_47 - 1}) : () => setBoP({ ...BoP, BoP47_3_lg: !BoP.BoP47_3_lg, BoP_total_47: BoP.BoP_total_47 + 1})} className={Lock.t47 !== 2 ? (BoP.BoP47_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="919" onClick={ BoP.BoP46_1_lg === true ? () => setBoP({ ...BoP, BoP46_1_lg: !BoP.BoP46_1_lg, BoP_total_46: BoP.BoP_total_46 - 1}) : () => setBoP({ ...BoP, BoP46_1_lg: !BoP.BoP46_1_lg, BoP_total_46: BoP.BoP_total_46 + 1})} className={Lock.t46 !== 2 ? (BoP.BoP46_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="920"onClick={ BoP.BoP46_2_lg === true ? () => setBoP({ ...BoP, BoP46_2_lg: !BoP.BoP46_2_lg, BoP_total_46: BoP.BoP_total_46 - 1}) : () => setBoP({ ...BoP, BoP46_2_lg: !BoP.BoP46_2_lg, BoP_total_46: BoP.BoP_total_46 + 1})} className={Lock.t46 !== 2 ? (BoP.BoP46_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="921" onClick={ BoP.BoP46_3_lg === true ? () => setBoP({ ...BoP, BoP46_3_lg: !BoP.BoP46_3_lg, BoP_total_46: BoP.BoP_total_46 - 1}) : () => setBoP({ ...BoP, BoP46_3_lg: !BoP.BoP46_3_lg, BoP_total_46: BoP.BoP_total_46 + 1})} className={Lock.t46 !== 2 ? (BoP.BoP46_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="922" onClick={ BoP.BoP45_1_lg === true ? () => setBoP({ ...BoP, BoP45_1_lg: !BoP.BoP45_1_lg, BoP_total_45: BoP.BoP_total_45 - 1}) : () => setBoP({ ...BoP, BoP45_1_lg: !BoP.BoP45_1_lg, BoP_total_45: BoP.BoP_total_45 + 1})} className={Lock.t45 !== 2 ? (BoP.BoP45_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="923" onClick={ BoP.BoP45_2_lg === true ? () => setBoP({ ...BoP, BoP45_2_lg: !BoP.BoP45_2_lg, BoP_total_45: BoP.BoP_total_45 - 1}) : () => setBoP({ ...BoP, BoP45_2_lg: !BoP.BoP45_2_lg, BoP_total_45: BoP.BoP_total_45 + 1})} className={Lock.t45 !== 2 ? (BoP.BoP45_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="924" onClick={ BoP.BoP45_3_lg === true ? () => setBoP({ ...BoP, BoP45_3_lg: !BoP.BoP45_3_lg, BoP_total_45: BoP.BoP_total_45 - 1}) : () => setBoP({ ...BoP, BoP45_3_lg: !BoP.BoP45_3_lg, BoP_total_45: BoP.BoP_total_45 + 1})} className={Lock.t45 !== 2 ? (BoP.BoP45_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="925" onClick={ BoP.BoP44_1_lg === true ? () => setBoP({ ...BoP, BoP44_1_lg: !BoP.BoP44_1_lg, BoP_total_44: BoP.BoP_total_44 - 1}) : () => setBoP({ ...BoP, BoP44_1_lg: !BoP.BoP44_1_lg, BoP_total_44: BoP.BoP_total_44 + 1})} className={Lock.t44 !== 2 ? (BoP.BoP44_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="926"onClick={ BoP.BoP44_2_lg === true ? () => setBoP({ ...BoP, BoP44_2_lg: !BoP.BoP44_2_lg, BoP_total_44: BoP.BoP_total_44 - 1}) : () => setBoP({ ...BoP, BoP44_2_lg: !BoP.BoP44_2_lg, BoP_total_44: BoP.BoP_total_44 + 1})} className={Lock.t44 !== 2 ? (BoP.BoP44_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="927" onClick={ BoP.BoP44_3_lg === true ? () => setBoP({ ...BoP, BoP44_3_lg: !BoP.BoP44_3_lg, BoP_total_44: BoP.BoP_total_44 - 1}) : () => setBoP({ ...BoP, BoP44_3_lg: !BoP.BoP44_3_lg, BoP_total_44: BoP.BoP_total_44 + 1})} className={Lock.t44 !== 2 ? (BoP.BoP44_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="928" onClick={ BoP.BoP43_1_lg === true ? () => setBoP({ ...BoP, BoP43_1_lg: !BoP.BoP43_1_lg, BoP_total_43: BoP.BoP_total_43 - 1}) : () => setBoP({ ...BoP, BoP43_1_lg: !BoP.BoP43_1_lg, BoP_total_43: BoP.BoP_total_43 + 1})} className={Lock.t43 !== 2 ? (BoP.BoP43_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="929"onClick={ BoP.BoP43_2_lg === true ? () => setBoP({ ...BoP, BoP43_2_lg: !BoP.BoP43_2_lg, BoP_total_43: BoP.BoP_total_43 - 1}) : () => setBoP({ ...BoP, BoP43_2_lg: !BoP.BoP43_2_lg, BoP_total_43: BoP.BoP_total_43 + 1})} className={Lock.t43 !== 2 ? (BoP.BoP43_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="930" onClick={ BoP.BoP43_3_lg === true ? () => setBoP({ ...BoP, BoP43_3_lg: !BoP.BoP43_3_lg, BoP_total_43: BoP.BoP_total_43 - 1}) : () => setBoP({ ...BoP, BoP43_3_lg: !BoP.BoP43_3_lg, BoP_total_43: BoP.BoP_total_43 + 1})} className={Lock.t43 !== 2 ? (BoP.BoP43_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="931" onClick={ BoP.BoP42_1_lg === true ? () => setBoP({ ...BoP, BoP42_1_lg: !BoP.BoP42_1_lg, BoP_total_42: BoP.BoP_total_42 - 1}) : () => setBoP({ ...BoP, BoP42_1_lg: !BoP.BoP42_1_lg, BoP_total_42: BoP.BoP_total_42 + 1})} className={Lock.t42 !== 2 ? (BoP.BoP42_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="932" onClick={ BoP.BoP42_2_lg === true ? () => setBoP({ ...BoP, BoP42_2_lg: !BoP.BoP42_2_lg, BoP_total_42: BoP.BoP_total_42 - 1}) : () => setBoP({ ...BoP, BoP42_2_lg: !BoP.BoP42_2_lg, BoP_total_42: BoP.BoP_total_42 + 1})} className={Lock.t42 !== 2 ? (BoP.BoP42_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="933" onClick={ BoP.BoP42_3_lg === true ? () => setBoP({ ...BoP, BoP42_3_lg: !BoP.BoP42_3_lg, BoP_total_42: BoP.BoP_total_42 - 1}) : () => setBoP({ ...BoP, BoP42_3_lg: !BoP.BoP42_3_lg, BoP_total_42: BoP.BoP_total_42 + 1})} className={Lock.t42 !== 2 ? (BoP.BoP42_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="934" onClick={ BoP.BoP41_1_lg === true ? () => setBoP({ ...BoP, BoP41_1_lg: !BoP.BoP41_1_lg, BoP_total_41: BoP.BoP_total_41 - 1}) : () => setBoP({ ...BoP, BoP41_1_lg: !BoP.BoP41_1_lg, BoP_total_41: BoP.BoP_total_41 + 1})} className={Lock.t41 !== 2 ? (BoP.BoP41_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="935"onClick={ BoP.BoP41_2_lg === true ? () => setBoP({ ...BoP, BoP41_2_lg: !BoP.BoP41_2_lg, BoP_total_41: BoP.BoP_total_41 - 1}) : () => setBoP({ ...BoP, BoP41_2_lg: !BoP.BoP41_2_lg, BoP_total_41: BoP.BoP_total_41 + 1})} className={Lock.t41 !== 2 ? (BoP.BoP41_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="936" onClick={ BoP.BoP41_3_lg === true ? () => setBoP({ ...BoP, BoP41_3_lg: !BoP.BoP41_3_lg, BoP_total_41: BoP.BoP_total_41 - 1}) : () => setBoP({ ...BoP, BoP41_3_lg: !BoP.BoP41_3_lg, BoP_total_41: BoP.BoP_total_41 + 1})} className={Lock.t41 !== 2 ? (BoP.BoP41_3_lg ? classes.small_btn_3_bop_lst : classes.small_btn_3_lst) : classes.disable_furcation} /></div></StyledTableCell>
           
        </TableRow> 
        <TableRow>
          <StyledTableCell align="center" >
          <StyledButton tabIndex="961" onClick={furc_flow48b()} size="large" className={Lock.t48 !== 0 ? classes.disable_furcation: null}>
                    <a className={Furc.FurcCount48b === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount48b === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount48b === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton>
         </StyledTableCell>
          <StyledTableCell align="center">
          <StyledButton tabIndex="962" onClick={furc_flow47b()} size="large" className={Lock.t47 !== 0 ? classes.disable_furcation: null}> 
                    <a className={Furc.FurcCount47b === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount47b === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount47b === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton>
          </StyledTableCell>
          <StyledTableCell align="center">
          <StyledButton tabIndex="963" onClick={furc_flow46b()} size="large" className={Lock.t46 !== 0 ? classes.disable_furcation: null}> 
                    <a className={Furc.FurcCount46b === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount46b === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount46b === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton>
          </StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
               
        </TableRow>
        </TableBody>
        <TableHead>
        <TableRow>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t48 !== 2 ? dataLocker48 : () => setLock({ ...Lock, t48: 0})}>48</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t47 !== 2 ? dataLocker47 : () => setLock({ ...Lock, t47: 0})}>47</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t46 !== 2 ? dataLocker46 : () => setLock({ ...Lock, t46: 0})}>46</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t45 !== 2 ? dataLocker45 : () => setLock({ ...Lock, t45: 0})}>45</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t44 !== 2 ? dataLocker44 : () => setLock({ ...Lock, t44: 0})}>44</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t43 !== 2 ? dataLocker43 : () => setLock({ ...Lock, t43: 0})}>43</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t42 !== 2 ? dataLocker42 : () => setLock({ ...Lock, t42: 0})}>42</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t41 !== 2 ? dataLocker41 : () => setLock({ ...Lock, t41: 0})}>41</StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
    </StyledContainer1>
    </div>
    <div className="grid-form-2">
    <StyledContainer2>
      <Table className={classes.table} size="small" aria-label="customized table" >
       <TableHead>
         <TableRow>
       <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t31 !== 2 ? dataLocker31 : () => setLock({ ...Lock, t31: 0})}>31</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t32 !== 2 ? dataLocker32 : () => setLock({ ...Lock, t32: 0})}>32</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t33 !== 2 ? dataLocker33 : () => setLock({ ...Lock, t33: 0})}>33</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t34 !== 2 ? dataLocker34 : () => setLock({ ...Lock, t34: 0})}>34</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t35 !== 2 ? dataLocker35 : () => setLock({ ...Lock, t35: 0})}>35</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t36 !== 2 ? dataLocker36 : () => setLock({ ...Lock, t36: 0})}>36</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t37 !== 2 ? dataLocker37 : () => setLock({ ...Lock, t37: 0})}>37</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t38 !== 2 ? dataLocker38 : () => setLock({ ...Lock, t38: 0})}>38</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
                <StyledTableCell align="center"><input tabIndex="509" type="text" value={Note.t31} onChange={(e) => setNote({...Note, t31: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="510" type="text" value={Note.t32} onChange={(e) => setNote({...Note, t32: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="511" type="text" value={Note.t33} onChange={(e) => setNote({...Note, t33: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="512" type="text" value={Note.t34} onChange={(e) => setNote({...Note, t34: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="513" type="text" value={Note.t35} onChange={(e) => setNote({...Note, t35: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="514" type="text" value={Note.t36} onChange={(e) => setNote({...Note, t36: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="515" type="text" value={Note.t37} onChange={(e) => setNote({...Note, t37: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="516" type="text" value={Note.t38} onChange={(e) => setNote({...Note, t38: e.target.value})} className="input_note_last"/></StyledTableCell>
               
            </TableRow>
        <TableRow>
                <StyledTableCell align="center"><input tabIndex="525" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t31 > 3 || Mob.t31 < 0 ? mobLimit31() : Mob.t31} onChange={(e) => setMob({...Mob, t31: e.target.value})} className={Lock.t31 !== 2 ? "input_mobility": "input_mobility_disabled"}/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="526" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t32 > 3 || Mob.t32 < 0 ? mobLimit32() : Mob.t32} onChange={(e) => setMob({...Mob, t32: e.target.value})} className={Lock.t32 !== 2 ? "input_mobility": "input_mobility_disabled"}/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="527" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t33 > 3 || Mob.t33 < 0 ? mobLimit33() : Mob.t33} onChange={(e) => setMob({...Mob, t33: e.target.value})} className={Lock.t33 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="528" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t34 > 3 || Mob.t34 < 0 ? mobLimit34() : Mob.t34} onChange={(e) => setMob({...Mob, t34: e.target.value})} className={Lock.t34 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="529" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t35 > 3 || Mob.t35 < 0 ? mobLimit35() : Mob.t35} onChange={(e) => setMob({...Mob, t35: e.target.value})} className={Lock.t35 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="530" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t36 > 3 || Mob.t36 < 0 ? mobLimit36() : Mob.t36} onChange={(e) => setMob({...Mob, t36: e.target.value})} className={Lock.t36 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="531" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t37 > 3 || Mob.t37 < 0 ? mobLimit37() : Mob.t37} onChange={(e) => setMob({...Mob, t37: e.target.value})} className={Lock.t37 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="532" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t38 > 3 || Mob.t38 < 0 ? mobLimit38() : Mob.t38} onChange={(e) => setMob({...Mob, t38: e.target.value})} className={Lock.t38 !== 2 ? "input_mobility_last": "input_mobility_disabled"} /></StyledTableCell>
               
            </TableRow>
        <TableRow>
            <StyledTableCell align="center"><StyledButton tabIndex="541" onClick={ Lock.t31 === 0 ? () => setLock({ ...Lock, t31: 1}): Lock.t31 === 1 ? dataLocker31 : () => setLock({ ...Lock, t31: 0})} size="large" ><img src={Lock.t31 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t31 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t31 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="542" onClick={ Lock.t32 === 0 ? () => setLock({ ...Lock, t32: 1}): Lock.t32 === 1 ? dataLocker32 : () => setLock({ ...Lock, t32: 0})} size="large" ><img src={Lock.t32 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t32 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t32 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="543" onClick={ Lock.t33 === 0 ? () => setLock({ ...Lock, t33: 1}): Lock.t33 === 1 ? dataLocker33 : () => setLock({ ...Lock, t33: 0})} size="large" ><img src={Lock.t33 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t33 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t33 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="544" onClick={ Lock.t34 === 0 ? () => setLock({ ...Lock, t34: 1}): Lock.t34 === 1 ? dataLocker34 : () => setLock({ ...Lock, t34: 0})} size="large" ><img src={Lock.t34 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t34 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t34 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="545" onClick={ Lock.t35 === 0 ? () => setLock({ ...Lock, t35: 1}): Lock.t35 === 1 ? dataLocker35 : () => setLock({ ...Lock, t35: 0})} size="large" ><img src={Lock.t35 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t35 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t35 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="546" onClick={ Lock.t36 === 0 ? implantLocker36 : Lock.t36 === 1 ? dataLocker36 : () => setLock({ ...Lock, t36: 0})} size="large" ><img src={Lock.t36 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t36 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t36 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="547" onClick={ Lock.t37 === 0 ? implantLocker37 : Lock.t37 === 1 ? dataLocker37 : () => setLock({ ...Lock, t37: 0})} size="large" ><img src={Lock.t37 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t37 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t37 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButtonLast tabIndex="548" onClick={ Lock.t38 === 0 ? implantLocker38 : Lock.t38 === 1 ? dataLocker38 : () => setLock({ ...Lock, t38: 0})} size="large" ><img src={Lock.t38 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t38 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t38 !== 0 ? classes.implant: classes.disabled}/></StyledButtonLast></StyledTableCell>
               
            </TableRow>
       <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="center">
                  <StyledButton tabIndex="552" onClick={furc_flow36()} size="large" className={Lock.t36 !== 0 ? classes.disable_furcation: null}>
                    <a className={Furc.FurcCount36 === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount36 === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount36 === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
                  </StyledButton>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <StyledButton tabIndex="553" onClick={furc_flow37()} size="large" className={Lock.t37 !== 0 ? classes.disable_furcation: null}>
                    <a className={Furc.FurcCount37 === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount37 === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount37 === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
                  </StyledButton>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <StyledButtonLast tabIndex="554" onClick={furc_flow38()} size="large" className={Lock.t38 !== 0 ? classes.disable_furcation: null}>
                    <a className={Furc.FurcCount38 === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount38 === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount38 === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
                  </StyledButtonLast>
                </StyledTableCell>
               
            </TableRow>
            <TableRow>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="579" onClick={ BoP.BoP31_1 === true ? () => setBoP({ ...BoP, BoP31_1: !BoP.BoP31_1, BoP_total_31: BoP.BoP_total_31 - 1}) : () => setBoP({ ...BoP, BoP31_1: !BoP.BoP31_1, BoP_total_31: BoP.BoP_total_31 + 1})} className={Lock.t31 !== 2 ? (BoP.BoP31_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="580" onClick={ BoP.BoP31_2 === true ? () => setBoP({ ...BoP, BoP31_2: !BoP.BoP31_2, BoP_total_31: BoP.BoP_total_31 - 1}) : () => setBoP({ ...BoP, BoP31_2: !BoP.BoP31_2, BoP_total_31: BoP.BoP_total_31 + 1})} className={Lock.t31 !== 2 ? (BoP.BoP31_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="581" onClick={ BoP.BoP31_3 === true ? () => setBoP({ ...BoP, BoP31_3: !BoP.BoP31_3, BoP_total_31: BoP.BoP_total_31 - 1}) : () => setBoP({ ...BoP, BoP31_3: !BoP.BoP31_3, BoP_total_31: BoP.BoP_total_31 + 1})} className={Lock.t31 !== 2 ? (BoP.BoP31_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="582" onClick={ BoP.BoP32_1 === true ? () => setBoP({ ...BoP, BoP32_1: !BoP.BoP32_1, BoP_total_32: BoP.BoP_total_32 - 1}) : () => setBoP({ ...BoP, BoP32_1: !BoP.BoP32_1, BoP_total_32: BoP.BoP_total_32 + 1})} className={Lock.t32 !== 2 ? (BoP.BoP32_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="583" onClick={ BoP.BoP32_2 === true ? () => setBoP({ ...BoP, BoP32_2: !BoP.BoP32_2, BoP_total_32: BoP.BoP_total_32 - 1}) : () => setBoP({ ...BoP, BoP32_2: !BoP.BoP32_2, BoP_total_32: BoP.BoP_total_32 + 1})} className={Lock.t32 !== 2 ? (BoP.BoP32_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="584" onClick={ BoP.BoP32_3 === true ? () => setBoP({ ...BoP, BoP32_3: !BoP.BoP32_3, BoP_total_32: BoP.BoP_total_32 - 1}) : () => setBoP({ ...BoP, BoP32_3: !BoP.BoP32_3, BoP_total_32: BoP.BoP_total_32 + 1})} className={Lock.t32 !== 2 ? (BoP.BoP32_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="585" onClick={ BoP.BoP33_1 === true ? () => setBoP({ ...BoP, BoP33_1: !BoP.BoP33_1, BoP_total_33: BoP.BoP_total_33 - 1}) : () => setBoP({ ...BoP, BoP33_1: !BoP.BoP33_1, BoP_total_33: BoP.BoP_total_33 + 1})} className={Lock.t33 !== 2 ? (BoP.BoP33_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="586" onClick={ BoP.BoP33_2 === true ? () => setBoP({ ...BoP, BoP33_2: !BoP.BoP33_2, BoP_total_33: BoP.BoP_total_33 - 1}) : () => setBoP({ ...BoP, BoP33_2: !BoP.BoP33_2, BoP_total_33: BoP.BoP_total_33 + 1})} className={Lock.t33 !== 2 ? (BoP.BoP33_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="587" onClick={ BoP.BoP33_3 === true ? () => setBoP({ ...BoP, BoP33_3: !BoP.BoP33_3, BoP_total_33: BoP.BoP_total_33 - 1}) : () => setBoP({ ...BoP, BoP33_3: !BoP.BoP33_3, BoP_total_33: BoP.BoP_total_33 + 1})} className={Lock.t33 !== 2 ? (BoP.BoP33_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="588" onClick={ BoP.BoP34_1 === true ? () => setBoP({ ...BoP, BoP34_1: !BoP.BoP34_1, BoP_total_34: BoP.BoP_total_34 - 1}) : () => setBoP({ ...BoP, BoP34_1: !BoP.BoP34_1, BoP_total_34: BoP.BoP_total_34 + 1})} className={Lock.t34 !== 2 ? (BoP.BoP34_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="589" onClick={ BoP.BoP34_2 === true ? () => setBoP({ ...BoP, BoP34_2: !BoP.BoP34_2, BoP_total_34: BoP.BoP_total_34 - 1}) : () => setBoP({ ...BoP, BoP34_2: !BoP.BoP34_2, BoP_total_34: BoP.BoP_total_34 + 1})} className={Lock.t34 !== 2 ? (BoP.BoP34_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="590" onClick={ BoP.BoP34_3 === true ? () => setBoP({ ...BoP, BoP34_3: !BoP.BoP34_3, BoP_total_34: BoP.BoP_total_34 - 1}) : () => setBoP({ ...BoP, BoP34_3: !BoP.BoP34_3, BoP_total_34: BoP.BoP_total_34 + 1})} className={Lock.t34 !== 2 ? (BoP.BoP34_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="591" onClick={ BoP.BoP35_1 === true ? () => setBoP({ ...BoP, BoP35_1: !BoP.BoP35_1, BoP_total_35: BoP.BoP_total_35 - 1}) : () => setBoP({ ...BoP, BoP35_1: !BoP.BoP35_1, BoP_total_35: BoP.BoP_total_35 + 1})} className={Lock.t35 !== 2 ? (BoP.BoP35_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="592" onClick={ BoP.BoP35_2 === true ? () => setBoP({ ...BoP, BoP35_2: !BoP.BoP35_2, BoP_total_35: BoP.BoP_total_35 - 1}) : () => setBoP({ ...BoP, BoP35_2: !BoP.BoP35_2, BoP_total_35: BoP.BoP_total_35 + 1})} className={Lock.t35 !== 2 ? (BoP.BoP35_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="593" onClick={ BoP.BoP35_3 === true ? () => setBoP({ ...BoP, BoP35_3: !BoP.BoP35_3, BoP_total_35: BoP.BoP_total_35 - 1}) : () => setBoP({ ...BoP, BoP35_3: !BoP.BoP35_3, BoP_total_35: BoP.BoP_total_35 + 1})} className={Lock.t35 !== 2 ? (BoP.BoP35_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="594" onClick={ BoP.BoP36_1 === true ? () => setBoP({ ...BoP, BoP36_1: !BoP.BoP36_1, BoP_total_36: BoP.BoP_total_36 - 1}) : () => setBoP({ ...BoP, BoP36_1: !BoP.BoP36_1, BoP_total_36: BoP.BoP_total_36 + 1})} className={Lock.t36 !== 2 ? (BoP.BoP36_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="595" onClick={ BoP.BoP36_2 === true ? () => setBoP({ ...BoP, BoP36_2: !BoP.BoP36_2, BoP_total_36: BoP.BoP_total_36 - 1}) : () => setBoP({ ...BoP, BoP36_2: !BoP.BoP36_2, BoP_total_36: BoP.BoP_total_36 + 1})} className={Lock.t36 !== 2 ? (BoP.BoP36_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="596" onClick={ BoP.BoP36_3 === true ? () => setBoP({ ...BoP, BoP36_3: !BoP.BoP36_3, BoP_total_36: BoP.BoP_total_36 - 1}) : () => setBoP({ ...BoP, BoP36_3: !BoP.BoP36_3, BoP_total_36: BoP.BoP_total_36 + 1})} className={Lock.t36 !== 2 ? (BoP.BoP36_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="597" onClick={ BoP.BoP37_1 === true ? () => setBoP({ ...BoP, BoP37_1: !BoP.BoP37_1, BoP_total_37: BoP.BoP_total_37 - 1}) : () => setBoP({ ...BoP, BoP37_1: !BoP.BoP37_1, BoP_total_37: BoP.BoP_total_37 + 1})} className={Lock.t37 !== 2 ? (BoP.BoP37_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="598" onClick={ BoP.BoP37_2 === true ? () => setBoP({ ...BoP, BoP37_2: !BoP.BoP37_2, BoP_total_37: BoP.BoP_total_37 - 1}) : () => setBoP({ ...BoP, BoP37_2: !BoP.BoP37_2, BoP_total_37: BoP.BoP_total_37 + 1})} className={Lock.t37 !== 2 ? (BoP.BoP37_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="599" onClick={ BoP.BoP37_3 === true ? () => setBoP({ ...BoP, BoP37_3: !BoP.BoP37_3, BoP_total_37: BoP.BoP_total_37 - 1}) : () => setBoP({ ...BoP, BoP37_3: !BoP.BoP37_3, BoP_total_37: BoP.BoP_total_37 + 1})} className={Lock.t37 !== 2 ? (BoP.BoP37_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="600" onClick={ BoP.BoP38_1 === true ? () => setBoP({ ...BoP, BoP38_1: !BoP.BoP38_1, BoP_total_38: BoP.BoP_total_38 - 1}) : () => setBoP({ ...BoP, BoP38_1: !BoP.BoP38_1, BoP_total_38: BoP.BoP_total_38 + 1})} className={Lock.t38 !== 2 ? (BoP.BoP38_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="601" onClick={ BoP.BoP38_2 === true ? () => setBoP({ ...BoP, BoP38_2: !BoP.BoP38_2, BoP_total_38: BoP.BoP_total_38 - 1}) : () => setBoP({ ...BoP, BoP38_2: !BoP.BoP38_2, BoP_total_38: BoP.BoP_total_38 + 1})} className={Lock.t38 !== 2 ? (BoP.BoP38_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="602" onClick={ BoP.BoP38_3 === true ? () => setBoP({ ...BoP, BoP38_3: !BoP.BoP38_3, BoP_total_38: BoP.BoP_total_38 - 1}) : () => setBoP({ ...BoP, BoP38_3: !BoP.BoP38_3, BoP_total_38: BoP.BoP_total_38 + 1})} className={Lock.t38 !== 2 ? (BoP.BoP38_3 ? classes.small_btn_3_bop_lst : classes.small_btn_3_lst) : classes.disable_furcation} /></div></StyledTableCell>
           
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="627" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t31_1 > 15 || GM.t31_1 < (-10) ? gmLimit31() : GM.t31_1} onChange={(e) => setGM({...GM, t31_1: e.target.value})} className={Lock.t31 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="628" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t31_2 > 15 || GM.t31_2 < (-10) ? gmLimit31() : GM.t31_2} onChange={(e) => setGM({...GM, t31_2: e.target.value})}  className={Lock.t31 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="629" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t31_3 > 15 || GM.t31_3 < (-10) ? gmLimit31() : GM.t31_3} onChange={(e) => setGM({...GM, t31_3: e.target.value})} className={Lock.t31 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="630" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t32_1 > 15 || GM.t32_1 < (-10) ? gmLimit32() : GM.t32_1} onChange={(e) => setGM({...GM, t32_1: e.target.value})} className={Lock.t32 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="631" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t32_2 > 15 || GM.t32_2 < (-10) ? gmLimit32() : GM.t32_2} onChange={(e) => setGM({...GM, t32_2: e.target.value})}  className={Lock.t32 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="632" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t32_3 > 15 || GM.t32_3 < (-10) ? gmLimit32() : GM.t32_3} onChange={(e) => setGM({...GM, t32_3: e.target.value})} className={Lock.t32 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="633" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t33_1 > 15 || GM.t33_1 < (-10) ? gmLimit33() : GM.t33_1} onChange={(e) => setGM({...GM, t33_1: e.target.value})} className={Lock.t33 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="634" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t33_2 > 15 || GM.t33_2 < (-10) ? gmLimit33() : GM.t33_2} onChange={(e) => setGM({...GM, t33_2: e.target.value})}  className={Lock.t33 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="635" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t33_3 > 15 || GM.t33_3 < (-10) ? gmLimit33() : GM.t33_3} onChange={(e) => setGM({...GM, t33_3: e.target.value})} className={Lock.t33 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="636" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t34_1 > 15 || GM.t34_1 < (-10) ? gmLimit34() : GM.t34_1} onChange={(e) => setGM({...GM, t34_1: e.target.value})} className={Lock.t34 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="637" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t34_2 > 15 || GM.t34_2 < (-10) ? gmLimit34() : GM.t34_2} onChange={(e) => setGM({...GM, t34_2: e.target.value})}  className={Lock.t34 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="638"onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t34_3 > 15 || GM.t34_3 < (-10) ? gmLimit34() : GM.t34_3} onChange={(e) => setGM({...GM, t34_3: e.target.value})} className={Lock.t34 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="639" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t35_1 > 15 || GM.t35_1 < (-10) ? gmLimit35() : GM.t35_1} onChange={(e) => setGM({...GM, t35_1: e.target.value})} className={Lock.t35 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="640" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t35_2 > 15 || GM.t35_2 < (-10) ? gmLimit35() : GM.t35_2} onChange={(e) => setGM({...GM, t35_2: e.target.value})}  className={Lock.t35 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="641" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t35_3 > 15 || GM.t35_3 < (-10) ? gmLimit35() : GM.t35_3} onChange={(e) => setGM({...GM, t35_3: e.target.value})} className={Lock.t35 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="642" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t36_1 > 15 || GM.t36_1 < (-10) ? gmLimit36() : GM.t36_1} onChange={(e) => setGM({...GM, t36_1: e.target.value})} className={Lock.t36 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="643" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t36_2 > 15 || GM.t36_2 < (-10) ? gmLimit36() : GM.t36_2} onChange={(e) => setGM({...GM, t36_2: e.target.value})}  className={Lock.t36 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="644" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t36_3 > 15 || GM.t36_3 < (-10) ? gmLimit36() : GM.t36_3} onChange={(e) => setGM({...GM, t36_3: e.target.value})} className={Lock.t36 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="645" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t37_1 > 15 || GM.t37_1 < (-10) ? gmLimit37() : GM.t37_1} onChange={(e) => setGM({...GM, t37_1: e.target.value})} className={Lock.t37 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="646" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t37_2 > 15 || GM.t37_2 < (-10) ? gmLimit37() : GM.t37_2} onChange={(e) => setGM({...GM, t37_2: e.target.value})}  className={Lock.t37 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="647" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t37_3 > 15 || GM.t37_3 < (-10) ? gmLimit37() : GM.t37_3} onChange={(e) => setGM({...GM, t37_3: e.target.value})} className={Lock.t37 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="648" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t38_1 > 15 || GM.t38_1 < (-10) ? gmLimit38() : GM.t38_1} onChange={(e) => setGM({...GM, t38_1: e.target.value})} className={Lock.t38 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="649" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t38_2 > 15 || GM.t38_2 < (-10) ? gmLimit38() : GM.t38_2} onChange={(e) => setGM({...GM, t38_2: e.target.value})}  className={Lock.t38 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="650" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t38_3 > 15 || GM.t38_3 < (-10) ? gmLimit38() : GM.t38_3} onChange={(e) => setGM({...GM, t38_3: e.target.value})} className={Lock.t38 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
           
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="677" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p31_1 > 15 || Probe.p31_1 < 0 ? ProbeLimit31() : Probe.p31_1} onChange={(e) => setProbe({...Probe, p31_1: e.target.value})} className={Lock.t31 !== 2 ? (((Probe.p31_1 == 4 && BoP.BoP31_1) || Probe.p31_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="678" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p31_2 > 15 || Probe.p31_2 < 0 ? ProbeLimit31() : Probe.p31_2} onChange={(e) => setProbe({...Probe, p31_2: e.target.value})}  className={Lock.t31 !== 2 ? (((Probe.p31_2 == 4 && BoP.BoP31_2) || Probe.p31_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="679" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p31_3 > 15 || Probe.p31_3 < 0 ? ProbeLimit31() : Probe.p31_3} onChange={(e) => setProbe({...Probe, p31_3: e.target.value})} className={Lock.t31 !== 2 ? (((Probe.p31_3 == 4 && BoP.BoP31_3) || Probe.p31_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="680" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p32_1 > 15 || Probe.p32_1 < 0 ? ProbeLimit32() : Probe.p32_1} onChange={(e) => setProbe({...Probe, p32_1: e.target.value})} className={Lock.t32 !== 2 ? (((Probe.p32_1 == 4 && BoP.BoP32_1) || Probe.p32_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="681" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p32_2 > 15 || Probe.p32_2 < 0 ? ProbeLimit32() : Probe.p32_2} onChange={(e) => setProbe({...Probe, p32_2: e.target.value})}  className={Lock.t32 !== 2 ? (((Probe.p32_2 == 4 && BoP.BoP32_2) || Probe.p32_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="682" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p32_3 > 15 || Probe.p32_3 < 0 ? ProbeLimit32() : Probe.p32_3} onChange={(e) => setProbe({...Probe, p32_3: e.target.value})} className={Lock.t32 !== 2 ? (((Probe.p32_3 == 4 && BoP.BoP32_3) || Probe.p32_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="683" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p33_1 > 15 || Probe.p33_1 < 0 ? ProbeLimit33() : Probe.p33_1} onChange={(e) => setProbe({...Probe, p33_1: e.target.value})} className={Lock.t33 !== 2 ? (((Probe.p33_1 == 4 && BoP.BoP33_1) || Probe.p33_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="684" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p33_2 > 15 || Probe.p33_2 < 0 ? ProbeLimit33() : Probe.p33_2} onChange={(e) => setProbe({...Probe, p33_2: e.target.value})}  className={Lock.t33 !== 2 ? (((Probe.p33_2 == 4 && BoP.BoP33_2) || Probe.p33_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="685" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p33_3 > 15 || Probe.p33_3 < 0 ? ProbeLimit33() : Probe.p33_3} onChange={(e) => setProbe({...Probe, p33_3: e.target.value})} className={Lock.t33 !== 2 ? (((Probe.p33_3 == 4 && BoP.BoP33_3) || Probe.p33_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="686" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p34_1 > 15 || Probe.p34_1 < 0 ? ProbeLimit34() : Probe.p34_1} onChange={(e) => setProbe({...Probe, p34_1: e.target.value})} className={Lock.t34 !== 2 ? (((Probe.p34_1 == 4 && BoP.BoP34_1) || Probe.p34_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="687" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p34_2 > 15 || Probe.p34_2 < 0 ? ProbeLimit34() : Probe.p34_2} onChange={(e) => setProbe({...Probe, p34_2: e.target.value})}  className={Lock.t34 !== 2 ? (((Probe.p34_2 == 4 && BoP.BoP34_2) || Probe.p34_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="688" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p34_3 > 15 || Probe.p34_3 < 0 ? ProbeLimit34() : Probe.p34_3} onChange={(e) => setProbe({...Probe, p34_3: e.target.value})} className={Lock.t34 !== 2 ? (((Probe.p34_3 == 4 && BoP.BoP34_3) || Probe.p34_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="689" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p35_1 > 15 || Probe.p35_1 < 0 ? ProbeLimit35() : Probe.p35_1} onChange={(e) => setProbe({...Probe, p35_1: e.target.value})} className={Lock.t35 !== 2 ? (((Probe.p35_1 == 4 && BoP.BoP35_1) || Probe.p35_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="690" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p35_2 > 15 || Probe.p35_2 < 0 ? ProbeLimit35() : Probe.p35_2} onChange={(e) => setProbe({...Probe, p35_2: e.target.value})}  className={Lock.t35 !== 2 ? (((Probe.p35_2 == 4 && BoP.BoP35_2) || Probe.p35_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="691" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p35_3 > 15 || Probe.p35_3 < 0 ? ProbeLimit35() : Probe.p35_3} onChange={(e) => setProbe({...Probe, p35_3: e.target.value})} className={Lock.t35 !== 2 ? (((Probe.p35_3 == 4 && BoP.BoP35_3) || Probe.p35_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="692" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p36_1 > 15 || Probe.p36_1 < 0 ? ProbeLimit36() : Probe.p36_1} onChange={(e) => setProbe({...Probe, p36_1: e.target.value})} className={Lock.t36 !== 2 ? (((Probe.p36_1 == 4 && BoP.BoP36_1) || Probe.p36_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="693" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p36_2 > 15 || Probe.p36_2 < 0 ? ProbeLimit36() : Probe.p36_2} onChange={(e) => setProbe({...Probe, p36_2: e.target.value})}  className={Lock.t36 !== 2 ? (((Probe.p36_2 == 4 && BoP.BoP36_2) || Probe.p36_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="694" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p36_3 > 15 || Probe.p36_3 < 0 ? ProbeLimit36() : Probe.p36_3} onChange={(e) => setProbe({...Probe, p36_3: e.target.value})} className={Lock.t36 !== 2 ? (((Probe.p36_3 == 4 && BoP.BoP36_3) || Probe.p36_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="695" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p37_1 > 15 || Probe.p37_1 < 0 ? ProbeLimit37() : Probe.p37_1} onChange={(e) => setProbe({...Probe, p37_1: e.target.value})} className={Lock.t37 !== 2 ? (((Probe.p37_1 == 4 && BoP.BoP37_1) || Probe.p37_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="696" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p37_2 > 15 || Probe.p37_2 < 0 ? ProbeLimit37() : Probe.p37_2} onChange={(e) => setProbe({...Probe, p37_2: e.target.value})}  className={Lock.t37 !== 2 ? (((Probe.p37_2 == 4 && BoP.BoP37_2) || Probe.p37_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="697" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p37_3 > 15 || Probe.p37_3 < 0 ? ProbeLimit37() : Probe.p37_3} onChange={(e) => setProbe({...Probe, p37_3: e.target.value})} className={Lock.t37 !== 2 ? (((Probe.p37_3 == 4 && BoP.BoP37_3) || Probe.p37_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="698" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p38_1 > 15 || Probe.p38_1 < 0 ? ProbeLimit38() : Probe.p38_1} onChange={(e) => setProbe({...Probe, p38_1: e.target.value})} className={Lock.t38 !== 2 ? (((Probe.p38_1 == 4 && BoP.BoP38_1) || Probe.p38_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="699" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p38_2 > 15 || Probe.p38_2 < 0 ? ProbeLimit38() : Probe.p38_2} onChange={(e) => setProbe({...Probe, p38_2: e.target.value})}  className={Lock.t38 !== 2 ? (((Probe.p38_2 == 4 && BoP.BoP38_2) || Probe.p38_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="700" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p38_3 > 15 || Probe.p38_3 < 0 ? ProbeLimit38() : Probe.p38_3} onChange={(e) => setProbe({...Probe, p38_3: e.target.value})} className={Lock.t38 !== 2 ? (((Probe.p38_3 == 4 && BoP.BoP38_3) || Probe.p38_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
           
        </TableRow>
        <TableRow>
        <ImgCell className={classes.img_change} onClick={ Lock.t31 === 0 ? () => setLock({ ...Lock, t31: 1}): Lock.t31 === 1 ? dataLocker31 : () => setLock({ ...Lock, t31: 0})}><img src={Lock.t31 === 0 ? process.env.PUBLIC_URL + 'Teeth/31.png': Lock.t31 === 1 ? process.env.PUBLIC_URL + 'Teeth/31i.png': process.env.PUBLIC_URL + 'Teeth/31x.png'} className={classes.tooth_img_21} />
                      <svg className={Lock.t31 !== 2  ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_31" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t31 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_31" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t31 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_31" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t31 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_31_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t31 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_31" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t31 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_31_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t32 === 0 ? () => setLock({ ...Lock, t32: 1}): Lock.t32 === 1 ? dataLocker32 : () => setLock({ ...Lock, t32: 0})}><img src={Lock.t32 === 0 ? process.env.PUBLIC_URL + 'Teeth/32.png': Lock.t32 === 1 ? process.env.PUBLIC_URL + 'Teeth/32i.png': process.env.PUBLIC_URL + 'Teeth/32x.png'} className={classes.tooth_img_22} />
                      <svg className={Lock.t32 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_32" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t32 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_32" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t32 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_32" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t32 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_32_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t32 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_32" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t32 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_32_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t33 === 0 ? () => setLock({ ...Lock, t33: 1}): Lock.t33 === 1 ? dataLocker33 : () => setLock({ ...Lock, t33: 0})}><img src={Lock.t33 === 0 ? process.env.PUBLIC_URL + 'Teeth/33.png': Lock.t33 === 1 ? process.env.PUBLIC_URL + 'Teeth/33i.png': process.env.PUBLIC_URL + 'Teeth/33x.png'} className={classes.tooth_img_23} />
                      <svg className={Lock.t33 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_33" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t33 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_33" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t33 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_33" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t33 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_33_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t33 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_33" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t33 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_33_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t34 === 0 ? () => setLock({ ...Lock, t34: 1}): Lock.t34 === 1 ? dataLocker34 : () => setLock({ ...Lock, t34: 0})}><img src={Lock.t34 === 0 ? process.env.PUBLIC_URL + 'Teeth/34.png': Lock.t34 === 1 ? process.env.PUBLIC_URL + 'Teeth/34i.png': process.env.PUBLIC_URL + 'Teeth/34x.png'} className={classes.tooth_img_24} />
                      <svg className={Lock.t34 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_34" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t34 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_34" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t34 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_34" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t34 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_34_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t34 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_34" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t34 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_34_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t35 === 0 ? () => setLock({ ...Lock, t35: 1}): Lock.t35 === 1 ? dataLocker35 : () => setLock({ ...Lock, t35: 0})}><img src={Lock.t35 === 0 ? process.env.PUBLIC_URL + 'Teeth/35.png': Lock.t35 === 1 ? process.env.PUBLIC_URL + 'Teeth/35i.png': process.env.PUBLIC_URL + 'Teeth/35x.png'} className={classes.tooth_img_25} />
                      <svg className={Lock.t35 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_35" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t35 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_35" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t35 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_35" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t35 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_35_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t35 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_35" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t35 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_35_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t36 === 0 ? implantLocker36 : Lock.t36 === 1 ? dataLocker36 : () => setLock({ ...Lock, t36: 0})}><img src={Lock.t36 === 0 ? process.env.PUBLIC_URL + 'Teeth/36.png': Lock.t36 === 1 ? process.env.PUBLIC_URL + 'Teeth/36i.png': process.env.PUBLIC_URL + 'Teeth/36x.png'} className={classes.tooth_img_26} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t36 === 0 && Furc.FurcCount36 === 1 ? classes.furc_img_26: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t36 === 0 && Furc.FurcCount36 === 2 ? classes.furc_img_26: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t36 === 0 && Furc.FurcCount36 === 3 ? classes.furc_img_26: classes.disabled}/>
                      <svg className={Lock.t36 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_36" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t36 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_36" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t36 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_36" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t36 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_36_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t36 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_36" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t36 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_36_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t37 === 0 ? implantLocker37 : Lock.t37 === 1 ? dataLocker37 : () => setLock({ ...Lock, t37: 0})}><img src={Lock.t37 === 0 ? process.env.PUBLIC_URL + 'Teeth/37.png': Lock.t37 === 1 ? process.env.PUBLIC_URL + 'Teeth/37i.png': process.env.PUBLIC_URL + 'Teeth/37x.png'} className={classes.tooth_img_27} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t37 === 0 && Furc.FurcCount37 === 1 ? classes.furc_img_27: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t37 === 0 && Furc.FurcCount37 === 2 ? classes.furc_img_27: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t37 === 0 && Furc.FurcCount37 === 3 ? classes.furc_img_27: classes.disabled}/>
                      <svg className={Lock.t37 !== 2  ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_37" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t37 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_37" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t37 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_37" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t37 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_37_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t37 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_37" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t37 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_37_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t38 === 0 ? implantLocker38 : Lock.t38 === 1 ? dataLocker38 : () => setLock({ ...Lock, t38: 0})}><img src={Lock.t38 === 0 ? process.env.PUBLIC_URL + 'Teeth/38.png': Lock.t38 === 1 ? process.env.PUBLIC_URL + 'Teeth/38i.png': process.env.PUBLIC_URL + 'Teeth/38x.png'} className={classes.tooth_img_28} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t38 === 0 && Furc.FurcCount38 === 1 ? classes.furc_img_28: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t38 === 0 && Furc.FurcCount38 === 2 ? classes.furc_img_28: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t38 === 0 && Furc.FurcCount38 === 3 ? classes.furc_img_28: classes.disabled}/>
                      <svg className={Lock.t38 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_38" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t38 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_38" display="none"/></svg>
                      <svg className={Lock.t38 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_38" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t38 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_38_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t38 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_38" display="none"/></svg>
                      <svg className={Lock.t38 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_38_attachment" display="none"/></svg>
            <ToothLines1 />
            
          </ImgCell>
         
        </TableRow>
        <TableRow><SpaceCell></SpaceCell></TableRow>
        <TableRow>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="724" onClick={ Plague.Plague31_1 === true ? () => setPlague({ ...Plague, Plague31_1: !Plague.Plague31_1, Plague_total_31: Plague.Plague_total_31 - 1}) : () => setPlague({ ...Plague, Plague31_1: !Plague.Plague31_1, Plague_total_31: Plague.Plague_total_31 + 1})} className={Lock.t31 !== 2 ? (Plague.Plague31_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="725" onClick={ Plague.Plague31_2 === true ? () => setPlague({ ...Plague, Plague31_2: !Plague.Plague31_2, Plague_total_31: Plague.Plague_total_31 - 1}) : () => setPlague({ ...Plague, Plague31_2: !Plague.Plague31_2, Plague_total_31: Plague.Plague_total_31 + 1})} className={Lock.t31 !== 2 ? (Plague.Plague31_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="726" onClick={ Plague.Plague31_3 === true ? () => setPlague({ ...Plague, Plague31_3: !Plague.Plague31_3, Plague_total_31: Plague.Plague_total_31 - 1}) : () => setPlague({ ...Plague, Plague31_3: !Plague.Plague31_3, Plague_total_31: Plague.Plague_total_31 + 1})} className={Lock.t31 !== 2 ? (Plague.Plague31_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="727" onClick={ Plague.Plague32_1 === true ? () => setPlague({ ...Plague, Plague32_1: !Plague.Plague32_1, Plague_total_32: Plague.Plague_total_32 - 1}) : () => setPlague({ ...Plague, Plague32_1: !Plague.Plague32_1, Plague_total_32: Plague.Plague_total_32 + 1})} className={Lock.t32 !== 2 ? (Plague.Plague32_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="728" onClick={ Plague.Plague32_2 === true ? () => setPlague({ ...Plague, Plague32_2: !Plague.Plague32_2, Plague_total_32: Plague.Plague_total_32 - 1}) : () => setPlague({ ...Plague, Plague32_2: !Plague.Plague32_2, Plague_total_32: Plague.Plague_total_32 + 1})} className={Lock.t32 !== 2 ? (Plague.Plague32_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="729" onClick={ Plague.Plague32_3 === true ? () => setPlague({ ...Plague, Plague32_3: !Plague.Plague32_3, Plague_total_32: Plague.Plague_total_32 - 1}) : () => setPlague({ ...Plague, Plague32_3: !Plague.Plague32_3, Plague_total_32: Plague.Plague_total_32 + 1})} className={Lock.t32 !== 2 ? (Plague.Plague32_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="730" onClick={ Plague.Plague33_1 === true ? () => setPlague({ ...Plague, Plague33_1: !Plague.Plague33_1, Plague_total_33: Plague.Plague_total_33 - 1}) : () => setPlague({ ...Plague, Plague33_1: !Plague.Plague33_1, Plague_total_33: Plague.Plague_total_33 + 1})} className={Lock.t33 !== 2 ? (Plague.Plague33_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="731" onClick={ Plague.Plague33_2 === true ? () => setPlague({ ...Plague, Plague33_2: !Plague.Plague33_2, Plague_total_33: Plague.Plague_total_33 - 1}) : () => setPlague({ ...Plague, Plague33_2: !Plague.Plague33_2, Plague_total_33: Plague.Plague_total_33 + 1})} className={Lock.t33 !== 2 ? (Plague.Plague33_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="732" onClick={ Plague.Plague33_3 === true ? () => setPlague({ ...Plague, Plague33_3: !Plague.Plague33_3, Plague_total_33: Plague.Plague_total_33 - 1}) : () => setPlague({ ...Plague, Plague33_3: !Plague.Plague33_3, Plague_total_33: Plague.Plague_total_33 + 1})} className={Lock.t33 !== 2 ? (Plague.Plague33_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="733" onClick={ Plague.Plague34_1 === true ? () => setPlague({ ...Plague, Plague34_1: !Plague.Plague34_1, Plague_total_34: Plague.Plague_total_34 - 1}) : () => setPlague({ ...Plague, Plague34_1: !Plague.Plague34_1, Plague_total_34: Plague.Plague_total_34 + 1})} className={Lock.t34 !== 2 ? (Plague.Plague34_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="734" onClick={ Plague.Plague34_2 === true ? () => setPlague({ ...Plague, Plague34_2: !Plague.Plague34_2, Plague_total_34: Plague.Plague_total_34 - 1}) : () => setPlague({ ...Plague, Plague34_2: !Plague.Plague34_2, Plague_total_34: Plague.Plague_total_34 + 1})} className={Lock.t34 !== 2 ? (Plague.Plague34_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="735" onClick={ Plague.Plague34_3 === true ? () => setPlague({ ...Plague, Plague34_3: !Plague.Plague34_3, Plague_total_34: Plague.Plague_total_34 - 1}) : () => setPlague({ ...Plague, Plague34_3: !Plague.Plague34_3, Plague_total_34: Plague.Plague_total_34 + 1})} className={Lock.t34 !== 2 ? (Plague.Plague34_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="736" onClick={ Plague.Plague35_1 === true ? () => setPlague({ ...Plague, Plague35_1: !Plague.Plague35_1, Plague_total_35: Plague.Plague_total_35 - 1}) : () => setPlague({ ...Plague, Plague35_1: !Plague.Plague35_1, Plague_total_35: Plague.Plague_total_35 + 1})} className={Lock.t35 !== 2 ? (Plague.Plague35_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="737" onClick={ Plague.Plague35_2 === true ? () => setPlague({ ...Plague, Plague35_2: !Plague.Plague35_2, Plague_total_35: Plague.Plague_total_35 - 1}) : () => setPlague({ ...Plague, Plague35_2: !Plague.Plague35_2, Plague_total_35: Plague.Plague_total_35 + 1})} className={Lock.t35 !== 2 ? (Plague.Plague35_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="738" onClick={ Plague.Plague35_3 === true ? () => setPlague({ ...Plague, Plague35_3: !Plague.Plague35_3, Plague_total_35: Plague.Plague_total_35 - 1}) : () => setPlague({ ...Plague, Plague35_3: !Plague.Plague35_3, Plague_total_35: Plague.Plague_total_35 + 1})} className={Lock.t35 !== 2 ? (Plague.Plague35_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="739" onClick={ Plague.Plague36_1 === true ? () => setPlague({ ...Plague, Plague36_1: !Plague.Plague36_1, Plague_total_36: Plague.Plague_total_36 - 1}) : () => setPlague({ ...Plague, Plague36_1: !Plague.Plague36_1, Plague_total_36: Plague.Plague_total_36 + 1})} className={Lock.t36 !== 2 ? (Plague.Plague36_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="740" onClick={ Plague.Plague36_2 === true ? () => setPlague({ ...Plague, Plague36_2: !Plague.Plague36_2, Plague_total_36: Plague.Plague_total_36 - 1}) : () => setPlague({ ...Plague, Plague36_2: !Plague.Plague36_2, Plague_total_36: Plague.Plague_total_36 + 1})} className={Lock.t36 !== 2 ? (Plague.Plague36_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="741" onClick={ Plague.Plague36_3 === true ? () => setPlague({ ...Plague, Plague36_3: !Plague.Plague36_3, Plague_total_36: Plague.Plague_total_36 - 1}) : () => setPlague({ ...Plague, Plague36_3: !Plague.Plague36_3, Plague_total_36: Plague.Plague_total_36 + 1})} className={Lock.t36 !== 2 ? (Plague.Plague36_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="742" onClick={ Plague.Plague37_1 === true ? () => setPlague({ ...Plague, Plague37_1: !Plague.Plague37_1, Plague_total_37: Plague.Plague_total_37 - 1}) : () => setPlague({ ...Plague, Plague37_1: !Plague.Plague37_1, Plague_total_37: Plague.Plague_total_37 + 1})} className={Lock.t37 !== 2 ? (Plague.Plague37_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="743" onClick={ Plague.Plague37_2 === true ? () => setPlague({ ...Plague, Plague37_2: !Plague.Plague37_2, Plague_total_37: Plague.Plague_total_37 - 1}) : () => setPlague({ ...Plague, Plague37_2: !Plague.Plague37_2, Plague_total_37: Plague.Plague_total_37 + 1})} className={Lock.t37 !== 2 ? (Plague.Plague37_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="744" onClick={ Plague.Plague37_3 === true ? () => setPlague({ ...Plague, Plague37_3: !Plague.Plague37_3, Plague_total_37: Plague.Plague_total_37 - 1}) : () => setPlague({ ...Plague, Plague37_3: !Plague.Plague37_3, Plague_total_37: Plague.Plague_total_37 + 1})} className={Lock.t37 !== 2 ? (Plague.Plague37_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="745" onClick={ Plague.Plague38_1 === true ? () => setPlague({ ...Plague, Plague38_1: !Plague.Plague38_1, Plague_total_38: Plague.Plague_total_38 - 1}) : () => setPlague({ ...Plague, Plague38_1: !Plague.Plague38_1, Plague_total_38: Plague.Plague_total_38 + 1})} className={Lock.t38 !== 2 ? (Plague.Plague38_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="746" onClick={ Plague.Plague38_2 === true ? () => setPlague({ ...Plague, Plague38_2: !Plague.Plague38_2, Plague_total_38: Plague.Plague_total_38 - 1}) : () => setPlague({ ...Plague, Plague38_2: !Plague.Plague38_2, Plague_total_38: Plague.Plague_total_38 + 1})} className={Lock.t38 !== 2 ? (Plague.Plague38_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="747" onClick={ Plague.Plague38_3 === true ? () => setPlague({ ...Plague, Plague38_3: !Plague.Plague38_3, Plague_total_38: Plague.Plague_total_38 - 1}) : () => setPlague({ ...Plague, Plague38_3: !Plague.Plague38_3, Plague_total_38: Plague.Plague_total_38 + 1})} className={Lock.t38 !== 2 ? (Plague.Plague38_3 ? classes.small_btn_3_Plague_lst : classes.small_btn_3_lst) : classes.disable_furcation} /></div></PlagueTableCell>
           
        </TableRow>
        <TableRow>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="772" onClick={ Plague.Plague31_1_lg === true ? () => setPlague({ ...Plague, Plague31_1_lg: !Plague.Plague31_1_lg, Plague_total_31: Plague.Plague_total_31 - 1}) : () => setPlague({ ...Plague, Plague31_1_lg: !Plague.Plague31_1_lg, Plague_total_31: Plague.Plague_total_31 + 1})} className={Lock.t31 !== 2 ? (Plague.Plague31_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="773" onClick={ Plague.Plague31_2_lg === true ? () => setPlague({ ...Plague, Plague31_2_lg: !Plague.Plague31_2_lg, Plague_total_31: Plague.Plague_total_31 - 1}) : () => setPlague({ ...Plague, Plague31_2_lg: !Plague.Plague31_2_lg, Plague_total_31: Plague.Plague_total_31 + 1})} className={Lock.t31 !== 2 ? (Plague.Plague31_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="774" onClick={ Plague.Plague31_3_lg === true ? () => setPlague({ ...Plague, Plague31_3_lg: !Plague.Plague31_3_lg, Plague_total_31: Plague.Plague_total_31 - 1}) : () => setPlague({ ...Plague, Plague31_3_lg: !Plague.Plague31_3_lg, Plague_total_31: Plague.Plague_total_31 + 1})} className={Lock.t31 !== 2 ? (Plague.Plague31_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="775" onClick={ Plague.Plague32_1_lg === true ? () => setPlague({ ...Plague, Plague32_1_lg: !Plague.Plague32_1_lg, Plague_total_32: Plague.Plague_total_32 - 1}) : () => setPlague({ ...Plague, Plague32_1_lg: !Plague.Plague32_1_lg, Plague_total_32: Plague.Plague_total_32 + 1})} className={Lock.t32 !== 2 ? (Plague.Plague32_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="776" onClick={ Plague.Plague32_2_lg === true ? () => setPlague({ ...Plague, Plague32_2_lg: !Plague.Plague32_2_lg, Plague_total_32: Plague.Plague_total_32 - 1}) : () => setPlague({ ...Plague, Plague32_2_lg: !Plague.Plague32_2_lg, Plague_total_32: Plague.Plague_total_32 + 1})} className={Lock.t32 !== 2 ? (Plague.Plague32_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="777" onClick={ Plague.Plague32_3_lg === true ? () => setPlague({ ...Plague, Plague32_3_lg: !Plague.Plague32_3_lg, Plague_total_32: Plague.Plague_total_32 - 1}) : () => setPlague({ ...Plague, Plague32_3_lg: !Plague.Plague32_3_lg, Plague_total_32: Plague.Plague_total_32 + 1})} className={Lock.t32 !== 2 ? (Plague.Plague32_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="778" onClick={ Plague.Plague33_1_lg === true ? () => setPlague({ ...Plague, Plague33_1_lg: !Plague.Plague33_1_lg, Plague_total_33: Plague.Plague_total_33 - 1}) : () => setPlague({ ...Plague, Plague33_1_lg: !Plague.Plague33_1_lg, Plague_total_33: Plague.Plague_total_33 + 1})} className={Lock.t33 !== 2 ? (Plague.Plague33_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="779"onClick={ Plague.Plague33_2_lg === true ? () => setPlague({ ...Plague, Plague33_2_lg: !Plague.Plague33_2_lg, Plague_total_33: Plague.Plague_total_33 - 1}) : () => setPlague({ ...Plague, Plague33_2_lg: !Plague.Plague33_2_lg, Plague_total_33: Plague.Plague_total_33 + 1})} className={Lock.t33 !== 2 ? (Plague.Plague33_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="780" onClick={ Plague.Plague33_3_lg === true ? () => setPlague({ ...Plague, Plague33_3_lg: !Plague.Plague33_3_lg, Plague_total_33: Plague.Plague_total_33 - 1}) : () => setPlague({ ...Plague, Plague33_3_lg: !Plague.Plague33_3_lg, Plague_total_33: Plague.Plague_total_33 + 1})} className={Lock.t33 !== 2 ? (Plague.Plague33_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="781" onClick={ Plague.Plague34_1_lg === true ? () => setPlague({ ...Plague, Plague34_1_lg: !Plague.Plague34_1_lg, Plague_total_34: Plague.Plague_total_34 - 1}) : () => setPlague({ ...Plague, Plague34_1_lg: !Plague.Plague34_1_lg, Plague_total_34: Plague.Plague_total_34 + 1})} className={Lock.t34 !== 2 ? (Plague.Plague34_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="782"onClick={ Plague.Plague34_2_lg === true ? () => setPlague({ ...Plague, Plague34_2_lg: !Plague.Plague34_2_lg, Plague_total_34: Plague.Plague_total_34 - 1}) : () => setPlague({ ...Plague, Plague34_2_lg: !Plague.Plague34_2_lg, Plague_total_34: Plague.Plague_total_34 + 1})} className={Lock.t34 !== 2 ? (Plague.Plague34_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="783" onClick={ Plague.Plague34_3_lg === true ? () => setPlague({ ...Plague, Plague34_3_lg: !Plague.Plague34_3_lg, Plague_total_34: Plague.Plague_total_34 - 1}) : () => setPlague({ ...Plague, Plague34_3_lg: !Plague.Plague34_3_lg, Plague_total_34: Plague.Plague_total_34 + 1})} className={Lock.t34 !== 2 ? (Plague.Plague34_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="784" onClick={ Plague.Plague35_1_lg === true ? () => setPlague({ ...Plague, Plague35_1_lg: !Plague.Plague35_1_lg, Plague_total_35: Plague.Plague_total_35 - 1}) : () => setPlague({ ...Plague, Plague35_1_lg: !Plague.Plague35_1_lg, Plague_total_35: Plague.Plague_total_35 + 1})} className={Lock.t35 !== 2 ? (Plague.Plague35_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="785" onClick={ Plague.Plague35_2_lg === true ? () => setPlague({ ...Plague, Plague35_2_lg: !Plague.Plague35_2_lg, Plague_total_35: Plague.Plague_total_35 - 1}) : () => setPlague({ ...Plague, Plague35_2_lg: !Plague.Plague35_2_lg, Plague_total_35: Plague.Plague_total_35 + 1})} className={Lock.t35 !== 2 ? (Plague.Plague35_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="786" onClick={ Plague.Plague35_3_lg === true ? () => setPlague({ ...Plague, Plague35_3_lg: !Plague.Plague35_3_lg, Plague_total_35: Plague.Plague_total_35 - 1}) : () => setPlague({ ...Plague, Plague35_3_lg: !Plague.Plague35_3_lg, Plague_total_35: Plague.Plague_total_35 + 1})} className={Lock.t35 !== 2 ? (Plague.Plague35_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="787" onClick={ Plague.Plague36_1_lg === true ? () => setPlague({ ...Plague, Plague36_1_lg: !Plague.Plague36_1_lg, Plague_total_36: Plague.Plague_total_36 - 1}) : () => setPlague({ ...Plague, Plague36_1_lg: !Plague.Plague36_1_lg, Plague_total_36: Plague.Plague_total_36 + 1})} className={Lock.t36 !== 2 ? (Plague.Plague36_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="788"onClick={ Plague.Plague36_2_lg === true ? () => setPlague({ ...Plague, Plague36_2_lg: !Plague.Plague36_2_lg, Plague_total_36: Plague.Plague_total_36 - 1}) : () => setPlague({ ...Plague, Plague36_2_lg: !Plague.Plague36_2_lg, Plague_total_36: Plague.Plague_total_36 + 1})} className={Lock.t36 !== 2 ? (Plague.Plague36_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="789" onClick={ Plague.Plague36_3_lg === true ? () => setPlague({ ...Plague, Plague36_3_lg: !Plague.Plague36_3_lg, Plague_total_36: Plague.Plague_total_36 - 1}) : () => setPlague({ ...Plague, Plague36_3_lg: !Plague.Plague36_3_lg, Plague_total_36: Plague.Plague_total_36 + 1})} className={Lock.t36 !== 2 ? (Plague.Plague36_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="790" onClick={ Plague.Plague37_1_lg === true ? () => setPlague({ ...Plague, Plague37_1_lg: !Plague.Plague37_1_lg, Plague_total_37: Plague.Plague_total_37 - 1}) : () => setPlague({ ...Plague, Plague37_1_lg: !Plague.Plague37_1_lg, Plague_total_37: Plague.Plague_total_37 + 1})} className={Lock.t37 !== 2 ? (Plague.Plague37_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="791"onClick={ Plague.Plague37_2_lg === true ? () => setPlague({ ...Plague, Plague37_2_lg: !Plague.Plague37_2_lg, Plague_total_37: Plague.Plague_total_37 - 1}) : () => setPlague({ ...Plague, Plague37_2_lg: !Plague.Plague37_2_lg, Plague_total_37: Plague.Plague_total_37 + 1})} className={Lock.t37 !== 2 ? (Plague.Plague37_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="792" onClick={ Plague.Plague37_3_lg === true ? () => setPlague({ ...Plague, Plague37_3_lg: !Plague.Plague37_3_lg, Plague_total_37: Plague.Plague_total_37 - 1}) : () => setPlague({ ...Plague, Plague37_3_lg: !Plague.Plague37_3_lg, Plague_total_37: Plague.Plague_total_37 + 1})} className={Lock.t37 !== 2 ? (Plague.Plague37_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation} /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="793" onClick={ Plague.Plague38_1_lg === true ? () => setPlague({ ...Plague, Plague38_1_lg: !Plague.Plague38_1_lg, Plague_total_38: Plague.Plague_total_38 - 1}) : () => setPlague({ ...Plague, Plague38_1_lg: !Plague.Plague38_1_lg, Plague_total_38: Plague.Plague_total_38 + 1})} className={Lock.t38 !== 2 ? (Plague.Plague38_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation} /><PlagueButton tabIndex="794" onClick={ Plague.Plague38_2_lg === true ? () => setPlague({ ...Plague, Plague38_2_lg: !Plague.Plague38_2_lg, Plague_total_38: Plague.Plague_total_38 - 1}) : () => setPlague({ ...Plague, Plague38_2_lg: !Plague.Plague38_2_lg, Plague_total_38: Plague.Plague_total_38 + 1})} className={Lock.t38 !== 2 ? (Plague.Plague38_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation} /><PlagueButton tabIndex="795" onClick={ Plague.Plague38_3_lg === true ? () => setPlague({ ...Plague, Plague38_3_lg: !Plague.Plague38_3_lg, Plague_total_38: Plague.Plague_total_38 - 1}) : () => setPlague({ ...Plague, Plague38_3_lg: !Plague.Plague38_3_lg, Plague_total_38: Plague.Plague_total_38 + 1})} className={Lock.t38 !== 2 ? (Plague.Plague38_3_lg ? classes.small_btn_3_Plague_lst : classes.small_btn_3_lst) : classes.disable_furcation} /></div></PlagueTableCell>
           
        </TableRow>
        <TableRow>
        <ImgCell className={classes.img_change} onClick={ Lock.t31 === 0 ? () => setLock({ ...Lock, t31: 1}): Lock.t31 === 1 ? dataLocker31 : () => setLock({ ...Lock, t31: 0})}><img src={Lock.t31 === 0 ? process.env.PUBLIC_URL + 'Teeth/31b.png': Lock.t31 === 1 ? process.env.PUBLIC_URL + 'Teeth/31bi.png': process.env.PUBLIC_URL + 'Teeth/31bx.png'} className={classes.tooth_img_21b} />
                      <svg className={Lock.t31 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_31_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t31 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_31_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t31 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_31_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t31 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_31_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t31 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_31_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t31 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_31_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
            </ImgCell>
            <ImgCell className={classes.img_change} onClick={ Lock.t32 === 0 ? () => setLock({ ...Lock, t32: 1}): Lock.t32 === 1 ? dataLocker32 : () => setLock({ ...Lock, t32: 0})}><img src={Lock.t32 === 0 ? process.env.PUBLIC_URL + 'Teeth/32b.png': Lock.t32 === 1 ? process.env.PUBLIC_URL + 'Teeth/32bi.png': process.env.PUBLIC_URL + 'Teeth/32bx.png'} className={classes.tooth_img_22b} />
                      <svg className={Lock.t32 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_32_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t32 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_32_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t32 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_32_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t32 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_32_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t32 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_32_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t32 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_32_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t33 === 0 ? () => setLock({ ...Lock, t33: 1}): Lock.t33 === 1 ? dataLocker33 : () => setLock({ ...Lock, t33: 0})}><img src={Lock.t33 === 0 ? process.env.PUBLIC_URL + 'Teeth/33b.png': Lock.t33 === 1 ? process.env.PUBLIC_URL + 'Teeth/33bi.png': process.env.PUBLIC_URL + 'Teeth/33bx.png'} className={classes.tooth_img_23b} />
                      <svg className={Lock.t33 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_33_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t33 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_33_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t33 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_33_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t33 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_33_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t33 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_33_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t33 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_33_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t34 === 0 ? () => setLock({ ...Lock, t34: 1}): Lock.t34 === 1 ? dataLocker34 : () => setLock({ ...Lock, t34: 0})}><img src={Lock.t34 === 0 ? process.env.PUBLIC_URL + 'Teeth/34b.png': Lock.t34 === 1 ? process.env.PUBLIC_URL + 'Teeth/34bi.png': process.env.PUBLIC_URL + 'Teeth/34bx.png'} className={classes.tooth_img_24b} />
                      <svg className={Lock.t34 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_34_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t34 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_34_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t34 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_34_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t34 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_34_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t34 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_34_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t34 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_34_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>            
          <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t35 === 0 ? () => setLock({ ...Lock, t35: 1}): Lock.t35 === 1 ? dataLocker35 : () => setLock({ ...Lock, t35: 0})}><img src={Lock.t35 === 0 ? process.env.PUBLIC_URL + 'Teeth/35b.png': Lock.t35 === 1 ? process.env.PUBLIC_URL + 'Teeth/35bi.png': process.env.PUBLIC_URL + 'Teeth/35bx.png'} className={classes.tooth_img_25b} />
                      <svg className={Lock.t35 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_35_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t35 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_35_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t35 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_35_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t35 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_35_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t35 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_35_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t35 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_35_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t36 === 0 ? implantLocker36 : Lock.t36 === 1 ? dataLocker36 : () => setLock({ ...Lock, t36: 0})}><img src={Lock.t36 === 0 ? process.env.PUBLIC_URL + 'Teeth/36b.png': Lock.t36 === 1 ? process.env.PUBLIC_URL + 'Teeth/36bi.png': process.env.PUBLIC_URL + 'Teeth/36bx.png'} className={classes.tooth_img_26b} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t36 === 0 && Furc.FurcCount36b === 1 ? classes.furc_img_26_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t36 === 0 && Furc.FurcCount36b === 2 ? classes.furc_img_26_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t36 === 0 && Furc.FurcCount36b === 3 ? classes.furc_img_26_l: classes.disabled}/>
                      <svg className={Lock.t36 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_36_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t36 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_36_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t36 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_36_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t36 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_36_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t36 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_36_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t36 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_36_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t37 === 0 ? implantLocker37 : Lock.t37 === 1 ? dataLocker37 : () => setLock({ ...Lock, t37: 0})}><img src={Lock.t37 === 0 ? process.env.PUBLIC_URL + 'Teeth/37b.png': Lock.t37 === 1 ? process.env.PUBLIC_URL + 'Teeth/37bi.png': process.env.PUBLIC_URL + 'Teeth/37bx.png'} className={classes.tooth_img_27b} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t37 === 0 && Furc.FurcCount37b === 1 ? classes.furc_img_27_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t37 === 0 && Furc.FurcCount37b === 2 ? classes.furc_img_27_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t37 === 0 && Furc.FurcCount37b === 3 ? classes.furc_img_27_l: classes.disabled}/>
                      <svg className={Lock.t37 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_37_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t37 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_37_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t37 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_37_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t37 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_37_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t37 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_37_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t37 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_37_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t38 === 0 ? implantLocker38 : Lock.t38 === 1 ? dataLocker38 : () => setLock({ ...Lock, t38: 0})}><img src={Lock.t38 === 0 ? process.env.PUBLIC_URL + 'Teeth/38b.png': Lock.t38 === 1 ? process.env.PUBLIC_URL + 'Teeth/38bi.png': process.env.PUBLIC_URL + 'Teeth/38bx.png'} className={classes.tooth_img_28b} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t38 === 0 && Furc.FurcCount38b === 1 ? classes.furc_img_28_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t38 === 0 && Furc.FurcCount38b === 2 ? classes.furc_img_28_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t38 === 0 && Furc.FurcCount38b === 3 ? classes.furc_img_28_l: classes.disabled}/>
                      <svg className={Lock.t38 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_38_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t38 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_38_lg" display="none"/></svg>
                      <svg className={Lock.t38 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_38_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t38 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_38_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t38 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_38_lg" display="none"/></svg>
                      <svg className={Lock.t38 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_38_attachment_lg" display="none"/></svg>
            <ToothLines2 />
          </ImgCell>
         
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="820" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t31_1_lg > 15 || GM.t31_1_lg < (-10) ? gmLimit31() : GM.t31_1_lg} onChange={(e) => setGM({...GM, t31_1_lg: e.target.value})} className={Lock.t31 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="821" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t31_2_lg > 15 || GM.t31_2_lg < (-10) ? gmLimit31() : GM.t31_2_lg} onChange={(e) => setGM({...GM, t31_2_lg: e.target.value})}  className={Lock.t31 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="822" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t31_3_lg > 15 || GM.t31_3_lg < (-10) ? gmLimit31() : GM.t31_3_lg} onChange={(e) => setGM({...GM, t31_3_lg: e.target.value})} className={Lock.t31 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="823" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t32_1_lg > 15 || GM.t32_1_lg < (-10) ? gmLimit32() : GM.t32_1_lg} onChange={(e) => setGM({...GM, t32_1_lg: e.target.value})} className={Lock.t32 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="824" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t32_2_lg > 15 || GM.t32_2_lg < (-10) ? gmLimit32() : GM.t32_2_lg} onChange={(e) => setGM({...GM, t32_2_lg: e.target.value})}  className={Lock.t32 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="825" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t32_3_lg > 15 || GM.t32_3_lg < (-10) ? gmLimit32() : GM.t32_3_lg} onChange={(e) => setGM({...GM, t32_3_lg: e.target.value})} className={Lock.t32 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="826" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t33_1_lg > 15 || GM.t33_1_lg < (-10) ? gmLimit33() : GM.t33_1_lg} onChange={(e) => setGM({...GM, t33_1_lg: e.target.value})} className={Lock.t33 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="827" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t33_2_lg > 15 || GM.t33_2_lg < (-10) ? gmLimit33() : GM.t33_2_lg} onChange={(e) => setGM({...GM, t33_2_lg: e.target.value})}  className={Lock.t33 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="828" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t33_3_lg > 15 || GM.t33_3_lg < (-10) ? gmLimit33() : GM.t33_3_lg} onChange={(e) => setGM({...GM, t33_3_lg: e.target.value})} className={Lock.t33 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="829" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t34_1_lg > 15 || GM.t34_1_lg < (-10) ? gmLimit34() : GM.t34_1_lg} onChange={(e) => setGM({...GM, t34_1_lg: e.target.value})} className={Lock.t34 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="830" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t34_2_lg > 15 || GM.t34_2_lg < (-10) ? gmLimit34() : GM.t34_2_lg} onChange={(e) => setGM({...GM, t34_2_lg: e.target.value})}  className={Lock.t34 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="831" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t34_3_lg > 15 || GM.t34_3_lg < (-10) ? gmLimit34() : GM.t34_3_lg} onChange={(e) => setGM({...GM, t34_3_lg: e.target.value})} className={Lock.t34 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="832" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t35_1_lg > 15 || GM.t35_1_lg < (-10) ? gmLimit35() : GM.t35_1_lg} onChange={(e) => setGM({...GM, t35_1_lg: e.target.value})} className={Lock.t35 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="833" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t35_2_lg > 15 || GM.t35_2_lg < (-10) ? gmLimit35() : GM.t35_2_lg} onChange={(e) => setGM({...GM, t35_2_lg: e.target.value})}  className={Lock.t35 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="834" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t35_3_lg > 15 || GM.t35_3_lg < (-10) ? gmLimit35() : GM.t35_3_lg} onChange={(e) => setGM({...GM, t35_3_lg: e.target.value})} className={Lock.t35 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="835" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t36_1_lg > 15 || GM.t36_1_lg < (-10) ? gmLimit36() : GM.t36_1_lg} onChange={(e) => setGM({...GM, t36_1_lg: e.target.value})} className={Lock.t36 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="836" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t36_2_lg > 15 || GM.t36_2_lg < (-10) ? gmLimit36() : GM.t36_2_lg} onChange={(e) => setGM({...GM, t36_2_lg: e.target.value})}  className={Lock.t36 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="837" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t36_3_lg > 15 || GM.t36_3_lg < (-10) ? gmLimit36() : GM.t36_3_lg} onChange={(e) => setGM({...GM, t36_3_lg: e.target.value})} className={Lock.t36 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="838" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t37_1_lg > 15 || GM.t37_1_lg < (-10) ? gmLimit37() : GM.t37_1_lg} onChange={(e) => setGM({...GM, t37_1_lg: e.target.value})} className={Lock.t37 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="839" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t37_2_lg > 15 || GM.t37_2_lg < (-10) ? gmLimit37() : GM.t37_2_lg} onChange={(e) => setGM({...GM, t37_2_lg: e.target.value})}  className={Lock.t37 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="840" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t37_3_lg > 15 || GM.t37_3_lg < (-10) ? gmLimit37() : GM.t37_3_lg} onChange={(e) => setGM({...GM, t37_3_lg: e.target.value})} className={Lock.t37 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="841" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t38_1_lg > 15 || GM.t38_1_lg < (-10) ? gmLimit38() : GM.t38_1_lg} onChange={(e) => setGM({...GM, t38_1_lg: e.target.value})} className={Lock.t38 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="842" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t38_2_lg > 15 || GM.t38_2_lg < (-10) ? gmLimit38() : GM.t38_2_lg} onChange={(e) => setGM({...GM, t38_2_lg: e.target.value})}  className={Lock.t38 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="843" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t38_3_lg > 15 || GM.t38_3_lg < (-10) ? gmLimit38() : GM.t38_3_lg} onChange={(e) => setGM({...GM, t38_3_lg: e.target.value})} className={Lock.t38 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
           
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="889" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p31_1_lg > 15 || Probe.p31_1_lg < 0 ? ProbeLimit31() : Probe.p31_1_lg} onChange={(e) => setProbe({...Probe, p31_1_lg: e.target.value})} className={Lock.t31 !== 2 ? (((Probe.p31_1_lg == 4 && BoP.BoP31_1_lg) || Probe.p31_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="890" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p31_2_lg > 15 || Probe.p31_2_lg < 0 ? ProbeLimit31() : Probe.p31_2_lg} onChange={(e) => setProbe({...Probe, p31_2_lg: e.target.value})}  className={Lock.t31 !== 2 ? (((Probe.p31_2_lg == 4 && BoP.BoP31_2_lg) || Probe.p31_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="891" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p31_3_lg > 15 || Probe.p31_3_lg < 0 ? ProbeLimit31() : Probe.p31_3_lg} onChange={(e) => setProbe({...Probe, p31_3_lg: e.target.value})} className={Lock.t31 !== 2 ? (((Probe.p31_3_lg == 4 && BoP.BoP31_3_lg) || Probe.p31_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="892" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p32_1_lg > 15 || Probe.p32_1_lg < 0 ? ProbeLimit32() : Probe.p32_1_lg} onChange={(e) => setProbe({...Probe, p32_1_lg: e.target.value})} className={Lock.t32 !== 2 ? (((Probe.p32_1_lg == 4 && BoP.BoP32_1_lg) || Probe.p32_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="893" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p32_2_lg > 15 || Probe.p32_2_lg < 0 ? ProbeLimit32() : Probe.p32_2_lg} onChange={(e) => setProbe({...Probe, p32_2_lg: e.target.value})}  className={Lock.t32 !== 2 ? (((Probe.p32_2_lg == 4 && BoP.BoP32_2_lg) || Probe.p32_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="894" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p32_3_lg > 15 || Probe.p32_3_lg < 0 ? ProbeLimit32() : Probe.p32_3_lg} onChange={(e) => setProbe({...Probe, p32_3_lg: e.target.value})} className={Lock.t32 !== 2 ? (((Probe.p32_3_lg == 4 && BoP.BoP32_3_lg) || Probe.p32_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="895" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p33_1_lg > 15 || Probe.p33_1_lg < 0 ? ProbeLimit33() : Probe.p33_1_lg} onChange={(e) => setProbe({...Probe, p33_1_lg: e.target.value})} className={Lock.t33 !== 2 ? (((Probe.p33_1_lg == 4 && BoP.BoP33_1_lg) || Probe.p33_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="896" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p33_2_lg > 15 || Probe.p33_2_lg < 0 ? ProbeLimit33() : Probe.p33_2_lg} onChange={(e) => setProbe({...Probe, p33_2_lg: e.target.value})}  className={Lock.t33 !== 2 ? (((Probe.p33_2_lg == 4 && BoP.BoP33_2_lg) || Probe.p33_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="897" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p33_3_lg > 15 || Probe.p33_3_lg < 0 ? ProbeLimit33() : Probe.p33_3_lg} onChange={(e) => setProbe({...Probe, p33_3_lg: e.target.value})} className={Lock.t33 !== 2 ? (((Probe.p33_3_lg == 4 && BoP.BoP33_3_lg) || Probe.p33_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="898" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p34_1_lg > 15 || Probe.p34_1_lg < 0 ? ProbeLimit34() : Probe.p34_1_lg} onChange={(e) => setProbe({...Probe, p34_1_lg: e.target.value})} className={Lock.t34 !== 2 ? (((Probe.p34_1_lg == 4 && BoP.BoP34_1_lg) || Probe.p34_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="899" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p34_2_lg > 15 || Probe.p34_2_lg < 0 ? ProbeLimit34() : Probe.p34_2_lg} onChange={(e) => setProbe({...Probe, p34_2_lg: e.target.value})}  className={Lock.t34 !== 2 ? (((Probe.p34_2_lg == 4 && BoP.BoP34_2_lg) || Probe.p34_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="900" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p34_3_lg > 15 || Probe.p34_3_lg < 0 ? ProbeLimit34() : Probe.p34_3_lg} onChange={(e) => setProbe({...Probe, p34_3_lg: e.target.value})} className={Lock.t34 !== 2 ? (((Probe.p34_3_lg == 4 && BoP.BoP34_3_lg) || Probe.p34_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="901" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p35_1_lg > 15 || Probe.p35_1_lg < 0 ? ProbeLimit35() : Probe.p35_1_lg} onChange={(e) => setProbe({...Probe, p35_1_lg: e.target.value})} className={Lock.t35 !== 2 ? (((Probe.p35_1_lg == 4 && BoP.BoP35_1_lg) || Probe.p35_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="902" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p35_2_lg > 15 || Probe.p35_2_lg < 0 ? ProbeLimit35() : Probe.p35_2_lg} onChange={(e) => setProbe({...Probe, p35_2_lg: e.target.value})}  className={Lock.t35 !== 2 ? (((Probe.p35_2_lg == 4 && BoP.BoP35_2_lg) || Probe.p35_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="903" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p35_3_lg > 15 || Probe.p35_3_lg < 0 ? ProbeLimit35() : Probe.p35_3_lg} onChange={(e) => setProbe({...Probe, p35_3_lg: e.target.value})} className={Lock.t35 !== 2 ? (((Probe.p35_3_lg == 4 && BoP.BoP35_3_lg) || Probe.p35_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="904" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p36_1_lg > 15 || Probe.p36_1_lg < 0 ? ProbeLimit36() : Probe.p36_1_lg} onChange={(e) => setProbe({...Probe, p36_1_lg: e.target.value})} className={Lock.t36 !== 2 ? (((Probe.p36_1_lg == 4 && BoP.BoP36_1_lg) || Probe.p36_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="905" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p36_2_lg > 15 || Probe.p36_2_lg < 0 ? ProbeLimit36() : Probe.p36_2_lg} onChange={(e) => setProbe({...Probe, p36_2_lg: e.target.value})}  className={Lock.t36 !== 2 ? (((Probe.p36_2_lg == 4 && BoP.BoP36_2_lg) || Probe.p36_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="906" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p36_3_lg > 15 || Probe.p36_3_lg < 0 ? ProbeLimit36() : Probe.p36_3_lg} onChange={(e) => setProbe({...Probe, p36_3_lg: e.target.value})} className={Lock.t36 !== 2 ? (((Probe.p36_3_lg == 4 && BoP.BoP36_3_lg) || Probe.p36_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="907" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p37_1_lg > 15 || Probe.p37_1_lg < 0 ? ProbeLimit37() : Probe.p37_1_lg} onChange={(e) => setProbe({...Probe, p37_1_lg: e.target.value})} className={Lock.t37 !== 2 ? (((Probe.p37_1_lg == 4 && BoP.BoP37_1_lg) || Probe.p37_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="908" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p37_2_lg > 15 || Probe.p37_2_lg < 0 ? ProbeLimit37() : Probe.p37_2_lg} onChange={(e) => setProbe({...Probe, p37_2_lg: e.target.value})}  className={Lock.t37 !== 2 ? (((Probe.p37_2_lg == 4 && BoP.BoP37_2_lg) || Probe.p37_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="909" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p37_3_lg > 15 || Probe.p37_3_lg < 0 ? ProbeLimit37() : Probe.p37_3_lg} onChange={(e) => setProbe({...Probe, p37_3_lg: e.target.value})} className={Lock.t37 !== 2 ? (((Probe.p37_3_lg == 4 && BoP.BoP37_3_lg) || Probe.p37_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="910" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p38_1_lg > 15 || Probe.p38_1_lg < 0 ? ProbeLimit38() : Probe.p38_1_lg} onChange={(e) => setProbe({...Probe, p38_1_lg: e.target.value})} className={Lock.t38 !== 2 ? (((Probe.p38_1_lg == 4 && BoP.BoP38_1_lg) || Probe.p38_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="911" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p38_2_lg > 15 || Probe.p38_2_lg < 0 ? ProbeLimit38() : Probe.p38_2_lg} onChange={(e) => setProbe({...Probe, p38_2_lg: e.target.value})}  className={Lock.t38 !== 2 ? (((Probe.p38_2_lg == 4 && BoP.BoP38_2_lg) || Probe.p38_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="912" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p38_3_lg > 15 || Probe.p38_3_lg < 0 ? ProbeLimit38() : Probe.p38_3_lg} onChange={(e) => setProbe({...Probe, p38_3_lg: e.target.value})} className={Lock.t38 !== 2 ? (((Probe.p38_3_lg == 4 && BoP.BoP38_3_lg) || Probe.p38_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
           
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="937" onClick={ BoP.BoP31_1_lg === true ? () => setBoP({ ...BoP, BoP31_1_lg: !BoP.BoP31_1_lg, BoP_total_31: BoP.BoP_total_31 - 1}) : () => setBoP({ ...BoP, BoP31_1_lg: !BoP.BoP31_1_lg, BoP_total_31: BoP.BoP_total_31 + 1})} className={Lock.t31 !== 2 ? (BoP.BoP31_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="938" onClick={ BoP.BoP31_2_lg === true ? () => setBoP({ ...BoP, BoP31_2_lg: !BoP.BoP31_2_lg, BoP_total_31: BoP.BoP_total_31 - 1}) : () => setBoP({ ...BoP, BoP31_2_lg: !BoP.BoP31_2_lg, BoP_total_31: BoP.BoP_total_31 + 1})} className={Lock.t31 !== 2 ? (BoP.BoP31_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="939" onClick={ BoP.BoP31_3_lg === true ? () => setBoP({ ...BoP, BoP31_3_lg: !BoP.BoP31_3_lg, BoP_total_31: BoP.BoP_total_31 - 1}) : () => setBoP({ ...BoP, BoP31_3_lg: !BoP.BoP31_3_lg, BoP_total_31: BoP.BoP_total_31 + 1})} className={Lock.t31 !== 2 ? (BoP.BoP31_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="940" onClick={ BoP.BoP32_1_lg === true ? () => setBoP({ ...BoP, BoP32_1_lg: !BoP.BoP32_1_lg, BoP_total_32: BoP.BoP_total_32 - 1}) : () => setBoP({ ...BoP, BoP32_1_lg: !BoP.BoP32_1_lg, BoP_total_32: BoP.BoP_total_32 + 1})} className={Lock.t32 !== 2 ? (BoP.BoP32_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="941" onClick={ BoP.BoP32_2_lg === true ? () => setBoP({ ...BoP, BoP32_2_lg: !BoP.BoP32_2_lg, BoP_total_32: BoP.BoP_total_32 - 1}) : () => setBoP({ ...BoP, BoP32_2_lg: !BoP.BoP32_2_lg, BoP_total_32: BoP.BoP_total_32 + 1})} className={Lock.t32 !== 2 ? (BoP.BoP32_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="942" onClick={ BoP.BoP32_3_lg === true ? () => setBoP({ ...BoP, BoP32_3_lg: !BoP.BoP32_3_lg, BoP_total_32: BoP.BoP_total_32 - 1}) : () => setBoP({ ...BoP, BoP32_3_lg: !BoP.BoP32_3_lg, BoP_total_32: BoP.BoP_total_32 + 1})} className={Lock.t32 !== 2 ? (BoP.BoP32_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="943" onClick={ BoP.BoP33_1_lg === true ? () => setBoP({ ...BoP, BoP33_1_lg: !BoP.BoP33_1_lg, BoP_total_33: BoP.BoP_total_33 - 1}) : () => setBoP({ ...BoP, BoP33_1_lg: !BoP.BoP33_1_lg, BoP_total_33: BoP.BoP_total_33 + 1})} className={Lock.t33 !== 2 ? (BoP.BoP33_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="944" onClick={ BoP.BoP33_2_lg === true ? () => setBoP({ ...BoP, BoP33_2_lg: !BoP.BoP33_2_lg, BoP_total_33: BoP.BoP_total_33 - 1}) : () => setBoP({ ...BoP, BoP33_2_lg: !BoP.BoP33_2_lg, BoP_total_33: BoP.BoP_total_33 + 1})} className={Lock.t33 !== 2 ? (BoP.BoP33_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="945" onClick={ BoP.BoP33_3_lg === true ? () => setBoP({ ...BoP, BoP33_3_lg: !BoP.BoP33_3_lg, BoP_total_33: BoP.BoP_total_33 - 1}) : () => setBoP({ ...BoP, BoP33_3_lg: !BoP.BoP33_3_lg, BoP_total_33: BoP.BoP_total_33 + 1})} className={Lock.t33 !== 2 ? (BoP.BoP33_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="946" onClick={ BoP.BoP34_1_lg === true ? () => setBoP({ ...BoP, BoP34_1_lg: !BoP.BoP34_1_lg, BoP_total_34: BoP.BoP_total_34 - 1}) : () => setBoP({ ...BoP, BoP34_1_lg: !BoP.BoP34_1_lg, BoP_total_34: BoP.BoP_total_34 + 1})} className={Lock.t34 !== 2 ? (BoP.BoP34_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="947" onClick={ BoP.BoP34_2_lg === true ? () => setBoP({ ...BoP, BoP34_2_lg: !BoP.BoP34_2_lg, BoP_total_34: BoP.BoP_total_34 - 1}) : () => setBoP({ ...BoP, BoP34_2_lg: !BoP.BoP34_2_lg, BoP_total_34: BoP.BoP_total_34 + 1})} className={Lock.t34 !== 2 ? (BoP.BoP34_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="948" onClick={ BoP.BoP34_3_lg === true ? () => setBoP({ ...BoP, BoP34_3_lg: !BoP.BoP34_3_lg, BoP_total_34: BoP.BoP_total_34 - 1}) : () => setBoP({ ...BoP, BoP34_3_lg: !BoP.BoP34_3_lg, BoP_total_34: BoP.BoP_total_34 + 1})} className={Lock.t34 !== 2 ? (BoP.BoP34_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="949" onClick={ BoP.BoP35_1_lg === true ? () => setBoP({ ...BoP, BoP35_1_lg: !BoP.BoP35_1_lg, BoP_total_35: BoP.BoP_total_35 - 1}) : () => setBoP({ ...BoP, BoP35_1_lg: !BoP.BoP35_1_lg, BoP_total_35: BoP.BoP_total_35 + 1})} className={Lock.t35 !== 2 ? (BoP.BoP35_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="950" onClick={ BoP.BoP35_2_lg === true ? () => setBoP({ ...BoP, BoP35_2_lg: !BoP.BoP35_2_lg, BoP_total_35: BoP.BoP_total_35 - 1}) : () => setBoP({ ...BoP, BoP35_2_lg: !BoP.BoP35_2_lg, BoP_total_35: BoP.BoP_total_35 + 1})} className={Lock.t35 !== 2 ? (BoP.BoP35_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="951" onClick={ BoP.BoP35_3_lg === true ? () => setBoP({ ...BoP, BoP35_3_lg: !BoP.BoP35_3_lg, BoP_total_35: BoP.BoP_total_35 - 1}) : () => setBoP({ ...BoP, BoP35_3_lg: !BoP.BoP35_3_lg, BoP_total_35: BoP.BoP_total_35 + 1})} className={Lock.t35 !== 2 ? (BoP.BoP35_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="952"onClick={ BoP.BoP36_1_lg === true ? () => setBoP({ ...BoP, BoP36_1_lg: !BoP.BoP36_1_lg, BoP_total_36: BoP.BoP_total_36 - 1}) : () => setBoP({ ...BoP, BoP36_1_lg: !BoP.BoP36_1_lg, BoP_total_36: BoP.BoP_total_36 + 1})} className={Lock.t36 !== 2 ? (BoP.BoP36_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="953" onClick={ BoP.BoP36_2_lg === true ? () => setBoP({ ...BoP, BoP36_2_lg: !BoP.BoP36_2_lg, BoP_total_36: BoP.BoP_total_36 - 1}) : () => setBoP({ ...BoP, BoP36_2_lg: !BoP.BoP36_2_lg, BoP_total_36: BoP.BoP_total_36 + 1})} className={Lock.t36 !== 2 ? (BoP.BoP36_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="954" onClick={ BoP.BoP36_3_lg === true ? () => setBoP({ ...BoP, BoP36_3_lg: !BoP.BoP36_3_lg, BoP_total_36: BoP.BoP_total_36 - 1}) : () => setBoP({ ...BoP, BoP36_3_lg: !BoP.BoP36_3_lg, BoP_total_36: BoP.BoP_total_36 + 1})} className={Lock.t36 !== 2 ? (BoP.BoP36_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="955" onClick={ BoP.BoP37_1_lg === true ? () => setBoP({ ...BoP, BoP37_1_lg: !BoP.BoP37_1_lg, BoP_total_37: BoP.BoP_total_37 - 1}) : () => setBoP({ ...BoP, BoP37_1_lg: !BoP.BoP37_1_lg, BoP_total_37: BoP.BoP_total_37 + 1})} className={Lock.t37 !== 2 ? (BoP.BoP37_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="956" onClick={ BoP.BoP37_2_lg === true ? () => setBoP({ ...BoP, BoP37_2_lg: !BoP.BoP37_2_lg, BoP_total_37: BoP.BoP_total_37 - 1}) : () => setBoP({ ...BoP, BoP37_2_lg: !BoP.BoP37_2_lg, BoP_total_37: BoP.BoP_total_37 + 1})} className={Lock.t37 !== 2 ? (BoP.BoP37_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="957" onClick={ BoP.BoP37_3_lg === true ? () => setBoP({ ...BoP, BoP37_3_lg: !BoP.BoP37_3_lg, BoP_total_37: BoP.BoP_total_37 - 1}) : () => setBoP({ ...BoP, BoP37_3_lg: !BoP.BoP37_3_lg, BoP_total_37: BoP.BoP_total_37 + 1})} className={Lock.t37 !== 2 ? (BoP.BoP37_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation} /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="958" onClick={ BoP.BoP38_1_lg === true ? () => setBoP({ ...BoP, BoP38_1_lg: !BoP.BoP38_1_lg, BoP_total_38: BoP.BoP_total_38 - 1}) : () => setBoP({ ...BoP, BoP38_1_lg: !BoP.BoP38_1_lg, BoP_total_38: BoP.BoP_total_38 + 1})} className={Lock.t38 !== 2 ? (BoP.BoP38_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation} /><StyledButton tabIndex="959" onClick={ BoP.BoP38_2_lg === true ? () => setBoP({ ...BoP, BoP38_2_lg: !BoP.BoP38_2_lg, BoP_total_38: BoP.BoP_total_38 - 1}) : () => setBoP({ ...BoP, BoP38_2_lg: !BoP.BoP38_2_lg, BoP_total_38: BoP.BoP_total_38 + 1})} className={Lock.t38 !== 2 ? (BoP.BoP38_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation} /><StyledButton tabIndex="960" onClick={ BoP.BoP38_3_lg === true ? () => setBoP({ ...BoP, BoP38_3_lg: !BoP.BoP38_3_lg, BoP_total_38: BoP.BoP_total_38 - 1}) : () => setBoP({ ...BoP, BoP38_3_lg: !BoP.BoP38_3_lg, BoP_total_38: BoP.BoP_total_38 + 1})} className={Lock.t38 !== 2 ? (BoP.BoP38_3_lg ? classes.small_btn_3_bop_lst : classes.small_btn_3_lst) : classes.disable_furcation} /></div></StyledTableCell>
           
        </TableRow>
        <TableRow>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell align="center"></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell align="center">
          <StyledButton tabIndex="964" onClick={furc_flow36b()} size="large" className={Lock.t36 !== 0 ? classes.disable_furcation: null}>
            <a className={Furc.FurcCount36b === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
            <a className={Furc.FurcCount36b === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
            <a className={Furc.FurcCount36b === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton>
          </StyledTableCell>
          <StyledTableCell align="center">
          <StyledButton tabIndex="965" onClick={furc_flow37b()} size="large" className={Lock.t37 !== 0 ? classes.disable_furcation: null}>
            <a className={Furc.FurcCount37b === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
            <a className={Furc.FurcCount37b === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
            <a className={Furc.FurcCount37b === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton>
          </StyledTableCell>
          <StyledTableCell align="center">
          <StyledButtonLast tabIndex="966" onClick={furc_flow38b()} size="large" className={Lock.t38 !== 0 ? classes.disable_furcation: null}>
            <a className={Furc.FurcCount38b === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
            <a className={Furc.FurcCount38b === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
            <a className={Furc.FurcCount38b === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButtonLast>
          </StyledTableCell>
               
        </TableRow>
        </TableBody>
        <TableHead>
        <TableRow>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t31 !== 2 ? dataLocker31 : () => setLock({ ...Lock, t31: 0})}>31</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t32 !== 2 ? dataLocker32 : () => setLock({ ...Lock, t32: 0})}>32</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t33 !== 2 ? dataLocker33 : () => setLock({ ...Lock, t33: 0})}>33</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t34 !== 2 ? dataLocker34 : () => setLock({ ...Lock, t34: 0})}>34</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t35 !== 2 ? dataLocker35 : () => setLock({ ...Lock, t35: 0})}>35</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t36 !== 2 ? dataLocker36 : () => setLock({ ...Lock, t36: 0})}>36</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t37 !== 2 ? dataLocker37 : () => setLock({ ...Lock, t37: 0})}>37</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t38 !== 2 ? dataLocker38 : () => setLock({ ...Lock, t38: 0})}>38</StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
    </StyledContainer2>
    </div>
    </div>
    {printableVersion === 1 ? null : 
    <div className="progress-container">
      {oralData.map((item, idx) => (
        <ProgressBar variable={item.variable} key={idx} 
                bgcolor={item.bgcolor} 
                completed={item.completed} 
                subtitle={item.subtitle}/>
      ))}
    </div>}
    </div>
    </div>
  );
};
export default CustomizedTables;

