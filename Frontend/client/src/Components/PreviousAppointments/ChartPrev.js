import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './ChartPrev.css';
import Button from '@material-ui/core/Button';
import ChartLower from './ChartPrev2';
import { PerioContainer, Header, SubHeader } from './Chart-Styles';
import axios from "axios";



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


const PlagueTableCell = withStyles((theme) => ({

  body: {
    borderTop: 'none',
    borderBottom: 'none',
    borderLeft: 'none',
    borderWidth: '1px',
  },

  footer: {
    color: theme.palette.common.white,
    fontSize: 12,
  }
}))(TableCell);


const SpaceCell = withStyles((theme) => ({
  root: {
  height: '27px',
  border: 'none',
},
}))(TableCell);



const ImgCell = withStyles((theme) => ({
  root: {
    height: '90px',
    maxWidth: '34px',
    zIndex: '100',
    border: 'none',
    height: '108px'
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

  disable_container: {
    border: 'none',
    boxShadow: 'none',
    //Box Formatting
    padding: 'none',
    borderRadius: 'none',
    marginTop: '1%'
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
    marginLeft: '8px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '80px'
  },

  furc_img_18_l: {
    height: '40px',
    width: '40px',
    marginLeft: '-8px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '77px'
  },

  furc_img_18_r: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '17px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '84px'
  },

  furc_img_17: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '3px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '80px'
  },

  furc_img_17_l: {
    height: '40px',
    width: '40px',
    marginLeft: '-12px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '89px'
  },

  furc_img_17_r: {
    height: '40px',
    width: '40px',
    marginRight: '-22px',
    marginLeft: '12px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '92px'
  },

  furc_img_16: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '3px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '75px'
  },

  furc_img_16_l: {
    height: '40px',
    width: '40px',
    marginLeft: '-13px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '90px'
  },

  furc_img_16_r: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '21px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '79px'
  },


  furc_img_14_l: {
    height: '40px',
    width: '40px',
    marginLeft: '-2px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '95px'
  },

  furc_img_14_r: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '14px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '114px'
  },

  furc_img_28: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '2px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '78px'
  },

  furc_img_28_l: {
    height: '40px',
    width: '40px',
    marginLeft: '-4px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '85px'
  },

  furc_img_28_r: {
    height: '40px',
    width: '40px',
    marginLeft: '20px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '77px'
  },

  furc_img_27: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '7px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '79px'
  },

  furc_img_27_l: {
    height: '40px',
    width: '40px',
    marginLeft: '-2px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '94px'
  },

  furc_img_27_r: {
    height: '40px',
    width: '40px',
    marginRight: '-20px',
    marginLeft: '24px',
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
    marginLeft: '-8px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '81px'
  },

  furc_img_26_r: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '26px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '95px'
  },

  furc_img_24_l: {
    height: '40px',
    width: '40px',
    marginLeft: '-3px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '88px'
  },

  furc_img_24_r: {
    height: '40px',
    width: '40px',
    marginRight: '-24px',
    marginLeft: '16.5px',
    position: 'absolute',
    zIndex: '999',
    marginTop: '94px'
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
    minWidth: '28px',
    left: '6px',
    top: '1.5px',
    transition: 'all 0.2s ease-out',
    paddingRight: '4px',
    textAlign: 'center'
},

  medium_btn_2: {
    position: 'absolute',
    minWidth: '28px',
    right: '5px',
    top: '1.5px',
    transition: 'all 0.2s ease-out',
    paddingRight: '3.2px',
  },

  medium_btn_2_lst: {
    position: 'absolute',
    minWidth: '28px',
    right: '13px',
    top: '1.5px',
    transition: 'all 0.2s ease-out',
    paddingRight: '3.2px',
  },


  tooth_img_18: {
    width: '56px',
    marginRight: '-24px',
    marginLeft: '-6px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '13px',
  },

  tooth_img_17: {
    width: '60px',
    marginRight: '-24px',
    marginLeft: '-13px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '12px'

  },

  tooth_img_16: {
    width: '63px',
    marginRight: '-22px',
    marginLeft: '-14px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '18px',
  },

  tooth_img_15: {
    width: '46px',
    marginRight: '-18px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '12px'

  },

  tooth_img_14: {
    width: '47px',
    marginRight: '-24px',
    marginLeft: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '19.25px'
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
    marginRight: '-24px',
    marginLeft: '-11px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '11px'
  },

  tooth_img_11: {
    width: '58px',
    height: '148px',
    marginRight: '-24px',
    marginLeft: '-15px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '26px',
  },

  tooth_img_18b: {
    width: '52px',
    marginRight: '-24px',
    marginLeft: '-6px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '36px'
  },

  tooth_img_17b: {
    width: '61px',
    marginRight: '-24px',
    marginLeft: '-13px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '33px'

  },

  tooth_img_16b: {
    width: '65px',
    marginRight: '-24px',
    marginLeft: '-13px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '33px'
  },

  tooth_img_15b: {
    width: '46px',
    marginRight: '-18px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '25px'

  },

  tooth_img_14b: {
    width: '46.5px',
    marginRight: '-24px',
    marginLeft: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '24px'
  },

  tooth_img_13b: {
    width: '49px',
    marginRight: '-20px',
    marginLeft: '-6px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '22px'
  },

  tooth_img_12b: {
    width: '45px',
    marginRight: '-24px',
    marginLeft: '-11px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '29px'
  },

  tooth_img_11b: {
    width: '50px',
    marginRight: '-24px',
    marginLeft: '-15px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '22px'
  },

  tooth_img_28: {
    width: '56px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '8px',
    height: '150px',
    marginLeft: '-13px',
  },

  tooth_img_27: {
    width: '60px',
    marginRight: '-22px',
    marginLeft: '-11px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '9px'

  },

  tooth_img_26: {
    width: '62px',
    marginRight: '-24px',
    marginLeft: '-13px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '24px'
  },

  tooth_img_25: {
    width: '46px',
    marginLeft: '-8px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '13px'

  },

  tooth_img_24: {
    width: '47px',
    marginRight: '-24px',
    marginLeft: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '8px'
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
    marginLeft: '1px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '16px'
  },

  tooth_img_21: {
    width: '57px',
    height: '156px',
    marginRight: '-19px',
    marginLeft: '-8px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '19px'
  },

  tooth_img_28b: {
    width: '52px',
    marginLeft: '-10px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '34px',
    height: '148px',
  },

  tooth_img_27b: {
    width: '61px',
    marginRight: '-24px',
    marginLeft: '-12px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '33px'

  },

  tooth_img_26b: {
    width: '65px',
    height: '150px',
    marginRight: '-24px',
    marginLeft: '-15px',
    marginBottom: '-6px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '33px'
  },

  tooth_img_25b: {
    width: '46px',
    marginLeft: '-8px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '25px'

  },

  tooth_img_24b: {
    width: '46.5px',
    marginRight: '-24px',
    marginLeft: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '24px'
  },

  tooth_img_23b: {
    width: '49px',
    marginRight: '-20px',
    marginLeft: '-6px',
    marginBottom: '-4px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '22px'
  },

  tooth_img_22b: {
    width: '45px',
    marginRight: '-24px',
    marginLeft: '-1px',
    position: 'absolute',
    zIndex: '-10',
    marginTop: '29px'
  },

  tooth_img_21b: {
    width: '50px',
    marginRight: '-22px',
    marginLeft: '-2px',
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
    overflow: 'hidden',
  },

  lower: {
    maxHeight: '160px'
  },

  plague_separator: {
    height: '30px'
  },

  implant_svg_pink: { 
    position: 'relative',
    cursor: 'pointer',
    left: '875px',
    width: '50px',
    bottom: '-30px'
  }
});



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


export default function CustomizedTables(props) {
  const { printableVersion } = props;
  const classes = useStyles();
  
  const [Mob, setMob] = useState({
    t18: 0, t17: 0, t16: 0, t15: 0, t14: 0, t13: 0, t12: 0, t11: 0,
    t28: 0, t27: 0, t26: 0, t25: 0, t24: 0, t23: 0, t22: 0, t21: 0,
  });

  const [Note, setNote] = useState({
    t18: "", t17: "", t16: "", t15: "", t14: "", t13: "", t12: "", t11: "",
    t28: "", t27: "", t26: "", t25: "", t24: "", t23: "", t22: "", t21: "",
  });

  const [GM, setGM] = useState({
    t18_1: 0, t17_1: 0, t16_1: 0, t15_1: 0, t14_1: 0, t13_1: 0, t12_1: 0, t11_1: 0,
    t18_2: 0, t17_2: 0, t16_2: 0, t15_2: 0, t14_2: 0, t13_2: 0, t12_2: 0, t11_2: 0,
    t18_3: 0, t17_3: 0, t16_3: 0, t15_3: 0, t14_3: 0, t13_3: 0, t12_3: 0, t11_3: 0,

    t28_1: 0, t27_1: 0, t26_1: 0, t25_1: 0, t24_1: 0, t23_1: 0, t22_1: 0, t21_1: 0,
    t28_2: 0, t27_2: 0, t26_2: 0, t25_2: 0, t24_2: 0, t23_2: 0, t22_2: 0, t21_2: 0,
    t28_3: 0, t27_3: 0, t26_3: 0, t25_3: 0, t24_3: 0, t23_3: 0, t22_3: 0, t21_3: 0,

    t18_1_lg: 0, t17_1_lg: 0, t16_1_lg: 0, t15_1_lg: 0, t14_1_lg: 0, t13_1_lg: 0, t12_1_lg: 0, t11_1_lg: 0,
    t18_2_lg: 0, t17_2_lg: 0, t16_2_lg: 0, t15_2_lg: 0, t14_2_lg: 0, t13_2_lg: 0, t12_2_lg: 0, t11_2_lg: 0,
    t18_3_lg: 0, t17_3_lg: 0, t16_3_lg: 0, t15_3_lg: 0, t14_3_lg: 0, t13_3_lg: 0, t12_3_lg: 0, t11_3_lg: 0,

    t28_1_lg: 0, t27_1_lg: 0, t26_1_lg: 0, t25_1_lg: 0, t24_1_lg: 0, t23_1_lg: 0, t22_1_lg: 0, t21_1_lg: 0,
    t28_2_lg: 0, t27_2_lg: 0, t26_2_lg: 0, t25_2_lg: 0, t24_2_lg: 0, t23_2_lg: 0, t22_2_lg: 0, t21_2_lg: 0,
    t28_3_lg: 0, t27_3_lg: 0, t26_3_lg: 0, t25_3_lg: 0, t24_3_lg: 0, t23_3_lg: 0, t22_3_lg: 0, t21_3_lg: 0,

  });

  const [Probe, setProbe] = useState({
    p18_1: 0, p17_1: 0, p16_1: 0, p15_1: 0, p14_1: 0, p13_1: 0, p12_1: 0, p11_1: 0,
    p18_2: 0, p17_2: 0, p16_2: 0, p15_2: 0, p14_2: 0, p13_2: 0, p12_2: 0, p11_2: 0,
    p18_3: 0, p17_3: 0, p16_3: 0, p15_3: 0, p14_3: 0, p13_3: 0, p12_3: 0, p11_3: 0,

    p28_1: 0, p27_1: 0, p26_1: 0, p25_1: 0, p24_1: 0, p23_1: 0, p22_1: 0, p21_1: 0,
    p28_2: 0, p27_2: 0, p26_2: 0, p25_2: 0, p24_2: 0, p23_2: 0, p22_2: 0, p21_2: 0,
    p28_3: 0, p27_3: 0, p26_3: 0, p25_3: 0, p24_3: 0, p23_3: 0, p22_3: 0, p21_3: 0,

    p18_1_lg: 0, p17_1_lg: 0, p16_1_lg: 0, p15_1_lg: 0, p14_1_lg: 0, p13_1_lg: 0, p12_1_lg: 0, p11_1_lg: 0,
    p18_2_lg: 0, p17_2_lg: 0, p16_2_lg: 0, p15_2_lg: 0, p14_2_lg: 0, p13_2_lg: 0, p12_2_lg: 0, p11_2_lg: 0,
    p18_3_lg: 0, p17_3_lg: 0, p16_3_lg: 0, p15_3_lg: 0, p14_3_lg: 0, p13_3_lg: 0, p12_3_lg: 0, p11_3_lg: 0,

    p28_1_lg: 0, p27_1_lg: 0, p26_1_lg: 0, p25_1_lg: 0, p24_1_lg: 0, p23_1_lg: 0, p22_1_lg: 0, p21_1_lg: 0,
    p28_2_lg: 0, p27_2_lg: 0, p26_2_lg: 0, p25_2_lg: 0, p24_2_lg: 0, p23_2_lg: 0, p22_2_lg: 0, p21_2_lg: 0,
    p28_3_lg: 0, p27_3_lg: 0, p26_3_lg: 0, p25_3_lg: 0, p24_3_lg: 0, p23_3_lg: 0, p22_3_lg: 0, p21_3_lg: 0,

    
  });



  const [Lock, setLock] = useState({
    t18: 0, t17: 0, t16: 0, t15: 0, t14: 0, t13: 0, t12: 0, t11: 0,
    t28: 0, t27: 0, t26: 0, t25: 0, t24: 0, t23: 0, t22: 0, t21: 0,
  });


  const [BoP, setBoP] = useState({
    BoP18_1: false, BoP18_2: false, BoP18_3: false, BoP17_1: false, BoP17_2: false, BoP17_3: false, BoP16_1: false, BoP16_2: false, BoP16_3: false, BoP15_1: false, BoP15_2: false, BoP15_3: false,
    BoP14_1: false, BoP14_2: false, BoP14_3: false, BoP13_1: false, BoP13_2: false, BoP13_3: false, BoP12_1: false, BoP12_2: false, BoP12_3: false, BoP11_1: false, BoP11_2: false,  BoP11_3: false,
    BoP28_1: false, BoP28_2: false, BoP28_3: false, BoP27_1: false, BoP27_2: false, BoP27_3: false, BoP26_1: false, BoP26_2: false, BoP26_3: false, BoP25_1: false, BoP25_2: false, BoP25_3: false,
    BoP24_1: false, BoP24_2: false, BoP24_3: false, BoP23_1: false, BoP23_2: false, BoP23_3: false, BoP22_1: false, BoP22_2: false, BoP22_3: false, BoP21_1: false, BoP21_2: false,  BoP21_3: false,

    BoP18_1_lg: false, BoP18_2_lg: false, BoP18_3_lg: false, BoP17_1_lg: false, BoP17_2_lg: false, BoP17_3_lg: false, BoP16_1_lg: false, BoP16_2_lg: false, BoP16_3_lg: false, BoP15_1_lg: false, BoP15_2_lg: false, BoP15_3_lg: false,
    BoP14_1_lg: false, BoP14_2_lg: false, BoP14_3_lg: false, BoP13_1_lg: false, BoP13_2_lg: false, BoP13_3_lg: false, BoP12_1_lg: false, BoP12_2_lg: false, BoP12_3_lg: false, BoP11_1_lg: false, BoP11_2_lg: false,  BoP11_3_lg: false,
    BoP28_1_lg: false, BoP28_2_lg: false, BoP28_3_lg: false, BoP27_1_lg: false, BoP27_2_lg: false, BoP27_3_lg: false, BoP26_1_lg: false, BoP26_2_lg: false, BoP26_3_lg: false, BoP25_1_lg: false, BoP25_2_lg: false, BoP25_3_lg: false,
    BoP24_1_lg: false, BoP24_2_lg: false, BoP24_3_lg: false, BoP23_1_lg: false, BoP23_2_lg: false, BoP23_3_lg: false, BoP22_1_lg: false, BoP22_2_lg: false, BoP22_3_lg: false, BoP21_1_lg: false, BoP21_2_lg: false,  BoP21_3_lg: false,

    BoP_total_18: 0, BoP_total_17: 0, BoP_total_16: 0, BoP_total_15: 0, BoP_total_14: 0, BoP_total_13: 0, BoP_total_12: 0, BoP_total_11: 0,
    BoP_total_28: 0, BoP_total_27: 0, BoP_total_26: 0, BoP_total_25: 0, BoP_total_24: 0, BoP_total_23: 0, BoP_total_22: 0, BoP_total_21: 0,
  });

  const [Plague, setPlague] = useState({
    Plague18_1: false, Plague18_2: false, Plague18_3: false, Plague17_1: false, Plague17_2: false, Plague17_3: false, Plague16_1: false, Plague16_2: false, Plague16_3: false, Plague15_1: false, Plague15_2: false, Plague15_3: false,
    Plague14_1: false, Plague14_2: false, Plague14_3: false, Plague13_1: false, Plague13_2: false, Plague13_3: false, Plague12_1: false, Plague12_2: false, Plague12_3: false, Plague11_1: false, Plague11_2: false,  Plague11_3: false,
    Plague28_1: false, Plague28_2: false, Plague28_3: false, Plague27_1: false, Plague27_2: false, Plague27_3: false, Plague26_1: false, Plague26_2: false, Plague26_3: false, Plague25_1: false, Plague25_2: false, Plague25_3: false,
    Plague24_1: false, Plague24_2: false, Plague24_3: false, Plague23_1: false, Plague23_2: false, Plague23_3: false, Plague22_1: false, Plague22_2: false, Plague22_3: false, Plague21_1: false, Plague21_2: false,  Plague21_3: false,

    Plague18_1_lg: false, Plague18_2_lg: false, Plague18_3_lg: false, Plague17_1_lg: false, Plague17_2_lg: false, Plague17_3_lg: false, Plague16_1_lg: false, Plague16_2_lg: false, Plague16_3_lg: false, Plague15_1_lg: false, Plague15_2_lg: false, Plague15_3_lg: false,
    Plague14_1_lg: false, Plague14_2_lg: false, Plague14_3_lg: false, Plague13_1_lg: false, Plague13_2_lg: false, Plague13_3_lg: false, Plague12_1_lg: false, Plague12_2_lg: false, Plague12_3_lg: false, Plague11_1_lg: false, Plague11_2_lg: false,  Plague11_3_lg: false,
    Plague28_1_lg: false, Plague28_2_lg: false, Plague28_3_lg: false, Plague27_1_lg: false, Plague27_2_lg: false, Plague27_3_lg: false, Plague26_1_lg: false, Plague26_2_lg: false, Plague26_3_lg: false, Plague25_1_lg: false, Plague25_2_lg: false, Plague25_3_lg: false,
    Plague24_1_lg: false, Plague24_2_lg: false, Plague24_3_lg: false, Plague23_1_lg: false, Plague23_2_lg: false, Plague23_3_lg: false, Plague22_1_lg: false, Plague22_2_lg: false, Plague22_3_lg: false, Plague21_1_lg: false, Plague21_2_lg: false,  Plague21_3_lg: false,

    Plague_total_18: 0, Plague_total_17: 0, Plague_total_16: 0, Plague_total_15: 0, Plague_total_14: 0, Plague_total_13: 0, Plague_total_12: 0, Plague_total_11: 0,
    Plague_total_28: 0, Plague_total_27: 0, Plague_total_26: 0, Plague_total_25: 0, Plague_total_24: 0, Plague_total_23: 0, Plague_total_22: 0, Plague_total_21: 0,
  });



  const [Furc, setFurc] = useState({
    FurcCount18: 0, FurcCount17: 0, FurcCount16: 0,
    FurcCount18b: 0, FurcCount17b: 0, FurcCount16b: 0, FurcCount14b: 0, 
    FurcCount18br: 0, FurcCount17br: 0, FurcCount16br: 0, FurcCount14br: 0,

    FurcCount28: 0, FurcCount27: 0, FurcCount26: 0, 
    FurcCount28b: 0, FurcCount27b: 0, FurcCount26b: 0, FurcCount24b: 0,
    FurcCount28br: 0, FurcCount27br: 0, FurcCount26br: 0, FurcCount24br: 0,
  });

  function furc_flow18() { 
    if (Furc.FurcCount18 === 0) {
      return () => setFurc({ ...Furc, FurcCount18: Furc.FurcCount18 + 1});
    } else if (Furc.FurcCount18 === 1) {
      return () => setFurc({ ...Furc, FurcCount18: Furc.FurcCount18 + 1});
    } else if (Furc.FurcCount18 === 2) {
      return () => setFurc({ ...Furc, FurcCount18: Furc.FurcCount18 + 1});
    } else if (Furc.FurcCount18 === 3) {
      return () => setFurc({ ...Furc, FurcCount18: 0});
    }
  };
  function furc_flow18b() {
    if (Furc.FurcCount18b === 0) {
      return () => setFurc({ ...Furc, FurcCount18b: Furc.FurcCount18b + 1});
    } else if (Furc.FurcCount18b === 1) {
      return () => setFurc({ ...Furc, FurcCount18b: Furc.FurcCount18b + 1});
    } else if (Furc.FurcCount18b === 2) {
      return () => setFurc({ ...Furc, FurcCount18b: Furc.FurcCount18b + 1});
    } else if (Furc.FurcCount18b === 3) {
      return () => setFurc({ ...Furc, FurcCount18b: 0});
    }
  };

  function furc_flow18br() {
    if (Furc.FurcCount18br === 0) {
      return () => setFurc({ ...Furc, FurcCount18br: Furc.FurcCount18br + 1});
    } else if (Furc.FurcCount18br === 1) {
      return () => setFurc({ ...Furc, FurcCount18br: Furc.FurcCount18br + 1});
    } else if (Furc.FurcCount18br === 2) {
      return () => setFurc({ ...Furc, FurcCount18br: Furc.FurcCount18br + 1});
    } else if (Furc.FurcCount18br === 3) {
      return () => setFurc({ ...Furc, FurcCount18br: 0});
    }
  };
  function furc_flow17() { 
    if (Furc.FurcCount17 === 0) {
      return () => setFurc({ ...Furc, FurcCount17: Furc.FurcCount17 + 1});
    } else if (Furc.FurcCount17 === 1) {
      return () => setFurc({ ...Furc, FurcCount17: Furc.FurcCount17 + 1});
    } else if (Furc.FurcCount17 === 2) {
      return () => setFurc({ ...Furc, FurcCount17: Furc.FurcCount17 + 1});
    } else if (Furc.FurcCount17 === 3) {
      return () => setFurc({ ...Furc, FurcCount17: 0});
    }
  };
  function furc_flow17b() {
    if (Furc.FurcCount17b === 0) {
      return () => setFurc({ ...Furc, FurcCount17b: Furc.FurcCount17b + 1});
    } else if (Furc.FurcCount17b === 1) {
      return () => setFurc({ ...Furc, FurcCount17b: Furc.FurcCount17b + 1});
    } else if (Furc.FurcCount17b === 2) {
      return () => setFurc({ ...Furc, FurcCount17b: Furc.FurcCount17b + 1});
    } else if (Furc.FurcCount17b === 3) {
      return () => setFurc({ ...Furc, FurcCount17b: 0});
    }
  };
  function furc_flow17br() {
    if (Furc.FurcCount17br === 0) {
      return () => setFurc({ ...Furc, FurcCount17br: Furc.FurcCount17br + 1});
    } else if (Furc.FurcCount17br === 1) {
      return () => setFurc({ ...Furc, FurcCount17br: Furc.FurcCount17br + 1});
    } else if (Furc.FurcCount17br === 2) {
      return () => setFurc({ ...Furc, FurcCount17br: Furc.FurcCount17br + 1});
    } else if (Furc.FurcCount17br === 3) {
      return () => setFurc({ ...Furc, FurcCount17br: 0});
    }
  };
  function furc_flow16() { 
    if (Furc.FurcCount16 === 0) {
      return () => setFurc({ ...Furc, FurcCount16: Furc.FurcCount16 + 1});
    } else if (Furc.FurcCount16 === 1) {
      return () => setFurc({ ...Furc, FurcCount16: Furc.FurcCount16 + 1});
    } else if (Furc.FurcCount16 === 2) {
      return () => setFurc({ ...Furc, FurcCount16: Furc.FurcCount16 + 1});
    } else if (Furc.FurcCount16 === 3) {
      return () => setFurc({ ...Furc, FurcCount16: 0});
    }
  };
  function furc_flow16b() {
    if (Furc.FurcCount16b === 0) {
      return () => setFurc({ ...Furc, FurcCount16b: Furc.FurcCount16b + 1});
    } else if (Furc.FurcCount16b === 1) {
      return () => setFurc({ ...Furc, FurcCount16b: Furc.FurcCount16b + 1});
    } else if (Furc.FurcCount16b === 2) {
      return () => setFurc({ ...Furc, FurcCount16b: Furc.FurcCount16b + 1});
    } else if (Furc.FurcCount16b === 3) {
      return () => setFurc({ ...Furc, FurcCount16b: 0});
    }
  };

  function furc_flow16br() {
    if (Furc.FurcCount16br === 0) {
      return () => setFurc({ ...Furc, FurcCount16br: Furc.FurcCount16br + 1});
    } else if (Furc.FurcCount16br === 1) {
      return () => setFurc({ ...Furc, FurcCount16br: Furc.FurcCount16br + 1});
    } else if (Furc.FurcCount16br === 2) {
      return () => setFurc({ ...Furc, FurcCount16br: Furc.FurcCount16br + 1});
    } else if (Furc.FurcCount16br === 3) {
      return () => setFurc({ ...Furc, FurcCount16br: 0});
    }
  };
  function furc_flow14b() {
    if (Furc.FurcCount14b === 0) {
      return () => setFurc({ ...Furc, FurcCount14b: Furc.FurcCount14b + 1});
    } else if (Furc.FurcCount14b === 1) {
      return () => setFurc({ ...Furc, FurcCount14b: Furc.FurcCount14b + 1});
    } else if (Furc.FurcCount14b === 2) {
      return () => setFurc({ ...Furc, FurcCount14b: Furc.FurcCount14b + 1});
    } else if (Furc.FurcCount14b === 3) {
      return () => setFurc({ ...Furc, FurcCount14b: 0});
    }
  };
  function furc_flow14br() {
    if (Furc.FurcCount14br === 0) {
      return () => setFurc({ ...Furc, FurcCount14br: Furc.FurcCount14br + 1});
    } else if (Furc.FurcCount14br === 1) {
      return () => setFurc({ ...Furc, FurcCount14br: Furc.FurcCount14br + 1});
    } else if (Furc.FurcCount14br === 2) {
      return () => setFurc({ ...Furc, FurcCount14br: Furc.FurcCount14br + 1});
    } else if (Furc.FurcCount14br === 3) {
      return () => setFurc({ ...Furc, FurcCount14br: 0});
    }
  };
  function furc_flow24b() { 
    if (Furc.FurcCount24b === 0) {
      return () => setFurc({ ...Furc, FurcCount24b: Furc.FurcCount24b + 1});
    } else if (Furc.FurcCount24b === 1) {
      return () => setFurc({ ...Furc, FurcCount24b: Furc.FurcCount24b + 1});
    } else if (Furc.FurcCount24b === 2) {
      return () => setFurc({ ...Furc, FurcCount24b: Furc.FurcCount24b + 1});
    } else if (Furc.FurcCount24b === 3) {
      return () => setFurc({ ...Furc, FurcCount24b: 0});
    }
  };
  function furc_flow24br() { 
    if (Furc.FurcCount24br === 0) {
      return () => setFurc({ ...Furc, FurcCount24br: Furc.FurcCount24br + 1});
    } else if (Furc.FurcCount24br === 1) {
      return () => setFurc({ ...Furc, FurcCount24br: Furc.FurcCount24br + 1});
    } else if (Furc.FurcCount24br === 2) {
      return () => setFurc({ ...Furc, FurcCount24br: Furc.FurcCount24br + 1});
    } else if (Furc.FurcCount24br === 3) {
      return () => setFurc({ ...Furc, FurcCount24br: 0});
    }
  };
  function furc_flow26() { 
    if (Furc.FurcCount26 === 0) {
      return () => setFurc({ ...Furc, FurcCount26: Furc.FurcCount26 + 1});
    } else if (Furc.FurcCount26 === 1) {
      return () => setFurc({ ...Furc, FurcCount26: Furc.FurcCount26 + 1});
    } else if (Furc.FurcCount26 === 2) {
      return () => setFurc({ ...Furc, FurcCount26: Furc.FurcCount26 + 1});
    } else if (Furc.FurcCount26 === 3) {
      return () => setFurc({ ...Furc, FurcCount26: 0});
    }
  };
  function furc_flow26b() { 
    if (Furc.FurcCount26b === 0) {
      return () => setFurc({ ...Furc, FurcCount26b: Furc.FurcCount26b + 1});
    } else if (Furc.FurcCount26b === 1) {
      return () => setFurc({ ...Furc, FurcCount26b: Furc.FurcCount26b + 1});
    } else if (Furc.FurcCount26b === 2) {
      return () => setFurc({ ...Furc, FurcCount26b: Furc.FurcCount26b + 1});
    } else if (Furc.FurcCount26b === 3) {
      return () => setFurc({ ...Furc, FurcCount26b: 0});
    }
  };
  function furc_flow26br() { 
    if (Furc.FurcCount26br === 0) {
      return () => setFurc({ ...Furc, FurcCount26br: Furc.FurcCount26br + 1});
    } else if (Furc.FurcCount26br === 1) {
      return () => setFurc({ ...Furc, FurcCount26br: Furc.FurcCount26br + 1});
    } else if (Furc.FurcCount26br === 2) {
      return () => setFurc({ ...Furc, FurcCount26br: Furc.FurcCount26br + 1});
    } else if (Furc.FurcCount26br === 3) {
      return () => setFurc({ ...Furc, FurcCount26br: 0});
    }
  };
  function furc_flow27() { 
    if (Furc.FurcCount27 === 0) {
      return () => setFurc({ ...Furc, FurcCount27: Furc.FurcCount27 + 1});
    } else if (Furc.FurcCount27 === 1) {
      return () => setFurc({ ...Furc, FurcCount27: Furc.FurcCount27 + 1});
    } else if (Furc.FurcCount27 === 2) {
      return () => setFurc({ ...Furc, FurcCount27: Furc.FurcCount27 + 1});
    } else if (Furc.FurcCount27 === 3) {
      return () => setFurc({ ...Furc, FurcCount27: 0});
    }
  };
  function furc_flow27b() { 
    if (Furc.FurcCount27b === 0) {
      return () => setFurc({ ...Furc, FurcCount27b: Furc.FurcCount27b + 1});
    } else if (Furc.FurcCount27b === 1) {
      return () => setFurc({ ...Furc, FurcCount27b: Furc.FurcCount27b + 1});
    } else if (Furc.FurcCount27b === 2) {
      return () => setFurc({ ...Furc, FurcCount27b: Furc.FurcCount27b + 1});
    } else if (Furc.FurcCount27b === 3) {
      return () => setFurc({ ...Furc, FurcCount27b: 0});
    }
  };
  function furc_flow27br() { 
    if (Furc.FurcCount27br === 0) {
      return () => setFurc({ ...Furc, FurcCount27br: Furc.FurcCount27br + 1});
    } else if (Furc.FurcCount27br === 1) {
      return () => setFurc({ ...Furc, FurcCount27br: Furc.FurcCount27br + 1});
    } else if (Furc.FurcCount27br === 2) {
      return () => setFurc({ ...Furc, FurcCount27br: Furc.FurcCount27br + 1});
    } else if (Furc.FurcCount27br === 3) {
      return () => setFurc({ ...Furc, FurcCount27br: 0});
    }
  };
  function furc_flow28() { 
    if (Furc.FurcCount28 === 0) {
      return () => setFurc({ ...Furc, FurcCount28: Furc.FurcCount28 + 1});
    } else if (Furc.FurcCount28 === 1) {
      return () => setFurc({ ...Furc, FurcCount28: Furc.FurcCount28 + 1});
    } else if (Furc.FurcCount28 === 2) {
      return () => setFurc({ ...Furc, FurcCount28: Furc.FurcCount28 + 1});
    } else if (Furc.FurcCount28 === 3) {
      return () => setFurc({ ...Furc, FurcCount28: 0});
    }
  };
  function furc_flow28b() { 
    if (Furc.FurcCount28b === 0) {
      return () => setFurc({ ...Furc, FurcCount28b: Furc.FurcCount28b + 1});
    } else if (Furc.FurcCount28b === 1) {
      return () => setFurc({ ...Furc, FurcCount28b: Furc.FurcCount28b + 1});
    } else if (Furc.FurcCount28b === 2) {
      return () => setFurc({ ...Furc, FurcCount28b: Furc.FurcCount28b + 1});
    } else if (Furc.FurcCount28b === 3) {
      return () => setFurc({ ...Furc, FurcCount28b: 0});
    }
  };

  function furc_flow28br() { 
    if (Furc.FurcCount28br === 0) {
      return () => setFurc({ ...Furc, FurcCount28br: Furc.FurcCount28br + 1});
    } else if (Furc.FurcCount28br === 1) {
      return () => setFurc({ ...Furc, FurcCount28br: Furc.FurcCount28br + 1});
    } else if (Furc.FurcCount28br === 2) {
      return () => setFurc({ ...Furc, FurcCount28br: Furc.FurcCount28br + 1});
    } else if (Furc.FurcCount28br === 3) {
      return () => setFurc({ ...Furc, FurcCount28br: 0});
    }
  };


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
  Gingival("line_18", "polyline_18", GM.t18_1, GM.t18_2, GM.t18_3, GM.t17_1);
  Gingival("line_17", "polyline_17", GM.t17_1, GM.t17_2, GM.t17_3, GM.t16_1);
  Gingival("line_16", "polyline_16", GM.t16_1, GM.t16_2, GM.t16_3, GM.t15_1);
  Gingival("line_15", "polyline_15", GM.t15_1, GM.t15_2, GM.t15_3, GM.t14_1);
  Gingival("line_14", "polyline_14", GM.t14_1, GM.t14_2, GM.t14_3, GM.t13_1);
  Gingival("line_13", "polyline_13", GM.t13_1, GM.t13_2, GM.t13_3, GM.t12_1);
  Gingival("line_12", "polyline_12", GM.t12_1, GM.t12_2, GM.t12_3, GM.t11_1);
  Gingival("line_11", "polyline_11", GM.t11_1, GM.t11_2, GM.t11_3, 0);

  GingivalLg("line_18_lg", "polyline_18_lg", GM.t18_1_lg, GM.t18_2_lg, GM.t18_3_lg, GM.t17_1_lg);
  GingivalLg("line_17_lg", "polyline_17_lg", GM.t17_1_lg, GM.t17_2_lg, GM.t17_3_lg, GM.t16_1_lg);
  GingivalLg("line_16_lg", "polyline_16_lg", GM.t16_1_lg, GM.t16_2_lg, GM.t16_3_lg, GM.t15_1_lg);
  GingivalLg("line_15_lg", "polyline_15_lg", GM.t15_1_lg, GM.t15_2_lg, GM.t15_3_lg, GM.t14_1_lg);
  GingivalLg("line_14_lg", "polyline_14_lg", GM.t14_1_lg, GM.t14_2_lg, GM.t14_3_lg, GM.t13_1_lg);
  GingivalLg("line_13_lg", "polyline_13_lg", GM.t13_1_lg, GM.t13_2_lg, GM.t13_3_lg, GM.t12_1_lg);
  GingivalLg("line_12_lg", "polyline_12_lg", GM.t12_1_lg, GM.t12_2_lg, GM.t12_3_lg, GM.t11_1_lg);
  GingivalLg("line_11_lg", "polyline_11_lg", GM.t11_1_lg, GM.t11_2_lg, GM.t11_3_lg, 0);


  PocketAttachment("polygon_18", "interpoly_18", "interline_18_attachment", "polyline_18_attachment", GM.t18_1, GM.t18_2, GM.t18_3, Probe.p18_1, Probe.p18_2, Probe.p18_3, Probe.p17_1, GM.t17_1);
  PocketAttachment("polygon_17", "interpoly_17", "interline_17_attachment", "polyline_17_attachment", GM.t17_1, GM.t17_2, GM.t17_3, Probe.p17_1, Probe.p17_2, Probe.p17_3, Probe.p16_1, GM.t16_1);
  PocketAttachment("polygon_16", "interpoly_16", "interline_16_attachment", "polyline_16_attachment", GM.t16_1, GM.t16_2, GM.t16_3, Probe.p16_1, Probe.p16_2, Probe.p16_3, Probe.p15_1, GM.t15_1);
  PocketAttachment("polygon_15", "interpoly_15", "interline_15_attachment", "polyline_15_attachment", GM.t15_1, GM.t15_2, GM.t15_3, Probe.p15_1, Probe.p15_2, Probe.p15_3, Probe.p14_1, GM.t14_1);
  PocketAttachment("polygon_14", "interpoly_14", "interline_14_attachment", "polyline_14_attachment", GM.t14_1, GM.t14_2, GM.t14_3, Probe.p14_1, Probe.p14_2, Probe.p14_3, Probe.p13_1, GM.t13_1);
  PocketAttachment("polygon_13", "interpoly_13", "interline_13_attachment", "polyline_13_attachment", GM.t13_1, GM.t13_2, GM.t13_3, Probe.p13_1, Probe.p13_2, Probe.p13_3, Probe.p12_1, GM.t12_1);
  PocketAttachment("polygon_12", "interpoly_12", "interline_12_attachment", "polyline_12_attachment", GM.t12_1, GM.t12_2, GM.t12_3, Probe.p12_1, Probe.p12_2, Probe.p12_3, Probe.p11_1, GM.t11_1);
  PocketAttachment("polygon_11", "interpoly_11", "interline_11_attachment", "polyline_11_attachment", GM.t11_1, GM.t11_2, GM.t11_3, Probe.p11_1, Probe.p11_2, Probe.p11_3, 0, 0);

  PocketAttachmentLg("polygon_18_lg", "interpoly_18_lg", "interline_18_attachment_lg", "polyline_18_attachment_lg", GM.t18_1_lg, GM.t18_2_lg, GM.t18_3_lg, Probe.p18_1_lg, Probe.p18_2_lg, Probe.p18_3_lg, Probe.p17_1_lg, GM.t17_1_lg);
  PocketAttachmentLg("polygon_17_lg", "interpoly_17_lg", "interline_17_attachment_lg", "polyline_17_attachment_lg", GM.t17_1_lg, GM.t17_2_lg, GM.t17_3_lg, Probe.p17_1_lg, Probe.p17_2_lg, Probe.p17_3_lg, Probe.p16_1_lg, GM.t16_1_lg);
  PocketAttachmentLg("polygon_16_lg", "interpoly_16_lg", "interline_16_attachment_lg", "polyline_16_attachment_lg", GM.t16_1_lg, GM.t16_2_lg, GM.t16_3_lg, Probe.p16_1_lg, Probe.p16_2_lg, Probe.p16_3_lg, Probe.p15_1_lg, GM.t15_1_lg);
  PocketAttachmentLg("polygon_15_lg", "interpoly_15_lg", "interline_15_attachment_lg", "polyline_15_attachment_lg", GM.t15_1_lg, GM.t15_2_lg, GM.t15_3_lg, Probe.p15_1_lg, Probe.p15_2_lg, Probe.p15_3_lg, Probe.p14_1_lg, GM.t14_1_lg);
  PocketAttachmentLg("polygon_14_lg", "interpoly_14_lg", "interline_14_attachment_lg", "polyline_14_attachment_lg", GM.t14_1_lg, GM.t14_2_lg, GM.t14_3_lg, Probe.p14_1_lg, Probe.p14_2_lg, Probe.p14_3_lg, Probe.p13_1_lg, GM.t13_1_lg);
  PocketAttachmentLg("polygon_13_lg", "interpoly_13_lg", "interline_13_attachment_lg", "polyline_13_attachment_lg", GM.t13_1_lg, GM.t13_2_lg, GM.t13_3_lg, Probe.p13_1_lg, Probe.p13_2_lg, Probe.p13_3_lg, Probe.p12_1_lg, GM.t12_1_lg);
  PocketAttachmentLg("polygon_12_lg", "interpoly_12_lg", "interline_12_attachment_lg", "polyline_12_attachment_lg", GM.t12_1_lg, GM.t12_2_lg, GM.t12_3_lg, Probe.p12_1_lg, Probe.p12_2_lg, Probe.p12_3_lg, Probe.p11_1_lg, GM.t11_1_lg);
  PocketAttachmentLg("polygon_11_lg", "interpoly_11_lg", "interline_11_attachment_lg", "polyline_11_attachment_lg", GM.t11_1_lg, GM.t11_2_lg, GM.t11_3_lg, Probe.p11_1_lg, Probe.p11_2_lg, Probe.p11_3_lg, 0, 0);



  //Second Half 
  Gingival("line_28", "polyline_28", GM.t28_1, GM.t28_2, GM.t28_3, 0);
  Gingival("line_27", "polyline_27", GM.t27_1, GM.t27_2, GM.t27_3, GM.t28_1);
  Gingival("line_26", "polyline_26", GM.t26_1, GM.t26_2, GM.t26_3, GM.t27_1);
  Gingival("line_25", "polyline_25", GM.t25_1, GM.t25_2, GM.t25_3, GM.t26_1);
  Gingival("line_24", "polyline_24", GM.t24_1, GM.t24_2, GM.t24_3, GM.t25_1);
  Gingival("line_23", "polyline_23", GM.t23_1, GM.t23_2, GM.t23_3, GM.t24_1);
  Gingival("line_22", "polyline_22", GM.t22_1, GM.t22_2, GM.t22_3, GM.t23_1);
  Gingival("line_21", "polyline_21", GM.t21_1, GM.t21_2, GM.t21_3, GM.t22_1);

  GingivalLg("line_28_lg", "polyline_28_lg", GM.t28_1_lg, GM.t28_2_lg, GM.t28_3_lg, 0);
  GingivalLg("line_27_lg", "polyline_27_lg", GM.t27_1_lg, GM.t27_2_lg, GM.t27_3_lg, GM.t28_1_lg);
  GingivalLg("line_26_lg", "polyline_26_lg", GM.t26_1_lg, GM.t26_2_lg, GM.t26_3_lg, GM.t27_1_lg);
  GingivalLg("line_25_lg", "polyline_25_lg", GM.t25_1_lg, GM.t25_2_lg, GM.t25_3_lg, GM.t26_1_lg);
  GingivalLg("line_24_lg", "polyline_24_lg", GM.t24_1_lg, GM.t24_2_lg, GM.t24_3_lg, GM.t25_1_lg);
  GingivalLg("line_23_lg", "polyline_23_lg", GM.t23_1_lg, GM.t23_2_lg, GM.t23_3_lg, GM.t24_1_lg);
  GingivalLg("line_22_lg", "polyline_22_lg", GM.t22_1_lg, GM.t22_2_lg, GM.t22_3_lg, GM.t23_1_lg);
  GingivalLg("line_21_lg", "polyline_21_lg", GM.t21_1_lg, GM.t21_2_lg, GM.t21_3_lg, GM.t22_1_lg);


  PocketAttachment("polygon_28", "interpoly_28", "interline_28_attachment", "polyline_28_attachment", GM.t28_1, GM.t28_2, GM.t28_3, Probe.p28_1, Probe.p28_2, Probe.p28_3, 0, 0);
  PocketAttachment("polygon_27", "interpoly_27", "interline_27_attachment", "polyline_27_attachment", GM.t27_1, GM.t27_2, GM.t27_3, Probe.p27_1, Probe.p27_2, Probe.p27_3, Probe.p28_1, GM.t28_1);
  PocketAttachment("polygon_26", "interpoly_26", "interline_26_attachment", "polyline_26_attachment", GM.t26_1, GM.t26_2, GM.t26_3, Probe.p26_1, Probe.p26_2, Probe.p26_3, Probe.p27_1, GM.t27_1);
  PocketAttachment("polygon_25", "interpoly_25", "interline_25_attachment", "polyline_25_attachment", GM.t25_1, GM.t25_2, GM.t25_3, Probe.p25_1, Probe.p25_2, Probe.p25_3, Probe.p26_1, GM.t26_1);
  PocketAttachment("polygon_24", "interpoly_24", "interline_24_attachment", "polyline_24_attachment", GM.t24_1, GM.t24_2, GM.t24_3, Probe.p24_1, Probe.p24_2, Probe.p24_3, Probe.p25_1, GM.t25_1);
  PocketAttachment("polygon_23", "interpoly_23", "interline_23_attachment", "polyline_23_attachment", GM.t23_1, GM.t23_2, GM.t23_3, Probe.p23_1, Probe.p23_2, Probe.p23_3, Probe.p24_1, GM.t24_1);
  PocketAttachment("polygon_22", "interpoly_22", "interline_22_attachment", "polyline_22_attachment", GM.t22_1, GM.t22_2, GM.t22_3, Probe.p22_1, Probe.p22_2, Probe.p22_3, Probe.p23_1, GM.t23_1);
  PocketAttachment("polygon_21", "interpoly_21", "interline_21_attachment", "polyline_21_attachment", GM.t21_1, GM.t21_2, GM.t21_3, Probe.p21_1, Probe.p21_2, Probe.p21_3, Probe.p22_1, GM.t22_1);

  PocketAttachmentLg("polygon_28_lg", "interpoly_28_lg", "interline_28_attachment_lg", "polyline_28_attachment_lg", GM.t28_1_lg, GM.t28_2_lg, GM.t28_3_lg, Probe.p28_1_lg, Probe.p28_2_lg, Probe.p28_3_lg, 0, 0);
  PocketAttachmentLg("polygon_27_lg", "interpoly_27_lg", "interline_27_attachment_lg", "polyline_27_attachment_lg", GM.t27_1_lg, GM.t27_2_lg, GM.t27_3_lg, Probe.p27_1_lg, Probe.p27_2_lg, Probe.p27_3_lg, Probe.p28_1_lg, GM.t28_1_lg);
  PocketAttachmentLg("polygon_26_lg", "interpoly_26_lg", "interline_26_attachment_lg", "polyline_26_attachment_lg", GM.t26_1_lg, GM.t26_2_lg, GM.t26_3_lg, Probe.p26_1_lg, Probe.p26_2_lg, Probe.p26_3_lg, Probe.p27_1_lg, GM.t27_1_lg);
  PocketAttachmentLg("polygon_25_lg", "interpoly_25_lg", "interline_25_attachment_lg", "polyline_25_attachment_lg", GM.t25_1_lg, GM.t25_2_lg, GM.t25_3_lg, Probe.p25_1_lg, Probe.p25_2_lg, Probe.p25_3_lg, Probe.p26_1_lg, GM.t26_1_lg);
  PocketAttachmentLg("polygon_24_lg", "interpoly_24_lg", "interline_24_attachment_lg", "polyline_24_attachment_lg", GM.t24_1_lg, GM.t24_2_lg, GM.t24_3_lg, Probe.p24_1_lg, Probe.p24_2_lg, Probe.p24_3_lg, Probe.p25_1_lg, GM.t25_1_lg);
  PocketAttachmentLg("polygon_23_lg", "interpoly_23_lg", "interline_23_attachment_lg", "polyline_23_attachment_lg", GM.t23_1_lg, GM.t23_2_lg, GM.t23_3_lg, Probe.p23_1_lg, Probe.p23_2_lg, Probe.p23_3_lg, Probe.p24_1_lg, GM.t24_1_lg);
  PocketAttachmentLg("polygon_22_lg", "interpoly_22_lg", "interline_22_attachment_lg", "polyline_22_attachment_lg", GM.t22_1_lg, GM.t22_2_lg, GM.t22_3_lg, Probe.p22_1_lg, Probe.p22_2_lg, Probe.p22_3_lg, Probe.p23_1_lg, GM.t23_1_lg);
  PocketAttachmentLg("polygon_21_lg", "interpoly_21_lg", "interline_21_attachment_lg", "polyline_21_attachment_lg", GM.t21_1_lg, GM.t21_2_lg, GM.t21_3_lg, Probe.p21_1_lg, Probe.p21_2_lg, Probe.p21_3_lg, Probe.p22_1_lg, GM.t22_1_lg);


  //Session Storage for all the teeth
  //t18
  const tooth18 = { 
  "Note": Note.t18,
  "Mobility": Mob.t18 === "" ? 0 : Mob.t18,
  "Tooth Status": Lock.t18,
  "Furcation":  {
    "Furcation Buccal": Furc.FurcCount18,
    "Furcation Lingual 1": Furc.FurcCount18b,
    "Furcation Lingual 2": Furc.FurcCount18br },
  "BoP": {
    "BoP Buccal 1": BoP.BoP18_1,
    "BoP Buccal 2": BoP.BoP18_2,
    "BoP Buccal 3": BoP.BoP18_3,
    "BoP Lingual 1": BoP.BoP18_1_lg,
    "BoP Lingual 2": BoP.BoP18_2_lg,
    "BoP Lingual 3": BoP.BoP18_3_lg,
    "BoP Score": BoP.BoP_total_18 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague18_1,
    "Plague Buccal 2": Plague.Plague18_2,
    "Plague Buccal 3": Plague.Plague18_3,
    "Plague Lingual 1": Plague.Plague18_1_lg,
    "Plague Lingual 2": Plague.Plague18_2_lg,
    "Plague Lingual 3": Plague.Plague18_3_lg,
    "Plague Score": Plague.Plague_total_18 },
  "Gingival Margin": {
    "GM Buccal 1": GM.t18_1 === "" ? 0 : GM.t18_1,
    "GM Buccal 2": GM.t18_2 === "" ? 0 : GM.t18_2,
    "GM Buccal 3": GM.t18_3 === "" ? 0 : GM.t18_3,
    "GM Lingual 1": GM.t18_1_lg === "" ? 0 : GM.t18_1_lg,
    "GM Lingual 2": GM.t18_2_lg === "" ? 0 : GM.t18_2_lg,
    "GM Lingual 3": GM.t18_3_lg === "" ? 0 : GM.t18_3_lg },
  "Probing Depth": {
    "PD Buccal 1": Probe.p18_1 === "" ? 0 : Probe.p18_1,
    "PD Buccal 2": Probe.p18_2 === "" ? 0 : Probe.p18_2,
    "PD Buccal 3": Probe.p18_3 === "" ? 0 : Probe.p18_3,
    "PD Lingual 1": Probe.p18_1_lg === "" ? 0 : Probe.p18_1_lg,
    "PD Lingual 2": Probe.p18_2_lg === "" ? 0 : Probe.p18_2_lg,
    "PD Lingual 3": Probe.p18_3_lg === "" ? 0 : Probe.p18_3_lg },   
  };

  //t17
  const tooth17 = { 
    "Note": Note.t17,
    "Mobility": Mob.t17 === "" ? 0 : Mob.t17,
    "Tooth Status": Lock.t17,
    "Furcation":  {
      "Furcation Buccal": Furc.FurcCount17,
      "Furcation Lingual 1": Furc.FurcCount17b,
      "Furcation Lingual 2": Furc.FurcCount17br },
    "BoP": {
      "BoP Buccal 1": BoP.BoP17_1,
      "BoP Buccal 2": BoP.BoP17_2,
      "BoP Buccal 3": BoP.BoP17_3,
      "BoP Lingual 1": BoP.BoP17_1_lg,
      "BoP Lingual 2": BoP.BoP17_2_lg,
      "BoP Lingual 3": BoP.BoP17_3_lg,
      "BoP Score": BoP.BoP_total_17 },
    "Plague": {
      "Plague Buccal 1": Plague.Plague17_1,
      "Plague Buccal 2": Plague.Plague17_2,
      "Plague Buccal 3": Plague.Plague17_3,
      "Plague Lingual 1": Plague.Plague17_1_lg,
      "Plague Lingual 2": Plague.Plague17_2_lg,
      "Plague Lingual 3": Plague.Plague17_3_lg,
      "Plague Score": Plague.Plague_total_17 },
      "Gingival Margin": {
        "GM Buccal 1": GM.t17_1 === "" ? 0 : GM.t17_1,
        "GM Buccal 2": GM.t17_2 === "" ? 0 : GM.t17_2,
        "GM Buccal 3": GM.t17_3 === "" ? 0 : GM.t17_3,
        "GM Lingual 1": GM.t17_1_lg === "" ? 0 : GM.t17_1_lg,
        "GM Lingual 2": GM.t17_2_lg === "" ? 0 : GM.t17_2_lg,
        "GM Lingual 3": GM.t17_3_lg === "" ? 0 : GM.t17_3_lg },
      "Probing Depth": {
        "PD Buccal 1": Probe.p17_1 === "" ? 0 : Probe.p17_1,
        "PD Buccal 2": Probe.p17_2 === "" ? 0 : Probe.p17_2,
        "PD Buccal 3": Probe.p17_3 === "" ? 0 : Probe.p17_3,
        "PD Lingual 1": Probe.p17_1_lg === "" ? 0 : Probe.p17_1_lg,
        "PD Lingual 2": Probe.p17_2_lg === "" ? 0 : Probe.p17_2_lg,
        "PD Lingual 3": Probe.p17_3_lg === "" ? 0 : Probe.p17_3_lg },  
    };

    //t16
    const tooth16 = { 
    "Note": Note.t16,
    "Mobility": Mob.t16 === "" ? 0 : Mob.t16,
    "Tooth Status": Lock.t16,
    "Furcation":  {
      "Furcation Buccal": Furc.FurcCount16,
      "Furcation Lingual 1": Furc.FurcCount16b,
      "Furcation Lingual 2": Furc.FurcCount16br },
    "BoP": {
      "BoP Buccal 1": BoP.BoP16_1,
      "BoP Buccal 2": BoP.BoP16_2,
      "BoP Buccal 3": BoP.BoP16_3,
      "BoP Lingual 1": BoP.BoP16_1_lg,
      "BoP Lingual 2": BoP.BoP16_2_lg,
      "BoP Lingual 3": BoP.BoP16_3_lg,
      "BoP Score": BoP.BoP_total_16 },
    "Plague": {
      "Plague Buccal 1": Plague.Plague16_1,
      "Plague Buccal 2": Plague.Plague16_2,
      "Plague Buccal 3": Plague.Plague16_3,
      "Plague Lingual 1": Plague.Plague16_1_lg,
      "Plague Lingual 2": Plague.Plague16_2_lg,
      "Plague Lingual 3": Plague.Plague16_3_lg,
      "Plague Score": Plague.Plague_total_16 },
      "Gingival Margin": {
        "GM Buccal 1": GM.t16_1 === "" ? 0 : GM.t16_1,
        "GM Buccal 2": GM.t16_2 === "" ? 0 : GM.t16_2,
        "GM Buccal 3": GM.t16_3 === "" ? 0 : GM.t16_3,
        "GM Lingual 1": GM.t16_1_lg === "" ? 0 : GM.t16_1_lg,
        "GM Lingual 2": GM.t16_2_lg === "" ? 0 : GM.t16_2_lg,
        "GM Lingual 3": GM.t16_3_lg === "" ? 0 : GM.t16_3_lg },
      "Probing Depth": {
        "PD Buccal 1": Probe.p16_1 === "" ? 0 : Probe.p16_1,
        "PD Buccal 2": Probe.p16_2 === "" ? 0 : Probe.p16_2,
        "PD Buccal 3": Probe.p16_3 === "" ? 0 : Probe.p16_3,
        "PD Lingual 1": Probe.p16_1_lg === "" ? 0 : Probe.p16_1_lg,
        "PD Lingual 2": Probe.p16_2_lg === "" ? 0 : Probe.p16_2_lg,
        "PD Lingual 3": Probe.p16_3_lg === "" ? 0 : Probe.p16_3_lg },  
    };

    //t15
    const tooth15 = { 
    "Note": Note.t15,
    "Mobility": Mob.t15 === "" ? 0 : Mob.t15,
    "Tooth Status": Lock.t15,
    "Furcation":  {
      "Furcation Buccal": null,
      "Furcation Lingual 1": null,
      "Furcation Lingual 2": null },
    "BoP": {
      "BoP Buccal 1": BoP.BoP15_1,
      "BoP Buccal 2": BoP.BoP15_2,
      "BoP Buccal 3": BoP.BoP15_3,
      "BoP Lingual 1": BoP.BoP15_1_lg,
      "BoP Lingual 2": BoP.BoP15_2_lg,
      "BoP Lingual 3": BoP.BoP15_3_lg,
      "BoP Score": BoP.BoP_total_15 },
    "Plague": {
      "Plague Buccal 1": Plague.Plague15_1,
      "Plague Buccal 2": Plague.Plague15_2,
      "Plague Buccal 3": Plague.Plague15_3,
      "Plague Lingual 1": Plague.Plague15_1_lg,
      "Plague Lingual 2": Plague.Plague15_2_lg,
      "Plague Lingual 3": Plague.Plague15_3_lg,
      "Plague Score": Plague.Plague_total_15 },
      "Gingival Margin": {
        "GM Buccal 1": GM.t15_1 === "" ? 0 : GM.t15_1,
        "GM Buccal 2": GM.t15_2 === "" ? 0 : GM.t15_2,
        "GM Buccal 3": GM.t15_3 === "" ? 0 : GM.t15_3,
        "GM Lingual 1": GM.t15_1_lg === "" ? 0 : GM.t15_1_lg,
        "GM Lingual 2": GM.t15_2_lg === "" ? 0 : GM.t15_2_lg,
        "GM Lingual 3": GM.t15_3_lg === "" ? 0 : GM.t15_3_lg },
      "Probing Depth": {
        "PD Buccal 1": Probe.p15_1 === "" ? 0 : Probe.p15_1,
        "PD Buccal 2": Probe.p15_2 === "" ? 0 : Probe.p15_2,
        "PD Buccal 3": Probe.p15_3 === "" ? 0 : Probe.p15_3,
        "PD Lingual 1": Probe.p15_1_lg === "" ? 0 : Probe.p15_1_lg,
        "PD Lingual 2": Probe.p15_2_lg === "" ? 0 : Probe.p15_2_lg,
        "PD Lingual 3": Probe.p15_3_lg === "" ? 0 : Probe.p15_3_lg },  
    };

    //t14
    const tooth14 = { 
    "Note": Note.t14,
    "Mobility": Mob.t14 === "" ? 0 : Mob.t14,
    "Tooth Status": Lock.t14,
    "Furcation":  {
      "Furcation Buccal": null,
      "Furcation Lingual 1": Furc.FurcCount14b,
      "Furcation Lingual 2": Furc.FurcCount14br },
    "BoP": {
      "BoP Buccal 1": BoP.BoP14_1,
      "BoP Buccal 2": BoP.BoP14_2,
      "BoP Buccal 3": BoP.BoP14_3,
      "BoP Lingual 1": BoP.BoP14_1_lg,
      "BoP Lingual 2": BoP.BoP14_2_lg,
      "BoP Lingual 3": BoP.BoP14_3_lg,
      "BoP Score": BoP.BoP_total_14 },
    "Plague": {
      "Plague Buccal 1": Plague.Plague14_1,
      "Plague Buccal 2": Plague.Plague14_2,
      "Plague Buccal 3": Plague.Plague14_3,
      "Plague Lingual 1": Plague.Plague14_1_lg,
      "Plague Lingual 2": Plague.Plague14_2_lg,
      "Plague Lingual 3": Plague.Plague14_3_lg,
      "Plague Score": Plague.Plague_total_14 },
      "Gingival Margin": {
        "GM Buccal 1": GM.t14_1 === "" ? 0 : GM.t14_1,
        "GM Buccal 2": GM.t14_2 === "" ? 0 : GM.t14_2,
        "GM Buccal 3": GM.t14_3 === "" ? 0 : GM.t14_3,
        "GM Lingual 1": GM.t14_1_lg === "" ? 0 : GM.t14_1_lg,
        "GM Lingual 2": GM.t14_2_lg === "" ? 0 : GM.t14_2_lg,
        "GM Lingual 3": GM.t14_3_lg === "" ? 0 : GM.t14_3_lg },
      "Probing Depth": {
        "PD Buccal 1": Probe.p14_1 === "" ? 0 : Probe.p14_1,
        "PD Buccal 2": Probe.p14_2 === "" ? 0 : Probe.p14_2,
        "PD Buccal 3": Probe.p14_3 === "" ? 0 : Probe.p14_3,
        "PD Lingual 1": Probe.p14_1_lg === "" ? 0 : Probe.p14_1_lg,
        "PD Lingual 2": Probe.p14_2_lg === "" ? 0 : Probe.p14_2_lg,
        "PD Lingual 3": Probe.p14_3_lg === "" ? 0 : Probe.p14_3_lg },   
    };

    //t13
    const tooth13 = { 
    "Note": Note.t13,  
    "Mobility": Mob.t13 === "" ? 0 : Mob.t13,
    "Tooth Status": Lock.t13,
    "Furcation":  {
      "Furcation Buccal": null,
      "Furcation Lingual 1": null,
      "Furcation Lingual 2": null },
    "BoP": {
      "BoP Buccal 1": BoP.BoP13_1,
      "BoP Buccal 2": BoP.BoP13_2,
      "BoP Buccal 3": BoP.BoP13_3,
      "BoP Lingual 1": BoP.BoP13_1_lg,
      "BoP Lingual 2": BoP.BoP13_2_lg,
      "BoP Lingual 3": BoP.BoP13_3_lg,
      "BoP Score": BoP.BoP_total_13 },
    "Plague": {
      "Plague Buccal 1": Plague.Plague13_1,
      "Plague Buccal 2": Plague.Plague13_2,
      "Plague Buccal 3": Plague.Plague13_3,
      "Plague Lingual 1": Plague.Plague13_1_lg,
      "Plague Lingual 2": Plague.Plague13_2_lg,
      "Plague Lingual 3": Plague.Plague13_3_lg,
      "Plague Score": Plague.Plague_total_13 },
      "Gingival Margin": {
        "GM Buccal 1": GM.t13_1 === "" ? 0 : GM.t13_1,
        "GM Buccal 2": GM.t13_2 === "" ? 0 : GM.t13_2,
        "GM Buccal 3": GM.t13_3 === "" ? 0 : GM.t13_3,
        "GM Lingual 1": GM.t13_1_lg === "" ? 0 : GM.t13_1_lg,
        "GM Lingual 2": GM.t13_2_lg === "" ? 0 : GM.t13_2_lg,
        "GM Lingual 3": GM.t13_3_lg === "" ? 0 : GM.t13_3_lg },
      "Probing Depth": {
        "PD Buccal 1": Probe.p13_1 === "" ? 0 : Probe.p13_1,
        "PD Buccal 2": Probe.p13_2 === "" ? 0 : Probe.p13_2,
        "PD Buccal 3": Probe.p13_3 === "" ? 0 : Probe.p13_3,
        "PD Lingual 1": Probe.p13_1_lg === "" ? 0 : Probe.p13_1_lg,
        "PD Lingual 2": Probe.p13_2_lg === "" ? 0 : Probe.p13_2_lg,
        "PD Lingual 3": Probe.p13_3_lg === "" ? 0 : Probe.p13_3_lg },  
    };

    //t12
    const tooth12 = { 
    "Note": Note.t12,
    "Mobility": Mob.t12 === "" ? 0 : Mob.t12,
    "Tooth Status": Lock.t12,
    "Furcation":  {
      "Furcation Buccal": null,
      "Furcation Lingual 1": null,
      "Furcation Lingual 2": null },
    "BoP": {
      "BoP Buccal 1": BoP.BoP12_1,
      "BoP Buccal 2": BoP.BoP12_2,
      "BoP Buccal 3": BoP.BoP12_3,
      "BoP Lingual 1": BoP.BoP12_1_lg,
      "BoP Lingual 2": BoP.BoP12_2_lg,
      "BoP Lingual 3": BoP.BoP12_3_lg,
      "BoP Score": BoP.BoP_total_12 },
    "Plague": {
      "Plague Buccal 1": Plague.Plague12_1,
      "Plague Buccal 2": Plague.Plague12_2,
      "Plague Buccal 3": Plague.Plague12_3,
      "Plague Lingual 1": Plague.Plague12_1_lg,
      "Plague Lingual 2": Plague.Plague12_2_lg,
      "Plague Lingual 3": Plague.Plague12_3_lg,
      "Plague Score": Plague.Plague_total_12 },
      "Gingival Margin": {
        "GM Buccal 1": GM.t12_1 === "" ? 0 : GM.t12_1,
        "GM Buccal 2": GM.t12_2 === "" ? 0 : GM.t12_2,
        "GM Buccal 3": GM.t12_3 === "" ? 0 : GM.t12_3,
        "GM Lingual 1": GM.t12_1_lg === "" ? 0 : GM.t12_1_lg,
        "GM Lingual 2": GM.t12_2_lg === "" ? 0 : GM.t12_2_lg,
        "GM Lingual 3": GM.t12_3_lg === "" ? 0 : GM.t12_3_lg },
      "Probing Depth": {
        "PD Buccal 1": Probe.p12_1 === "" ? 0 : Probe.p12_1,
        "PD Buccal 2": Probe.p12_2 === "" ? 0 : Probe.p12_2,
        "PD Buccal 3": Probe.p12_3 === "" ? 0 : Probe.p12_3,
        "PD Lingual 1": Probe.p12_1_lg === "" ? 0 : Probe.p12_1_lg,
        "PD Lingual 2": Probe.p12_2_lg === "" ? 0 : Probe.p12_2_lg,
        "PD Lingual 3": Probe.p12_3_lg === "" ? 0 : Probe.p12_3_lg },   
    };

        //t11
    const tooth11 = { 
    "Note": Note.t11,
    "Mobility": Mob.t11 === "" ? 0 : Mob.t11,
    "Tooth Status": Lock.t11,
    "Furcation":  {
      "Furcation Buccal": null,
      "Furcation Lingual 1": null,
      "Furcation Lingual 2": null },
    "BoP": {
      "BoP Buccal 1": BoP.BoP11_1,
      "BoP Buccal 2": BoP.BoP11_2,
      "BoP Buccal 3": BoP.BoP11_3,
      "BoP Lingual 1": BoP.BoP11_1_lg,
      "BoP Lingual 2": BoP.BoP11_2_lg,
      "BoP Lingual 3": BoP.BoP11_3_lg,
      "BoP Score": BoP.BoP_total_11 },
    "Plague": {
      "Plague Buccal 1": Plague.Plague11_1,
      "Plague Buccal 2": Plague.Plague11_2,
      "Plague Buccal 3": Plague.Plague11_3,
      "Plague Lingual 1": Plague.Plague11_1_lg,
      "Plague Lingual 2": Plague.Plague11_2_lg,
      "Plague Lingual 3": Plague.Plague11_3_lg,
      "Plague Score": Plague.Plague_total_11 },
      "Gingival Margin": {
        "GM Buccal 1": GM.t11_1 === "" ? 0 : GM.t11_1,
        "GM Buccal 2": GM.t11_2 === "" ? 0 : GM.t11_2,
        "GM Buccal 3": GM.t11_3 === "" ? 0 : GM.t11_3,
        "GM Lingual 1": GM.t11_1_lg === "" ? 0 : GM.t11_1_lg,
        "GM Lingual 2": GM.t11_2_lg === "" ? 0 : GM.t11_2_lg,
        "GM Lingual 3": GM.t11_3_lg === "" ? 0 : GM.t11_3_lg },
      "Probing Depth": {
        "PD Buccal 1": Probe.p11_1 === "" ? 0 : Probe.p11_1,
        "PD Buccal 2": Probe.p11_2 === "" ? 0 : Probe.p11_2,
        "PD Buccal 3": Probe.p11_3 === "" ? 0 : Probe.p11_3,
        "PD Lingual 1": Probe.p11_1_lg === "" ? 0 : Probe.p11_1_lg,
        "PD Lingual 2": Probe.p11_2_lg === "" ? 0 : Probe.p11_2_lg,
        "PD Lingual 3": Probe.p11_3_lg === "" ? 0 : Probe.p11_3_lg },   
    };

  //t21
  const tooth21 = { 
  "Note": Note.t21,
  "Mobility": Mob.t21 === "" ? 0 : Mob.t21,
  "Tooth Status": Lock.t21,
  "Furcation":  {
    "Furcation Buccal": null,
    "Furcation Lingual 1": null,
    "Furcation Lingual 2": null },
  "BoP": {
    "BoP Buccal 1": BoP.BoP21_1,
    "BoP Buccal 2": BoP.BoP21_2,
    "BoP Buccal 3": BoP.BoP21_3,
    "BoP Lingual 1": BoP.BoP21_1_lg,
    "BoP Lingual 2": BoP.BoP21_2_lg,
    "BoP Lingual 3": BoP.BoP21_3_lg,
    "BoP Score": BoP.BoP_total_21 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague21_1,
    "Plague Buccal 2": Plague.Plague21_2,
    "Plague Buccal 3": Plague.Plague21_3,
    "Plague Lingual 1": Plague.Plague21_1_lg,
    "Plague Lingual 2": Plague.Plague21_2_lg,
    "Plague Lingual 3": Plague.Plague21_3_lg,
    "Plague Score": Plague.Plague_total_21 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t21_1 === "" ? 0 : GM.t21_1,
      "GM Buccal 2": GM.t21_2 === "" ? 0 : GM.t21_2,
      "GM Buccal 3": GM.t21_3 === "" ? 0 : GM.t21_3,
      "GM Lingual 1": GM.t21_1_lg === "" ? 0 : GM.t21_1_lg,
      "GM Lingual 2": GM.t21_2_lg === "" ? 0 : GM.t21_2_lg,
      "GM Lingual 3": GM.t21_3_lg === "" ? 0 : GM.t21_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p21_1 === "" ? 0 : Probe.p21_1,
      "PD Buccal 2": Probe.p21_2 === "" ? 0 : Probe.p21_2,
      "PD Buccal 3": Probe.p21_3 === "" ? 0 : Probe.p21_3,
      "PD Lingual 1": Probe.p21_1_lg === "" ? 0 : Probe.p21_1_lg,
      "PD Lingual 2": Probe.p21_2_lg === "" ? 0 : Probe.p21_2_lg,
      "PD Lingual 3": Probe.p21_3_lg === "" ? 0 : Probe.p21_3_lg },  
  };  

  //t22
  const tooth22 = { 
  "Note": Note.t22,
  "Mobility": Mob.t22 === "" ? 0 : Mob.t22,
  "Tooth Status": Lock.t22,
  "Furcation":  {
    "Furcation Buccal": null,
    "Furcation Lingual 1": null,
    "Furcation Lingual 2": null },
  "BoP": {
    "BoP Buccal 1": BoP.BoP22_1,
    "BoP Buccal 2": BoP.BoP22_2,
    "BoP Buccal 3": BoP.BoP22_3,
    "BoP Lingual 1": BoP.BoP22_1_lg,
    "BoP Lingual 2": BoP.BoP22_2_lg,
    "BoP Lingual 3": BoP.BoP22_3_lg,
    "BoP Score": BoP.BoP_total_22 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague22_1,
    "Plague Buccal 2": Plague.Plague22_2,
    "Plague Buccal 3": Plague.Plague22_3,
    "Plague Lingual 1": Plague.Plague22_1_lg,
    "Plague Lingual 2": Plague.Plague22_2_lg,
    "Plague Lingual 3": Plague.Plague22_3_lg,
    "Plague Score": Plague.Plague_total_22 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t22_1 === "" ? 0 : GM.t22_1,
      "GM Buccal 2": GM.t22_2 === "" ? 0 : GM.t22_2,
      "GM Buccal 3": GM.t22_3 === "" ? 0 : GM.t22_3,
      "GM Lingual 1": GM.t22_1_lg === "" ? 0 : GM.t22_1_lg,
      "GM Lingual 2": GM.t22_2_lg === "" ? 0 : GM.t22_2_lg,
      "GM Lingual 3": GM.t22_3_lg === "" ? 0 : GM.t22_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p22_1 === "" ? 0 : Probe.p22_1,
      "PD Buccal 2": Probe.p22_2 === "" ? 0 : Probe.p22_2,
      "PD Buccal 3": Probe.p22_3 === "" ? 0 : Probe.p22_3,
      "PD Lingual 1": Probe.p22_1_lg === "" ? 0 : Probe.p22_1_lg,
      "PD Lingual 2": Probe.p22_2_lg === "" ? 0 : Probe.p22_2_lg,
      "PD Lingual 3": Probe.p22_3_lg === "" ? 0 : Probe.p22_3_lg },  
  };

  //t23
  const tooth23 = { 
  "Note": Note.t23,
  "Mobility": Mob.t23 === "" ? 0 : Mob.t23,
  "Tooth Status": Lock.t23,
  "Furcation":  {
    "Furcation Buccal": null,
    "Furcation Lingual 1": null,
    "Furcation Lingual 2": null,
   },
  "BoP": {
    "BoP Buccal 1": BoP.BoP23_1,
    "BoP Buccal 2": BoP.BoP23_2,
    "BoP Buccal 3": BoP.BoP23_3,
    "BoP Lingual 1": BoP.BoP23_1_lg,
    "BoP Lingual 2": BoP.BoP23_2_lg,
    "BoP Lingual 3": BoP.BoP23_3_lg,
    "BoP Score": BoP.BoP_total_23 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague23_1,
    "Plague Buccal 2": Plague.Plague23_2,
    "Plague Buccal 3": Plague.Plague23_3,
    "Plague Lingual 1": Plague.Plague23_1_lg,
    "Plague Lingual 2": Plague.Plague23_2_lg,
    "Plague Lingual 3": Plague.Plague23_3_lg,
    "Plague Score": Plague.Plague_total_23 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t23_1 === "" ? 0 : GM.t23_1,
      "GM Buccal 2": GM.t23_2 === "" ? 0 : GM.t23_2,
      "GM Buccal 3": GM.t23_3 === "" ? 0 : GM.t23_3,
      "GM Lingual 1": GM.t23_1_lg === "" ? 0 : GM.t23_1_lg,
      "GM Lingual 2": GM.t23_2_lg === "" ? 0 : GM.t23_2_lg,
      "GM Lingual 3": GM.t23_3_lg === "" ? 0 : GM.t23_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p23_1 === "" ? 0 : Probe.p23_1,
      "PD Buccal 2": Probe.p23_2 === "" ? 0 : Probe.p23_2,
      "PD Buccal 3": Probe.p23_3 === "" ? 0 : Probe.p23_3,
      "PD Lingual 1": Probe.p23_1_lg === "" ? 0 : Probe.p23_1_lg,
      "PD Lingual 2": Probe.p23_2_lg === "" ? 0 : Probe.p23_2_lg,
      "PD Lingual 3": Probe.p23_3_lg === "" ? 0 : Probe.p23_3_lg },   
  };

  //t24
  const tooth24 = { 
  "Note": Note.t24,
  "Mobility": Mob.t24 === "" ? 0 : Mob.t24,
  "Tooth Status": Lock.t24,
  "Furcation":  {
    "Furcation Buccal": null,    
    "Furcation Lingual 1": Furc.FurcCount24b,
    "Furcation Lingual 2": Furc.FurcCount24br },
  "BoP": {
    "BoP Buccal 1": BoP.BoP24_1,
    "BoP Buccal 2": BoP.BoP24_2,
    "BoP Buccal 3": BoP.BoP24_3,
    "BoP Lingual 1": BoP.BoP24_1_lg,
    "BoP Lingual 2": BoP.BoP24_2_lg,
    "BoP Lingual 3": BoP.BoP24_3_lg,
    "BoP Score": BoP.BoP_total_24 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague24_1,
    "Plague Buccal 2": Plague.Plague24_2,
    "Plague Buccal 3": Plague.Plague24_3,
    "Plague Lingual 1": Plague.Plague24_1_lg,
    "Plague Lingual 2": Plague.Plague24_2_lg,
    "Plague Lingual 3": Plague.Plague24_3_lg,
    "Plague Score": Plague.Plague_total_24 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t24_1 === "" ? 0 : GM.t24_1,
      "GM Buccal 2": GM.t24_2 === "" ? 0 : GM.t24_2,
      "GM Buccal 3": GM.t24_3 === "" ? 0 : GM.t24_3,
      "GM Lingual 1": GM.t24_1_lg === "" ? 0 : GM.t24_1_lg,
      "GM Lingual 2": GM.t24_2_lg === "" ? 0 : GM.t24_2_lg,
      "GM Lingual 3": GM.t24_3_lg === "" ? 0 : GM.t24_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p24_1 === "" ? 0 : Probe.p24_1,
      "PD Buccal 2": Probe.p24_2 === "" ? 0 : Probe.p24_2,
      "PD Buccal 3": Probe.p24_3 === "" ? 0 : Probe.p24_3,
      "PD Lingual 1": Probe.p24_1_lg === "" ? 0 : Probe.p24_1_lg,
      "PD Lingual 2": Probe.p24_2_lg === "" ? 0 : Probe.p24_2_lg,
      "PD Lingual 3": Probe.p24_3_lg === "" ? 0 : Probe.p24_3_lg },  
  };

  //t25
  const tooth25 = { 
  "Note": Note.t25,
  "Mobility": Mob.t25 === "" ? 0 : Mob.t25,
  "Tooth Status": Lock.t25,
  "Furcation":  {
    "Furcation Buccal": null,
    "Furcation Lingual 1": null,
    "Furcation Lingual 2": null },
  "BoP": {
    "BoP Buccal 1": BoP.BoP25_1,
    "BoP Buccal 2": BoP.BoP25_2,
    "BoP Buccal 3": BoP.BoP25_3,
    "BoP Lingual 1": BoP.BoP25_1_lg,
    "BoP Lingual 2": BoP.BoP25_2_lg,
    "BoP Lingual 3": BoP.BoP25_3_lg,
    "BoP Score": BoP.BoP_total_25 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague25_1,
    "Plague Buccal 2": Plague.Plague25_2,
    "Plague Buccal 3": Plague.Plague25_3,
    "Plague Lingual 1": Plague.Plague25_1_lg,
    "Plague Lingual 2": Plague.Plague25_2_lg,
    "Plague Lingual 3": Plague.Plague25_3_lg,
    "Plague Score": Plague.Plague_total_25 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t25_1 === "" ? 0 : GM.t25_1,
      "GM Buccal 2": GM.t25_2 === "" ? 0 : GM.t25_2,
      "GM Buccal 3": GM.t25_3 === "" ? 0 : GM.t25_3,
      "GM Lingual 1": GM.t25_1_lg === "" ? 0 : GM.t25_1_lg,
      "GM Lingual 2": GM.t25_2_lg === "" ? 0 : GM.t25_2_lg,
      "GM Lingual 3": GM.t25_3_lg === "" ? 0 : GM.t25_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p25_1 === "" ? 0 : Probe.p25_1,
      "PD Buccal 2": Probe.p25_2 === "" ? 0 : Probe.p25_2,
      "PD Buccal 3": Probe.p25_3 === "" ? 0 : Probe.p25_3,
      "PD Lingual 1": Probe.p25_1_lg === "" ? 0 : Probe.p25_1_lg,
      "PD Lingual 2": Probe.p25_2_lg === "" ? 0 : Probe.p25_2_lg,
      "PD Lingual 3": Probe.p25_3_lg === "" ? 0 : Probe.p25_3_lg },   
  };

  //t26
  const tooth26 = { 
  "Note": Note.t26,
  "Mobility": Mob.t26 === "" ? 0 : Mob.t26,
  "Tooth Status": Lock.t26,
  "Furcation":  {
    "Furcation Buccal": Furc.FurcCount26,
    "Furcation Lingual 1": Furc.FurcCount26b,
    "Furcation Lingual 2": Furc.FurcCount26br },
  "BoP": {
    "BoP Buccal 1": BoP.BoP26_1,
    "BoP Buccal 2": BoP.BoP26_2,
    "BoP Buccal 3": BoP.BoP26_3,
    "BoP Lingual 1": BoP.BoP26_1_lg,
    "BoP Lingual 2": BoP.BoP26_2_lg,
    "BoP Lingual 3": BoP.BoP26_3_lg,
    "BoP Score": BoP.BoP_total_26 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague26_1,
    "Plague Buccal 2": Plague.Plague26_2,
    "Plague Buccal 3": Plague.Plague26_3,
    "Plague Lingual 1": Plague.Plague26_1_lg,
    "Plague Lingual 2": Plague.Plague26_2_lg,
    "Plague Lingual 3": Plague.Plague26_3_lg,
    "Plague Score": Plague.Plague_total_26 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t26_1 === "" ? 0 : GM.t26_1,
      "GM Buccal 2": GM.t26_2 === "" ? 0 : GM.t26_2,
      "GM Buccal 3": GM.t26_3 === "" ? 0 : GM.t26_3,
      "GM Lingual 1": GM.t26_1_lg === "" ? 0 : GM.t26_1_lg,
      "GM Lingual 2": GM.t26_2_lg === "" ? 0 : GM.t26_2_lg,
      "GM Lingual 3": GM.t26_3_lg === "" ? 0 : GM.t26_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p26_1 === "" ? 0 : Probe.p26_1,
      "PD Buccal 2": Probe.p26_2 === "" ? 0 : Probe.p26_2,
      "PD Buccal 3": Probe.p26_3 === "" ? 0 : Probe.p26_3,
      "PD Lingual 1": Probe.p26_1_lg === "" ? 0 : Probe.p26_1_lg,
      "PD Lingual 2": Probe.p26_2_lg === "" ? 0 : Probe.p26_2_lg,
      "PD Lingual 3": Probe.p26_3_lg === "" ? 0 : Probe.p26_3_lg },  
  };

  //t27
  const tooth27 = { 
  "Note": Note.t27,
  "Mobility": Mob.t27 === "" ? 0 : Mob.t27,
  "Tooth Status": Lock.t27,
  "Furcation":  {
    "Furcation Buccal": Furc.FurcCount27,
    "Furcation Lingual 1": Furc.FurcCount27b,
    "Furcation Lingual 2": Furc.FurcCount27br },
  "BoP": {
    "BoP Buccal 1": BoP.BoP27_1,
    "BoP Buccal 2": BoP.BoP27_2,
    "BoP Buccal 3": BoP.BoP27_3,
    "BoP Lingual 1": BoP.BoP27_1_lg,
    "BoP Lingual 2": BoP.BoP27_2_lg,
    "BoP Lingual 3": BoP.BoP27_3_lg,
    "BoP Score": BoP.BoP_total_27 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague27_1,
    "Plague Buccal 2": Plague.Plague27_2,
    "Plague Buccal 3": Plague.Plague27_3,
    "Plague Lingual 1": Plague.Plague27_1_lg,
    "Plague Lingual 2": Plague.Plague27_2_lg,
    "Plague Lingual 3": Plague.Plague27_3_lg,
    "Plague Score": Plague.Plague_total_27 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t27_1 === "" ? 0 : GM.t27_1,
      "GM Buccal 2": GM.t27_2 === "" ? 0 : GM.t27_2,
      "GM Buccal 3": GM.t27_3 === "" ? 0 : GM.t27_3,
      "GM Lingual 1": GM.t27_1_lg === "" ? 0 : GM.t27_1_lg,
      "GM Lingual 2": GM.t27_2_lg === "" ? 0 : GM.t27_2_lg,
      "GM Lingual 3": GM.t27_3_lg === "" ? 0 : GM.t27_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p27_1 === "" ? 0 : Probe.p27_1,
      "PD Buccal 2": Probe.p27_2 === "" ? 0 : Probe.p27_2,
      "PD Buccal 3": Probe.p27_3 === "" ? 0 : Probe.p27_3,
      "PD Lingual 1": Probe.p27_1_lg === "" ? 0 : Probe.p27_1_lg,
      "PD Lingual 2": Probe.p27_2_lg === "" ? 0 : Probe.p27_2_lg,
      "PD Lingual 3": Probe.p27_3_lg === "" ? 0 : Probe.p27_3_lg },  
  };

  //t28
  const tooth28 = { 
  "Note": Note.t28,
  "Mobility": Mob.t28 === "" ? 0 : Mob.t28,
  "Tooth Status": Lock.t28,
  "Furcation":  {
    "Furcation Buccal": Furc.FurcCount28,
    "Furcation Lingual 1": Furc.FurcCount28b,
    "Furcation Lingual 2": Furc.FurcCount28br },
  "BoP": {
    "BoP Buccal 1": BoP.BoP28_1,
    "BoP Buccal 2": BoP.BoP28_2,
    "BoP Buccal 3": BoP.BoP28_3,
    "BoP Lingual 1": BoP.BoP28_1_lg,
    "BoP Lingual 2": BoP.BoP28_2_lg,
    "BoP Lingual 3": BoP.BoP28_3_lg,
    "BoP Score": BoP.BoP_total_28 },
  "Plague": {
    "Plague Buccal 1": Plague.Plague28_1,
    "Plague Buccal 2": Plague.Plague28_2,
    "Plague Buccal 3": Plague.Plague28_3,
    "Plague Lingual 1": Plague.Plague28_1_lg,
    "Plague Lingual 2": Plague.Plague28_2_lg,
    "Plague Lingual 3": Plague.Plague28_3_lg,
    "Plague Score": Plague.Plague_total_28 },
    "Gingival Margin": {
      "GM Buccal 1": GM.t28_1 === "" ? 0 : GM.t28_1,
      "GM Buccal 2": GM.t28_2 === "" ? 0 : GM.t28_2,
      "GM Buccal 3": GM.t28_3 === "" ? 0 : GM.t28_3,
      "GM Lingual 1": GM.t28_1_lg === "" ? 0 : GM.t28_1_lg,
      "GM Lingual 2": GM.t28_2_lg === "" ? 0 : GM.t28_2_lg,
      "GM Lingual 3": GM.t28_3_lg === "" ? 0 : GM.t28_3_lg },
    "Probing Depth": {
      "PD Buccal 1": Probe.p28_1 === "" ? 0 : Probe.p28_1,
      "PD Buccal 2": Probe.p28_2 === "" ? 0 : Probe.p28_2,
      "PD Buccal 3": Probe.p28_3 === "" ? 0 : Probe.p28_3,
      "PD Lingual 1": Probe.p28_1_lg === "" ? 0 : Probe.p28_1_lg,
      "PD Lingual 2": Probe.p28_2_lg === "" ? 0 : Probe.p28_2_lg,
      "PD Lingual 3": Probe.p28_3_lg === "" ? 0 : Probe.p28_3_lg },   
  };


 
  useEffect(() => {
    const data18 = JSON.parse(localStorage.getItem("18"));
    const data17 = JSON.parse(localStorage.getItem("17"));
    const data16 = JSON.parse(localStorage.getItem("16"));
    const data15 = JSON.parse(localStorage.getItem("15"));
    const data14 = JSON.parse(localStorage.getItem("14"));
    const data13 = JSON.parse(localStorage.getItem("13"));
    const data12 = JSON.parse(localStorage.getItem("12"));
    const data11 = JSON.parse(localStorage.getItem("11"));
    const data21 = JSON.parse(localStorage.getItem("21"));
    const data22 = JSON.parse(localStorage.getItem("22"));
    const data23 = JSON.parse(localStorage.getItem("23"));
    const data24 = JSON.parse(localStorage.getItem("24"));
    const data25 = JSON.parse(localStorage.getItem("25"));
    const data26 = JSON.parse(localStorage.getItem("26"));
    const data27 = JSON.parse(localStorage.getItem("27"));
    const data28 = JSON.parse(localStorage.getItem("28"));
    if (data18 && data17 && data16 && data15 && data14 && data13 && data12 && data11 && data21 && data22 && data23 && data24 && data25 && data26 && data27 && data28) {
      setNote( {...Note, t18: data18["Note"],  t17: data17["Note"], t16: data16["Note"], t15: data15["Note"], t14: data14["Note"], t13: data13["Note"], t12: data12["Note"], t11: data11["Note"], 
      t28: data28["Note"],  t27: data27["Note"], t26: data26["Note"], t25: data25["Note"], t24: data24["Note"], t23: data23["Note"], t22: data22["Note"], t21: data21["Note"]});      
      setMob( {...Mob, t18: data18["Mobility"],  t17: data17["Mobility"], t16: data16["Mobility"], t15: data15["Mobility"], t14: data14["Mobility"], t13: data13["Mobility"], t12: data12["Mobility"], t11: data11["Mobility"], 
                      t28: data28["Mobility"],  t27: data27["Mobility"], t26: data26["Mobility"], t25: data25["Mobility"], t24: data24["Mobility"], t23: data23["Mobility"], t22: data22["Mobility"], t21: data21["Mobility"]});      
      setLock( { ...Lock, t18: data18["Tooth Status"], t17: data17["Tooth Status"], t16: data16["Tooth Status"], t15: data15["Tooth Status"], t14: data14["Tooth Status"], t13: data13["Tooth Status"], t12: data12["Tooth Status"], t11: data11["Tooth Status"], 
                        t28: data28["Tooth Status"], t27: data27["Tooth Status"], t26: data26["Tooth Status"], t25: data25["Tooth Status"], t24: data24["Tooth Status"], t23: data23["Tooth Status"], t22: data22["Tooth Status"], t21: data21["Tooth Status"]});
      setFurc( {...Furc, FurcCount18: data18["Furcation"]["Furcation Buccal"], FurcCount18b: data18["Furcation"]["Furcation Lingual 1"], FurcCount18br: data18["Furcation"]["Furcation Lingual 2"],
                        FurcCount17: data17["Furcation"]["Furcation Buccal"], FurcCount17b: data17["Furcation"]["Furcation Lingual 1"], FurcCount17br: data17["Furcation"]["Furcation Lingual 2"],
                        FurcCount16: data16["Furcation"]["Furcation Buccal"], FurcCount16b: data16["Furcation"]["Furcation Lingual 1"], FurcCount16br: data16["Furcation"]["Furcation Lingual 2"],
                        FurcCount14b: data14["Furcation"]["Furcation Lingual 1"], FurcCount14br: data14["Furcation"]["Furcation Lingual 2"],
                        FurcCount24b: data24["Furcation"]["Furcation Lingual 1"], FurcCount24br: data24["Furcation"]["Furcation Lingual 2"],
                        FurcCount26: data26["Furcation"]["Furcation Buccal"], FurcCount26b: data26["Furcation"]["Furcation Lingual 1"], FurcCount26br: data26["Furcation"]["Furcation Lingual 2"],
                        FurcCount27: data27["Furcation"]["Furcation Buccal"], FurcCount27b: data27["Furcation"]["Furcation Lingual 1"], FurcCount27br: data27["Furcation"]["Furcation Lingual 2"],
                        FurcCount28: data28["Furcation"]["Furcation Buccal"], FurcCount28b: data28["Furcation"]["Furcation Lingual 1"], FurcCount28br: data28["Furcation"]["Furcation Lingual 2"],});
      setBoP( {...BoP, BoP18_1: data18["BoP"]["BoP Buccal 1"], BoP18_2: data18["BoP"]["BoP Buccal 2"], BoP18_3: data18["BoP"]["BoP Buccal 3"], BoP18_1_lg: data18["BoP"]["BoP Lingual 1"], BoP18_2_lg: data18["BoP"]["BoP Lingual 2"], BoP18_3_lg: data18["BoP"]["BoP Lingual 3"], BoP_total_18: data18["BoP"]["BoP Score"], 
                      BoP17_1: data17["BoP"]["BoP Buccal 1"], BoP17_2: data17["BoP"]["BoP Buccal 2"], BoP17_3: data17["BoP"]["BoP Buccal 3"], BoP17_1_lg: data17["BoP"]["BoP Lingual 1"], BoP17_2_lg: data17["BoP"]["BoP Lingual 2"], BoP17_3_lg: data17["BoP"]["BoP Lingual 3"], BoP_total_17: data17["BoP"]["BoP Score"],
                      BoP16_1: data16["BoP"]["BoP Buccal 1"], BoP16_2: data16["BoP"]["BoP Buccal 2"], BoP16_3: data16["BoP"]["BoP Buccal 3"], BoP16_1_lg: data16["BoP"]["BoP Lingual 1"], BoP16_2_lg: data16["BoP"]["BoP Lingual 2"], BoP16_3_lg: data16["BoP"]["BoP Lingual 3"], BoP_total_16: data16["BoP"]["BoP Score"],
                      BoP15_1: data15["BoP"]["BoP Buccal 1"], BoP15_2: data15["BoP"]["BoP Buccal 2"], BoP15_3: data15["BoP"]["BoP Buccal 3"], BoP15_1_lg: data15["BoP"]["BoP Lingual 1"], BoP15_2_lg: data15["BoP"]["BoP Lingual 2"], BoP15_3_lg: data15["BoP"]["BoP Lingual 3"], BoP_total_15: data15["BoP"]["BoP Score"],
                      BoP14_1: data14["BoP"]["BoP Buccal 1"], BoP14_2: data14["BoP"]["BoP Buccal 2"], BoP14_3: data14["BoP"]["BoP Buccal 3"], BoP14_1_lg: data14["BoP"]["BoP Lingual 1"], BoP14_2_lg: data14["BoP"]["BoP Lingual 2"], BoP14_3_lg: data14["BoP"]["BoP Lingual 3"], BoP_total_14: data14["BoP"]["BoP Score"],
                      BoP13_1: data13["BoP"]["BoP Buccal 1"], BoP13_2: data13["BoP"]["BoP Buccal 2"], BoP13_3: data13["BoP"]["BoP Buccal 3"], BoP13_1_lg: data13["BoP"]["BoP Lingual 1"], BoP13_2_lg: data13["BoP"]["BoP Lingual 2"], BoP13_3_lg: data13["BoP"]["BoP Lingual 3"], BoP_total_13: data13["BoP"]["BoP Score"],
                      BoP12_1: data12["BoP"]["BoP Buccal 1"], BoP12_2: data12["BoP"]["BoP Buccal 2"], BoP12_3: data12["BoP"]["BoP Buccal 3"], BoP12_1_lg: data12["BoP"]["BoP Lingual 1"], BoP12_2_lg: data12["BoP"]["BoP Lingual 2"], BoP12_3_lg: data12["BoP"]["BoP Lingual 3"], BoP_total_12: data12["BoP"]["BoP Score"],
                      BoP11_1: data11["BoP"]["BoP Buccal 1"], BoP11_2: data11["BoP"]["BoP Buccal 2"], BoP11_3: data11["BoP"]["BoP Buccal 3"], BoP11_1_lg: data11["BoP"]["BoP Lingual 1"], BoP11_2_lg: data11["BoP"]["BoP Lingual 2"], BoP11_3_lg: data11["BoP"]["BoP Lingual 3"], BoP_total_11: data11["BoP"]["BoP Score"],
                      BoP28_1: data28["BoP"]["BoP Buccal 1"], BoP28_2: data28["BoP"]["BoP Buccal 2"], BoP28_3: data28["BoP"]["BoP Buccal 3"], BoP28_1_lg: data28["BoP"]["BoP Lingual 1"], BoP28_2_lg: data28["BoP"]["BoP Lingual 2"], BoP28_3_lg: data28["BoP"]["BoP Lingual 3"], BoP_total_28: data28["BoP"]["BoP Score"],
                      BoP27_1: data27["BoP"]["BoP Buccal 1"], BoP27_2: data27["BoP"]["BoP Buccal 2"], BoP27_3: data27["BoP"]["BoP Buccal 3"], BoP27_1_lg: data27["BoP"]["BoP Lingual 1"], BoP27_2_lg: data27["BoP"]["BoP Lingual 2"], BoP27_3_lg: data27["BoP"]["BoP Lingual 3"], BoP_total_27: data27["BoP"]["BoP Score"],
                      BoP26_1: data26["BoP"]["BoP Buccal 1"], BoP26_2: data26["BoP"]["BoP Buccal 2"], BoP26_3: data26["BoP"]["BoP Buccal 3"], BoP26_1_lg: data26["BoP"]["BoP Lingual 1"], BoP26_2_lg: data26["BoP"]["BoP Lingual 2"], BoP26_3_lg: data26["BoP"]["BoP Lingual 3"], BoP_total_26: data26["BoP"]["BoP Score"],
                      BoP25_1: data25["BoP"]["BoP Buccal 1"], BoP25_2: data25["BoP"]["BoP Buccal 2"], BoP25_3: data25["BoP"]["BoP Buccal 3"], BoP25_1_lg: data25["BoP"]["BoP Lingual 1"], BoP25_2_lg: data25["BoP"]["BoP Lingual 2"], BoP25_3_lg: data25["BoP"]["BoP Lingual 3"], BoP_total_25: data25["BoP"]["BoP Score"],
                      BoP24_1: data24["BoP"]["BoP Buccal 1"], BoP24_2: data24["BoP"]["BoP Buccal 2"], BoP24_3: data24["BoP"]["BoP Buccal 3"], BoP24_1_lg: data24["BoP"]["BoP Lingual 1"], BoP24_2_lg: data24["BoP"]["BoP Lingual 2"], BoP24_3_lg: data24["BoP"]["BoP Lingual 3"], BoP_total_24: data24["BoP"]["BoP Score"],
                      BoP23_1: data23["BoP"]["BoP Buccal 1"], BoP23_2: data23["BoP"]["BoP Buccal 2"], BoP23_3: data23["BoP"]["BoP Buccal 3"], BoP23_1_lg: data23["BoP"]["BoP Lingual 1"], BoP23_2_lg: data23["BoP"]["BoP Lingual 2"], BoP23_3_lg: data23["BoP"]["BoP Lingual 3"], BoP_total_23: data23["BoP"]["BoP Score"],
                      BoP22_1: data22["BoP"]["BoP Buccal 1"], BoP22_2: data22["BoP"]["BoP Buccal 2"], BoP22_3: data22["BoP"]["BoP Buccal 3"], BoP22_1_lg: data22["BoP"]["BoP Lingual 1"], BoP22_2_lg: data22["BoP"]["BoP Lingual 2"], BoP22_3_lg: data22["BoP"]["BoP Lingual 3"], BoP_total_22: data22["BoP"]["BoP Score"],
                      BoP21_1: data21["BoP"]["BoP Buccal 1"], BoP21_2: data21["BoP"]["BoP Buccal 2"], BoP21_3: data21["BoP"]["BoP Buccal 3"], BoP21_1_lg: data21["BoP"]["BoP Lingual 1"], BoP21_2_lg: data21["BoP"]["BoP Lingual 2"], BoP21_3_lg: data21["BoP"]["BoP Lingual 3"], BoP_total_21: data21["BoP"]["BoP Score"]});
      setPlague( {...Plague, Plague18_1: data18["Plague"]["Plague Buccal 1"], Plague18_2: data18["Plague"]["Plague Buccal 2"], Plague18_3: data18["Plague"]["Plague Buccal 3"], Plague18_1_lg: data18["Plague"]["Plague Lingual 1"], Plague18_2_lg: data18["Plague"]["Plague Lingual 2"], Plague18_3_lg: data18["Plague"]["Plague Lingual 3"], Plague_total_18: data18["Plague"]["Plague Score"],
                          Plague17_1: data17["Plague"]["Plague Buccal 1"], Plague17_2: data17["Plague"]["Plague Buccal 2"], Plague17_3: data17["Plague"]["Plague Buccal 3"], Plague17_1_lg: data17["Plague"]["Plague Lingual 1"], Plague17_2_lg: data17["Plague"]["Plague Lingual 2"], Plague17_3_lg: data17["Plague"]["Plague Lingual 3"], Plague_total_17: data17["Plague"]["Plague Score"],
                          Plague16_1: data16["Plague"]["Plague Buccal 1"], Plague16_2: data16["Plague"]["Plague Buccal 2"], Plague16_3: data16["Plague"]["Plague Buccal 3"], Plague16_1_lg: data16["Plague"]["Plague Lingual 1"], Plague16_2_lg: data16["Plague"]["Plague Lingual 2"], Plague16_3_lg: data16["Plague"]["Plague Lingual 3"], Plague_total_16: data16["Plague"]["Plague Score"],
                          Plague15_1: data15["Plague"]["Plague Buccal 1"], Plague15_2: data15["Plague"]["Plague Buccal 2"], Plague15_3: data15["Plague"]["Plague Buccal 3"], Plague15_1_lg: data15["Plague"]["Plague Lingual 1"], Plague15_2_lg: data15["Plague"]["Plague Lingual 2"], Plague15_3_lg: data15["Plague"]["Plague Lingual 3"], Plague_total_15: data15["Plague"]["Plague Score"],
                          Plague14_1: data14["Plague"]["Plague Buccal 1"], Plague14_2: data14["Plague"]["Plague Buccal 2"], Plague14_3: data14["Plague"]["Plague Buccal 3"], Plague14_1_lg: data14["Plague"]["Plague Lingual 1"], Plague14_2_lg: data14["Plague"]["Plague Lingual 2"], Plague14_3_lg: data14["Plague"]["Plague Lingual 3"], Plague_total_14: data14["Plague"]["Plague Score"],
                          Plague13_1: data13["Plague"]["Plague Buccal 1"], Plague13_2: data13["Plague"]["Plague Buccal 2"], Plague13_3: data13["Plague"]["Plague Buccal 3"], Plague13_1_lg: data13["Plague"]["Plague Lingual 1"], Plague13_2_lg: data13["Plague"]["Plague Lingual 2"], Plague13_3_lg: data13["Plague"]["Plague Lingual 3"], Plague_total_13: data13["Plague"]["Plague Score"],
                          Plague12_1: data12["Plague"]["Plague Buccal 1"], Plague12_2: data12["Plague"]["Plague Buccal 2"], Plague12_3: data12["Plague"]["Plague Buccal 3"], Plague12_1_lg: data12["Plague"]["Plague Lingual 1"], Plague12_2_lg: data12["Plague"]["Plague Lingual 2"], Plague12_3_lg: data12["Plague"]["Plague Lingual 3"], Plague_total_12: data12["Plague"]["Plague Score"],
                          Plague11_1: data11["Plague"]["Plague Buccal 1"], Plague11_2: data11["Plague"]["Plague Buccal 2"], Plague11_3: data11["Plague"]["Plague Buccal 3"], Plague11_1_lg: data11["Plague"]["Plague Lingual 1"], Plague11_2_lg: data11["Plague"]["Plague Lingual 2"], Plague11_3_lg: data11["Plague"]["Plague Lingual 3"], Plague_total_11: data11["Plague"]["Plague Score"],
                          Plague28_1: data28["Plague"]["Plague Buccal 1"], Plague28_2: data28["Plague"]["Plague Buccal 2"], Plague28_3: data28["Plague"]["Plague Buccal 3"], Plague28_1_lg: data28["Plague"]["Plague Lingual 1"], Plague28_2_lg: data28["Plague"]["Plague Lingual 2"], Plague28_3_lg: data28["Plague"]["Plague Lingual 3"], Plague_total_28: data28["Plague"]["Plague Score"],
                          Plague27_1: data27["Plague"]["Plague Buccal 1"], Plague27_2: data27["Plague"]["Plague Buccal 2"], Plague27_3: data27["Plague"]["Plague Buccal 3"], Plague27_1_lg: data27["Plague"]["Plague Lingual 1"], Plague27_2_lg: data27["Plague"]["Plague Lingual 2"], Plague27_3_lg: data27["Plague"]["Plague Lingual 3"], Plague_total_27: data27["Plague"]["Plague Score"],
                          Plague26_1: data26["Plague"]["Plague Buccal 1"], Plague26_2: data26["Plague"]["Plague Buccal 2"], Plague26_3: data26["Plague"]["Plague Buccal 3"], Plague26_1_lg: data26["Plague"]["Plague Lingual 1"], Plague26_2_lg: data26["Plague"]["Plague Lingual 2"], Plague26_3_lg: data26["Plague"]["Plague Lingual 3"], Plague_total_26: data26["Plague"]["Plague Score"],
                          Plague25_1: data25["Plague"]["Plague Buccal 1"], Plague25_2: data25["Plague"]["Plague Buccal 2"], Plague25_3: data25["Plague"]["Plague Buccal 3"], Plague25_1_lg: data25["Plague"]["Plague Lingual 1"], Plague25_2_lg: data25["Plague"]["Plague Lingual 2"], Plague25_3_lg: data25["Plague"]["Plague Lingual 3"], Plague_total_25: data25["Plague"]["Plague Score"],
                          Plague24_1: data24["Plague"]["Plague Buccal 1"], Plague24_2: data24["Plague"]["Plague Buccal 2"], Plague24_3: data24["Plague"]["Plague Buccal 3"], Plague24_1_lg: data24["Plague"]["Plague Lingual 1"], Plague24_2_lg: data24["Plague"]["Plague Lingual 2"], Plague24_3_lg: data24["Plague"]["Plague Lingual 3"], Plague_total_24: data24["Plague"]["Plague Score"],
                          Plague23_1: data23["Plague"]["Plague Buccal 1"], Plague23_2: data23["Plague"]["Plague Buccal 2"], Plague23_3: data23["Plague"]["Plague Buccal 3"], Plague23_1_lg: data23["Plague"]["Plague Lingual 1"], Plague23_2_lg: data23["Plague"]["Plague Lingual 2"], Plague23_3_lg: data23["Plague"]["Plague Lingual 3"], Plague_total_23: data23["Plague"]["Plague Score"],
                          Plague22_1: data22["Plague"]["Plague Buccal 1"], Plague22_2: data22["Plague"]["Plague Buccal 2"], Plague22_3: data22["Plague"]["Plague Buccal 3"], Plague22_1_lg: data22["Plague"]["Plague Lingual 1"], Plague22_2_lg: data22["Plague"]["Plague Lingual 2"], Plague22_3_lg: data22["Plague"]["Plague Lingual 3"], Plague_total_22: data22["Plague"]["Plague Score"],
                          Plague21_1: data21["Plague"]["Plague Buccal 1"], Plague21_2: data21["Plague"]["Plague Buccal 2"], Plague21_3: data21["Plague"]["Plague Buccal 3"], Plague21_1_lg: data21["Plague"]["Plague Lingual 1"], Plague21_2_lg: data21["Plague"]["Plague Lingual 2"], Plague21_3_lg: data21["Plague"]["Plague Lingual 3"], Plague_total_21: data21["Plague"]["Plague Score"]});
      setGM( {...GM, t18_1: data18["Gingival Margin"]["GM Buccal 1"], t18_2: data18["Gingival Margin"]["GM Buccal 2"], t18_3: data18["Gingival Margin"]["GM Buccal 3"], t18_1_lg: data18["Gingival Margin"]["GM Lingual 1"], t18_2_lg: data18["Gingival Margin"]["GM Lingual 2"], t18_3_lg: data18["Gingival Margin"]["GM Lingual 3"],
                  t17_1: data17["Gingival Margin"]["GM Buccal 1"], t17_2: data17["Gingival Margin"]["GM Buccal 2"], t17_3: data17["Gingival Margin"]["GM Buccal 3"], t17_1_lg: data17["Gingival Margin"]["GM Lingual 1"], t17_2_lg: data17["Gingival Margin"]["GM Lingual 2"], t17_3_lg: data17["Gingival Margin"]["GM Lingual 3"],
                  t16_1: data16["Gingival Margin"]["GM Buccal 1"], t16_2: data16["Gingival Margin"]["GM Buccal 2"], t16_3: data16["Gingival Margin"]["GM Buccal 3"], t16_1_lg: data16["Gingival Margin"]["GM Lingual 1"], t16_2_lg: data16["Gingival Margin"]["GM Lingual 2"], t16_3_lg: data16["Gingival Margin"]["GM Lingual 3"],
                  t15_1: data15["Gingival Margin"]["GM Buccal 1"], t15_2: data15["Gingival Margin"]["GM Buccal 2"], t15_3: data15["Gingival Margin"]["GM Buccal 3"], t15_1_lg: data15["Gingival Margin"]["GM Lingual 1"], t15_2_lg: data15["Gingival Margin"]["GM Lingual 2"], t15_3_lg: data15["Gingival Margin"]["GM Lingual 3"],
                  t14_1: data14["Gingival Margin"]["GM Buccal 1"], t14_2: data14["Gingival Margin"]["GM Buccal 2"], t14_3: data14["Gingival Margin"]["GM Buccal 3"], t14_1_lg: data14["Gingival Margin"]["GM Lingual 1"], t14_2_lg: data14["Gingival Margin"]["GM Lingual 2"], t14_3_lg: data14["Gingival Margin"]["GM Lingual 3"],
                  t13_1: data13["Gingival Margin"]["GM Buccal 1"], t13_2: data13["Gingival Margin"]["GM Buccal 2"], t13_3: data13["Gingival Margin"]["GM Buccal 3"], t13_1_lg: data13["Gingival Margin"]["GM Lingual 1"], t13_2_lg: data13["Gingival Margin"]["GM Lingual 2"], t13_3_lg: data13["Gingival Margin"]["GM Lingual 3"],
                  t12_1: data12["Gingival Margin"]["GM Buccal 1"], t12_2: data12["Gingival Margin"]["GM Buccal 2"], t12_3: data12["Gingival Margin"]["GM Buccal 3"], t12_1_lg: data12["Gingival Margin"]["GM Lingual 1"], t12_2_lg: data12["Gingival Margin"]["GM Lingual 2"], t12_3_lg: data12["Gingival Margin"]["GM Lingual 3"],
                  t11_1: data11["Gingival Margin"]["GM Buccal 1"], t11_2: data11["Gingival Margin"]["GM Buccal 2"], t11_3: data11["Gingival Margin"]["GM Buccal 3"], t11_1_lg: data11["Gingival Margin"]["GM Lingual 1"], t11_2_lg: data11["Gingival Margin"]["GM Lingual 2"], t11_3_lg: data11["Gingival Margin"]["GM Lingual 3"],
                  t28_1: data28["Gingival Margin"]["GM Buccal 1"], t28_2: data28["Gingival Margin"]["GM Buccal 2"], t28_3: data28["Gingival Margin"]["GM Buccal 3"], t28_1_lg: data28["Gingival Margin"]["GM Lingual 1"], t28_2_lg: data28["Gingival Margin"]["GM Lingual 2"], t28_3_lg: data28["Gingival Margin"]["GM Lingual 3"],
                  t27_1: data27["Gingival Margin"]["GM Buccal 1"], t27_2: data27["Gingival Margin"]["GM Buccal 2"], t27_3: data27["Gingival Margin"]["GM Buccal 3"], t27_1_lg: data27["Gingival Margin"]["GM Lingual 1"], t27_2_lg: data27["Gingival Margin"]["GM Lingual 2"], t27_3_lg: data27["Gingival Margin"]["GM Lingual 3"],
                  t26_1: data26["Gingival Margin"]["GM Buccal 1"], t26_2: data26["Gingival Margin"]["GM Buccal 2"], t26_3: data26["Gingival Margin"]["GM Buccal 3"], t26_1_lg: data26["Gingival Margin"]["GM Lingual 1"], t26_2_lg: data26["Gingival Margin"]["GM Lingual 2"], t26_3_lg: data26["Gingival Margin"]["GM Lingual 3"],
                  t25_1: data25["Gingival Margin"]["GM Buccal 1"], t25_2: data25["Gingival Margin"]["GM Buccal 2"], t25_3: data25["Gingival Margin"]["GM Buccal 3"], t25_1_lg: data25["Gingival Margin"]["GM Lingual 1"], t25_2_lg: data25["Gingival Margin"]["GM Lingual 2"], t25_3_lg: data25["Gingival Margin"]["GM Lingual 3"],
                  t24_1: data24["Gingival Margin"]["GM Buccal 1"], t24_2: data24["Gingival Margin"]["GM Buccal 2"], t24_3: data24["Gingival Margin"]["GM Buccal 3"], t24_1_lg: data24["Gingival Margin"]["GM Lingual 1"], t24_2_lg: data24["Gingival Margin"]["GM Lingual 2"], t24_3_lg: data24["Gingival Margin"]["GM Lingual 3"],
                  t23_1: data23["Gingival Margin"]["GM Buccal 1"], t23_2: data23["Gingival Margin"]["GM Buccal 2"], t23_3: data23["Gingival Margin"]["GM Buccal 3"], t23_1_lg: data23["Gingival Margin"]["GM Lingual 1"], t23_2_lg: data23["Gingival Margin"]["GM Lingual 2"], t23_3_lg: data23["Gingival Margin"]["GM Lingual 3"],
                  t22_1: data22["Gingival Margin"]["GM Buccal 1"], t22_2: data22["Gingival Margin"]["GM Buccal 2"], t22_3: data22["Gingival Margin"]["GM Buccal 3"], t22_1_lg: data22["Gingival Margin"]["GM Lingual 1"], t22_2_lg: data22["Gingival Margin"]["GM Lingual 2"], t22_3_lg: data22["Gingival Margin"]["GM Lingual 3"],
                  t21_1: data21["Gingival Margin"]["GM Buccal 1"], t21_2: data21["Gingival Margin"]["GM Buccal 2"], t21_3: data21["Gingival Margin"]["GM Buccal 3"], t21_1_lg: data21["Gingival Margin"]["GM Lingual 1"], t21_2_lg: data21["Gingival Margin"]["GM Lingual 2"], t21_3_lg: data21["Gingival Margin"]["GM Lingual 3"]});
      setProbe( {...Probe, p18_1: data18["Probing Depth"]["PD Buccal 1"], p18_2: data18["Probing Depth"]["PD Buccal 2"], p18_3: data18["Probing Depth"]["PD Buccal 3"], p18_1_lg: data18["Probing Depth"]["PD Lingual 1"], p18_2_lg: data18["Probing Depth"]["PD Lingual 2"], p18_3_lg: data18["Probing Depth"]["PD Lingual 3"],
                          p17_1: data17["Probing Depth"]["PD Buccal 1"], p17_2: data17["Probing Depth"]["PD Buccal 2"], p17_3: data17["Probing Depth"]["PD Buccal 3"], p17_1_lg: data17["Probing Depth"]["PD Lingual 1"], p17_2_lg: data17["Probing Depth"]["PD Lingual 2"], p17_3_lg: data17["Probing Depth"]["PD Lingual 3"],
                          p16_1: data16["Probing Depth"]["PD Buccal 1"], p16_2: data16["Probing Depth"]["PD Buccal 2"], p16_3: data16["Probing Depth"]["PD Buccal 3"], p16_1_lg: data16["Probing Depth"]["PD Lingual 1"], p16_2_lg: data16["Probing Depth"]["PD Lingual 2"], p16_3_lg: data16["Probing Depth"]["PD Lingual 3"],
                          p15_1: data15["Probing Depth"]["PD Buccal 1"], p15_2: data15["Probing Depth"]["PD Buccal 2"], p15_3: data15["Probing Depth"]["PD Buccal 3"], p15_1_lg: data15["Probing Depth"]["PD Lingual 1"], p15_2_lg: data15["Probing Depth"]["PD Lingual 2"], p15_3_lg: data15["Probing Depth"]["PD Lingual 3"],
                          p14_1: data14["Probing Depth"]["PD Buccal 1"], p14_2: data14["Probing Depth"]["PD Buccal 2"], p14_3: data14["Probing Depth"]["PD Buccal 3"], p14_1_lg: data14["Probing Depth"]["PD Lingual 1"], p14_2_lg: data14["Probing Depth"]["PD Lingual 2"], p14_3_lg: data14["Probing Depth"]["PD Lingual 3"],
                          p13_1: data13["Probing Depth"]["PD Buccal 1"], p13_2: data13["Probing Depth"]["PD Buccal 2"], p13_3: data13["Probing Depth"]["PD Buccal 3"], p13_1_lg: data13["Probing Depth"]["PD Lingual 1"], p13_2_lg: data13["Probing Depth"]["PD Lingual 2"], p13_3_lg: data13["Probing Depth"]["PD Lingual 3"],
                          p12_1: data12["Probing Depth"]["PD Buccal 1"], p12_2: data12["Probing Depth"]["PD Buccal 2"], p12_3: data12["Probing Depth"]["PD Buccal 3"], p12_1_lg: data12["Probing Depth"]["PD Lingual 1"], p12_2_lg: data12["Probing Depth"]["PD Lingual 2"], p12_3_lg: data12["Probing Depth"]["PD Lingual 3"],
                          p11_1: data11["Probing Depth"]["PD Buccal 1"], p11_2: data11["Probing Depth"]["PD Buccal 2"], p11_3: data11["Probing Depth"]["PD Buccal 3"], p11_1_lg: data11["Probing Depth"]["PD Lingual 1"], p11_2_lg: data11["Probing Depth"]["PD Lingual 2"], p11_3_lg: data11["Probing Depth"]["PD Lingual 3"],
                          p21_1: data21["Probing Depth"]["PD Buccal 1"], p21_2: data21["Probing Depth"]["PD Buccal 2"], p21_3: data21["Probing Depth"]["PD Buccal 3"], p21_1_lg: data21["Probing Depth"]["PD Lingual 1"], p21_2_lg: data21["Probing Depth"]["PD Lingual 2"], p21_3_lg: data21["Probing Depth"]["PD Lingual 3"],
                          p22_1: data22["Probing Depth"]["PD Buccal 1"], p22_2: data22["Probing Depth"]["PD Buccal 2"], p22_3: data22["Probing Depth"]["PD Buccal 3"], p22_1_lg: data22["Probing Depth"]["PD Lingual 1"], p22_2_lg: data22["Probing Depth"]["PD Lingual 2"], p22_3_lg: data22["Probing Depth"]["PD Lingual 3"],
                          p23_1: data23["Probing Depth"]["PD Buccal 1"], p23_2: data23["Probing Depth"]["PD Buccal 2"], p23_3: data23["Probing Depth"]["PD Buccal 3"], p23_1_lg: data23["Probing Depth"]["PD Lingual 1"], p23_2_lg: data23["Probing Depth"]["PD Lingual 2"], p23_3_lg: data23["Probing Depth"]["PD Lingual 3"],
                          p24_1: data24["Probing Depth"]["PD Buccal 1"], p24_2: data24["Probing Depth"]["PD Buccal 2"], p24_3: data24["Probing Depth"]["PD Buccal 3"], p24_1_lg: data24["Probing Depth"]["PD Lingual 1"], p24_2_lg: data24["Probing Depth"]["PD Lingual 2"], p24_3_lg: data24["Probing Depth"]["PD Lingual 3"],
                          p25_1: data25["Probing Depth"]["PD Buccal 1"], p25_2: data25["Probing Depth"]["PD Buccal 2"], p25_3: data25["Probing Depth"]["PD Buccal 3"], p25_1_lg: data25["Probing Depth"]["PD Lingual 1"], p25_2_lg: data25["Probing Depth"]["PD Lingual 2"], p25_3_lg: data25["Probing Depth"]["PD Lingual 3"],
                          p26_1: data26["Probing Depth"]["PD Buccal 1"], p26_2: data26["Probing Depth"]["PD Buccal 2"], p26_3: data26["Probing Depth"]["PD Buccal 3"], p26_1_lg: data26["Probing Depth"]["PD Lingual 1"], p26_2_lg: data26["Probing Depth"]["PD Lingual 2"], p26_3_lg: data26["Probing Depth"]["PD Lingual 3"],
                          p27_1: data27["Probing Depth"]["PD Buccal 1"], p27_2: data27["Probing Depth"]["PD Buccal 2"], p27_3: data27["Probing Depth"]["PD Buccal 3"], p27_1_lg: data27["Probing Depth"]["PD Lingual 1"], p27_2_lg: data27["Probing Depth"]["PD Lingual 2"], p27_3_lg: data27["Probing Depth"]["PD Lingual 3"],
                          p28_1: data28["Probing Depth"]["PD Buccal 1"], p28_2: data28["Probing Depth"]["PD Buccal 2"], p28_3: data28["Probing Depth"]["PD Buccal 3"], p28_1_lg: data28["Probing Depth"]["PD Lingual 1"], p28_2_lg: data28["Probing Depth"]["PD Lingual 2"], p28_3_lg: data28["Probing Depth"]["PD Lingual 3"]});
    }
  }, []);

  //Disable data based on Lock
  const dataLocker18 = () => {
    setMob( {...Mob, t18: 0} );
    setLock( {...Lock, t18: 2} );
    setFurc( {...Furc, FurcCount18: 0, FurcCount18b: 0, FurcCount18br: 0} );
    setBoP( {...BoP, BoP18_1: false, BoP18_2: false, BoP18_3: false, BoP18_1_lg: false, BoP18_2_lg: false, BoP18_3_lg: false, BoP_total_18: 0} );
    setGM( {...GM, t18_1: 0, t18_2: 0, t18_3: 0, t18_1_lg: 0, t18_2_lg: 0, t18_3_lg: 0 });
    setProbe( {...Probe, p18_1: 0, p18_2: 0, p18_3: 0, p18_1_lg: 0, p18_2_lg: 0, p18_3_lg: 0});
    setPlague( {...Plague, Plague18_1: false, Plague18_2: false, Plague18_3: false, Plague18_1_lg: false, Plague18_2_lg: false, Plague18_3_lg: false, Plague_total_18: 0})
  }
  const implantLocker18 = () => {
    setLock( {...Lock, t18: 1} );
    setFurc( {...Furc, FurcCount18: 0, FurcCount18b: 0, FurcCount18br: 0} );
  }
  const dataLocker17 = () => {
    setMob( {...Mob, t17: 0} );
    setLock( {...Lock, t17: 2} );
    setFurc( {...Furc, FurcCount17: 0, FurcCount17b: 0, FurcCount17br: 0} );
    setBoP( {...BoP, BoP17_1: false, BoP17_2: false, BoP17_3: false, BoP17_1_lg: false, BoP17_2_lg: false, BoP17_3_lg: false, BoP_total_17: 0} );
    setGM( {...GM, t17_1: 0, t17_2: 0, t17_3: 0, t17_1_lg: 0, t17_2_lg: 0, t17_3_lg: 0 });
    setProbe( {...Probe, p17_1: 0, p17_2: 0, p17_3: 0, p17_1_lg: 0, p17_2_lg: 0, p17_3_lg: 0});
    setPlague( {...Plague, Plague17_1: false, Plague17_2: false, Plague17_3: false, Plague17_1_lg: false, Plague17_2_lg: false, Plague17_3_lg: false, Plague_total_17: 0})
  }
  const implantLocker17 = () => {
    setLock( {...Lock, t17: 1} );
    setFurc( {...Furc, FurcCount17: 0, FurcCount17b: 0, FurcCount17br: 0} );
  }
  const dataLocker16 = () => {
    setMob( {...Mob, t16: 0} );
    setLock( {...Lock, t16: 2} );
    setFurc( {...Furc, FurcCount16: 0, FurcCount16b: 0, FurcCount16br: 0} );
    setBoP( {...BoP, BoP16_1: false, BoP16_2: false, BoP16_3: false, BoP16_1_lg: false, BoP16_2_lg: false, BoP16_3_lg: false, BoP_total_16: 0} );
    setGM( {...GM, t16_1: 0, t16_2: 0, t16_3: 0, t16_1_lg: 0, t16_2_lg: 0, t16_3_lg: 0 });
    setProbe( {...Probe, p16_1: 0, p16_2: 0, p16_3: 0, p16_1_lg: 0, p16_2_lg: 0, p16_3_lg: 0});
    setPlague( {...Plague, Plague16_1: false, Plague16_2: false, Plague16_3: false, Plague16_1_lg: false, Plague16_2_lg: false, Plague16_3_lg: false, Plague_total_16: 0})
  }
  const implantLocker16 = () => {
    setLock( {...Lock, t16: 1} );
    setFurc( {...Furc, FurcCount16: 0, FurcCount16b: 0, FurcCount16br: 0} );
  }
  const dataLocker15 = () => {
    setMob( {...Mob, t15: 0} );
    setLock( {...Lock, t15: 2} );
    setBoP( {...BoP, BoP15_1: false, BoP15_2: false, BoP15_3: false, BoP15_1_lg: false, BoP15_2_lg: false, BoP15_3_lg: false, BoP_total_15: 0} );
    setGM( {...GM, t15_1: 0, t15_2: 0, t15_3: 0, t15_1_lg: 0, t15_2_lg: 0, t15_3_lg: 0 });
    setProbe( {...Probe, p15_1: 0, p15_2: 0, p15_3: 0, p15_1_lg: 0, p15_2_lg: 0, p15_3_lg: 0});
    setPlague( {...Plague, Plague15_1: false, Plague15_2: false, Plague15_3: false, Plague15_1_lg: false, Plague15_2_lg: false, Plague15_3_lg: false, Plague_total_15: 0})
  }
  const dataLocker14 = () => {
    setMob( {...Mob, t14: 0} );
    setLock( {...Lock, t14: 2} );
    setFurc( {...Furc, FurcCount14b: 0, FurcCount14br: 0} );
    setBoP( {...BoP, BoP14_1: false, BoP14_2: false, BoP14_3: false, BoP14_1_lg: false, BoP14_2_lg: false, BoP14_3_lg: false, BoP_total_14: 0} );
    setGM( {...GM, t14_1: 0, t14_2: 0, t14_3: 0, t14_1_lg: 0, t14_2_lg: 0, t14_3_lg: 0 });
    setProbe( {...Probe, p14_1: 0, p14_2: 0, p14_3: 0, p14_1_lg: 0, p14_2_lg: 0, p14_3_lg: 0});
    setPlague( {...Plague, Plague14_1: false, Plague14_2: false, Plague14_3: false, Plague14_1_lg: false, Plague14_2_lg: false, Plague14_3_lg: false, Plague_total_14: 0})
  }
  const implantLocker14 = () => {
    setLock( {...Lock, t14: 1} );
    setFurc( {...Furc, FurcCount14b: 0, FurcCount14br: 0} );
  }
  const dataLocker13 = () => {
    setMob( {...Mob, t13: 0} );
    setLock( {...Lock, t13: 2} );
    setBoP( {...BoP, BoP13_1: false, BoP13_2: false, BoP13_3: false, BoP13_1_lg: false, BoP13_2_lg: false, BoP13_3_lg: false, BoP_total_13: 0} );
    setGM( {...GM, t13_1: 0, t13_2: 0, t13_3: 0, t13_1_lg: 0, t13_2_lg: 0, t13_3_lg: 0 });
    setProbe( {...Probe, p13_1: 0, p13_2: 0, p13_3: 0, p13_1_lg: 0, p13_2_lg: 0, p13_3_lg: 0});
    setPlague( {...Plague, Plague13_1: false, Plague13_2: false, Plague13_3: false, Plague13_1_lg: false, Plague13_2_lg: false, Plague13_3_lg: false, Plague_total_13: 0})
  }
  const dataLocker12 = () => {
    setMob( {...Mob, t12: 0} );
    setLock( {...Lock, t12: 2} );
    setBoP( {...BoP, BoP12_1: false, BoP12_2: false, BoP12_3: false, BoP12_1_lg: false, BoP12_2_lg: false, BoP12_3_lg: false, BoP_total_12: 0} );
    setGM( {...GM, t12_1: 0, t12_2: 0, t12_3: 0, t12_1_lg: 0, t12_2_lg: 0, t12_3_lg: 0 });
    setProbe( {...Probe, p12_1: 0, p12_2: 0, p12_3: 0, p12_1_lg: 0, p12_2_lg: 0, p12_3_lg: 0});
    setPlague( {...Plague, Plague12_1: false, Plague12_2: false, Plague12_3: false, Plague12_1_lg: false, Plague12_2_lg: false, Plague12_3_lg: false, Plague_total_12: 0})
  }
  const dataLocker11 = () => {
    setMob( {...Mob, t11: 0} );
    setLock( {...Lock, t11: 2} );
    setBoP( {...BoP, BoP11_1: false, BoP11_2: false, BoP11_3: false, BoP11_1_lg: false, BoP11_2_lg: false, BoP11_3_lg: false, BoP_total_11: 0} );
    setGM( {...GM, t11_1: 0, t11_2: 0, t11_3: 0, t11_1_lg: 0, t11_2_lg: 0, t11_3_lg: 0 });
    setProbe( {...Probe, p11_1: 0, p11_2: 0, p11_3: 0, p11_1_lg: 0, p11_2_lg: 0, p11_3_lg: 0});
    setPlague( {...Plague, Plague11_1: false, Plague11_2: false, Plague11_3: false, Plague11_1_lg: false, Plague11_2_lg: false, Plague11_3_lg: false, Plague_total_11: 0})
  }
  const dataLocker21 = () => {
    setMob( {...Mob, t21: 0} );
    setLock( {...Lock, t21: 2} );
    setBoP( {...BoP, BoP21_1: false, BoP21_2: false, BoP21_3: false, BoP21_1_lg: false, BoP21_2_lg: false, BoP21_3_lg: false, BoP_total_21: 0} );
    setGM( {...GM, t21_1: 0, t21_2: 0, t21_3: 0, t21_1_lg: 0, t21_2_lg: 0, t21_3_lg: 0 });
    setProbe( {...Probe, p21_1: 0, p21_2: 0, p21_3: 0, p21_1_lg: 0, p21_2_lg: 0, p21_3_lg: 0});
    setPlague( {...Plague, Plague21_1: false, Plague21_2: false, Plague21_3: false, Plague21_1_lg: false, Plague21_2_lg: false, Plague21_3_lg: false, Plague_total_21: 0})
  }
  const dataLocker22 = () => {
    setMob( {...Mob, t22: 0} );
    setLock( {...Lock, t22: 2} );
    setBoP( {...BoP, BoP22_1: false, BoP22_2: false, BoP22_3: false, BoP22_1_lg: false, BoP22_2_lg: false, BoP22_3_lg: false, BoP_total_22: 0} );
    setGM( {...GM, t22_1: 0, t22_2: 0, t22_3: 0, t22_1_lg: 0, t22_2_lg: 0, t22_3_lg: 0 });
    setProbe( {...Probe, p22_1: 0, p22_2: 0, p22_3: 0, p22_1_lg: 0, p22_2_lg: 0, p22_3_lg: 0});
    setPlague( {...Plague, Plague22_1: false, Plague22_2: false, Plague22_3: false, Plague22_1_lg: false, Plague22_2_lg: false, Plague22_3_lg: false, Plague_total_22: 0})
  }
  const dataLocker23 = () => {
    setMob( {...Mob, t23: 0} );
    setLock( {...Lock, t23: 2} );
    setBoP( {...BoP, BoP23_1: false, BoP23_2: false, BoP23_3: false, BoP23_1_lg: false, BoP23_2_lg: false, BoP23_3_lg: false, BoP_total_23: 0} );
    setGM( {...GM, t23_1: 0, t23_2: 0, t23_3: 0, t23_1_lg: 0, t23_2_lg: 0, t23_3_lg: 0 });
    setProbe( {...Probe, p23_1: 0, p23_2: 0, p23_3: 0, p23_1_lg: 0, p23_2_lg: 0, p23_3_lg: 0});
    setPlague( {...Plague, Plague23_1: false, Plague23_2: false, Plague23_3: false, Plague23_1_lg: false, Plague23_2_lg: false, Plague23_3_lg: false, Plague_total_23: 0})
  }
  const dataLocker24 = () => {
    setMob( {...Mob, t24: 0} );
    setLock( {...Lock, t24: 2} );
    setFurc( {...Furc, FurcCount24b: 0, FurcCount24br: 0} );
    setBoP( {...BoP, BoP24_1: false, BoP24_2: false, BoP24_3: false, BoP24_1_lg: false, BoP24_2_lg: false, BoP24_3_lg: false, BoP_total_24: 0} );
    setGM( {...GM, t24_1: 0, t24_2: 0, t24_3: 0, t24_1_lg: 0, t24_2_lg: 0, t24_3_lg: 0 });
    setProbe( {...Probe, p24_1: 0, p24_2: 0, p24_3: 0, p24_1_lg: 0, p24_2_lg: 0, p24_3_lg: 0});
    setPlague( {...Plague, Plague24_1: false, Plague24_2: false, Plague24_3: false, Plague24_1_lg: false, Plague24_2_lg: false, Plague24_3_lg: false, Plague_total_24: 0})
  }
  const implantLocker24 = () => {
    setLock( {...Lock, t24: 1} );
    setFurc( {...Furc, FurcCount24b: 0, FurcCount24br: 0} );
  }
  const dataLocker25 = () => {
    setMob( {...Mob, t25: 0} );
    setLock( {...Lock, t25: 2} )
    setBoP( {...BoP, BoP25_1: false, BoP25_2: false, BoP25_3: false, BoP25_1_lg: false, BoP25_2_lg: false, BoP25_3_lg: false, BoP_total_25: 0} );
    setGM( {...GM, t25_1: 0, t25_2: 0, t25_3: 0, t25_1_lg: 0, t25_2_lg: 0, t25_3_lg: 0 });
    setProbe( {...Probe, p25_1: 0, p25_2: 0, p25_3: 0, p25_1_lg: 0, p25_2_lg: 0, p25_3_lg: 0});
    setPlague( {...Plague, Plague25_1: false, Plague25_2: false, Plague25_3: false, Plague25_1_lg: false, Plague25_2_lg: false, Plague25_3_lg: false, Plague_total_25: 0})
  }
  const dataLocker26 = () => {
    setMob( {...Mob, t26: 0} );
    setLock( {...Lock, t26: 2} );
    setFurc( {...Furc, FurcCount26: 0, FurcCount26b: 0, FurcCount26br: 0} );
    setBoP( {...BoP, BoP26_1: false, BoP26_2: false, BoP26_3: false, BoP26_1_lg: false, BoP26_2_lg: false, BoP26_3_lg: false, BoP_total_26: 0} );
    setGM( {...GM, t26_1: 0, t26_2: 0, t26_3: 0, t26_1_lg: 0, t26_2_lg: 0, t26_3_lg: 0 });
    setProbe( {...Probe, p26_1: 0, p26_2: 0, p26_3: 0, p26_1_lg: 0, p26_2_lg: 0, p26_3_lg: 0});
    setPlague( {...Plague, Plague26_1: false, Plague26_2: false, Plague26_3: false, Plague26_1_lg: false, Plague26_2_lg: false, Plague26_3_lg: false, Plague_total_26: 0})
  }
  const implantLocker26 = () => {
    setLock( {...Lock, t26: 1} );
    setFurc( {...Furc, FurcCount26: 0, FurcCount26b: 0, FurcCount26br: 0} );
  }
  const dataLocker27 = () => {
    setMob( {...Mob, t27: 0} );
    setLock( {...Lock, t27: 2} );
    setFurc( {...Furc, FurcCount27: 0, FurcCount27b: 0, FurcCount27br: 0} );
    setBoP( {...BoP, BoP27_1: false, BoP27_2: false, BoP27_3: false, BoP27_1_lg: false, BoP27_2_lg: false, BoP27_3_lg: false, BoP_total_27: 0} );
    setGM( {...GM, t27_1: 0, t27_2: 0, t27_3: 0, t27_1_lg: 0, t27_2_lg: 0, t27_3_lg: 0 });
    setProbe( {...Probe, p27_1: 0, p27_2: 0, p27_3: 0, p27_1_lg: 0, p27_2_lg: 0, p27_3_lg: 0});
    setPlague( {...Plague, Plague27_1: false, Plague27_2: false, Plague27_3: false, Plague27_1_lg: false, Plague27_2_lg: false, Plague27_3_lg: false, Plague_total_27: 0})
  }
  const implantLocker27 = () => {
    setLock( {...Lock, t27: 1} );
    setFurc( {...Furc, FurcCount27: 0, FurcCount27b: 0, FurcCount27br: 0} );
  }
  const dataLocker28 = () => {
    setMob( {...Mob, t28: 0} );
    setLock( {...Lock, t28: 2} );
    setFurc( {...Furc, FurcCount28: 0, FurcCount28b: 0, FurcCount28br: 0} );
    setBoP( {...BoP, BoP28_1: false, BoP28_2: false, BoP28_3: false, BoP28_1_lg: false, BoP28_2_lg: false, BoP28_3_lg: false, BoP_total_28: 0} );
    setGM( {...GM, t28_1: 0, t28_2: 0, t28_3: 0, t28_1_lg: 0, t28_2_lg: 0, t28_3_lg: 0 });
    setProbe( {...Probe, p28_1: 0, p28_2: 0, p28_3: 0, p28_1_lg: 0, p28_2_lg: 0, p28_3_lg: 0});
    setPlague( {...Plague, Plague28_1: false, Plague28_2: false, Plague28_3: false, Plague28_1_lg: false, Plague28_2_lg: false, Plague28_3_lg: false, Plague_total_28: 0})
  }
  const implantLocker28 = () => {
    setLock( {...Lock, t28: 1} );
    setFurc( {...Furc, FurcCount28: 0, FurcCount28b: 0, FurcCount28br: 0} );
  }

//Data calculations and data vis

//Get data
  const totBoP = BoP.BoP_total_11 + BoP.BoP_total_12 + BoP.BoP_total_13 + BoP.BoP_total_14 + BoP.BoP_total_15 + BoP.BoP_total_16 + BoP.BoP_total_17 + BoP.BoP_total_18 + BoP.BoP_total_21 + BoP.BoP_total_22 + BoP.BoP_total_23 + BoP.BoP_total_24 + BoP.BoP_total_25 + BoP.BoP_total_26 + BoP.BoP_total_27 + BoP.BoP_total_28;
  const totPlague = Plague.Plague_total_11 + Plague.Plague_total_12 + Plague.Plague_total_13 + Plague.Plague_total_14 + Plague.Plague_total_15 + Plague.Plague_total_16 + Plague.Plague_total_17 + Plague.Plague_total_18 + Plague.Plague_total_21 + Plague.Plague_total_22 + Plague.Plague_total_23 + Plague.Plague_total_24 + Plague.Plague_total_25 + Plague.Plague_total_26 + Plague.Plague_total_27 + Plague.Plague_total_28;

  const deepSides = () => {
    var ds18_1 = ((Probe.p18_1 == 4 && BoP.BoP18_1) || Probe.p18_1 > 4) ? 1 : 0; var ds18_2 = ((Probe.p18_2 == 4 && BoP.BoP18_2) || Probe.p18_2 > 4) ? 1 : 0; var ds18_3 = ((Probe.p18_3 == 4 && BoP.BoP18_3) || Probe.p18_3 > 4) ? 1 : 0;
    var ds17_1 = ((Probe.p17_1 == 4 && BoP.BoP17_1) || Probe.p17_1 > 4) ? 1 : 0; var ds17_2 = ((Probe.p17_2 == 4 && BoP.BoP17_2) || Probe.p17_2 > 4) ? 1 : 0; var ds17_3 = ((Probe.p17_3 == 4 && BoP.BoP17_3) || Probe.p17_3 > 4) ? 1 : 0;
    var ds16_1 = ((Probe.p16_1 == 4 && BoP.BoP16_1) || Probe.p16_1 > 4) ? 1 : 0; var ds16_2 = ((Probe.p16_2 == 4 && BoP.BoP16_2) || Probe.p16_2 > 4) ? 1 : 0; var ds16_3 = ((Probe.p16_3 == 4 && BoP.BoP16_3) || Probe.p16_3 > 4) ? 1 : 0;
    var ds15_1 = ((Probe.p15_1 == 4 && BoP.BoP15_1) || Probe.p15_1 > 4) ? 1 : 0; var ds15_2 = ((Probe.p15_2 == 4 && BoP.BoP15_2) || Probe.p15_2 > 4) ? 1 : 0; var ds15_3 = ((Probe.p15_3 == 4 && BoP.BoP15_3) || Probe.p15_3 > 4) ? 1 : 0;
    var ds14_1 = ((Probe.p14_1 == 4 && BoP.BoP14_1) || Probe.p14_1 > 4) ? 1 : 0; var ds14_2 = ((Probe.p14_2 == 4 && BoP.BoP14_2) || Probe.p14_2 > 4) ? 1 : 0; var ds14_3 = ((Probe.p14_3 == 4 && BoP.BoP14_3) || Probe.p14_3 > 4) ? 1 : 0; 
    var ds13_1 = ((Probe.p13_1 == 4 && BoP.BoP13_1) || Probe.p13_1 > 4) ? 1 : 0; var ds13_2 = ((Probe.p13_2 == 4 && BoP.BoP13_2) || Probe.p13_2 > 4) ? 1 : 0; var ds13_3 = ((Probe.p13_3 == 4 && BoP.BoP13_3) || Probe.p13_3 > 4) ? 1 : 0; 
    var ds12_1 = ((Probe.p12_1 == 4 && BoP.BoP12_1) || Probe.p12_1 > 4) ? 1 : 0; var ds12_2 = ((Probe.p12_2 == 4 && BoP.BoP12_2) || Probe.p12_2 > 4) ? 1 : 0; var ds12_3 = ((Probe.p12_3 == 4 && BoP.BoP12_3) || Probe.p12_3 > 4) ? 1 : 0;
    var ds11_1 = ((Probe.p11_1 == 4 && BoP.BoP11_1) || Probe.p11_1 > 4) ? 1 : 0; var ds11_2 = ((Probe.p11_2 == 4 && BoP.BoP11_2) || Probe.p11_2 > 4) ? 1 : 0; var ds11_3 = ((Probe.p11_3 == 4 && BoP.BoP11_3) || Probe.p11_3 > 4) ? 1 : 0;
    var ds21_1 = ((Probe.p21_1 == 4 && BoP.BoP21_1) || Probe.p21_1 > 4) ? 1 : 0; var ds21_2 = ((Probe.p21_2 == 4 && BoP.BoP21_2) || Probe.p21_2 > 4) ? 1 : 0; var ds21_3 = ((Probe.p21_3 == 4 && BoP.BoP21_3) || Probe.p21_3 > 4) ? 1 : 0;
    var ds22_1 = ((Probe.p22_1 == 4 && BoP.BoP22_1) || Probe.p22_1 > 4) ? 1 : 0; var ds22_2 = ((Probe.p22_2 == 4 && BoP.BoP22_2) || Probe.p22_2 > 4) ? 1 : 0; var ds22_3 = ((Probe.p22_3 == 4 && BoP.BoP22_3) || Probe.p22_3 > 4) ? 1 : 0;
    var ds23_1 = ((Probe.p23_1 == 4 && BoP.BoP23_1) || Probe.p23_1 > 4) ? 1 : 0; var ds23_2 = ((Probe.p23_2 == 4 && BoP.BoP23_2) || Probe.p23_2 > 4) ? 1 : 0; var ds23_3 = ((Probe.p23_3 == 4 && BoP.BoP23_3) || Probe.p23_3 > 4) ? 1 : 0;
    var ds24_1 = ((Probe.p24_1 == 4 && BoP.BoP24_1) || Probe.p24_1 > 4) ? 1 : 0; var ds24_2 = ((Probe.p24_2 == 4 && BoP.BoP24_2) || Probe.p24_2 > 4) ? 1 : 0; var ds24_3 = ((Probe.p24_3 == 4 && BoP.BoP24_3) || Probe.p24_3 > 4) ? 1 : 0;
    var ds25_1 = ((Probe.p25_1 == 4 && BoP.BoP25_1) || Probe.p25_1 > 4) ? 1 : 0; var ds25_2 = ((Probe.p25_2 == 4 && BoP.BoP25_2) || Probe.p25_2 > 4) ? 1 : 0; var ds25_3 = ((Probe.p25_3 == 4 && BoP.BoP25_3) || Probe.p25_3 > 4) ? 1 : 0;
    var ds26_1 = ((Probe.p26_1 == 4 && BoP.BoP26_1) || Probe.p26_1 > 4) ? 1 : 0; var ds26_2 = ((Probe.p26_2 == 4 && BoP.BoP26_2) || Probe.p26_2 > 4) ? 1 : 0; var ds26_3 = ((Probe.p26_3 == 4 && BoP.BoP26_3) || Probe.p26_3 > 4) ? 1 : 0;
    var ds27_1 = ((Probe.p27_1 == 4 && BoP.BoP27_1) || Probe.p28_1 > 4) ? 1 : 0; var ds27_2 = ((Probe.p27_2 == 4 && BoP.BoP27_2) || Probe.p27_2 > 4) ? 1 : 0; var ds27_3 = ((Probe.p27_3 == 4 && BoP.BoP27_3) || Probe.p27_3 > 4) ? 1 : 0;
    var ds28_1 = ((Probe.p28_1 == 4 && BoP.BoP28_1) || Probe.p28_1 > 4) ? 1 : 0; var ds28_2 = ((Probe.p28_2 == 4 && BoP.BoP28_2) || Probe.p28_2 > 4) ? 1 : 0; var ds28_3 = ((Probe.p28_3 == 4 && BoP.BoP28_3) || Probe.p28_3 > 4) ? 1 : 0;

    var ds18_1_lg = ((Probe.p18_1_lg == 4 && BoP.BoP18_1_lg) || Probe.p18_1_lg > 4) ? 1 : 0; var ds18_2_lg = ((Probe.p18_2_lg == 4 && BoP.BoP18_2_lg) || Probe.p18_2_lg > 4) ? 1 : 0; var ds18_3_lg = ((Probe.p18_3_lg == 4 && BoP.BoP18_3_lg) || Probe.p18_3_lg > 4) ? 1 : 0;
    var ds17_1_lg = ((Probe.p17_1_lg == 4 && BoP.BoP17_1_lg) || Probe.p17_1_lg > 4) ? 1 : 0; var ds17_2_lg = ((Probe.p17_2_lg == 4 && BoP.BoP17_2_lg) || Probe.p17_2_lg > 4) ? 1 : 0; var ds17_3_lg = ((Probe.p17_3_lg == 4 && BoP.BoP17_3_lg) || Probe.p17_3_lg > 4) ? 1 : 0;
    var ds16_1_lg = ((Probe.p16_1_lg == 4 && BoP.BoP16_1_lg) || Probe.p16_1_lg > 4) ? 1 : 0; var ds16_2_lg = ((Probe.p16_2_lg == 4 && BoP.BoP16_2_lg) || Probe.p16_2_lg > 4) ? 1 : 0; var ds16_3_lg = ((Probe.p16_3_lg == 4 && BoP.BoP16_3_lg) || Probe.p16_3_lg > 4) ? 1 : 0;
    var ds15_1_lg = ((Probe.p15_1_lg == 4 && BoP.BoP15_1_lg) || Probe.p15_1_lg > 4) ? 1 : 0; var ds15_2_lg = ((Probe.p15_2_lg == 4 && BoP.BoP15_2_lg) || Probe.p15_2_lg > 4) ? 1 : 0; var ds15_3_lg = ((Probe.p15_3_lg == 4 && BoP.BoP15_3_lg) || Probe.p15_3_lg > 4) ? 1 : 0;
    var ds14_1_lg = ((Probe.p14_1_lg == 4 && BoP.BoP14_1_lg) || Probe.p14_1_lg > 4) ? 1 : 0; var ds14_2_lg = ((Probe.p14_2_lg == 4 && BoP.BoP14_2_lg) || Probe.p14_2_lg > 4) ? 1 : 0; var ds14_3_lg = ((Probe.p14_3_lg == 4 && BoP.BoP14_3_lg) || Probe.p14_3_lg > 4) ? 1 : 0; 
    var ds13_1_lg = ((Probe.p13_1_lg == 4 && BoP.BoP13_1_lg) || Probe.p13_1_lg > 4) ? 1 : 0; var ds13_2_lg = ((Probe.p13_2_lg == 4 && BoP.BoP13_2_lg) || Probe.p13_2_lg > 4) ? 1 : 0; var ds13_3_lg = ((Probe.p13_3_lg == 4 && BoP.BoP13_3_lg) || Probe.p13_3_lg > 4) ? 1 : 0; 
    var ds12_1_lg = ((Probe.p12_1_lg == 4 && BoP.BoP12_1_lg) || Probe.p12_1_lg > 4) ? 1 : 0; var ds12_2_lg = ((Probe.p12_2_lg == 4 && BoP.BoP12_2_lg) || Probe.p12_2_lg > 4) ? 1 : 0; var ds12_3_lg = ((Probe.p12_3_lg == 4 && BoP.BoP12_3_lg) || Probe.p12_3_lg > 4) ? 1 : 0;
    var ds11_1_lg = ((Probe.p11_1_lg == 4 && BoP.BoP11_1_lg) || Probe.p11_1_lg > 4) ? 1 : 0; var ds11_2_lg = ((Probe.p11_2_lg == 4 && BoP.BoP11_2_lg) || Probe.p11_2_lg > 4) ? 1 : 0; var ds11_3_lg = ((Probe.p11_3_lg == 4 && BoP.BoP11_3_lg) || Probe.p11_3_lg > 4) ? 1 : 0;
    var ds21_1_lg = ((Probe.p21_1_lg == 4 && BoP.BoP21_1_lg) || Probe.p21_1_lg > 4) ? 1 : 0; var ds21_2_lg = ((Probe.p21_2_lg == 4 && BoP.BoP21_2_lg) || Probe.p21_2_lg > 4) ? 1 : 0; var ds21_3_lg = ((Probe.p21_3_lg == 4 && BoP.BoP21_3_lg) || Probe.p21_3_lg > 4) ? 1 : 0;
    var ds22_1_lg = ((Probe.p22_1_lg == 4 && BoP.BoP22_1_lg) || Probe.p22_1_lg > 4) ? 1 : 0; var ds22_2_lg = ((Probe.p22_2_lg == 4 && BoP.BoP22_2_lg) || Probe.p22_2_lg > 4) ? 1 : 0; var ds22_3_lg = ((Probe.p22_3_lg == 4 && BoP.BoP22_3_lg) || Probe.p22_3_lg > 4) ? 1 : 0;
    var ds23_1_lg = ((Probe.p23_1_lg == 4 && BoP.BoP23_1_lg) || Probe.p23_1_lg > 4) ? 1 : 0; var ds23_2_lg = ((Probe.p23_2_lg == 4 && BoP.BoP23_2_lg) || Probe.p23_2_lg > 4) ? 1 : 0; var ds23_3_lg = ((Probe.p23_3_lg == 4 && BoP.BoP23_3_lg) || Probe.p23_3_lg > 4) ? 1 : 0;
    var ds24_1_lg = ((Probe.p24_1_lg == 4 && BoP.BoP24_1_lg) || Probe.p24_1_lg > 4) ? 1 : 0; var ds24_2_lg = ((Probe.p24_2_lg == 4 && BoP.BoP24_2_lg) || Probe.p24_2_lg > 4) ? 1 : 0; var ds24_3_lg = ((Probe.p24_3_lg == 4 && BoP.BoP24_3_lg) || Probe.p24_3_lg > 4) ? 1 : 0;
    var ds25_1_lg = ((Probe.p25_1_lg == 4 && BoP.BoP25_1_lg) || Probe.p25_1_lg > 4) ? 1 : 0; var ds25_2_lg = ((Probe.p25_2_lg == 4 && BoP.BoP25_2_lg) || Probe.p25_2_lg > 4) ? 1 : 0; var ds25_3_lg = ((Probe.p25_3_lg == 4 && BoP.BoP25_3_lg) || Probe.p25_3_lg > 4) ? 1 : 0;
    var ds26_1_lg = ((Probe.p26_1_lg == 4 && BoP.BoP26_1_lg) || Probe.p26_1_lg > 4) ? 1 : 0; var ds26_2_lg = ((Probe.p26_2_lg == 4 && BoP.BoP26_2_lg) || Probe.p26_2_lg > 4) ? 1 : 0; var ds26_3_lg = ((Probe.p26_3_lg == 4 && BoP.BoP26_3_lg) || Probe.p26_3_lg > 4) ? 1 : 0;
    var ds27_1_lg = ((Probe.p27_1_lg == 4 && BoP.BoP27_1_lg) || Probe.p28_1_lg > 4) ? 1 : 0; var ds27_2_lg = ((Probe.p27_2_lg == 4 && BoP.BoP27_2_lg) || Probe.p27_2_lg > 4) ? 1 : 0; var ds27_3_lg = ((Probe.p27_3_lg == 4 && BoP.BoP27_3_lg) || Probe.p27_3_lg > 4) ? 1 : 0;
    var ds28_1_lg = ((Probe.p28_1_lg == 4 && BoP.BoP28_1_lg) || Probe.p28_1_lg > 4) ? 1 : 0; var ds28_2_lg = ((Probe.p28_2_lg == 4 && BoP.BoP28_2_lg) || Probe.p28_2_lg > 4) ? 1 : 0; var ds28_3_lg = ((Probe.p28_3_lg == 4 && BoP.BoP28_3_lg) || Probe.p28_3_lg > 4) ? 1 : 0;


    var totDSUpper = ds18_1 + ds18_2 + ds18_3 + ds17_1 + ds17_2 + ds17_3 + ds16_1 + ds16_2 + ds16_3 + ds15_1 + ds15_2 + ds15_3 + ds14_1 + ds14_2 + ds14_3 + ds13_1 + ds13_2 + ds13_3 + ds12_1 + ds12_2 + ds12_3 + ds11_1 + ds11_2 + ds11_3 
    + ds21_1 + ds21_2 + ds21_3 + ds22_1 + ds22_2 + ds22_3 + ds23_1 + ds23_2 + ds23_3 + ds24_1 + ds24_2 + ds24_3 + ds25_1 + ds25_2 + ds25_3 + ds26_1 + ds26_2 + ds26_3 + ds27_1 + ds27_2 + ds27_3 + ds28_1 + ds28_2 + ds28_3;

    var totDSLower = ds18_1_lg + ds18_2_lg + ds18_3_lg + ds17_1_lg + ds17_2_lg + ds17_3_lg + ds16_1_lg + ds16_2_lg + ds16_3_lg + ds15_1_lg + ds15_2_lg + ds15_3_lg + ds14_1_lg + ds14_2_lg + ds14_3_lg + ds13_1_lg + ds13_2_lg + ds13_3_lg + ds12_1_lg + ds12_2_lg + ds12_3_lg + ds11_1_lg + ds11_2_lg + ds11_3_lg 
    + ds21_1_lg + ds21_2_lg + ds21_3_lg + ds22_1_lg + ds22_2_lg + ds22_3_lg + ds23_1_lg + ds23_2_lg + ds23_3_lg + ds24_1_lg + ds24_2_lg + ds24_3_lg + ds25_1_lg + ds25_2_lg + ds25_3_lg + ds26_1_lg + ds26_2_lg + ds26_3_lg + ds27_1_lg + ds27_2_lg + ds27_3_lg + ds28_1_lg + ds28_2_lg + ds28_3_lg;

    var totDS = totDSUpper + totDSLower;

    return totDS
  };

  const mobLimit18 = () => {
    if(Mob.t18 > 3){
      setMob({...Mob, t18: 3})
    }
    if(Mob.t18 < 0) {
      setMob({ ...Mob, t18: 0})
    }
  }

  const mobLimit17 = () => {
    if(Mob.t17 > 3){
      setMob({...Mob, t17: 3})
    }
    if(Mob.t17 < 0) {
      setMob({ ...Mob, t17: 0})
    }
  }
  const mobLimit16 = () => {
    if(Mob.t16 > 3){
      setMob({...Mob, t16: 3})
    }
    if(Mob.t16 < 0) {
      setMob({ ...Mob, t16: 0})
    }
  }
  const mobLimit15 = () => {
    if(Mob.t15 > 3){
      setMob({...Mob, t15: 3})
    }
    if(Mob.t15 < 0) {
      setMob({ ...Mob, t15: 0})
    }
  }
  const mobLimit14 = () => {
    if(Mob.t14 > 3){
      setMob({...Mob, t14: 3})
    }
    if(Mob.t14 < 0) {
      setMob({ ...Mob, t14: 0})
    }
  }
  const mobLimit13 = () => {
    if(Mob.t13 > 3){
      setMob({...Mob, t13: 3})
    }
    if(Mob.t13 < 0) {
      setMob({ ...Mob, t13: 0})
    }
  }
  const mobLimit12 = () => {
    if(Mob.t12 > 3){
      setMob({...Mob, t12: 3})
    }
    if(Mob.t12 < 0) {
      setMob({ ...Mob, t12: 0})
    }
  }
  const mobLimit11 = () => {
    if(Mob.t11 > 3){
      setMob({...Mob, t11: 3})
    }
    if(Mob.t11 < 0) {
      setMob({ ...Mob, t11: 0})
    }
  }
  const mobLimit21 = () => {
    if(Mob.t21 > 3){
      setMob({...Mob, t21: 3})
    }
    if(Mob.t21 < 0) {
      setMob({ ...Mob, t21: 0})
    }
  }
  const mobLimit22 = () => {
    if(Mob.t22 > 3){
      setMob({...Mob, t22: 3})
    }
    if(Mob.t22 < 0) {
      setMob({ ...Mob, t22: 0})
    }
  }
  const mobLimit23 = () => {
    if(Mob.t23 > 3){
      setMob({...Mob, t23: 3})
    }
    if(Mob.t23 < 0) {
      setMob({ ...Mob, t23: 0})
    }
  }
  const mobLimit24 = () => {
    if(Mob.t24 > 3){
      setMob({...Mob, t24: 3})
    }
    if(Mob.t24 < 0) {
      setMob({ ...Mob, t24: 0})
    }
  }
  const mobLimit25 = () => {
    if(Mob.t25 > 3){
      setMob({...Mob, t25: 3})
    }
    if(Mob.t25 < 0) {
      setMob({ ...Mob, t25: 0})
    }
  }
  const mobLimit26 = () => {
    if(Mob.t26 > 3){
      setMob({...Mob, t26: 3})
    }
    if(Mob.t26 < 0) {
      setMob({ ...Mob, t26: 0})
    }
  }
  const mobLimit27 = () => {
    if(Mob.t27 > 3){
      setMob({...Mob, t27: 3})
    }
    if(Mob.t27 < 0) {
      setMob({ ...Mob, t27: 0})
    }
  }
  const mobLimit28 = () => {
    if(Mob.t28 > 3){
      setMob({...Mob, t28: 3})
    }
    if(Mob.t28 < 0) {
      setMob({ ...Mob, t28: 0})
    }
  }


 const handleChange = (event) => {
        event.target.select();
  }


  const gmLimit18 = () => {
    if(GM.t18_1 > 15) {setGM({ ...GM, t18_1: 15})} if(GM.t18_2 > 15) {setGM({ ...GM, t18_2: 15})} if(GM.t18_3 > 15) {setGM({ ...GM, t18_3: 15})}
    if(GM.t18_1_lg > 15) {setGM({ ...GM, t18_1_lg: 15})} if(GM.t18_2_lg > 15) {setGM({ ...GM, t18_2_lg: 15})} if(GM.t18_3_lg > 15) {setGM({ ...GM, t18_3_lg: 15})}
    if(GM.t18_1 < -10){setGM({ ...GM, t18_1: (-10)})} if(GM.t18_2 < -10){setGM({ ...GM, t18_2: (-10)})} if(GM.t18_3 < -10){setGM({ ...GM, t18_3: (-10)})}
    if(GM.t18_1_lg < -10){setGM({ ...GM, t18_1_lg: (-10)})} if(GM.t18_2_lg < -10){setGM({ ...GM, t18_2_lg: (-10)})} if(GM.t18_3_lg < -10){setGM({ ...GM, t18_3_lg: (-10)})}
  };
  const gmLimit17 = () => {
    if(GM.t17_1 > 15) {setGM({ ...GM, t17_1: 15})} if(GM.t17_2 > 15) {setGM({ ...GM, t17_2: 15})} if(GM.t17_3 > 15) {setGM({ ...GM, t17_3: 15})}
    if(GM.t17_1_lg > 15) {setGM({ ...GM, t17_1_lg: 15})} if(GM.t17_2_lg > 15) {setGM({ ...GM, t17_2_lg: 15})} if(GM.t17_3_lg > 15) {setGM({ ...GM, t17_3_lg: 15})}
    if(GM.t17_1 < -10){setGM({ ...GM, t17_1: (-10)})} if(GM.t17_2 < -10){setGM({ ...GM, t17_2: (-10)})} if(GM.t17_3 < -10){setGM({ ...GM, t17_3: (-10)})}
    if(GM.t17_1_lg < -10){setGM({ ...GM, t17_1_lg: (-10)})} if(GM.t17_2_lg < -10){setGM({ ...GM, t17_2_lg: (-10)})} if(GM.t17_3_lg < -10){setGM({ ...GM, t17_3_lg: (-10)})}
  };
  const gmLimit16 = () => {
    if(GM.t16_1 > 15) {setGM({ ...GM, t16_1: 15})} if(GM.t16_2 > 15) {setGM({ ...GM, t16_2: 15})} if(GM.t16_3 > 15) {setGM({ ...GM, t16_3: 15})}
    if(GM.t16_1_lg > 15) {setGM({ ...GM, t16_1_lg: 15})} if(GM.t16_2_lg > 15) {setGM({ ...GM, t16_2_lg: 15})} if(GM.t16_3_lg > 15) {setGM({ ...GM, t16_3_lg: 15})}
    if(GM.t16_1 < -10){setGM({ ...GM, t16_1: (-10)})} if(GM.t16_2 < -10){setGM({ ...GM, t16_2: (-10)})} if(GM.t16_3 < -10){setGM({ ...GM, t16_3: (-10)})}
    if(GM.t16_1_lg < -10){setGM({ ...GM, t16_1_lg: (-10)})} if(GM.t16_2_lg < -10){setGM({ ...GM, t16_2_lg: (-10)})} if(GM.t16_3_lg < -10){setGM({ ...GM, t16_3_lg: (-10)})}
  };
  const gmLimit15 = () => {
    if(GM.t15_1 > 15) {setGM({ ...GM, t15_1: 15})} if(GM.t15_2 > 15) {setGM({ ...GM, t15_2: 15})} if(GM.t15_3 > 15) {setGM({ ...GM, t15_3: 15})}
    if(GM.t15_1_lg > 15) {setGM({ ...GM, t15_1_lg: 15})} if(GM.t15_2_lg > 15) {setGM({ ...GM, t15_2_lg: 15})} if(GM.t15_3_lg > 15) {setGM({ ...GM, t15_3_lg: 15})}
    if(GM.t15_1 < -10){setGM({ ...GM, t15_1: (-10)})} if(GM.t15_2 < -10){setGM({ ...GM, t15_2: (-10)})} if(GM.t15_3 < -10){setGM({ ...GM, t15_3: (-10)})}
    if(GM.t15_1_lg < -10){setGM({ ...GM, t15_1_lg: (-10)})} if(GM.t15_2_lg < -10){setGM({ ...GM, t15_2_lg: (-10)})} if(GM.t15_3_lg < -10){setGM({ ...GM, t15_3_lg: (-10)})}
  };
  const gmLimit14 = () => {
    if(GM.t14_1 > 15) {setGM({ ...GM, t14_1: 15})} if(GM.t14_2 > 15) {setGM({ ...GM, t14_2: 15})} if(GM.t14_3 > 15) {setGM({ ...GM, t14_3: 15})}
    if(GM.t14_1_lg > 15) {setGM({ ...GM, t14_1_lg: 15})} if(GM.t14_2_lg > 15) {setGM({ ...GM, t14_2_lg: 15})} if(GM.t14_3_lg > 15) {setGM({ ...GM, t14_3_lg: 15})}
    if(GM.t14_1 < -10){setGM({ ...GM, t14_1: (-10)})} if(GM.t14_2 < -10){setGM({ ...GM, t14_2: (-10)})} if(GM.t14_3 < -10){setGM({ ...GM, t14_3: (-10)})}
    if(GM.t14_1_lg < -10){setGM({ ...GM, t14_1_lg: (-10)})} if(GM.t14_2_lg < -10){setGM({ ...GM, t14_2_lg: (-10)})} if(GM.t14_3_lg < -10){setGM({ ...GM, t14_3_lg: (-10)})}
  };
  const gmLimit13 = () => {
    if(GM.t13_1 > 15) {setGM({ ...GM, t13_1: 15})} if(GM.t13_2 > 15) {setGM({ ...GM, t13_2: 15})} if(GM.t13_3 > 15) {setGM({ ...GM, t13_3: 15})}
    if(GM.t13_1_lg > 15) {setGM({ ...GM, t13_1_lg: 15})} if(GM.t13_2_lg > 15) {setGM({ ...GM, t13_2_lg: 15})} if(GM.t13_3_lg > 15) {setGM({ ...GM, t13_3_lg: 15})}
    if(GM.t13_1 < -10){setGM({ ...GM, t13_1: (-10)})} if(GM.t13_2 < -10){setGM({ ...GM, t13_2: (-10)})} if(GM.t13_3 < -10){setGM({ ...GM, t13_3: (-10)})}
    if(GM.t13_1_lg < -10){setGM({ ...GM, t13_1_lg: (-10)})} if(GM.t13_2_lg < -10){setGM({ ...GM, t13_2_lg: (-10)})} if(GM.t13_3_lg < -10){setGM({ ...GM, t13_3_lg: (-10)})}
  };
  const gmLimit12 = () => {
    if(GM.t12_1 > 15) {setGM({ ...GM, t12_1: 15})} if(GM.t12_2 > 15) {setGM({ ...GM, t12_2: 15})} if(GM.t12_3 > 15) {setGM({ ...GM, t12_3: 15})}
    if(GM.t12_1_lg > 15) {setGM({ ...GM, t12_1_lg: 15})} if(GM.t12_2_lg > 15) {setGM({ ...GM, t12_2_lg: 15})} if(GM.t12_3_lg > 15) {setGM({ ...GM, t12_3_lg: 15})}
    if(GM.t12_1 < -10){setGM({ ...GM, t12_1: (-10)})} if(GM.t12_2 < -10){setGM({ ...GM, t12_2: (-10)})} if(GM.t12_3 < -10){setGM({ ...GM, t12_3: (-10)})}
    if(GM.t12_1_lg < -10){setGM({ ...GM, t12_1_lg: (-10)})} if(GM.t12_2_lg < -10){setGM({ ...GM, t12_2_lg: (-10)})} if(GM.t12_3_lg < -10){setGM({ ...GM, t12_3_lg: (-10)})}
  };
  const gmLimit11 = () => {
    if(GM.t11_1 > 15) {setGM({ ...GM, t11_1: 15})} if(GM.t11_2 > 15) {setGM({ ...GM, t11_2: 15})} if(GM.t11_3 > 15) {setGM({ ...GM, t11_3: 15})}
    if(GM.t11_1_lg > 15) {setGM({ ...GM, t11_1_lg: 15})} if(GM.t11_2_lg > 15) {setGM({ ...GM, t11_2_lg: 15})} if(GM.t11_3_lg > 15) {setGM({ ...GM, t11_3_lg: 15})}
    if(GM.t11_1 < -10){setGM({ ...GM, t11_1: (-10)})} if(GM.t11_2 < -10){setGM({ ...GM, t11_2: (-10)})} if(GM.t11_3 < -10){setGM({ ...GM, t11_3: (-10)})}
    if(GM.t11_1_lg < -10){setGM({ ...GM, t11_1_lg: (-10)})} if(GM.t11_2_lg < -10){setGM({ ...GM, t11_2_lg: (-10)})} if(GM.t11_3_lg < -10){setGM({ ...GM, t11_3_lg: (-10)})}
  };
  const gmLimit21 = () => {
    if(GM.t21_1 > 15) {setGM({ ...GM, t21_1: 15})} if(GM.t21_2 > 15) {setGM({ ...GM, t21_2: 15})} if(GM.t21_3 > 15) {setGM({ ...GM, t21_3: 15})}
    if(GM.t21_1_lg > 15) {setGM({ ...GM, t21_1_lg: 15})} if(GM.t21_2_lg > 15) {setGM({ ...GM, t21_2_lg: 15})} if(GM.t21_3_lg > 15) {setGM({ ...GM, t21_3_lg: 15})}
    if(GM.t21_1 < -10){setGM({ ...GM, t21_1: (-10)})} if(GM.t21_2 < -10){setGM({ ...GM, t21_2: (-10)})} if(GM.t21_3 < -10){setGM({ ...GM, t21_3: (-10)})}
    if(GM.t21_1_lg < -10){setGM({ ...GM, t21_1_lg: (-10)})} if(GM.t21_2_lg < -10){setGM({ ...GM, t21_2_lg: (-10)})} if(GM.t21_3_lg < -10){setGM({ ...GM, t21_3_lg: (-10)})}
  };
  const gmLimit22 = () => {
    if(GM.t22_1 > 15) {setGM({ ...GM, t22_1: 15})} if(GM.t22_2 > 15) {setGM({ ...GM, t22_2: 15})} if(GM.t22_3 > 15) {setGM({ ...GM, t22_3: 15})}
    if(GM.t22_1_lg > 15) {setGM({ ...GM, t22_1_lg: 15})} if(GM.t22_2_lg > 15) {setGM({ ...GM, t22_2_lg: 15})} if(GM.t22_3_lg > 15) {setGM({ ...GM, t22_3_lg: 15})}
    if(GM.t22_1 < -10){setGM({ ...GM, t22_1: (-10)})} if(GM.t22_2 < -10){setGM({ ...GM, t22_2: (-10)})} if(GM.t22_3 < -10){setGM({ ...GM, t22_3: (-10)})}
    if(GM.t22_1_lg < -10){setGM({ ...GM, t22_1_lg: (-10)})} if(GM.t22_2_lg < -10){setGM({ ...GM, t22_2_lg: (-10)})} if(GM.t22_3_lg < -10){setGM({ ...GM, t22_3_lg: (-10)})}
  };
  const gmLimit23 = () => {
    if(GM.t23_1 > 15) {setGM({ ...GM, t23_1: 15})} if(GM.t23_2 > 15) {setGM({ ...GM, t23_2: 15})} if(GM.t23_3 > 15) {setGM({ ...GM, t23_3: 15})}
    if(GM.t23_1_lg > 15) {setGM({ ...GM, t23_1_lg: 15})} if(GM.t23_2_lg > 15) {setGM({ ...GM, t23_2_lg: 15})} if(GM.t23_3_lg > 15) {setGM({ ...GM, t23_3_lg: 15})}
    if(GM.t23_1 < -10){setGM({ ...GM, t23_1: (-10)})} if(GM.t23_2 < -10){setGM({ ...GM, t23_2: (-10)})} if(GM.t23_3 < -10){setGM({ ...GM, t23_3: (-10)})}
    if(GM.t23_1_lg < -10){setGM({ ...GM, t23_1_lg: (-10)})} if(GM.t23_2_lg < -10){setGM({ ...GM, t23_2_lg: (-10)})} if(GM.t23_3_lg < -10){setGM({ ...GM, t23_3_lg: (-10)})}
  };
  const gmLimit24 = () => {
    if(GM.t24_1 > 15) {setGM({ ...GM, t24_1: 15})} if(GM.t24_2 > 15) {setGM({ ...GM, t24_2: 15})} if(GM.t24_3 > 15) {setGM({ ...GM, t24_3: 15})}
    if(GM.t24_1_lg > 15) {setGM({ ...GM, t24_1_lg: 15})} if(GM.t24_2_lg > 15) {setGM({ ...GM, t24_2_lg: 15})} if(GM.t24_3_lg > 15) {setGM({ ...GM, t24_3_lg: 15})}
    if(GM.t24_1 < -10){setGM({ ...GM, t24_1: (-10)})} if(GM.t24_2 < -10){setGM({ ...GM, t24_2: (-10)})} if(GM.t24_3 < -10){setGM({ ...GM, t24_3: (-10)})}
    if(GM.t24_1_lg < -10){setGM({ ...GM, t24_1_lg: (-10)})} if(GM.t24_2_lg < -10){setGM({ ...GM, t24_2_lg: (-10)})} if(GM.t24_3_lg < -10){setGM({ ...GM, t24_3_lg: (-10)})}
  };
  const gmLimit25 = () => {
    if(GM.t25_1 > 15) {setGM({ ...GM, t25_1: 15})} if(GM.t25_2 > 15) {setGM({ ...GM, t25_2: 15})} if(GM.t25_3 > 15) {setGM({ ...GM, t25_3: 15})}
    if(GM.t25_1_lg > 15) {setGM({ ...GM, t25_1_lg: 15})} if(GM.t25_2_lg > 15) {setGM({ ...GM, t25_2_lg: 15})} if(GM.t25_3_lg > 15) {setGM({ ...GM, t25_3_lg: 15})}
    if(GM.t25_1 < -10){setGM({ ...GM, t25_1: (-10)})} if(GM.t25_2 < -10){setGM({ ...GM, t25_2: (-10)})} if(GM.t25_3 < -10){setGM({ ...GM, t25_3: (-10)})}
    if(GM.t25_1_lg < -10){setGM({ ...GM, t25_1_lg: (-10)})} if(GM.t25_2_lg < -10){setGM({ ...GM, t25_2_lg: (-10)})} if(GM.t25_3_lg < -10){setGM({ ...GM, t25_3_lg: (-10)})}
  };
  const gmLimit26 = () => {
    if(GM.t26_1 > 15) {setGM({ ...GM, t26_1: 15})} if(GM.t26_2 > 15) {setGM({ ...GM, t26_2: 15})} if(GM.t26_3 > 15) {setGM({ ...GM, t26_3: 15})}
    if(GM.t26_1_lg > 15) {setGM({ ...GM, t26_1_lg: 15})} if(GM.t26_2_lg > 15) {setGM({ ...GM, t26_2_lg: 15})} if(GM.t26_3_lg > 15) {setGM({ ...GM, t26_3_lg: 15})}
    if(GM.t26_1 < -10){setGM({ ...GM, t26_1: (-10)})} if(GM.t26_2 < -10){setGM({ ...GM, t26_2: (-10)})} if(GM.t26_3 < -10){setGM({ ...GM, t26_3: (-10)})}
    if(GM.t26_1_lg < -10){setGM({ ...GM, t26_1_lg: (-10)})} if(GM.t26_2_lg < -10){setGM({ ...GM, t26_2_lg: (-10)})} if(GM.t26_3_lg < -10){setGM({ ...GM, t26_3_lg: (-10)})}
  };
  const gmLimit27 = () => {
    if(GM.t27_1 > 15) {setGM({ ...GM, t27_1: 15})} if(GM.t27_2 > 15) {setGM({ ...GM, t27_2: 15})} if(GM.t27_3 > 15) {setGM({ ...GM, t27_3: 15})}
    if(GM.t27_1_lg > 15) {setGM({ ...GM, t27_1_lg: 15})} if(GM.t27_2_lg > 15) {setGM({ ...GM, t27_2_lg: 15})} if(GM.t27_3_lg > 15) {setGM({ ...GM, t27_3_lg: 15})}
    if(GM.t27_1 < -10){setGM({ ...GM, t27_1: (-10)})} if(GM.t27_2 < -10){setGM({ ...GM, t27_2: (-10)})} if(GM.t27_3 < -10){setGM({ ...GM, t27_3: (-10)})}
    if(GM.t27_1_lg < -10){setGM({ ...GM, t27_1_lg: (-10)})} if(GM.t27_2_lg < -10){setGM({ ...GM, t27_2_lg: (-10)})} if(GM.t27_3_lg < -10){setGM({ ...GM, t27_3_lg: (-10)})}
  };
  const gmLimit28 = () => {
    if(GM.t28_1 > 15) {setGM({ ...GM, t28_1: 15})} if(GM.t28_2 > 15) {setGM({ ...GM, t28_2: 15})} if(GM.t28_3 > 15) {setGM({ ...GM, t28_3: 15})}
    if(GM.t28_1_lg > 15) {setGM({ ...GM, t28_1_lg: 15})} if(GM.t28_2_lg > 15) {setGM({ ...GM, t28_2_lg: 15})} if(GM.t28_3_lg > 15) {setGM({ ...GM, t28_3_lg: 15})}
    if(GM.t28_1 < -10){setGM({ ...GM, t28_1: (-10)})} if(GM.t28_2 < -10){setGM({ ...GM, t28_2: (-10)})} if(GM.t28_3 < -10){setGM({ ...GM, t28_3: (-10)})}
    if(GM.t28_1_lg < -10){setGM({ ...GM, t28_1_lg: (-10)})} if(GM.t28_2_lg < -10){setGM({ ...GM, t28_2_lg: (-10)})} if(GM.t28_3_lg < -10){setGM({ ...GM, t28_3_lg: (-10)})}
  };

//Probe Limit
  const ProbeLimit18 = () => {
    if(Probe.p18_1 > 15) {setProbe({ ...Probe, p18_1: 15})} if(Probe.p18_2 > 15) {setProbe({ ...Probe, p18_2: 15})} if(Probe.p18_3 > 15) {setProbe({ ...Probe, p18_3: 15})}
    if(Probe.p18_1_lg > 15) {setProbe({ ...Probe, p18_1_lg: 15})} if(Probe.p18_2_lg > 15) {setProbe({ ...Probe, p18_2_lg: 15})} if(Probe.p18_3_lg > 15) {setProbe({ ...Probe, p18_3_lg: 15})}
    if(Probe.p18_1 < 0){setProbe({ ...Probe, p18_1: (0)})} if(Probe.p18_2 < 0){setProbe({ ...Probe, p18_2: (0)})} if(Probe.p18_3 < 0){setProbe({ ...Probe, p18_3: (0)})}
    if(Probe.p18_1_lg < 0){setProbe({ ...Probe, p18_1_lg: (0)})} if(Probe.p18_2_lg < 0){setProbe({ ...Probe, p18_2_lg: (0)})} if(Probe.p18_3_lg < 0){setProbe({ ...Probe, p18_3_lg: (0)})}
  };
  const ProbeLimit17 = () => {
    if(Probe.p17_1 > 15) {setProbe({ ...Probe, p17_1: 15})} if(Probe.p17_2 > 15) {setProbe({ ...Probe, p17_2: 15})} if(Probe.p17_3 > 15) {setProbe({ ...Probe, p17_3: 15})}
    if(Probe.p17_1_lg > 15) {setProbe({ ...Probe, p17_1_lg: 15})} if(Probe.p17_2_lg > 15) {setProbe({ ...Probe, p17_2_lg: 15})} if(Probe.p17_3_lg > 15) {setProbe({ ...Probe, p17_3_lg: 15})}
    if(Probe.p17_1 < 0){setProbe({ ...Probe, p17_1: (0)})} if(Probe.p17_2 < 0){setProbe({ ...Probe, p17_2: (0)})} if(Probe.p17_3 < 0){setProbe({ ...Probe, p17_3: (0)})}
    if(Probe.p17_1_lg < 0){setProbe({ ...Probe, p17_1_lg: (0)})} if(Probe.p17_2_lg < 0){setProbe({ ...Probe, p17_2_lg: (0)})} if(Probe.p17_3_lg < 0){setProbe({ ...Probe, p17_3_lg: (0)})}
  };
  const ProbeLimit16 = () => {
    if(Probe.p16_1 > 15) {setProbe({ ...Probe, p16_1: 15})} if(Probe.p16_2 > 15) {setProbe({ ...Probe, p16_2: 15})} if(Probe.p16_3 > 15) {setProbe({ ...Probe, p16_3: 15})}
    if(Probe.p16_1_lg > 15) {setProbe({ ...Probe, p16_1_lg: 15})} if(Probe.p16_2_lg > 15) {setProbe({ ...Probe, p16_2_lg: 15})} if(Probe.p16_3_lg > 15) {setProbe({ ...Probe, p16_3_lg: 15})}
    if(Probe.p16_1 < 0){setProbe({ ...Probe, p16_1: (0)})} if(Probe.p16_2 < 0){setProbe({ ...Probe, p16_2: (0)})} if(Probe.p16_3 < 0){setProbe({ ...Probe, p16_3: (0)})}
    if(Probe.p16_1_lg < 0){setProbe({ ...Probe, p16_1_lg: (0)})} if(Probe.p16_2_lg < 0){setProbe({ ...Probe, p16_2_lg: (0)})} if(Probe.p16_3_lg < 0){setProbe({ ...Probe, p16_3_lg: (0)})}
  };
  const ProbeLimit15 = () => {
    if(Probe.p15_1 > 15) {setProbe({ ...Probe, p15_1: 15})} if(Probe.p15_2 > 15) {setProbe({ ...Probe, p15_2: 15})} if(Probe.p15_3 > 15) {setProbe({ ...Probe, p15_3: 15})}
    if(Probe.p15_1_lg > 15) {setProbe({ ...Probe, p15_1_lg: 15})} if(Probe.p15_2_lg > 15) {setProbe({ ...Probe, p15_2_lg: 15})} if(Probe.p15_3_lg > 15) {setProbe({ ...Probe, p15_3_lg: 15})}
    if(Probe.p15_1 < 0){setProbe({ ...Probe, p15_1: (0)})} if(Probe.p15_2 < 0){setProbe({ ...Probe, p15_2: (0)})} if(Probe.p15_3 < 0){setProbe({ ...Probe, p15_3: (0)})}
    if(Probe.p15_1_lg < 0){setProbe({ ...Probe, p15_1_lg: (0)})} if(Probe.p15_2_lg < 0){setProbe({ ...Probe, p15_2_lg: (0)})} if(Probe.p15_3_lg < 0){setProbe({ ...Probe, p15_3_lg: (0)})}
  };
  const ProbeLimit14 = () => {
    if(Probe.p14_1 > 15) {setProbe({ ...Probe, p14_1: 15})} if(Probe.p14_2 > 15) {setProbe({ ...Probe, p14_2: 15})} if(Probe.p14_3 > 15) {setProbe({ ...Probe, p14_3: 15})}
    if(Probe.p14_1_lg > 15) {setProbe({ ...Probe, p14_1_lg: 15})} if(Probe.p14_2_lg > 15) {setProbe({ ...Probe, p14_2_lg: 15})} if(Probe.p14_3_lg > 15) {setProbe({ ...Probe, p14_3_lg: 15})}
    if(Probe.p14_1 < 0){setProbe({ ...Probe, p14_1: (0)})} if(Probe.p14_2 < 0){setProbe({ ...Probe, p14_2: (0)})} if(Probe.p14_3 < 0){setProbe({ ...Probe, p14_3: (0)})}
    if(Probe.p14_1_lg < 0){setProbe({ ...Probe, p14_1_lg: (0)})} if(Probe.p14_2_lg < 0){setProbe({ ...Probe, p14_2_lg: (0)})} if(Probe.p14_3_lg < 0){setProbe({ ...Probe, p14_3_lg: (0)})}
  };
  const ProbeLimit13 = () => {
    if(Probe.p13_1 > 15) {setProbe({ ...Probe, p13_1: 15})} if(Probe.p13_2 > 15) {setProbe({ ...Probe, p13_2: 15})} if(Probe.p13_3 > 15) {setProbe({ ...Probe, p13_3: 15})}
    if(Probe.p13_1_lg > 15) {setProbe({ ...Probe, p13_1_lg: 15})} if(Probe.p13_2_lg > 15) {setProbe({ ...Probe, p13_2_lg: 15})} if(Probe.p13_3_lg > 15) {setProbe({ ...Probe, p13_3_lg: 15})}
    if(Probe.p13_1 < 0){setProbe({ ...Probe, p13_1: (0)})} if(Probe.p13_2 < 0){setProbe({ ...Probe, p13_2: (0)})} if(Probe.p13_3 < 0){setProbe({ ...Probe, p13_3: (0)})}
    if(Probe.p13_1_lg < 0){setProbe({ ...Probe, p13_1_lg: (0)})} if(Probe.p13_2_lg < 0){setProbe({ ...Probe, p13_2_lg: (0)})} if(Probe.p13_3_lg < 0){setProbe({ ...Probe, p13_3_lg: (0)})}
  };
  const ProbeLimit12 = () => {
    if(Probe.p12_1 > 15) {setProbe({ ...Probe, p12_1: 15})} if(Probe.p12_2 > 15) {setProbe({ ...Probe, p12_2: 15})} if(Probe.p12_3 > 15) {setProbe({ ...Probe, p12_3: 15})}
    if(Probe.p12_1_lg > 15) {setProbe({ ...Probe, p12_1_lg: 15})} if(Probe.p12_2_lg > 15) {setProbe({ ...Probe, p12_2_lg: 15})} if(Probe.p12_3_lg > 15) {setProbe({ ...Probe, p12_3_lg: 15})}
    if(Probe.p12_1 < 0){setProbe({ ...Probe, p12_1: (0)})} if(Probe.p12_2 < 0){setProbe({ ...Probe, p12_2: (0)})} if(Probe.p12_3 < 0){setProbe({ ...Probe, p12_3: (0)})}
    if(Probe.p12_1_lg < 0){setProbe({ ...Probe, p12_1_lg: (0)})} if(Probe.p12_2_lg < 0){setProbe({ ...Probe, p12_2_lg: (0)})} if(Probe.p12_3_lg < 0){setProbe({ ...Probe, p12_3_lg: (0)})}
  };
  const ProbeLimit11 = () => {
    if(Probe.p11_1 > 15) {setProbe({ ...Probe, p11_1: 15})} if(Probe.p11_2 > 15) {setProbe({ ...Probe, p11_2: 15})} if(Probe.p11_3 > 15) {setProbe({ ...Probe, p11_3: 15})}
    if(Probe.p11_1_lg > 15) {setProbe({ ...Probe, p11_1_lg: 15})} if(Probe.p11_2_lg > 15) {setProbe({ ...Probe, p11_2_lg: 15})} if(Probe.p11_3_lg > 15) {setProbe({ ...Probe, p11_3_lg: 15})}
    if(Probe.p11_1 < 0){setProbe({ ...Probe, p11_1: (0)})} if(Probe.p11_2 < 0){setProbe({ ...Probe, p11_2: (0)})} if(Probe.p11_3 < 0){setProbe({ ...Probe, p11_3: (0)})}
    if(Probe.p11_1_lg < 0){setProbe({ ...Probe, p11_1_lg: (0)})} if(Probe.p11_2_lg < 0){setProbe({ ...Probe, p11_2_lg: (0)})} if(Probe.p11_3_lg < 0){setProbe({ ...Probe, p11_3_lg: (0)})}
  };
  const ProbeLimit21 = () => {
    if(Probe.p21_1 > 15) {setProbe({ ...Probe, p21_1: 15})} if(Probe.p21_2 > 15) {setProbe({ ...Probe, p21_2: 15})} if(Probe.p21_3 > 15) {setProbe({ ...Probe, p21_3: 15})}
    if(Probe.p21_1_lg > 15) {setProbe({ ...Probe, p21_1_lg: 15})} if(Probe.p21_2_lg > 15) {setProbe({ ...Probe, p21_2_lg: 15})} if(Probe.p21_3_lg > 15) {setProbe({ ...Probe, p21_3_lg: 15})}
    if(Probe.p21_1 < 0){setProbe({ ...Probe, p21_1: (0)})} if(Probe.p21_2 < 0){setProbe({ ...Probe, p21_2: (0)})} if(Probe.p21_3 < 0){setProbe({ ...Probe, p21_3: (0)})}
    if(Probe.p21_1_lg < 0){setProbe({ ...Probe, p21_1_lg: (0)})} if(Probe.p21_2_lg < 0){setProbe({ ...Probe, p21_2_lg: (0)})} if(Probe.p21_3_lg < 0){setProbe({ ...Probe, p21_3_lg: (0)})}
  };
  const ProbeLimit22 = () => {
    if(Probe.p22_1 > 15) {setProbe({ ...Probe, p22_1: 15})} if(Probe.p22_2 > 15) {setProbe({ ...Probe, p22_2: 15})} if(Probe.p22_3 > 15) {setProbe({ ...Probe, p22_3: 15})}
    if(Probe.p22_1_lg > 15) {setProbe({ ...Probe, p22_1_lg: 15})} if(Probe.p22_2_lg > 15) {setProbe({ ...Probe, p22_2_lg: 15})} if(Probe.p22_3_lg > 15) {setProbe({ ...Probe, p22_3_lg: 15})}
    if(Probe.p22_1 < 0){setProbe({ ...Probe, p22_1: (0)})} if(Probe.p22_2 < 0){setProbe({ ...Probe, p22_2: (0)})} if(Probe.p22_3 < 0){setProbe({ ...Probe, p22_3: (0)})}
    if(Probe.p22_1_lg < 0){setProbe({ ...Probe, p22_1_lg: (0)})} if(Probe.p22_2_lg < 0){setProbe({ ...Probe, p22_2_lg: (0)})} if(Probe.p22_3_lg < 0){setProbe({ ...Probe, p22_3_lg: (0)})}
  };
  const ProbeLimit23 = () => {
    if(Probe.p23_1 > 15) {setProbe({ ...Probe, p23_1: 15})} if(Probe.p23_2 > 15) {setProbe({ ...Probe, p23_2: 15})} if(Probe.p23_3 > 15) {setProbe({ ...Probe, p23_3: 15})}
    if(Probe.p23_1_lg > 15) {setProbe({ ...Probe, p23_1_lg: 15})} if(Probe.p23_2_lg > 15) {setProbe({ ...Probe, p23_2_lg: 15})} if(Probe.p23_3_lg > 15) {setProbe({ ...Probe, p23_3_lg: 15})}
    if(Probe.p23_1 < 0){setProbe({ ...Probe, p23_1: (0)})} if(Probe.p23_2 < 0){setProbe({ ...Probe, p23_2: (0)})} if(Probe.p23_3 < 0){setProbe({ ...Probe, p23_3: (0)})}
    if(Probe.p23_1_lg < 0){setProbe({ ...Probe, p23_1_lg: (0)})} if(Probe.p23_2_lg < 0){setProbe({ ...Probe, p23_2_lg: (0)})} if(Probe.p23_3_lg < 0){setProbe({ ...Probe, p23_3_lg: (0)})}
  };
  const ProbeLimit24 = () => {
    if(Probe.p24_1 > 15) {setProbe({ ...Probe, p24_1: 15})} if(Probe.p24_2 > 15) {setProbe({ ...Probe, p24_2: 15})} if(Probe.p24_3 > 15) {setProbe({ ...Probe, p24_3: 15})}
    if(Probe.p24_1_lg > 15) {setProbe({ ...Probe, p24_1_lg: 15})} if(Probe.p24_2_lg > 15) {setProbe({ ...Probe, p24_2_lg: 15})} if(Probe.p24_3_lg > 15) {setProbe({ ...Probe, p24_3_lg: 15})}
    if(Probe.p24_1 < 0){setProbe({ ...Probe, p24_1: (0)})} if(Probe.p24_2 < 0){setProbe({ ...Probe, p24_2: (0)})} if(Probe.p24_3 < 0){setProbe({ ...Probe, p24_3: (0)})}
    if(Probe.p24_1_lg < 0){setProbe({ ...Probe, p24_1_lg: (0)})} if(Probe.p24_2_lg < 0){setProbe({ ...Probe, p24_2_lg: (0)})} if(Probe.p24_3_lg < 0){setProbe({ ...Probe, p24_3_lg: (0)})}
  };
  const ProbeLimit25 = () => {
    if(Probe.p25_1 > 15) {setProbe({ ...Probe, p25_1: 15})} if(Probe.p25_2 > 15) {setProbe({ ...Probe, p25_2: 15})} if(Probe.p25_3 > 15) {setProbe({ ...Probe, p25_3: 15})}
    if(Probe.p25_1_lg > 15) {setProbe({ ...Probe, p25_1_lg: 15})} if(Probe.p25_2_lg > 15) {setProbe({ ...Probe, p25_2_lg: 15})} if(Probe.p25_3_lg > 15) {setProbe({ ...Probe, p25_3_lg: 15})}
    if(Probe.p25_1 < 0){setProbe({ ...Probe, p25_1: (0)})} if(Probe.p25_2 < 0){setProbe({ ...Probe, p25_2: (0)})} if(Probe.p25_3 < 0){setProbe({ ...Probe, p25_3: (0)})}
    if(Probe.p25_1_lg < 0){setProbe({ ...Probe, p25_1_lg: (0)})} if(Probe.p25_2_lg < 0){setProbe({ ...Probe, p25_2_lg: (0)})} if(Probe.p25_3_lg < 0){setProbe({ ...Probe, p25_3_lg: (0)})}
  };
  const ProbeLimit26 = () => {
    if(Probe.p26_1 > 15) {setProbe({ ...Probe, p26_1: 15})} if(Probe.p26_2 > 15) {setProbe({ ...Probe, p26_2: 15})} if(Probe.p26_3 > 15) {setProbe({ ...Probe, p26_3: 15})}
    if(Probe.p26_1_lg > 15) {setProbe({ ...Probe, p26_1_lg: 15})} if(Probe.p26_2_lg > 15) {setProbe({ ...Probe, p26_2_lg: 15})} if(Probe.p26_3_lg > 15) {setProbe({ ...Probe, p26_3_lg: 15})}
    if(Probe.p26_1 < 0){setProbe({ ...Probe, p26_1: (0)})} if(Probe.p26_2 < 0){setProbe({ ...Probe, p26_2: (0)})} if(Probe.p26_3 < 0){setProbe({ ...Probe, p26_3: (0)})}
    if(Probe.p26_1_lg < 0){setProbe({ ...Probe, p26_1_lg: (0)})} if(Probe.p26_2_lg < 0){setProbe({ ...Probe, p26_2_lg: (0)})} if(Probe.p26_3_lg < 0){setProbe({ ...Probe, p26_3_lg: (0)})}
  };
  const ProbeLimit27 = () => {
    if(Probe.p27_1 > 15) {setProbe({ ...Probe, p27_1: 15})} if(Probe.p27_2 > 15) {setProbe({ ...Probe, p27_2: 15})} if(Probe.p27_3 > 15) {setProbe({ ...Probe, p27_3: 15})}
    if(Probe.p27_1_lg > 15) {setProbe({ ...Probe, p27_1_lg: 15})} if(Probe.p27_2_lg > 15) {setProbe({ ...Probe, p27_2_lg: 15})} if(Probe.p27_3_lg > 15) {setProbe({ ...Probe, p27_3_lg: 15})}
    if(Probe.p27_1 < 0){setProbe({ ...Probe, p27_1: (0)})} if(Probe.p27_2 < 0){setProbe({ ...Probe, p27_2: (0)})} if(Probe.p27_3 < 0){setProbe({ ...Probe, p27_3: (0)})}
    if(Probe.p27_1_lg < 0){setProbe({ ...Probe, p27_1_lg: (0)})} if(Probe.p27_2_lg < 0){setProbe({ ...Probe, p27_2_lg: (0)})} if(Probe.p27_3_lg < 0){setProbe({ ...Probe, p27_3_lg: (0)})}
  };
  const ProbeLimit28 = () => {
    if(Probe.p28_1 > 15) {setProbe({ ...Probe, p28_1: 15})} if(Probe.p28_2 > 15) {setProbe({ ...Probe, p28_2: 15})} if(Probe.p28_3 > 15) {setProbe({ ...Probe, p28_3: 15})}
    if(Probe.p28_1_lg > 15) {setProbe({ ...Probe, p28_1_lg: 15})} if(Probe.p28_2_lg > 15) {setProbe({ ...Probe, p28_2_lg: 15})} if(Probe.p28_3_lg > 15) {setProbe({ ...Probe, p28_3_lg: 15})}
    if(Probe.p28_1 < 0){setProbe({ ...Probe, p28_1: (0)})} if(Probe.p28_2 < 0){setProbe({ ...Probe, p28_2: (0)})} if(Probe.p28_3 < 0){setProbe({ ...Probe, p28_3: (0)})}
    if(Probe.p28_1_lg < 0){setProbe({ ...Probe, p28_1_lg: (0)})} if(Probe.p28_2_lg < 0){setProbe({ ...Probe, p28_2_lg: (0)})} if(Probe.p28_3_lg < 0){setProbe({ ...GM, p28_3_lg: (0)})}
  };


  return (
    <PerioContainer className={printableVersion === 1 ? classes.disable_container: null}>
    <div className="group_vertical">
      <Header style={printableVersion === 1 ? { fontSize: '45px' } : null}>Periodontal Chart</Header>
      <SubHeader className={localStorage.getItem("messageForChart") ? null: classes.disable_furcation}>* There is no need to complete the entire chart, please only do the implant screening. </SubHeader>
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
          <a>Buccal</a>
        </div>
        <div className="medical-data-buccal">
          <a id="plaque">Plaque</a>
        </div>
        <div className="buccal-lingual">
          <a>Palatal</a>
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
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t18 !== 2 ? dataLocker18 : () => setLock({ ...Lock, t18: 0})}>18</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t17 !== 2 ? dataLocker17 : () => setLock({ ...Lock, t17: 0})}>17</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t16 !== 2 ? dataLocker16 : () => setLock({ ...Lock, t16: 0})}>16</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t15 !== 2 ? dataLocker15 : () => setLock({ ...Lock, t15: 0})}>15</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t14 !== 2 ? dataLocker14 : () => setLock({ ...Lock, t14: 0})}>14</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t13 !== 2 ? dataLocker13 : () => setLock({ ...Lock, t13: 0})}>13</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t12 !== 2 ? dataLocker12 : () => setLock({ ...Lock, t12: 0})}>12</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t11 !== 2 ? dataLocker11 : () => setLock({ ...Lock, t11: 0})}>11</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
                <StyledTableCell align="center"><input tabIndex="1" type="text" value={Note.t18} onChange={(e) => setNote({...Note, t18: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="2" type="text" value={Note.t17} onChange={(e) => setNote({...Note, t17: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="3" type="text" value={Note.t16} onChange={(e) => setNote({...Note, t16: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="4" type="text" value={Note.t15} onChange={(e) => setNote({...Note, t15: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="5" type="text" value={Note.t14} onChange={(e) => setNote({...Note, t14: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="6" type="text" value={Note.t13} onChange={(e) => setNote({...Note, t13: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="7" type="text" value={Note.t12} onChange={(e) => setNote({...Note, t12: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="8" type="text" value={Note.t11} onChange={(e) => setNote({...Note, t11: e.target.value})} className="input_note_last"/></StyledTableCell>
                
            </TableRow>
            <TableRow>
                <StyledTableCell align="center"><input tabIndex="17" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t18 > 3 || Mob.t18 < 0 ? mobLimit18() : Mob.t18} onChange={(e) => setMob({...Mob, t18: e.target.value})} className={Lock.t18 !== 2 ? "input_mobility": "input_mobility_disabled"}/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="18" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t17 > 3 || Mob.t17 < 0 ? mobLimit17() : Mob.t17} onChange={(e) => setMob({...Mob, t17: e.target.value})} className={Lock.t17 !== 2 ? "input_mobility": "input_mobility_disabled"}/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="19" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t16 > 3 || Mob.t16 < 0 ? mobLimit16() : Mob.t16} onChange={(e) => setMob({...Mob, t16: e.target.value})} className={Lock.t16 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="21" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t15 > 3 || Mob.t15 < 0 ? mobLimit15() : Mob.t15} onChange={(e) => setMob({...Mob, t15: e.target.value})} className={Lock.t15 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="21" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t14 > 3 || Mob.t14 < 0 ? mobLimit14() : Mob.t14} onChange={(e) => setMob({...Mob, t14: e.target.value})} className={Lock.t14 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="22" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t13 > 3 || Mob.t13 < 0 ? mobLimit13() : Mob.t13} onChange={(e) => setMob({...Mob, t13: e.target.value})} className={Lock.t13 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="23" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t12 > 3 || Mob.t12 < 0 ? mobLimit12() : Mob.t12} onChange={(e) => setMob({...Mob, t12: e.target.value})} className={Lock.t12 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="24" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t11 > 3 || Mob.t11 < 0 ? mobLimit11() : Mob.t11} onChange={(e) => setMob({...Mob, t11: e.target.value})} className={Lock.t11 !== 2 ? "input_mobility_last": "input_mobility_disabled"} /></StyledTableCell>
                
            </TableRow>
            <TableRow>
                <StyledTableCell align="center"><StyledButton tabIndex="33" onClick={ Lock.t18 === 0 ? implantLocker18 : Lock.t18 === 1 ? dataLocker18 : () => setLock({ ...Lock, t18: 0})} size="large"  ><img src={Lock.t18 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t18 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t18 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="34" onClick={ Lock.t17 === 0 ? implantLocker17 : Lock.t17 === 1 ? dataLocker17 : () => setLock({ ...Lock, t17: 0})} size="large"  ><img src={Lock.t17 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t17 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t17 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="35" onClick={ Lock.t16 === 0 ? implantLocker16 : Lock.t16 === 1 ? dataLocker16 : () => setLock({ ...Lock, t16: 0})} size="large"  ><img src={Lock.t16 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t16 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t16 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="36" onClick={ Lock.t15 === 0 ? () => setLock({ ...Lock, t15: 1}): Lock.t15 === 1 ? dataLocker15 : () => setLock({ ...Lock, t15: 0})} size="large"  ><img src={Lock.t15 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t15 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t15 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="37" onClick={ Lock.t14 === 0 ? implantLocker14 : Lock.t14 === 1 ? dataLocker14 : () => setLock({ ...Lock, t14: 0})} size="large"  ><img src={Lock.t14 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t14 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t14 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="38" onClick={ Lock.t13 === 0 ? () => setLock({ ...Lock, t13: 1}): Lock.t13 === 1 ? dataLocker13 : () => setLock({ ...Lock, t13: 0})} size="large"  ><img src={Lock.t13 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t13 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t13 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="39"onClick={ Lock.t12 === 0 ? () => setLock({ ...Lock, t12: 1}): Lock.t12 === 1 ? dataLocker12 : () => setLock({ ...Lock, t12: 0})} size="large"  ><img src={Lock.t12 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t12 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t12 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButtonLast tabIndex="40" onClick={ Lock.t11 === 0 ? () => setLock({ ...Lock, t11: 1}): Lock.t11 === 1 ? dataLocker11 : () => setLock({ ...Lock, t11: 0})} size="large"  ><img src={Lock.t11 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t11 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t11 !== 0 ? classes.implant: classes.disabled}/></StyledButtonLast></StyledTableCell>
                
            </TableRow>
            <TableRow>
                <StyledTableCell align="center"><StyledButton tabIndex="49" onClick={furc_flow18()} size="large" className={Lock.t18 !== 0 ? classes.disable_furcation: null}>
                    <a className={Furc.FurcCount18 === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount18 === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount18 === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a></StyledButton>
                </StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="50" onClick={furc_flow17()} size="large" className={Lock.t17 !== 0 ? classes.disable_furcation: null}>
                   <a className={Furc.FurcCount17 === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount17 === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount17 === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a></StyledButton>
                </StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="51" onClick={furc_flow16()} size="large" className={Lock.t16 !== 0 ? classes.disable_furcation: null}>
                <a className={Furc.FurcCount16 === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount16 === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount16 === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a></StyledButton>
                </StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell> 
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell> 
                
            </TableRow>
        <TableRow>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="55" onClick={ BoP.BoP18_1 === true ? () => setBoP({ ...BoP, BoP18_1: !BoP.BoP18_1, BoP_total_18: BoP.BoP_total_18 - 1}) : () => setBoP({ ...BoP, BoP18_1: !BoP.BoP18_1, BoP_total_18: BoP.BoP_total_18 + 1})} className={Lock.t18 !== 2 ? (BoP.BoP18_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="56" onClick={ BoP.BoP18_2 === true ? () => setBoP({ ...BoP, BoP18_2: !BoP.BoP18_2, BoP_total_18: BoP.BoP_total_18 - 1}) : () => setBoP({ ...BoP, BoP18_2: !BoP.BoP18_2, BoP_total_18: BoP.BoP_total_18 + 1})} className={Lock.t18 !== 2 ? (BoP.BoP18_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="57" onClick={ BoP.BoP18_3 === true ? () => setBoP({ ...BoP, BoP18_3: !BoP.BoP18_3, BoP_total_18: BoP.BoP_total_18 - 1}) : () => setBoP({ ...BoP, BoP18_3: !BoP.BoP18_3, BoP_total_18: BoP.BoP_total_18 + 1})} className={Lock.t18 !== 2 ? (BoP.BoP18_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="58" onClick={ BoP.BoP17_1 === true ? () => setBoP({ ...BoP, BoP17_1: !BoP.BoP17_1, BoP_total_17: BoP.BoP_total_17 - 1}) : () => setBoP({ ...BoP, BoP17_1: !BoP.BoP17_1, BoP_total_17: BoP.BoP_total_17 + 1})} className={Lock.t17 !== 2 ? (BoP.BoP17_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="59" onClick={ BoP.BoP17_2 === true ? () => setBoP({ ...BoP, BoP17_2: !BoP.BoP17_2, BoP_total_17: BoP.BoP_total_17 - 1}) : () => setBoP({ ...BoP, BoP17_2: !BoP.BoP17_2, BoP_total_17: BoP.BoP_total_17 + 1})} className={Lock.t17 !== 2 ? (BoP.BoP17_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="60" onClick={ BoP.BoP17_3 === true ? () => setBoP({ ...BoP, BoP17_3: !BoP.BoP17_3, BoP_total_17: BoP.BoP_total_17 - 1}) : () => setBoP({ ...BoP, BoP17_3: !BoP.BoP17_3, BoP_total_17: BoP.BoP_total_17 + 1})} className={Lock.t17 !== 2 ? (BoP.BoP17_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="61" onClick={ BoP.BoP16_1 === true ? () => setBoP({ ...BoP, BoP16_1: !BoP.BoP16_1, BoP_total_16: BoP.BoP_total_16 - 1}) : () => setBoP({ ...BoP, BoP16_1: !BoP.BoP16_1, BoP_total_16: BoP.BoP_total_16 + 1})} className={Lock.t16 !== 2 ? (BoP.BoP16_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="62" onClick={ BoP.BoP16_2 === true ? () => setBoP({ ...BoP, BoP16_2: !BoP.BoP16_2, BoP_total_16: BoP.BoP_total_16 - 1}) : () => setBoP({ ...BoP, BoP16_2: !BoP.BoP16_2, BoP_total_16: BoP.BoP_total_16 + 1})} className={Lock.t16 !== 2 ? (BoP.BoP16_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="63" onClick={ BoP.BoP16_3 === true ? () => setBoP({ ...BoP, BoP16_3: !BoP.BoP16_3, BoP_total_16: BoP.BoP_total_16 - 1}) : () => setBoP({ ...BoP, BoP16_3: !BoP.BoP16_3, BoP_total_16: BoP.BoP_total_16 + 1})} className={Lock.t16 !== 2 ? (BoP.BoP16_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="64" onClick={ BoP.BoP15_1 === true ? () => setBoP({ ...BoP, BoP15_1: !BoP.BoP15_1, BoP_total_15: BoP.BoP_total_15 - 1}) : () => setBoP({ ...BoP, BoP15_1: !BoP.BoP15_1, BoP_total_15: BoP.BoP_total_15 + 1})} className={Lock.t15 !== 2 ? (BoP.BoP15_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="65" onClick={ BoP.BoP15_2 === true ? () => setBoP({ ...BoP, BoP15_2: !BoP.BoP15_2, BoP_total_15: BoP.BoP_total_15 - 1}) : () => setBoP({ ...BoP, BoP15_2: !BoP.BoP15_2, BoP_total_15: BoP.BoP_total_15 + 1})} className={Lock.t15 !== 2 ? (BoP.BoP15_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="66" onClick={ BoP.BoP15_3 === true ? () => setBoP({ ...BoP, BoP15_3: !BoP.BoP15_3, BoP_total_15: BoP.BoP_total_15 - 1}) : () => setBoP({ ...BoP, BoP15_3: !BoP.BoP15_3, BoP_total_15: BoP.BoP_total_15 + 1})} className={Lock.t15 !== 2 ? (BoP.BoP15_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="67" onClick={ BoP.BoP14_1 === true ? () => setBoP({ ...BoP, BoP14_1: !BoP.BoP14_1, BoP_total_14: BoP.BoP_total_14 - 1}) : () => setBoP({ ...BoP, BoP14_1: !BoP.BoP14_1, BoP_total_14: BoP.BoP_total_14 + 1})} className={Lock.t14 !== 2 ? (BoP.BoP14_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="68" onClick={ BoP.BoP14_2 === true ? () => setBoP({ ...BoP, BoP14_2: !BoP.BoP14_2, BoP_total_14: BoP.BoP_total_14 - 1}) : () => setBoP({ ...BoP, BoP14_2: !BoP.BoP14_2, BoP_total_14: BoP.BoP_total_14 + 1})} className={Lock.t14 !== 2 ? (BoP.BoP14_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="69" onClick={ BoP.BoP14_3 === true ? () => setBoP({ ...BoP, BoP14_3: !BoP.BoP14_3, BoP_total_14: BoP.BoP_total_14 - 1}) : () => setBoP({ ...BoP, BoP14_3: !BoP.BoP14_3, BoP_total_14: BoP.BoP_total_14 + 1})} className={Lock.t14 !== 2 ? (BoP.BoP14_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="70" onClick={ BoP.BoP13_1 === true ? () => setBoP({ ...BoP, BoP13_1: !BoP.BoP13_1, BoP_total_13: BoP.BoP_total_13 - 1}) : () => setBoP({ ...BoP, BoP13_1: !BoP.BoP13_1, BoP_total_13: BoP.BoP_total_13 + 1})} className={Lock.t13 !== 2 ? (BoP.BoP13_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="71" onClick={ BoP.BoP13_2 === true ? () => setBoP({ ...BoP, BoP13_2: !BoP.BoP13_2, BoP_total_13: BoP.BoP_total_13 - 1}) : () => setBoP({ ...BoP, BoP13_2: !BoP.BoP13_2, BoP_total_13: BoP.BoP_total_13 + 1})} className={Lock.t13 !== 2 ? (BoP.BoP13_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="72" onClick={ BoP.BoP13_3 === true ? () => setBoP({ ...BoP, BoP13_3: !BoP.BoP13_3, BoP_total_13: BoP.BoP_total_13 - 1}) : () => setBoP({ ...BoP, BoP13_3: !BoP.BoP13_3, BoP_total_13: BoP.BoP_total_13 + 1})} className={Lock.t13 !== 2 ? (BoP.BoP13_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="73" onClick={ BoP.BoP12_1 === true ? () => setBoP({ ...BoP, BoP12_1: !BoP.BoP12_1, BoP_total_12: BoP.BoP_total_12 - 1}) : () => setBoP({ ...BoP, BoP12_1: !BoP.BoP12_1, BoP_total_12: BoP.BoP_total_12 + 1})} className={Lock.t12 !== 2 ? (BoP.BoP12_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="74" onClick={ BoP.BoP12_2 === true ? () => setBoP({ ...BoP, BoP12_2: !BoP.BoP12_2, BoP_total_12: BoP.BoP_total_12 - 1}) : () => setBoP({ ...BoP, BoP12_2: !BoP.BoP12_2, BoP_total_12: BoP.BoP_total_12 + 1})} className={Lock.t12 !== 2 ? (BoP.BoP12_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="75" onClick={ BoP.BoP12_3 === true ? () => setBoP({ ...BoP, BoP12_3: !BoP.BoP12_3, BoP_total_12: BoP.BoP_total_12 - 1}) : () => setBoP({ ...BoP, BoP12_3: !BoP.BoP12_3, BoP_total_12: BoP.BoP_total_12 + 1})} className={Lock.t12 !== 2 ? (BoP.BoP12_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="76" onClick={ BoP.BoP11_1 === true ? () => setBoP({ ...BoP, BoP11_1: !BoP.BoP11_1, BoP_total_11: BoP.BoP_total_11 - 1}) : () => setBoP({ ...BoP, BoP11_1: !BoP.BoP11_1, BoP_total_11: BoP.BoP_total_11 + 1})} className={Lock.t11 !== 2 ? (BoP.BoP11_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="77" onClick={ BoP.BoP11_2 === true ? () => setBoP({ ...BoP, BoP11_2: !BoP.BoP11_2, BoP_total_11: BoP.BoP_total_11 - 1}) : () => setBoP({ ...BoP, BoP11_2: !BoP.BoP11_2, BoP_total_11: BoP.BoP_total_11 + 1})} className={Lock.t11 !== 2 ? (BoP.BoP11_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="78" onClick={ BoP.BoP11_3 === true ? () => setBoP({ ...BoP, BoP11_3: !BoP.BoP11_3, BoP_total_11: BoP.BoP_total_11 - 1}) : () => setBoP({ ...BoP, BoP11_3: !BoP.BoP11_3, BoP_total_11: BoP.BoP_total_11 + 1})} className={Lock.t11 !== 2 ? (BoP.BoP11_3 ? classes.small_btn_3_bop_lst : classes.small_btn_3_lst) : classes.disable_furcation}  /></div></StyledTableCell>
            
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="103" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t18_1 > 15 || GM.t18_1 < (-10) ? gmLimit18() : GM.t18_1} onChange={(e) => setGM({...GM, t18_1: e.target.value})} className={Lock.t18 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="104" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t18_2 > 15 || GM.t18_2 < (-10) ? gmLimit18() : GM.t18_2} onChange={(e) => setGM({...GM, t18_2: e.target.value})}  className={Lock.t18 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="105" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t18_3 > 15 || GM.t18_3 < (-10) ? gmLimit18() : GM.t18_3} onChange={(e) => setGM({...GM, t18_3: e.target.value})} className={Lock.t18 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="106" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t17_1 > 15 || GM.t17_1 < (-10) ? gmLimit17() : GM.t17_1} onChange={(e) => setGM({...GM, t17_1: e.target.value})} className={Lock.t17 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="107" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t17_2 > 15 || GM.t17_2 < (-10) ? gmLimit17() : GM.t17_2} onChange={(e) => setGM({...GM, t17_2: e.target.value})}  className={Lock.t17 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="108" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t17_3 > 15 || GM.t17_3 < (-10) ? gmLimit17() : GM.t17_3} onChange={(e) => setGM({...GM, t17_3: e.target.value})} className={Lock.t17 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="109" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t16_1 > 15 || GM.t16_1 < (-10) ? gmLimit16() : GM.t16_1} onChange={(e) => setGM({...GM, t16_1: e.target.value})} className={Lock.t16 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="110" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t16_2 > 15 || GM.t16_2 < (-10) ? gmLimit16() : GM.t16_2} onChange={(e) => setGM({...GM, t16_2: e.target.value})}  className={Lock.t16 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="111" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t16_3 > 15 || GM.t16_3 < (-10) ? gmLimit16() : GM.t16_3} onChange={(e) => setGM({...GM, t16_3: e.target.value})} className={Lock.t16 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="112" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t15_1 > 15 || GM.t15_1 < (-10) ? gmLimit15() : GM.t15_1} onChange={(e) => setGM({...GM, t15_1: e.target.value})} className={Lock.t15 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="113" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t15_2 > 15 || GM.t15_2 < (-10) ? gmLimit15() : GM.t15_2} onChange={(e) => setGM({...GM, t15_2: e.target.value})}  className={Lock.t15 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="114" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t15_3 > 15 || GM.t15_3 < (-10) ? gmLimit15() : GM.t15_3} onChange={(e) => setGM({...GM, t15_3: e.target.value})} className={Lock.t15 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="115" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t14_1 > 15 || GM.t14_1 < (-10) ? gmLimit14() : GM.t14_1} onChange={(e) => setGM({...GM, t14_1: e.target.value})} className={Lock.t14 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="116" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t14_2 > 15 || GM.t14_2 < (-10) ? gmLimit14() : GM.t14_2} onChange={(e) => setGM({...GM, t14_2: e.target.value})}  className={Lock.t14 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="117" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t14_3 > 15 || GM.t14_3 < (-10) ? gmLimit14() : GM.t14_3} onChange={(e) => setGM({...GM, t14_3: e.target.value})} className={Lock.t14 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="118" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t13_1 > 15 || GM.t13_1 < (-10) ? gmLimit13() : GM.t13_1} onChange={(e) => setGM({...GM, t13_1: e.target.value})} className={Lock.t13 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="119" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t13_2 > 15 || GM.t13_2 < (-10) ? gmLimit13() : GM.t13_2} onChange={(e) => setGM({...GM, t13_2: e.target.value})}  className={Lock.t13 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="120" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t13_3 > 15 || GM.t13_3 < (-10) ? gmLimit13() : GM.t13_3} onChange={(e) => setGM({...GM, t13_3: e.target.value})} className={Lock.t13 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="121" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t12_1 > 15 || GM.t12_1 < (-10) ? gmLimit12() : GM.t12_1} onChange={(e) => setGM({...GM, t12_1: e.target.value})} className={Lock.t12 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="122" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t12_2 > 15 || GM.t12_2 < (-10) ? gmLimit12() : GM.t12_2} onChange={(e) => setGM({...GM, t12_2: e.target.value})}  className={Lock.t12 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="123" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t12_3 > 15 || GM.t12_3 < (-10) ? gmLimit12() : GM.t12_3} onChange={(e) => setGM({...GM, t12_3: e.target.value})} className={Lock.t12 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="124" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t11_1 > 15 || GM.t11_1 < (-10) ? gmLimit11() : GM.t11_1} onChange={(e) => setGM({...GM, t11_1: e.target.value})} className={Lock.t11 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="125" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t11_2 > 15 || GM.t11_2 < (-10) ? gmLimit11() : GM.t11_2} onChange={(e) => setGM({...GM, t11_2: e.target.value})}  className={Lock.t11 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="126" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t11_3 > 15 || GM.t11_3 < (-10) ? gmLimit11() : GM.t11_3} onChange={(e) => setGM({...GM, t11_3: e.target.value})} className={Lock.t11 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
            
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="151" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p18_1 > 15 || Probe.p18_1 < 0 ? ProbeLimit18() : Probe.p18_1} onChange={(e) => setProbe({...Probe, p18_1: e.target.value})} className={Lock.t18 !== 2 ? (((Probe.p18_1 == 4 && BoP.BoP18_1) || Probe.p18_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="152" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p18_2 > 15 || Probe.p18_2 < 0 ? ProbeLimit18() : Probe.p18_2} onChange={(e) => setProbe({...Probe, p18_2: e.target.value})}  className={Lock.t18 !== 2 ? (((Probe.p18_2 == 4 && BoP.BoP18_2) || Probe.p18_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="153" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p18_3 > 15 || Probe.p18_3 < 0 ? ProbeLimit18() : Probe.p18_3} onChange={(e) => setProbe({...Probe, p18_3: e.target.value})} className={Lock.t18 !== 2 ? (((Probe.p18_3 == 4 && BoP.BoP18_3) || Probe.p18_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="154" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p17_1 > 15 || Probe.p17_1 < 0 ? ProbeLimit17() : Probe.p17_1} onChange={(e) => setProbe({...Probe, p17_1: e.target.value})} className={Lock.t17 !== 2 ? (((Probe.p17_1 == 4 && BoP.BoP17_1) || Probe.p17_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="155" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p17_2 > 15 || Probe.p17_2 < 0 ? ProbeLimit17() : Probe.p17_2} onChange={(e) => setProbe({...Probe, p17_2: e.target.value})}  className={Lock.t17 !== 2 ? (((Probe.p17_2 == 4 && BoP.BoP17_2) || Probe.p17_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="156" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p17_3 > 15 || Probe.p17_3 < 0 ? ProbeLimit17() : Probe.p17_3} onChange={(e) => setProbe({...Probe, p17_3: e.target.value})} className={Lock.t17 !== 2 ? (((Probe.p17_3 == 4 && BoP.BoP17_3) || Probe.p17_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="157" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p16_1 > 15 || Probe.p16_1 < 0 ? ProbeLimit16() : Probe.p16_1} onChange={(e) => setProbe({...Probe, p16_1: e.target.value})} className={Lock.t16 !== 2 ? (((Probe.p16_1 == 4 && BoP.BoP16_1) || Probe.p16_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="158" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p16_2 > 15 || Probe.p16_2 < 0 ? ProbeLimit16() : Probe.p16_2} onChange={(e) => setProbe({...Probe, p16_2: e.target.value})}  className={Lock.t16 !== 2 ? (((Probe.p16_2 == 4 && BoP.BoP16_2) || Probe.p16_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="159" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p16_3 > 15 || Probe.p16_3 < 0 ? ProbeLimit16() : Probe.p16_3} onChange={(e) => setProbe({...Probe, p16_3: e.target.value})} className={Lock.t16 !== 2 ? (((Probe.p16_3 == 4 && BoP.BoP16_3) || Probe.p16_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="160" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p15_1 > 15 || Probe.p15_1 < 0 ? ProbeLimit15() : Probe.p15_1} onChange={(e) => setProbe({...Probe, p15_1: e.target.value})} className={Lock.t15 !== 2 ? (((Probe.p15_1 == 4 && BoP.BoP15_1) || Probe.p15_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="161" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p15_2 > 15 || Probe.p15_2 < 0 ? ProbeLimit15() : Probe.p15_2} onChange={(e) => setProbe({...Probe, p15_2: e.target.value})}  className={Lock.t15 !== 2 ? (((Probe.p15_2 == 4 && BoP.BoP15_2) || Probe.p15_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="162" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p15_3 > 15 || Probe.p15_3 < 0 ? ProbeLimit15() : Probe.p15_3} onChange={(e) => setProbe({...Probe, p15_3: e.target.value})} className={Lock.t15 !== 2 ? (((Probe.p15_3 == 4 && BoP.BoP15_3) || Probe.p15_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="163" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p14_1 > 15 || Probe.p14_1 < 0 ? ProbeLimit14() : Probe.p14_1} onChange={(e) => setProbe({...Probe, p14_1: e.target.value})} className={Lock.t14 !== 2 ? (((Probe.p14_1 == 4 && BoP.BoP14_1) || Probe.p14_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="164" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p14_2 > 15 || Probe.p14_2 < 0 ? ProbeLimit14() : Probe.p14_2} onChange={(e) => setProbe({...Probe, p14_2: e.target.value})}  className={Lock.t14 !== 2 ? (((Probe.p14_2 == 4 && BoP.BoP14_2) || Probe.p14_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="165" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p14_3 > 15 || Probe.p14_3 < 0 ? ProbeLimit14() : Probe.p14_3} onChange={(e) => setProbe({...Probe, p14_3: e.target.value})} className={Lock.t14 !== 2 ? (((Probe.p14_3 == 4 && BoP.BoP14_3) || Probe.p14_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="166" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p13_1 > 15 || Probe.p13_1 < 0 ? ProbeLimit13() : Probe.p13_1} onChange={(e) => setProbe({...Probe, p13_1: e.target.value})} className={Lock.t13 !== 2 ? (((Probe.p13_1 == 4 && BoP.BoP13_1) || Probe.p13_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="167" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p13_2 > 15 || Probe.p13_2 < 0 ? ProbeLimit13() : Probe.p13_2} onChange={(e) => setProbe({...Probe, p13_2: e.target.value})}  className={Lock.t13 !== 2 ? (((Probe.p13_2 == 4 && BoP.BoP13_2) || Probe.p13_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="168" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p13_3 > 15 || Probe.p13_3 < 0 ? ProbeLimit13() : Probe.p13_3} onChange={(e) => setProbe({...Probe, p13_3: e.target.value})} className={Lock.t13 !== 2 ? (((Probe.p13_3 == 4 && BoP.BoP13_3) || Probe.p13_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="169" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p12_1 > 15 || Probe.p12_1 < 0 ? ProbeLimit12() : Probe.p12_1} onChange={(e) => setProbe({...Probe, p12_1: e.target.value})} className={Lock.t12 !== 2 ? (((Probe.p12_1 == 4 && BoP.BoP12_1) || Probe.p12_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="170" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p12_2 > 15 || Probe.p12_2 < 0 ? ProbeLimit12() : Probe.p12_2} onChange={(e) => setProbe({...Probe, p12_2: e.target.value})}  className={Lock.t12 !== 2 ? (((Probe.p12_2 == 4 && BoP.BoP12_2) || Probe.p12_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="171" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p12_3 > 15 || Probe.p12_3 < 0 ? ProbeLimit12() : Probe.p12_3} onChange={(e) => setProbe({...Probe, p12_3: e.target.value})} className={Lock.t12 !== 2 ? (((Probe.p12_3 == 4 && BoP.BoP12_3) || Probe.p12_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="172" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p11_1 > 15 || Probe.p11_1 < 0 ? ProbeLimit11() : Probe.p11_1} onChange={(e) => setProbe({...Probe, p11_1: e.target.value})} className={Lock.t11 !== 2 ? (((Probe.p11_1 == 4 && BoP.BoP11_1) || Probe.p11_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="173" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p11_2 > 15 || Probe.p11_2 < 0 ? ProbeLimit11() : Probe.p11_2} onChange={(e) => setProbe({...Probe, p11_2: e.target.value})}  className={Lock.t11 !== 2 ? (((Probe.p11_2 == 4 && BoP.BoP11_2) || Probe.p11_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="174" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p11_3 > 15 || Probe.p11_3 < 0 ? ProbeLimit11() : Probe.p11_3} onChange={(e) => setProbe({...Probe, p11_3: e.target.value})} className={Lock.t11 !== 2 ? (((Probe.p11_3 == 4 && BoP.BoP11_3) || Probe.p11_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
            
        </TableRow>
        <TableRow>
          <ImgCell className={classes.img_change} onClick={ Lock.t18 === 0 ? implantLocker18 : Lock.t18 === 1 ? dataLocker18 : () => setLock({ ...Lock, t18: 0})}> <img src={Lock.t18 === 0 ? process.env.PUBLIC_URL + 'Teeth/18.png': Lock.t18 === 1 ? process.env.PUBLIC_URL + 'Teeth/18i.png': process.env.PUBLIC_URL + 'Teeth/18x.png'} className={classes.tooth_img_18} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'}  className={Lock.t18 === 0 && Furc.FurcCount18 === 1 ? classes.furc_img_18: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t18 === 0 && Furc.FurcCount18 === 2 ? classes.furc_img_18: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t18 === 0 && Furc.FurcCount18 === 3 ? classes.furc_img_18: classes.disabled}/>
                      <svg className={Lock.t18 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_18" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t18 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_18" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t18 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_18" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t18 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_18_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t18 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_18" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t18 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_18_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t17 === 0 ? implantLocker17 : Lock.t17 === 1 ? dataLocker17 : () => setLock({ ...Lock, t17: 0})}><img src={Lock.t17 === 0 ? process.env.PUBLIC_URL + 'Teeth/17.png': Lock.t17 === 1 ? process.env.PUBLIC_URL + 'Teeth/17i.png': process.env.PUBLIC_URL + 'Teeth/17x.png'} className={classes.tooth_img_17} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t17 === 0 && Furc.FurcCount17 === 1 ? classes.furc_img_17: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t17 === 0 && Furc.FurcCount17 === 2 ? classes.furc_img_17: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t17 === 0 && Furc.FurcCount17 === 3 ? classes.furc_img_17: classes.disabled}/>
                      <svg className={Lock.t17 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_17" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t17 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_17" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t17 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_17" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t17 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_17_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t17 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_17" border="none" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t17 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_17_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t16 === 0 ? implantLocker16 : Lock.t16 === 1 ? dataLocker16 : () => setLock({ ...Lock, t16: 0})}><img src={Lock.t16 === 0 ? process.env.PUBLIC_URL + 'Teeth/16.png': Lock.t16 === 1 ? process.env.PUBLIC_URL + 'Teeth/16i.png': process.env.PUBLIC_URL + 'Teeth/16x.png'} className={classes.tooth_img_16} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t16 === 0 && Furc.FurcCount16 === 1 ? classes.furc_img_16: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t16 === 0 && Furc.FurcCount16 === 2 ? classes.furc_img_16: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t16 === 0 && Furc.FurcCount16 === 3 ? classes.furc_img_16: classes.disabled}/>
                      <svg className={Lock.t16 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_16" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t16 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_16" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t16 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_16" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t16 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_16_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t16 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_16" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t16 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_16_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t15 === 0 ? () => setLock({ ...Lock, t15: 1}): Lock.t15 === 1 ? dataLocker15 : () => setLock({ ...Lock, t15: 0})}><img src={Lock.t15 === 0 ? process.env.PUBLIC_URL + 'Teeth/15.png': Lock.t15 === 1 ? process.env.PUBLIC_URL + 'Teeth/15i.png': process.env.PUBLIC_URL + 'Teeth/15x.png'} className={classes.tooth_img_15} />
                      <svg className={Lock.t15 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_15" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t15 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_15" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t15 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_15" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t15 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_15_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t15 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_15" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t15 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_15_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t14 === 0 ? implantLocker14 : Lock.t14 === 1 ? dataLocker14 : () => setLock({ ...Lock, t14: 0})}><img src={Lock.t14 === 0 ? process.env.PUBLIC_URL + 'Teeth/14.png': Lock.t14 === 1 ? process.env.PUBLIC_URL + 'Teeth/14i.png': process.env.PUBLIC_URL + 'Teeth/14x.png'} className={classes.tooth_img_14} />
                      <svg className={Lock.t14 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_14" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t14 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_14" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t14 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_14" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t14 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_14_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t14 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_14" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t14 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_14_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t13 === 0 ? () => setLock({ ...Lock, t13: 1}): Lock.t13 === 1 ? dataLocker13 : () => setLock({ ...Lock, t13: 0})}><img src={Lock.t13 === 0 ? process.env.PUBLIC_URL + 'Teeth/13.png': Lock.t13 === 1 ? process.env.PUBLIC_URL + 'Teeth/13i.png': process.env.PUBLIC_URL + 'Teeth/13x.png'} className={classes.tooth_img_13} />
                      <svg className={Lock.t13 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_13" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t13 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_13" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t13 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_13" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t13 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_13_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t13 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_13" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t13 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_13_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t12 === 0 ? () => setLock({ ...Lock, t12: 1}): Lock.t12 === 1 ? dataLocker12 : () => setLock({ ...Lock, t12: 0})}><img src={Lock.t12 === 0 ? process.env.PUBLIC_URL + 'Teeth/12.png': Lock.t12 === 1 ? process.env.PUBLIC_URL + 'Teeth/12i.png': process.env.PUBLIC_URL + 'Teeth/12x.png'} className={classes.tooth_img_12} />
                      <svg className={Lock.t12 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_12" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t12 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_12" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t12 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_12" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t12 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_12_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t12 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_12" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t12 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_12_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t11 === 0 ? () => setLock({ ...Lock, t11: 1}): Lock.t11 === 1 ? dataLocker11 : () => setLock({ ...Lock, t11: 0})}><img src={Lock.t11 === 0 ? process.env.PUBLIC_URL + 'Teeth/11.png': Lock.t11 === 1 ? process.env.PUBLIC_URL + 'Teeth/11i.png': process.env.PUBLIC_URL + 'Teeth/11x.png'} className={classes.tooth_img_11} />
                      <svg className={Lock.t11 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_11" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t11 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_11" display="none"/></svg>
                      <svg className={Lock.t11 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_11" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t11 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_11_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t11 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_11" display="none"/></svg>
                      <svg className={Lock.t11 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_11_attachment" display="none"/></svg>
            <ToothLines1 />
          </ImgCell>
        </TableRow>
        <TableRow><SpaceCell></SpaceCell></TableRow>
        <TableRow>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="199" onClick={ Plague.Plague18_1 === true ? () => setPlague({ ...Plague, Plague18_1: !Plague.Plague18_1, Plague_total_18: Plague.Plague_total_18 - 1}) : () => setPlague({ ...Plague, Plague18_1: !Plague.Plague18_1, Plague_total_18: Plague.Plague_total_18 + 1})} className={Lock.t18 !== 2 ? (Plague.Plague18_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="200" onClick={ Plague.Plague18_2 === true ? () => setPlague({ ...Plague, Plague18_2: !Plague.Plague18_2, Plague_total_18: Plague.Plague_total_18 - 1}) : () => setPlague({ ...Plague, Plague18_2: !Plague.Plague18_2, Plague_total_18: Plague.Plague_total_18 + 1})} className={Lock.t18 !== 2 ? (Plague.Plague18_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="201" onClick={ Plague.Plague18_3 === true ? () => setPlague({ ...Plague, Plague18_3: !Plague.Plague18_3, Plague_total_18: Plague.Plague_total_18 - 1}) : () => setPlague({ ...Plague, Plague18_3: !Plague.Plague18_3, Plague_total_18: Plague.Plague_total_18 + 1})} className={Lock.t18 !== 2 ? (Plague.Plague18_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="202" onClick={ Plague.Plague17_1 === true ? () => setPlague({ ...Plague, Plague17_1: !Plague.Plague17_1, Plague_total_17: Plague.Plague_total_17 - 1}) : () => setPlague({ ...Plague, Plague17_1: !Plague.Plague17_1, Plague_total_17: Plague.Plague_total_17 + 1})} className={Lock.t17 !== 2 ? (Plague.Plague17_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="203" onClick={ Plague.Plague17_2 === true ? () => setPlague({ ...Plague, Plague17_2: !Plague.Plague17_2, Plague_total_17: Plague.Plague_total_17 - 1}) : () => setPlague({ ...Plague, Plague17_2: !Plague.Plague17_2, Plague_total_17: Plague.Plague_total_17 + 1})} className={Lock.t17 !== 2 ? (Plague.Plague17_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="204" onClick={ Plague.Plague17_3 === true ? () => setPlague({ ...Plague, Plague17_3: !Plague.Plague17_3, Plague_total_17: Plague.Plague_total_17 - 1}) : () => setPlague({ ...Plague, Plague17_3: !Plague.Plague17_3, Plague_total_17: Plague.Plague_total_17 + 1})} className={Lock.t17 !== 2 ? (Plague.Plague17_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="205" onClick={ Plague.Plague16_1 === true ? () => setPlague({ ...Plague, Plague16_1: !Plague.Plague16_1, Plague_total_16: Plague.Plague_total_16 - 1}) : () => setPlague({ ...Plague, Plague16_1: !Plague.Plague16_1, Plague_total_16: Plague.Plague_total_16 + 1})} className={Lock.t16 !== 2 ? (Plague.Plague16_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="206" onClick={ Plague.Plague16_2 === true ? () => setPlague({ ...Plague, Plague16_2: !Plague.Plague16_2, Plague_total_16: Plague.Plague_total_16 - 1}) : () => setPlague({ ...Plague, Plague16_2: !Plague.Plague16_2, Plague_total_16: Plague.Plague_total_16 + 1})} className={Lock.t16 !== 2 ? (Plague.Plague16_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="207" onClick={ Plague.Plague16_3 === true ? () => setPlague({ ...Plague, Plague16_3: !Plague.Plague16_3, Plague_total_16: Plague.Plague_total_16 - 1}) : () => setPlague({ ...Plague, Plague16_3: !Plague.Plague16_3, Plague_total_16: Plague.Plague_total_16 + 1})} className={Lock.t16 !== 2 ? (Plague.Plague16_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="208" onClick={ Plague.Plague15_1 === true ? () => setPlague({ ...Plague, Plague15_1: !Plague.Plague15_1, Plague_total_15: Plague.Plague_total_15 - 1}) : () => setPlague({ ...Plague, Plague15_1: !Plague.Plague15_1, Plague_total_15: Plague.Plague_total_15 + 1})} className={Lock.t15 !== 2 ? (Plague.Plague15_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="209" onClick={ Plague.Plague15_2 === true ? () => setPlague({ ...Plague, Plague15_2: !Plague.Plague15_2, Plague_total_15: Plague.Plague_total_15 - 1}) : () => setPlague({ ...Plague, Plague15_2: !Plague.Plague15_2, Plague_total_15: Plague.Plague_total_15 + 1})} className={Lock.t15 !== 2 ? (Plague.Plague15_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="210" onClick={ Plague.Plague15_3 === true ? () => setPlague({ ...Plague, Plague15_3: !Plague.Plague15_3, Plague_total_15: Plague.Plague_total_15 - 1}) : () => setPlague({ ...Plague, Plague15_3: !Plague.Plague15_3, Plague_total_15: Plague.Plague_total_15 + 1})} className={Lock.t15 !== 2 ? (Plague.Plague15_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="211" onClick={ Plague.Plague14_1 === true ? () => setPlague({ ...Plague, Plague14_1: !Plague.Plague14_1, Plague_total_14: Plague.Plague_total_14 - 1}) : () => setPlague({ ...Plague, Plague14_1: !Plague.Plague14_1, Plague_total_14: Plague.Plague_total_14 + 1})} className={Lock.t14 !== 2 ? (Plague.Plague14_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="212" onClick={ Plague.Plague14_2 === true ? () => setPlague({ ...Plague, Plague14_2: !Plague.Plague14_2, Plague_total_14: Plague.Plague_total_14 - 1}) : () => setPlague({ ...Plague, Plague14_2: !Plague.Plague14_2, Plague_total_14: Plague.Plague_total_14 + 1})} className={Lock.t14 !== 2 ? (Plague.Plague14_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="213" onClick={ Plague.Plague14_3 === true ? () => setPlague({ ...Plague, Plague14_3: !Plague.Plague14_3, Plague_total_14: Plague.Plague_total_14 - 1}) : () => setPlague({ ...Plague, Plague14_3: !Plague.Plague14_3, Plague_total_14: Plague.Plague_total_14 + 1})} className={Lock.t14 !== 2 ? (Plague.Plague14_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="214" onClick={ Plague.Plague13_1 === true ? () => setPlague({ ...Plague, Plague13_1: !Plague.Plague13_1, Plague_total_13: Plague.Plague_total_13 - 1}) : () => setPlague({ ...Plague, Plague13_1: !Plague.Plague13_1, Plague_total_13: Plague.Plague_total_13 + 1})} className={Lock.t13 !== 2 ? (Plague.Plague13_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="215" onClick={ Plague.Plague13_2 === true ? () => setPlague({ ...Plague, Plague13_2: !Plague.Plague13_2, Plague_total_13: Plague.Plague_total_13 - 1}) : () => setPlague({ ...Plague, Plague13_2: !Plague.Plague13_2, Plague_total_13: Plague.Plague_total_13 + 1})} className={Lock.t13 !== 2 ? (Plague.Plague13_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="216" onClick={ Plague.Plague13_3 === true ? () => setPlague({ ...Plague, Plague13_3: !Plague.Plague13_3, Plague_total_13: Plague.Plague_total_13 - 1}) : () => setPlague({ ...Plague, Plague13_3: !Plague.Plague13_3, Plague_total_13: Plague.Plague_total_13 + 1})} className={Lock.t13 !== 2 ? (Plague.Plague13_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="217" onClick={ Plague.Plague12_1 === true ? () => setPlague({ ...Plague, Plague12_1: !Plague.Plague12_1, Plague_total_12: Plague.Plague_total_12 - 1}) : () => setPlague({ ...Plague, Plague12_1: !Plague.Plague12_1, Plague_total_12: Plague.Plague_total_12 + 1})} className={Lock.t12 !== 2 ? (Plague.Plague12_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="218" onClick={ Plague.Plague12_2 === true ? () => setPlague({ ...Plague, Plague12_2: !Plague.Plague12_2, Plague_total_12: Plague.Plague_total_12 - 1}) : () => setPlague({ ...Plague, Plague12_2: !Plague.Plague12_2, Plague_total_12: Plague.Plague_total_12 + 1})} className={Lock.t12 !== 2 ? (Plague.Plague12_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="219" onClick={ Plague.Plague12_3 === true ? () => setPlague({ ...Plague, Plague12_3: !Plague.Plague12_3, Plague_total_12: Plague.Plague_total_12 - 1}) : () => setPlague({ ...Plague, Plague12_3: !Plague.Plague12_3, Plague_total_12: Plague.Plague_total_12 + 1})} className={Lock.t12 !== 2 ? (Plague.Plague12_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="220" onClick={ Plague.Plague11_1 === true ? () => setPlague({ ...Plague, Plague11_1: !Plague.Plague11_1, Plague_total_11: Plague.Plague_total_11 - 1}) : () => setPlague({ ...Plague, Plague11_1: !Plague.Plague11_1, Plague_total_11: Plague.Plague_total_11 + 1})} className={Lock.t11 !== 2 ? (Plague.Plague11_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="221" onClick={ Plague.Plague11_2 === true ? () => setPlague({ ...Plague, Plague11_2: !Plague.Plague11_2, Plague_total_11: Plague.Plague_total_11 - 1}) : () => setPlague({ ...Plague, Plague11_2: !Plague.Plague11_2, Plague_total_11: Plague.Plague_total_11 + 1})} className={Lock.t11 !== 2 ? (Plague.Plague11_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="222" onClick={ Plague.Plague11_3 === true ? () => setPlague({ ...Plague, Plague11_3: !Plague.Plague11_3, Plague_total_11: Plague.Plague_total_11 - 1}) : () => setPlague({ ...Plague, Plague11_3: !Plague.Plague11_3, Plague_total_11: Plague.Plague_total_11 + 1})} className={Lock.t11 !== 2 ? (Plague.Plague11_3 ? classes.small_btn_3_Plague_lst : classes.small_btn_3_lst) : classes.disable_furcation}  /></div></PlagueTableCell>
        </TableRow>
        <TableRow>
        <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="247" onClick={ Plague.Plague18_1_lg === true ? () => setPlague({ ...Plague, Plague18_1_lg: !Plague.Plague18_1_lg, Plague_total_18: Plague.Plague_total_18 - 1}) : () => setPlague({ ...Plague, Plague18_1_lg: !Plague.Plague18_1_lg, Plague_total_18: Plague.Plague_total_18 + 1})} className={Lock.t18 !== 2 ? (Plague.Plague18_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="248" onClick={ Plague.Plague18_2_lg === true ? () => setPlague({ ...Plague, Plague18_2_lg: !Plague.Plague18_2_lg, Plague_total_18: Plague.Plague_total_18 - 1}) : () => setPlague({ ...Plague, Plague18_2_lg: !Plague.Plague18_2_lg, Plague_total_18: Plague.Plague_total_18 + 1})} className={Lock.t18 !== 2 ? (Plague.Plague18_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="249" onClick={ Plague.Plague18_3_lg === true ? () => setPlague({ ...Plague, Plague18_3_lg: !Plague.Plague18_3_lg, Plague_total_18: Plague.Plague_total_18 - 1}) : () => setPlague({ ...Plague, Plague18_3_lg: !Plague.Plague18_3_lg, Plague_total_18: Plague.Plague_total_18 + 1})} className={Lock.t18 !== 2 ? (Plague.Plague18_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="250" onClick={ Plague.Plague17_1_lg === true ? () => setPlague({ ...Plague, Plague17_1_lg: !Plague.Plague17_1_lg, Plague_total_17: Plague.Plague_total_17 - 1}) : () => setPlague({ ...Plague, Plague17_1_lg: !Plague.Plague17_1_lg, Plague_total_17: Plague.Plague_total_17 + 1})} className={Lock.t17 !== 2 ? (Plague.Plague17_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="251" onClick={ Plague.Plague17_2_lg === true ? () => setPlague({ ...Plague, Plague17_2_lg: !Plague.Plague17_2_lg, Plague_total_17: Plague.Plague_total_17 - 1}) : () => setPlague({ ...Plague, Plague17_2_lg: !Plague.Plague17_2_lg, Plague_total_17: Plague.Plague_total_17 + 1})} className={Lock.t17 !== 2 ? (Plague.Plague17_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="252" onClick={ Plague.Plague17_3_lg === true ? () => setPlague({ ...Plague, Plague17_3_lg: !Plague.Plague17_3_lg, Plague_total_17: Plague.Plague_total_17 - 1}) : () => setPlague({ ...Plague, Plague17_3_lg: !Plague.Plague17_3_lg, Plague_total_17: Plague.Plague_total_17 + 1})} className={Lock.t17 !== 2 ? (Plague.Plague17_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="253" onClick={ Plague.Plague16_1_lg === true ? () => setPlague({ ...Plague, Plague16_1_lg: !Plague.Plague16_1_lg, Plague_total_16: Plague.Plague_total_16 - 1}) : () => setPlague({ ...Plague, Plague16_1_lg: !Plague.Plague16_1_lg, Plague_total_16: Plague.Plague_total_16 + 1})} className={Lock.t16 !== 2 ? (Plague.Plague16_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="254" onClick={ Plague.Plague16_2_lg === true ? () => setPlague({ ...Plague, Plague16_2_lg: !Plague.Plague16_2_lg, Plague_total_16: Plague.Plague_total_16 - 1}) : () => setPlague({ ...Plague, Plague16_2_lg: !Plague.Plague16_2_lg, Plague_total_16: Plague.Plague_total_16 + 1})} className={Lock.t16 !== 2 ? (Plague.Plague16_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="255" onClick={ Plague.Plague16_3_lg === true ? () => setPlague({ ...Plague, Plague16_3_lg: !Plague.Plague16_3_lg, Plague_total_16: Plague.Plague_total_16 - 1}) : () => setPlague({ ...Plague, Plague16_3_lg: !Plague.Plague16_3_lg, Plague_total_16: Plague.Plague_total_16 + 1})} className={Lock.t16 !== 2 ? (Plague.Plague16_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="256" onClick={ Plague.Plague15_1_lg === true ? () => setPlague({ ...Plague, Plague15_1_lg: !Plague.Plague15_1_lg, Plague_total_15: Plague.Plague_total_15 - 1}) : () => setPlague({ ...Plague, Plague15_1_lg: !Plague.Plague15_1_lg, Plague_total_15: Plague.Plague_total_15 + 1})} className={Lock.t15 !== 2 ? (Plague.Plague15_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="257" onClick={ Plague.Plague15_2_lg === true ? () => setPlague({ ...Plague, Plague15_2_lg: !Plague.Plague15_2_lg, Plague_total_15: Plague.Plague_total_15 - 1}) : () => setPlague({ ...Plague, Plague15_2_lg: !Plague.Plague15_2_lg, Plague_total_15: Plague.Plague_total_15 + 1})} className={Lock.t15 !== 2 ? (Plague.Plague15_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="258" onClick={ Plague.Plague15_3_lg === true ? () => setPlague({ ...Plague, Plague15_3_lg: !Plague.Plague15_3_lg, Plague_total_15: Plague.Plague_total_15 - 1}) : () => setPlague({ ...Plague, Plague15_3_lg: !Plague.Plague15_3_lg, Plague_total_15: Plague.Plague_total_15 + 1})} className={Lock.t15 !== 2 ? (Plague.Plague15_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="259" onClick={ Plague.Plague14_1_lg === true ? () => setPlague({ ...Plague, Plague14_1_lg: !Plague.Plague14_1_lg, Plague_total_14: Plague.Plague_total_14 - 1}) : () => setPlague({ ...Plague, Plague14_1_lg: !Plague.Plague14_1_lg, Plague_total_14: Plague.Plague_total_14 + 1})} className={Lock.t14 !== 2 ? (Plague.Plague14_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="260" onClick={ Plague.Plague14_2_lg === true ? () => setPlague({ ...Plague, Plague14_2_lg: !Plague.Plague14_2_lg, Plague_total_14: Plague.Plague_total_14 - 1}) : () => setPlague({ ...Plague, Plague14_2_lg: !Plague.Plague14_2_lg, Plague_total_14: Plague.Plague_total_14 + 1})} className={Lock.t14 !== 2 ? (Plague.Plague14_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="261" onClick={ Plague.Plague14_3_lg === true ? () => setPlague({ ...Plague, Plague14_3_lg: !Plague.Plague14_3_lg, Plague_total_14: Plague.Plague_total_14 - 1}) : () => setPlague({ ...Plague, Plague14_3_lg: !Plague.Plague14_3_lg, Plague_total_14: Plague.Plague_total_14 + 1})} className={Lock.t14 !== 2 ? (Plague.Plague14_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="262" onClick={ Plague.Plague13_1_lg === true ? () => setPlague({ ...Plague, Plague13_1_lg: !Plague.Plague13_1_lg, Plague_total_13: Plague.Plague_total_13 - 1}) : () => setPlague({ ...Plague, Plague13_1_lg: !Plague.Plague13_1_lg, Plague_total_13: Plague.Plague_total_13 + 1})} className={Lock.t13 !== 2 ? (Plague.Plague13_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="263" onClick={ Plague.Plague13_2_lg === true ? () => setPlague({ ...Plague, Plague13_2_lg: !Plague.Plague13_2_lg, Plague_total_13: Plague.Plague_total_13 - 1}) : () => setPlague({ ...Plague, Plague13_2_lg: !Plague.Plague13_2_lg, Plague_total_13: Plague.Plague_total_13 + 1})} className={Lock.t13 !== 2 ? (Plague.Plague13_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="264" onClick={ Plague.Plague13_3_lg === true ? () => setPlague({ ...Plague, Plague13_3_lg: !Plague.Plague13_3_lg, Plague_total_13: Plague.Plague_total_13 - 1}) : () => setPlague({ ...Plague, Plague13_3_lg: !Plague.Plague13_3_lg, Plague_total_13: Plague.Plague_total_13 + 1})} className={Lock.t13 !== 2 ? (Plague.Plague13_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="265" onClick={ Plague.Plague12_1_lg === true ? () => setPlague({ ...Plague, Plague12_1_lg: !Plague.Plague12_1_lg, Plague_total_12: Plague.Plague_total_12 - 1}) : () => setPlague({ ...Plague, Plague12_1_lg: !Plague.Plague12_1_lg, Plague_total_12: Plague.Plague_total_12 + 1})} className={Lock.t12 !== 2 ? (Plague.Plague12_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="266" onClick={ Plague.Plague12_2_lg === true ? () => setPlague({ ...Plague, Plague12_2_lg: !Plague.Plague12_2_lg, Plague_total_12: Plague.Plague_total_12 - 1}) : () => setPlague({ ...Plague, Plague12_2_lg: !Plague.Plague12_2_lg, Plague_total_12: Plague.Plague_total_12 + 1})} className={Lock.t12 !== 2 ? (Plague.Plague12_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="267" onClick={ Plague.Plague12_3_lg === true ? () => setPlague({ ...Plague, Plague12_3_lg: !Plague.Plague12_3_lg, Plague_total_12: Plague.Plague_total_12 - 1}) : () => setPlague({ ...Plague, Plague12_3_lg: !Plague.Plague12_3_lg, Plague_total_12: Plague.Plague_total_12 + 1})} className={Lock.t12 !== 2 ? (Plague.Plague12_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="268" onClick={ Plague.Plague11_1_lg === true ? () => setPlague({ ...Plague, Plague11_1_lg: !Plague.Plague11_1_lg, Plague_total_11: Plague.Plague_total_11 - 1}) : () => setPlague({ ...Plague, Plague11_1_lg: !Plague.Plague11_1_lg, Plague_total_11: Plague.Plague_total_11 + 1})} className={Lock.t11 !== 2 ? (Plague.Plague11_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="269" onClick={ Plague.Plague11_2_lg === true ? () => setPlague({ ...Plague, Plague11_2_lg: !Plague.Plague11_2_lg, Plague_total_11: Plague.Plague_total_11 - 1}) : () => setPlague({ ...Plague, Plague11_2_lg: !Plague.Plague11_2_lg, Plague_total_11: Plague.Plague_total_11 + 1})} className={Lock.t11 !== 2 ? (Plague.Plague11_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="270" onClick={ Plague.Plague11_3_lg === true ? () => setPlague({ ...Plague, Plague11_3_lg: !Plague.Plague11_3_lg, Plague_total_11: Plague.Plague_total_11 - 1}) : () => setPlague({ ...Plague, Plague11_3_lg: !Plague.Plague11_3_lg, Plague_total_11: Plague.Plague_total_11 + 1})} className={Lock.t11 !== 2 ? (Plague.Plague11_3_lg ? classes.small_btn_3_Plague_lst : classes.small_btn_3_lst) : classes.disable_furcation}  /></div></PlagueTableCell>
        </TableRow>
        <TableRow className={classes.lower}>
        <ImgCell className={classes.img_change} onClick={ Lock.t18 === 0 ? implantLocker18 : Lock.t18 === 1 ? dataLocker18 : () => setLock({ ...Lock, t18: 0})}>
          <img src={Lock.t18 === 0 ? process.env.PUBLIC_URL + 'Teeth/18b.png': Lock.t18 === 1 ? process.env.PUBLIC_URL + 'Teeth/18bi.png': process.env.PUBLIC_URL + 'Teeth/18bx.png'} className={classes.tooth_img_18b} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t18 === 0 && Furc.FurcCount18b === 1 ? classes.furc_img_18_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t18 === 0 && Furc.FurcCount18b === 2 ? classes.furc_img_18_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t18 === 0 && Furc.FurcCount18b === 3 ? classes.furc_img_18_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t18 === 0 && Furc.FurcCount18br === 1 ? classes.furc_img_18_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t18 === 0 && Furc.FurcCount18br === 2 ? classes.furc_img_18_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t18 === 0 && Furc.FurcCount18br === 3 ? classes.furc_img_18_r: classes.disabled}/>
                      <svg className={Lock.t18 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_18_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t18 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_18_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t18 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_18_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t18 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_18_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t18 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_18_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t18 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_18_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t17 === 0 ? implantLocker17 : Lock.t17 === 1 ? dataLocker17 : () => setLock({ ...Lock, t17: 0})}><img src={Lock.t17 === 0 ? process.env.PUBLIC_URL + 'Teeth/17b.png': Lock.t17 === 1 ? process.env.PUBLIC_URL + 'Teeth/17bi.png': process.env.PUBLIC_URL + 'Teeth/17bx.png'} className={classes.tooth_img_17b} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t17 === 0 && Furc.FurcCount17b === 1 ? classes.furc_img_17_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t17 === 0 && Furc.FurcCount17b === 2 ? classes.furc_img_17_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t17 === 0 && Furc.FurcCount17b === 3 ? classes.furc_img_17_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t17 === 0 && Furc.FurcCount17br === 1 ? classes.furc_img_17_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t17 === 0 && Furc.FurcCount17br === 2 ? classes.furc_img_17_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t17 === 0 && Furc.FurcCount17br === 3 ? classes.furc_img_17_r: classes.disabled}/>
                      <svg className={Lock.t17 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_17_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t17 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_17_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t17 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_17_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t17 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_17_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t17 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_17_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t17 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_17_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t16 === 0 ? implantLocker16 : Lock.t16 === 1 ? dataLocker16 : () => setLock({ ...Lock, t16: 0})}><img src={Lock.t16 === 0 ? process.env.PUBLIC_URL + 'Teeth/16b.png': Lock.t16 === 1 ? process.env.PUBLIC_URL + 'Teeth/16bi.png': process.env.PUBLIC_URL + 'Teeth/16bx.png'} className={classes.tooth_img_16b} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t16 === 0 && Furc.FurcCount16b === 1 ? classes.furc_img_16_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t16 === 0 && Furc.FurcCount16b === 2 ? classes.furc_img_16_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t16 === 0 && Furc.FurcCount16b === 3 ? classes.furc_img_16_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t16 === 0 && Furc.FurcCount16br === 1 ? classes.furc_img_16_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t16 === 0 && Furc.FurcCount16br === 2 ? classes.furc_img_16_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t16 === 0 && Furc.FurcCount16br === 3 ? classes.furc_img_16_r: classes.disabled}/>
                      <svg className={Lock.t16 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_16_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t16 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_16_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t16 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_16_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t16 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_16_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t16 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_16_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t16 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_16_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t15 === 0 ? () => setLock({ ...Lock, t15: 1}): Lock.t15 === 1 ? dataLocker15 : () => setLock({ ...Lock, t15: 0})}><img src={Lock.t15 === 0 ? process.env.PUBLIC_URL + 'Teeth/15b.png': Lock.t15 === 1 ? process.env.PUBLIC_URL + 'Teeth/15bi.png': process.env.PUBLIC_URL + 'Teeth/15bx.png'} className={classes.tooth_img_15b} />
                      <svg className={Lock.t15 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_15_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t15 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_15_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t15 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_15_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t15 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_15_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t15 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_15_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t15 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_15_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
          <ToothLines2 /></ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t14 === 0 ? implantLocker14 : Lock.t14 === 1 ? dataLocker14 : () => setLock({ ...Lock, t14: 0})}><img src={Lock.t14 === 0 ? process.env.PUBLIC_URL + 'Teeth/14b.png': Lock.t14 === 1 ? process.env.PUBLIC_URL + 'Teeth/14bi.png': process.env.PUBLIC_URL + 'Teeth/14bx.png'} className={classes.tooth_img_14b} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t14 === 0 && Furc.FurcCount14b === 1 ? classes.furc_img_14_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t14 === 0 && Furc.FurcCount14b === 2 ? classes.furc_img_14_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t14 === 0 && Furc.FurcCount14b === 3 ? classes.furc_img_14_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t14 === 0 && Furc.FurcCount14br === 1 ? classes.furc_img_14_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t14 === 0 && Furc.FurcCount14br === 2 ? classes.furc_img_14_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t14 === 0 && Furc.FurcCount14br === 3 ? classes.furc_img_14_r: classes.disabled}/>
                      <svg className={Lock.t14 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_14_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t14 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_14_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t14 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_14_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t14 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_14_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t14 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_14_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t14 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_14_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t13 === 0 ? () => setLock({ ...Lock, t13: 1}): Lock.t13 === 1 ? dataLocker13 : () => setLock({ ...Lock, t13: 0})}><img src={Lock.t13 === 0 ? process.env.PUBLIC_URL + 'Teeth/13b.png': Lock.t13 === 1 ? process.env.PUBLIC_URL + 'Teeth/13bi.png': process.env.PUBLIC_URL + 'Teeth/13bx.png'} className={classes.tooth_img_13b} />
                      <svg className={Lock.t13 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_13_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t13 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_13_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t13 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_13_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t13 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_13_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t13 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_13_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t13 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_13_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
          <ToothLines2 /></ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t12 === 0 ? () => setLock({ ...Lock, t12: 1}): Lock.t12 === 1 ? dataLocker12 : () => setLock({ ...Lock, t12: 0})}><img src={Lock.t12 === 0 ? process.env.PUBLIC_URL + 'Teeth/12b.png': Lock.t12 === 1 ? process.env.PUBLIC_URL + 'Teeth/12bi.png': process.env.PUBLIC_URL + 'Teeth/12bx.png'} className={classes.tooth_img_12b} />
                      <svg className={Lock.t12 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_12_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t12 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_12_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t12 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_12_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t12 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_12_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t12 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_12_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t12 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_12_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
          <ToothLines2 /></ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t11 === 0 ? () => setLock({ ...Lock, t11: 1}): Lock.t11 === 1 ? dataLocker11 : () => setLock({ ...Lock, t11: 0})}><img src={Lock.t11 === 0 ? process.env.PUBLIC_URL + 'Teeth/11b.png': Lock.t11 === 1 ? process.env.PUBLIC_URL + 'Teeth/11bi.png': process.env.PUBLIC_URL + 'Teeth/11bx.png'} className={classes.tooth_img_11b} />
                      <svg className={Lock.t11 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_11_lg" display="none"/></svg>
                      <svg className={Lock.t11 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_11_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t11 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_11_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t11 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_11_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t11 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_11_lg" display="none"/></svg>
                      <svg className={Lock.t11 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_11_attachment_lg" display="none"/></svg>
          <ToothLines2 /></ImgCell>
          
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="295" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t18_1_lg > 15 || GM.t18_1_lg < (-10) ? gmLimit18() : GM.t18_1_lg} onChange={(e) => setGM({...GM, t18_1_lg: e.target.value})} className={Lock.t18 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="296" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t18_2_lg > 15 || GM.t18_2_lg < (-10) ? gmLimit18() : GM.t18_2_lg} onChange={(e) => setGM({...GM, t18_2_lg: e.target.value})}  className={Lock.t18 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="297" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t18_3_lg > 15 || GM.t18_3_lg < (-10) ? gmLimit18() : GM.t18_3_lg} onChange={(e) => setGM({...GM, t18_3_lg: e.target.value})} className={Lock.t18 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="298" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t17_1_lg > 15 || GM.t17_1_lg < (-10) ? gmLimit17() : GM.t17_1_lg} onChange={(e) => setGM({...GM, t17_1_lg: e.target.value})} className={Lock.t17 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="299" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t17_2_lg > 15 || GM.t17_2_lg < (-10) ? gmLimit17() : GM.t17_2_lg} onChange={(e) => setGM({...GM, t17_2_lg: e.target.value})}  className={Lock.t17 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="300" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t17_3_lg > 15 || GM.t17_3_lg < (-10) ? gmLimit17() : GM.t17_3_lg} onChange={(e) => setGM({...GM, t17_3_lg: e.target.value})} className={Lock.t17 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="301" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t16_1_lg > 15 || GM.t16_1_lg < (-10) ? gmLimit16() : GM.t16_1_lg} onChange={(e) => setGM({...GM, t16_1_lg: e.target.value})} className={Lock.t16 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="302" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t16_2_lg > 15 || GM.t16_2_lg < (-10) ? gmLimit16() : GM.t16_2_lg} onChange={(e) => setGM({...GM, t16_2_lg: e.target.value})}  className={Lock.t16 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="303" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t16_3_lg > 15 || GM.t16_3_lg < (-10) ? gmLimit16() : GM.t16_3_lg} onChange={(e) => setGM({...GM, t16_3_lg: e.target.value})} className={Lock.t16 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="304" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t15_1_lg > 15 || GM.t15_1_lg < (-10) ? gmLimit15() : GM.t15_1_lg} onChange={(e) => setGM({...GM, t15_1_lg: e.target.value})} className={Lock.t15 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="305" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t15_2_lg > 15 || GM.t15_2_lg < (-10) ? gmLimit15() : GM.t15_2_lg} onChange={(e) => setGM({...GM, t15_2_lg: e.target.value})}  className={Lock.t15 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="306" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t15_3_lg > 15 || GM.t15_3_lg < (-10) ? gmLimit15() : GM.t15_3_lg} onChange={(e) => setGM({...GM, t15_3_lg: e.target.value})} className={Lock.t15 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="307" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t14_1_lg > 15 || GM.t14_1_lg < (-10) ? gmLimit14() : GM.t14_1_lg} onChange={(e) => setGM({...GM, t14_1_lg: e.target.value})} className={Lock.t14 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="308" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t14_2_lg > 15 || GM.t14_2_lg < (-10) ? gmLimit14() : GM.t14_2_lg} onChange={(e) => setGM({...GM, t14_2_lg: e.target.value})}  className={Lock.t14 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="309" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t14_3_lg > 15 || GM.t14_3_lg < (-10) ? gmLimit14() : GM.t14_3_lg} onChange={(e) => setGM({...GM, t14_3_lg: e.target.value})} className={Lock.t14 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="310" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t13_1_lg > 15 || GM.t13_1_lg < (-10) ? gmLimit13() : GM.t13_1_lg} onChange={(e) => setGM({...GM, t13_1_lg: e.target.value})} className={Lock.t13 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="311" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t13_2_lg > 15 || GM.t13_2_lg < (-10) ? gmLimit13() : GM.t13_2_lg} onChange={(e) => setGM({...GM, t13_2_lg: e.target.value})}  className={Lock.t13 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="312" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t13_3_lg > 15 || GM.t13_3_lg < (-10) ? gmLimit13() : GM.t13_3_lg} onChange={(e) => setGM({...GM, t13_3_lg: e.target.value})} className={Lock.t13 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="313" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t12_1_lg > 15 || GM.t12_1_lg < (-10) ? gmLimit12() : GM.t12_1_lg} onChange={(e) => setGM({...GM, t12_1_lg: e.target.value})} className={Lock.t12 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="314" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t12_2_lg > 15 || GM.t12_2_lg < (-10) ? gmLimit12() : GM.t12_2_lg} onChange={(e) => setGM({...GM, t12_2_lg: e.target.value})}  className={Lock.t12 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="315" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t12_3_lg > 15 || GM.t12_3_lg < (-10) ? gmLimit12() : GM.t12_3_lg} onChange={(e) => setGM({...GM, t12_3_lg: e.target.value})} className={Lock.t12 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="316" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t11_1_lg > 15 || GM.t11_1_lg < (-10) ? gmLimit11() : GM.t11_1_lg} onChange={(e) => setGM({...GM, t11_1_lg: e.target.value})} className={Lock.t11 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="317" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t11_2_lg > 15 || GM.t11_2_lg < (-10) ? gmLimit11() : GM.t11_2_lg} onChange={(e) => setGM({...GM, t11_2_lg: e.target.value})}  className={Lock.t11 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="318" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t11_3_lg > 15 || GM.t11_3_lg < (-10) ? gmLimit11() : GM.t11_3_lg} onChange={(e) => setGM({...GM, t11_3_lg: e.target.value})} className={Lock.t11 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
            
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="343" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p18_1_lg > 15 || Probe.p18_1_lg < 0 ? ProbeLimit18() : Probe.p18_1_lg} onChange={(e) => setProbe({...Probe, p18_1_lg: e.target.value})} className={Lock.t18 !== 2 ? (((Probe.p18_1_lg == 4 && BoP.BoP18_1_lg) || Probe.p18_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="344" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p18_2_lg > 15 || Probe.p18_2_lg < 0 ? ProbeLimit18() : Probe.p18_2_lg} onChange={(e) => setProbe({...Probe, p18_2_lg: e.target.value})}  className={Lock.t18 !== 2 ? (((Probe.p18_2_lg == 4 && BoP.BoP18_2_lg) || Probe.p18_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="345" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p18_3_lg > 15 || Probe.p18_3_lg < 0 ? ProbeLimit18() : Probe.p18_3_lg} onChange={(e) => setProbe({...Probe, p18_3_lg: e.target.value})} className={Lock.t18 !== 2 ? (((Probe.p18_3_lg == 4 && BoP.BoP18_3_lg) || Probe.p18_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="346" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p17_1_lg > 15 || Probe.p17_1_lg < 0 ? ProbeLimit17() : Probe.p17_1_lg} onChange={(e) => setProbe({...Probe, p17_1_lg: e.target.value})} className={Lock.t17 !== 2 ? (((Probe.p17_1_lg == 4 && BoP.BoP17_1_lg) || Probe.p17_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="347" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p17_2_lg > 15 || Probe.p17_2_lg < 0 ? ProbeLimit17() : Probe.p17_2_lg} onChange={(e) => setProbe({...Probe, p17_2_lg: e.target.value})}  className={Lock.t17 !== 2 ? (((Probe.p17_2_lg == 4 && BoP.BoP17_2_lg) || Probe.p17_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="348" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p17_3_lg > 15 || Probe.p17_3_lg < 0 ? ProbeLimit17() : Probe.p17_3_lg} onChange={(e) => setProbe({...Probe, p17_3_lg: e.target.value})} className={Lock.t17 !== 2 ? (((Probe.p17_3_lg == 4 && BoP.BoP17_3_lg) || Probe.p17_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="349" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p16_1_lg > 15 || Probe.p16_1_lg < 0 ? ProbeLimit16() : Probe.p16_1_lg} onChange={(e) => setProbe({...Probe, p16_1_lg: e.target.value})} className={Lock.t16 !== 2 ? (((Probe.p16_1_lg == 4 && BoP.BoP16_1_lg) || Probe.p16_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="350" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p16_2_lg > 15 || Probe.p16_2_lg < 0 ? ProbeLimit16() : Probe.p16_2_lg} onChange={(e) => setProbe({...Probe, p16_2_lg: e.target.value})}  className={Lock.t16 !== 2 ? (((Probe.p16_2_lg == 4 && BoP.BoP16_2_lg) || Probe.p16_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="351" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p16_3_lg > 15 || Probe.p16_3_lg < 0 ? ProbeLimit16() : Probe.p16_3_lg} onChange={(e) => setProbe({...Probe, p16_3_lg: e.target.value})} className={Lock.t16 !== 2 ? (((Probe.p16_3_lg == 4 && BoP.BoP16_3_lg) || Probe.p16_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="352" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p15_1_lg > 15 || Probe.p15_1_lg < 0 ? ProbeLimit15() : Probe.p15_1_lg} onChange={(e) => setProbe({...Probe, p15_1_lg: e.target.value})} className={Lock.t15 !== 2 ? (((Probe.p15_1_lg == 4 && BoP.BoP15_1_lg) || Probe.p15_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="353" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p15_2_lg > 15 || Probe.p15_2_lg < 0 ? ProbeLimit15() : Probe.p15_2_lg} onChange={(e) => setProbe({...Probe, p15_2_lg: e.target.value})}  className={Lock.t15 !== 2 ? (((Probe.p15_2_lg == 4 && BoP.BoP15_2_lg) || Probe.p15_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="354" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p15_3_lg > 15 || Probe.p15_3_lg < 0 ? ProbeLimit15() : Probe.p15_3_lg} onChange={(e) => setProbe({...Probe, p15_3_lg: e.target.value})} className={Lock.t15 !== 2 ? (((Probe.p15_3_lg == 4 && BoP.BoP15_3_lg) || Probe.p15_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="355" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p14_1_lg > 15 || Probe.p14_1_lg < 0 ? ProbeLimit14() : Probe.p14_1_lg} onChange={(e) => setProbe({...Probe, p14_1_lg: e.target.value})} className={Lock.t14 !== 2 ? (((Probe.p14_1_lg == 4 && BoP.BoP14_1_lg) || Probe.p14_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="356" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p14_2_lg > 15 || Probe.p14_2_lg < 0 ? ProbeLimit14() : Probe.p14_2_lg} onChange={(e) => setProbe({...Probe, p14_2_lg: e.target.value})}  className={Lock.t14 !== 2 ? (((Probe.p14_2_lg == 4 && BoP.BoP14_2_lg) || Probe.p14_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="357" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p14_3_lg > 15 || Probe.p14_3_lg < 0 ? ProbeLimit14() : Probe.p14_3_lg} onChange={(e) => setProbe({...Probe, p14_3_lg: e.target.value})} className={Lock.t14 !== 2 ? (((Probe.p14_3_lg == 4 && BoP.BoP14_3_lg) || Probe.p14_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="358" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p13_1_lg > 15 || Probe.p13_1_lg < 0 ? ProbeLimit13() : Probe.p13_1_lg} onChange={(e) => setProbe({...Probe, p13_1_lg: e.target.value})} className={Lock.t13 !== 2 ? (((Probe.p13_1_lg == 4 && BoP.BoP13_1_lg) || Probe.p13_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="359" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p13_2_lg > 15 || Probe.p13_2_lg < 0 ? ProbeLimit13() : Probe.p13_2_lg} onChange={(e) => setProbe({...Probe, p13_2_lg: e.target.value})}  className={Lock.t13 !== 2 ? (((Probe.p13_2_lg == 4 && BoP.BoP13_2_lg) || Probe.p13_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="360" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p13_3_lg > 15 || Probe.p13_3_lg < 0 ? ProbeLimit13() : Probe.p13_3_lg} onChange={(e) => setProbe({...Probe, p13_3_lg: e.target.value})} className={Lock.t13 !== 2 ? (((Probe.p13_3_lg == 4 && BoP.BoP13_3_lg) || Probe.p13_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="361" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p12_1_lg > 15 || Probe.p12_1_lg < 0 ? ProbeLimit12() : Probe.p12_1_lg} onChange={(e) => setProbe({...Probe, p12_1_lg: e.target.value})} className={Lock.t12 !== 2 ? (((Probe.p12_1_lg == 4 && BoP.BoP12_1_lg) || Probe.p12_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="362" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p12_2_lg > 15 || Probe.p12_2_lg < 0 ? ProbeLimit12() : Probe.p12_2_lg} onChange={(e) => setProbe({...Probe, p12_2_lg: e.target.value})}  className={Lock.t12 !== 2 ? (((Probe.p12_2_lg == 4 && BoP.BoP12_2_lg) || Probe.p12_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="363" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p12_3_lg > 15 || Probe.p12_3_lg < 0 ? ProbeLimit12() : Probe.p12_3_lg} onChange={(e) => setProbe({...Probe, p12_3_lg: e.target.value})} className={Lock.t12 !== 2 ? (((Probe.p12_3_lg == 4 && BoP.BoP12_3_lg) || Probe.p12_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="364" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p11_1_lg > 15 || Probe.p11_1_lg < 0 ? ProbeLimit11() : Probe.p11_1_lg} onChange={(e) => setProbe({...Probe, p11_1_lg: e.target.value})} className={Lock.t11 !== 2 ? (((Probe.p11_1_lg == 4 && BoP.BoP11_1_lg) || Probe.p11_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="365" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p11_2_lg > 15 || Probe.p11_2_lg < 0 ? ProbeLimit11() : Probe.p11_2_lg} onChange={(e) => setProbe({...Probe, p11_2_lg: e.target.value})}  className={Lock.t11 !== 2 ? (((Probe.p11_2_lg == 4 && BoP.BoP11_2_lg) || Probe.p11_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="366" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p11_3_lg > 15 || Probe.p11_3_lg < 0 ? ProbeLimit11() : Probe.p11_3_lg} onChange={(e) => setProbe({...Probe, p11_3_lg: e.target.value})} className={Lock.t11 !== 2 ? (((Probe.p11_3_lg == 4 && BoP.BoP11_3_lg) || Probe.p11_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
            
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="391" onClick={ BoP.BoP18_1_lg === true ? () => setBoP({ ...BoP, BoP18_1_lg: !BoP.BoP18_1_lg, BoP_total_18: BoP.BoP_total_18 - 1}) : () => setBoP({ ...BoP, BoP18_1_lg: !BoP.BoP18_1_lg, BoP_total_18: BoP.BoP_total_18 + 1})} className={Lock.t18 !== 2 ? (BoP.BoP18_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="392" onClick={ BoP.BoP18_2_lg === true ? () => setBoP({ ...BoP, BoP18_2_lg: !BoP.BoP18_2_lg, BoP_total_18: BoP.BoP_total_18 - 1}) : () => setBoP({ ...BoP, BoP18_2_lg: !BoP.BoP18_2_lg, BoP_total_18: BoP.BoP_total_18 + 1})} className={Lock.t18 !== 2 ? (BoP.BoP18_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="393" onClick={ BoP.BoP18_3_lg === true ? () => setBoP({ ...BoP, BoP18_3_lg: !BoP.BoP18_3_lg, BoP_total_18: BoP.BoP_total_18 - 1}) : () => setBoP({ ...BoP, BoP18_3_lg: !BoP.BoP18_3_lg, BoP_total_18: BoP.BoP_total_18 + 1})} className={Lock.t18 !== 2 ? (BoP.BoP18_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="394" onClick={ BoP.BoP17_1_lg === true ? () => setBoP({ ...BoP, BoP17_1_lg: !BoP.BoP17_1_lg, BoP_total_17: BoP.BoP_total_17 - 1}) : () => setBoP({ ...BoP, BoP17_1_lg: !BoP.BoP17_1_lg, BoP_total_17: BoP.BoP_total_17 + 1})} className={Lock.t17 !== 2 ? (BoP.BoP17_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="395" onClick={ BoP.BoP17_2_lg === true ? () => setBoP({ ...BoP, BoP17_2_lg: !BoP.BoP17_2_lg, BoP_total_17: BoP.BoP_total_17 - 1}) : () => setBoP({ ...BoP, BoP17_2_lg: !BoP.BoP17_2_lg, BoP_total_17: BoP.BoP_total_17 + 1})} className={Lock.t17 !== 2 ? (BoP.BoP17_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="396" onClick={ BoP.BoP17_3_lg === true ? () => setBoP({ ...BoP, BoP17_3_lg: !BoP.BoP17_3_lg, BoP_total_17: BoP.BoP_total_17 - 1}) : () => setBoP({ ...BoP, BoP17_3_lg: !BoP.BoP17_3_lg, BoP_total_17: BoP.BoP_total_17 + 1})} className={Lock.t17 !== 2 ? (BoP.BoP17_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="397" onClick={ BoP.BoP16_1_lg === true ? () => setBoP({ ...BoP, BoP16_1_lg: !BoP.BoP16_1_lg, BoP_total_16: BoP.BoP_total_16 - 1}) : () => setBoP({ ...BoP, BoP16_1_lg: !BoP.BoP16_1_lg, BoP_total_16: BoP.BoP_total_16 + 1})} className={Lock.t16 !== 2 ? (BoP.BoP16_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="398" onClick={ BoP.BoP16_2_lg === true ? () => setBoP({ ...BoP, BoP16_2_lg: !BoP.BoP16_2_lg, BoP_total_16: BoP.BoP_total_16 - 1}) : () => setBoP({ ...BoP, BoP16_2_lg: !BoP.BoP16_2_lg, BoP_total_16: BoP.BoP_total_16 + 1})} className={Lock.t16 !== 2 ? (BoP.BoP16_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="399" onClick={ BoP.BoP16_3_lg === true ? () => setBoP({ ...BoP, BoP16_3_lg: !BoP.BoP16_3_lg, BoP_total_16: BoP.BoP_total_16 - 1}) : () => setBoP({ ...BoP, BoP16_3_lg: !BoP.BoP16_3_lg, BoP_total_16: BoP.BoP_total_16 + 1})} className={Lock.t16 !== 2 ? (BoP.BoP16_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="400" onClick={ BoP.BoP15_1_lg === true ? () => setBoP({ ...BoP, BoP15_1_lg: !BoP.BoP15_1_lg, BoP_total_15: BoP.BoP_total_15 - 1}) : () => setBoP({ ...BoP, BoP15_1_lg: !BoP.BoP15_1_lg, BoP_total_15: BoP.BoP_total_15 + 1})} className={Lock.t15 !== 2 ? (BoP.BoP15_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="401" onClick={ BoP.BoP15_2_lg === true ? () => setBoP({ ...BoP, BoP15_2_lg: !BoP.BoP15_2_lg, BoP_total_15: BoP.BoP_total_15 - 1}) : () => setBoP({ ...BoP, BoP15_2_lg: !BoP.BoP15_2_lg, BoP_total_15: BoP.BoP_total_15 + 1})} className={Lock.t15 !== 2 ? (BoP.BoP15_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="402" onClick={ BoP.BoP15_3_lg === true ? () => setBoP({ ...BoP, BoP15_3_lg: !BoP.BoP15_3_lg, BoP_total_15: BoP.BoP_total_15 - 1}) : () => setBoP({ ...BoP, BoP15_3_lg: !BoP.BoP15_3_lg, BoP_total_15: BoP.BoP_total_15 + 1})} className={Lock.t15 !== 2 ? (BoP.BoP15_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="403" onClick={ BoP.BoP14_1_lg === true ? () => setBoP({ ...BoP, BoP14_1_lg: !BoP.BoP14_1_lg, BoP_total_14: BoP.BoP_total_14 - 1}) : () => setBoP({ ...BoP, BoP14_1_lg: !BoP.BoP14_1_lg, BoP_total_14: BoP.BoP_total_14 + 1})} className={Lock.t14 !== 2 ? (BoP.BoP14_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="404" onClick={ BoP.BoP14_2_lg === true ? () => setBoP({ ...BoP, BoP14_2_lg: !BoP.BoP14_2_lg, BoP_total_14: BoP.BoP_total_14 - 1}) : () => setBoP({ ...BoP, BoP14_2_lg: !BoP.BoP14_2_lg, BoP_total_14: BoP.BoP_total_14 + 1})} className={Lock.t14 !== 2 ? (BoP.BoP14_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="405" onClick={ BoP.BoP14_3_lg === true ? () => setBoP({ ...BoP, BoP14_3_lg: !BoP.BoP14_3_lg, BoP_total_14: BoP.BoP_total_14 - 1}) : () => setBoP({ ...BoP, BoP14_3_lg: !BoP.BoP14_3_lg, BoP_total_14: BoP.BoP_total_14 + 1})} className={Lock.t14 !== 2 ? (BoP.BoP14_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="406" onClick={ BoP.BoP13_1_lg === true ? () => setBoP({ ...BoP, BoP13_1_lg: !BoP.BoP13_1_lg, BoP_total_13: BoP.BoP_total_13 - 1}) : () => setBoP({ ...BoP, BoP13_1_lg: !BoP.BoP13_1_lg, BoP_total_13: BoP.BoP_total_13 + 1})} className={Lock.t13 !== 2 ? (BoP.BoP13_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="407" onClick={ BoP.BoP13_2_lg === true ? () => setBoP({ ...BoP, BoP13_2_lg: !BoP.BoP13_2_lg, BoP_total_13: BoP.BoP_total_13 - 1}) : () => setBoP({ ...BoP, BoP13_2_lg: !BoP.BoP13_2_lg, BoP_total_13: BoP.BoP_total_13 + 1})} className={Lock.t13 !== 2 ? (BoP.BoP13_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="408" onClick={ BoP.BoP13_3_lg === true ? () => setBoP({ ...BoP, BoP13_3_lg: !BoP.BoP13_3_lg, BoP_total_13: BoP.BoP_total_13 - 1}) : () => setBoP({ ...BoP, BoP13_3_lg: !BoP.BoP13_3_lg, BoP_total_13: BoP.BoP_total_13 + 1})} className={Lock.t13 !== 2 ? (BoP.BoP13_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="409" onClick={ BoP.BoP12_1_lg === true ? () => setBoP({ ...BoP, BoP12_1_lg: !BoP.BoP12_1_lg, BoP_total_12: BoP.BoP_total_12 - 1}) : () => setBoP({ ...BoP, BoP12_1_lg: !BoP.BoP12_1_lg, BoP_total_12: BoP.BoP_total_12 + 1})} className={Lock.t12 !== 2 ? (BoP.BoP12_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="410" onClick={ BoP.BoP12_2_lg === true ? () => setBoP({ ...BoP, BoP12_2_lg: !BoP.BoP12_2_lg, BoP_total_12: BoP.BoP_total_12 - 1}) : () => setBoP({ ...BoP, BoP12_2_lg: !BoP.BoP12_2_lg, BoP_total_12: BoP.BoP_total_12 + 1})} className={Lock.t12 !== 2 ? (BoP.BoP12_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="411" onClick={ BoP.BoP12_3_lg === true ? () => setBoP({ ...BoP, BoP12_3_lg: !BoP.BoP12_3_lg, BoP_total_12: BoP.BoP_total_12 - 1}) : () => setBoP({ ...BoP, BoP12_3_lg: !BoP.BoP12_3_lg, BoP_total_12: BoP.BoP_total_12 + 1})} className={Lock.t12 !== 2 ? (BoP.BoP12_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="412" onClick={ BoP.BoP11_1_lg === true ? () => setBoP({ ...BoP, BoP11_1_lg: !BoP.BoP11_1_lg, BoP_total_11: BoP.BoP_total_11 - 1}) : () => setBoP({ ...BoP, BoP11_1_lg: !BoP.BoP11_1_lg, BoP_total_11: BoP.BoP_total_11 + 1})} className={Lock.t11 !== 2 ? (BoP.BoP11_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="413" onClick={ BoP.BoP11_2_lg === true ? () => setBoP({ ...BoP, BoP11_2_lg: !BoP.BoP11_2_lg, BoP_total_11: BoP.BoP_total_11 - 1}) : () => setBoP({ ...BoP, BoP11_2_lg: !BoP.BoP11_2_lg, BoP_total_11: BoP.BoP_total_11 + 1})} className={Lock.t11 !== 2 ? (BoP.BoP11_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="414" onClick={ BoP.BoP11_3_lg === true ? () => setBoP({ ...BoP, BoP11_3_lg: !BoP.BoP11_3_lg, BoP_total_11: BoP.BoP_total_11 - 1}) : () => setBoP({ ...BoP, BoP11_3_lg: !BoP.BoP11_3_lg, BoP_total_11: BoP.BoP_total_11 + 1})} className={Lock.t11 !== 2 ? (BoP.BoP11_3_lg ? classes.small_btn_3_bop_lst : classes.small_btn_3_lst) : classes.disable_furcation}  /></div></StyledTableCell>
            
        </TableRow> 
        <TableRow>
          <StyledTableCell align="center" ><div className={classes.medium_btn}><div className="vl"></div>
          <StyledButton tabIndex="439" onClick={furc_flow18b()} className={Lock.t18 !== 0 ? classes.disable_furcation: classes.medium_btn_1}>
                    <a className={Furc.FurcCount18b === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount18b === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount18b === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton>
          <StyledButton tabIndex="440" onClick={furc_flow18br()} className={Lock.t18 !== 0 ? classes.disable_furcation: classes.medium_btn_2}>
                    <a className={Furc.FurcCount18br === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount18br === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount18br === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton></div></StyledTableCell>
          <StyledTableCell align="center"><div className={classes.medium_btn}><div className="vl"></div>
          <StyledButton tabIndex="441" onClick={furc_flow17b()} className={Lock.t17 !== 0 ? classes.disable_furcation: classes.medium_btn_1}> 
                    <a className={Furc.FurcCount17b === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount17b === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount17b === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton>
          <StyledButton tabIndex="442" onClick={furc_flow17br()} className={Lock.t17 !== 0 ? classes.disable_furcation: classes.medium_btn_2}>
                    <a className={Furc.FurcCount17br === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount17br === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount17br === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton></div></StyledTableCell>
          <StyledTableCell align="center"><div className={classes.medium_btn}><div className="vl"></div>
          <StyledButton  tabIndex="443" onClick={furc_flow16b()} className={Lock.t16 !== 0 ? classes.disable_furcation: classes.medium_btn_1}> 
                    <a className={Furc.FurcCount16b === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount16b === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount16b === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton>
          <StyledButton tabIndex="444" onClick={furc_flow16br()} className={Lock.t16 !== 0 ? classes.disable_furcation: classes.medium_btn_2}>
                    <a className={Furc.FurcCount16br === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount16br === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount16br === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton></div></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell align="center"><div className={classes.medium_btn}><div className="vl"></div>
          <StyledButton tabIndex="445" onClick={furc_flow14b()} className={Lock.t14 !== 0 ? classes.disable_furcation: classes.medium_btn_1}> 
                    <a className={Furc.FurcCount14b === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount14b === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount14b === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton>
          <StyledButton tabIndex="446" onClick={furc_flow14br()} className={Lock.t14 !== 0 ? classes.disable_furcation: classes.medium_btn_2}>
                    <a className={Furc.FurcCount14br === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount14br === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount14br === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton></div></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
                
        </TableRow>
        </TableBody>
       <TableHead>
        <TableRow>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t18 !== 2 ? dataLocker18 : () => setLock({ ...Lock, t18: 0})}>18</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t17 !== 2 ? dataLocker17 : () => setLock({ ...Lock, t17: 0})}>17</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t16 !== 2 ? dataLocker16 : () => setLock({ ...Lock, t16: 0})}>16</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t15 !== 2 ? dataLocker15 : () => setLock({ ...Lock, t15: 0})}>15</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t14 !== 2 ? dataLocker14 : () => setLock({ ...Lock, t14: 0})}>14</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t13 !== 2 ? dataLocker13 : () => setLock({ ...Lock, t13: 0})}>13</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t12 !== 2 ? dataLocker12 : () => setLock({ ...Lock, t12: 0})}>12</StyledTableCell>
            <StyledTableCell align="center" className={classes.first_half} onClick={ Lock.t11 !== 2 ? dataLocker11 : () => setLock({ ...Lock, t11: 0})}>11</StyledTableCell>
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
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t21 !== 2 ? dataLocker21 : () => setLock({ ...Lock, t21: 0})}>21</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t22 !== 2 ? dataLocker22 : () => setLock({ ...Lock, t22: 0})}>22</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t23 !== 2 ? dataLocker23 : () => setLock({ ...Lock, t23: 0})}>23</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t24 !== 2 ? dataLocker24 : () => setLock({ ...Lock, t24: 0})}>24</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t25 !== 2 ? dataLocker25 : () => setLock({ ...Lock, t25: 0})}>25</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t26 !== 2 ? dataLocker26 : () => setLock({ ...Lock, t26: 0})}>26</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t27 !== 2 ? dataLocker27 : () => setLock({ ...Lock, t27: 0})}>27</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t28 !== 2 ? dataLocker28 : () => setLock({ ...Lock, t28: 0})}>28</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
                <StyledTableCell align="center"><input tabIndex="9" type="text" value={Note.t21} onChange={(e) => setNote({...Note, t21: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="10" type="text" value={Note.t22} onChange={(e) => setNote({...Note, t22: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="11" type="text" value={Note.t23} onChange={(e) => setNote({...Note, t23: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="12" type="text" value={Note.t24} onChange={(e) => setNote({...Note, t24: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="13" type="text" value={Note.t25} onChange={(e) => setNote({...Note, t25: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="14" type="text" value={Note.t26} onChange={(e) => setNote({...Note, t26: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="15" type="text" value={Note.t27} onChange={(e) => setNote({...Note, t27: e.target.value})} className="input_note"/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="16" type="text" value={Note.t28} onChange={(e) => setNote({...Note, t28: e.target.value})} className="input_note_last"/></StyledTableCell>
                
            </TableRow>
        <TableRow>
                <StyledTableCell align="center"><input tabIndex="25" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t21 > 3 || Mob.t21 < 0 ? mobLimit21() : Mob.t21} onChange={(e) => setMob({...Mob, t21: e.target.value})} className={Lock.t21 !== 2 ? "input_mobility": "input_mobility_disabled"}/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="26" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t22 > 3 || Mob.t22 < 0 ? mobLimit22() : Mob.t22} onChange={(e) => setMob({...Mob, t22: e.target.value})} className={Lock.t22 !== 2 ? "input_mobility": "input_mobility_disabled"}/></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="27" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t23 > 3 || Mob.t23 < 0 ? mobLimit23() : Mob.t23} onChange={(e) => setMob({...Mob, t23: e.target.value})} className={Lock.t23 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="28" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t24 > 3 || Mob.t24 < 0 ? mobLimit24() : Mob.t24} onChange={(e) => setMob({...Mob, t24: e.target.value})} className={Lock.t24 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="29" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t25 > 3 || Mob.t25 < 0 ? mobLimit25() : Mob.t25} onChange={(e) => setMob({...Mob, t25: e.target.value})} className={Lock.t25 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="30" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t26 > 3 || Mob.t26 < 0 ? mobLimit26() : Mob.t26} onChange={(e) => setMob({...Mob, t26: e.target.value})} className={Lock.t26 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="31" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t27 > 3 || Mob.t27 < 0 ? mobLimit27() : Mob.t27} onChange={(e) => setMob({...Mob, t27: e.target.value})} className={Lock.t27 !== 2 ? "input_mobility": "input_mobility_disabled"} /></StyledTableCell>
                <StyledTableCell align="center"><input tabIndex="32" type="number" min="0" max="3" onFocus={handleChange} onFocusCapture={handleChange} value={Mob.t28 > 3 || Mob.t28 < 0 ? mobLimit28() : Mob.t28} onChange={(e) => setMob({...Mob, t28: e.target.value})} className={Lock.t28 !== 2 ? "input_mobility_last": "input_mobility_disabled"} /></StyledTableCell>
                
            </TableRow>
            <TableRow>
            <StyledTableCell align="center"><StyledButton tabIndex="41" onClick= {Lock.t21 === 0 ? () => setLock({ ...Lock, t21: 1}): Lock.t21 === 1 ? dataLocker21 : () => setLock({ ...Lock, t21: 0})} size="large" ><img src={Lock.t21 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t21 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t21 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="42" onClick={ Lock.t22 === 0 ? () => setLock({ ...Lock, t22: 1}): Lock.t22 === 1 ? dataLocker22 : () => setLock({ ...Lock, t22: 0})} size="large" ><img src={Lock.t22 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t22 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t22 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="43" onClick={ Lock.t23 === 0 ? () => setLock({ ...Lock, t23: 1}): Lock.t23 === 1 ? dataLocker23 : () => setLock({ ...Lock, t23: 0})} size="large" ><img src={Lock.t23 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t23 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t23 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="44" onClick={ Lock.t24 === 0 ? implantLocker24 : Lock.t24 === 1 ? dataLocker24 : () => setLock({ ...Lock, t24: 0})} size="large" ><img src={Lock.t24 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t24 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t24 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="45" onClick={ Lock.t25 === 0 ? () => setLock({ ...Lock, t25: 1}): Lock.t25 === 1 ? dataLocker25 : () => setLock({ ...Lock, t25: 0})} size="large" ><img src={Lock.t25 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t25 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t25 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="46" onClick={ Lock.t26 === 0 ? implantLocker26 : Lock.t26 === 1 ? dataLocker26 : () => setLock({ ...Lock, t26: 0})} size="large" ><img src={Lock.t26 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t26 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t26 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButton tabIndex="47" onClick={ Lock.t27 === 0 ? implantLocker27 : Lock.t27 === 1 ? dataLocker27 : () => setLock({ ...Lock, t27: 0})} size="large" ><img src={Lock.t27 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t27 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t27 !== 0 ? classes.implant: classes.disabled}/></StyledButton></StyledTableCell>
                <StyledTableCell align="center"><StyledButtonLast tabIndex="48" onClick={ Lock.t28 === 0 ? implantLocker28 : Lock.t28 === 1 ? dataLocker28 : () => setLock({ ...Lock, t28: 0})} size="large" ><img src={Lock.t28 === 1 ? process.env.PUBLIC_URL + 'Teeth/Logo_Implant.svg' : Lock.t28 === 2 ? process.env.PUBLIC_URL + 'Teeth/Missing.svg': null} className={Lock.t28 !== 0 ? classes.implant: classes.disabled}/></StyledButtonLast></StyledTableCell>
            </TableRow>
            <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="center">
                  <StyledButton tabIndex="52" onClick={furc_flow26()} size="large" className={Lock.t26 !== 0 ? classes.disable_furcation: null}>
                    <a className={Furc.FurcCount26 === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount26 === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount26 === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
                  </StyledButton>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <StyledButton tabIndex="53" onClick={furc_flow27()} size="large" className={Lock.t27 !== 0 ? classes.disable_furcation: null}>
                    <a className={Furc.FurcCount27 === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount27 === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount27 === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
                  </StyledButton>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <StyledButtonLast tabIndex="54" onClick={furc_flow28()} size="large" className={Lock.t28 !== 0 ? classes.disable_furcation: null}>
                    <a className={Furc.FurcCount28 === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
                    <a className={Furc.FurcCount28 === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
                    <a className={Furc.FurcCount28 === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
                  </StyledButtonLast>
                </StyledTableCell>
            </TableRow>
            <TableRow>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="79" onClick={ BoP.BoP21_1 === true ? () => setBoP({ ...BoP, BoP21_1: !BoP.BoP21_1, BoP_total_21: BoP.BoP_total_21 - 1}) : () => setBoP({ ...BoP, BoP21_1: !BoP.BoP21_1, BoP_total_21: BoP.BoP_total_21 + 1})} className={Lock.t21 !== 2 ? (BoP.BoP21_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="80" onClick={ BoP.BoP21_2 === true ? () => setBoP({ ...BoP, BoP21_2: !BoP.BoP21_2, BoP_total_21: BoP.BoP_total_21 - 1}) : () => setBoP({ ...BoP, BoP21_2: !BoP.BoP21_2, BoP_total_21: BoP.BoP_total_21 + 1})} className={Lock.t21 !== 2 ? (BoP.BoP21_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="81" onClick={ BoP.BoP21_3 === true ? () => setBoP({ ...BoP, BoP21_3: !BoP.BoP21_3, BoP_total_21: BoP.BoP_total_21 - 1}) : () => setBoP({ ...BoP, BoP21_3: !BoP.BoP21_3, BoP_total_21: BoP.BoP_total_21 + 1})} className={Lock.t21 !== 2 ? (BoP.BoP21_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="82" onClick={ BoP.BoP22_1 === true ? () => setBoP({ ...BoP, BoP22_1: !BoP.BoP22_1, BoP_total_22: BoP.BoP_total_22 - 1}) : () => setBoP({ ...BoP, BoP22_1: !BoP.BoP22_1, BoP_total_22: BoP.BoP_total_22 + 1})} className={Lock.t22 !== 2 ? (BoP.BoP22_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="83" onClick={ BoP.BoP22_2 === true ? () => setBoP({ ...BoP, BoP22_2: !BoP.BoP22_2, BoP_total_22: BoP.BoP_total_22 - 1}) : () => setBoP({ ...BoP, BoP22_2: !BoP.BoP22_2, BoP_total_22: BoP.BoP_total_22 + 1})} className={Lock.t22 !== 2 ? (BoP.BoP22_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="84" onClick={ BoP.BoP22_3 === true ? () => setBoP({ ...BoP, BoP22_3: !BoP.BoP22_3, BoP_total_22: BoP.BoP_total_22 - 1}) : () => setBoP({ ...BoP, BoP22_3: !BoP.BoP22_3, BoP_total_22: BoP.BoP_total_22 + 1})} className={Lock.t22 !== 2 ? (BoP.BoP22_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="85" onClick={ BoP.BoP23_1 === true ? () => setBoP({ ...BoP, BoP23_1: !BoP.BoP23_1, BoP_total_23: BoP.BoP_total_23 - 1}) : () => setBoP({ ...BoP, BoP23_1: !BoP.BoP23_1, BoP_total_23: BoP.BoP_total_23 + 1})} className={Lock.t23 !== 2 ? (BoP.BoP23_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="86" onClick={ BoP.BoP23_2 === true ? () => setBoP({ ...BoP, BoP23_2: !BoP.BoP23_2, BoP_total_23: BoP.BoP_total_23 - 1}) : () => setBoP({ ...BoP, BoP23_2: !BoP.BoP23_2, BoP_total_23: BoP.BoP_total_23 + 1})} className={Lock.t23 !== 2 ? (BoP.BoP23_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="87" onClick={ BoP.BoP23_3 === true ? () => setBoP({ ...BoP, BoP23_3: !BoP.BoP23_3, BoP_total_23: BoP.BoP_total_23 - 1}) : () => setBoP({ ...BoP, BoP23_3: !BoP.BoP23_3, BoP_total_23: BoP.BoP_total_23 + 1})} className={Lock.t23 !== 2 ? (BoP.BoP23_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="88" onClick={ BoP.BoP24_1 === true ? () => setBoP({ ...BoP, BoP24_1: !BoP.BoP24_1, BoP_total_24: BoP.BoP_total_24 - 1}) : () => setBoP({ ...BoP, BoP24_1: !BoP.BoP24_1, BoP_total_24: BoP.BoP_total_24 + 1})} className={Lock.t24 !== 2 ? (BoP.BoP24_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="89" onClick={ BoP.BoP24_2 === true ? () => setBoP({ ...BoP, BoP24_2: !BoP.BoP24_2, BoP_total_24: BoP.BoP_total_24 - 1}) : () => setBoP({ ...BoP, BoP24_2: !BoP.BoP24_2, BoP_total_24: BoP.BoP_total_24 + 1})} className={Lock.t24 !== 2 ? (BoP.BoP24_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="90" onClick={ BoP.BoP24_3 === true ? () => setBoP({ ...BoP, BoP24_3: !BoP.BoP24_3, BoP_total_24: BoP.BoP_total_24 - 1}) : () => setBoP({ ...BoP, BoP24_3: !BoP.BoP24_3, BoP_total_24: BoP.BoP_total_24 + 1})} className={Lock.t24 !== 2 ? (BoP.BoP24_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="91" onClick={ BoP.BoP25_1 === true ? () => setBoP({ ...BoP, BoP25_1: !BoP.BoP25_1, BoP_total_25: BoP.BoP_total_25 - 1}) : () => setBoP({ ...BoP, BoP25_1: !BoP.BoP25_1, BoP_total_25: BoP.BoP_total_25 + 1})} className={Lock.t25 !== 2 ? (BoP.BoP25_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="92" onClick={ BoP.BoP25_2 === true ? () => setBoP({ ...BoP, BoP25_2: !BoP.BoP25_2, BoP_total_25: BoP.BoP_total_25 - 1}) : () => setBoP({ ...BoP, BoP25_2: !BoP.BoP25_2, BoP_total_25: BoP.BoP_total_25 + 1})} className={Lock.t25 !== 2 ? (BoP.BoP25_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="93" onClick={ BoP.BoP25_3 === true ? () => setBoP({ ...BoP, BoP25_3: !BoP.BoP25_3, BoP_total_25: BoP.BoP_total_25 - 1}) : () => setBoP({ ...BoP, BoP25_3: !BoP.BoP25_3, BoP_total_25: BoP.BoP_total_25 + 1})} className={Lock.t25 !== 2 ? (BoP.BoP25_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="94" onClick={ BoP.BoP26_1 === true ? () => setBoP({ ...BoP, BoP26_1: !BoP.BoP26_1, BoP_total_26: BoP.BoP_total_26 - 1}) : () => setBoP({ ...BoP, BoP26_1: !BoP.BoP26_1, BoP_total_26: BoP.BoP_total_26 + 1})} className={Lock.t26 !== 2 ? (BoP.BoP26_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="95" onClick={ BoP.BoP26_2 === true ? () => setBoP({ ...BoP, BoP26_2: !BoP.BoP26_2, BoP_total_26: BoP.BoP_total_26 - 1}) : () => setBoP({ ...BoP, BoP26_2: !BoP.BoP26_2, BoP_total_26: BoP.BoP_total_26 + 1})} className={Lock.t26 !== 2 ? (BoP.BoP26_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="96" onClick={ BoP.BoP26_3 === true ? () => setBoP({ ...BoP, BoP26_3: !BoP.BoP26_3, BoP_total_26: BoP.BoP_total_26 - 1}) : () => setBoP({ ...BoP, BoP26_3: !BoP.BoP26_3, BoP_total_26: BoP.BoP_total_26 + 1})} className={Lock.t26 !== 2 ? (BoP.BoP26_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="97" onClick={ BoP.BoP27_1 === true ? () => setBoP({ ...BoP, BoP27_1: !BoP.BoP27_1, BoP_total_27: BoP.BoP_total_27 - 1}) : () => setBoP({ ...BoP, BoP27_1: !BoP.BoP27_1, BoP_total_27: BoP.BoP_total_27 + 1})} className={Lock.t27 !== 2 ? (BoP.BoP27_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="98" onClick={ BoP.BoP27_2 === true ? () => setBoP({ ...BoP, BoP27_2: !BoP.BoP27_2, BoP_total_27: BoP.BoP_total_27 - 1}) : () => setBoP({ ...BoP, BoP27_2: !BoP.BoP27_2, BoP_total_27: BoP.BoP_total_27 + 1})} className={Lock.t27 !== 2 ? (BoP.BoP27_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="99" onClick={ BoP.BoP27_3 === true ? () => setBoP({ ...BoP, BoP27_3: !BoP.BoP27_3, BoP_total_27: BoP.BoP_total_27 - 1}) : () => setBoP({ ...BoP, BoP27_3: !BoP.BoP27_3, BoP_total_27: BoP.BoP_total_27 + 1})} className={Lock.t27 !== 2 ? (BoP.BoP27_3 ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="100" onClick={ BoP.BoP28_1 === true ? () => setBoP({ ...BoP, BoP28_1: !BoP.BoP28_1, BoP_total_28: BoP.BoP_total_28 - 1}) : () => setBoP({ ...BoP, BoP28_1: !BoP.BoP28_1, BoP_total_28: BoP.BoP_total_28 + 1})} className={Lock.t28 !== 2 ? (BoP.BoP28_1 ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="101" onClick={ BoP.BoP28_2 === true ? () => setBoP({ ...BoP, BoP28_2: !BoP.BoP28_2, BoP_total_28: BoP.BoP_total_28 - 1}) : () => setBoP({ ...BoP, BoP28_2: !BoP.BoP28_2, BoP_total_28: BoP.BoP_total_28 + 1})} className={Lock.t28 !== 2 ? (BoP.BoP28_2 ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="102" onClick={ BoP.BoP28_3 === true ? () => setBoP({ ...BoP, BoP28_3: !BoP.BoP28_3, BoP_total_28: BoP.BoP_total_28 - 1}) : () => setBoP({ ...BoP, BoP28_3: !BoP.BoP28_3, BoP_total_28: BoP.BoP_total_28 + 1})} className={Lock.t28 !== 2 ? (BoP.BoP28_3 ? classes.small_btn_3_bop_lst : classes.small_btn_3_lst) : classes.disable_furcation}  /></div></StyledTableCell>
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="127" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t21_1 > 15 || GM.t21_1 < (-10) ? gmLimit21() : GM.t21_1} onChange={(e) => setGM({...GM, t21_1: e.target.value})} className={Lock.t21 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="128" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t21_2 > 15 || GM.t21_2 < (-10) ? gmLimit21() : GM.t21_2} onChange={(e) => setGM({...GM, t21_2: e.target.value})}  className={Lock.t21 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="129" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t21_3 > 15 || GM.t21_3 < (-10) ? gmLimit21() : GM.t21_3} onChange={(e) => setGM({...GM, t21_3: e.target.value})} className={Lock.t21 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="130" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t22_1 > 15 || GM.t22_1 < (-10) ? gmLimit22() : GM.t22_1} onChange={(e) => setGM({...GM, t22_1: e.target.value})} className={Lock.t22 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="131" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t22_2 > 15 || GM.t22_2 < (-10) ? gmLimit22() : GM.t22_2} onChange={(e) => setGM({...GM, t22_2: e.target.value})}  className={Lock.t22 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="132" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t22_3 > 15 || GM.t22_3 < (-10) ? gmLimit22() : GM.t22_3} onChange={(e) => setGM({...GM, t22_3: e.target.value})} className={Lock.t22 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="133" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t23_1 > 15 || GM.t23_1 < (-10) ? gmLimit23() : GM.t23_1} onChange={(e) => setGM({...GM, t23_1: e.target.value})} className={Lock.t23 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="134" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t23_2 > 15 || GM.t23_2 < (-10) ? gmLimit23() : GM.t23_2} onChange={(e) => setGM({...GM, t23_2: e.target.value})}  className={Lock.t23 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="135" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t23_3 > 15 || GM.t23_3 < (-10) ? gmLimit23() : GM.t23_3} onChange={(e) => setGM({...GM, t23_3: e.target.value})} className={Lock.t23 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="136" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t24_1 > 15 || GM.t24_1 < (-10) ? gmLimit24() : GM.t24_1} onChange={(e) => setGM({...GM, t24_1: e.target.value})} className={Lock.t24 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="137" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t24_2 > 15 || GM.t24_2 < (-10) ? gmLimit24() : GM.t24_2} onChange={(e) => setGM({...GM, t24_2: e.target.value})}  className={Lock.t24 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="138" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t24_3 > 15 || GM.t24_3 < (-10) ? gmLimit24() : GM.t24_3} onChange={(e) => setGM({...GM, t24_3: e.target.value})} className={Lock.t24 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="139" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t25_1 > 15 || GM.t25_1 < (-10) ? gmLimit25() : GM.t25_1} onChange={(e) => setGM({...GM, t25_1: e.target.value})} className={Lock.t25 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="140" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t25_2 > 15 || GM.t25_2 < (-10) ? gmLimit25() : GM.t25_2} onChange={(e) => setGM({...GM, t25_2: e.target.value})}  className={Lock.t25 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="141" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t25_3 > 15 || GM.t25_3 < (-10) ? gmLimit25() : GM.t25_3} onChange={(e) => setGM({...GM, t25_3: e.target.value})} className={Lock.t25 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="142" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t26_1 > 15 || GM.t26_1 < (-10) ? gmLimit26() : GM.t26_1} onChange={(e) => setGM({...GM, t26_1: e.target.value})} className={Lock.t26 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="143" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t26_2 > 15 || GM.t26_2 < (-10) ? gmLimit26() : GM.t26_2} onChange={(e) => setGM({...GM, t26_2: e.target.value})}  className={Lock.t26 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="144" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t26_3 > 15 || GM.t26_3 < (-10) ? gmLimit26() : GM.t26_3} onChange={(e) => setGM({...GM, t26_3: e.target.value})} className={Lock.t26 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="145" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t27_1 > 15 || GM.t27_1 < (-10) ? gmLimit27() : GM.t27_1} onChange={(e) => setGM({...GM, t27_1: e.target.value})} className={Lock.t27 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="146" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t27_2 > 15 || GM.t27_2 < (-10) ? gmLimit27() : GM.t27_2} onChange={(e) => setGM({...GM, t27_2: e.target.value})}  className={Lock.t27 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="147" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t27_3 > 15 || GM.t27_3 < (-10) ? gmLimit27() : GM.t27_3} onChange={(e) => setGM({...GM, t27_3: e.target.value})} className={Lock.t27 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="148" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t28_1 > 15 || GM.t28_1 < (-10) ? gmLimit28() : GM.t28_1} onChange={(e) => setGM({...GM, t28_1: e.target.value})} className={Lock.t28 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="149" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t28_2 > 15 || GM.t28_2 < (-10) ? gmLimit28() : GM.t28_2} onChange={(e) => setGM({...GM, t28_2: e.target.value})}  className={Lock.t28 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="150" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t28_3 > 15 || GM.t28_3 < (-10) ? gmLimit28() : GM.t28_3} onChange={(e) => setGM({...GM, t28_3: e.target.value})} className={Lock.t28 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
            
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="175" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p21_1 > 15 || Probe.p21_1 < 0 ? ProbeLimit21() : Probe.p21_1} onChange={(e) => setProbe({...Probe, p21_1: e.target.value})} className={Lock.t21 !== 2 ? (((Probe.p21_1 == 4 && BoP.BoP21_1) || Probe.p21_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="176" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p21_2 > 15 || Probe.p21_2 < 0 ? ProbeLimit21() : Probe.p21_2} onChange={(e) => setProbe({...Probe, p21_2: e.target.value})}  className={Lock.t21 !== 2 ? (((Probe.p21_2 == 4 && BoP.BoP21_2) || Probe.p21_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="177" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p21_3 > 15 || Probe.p21_3 < 0 ? ProbeLimit21() : Probe.p21_3} onChange={(e) => setProbe({...Probe, p21_3: e.target.value})} className={Lock.t21 !== 2 ? (((Probe.p21_3 == 4 && BoP.BoP21_3) || Probe.p21_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="178" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p22_1 > 15 || Probe.p22_1 < 0 ? ProbeLimit22() : Probe.p22_1} onChange={(e) => setProbe({...Probe, p22_1: e.target.value})} className={Lock.t22 !== 2 ? (((Probe.p22_1 == 4 && BoP.BoP22_1) || Probe.p22_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="179" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p22_2 > 15 || Probe.p22_2 < 0 ? ProbeLimit22() : Probe.p22_2} onChange={(e) => setProbe({...Probe, p22_2: e.target.value})}  className={Lock.t22 !== 2 ? (((Probe.p22_2 == 4 && BoP.BoP22_2) || Probe.p22_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="180" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p22_3 > 15 || Probe.p22_3 < 0 ? ProbeLimit22() : Probe.p22_3} onChange={(e) => setProbe({...Probe, p22_3: e.target.value})} className={Lock.t22 !== 2 ? (((Probe.p22_3 == 4 && BoP.BoP22_3) || Probe.p22_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="181" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p23_1 > 15 || Probe.p23_1 < 0 ? ProbeLimit23() : Probe.p23_1} onChange={(e) => setProbe({...Probe, p23_1: e.target.value})} className={Lock.t23 !== 2 ? (((Probe.p23_1 == 4 && BoP.BoP23_1) || Probe.p23_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="182" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p23_2 > 15 || Probe.p23_2 < 0 ? ProbeLimit23() : Probe.p23_2} onChange={(e) => setProbe({...Probe, p23_2: e.target.value})}  className={Lock.t23 !== 2 ? (((Probe.p23_2 == 4 && BoP.BoP23_2) || Probe.p23_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="183" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p23_3 > 15 || Probe.p23_3 < 0 ? ProbeLimit23() : Probe.p23_3} onChange={(e) => setProbe({...Probe, p23_3: e.target.value})} className={Lock.t23 !== 2 ? (((Probe.p23_3 == 4 && BoP.BoP23_3) || Probe.p23_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="184" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p24_1 > 15 || Probe.p24_1 < 0 ? ProbeLimit24() : Probe.p24_1} onChange={(e) => setProbe({...Probe, p24_1: e.target.value})} className={Lock.t24 !== 2 ? (((Probe.p24_1 == 4 && BoP.BoP24_1) || Probe.p24_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="185" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p24_2 > 15 || Probe.p24_2 < 0 ? ProbeLimit24() : Probe.p24_2} onChange={(e) => setProbe({...Probe, p24_2: e.target.value})}  className={Lock.t24 !== 2 ? (((Probe.p24_2 == 4 && BoP.BoP24_2) || Probe.p24_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="186" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p24_3 > 15 || Probe.p24_3 < 0 ? ProbeLimit24() : Probe.p24_3} onChange={(e) => setProbe({...Probe, p24_3: e.target.value})} className={Lock.t24 !== 2 ? (((Probe.p24_3 == 4 && BoP.BoP24_3) || Probe.p24_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="187" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p25_1 > 15 || Probe.p25_1 < 0 ? ProbeLimit25() : Probe.p25_1} onChange={(e) => setProbe({...Probe, p25_1: e.target.value})} className={Lock.t25 !== 2 ? (((Probe.p25_1 == 4 && BoP.BoP25_1) || Probe.p25_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="188" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p25_2 > 15 || Probe.p25_2 < 0 ? ProbeLimit25() : Probe.p25_2} onChange={(e) => setProbe({...Probe, p25_2: e.target.value})}  className={Lock.t25 !== 2 ? (((Probe.p25_2 == 4 && BoP.BoP25_2) || Probe.p25_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="189" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p25_3 > 15 || Probe.p25_3 < 0 ? ProbeLimit25() : Probe.p25_3} onChange={(e) => setProbe({...Probe, p25_3: e.target.value})} className={Lock.t25 !== 2 ? (((Probe.p25_3 == 4 && BoP.BoP25_3) || Probe.p25_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="190" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p26_1 > 15 || Probe.p26_1 < 0 ? ProbeLimit26() : Probe.p26_1} onChange={(e) => setProbe({...Probe, p26_1: e.target.value})} className={Lock.t26 !== 2 ? (((Probe.p26_1 == 4 && BoP.BoP26_1) || Probe.p26_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="191" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p26_2 > 15 || Probe.p26_2 < 0 ? ProbeLimit26() : Probe.p26_2} onChange={(e) => setProbe({...Probe, p26_2: e.target.value})}  className={Lock.t26 !== 2 ? (((Probe.p26_2 == 4 && BoP.BoP26_2) || Probe.p26_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="192" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p26_3 > 15 || Probe.p26_3 < 0 ? ProbeLimit26() : Probe.p26_3} onChange={(e) => setProbe({...Probe, p26_3: e.target.value})} className={Lock.t26 !== 2 ? (((Probe.p26_3 == 4 && BoP.BoP26_3) || Probe.p26_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="193" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p27_1 > 15 || Probe.p27_1 < 0 ? ProbeLimit27() : Probe.p27_1} onChange={(e) => setProbe({...Probe, p27_1: e.target.value})} className={Lock.t27 !== 2 ? (((Probe.p27_1 == 4 && BoP.BoP27_1) || Probe.p27_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="194" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p27_2 > 15 || Probe.p27_2 < 0 ? ProbeLimit27() : Probe.p27_2} onChange={(e) => setProbe({...Probe, p27_2: e.target.value})}  className={Lock.t27 !== 2 ? (((Probe.p27_2 == 4 && BoP.BoP27_2) || Probe.p27_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="195" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p27_3 > 15 || Probe.p27_3 < 0 ? ProbeLimit27() : Probe.p27_3} onChange={(e) => setProbe({...Probe, p27_3: e.target.value})} className={Lock.t27 !== 2 ? (((Probe.p27_3 == 4 && BoP.BoP27_3) || Probe.p27_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="196" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p28_1 > 15 || Probe.p28_1 < 0 ? ProbeLimit28() : Probe.p28_1} onChange={(e) => setProbe({...Probe, p28_1: e.target.value})} className={Lock.t28 !== 2 ? (((Probe.p28_1 == 4 && BoP.BoP28_1) || Probe.p28_1 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="197" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p28_2 > 15 || Probe.p28_2 < 0 ? ProbeLimit28() : Probe.p28_2} onChange={(e) => setProbe({...Probe, p28_2: e.target.value})}  className={Lock.t28 !== 2 ? (((Probe.p28_2 == 4 && BoP.BoP28_2) || Probe.p28_2 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="198" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p28_3 > 15 || Probe.p28_3 < 0 ? ProbeLimit28() : Probe.p28_3} onChange={(e) => setProbe({...Probe, p28_3: e.target.value})} className={Lock.t28 !== 2 ? (((Probe.p28_3 == 4 && BoP.BoP28_3) || Probe.p28_3 > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
            
        </TableRow>
        <TableRow>
        <ImgCell className={classes.img_change} onClick={Lock.t21 === 0 ? () => setLock({ ...Lock, t21: 1}): Lock.t21 === 1 ? dataLocker21 : () => setLock({ ...Lock, t21: 0})}><img src={Lock.t21 === 0 ? process.env.PUBLIC_URL + 'Teeth/21.png': Lock.t21 === 1 ? process.env.PUBLIC_URL + 'Teeth/21i.png': process.env.PUBLIC_URL + 'Teeth/21x.png'} className={classes.tooth_img_21} />
                      <svg className={Lock.t21 !== 2  ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_21" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t21 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_21" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t21 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_21" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t21 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_21_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t21 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_21" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t21 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_21_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={Lock.t22 === 0 ? () => setLock({ ...Lock, t22: 1}): Lock.t22 === 1 ? dataLocker22 : () => setLock({ ...Lock, t22: 0})}><img src={Lock.t22 === 0 ? process.env.PUBLIC_URL + 'Teeth/22.png': Lock.t22 === 1 ? process.env.PUBLIC_URL + 'Teeth/22i.png': process.env.PUBLIC_URL + 'Teeth/22x.png'} className={classes.tooth_img_22} />
                      <svg className={Lock.t22 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_22" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t22 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_22" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t22 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_22" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t22 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_22_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t22 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_22" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t22 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_22_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={Lock.t23 === 0 ? () => setLock({ ...Lock, t23: 1}): Lock.t23 === 1 ? dataLocker23 : () => setLock({ ...Lock, t23: 0})}><img src={Lock.t23 === 0 ? process.env.PUBLIC_URL + 'Teeth/23.png': Lock.t23 === 1 ? process.env.PUBLIC_URL + 'Teeth/23i.png': process.env.PUBLIC_URL + 'Teeth/23x.png'} className={classes.tooth_img_23} />
                      <svg className={Lock.t23 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_23" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t23 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_23" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t23 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_23" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t23 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_23_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t23 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_23" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t23 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_23_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t24 === 0 ? implantLocker24 : Lock.t24 === 1 ? dataLocker24 : () => setLock({ ...Lock, t24: 0})}><img src={Lock.t24 === 0 ? process.env.PUBLIC_URL + 'Teeth/24.png': Lock.t24 === 1 ? process.env.PUBLIC_URL + 'Teeth/24i.png': process.env.PUBLIC_URL + 'Teeth/24x.png'} className={classes.tooth_img_24} />
                      <svg className={Lock.t24 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_24" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t24 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_24" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t24 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_24" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t24 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_24_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t24 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_24" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t24 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_24_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={Lock.t25 === 0 ? () => setLock({ ...Lock, t25: 1}): Lock.t25 === 1 ? dataLocker25 : () => setLock({ ...Lock, t25: 0})}><img src={Lock.t25 === 0 ? process.env.PUBLIC_URL + 'Teeth/25.png': Lock.t25 === 1 ? process.env.PUBLIC_URL + 'Teeth/25i.png': process.env.PUBLIC_URL + 'Teeth/25x.png'} className={classes.tooth_img_25} />
                      <svg className={Lock.t25 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_25" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t25 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_25" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t25 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_25" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t25 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_25_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t25 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_25" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t25 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_25_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t26 === 0 ? implantLocker26 : Lock.t26 === 1 ? dataLocker26 : () => setLock({ ...Lock, t26: 0})}><img src={Lock.t26 === 0 ? process.env.PUBLIC_URL + 'Teeth/26.png': Lock.t26 === 1 ? process.env.PUBLIC_URL + 'Teeth/26i.png': process.env.PUBLIC_URL + 'Teeth/26x.png'} className={classes.tooth_img_26} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t26 === 0 && Furc.FurcCount26 === 1 ? classes.furc_img_26: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t26 === 0 && Furc.FurcCount26 === 2 ? classes.furc_img_26: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t26 === 0 && Furc.FurcCount26 === 3 ? classes.furc_img_26: classes.disabled}/>
                      <svg className={Lock.t26 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_26" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t26 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_26" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t26 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_26" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t26 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_26_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t26 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_26" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t26 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_26_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t27 === 0 ? implantLocker27 : Lock.t27 === 1 ? dataLocker27 : () => setLock({ ...Lock, t27: 0})}><img src={Lock.t27 === 0 ? process.env.PUBLIC_URL + 'Teeth/27.png': Lock.t27 === 1 ? process.env.PUBLIC_URL + 'Teeth/27i.png': process.env.PUBLIC_URL + 'Teeth/27x.png'} className={classes.tooth_img_27} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t27 === 0 && Furc.FurcCount27 === 1 ? classes.furc_img_27: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t27 === 0 && Furc.FurcCount27 === 2 ? classes.furc_img_27: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t27 === 0 && Furc.FurcCount27 === 3 ? classes.furc_img_27: classes.disabled}/>
                      <svg className={Lock.t27 !== 2  ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_27" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t27 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_27" x1="60" y1="116" x2="78" y2="116" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
                      <svg className={Lock.t27 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_27" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t27 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_27_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t27 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_27" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t27 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_27_attachment" x1="60" y1="116" x2="78" y2="116" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t28 === 0 ? implantLocker28 : Lock.t28 === 1 ? dataLocker28 : () => setLock({ ...Lock, t28: 0})}><img src={Lock.t28 === 0 ? process.env.PUBLIC_URL + 'Teeth/28.png': Lock.t28 === 1 ? process.env.PUBLIC_URL + 'Teeth/28i.png': process.env.PUBLIC_URL + 'Teeth/28x.png'} className={classes.tooth_img_28} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t28 === 0 && Furc.FurcCount28 === 1 ? classes.furc_img_28: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t28 === 0 && Furc.FurcCount28 === 2 ? classes.furc_img_28: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t28 === 0 && Furc.FurcCount28 === 3 ? classes.furc_img_28: classes.disabled}/>
                      <svg className={Lock.t28 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_28" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t28 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_28" display="none"/></svg>
                      <svg className={Lock.t28 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_28" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 116 34.5,116 60,116 9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t28 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_28_attachment" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 116 34.5,116 60,116" overflow="visible"/></svg>
                      <svg className={Lock.t28 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_28" display="none"/></svg>
                      <svg className={Lock.t28 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_28_attachment" display="none"/></svg>
            <ToothLines1 />
            
          </ImgCell>
          
        </TableRow>
        <TableRow><SpaceCell></SpaceCell></TableRow>
        <TableRow>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="223" onClick={ Plague.Plague21_1 === true ? () => setPlague({ ...Plague, Plague21_1: !Plague.Plague21_1, Plague_total_21: Plague.Plague_total_21 - 1}) : () => setPlague({ ...Plague, Plague21_1: !Plague.Plague21_1, Plague_total_21: Plague.Plague_total_21 + 1})} className={Lock.t21 !== 2 ? (Plague.Plague21_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="224" onClick={ Plague.Plague21_2 === true ? () => setPlague({ ...Plague, Plague21_2: !Plague.Plague21_2, Plague_total_21: Plague.Plague_total_21 - 1}) : () => setPlague({ ...Plague, Plague21_2: !Plague.Plague21_2, Plague_total_21: Plague.Plague_total_21 + 1})} className={Lock.t21 !== 2 ? (Plague.Plague21_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="225" onClick={ Plague.Plague21_3 === true ? () => setPlague({ ...Plague, Plague21_3: !Plague.Plague21_3, Plague_total_21: Plague.Plague_total_21 - 1}) : () => setPlague({ ...Plague, Plague21_3: !Plague.Plague21_3, Plague_total_21: Plague.Plague_total_21 + 1})} className={Lock.t21 !== 2 ? (Plague.Plague21_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="226" onClick={ Plague.Plague22_1 === true ? () => setPlague({ ...Plague, Plague22_1: !Plague.Plague22_1, Plague_total_22: Plague.Plague_total_22 - 1}) : () => setPlague({ ...Plague, Plague22_1: !Plague.Plague22_1, Plague_total_22: Plague.Plague_total_22 + 1})} className={Lock.t22 !== 2 ? (Plague.Plague22_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="227" onClick={ Plague.Plague22_2 === true ? () => setPlague({ ...Plague, Plague22_2: !Plague.Plague22_2, Plague_total_22: Plague.Plague_total_22 - 1}) : () => setPlague({ ...Plague, Plague22_2: !Plague.Plague22_2, Plague_total_22: Plague.Plague_total_22 + 1})} className={Lock.t22 !== 2 ? (Plague.Plague22_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="228" onClick={ Plague.Plague22_3 === true ? () => setPlague({ ...Plague, Plague22_3: !Plague.Plague22_3, Plague_total_22: Plague.Plague_total_22 - 1}) : () => setPlague({ ...Plague, Plague22_3: !Plague.Plague22_3, Plague_total_22: Plague.Plague_total_22 + 1})} className={Lock.t22 !== 2 ? (Plague.Plague22_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="229" onClick={ Plague.Plague23_1 === true ? () => setPlague({ ...Plague, Plague23_1: !Plague.Plague23_1, Plague_total_23: Plague.Plague_total_23 - 1}) : () => setPlague({ ...Plague, Plague23_1: !Plague.Plague23_1, Plague_total_23: Plague.Plague_total_23 + 1})} className={Lock.t23 !== 2 ? (Plague.Plague23_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="230" onClick={ Plague.Plague23_2 === true ? () => setPlague({ ...Plague, Plague23_2: !Plague.Plague23_2, Plague_total_23: Plague.Plague_total_23 - 1}) : () => setPlague({ ...Plague, Plague23_2: !Plague.Plague23_2, Plague_total_23: Plague.Plague_total_23 + 1})} className={Lock.t23 !== 2 ? (Plague.Plague23_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="231" onClick={ Plague.Plague23_3 === true ? () => setPlague({ ...Plague, Plague23_3: !Plague.Plague23_3, Plague_total_23: Plague.Plague_total_23 - 1}) : () => setPlague({ ...Plague, Plague23_3: !Plague.Plague23_3, Plague_total_23: Plague.Plague_total_23 + 1})} className={Lock.t23 !== 2 ? (Plague.Plague23_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="232" onClick={ Plague.Plague24_1 === true ? () => setPlague({ ...Plague, Plague24_1: !Plague.Plague24_1, Plague_total_24: Plague.Plague_total_24 - 1}) : () => setPlague({ ...Plague, Plague24_1: !Plague.Plague24_1, Plague_total_24: Plague.Plague_total_24 + 1})} className={Lock.t24 !== 2 ? (Plague.Plague24_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="233" onClick={ Plague.Plague24_2 === true ? () => setPlague({ ...Plague, Plague24_2: !Plague.Plague24_2, Plague_total_24: Plague.Plague_total_24 - 1}) : () => setPlague({ ...Plague, Plague24_2: !Plague.Plague24_2, Plague_total_24: Plague.Plague_total_24 + 1})} className={Lock.t24 !== 2 ? (Plague.Plague24_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="234" onClick={ Plague.Plague24_3 === true ? () => setPlague({ ...Plague, Plague24_3: !Plague.Plague24_3, Plague_total_24: Plague.Plague_total_24 - 1}) : () => setPlague({ ...Plague, Plague24_3: !Plague.Plague24_3, Plague_total_24: Plague.Plague_total_24 + 1})} className={Lock.t24 !== 2 ? (Plague.Plague24_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="235" onClick={ Plague.Plague25_1 === true ? () => setPlague({ ...Plague, Plague25_1: !Plague.Plague25_1, Plague_total_25: Plague.Plague_total_25 - 1}) : () => setPlague({ ...Plague, Plague25_1: !Plague.Plague25_1, Plague_total_25: Plague.Plague_total_25 + 1})} className={Lock.t25 !== 2 ? (Plague.Plague25_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="236" onClick={ Plague.Plague25_2 === true ? () => setPlague({ ...Plague, Plague25_2: !Plague.Plague25_2, Plague_total_25: Plague.Plague_total_25 - 1}) : () => setPlague({ ...Plague, Plague25_2: !Plague.Plague25_2, Plague_total_25: Plague.Plague_total_25 + 1})} className={Lock.t25 !== 2 ? (Plague.Plague25_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="237" onClick={ Plague.Plague25_3 === true ? () => setPlague({ ...Plague, Plague25_3: !Plague.Plague25_3, Plague_total_25: Plague.Plague_total_25 - 1}) : () => setPlague({ ...Plague, Plague25_3: !Plague.Plague25_3, Plague_total_25: Plague.Plague_total_25 + 1})} className={Lock.t25 !== 2 ? (Plague.Plague25_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="238" onClick={ Plague.Plague26_1 === true ? () => setPlague({ ...Plague, Plague26_1: !Plague.Plague26_1, Plague_total_26: Plague.Plague_total_26 - 1}) : () => setPlague({ ...Plague, Plague26_1: !Plague.Plague26_1, Plague_total_26: Plague.Plague_total_26 + 1})} className={Lock.t26 !== 2 ? (Plague.Plague26_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="239" onClick={ Plague.Plague26_2 === true ? () => setPlague({ ...Plague, Plague26_2: !Plague.Plague26_2, Plague_total_26: Plague.Plague_total_26 - 1}) : () => setPlague({ ...Plague, Plague26_2: !Plague.Plague26_2, Plague_total_26: Plague.Plague_total_26 + 1})} className={Lock.t26 !== 2 ? (Plague.Plague26_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="240" onClick={ Plague.Plague26_3 === true ? () => setPlague({ ...Plague, Plague26_3: !Plague.Plague26_3, Plague_total_26: Plague.Plague_total_26 - 1}) : () => setPlague({ ...Plague, Plague26_3: !Plague.Plague26_3, Plague_total_26: Plague.Plague_total_26 + 1})} className={Lock.t26 !== 2 ? (Plague.Plague26_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="241" onClick={ Plague.Plague27_1 === true ? () => setPlague({ ...Plague, Plague27_1: !Plague.Plague27_1, Plague_total_27: Plague.Plague_total_27 - 1}) : () => setPlague({ ...Plague, Plague27_1: !Plague.Plague27_1, Plague_total_27: Plague.Plague_total_27 + 1})} className={Lock.t27 !== 2 ? (Plague.Plague27_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="242" onClick={ Plague.Plague27_2 === true ? () => setPlague({ ...Plague, Plague27_2: !Plague.Plague27_2, Plague_total_27: Plague.Plague_total_27 - 1}) : () => setPlague({ ...Plague, Plague27_2: !Plague.Plague27_2, Plague_total_27: Plague.Plague_total_27 + 1})} className={Lock.t27 !== 2 ? (Plague.Plague27_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="243" onClick={ Plague.Plague27_3 === true ? () => setPlague({ ...Plague, Plague27_3: !Plague.Plague27_3, Plague_total_27: Plague.Plague_total_27 - 1}) : () => setPlague({ ...Plague, Plague27_3: !Plague.Plague27_3, Plague_total_27: Plague.Plague_total_27 + 1})} className={Lock.t27 !== 2 ? (Plague.Plague27_3 ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="244" onClick={ Plague.Plague28_1 === true ? () => setPlague({ ...Plague, Plague28_1: !Plague.Plague28_1, Plague_total_28: Plague.Plague_total_28 - 1}) : () => setPlague({ ...Plague, Plague28_1: !Plague.Plague28_1, Plague_total_28: Plague.Plague_total_28 + 1})} className={Lock.t28 !== 2 ? (Plague.Plague28_1 ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="245" onClick={ Plague.Plague28_2 === true ? () => setPlague({ ...Plague, Plague28_2: !Plague.Plague28_2, Plague_total_28: Plague.Plague_total_28 - 1}) : () => setPlague({ ...Plague, Plague28_2: !Plague.Plague28_2, Plague_total_28: Plague.Plague_total_28 + 1})} className={Lock.t28 !== 2 ? (Plague.Plague28_2 ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="246" onClick={ Plague.Plague28_3 === true ? () => setPlague({ ...Plague, Plague28_3: !Plague.Plague28_3, Plague_total_28: Plague.Plague_total_28 - 1}) : () => setPlague({ ...Plague, Plague28_3: !Plague.Plague28_3, Plague_total_28: Plague.Plague_total_28 + 1})} className={Lock.t28 !== 2 ? (Plague.Plague28_3 ? classes.small_btn_3_Plague_lst : classes.small_btn_3_lst) : classes.disable_furcation}  /></div></PlagueTableCell>
        </TableRow>
        <TableRow>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="271" onClick={ Plague.Plague21_1_lg === true ? () => setPlague({ ...Plague, Plague21_1_lg: !Plague.Plague21_1_lg, Plague_total_21: Plague.Plague_total_21 - 1}) : () => setPlague({ ...Plague, Plague21_1_lg: !Plague.Plague21_1_lg, Plague_total_21: Plague.Plague_total_21 + 1})} className={Lock.t21 !== 2 ? (Plague.Plague21_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="272" onClick={ Plague.Plague21_2_lg === true ? () => setPlague({ ...Plague, Plague21_2_lg: !Plague.Plague21_2_lg, Plague_total_21: Plague.Plague_total_21 - 1}) : () => setPlague({ ...Plague, Plague21_2_lg: !Plague.Plague21_2_lg, Plague_total_21: Plague.Plague_total_21 + 1})} className={Lock.t21 !== 2 ? (Plague.Plague21_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="273" onClick={ Plague.Plague21_3_lg === true ? () => setPlague({ ...Plague, Plague21_3_lg: !Plague.Plague21_3_lg, Plague_total_21: Plague.Plague_total_21 - 1}) : () => setPlague({ ...Plague, Plague21_3_lg: !Plague.Plague21_3_lg, Plague_total_21: Plague.Plague_total_21 + 1})} className={Lock.t21 !== 2 ? (Plague.Plague21_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="274" onClick={ Plague.Plague22_1_lg === true ? () => setPlague({ ...Plague, Plague22_1_lg: !Plague.Plague22_1_lg, Plague_total_22: Plague.Plague_total_22 - 1}) : () => setPlague({ ...Plague, Plague22_1_lg: !Plague.Plague22_1_lg, Plague_total_22: Plague.Plague_total_22 + 1})} className={Lock.t22 !== 2 ? (Plague.Plague22_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="275" onClick={ Plague.Plague22_2_lg === true ? () => setPlague({ ...Plague, Plague22_2_lg: !Plague.Plague22_2_lg, Plague_total_22: Plague.Plague_total_22 - 1}) : () => setPlague({ ...Plague, Plague22_2_lg: !Plague.Plague22_2_lg, Plague_total_22: Plague.Plague_total_22 + 1})} className={Lock.t22 !== 2 ? (Plague.Plague22_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="276" onClick={ Plague.Plague22_3_lg === true ? () => setPlague({ ...Plague, Plague22_3_lg: !Plague.Plague22_3_lg, Plague_total_22: Plague.Plague_total_22 - 1}) : () => setPlague({ ...Plague, Plague22_3_lg: !Plague.Plague22_3_lg, Plague_total_22: Plague.Plague_total_22 + 1})} className={Lock.t22 !== 2 ? (Plague.Plague22_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="277" onClick={ Plague.Plague23_1_lg === true ? () => setPlague({ ...Plague, Plague23_1_lg: !Plague.Plague23_1_lg, Plague_total_23: Plague.Plague_total_23 - 1}) : () => setPlague({ ...Plague, Plague23_1_lg: !Plague.Plague23_1_lg, Plague_total_23: Plague.Plague_total_23 + 1})} className={Lock.t23 !== 2 ? (Plague.Plague23_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="278" onClick={ Plague.Plague23_2_lg === true ? () => setPlague({ ...Plague, Plague23_2_lg: !Plague.Plague23_2_lg, Plague_total_23: Plague.Plague_total_23 - 1}) : () => setPlague({ ...Plague, Plague23_2_lg: !Plague.Plague23_2_lg, Plague_total_23: Plague.Plague_total_23 + 1})} className={Lock.t23 !== 2 ? (Plague.Plague23_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="279" onClick={ Plague.Plague23_3_lg === true ? () => setPlague({ ...Plague, Plague23_3_lg: !Plague.Plague23_3_lg, Plague_total_23: Plague.Plague_total_23 - 1}) : () => setPlague({ ...Plague, Plague23_3_lg: !Plague.Plague23_3_lg, Plague_total_23: Plague.Plague_total_23 + 1})} className={Lock.t23 !== 2 ? (Plague.Plague23_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="280" onClick={ Plague.Plague24_1_lg === true ? () => setPlague({ ...Plague, Plague24_1_lg: !Plague.Plague24_1_lg, Plague_total_24: Plague.Plague_total_24 - 1}) : () => setPlague({ ...Plague, Plague24_1_lg: !Plague.Plague24_1_lg, Plague_total_24: Plague.Plague_total_24 + 1})} className={Lock.t24 !== 2 ? (Plague.Plague24_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="281" onClick={ Plague.Plague24_2_lg === true ? () => setPlague({ ...Plague, Plague24_2_lg: !Plague.Plague24_2_lg, Plague_total_24: Plague.Plague_total_24 - 1}) : () => setPlague({ ...Plague, Plague24_2_lg: !Plague.Plague24_2_lg, Plague_total_24: Plague.Plague_total_24 + 1})} className={Lock.t24 !== 2 ? (Plague.Plague24_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="282" onClick={ Plague.Plague24_3_lg === true ? () => setPlague({ ...Plague, Plague24_3_lg: !Plague.Plague24_3_lg, Plague_total_24: Plague.Plague_total_24 - 1}) : () => setPlague({ ...Plague, Plague24_3_lg: !Plague.Plague24_3_lg, Plague_total_24: Plague.Plague_total_24 + 1})} className={Lock.t24 !== 2 ? (Plague.Plague24_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="283" onClick={ Plague.Plague25_1_lg === true ? () => setPlague({ ...Plague, Plague25_1_lg: !Plague.Plague25_1_lg, Plague_total_25: Plague.Plague_total_25 - 1}) : () => setPlague({ ...Plague, Plague25_1_lg: !Plague.Plague25_1_lg, Plague_total_25: Plague.Plague_total_25 + 1})} className={Lock.t25 !== 2 ? (Plague.Plague25_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="284" onClick={ Plague.Plague25_2_lg === true ? () => setPlague({ ...Plague, Plague25_2_lg: !Plague.Plague25_2_lg, Plague_total_25: Plague.Plague_total_25 - 1}) : () => setPlague({ ...Plague, Plague25_2_lg: !Plague.Plague25_2_lg, Plague_total_25: Plague.Plague_total_25 + 1})} className={Lock.t25 !== 2 ? (Plague.Plague25_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="285" onClick={ Plague.Plague25_3_lg === true ? () => setPlague({ ...Plague, Plague25_3_lg: !Plague.Plague25_3_lg, Plague_total_25: Plague.Plague_total_25 - 1}) : () => setPlague({ ...Plague, Plague25_3_lg: !Plague.Plague25_3_lg, Plague_total_25: Plague.Plague_total_25 + 1})} className={Lock.t25 !== 2 ? (Plague.Plague25_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="286" onClick={ Plague.Plague26_1_lg === true ? () => setPlague({ ...Plague, Plague26_1_lg: !Plague.Plague26_1_lg, Plague_total_26: Plague.Plague_total_26 - 1}) : () => setPlague({ ...Plague, Plague26_1_lg: !Plague.Plague26_1_lg, Plague_total_26: Plague.Plague_total_26 + 1})} className={Lock.t26 !== 2 ? (Plague.Plague26_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="287" onClick={ Plague.Plague26_2_lg === true ? () => setPlague({ ...Plague, Plague26_2_lg: !Plague.Plague26_2_lg, Plague_total_26: Plague.Plague_total_26 - 1}) : () => setPlague({ ...Plague, Plague26_2_lg: !Plague.Plague26_2_lg, Plague_total_26: Plague.Plague_total_26 + 1})} className={Lock.t26 !== 2 ? (Plague.Plague26_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="288" onClick={ Plague.Plague26_3_lg === true ? () => setPlague({ ...Plague, Plague26_3_lg: !Plague.Plague26_3_lg, Plague_total_26: Plague.Plague_total_26 - 1}) : () => setPlague({ ...Plague, Plague26_3_lg: !Plague.Plague26_3_lg, Plague_total_26: Plague.Plague_total_26 + 1})} className={Lock.t26 !== 2 ? (Plague.Plague26_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="289" onClick={ Plague.Plague27_1_lg === true ? () => setPlague({ ...Plague, Plague27_1_lg: !Plague.Plague27_1_lg, Plague_total_27: Plague.Plague_total_27 - 1}) : () => setPlague({ ...Plague, Plague27_1_lg: !Plague.Plague27_1_lg, Plague_total_27: Plague.Plague_total_27 + 1})} className={Lock.t27 !== 2 ? (Plague.Plague27_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="290" onClick={ Plague.Plague27_2_lg === true ? () => setPlague({ ...Plague, Plague27_2_lg: !Plague.Plague27_2_lg, Plague_total_27: Plague.Plague_total_27 - 1}) : () => setPlague({ ...Plague, Plague27_2_lg: !Plague.Plague27_2_lg, Plague_total_27: Plague.Plague_total_27 + 1})} className={Lock.t27 !== 2 ? (Plague.Plague27_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="291" onClick={ Plague.Plague27_3_lg === true ? () => setPlague({ ...Plague, Plague27_3_lg: !Plague.Plague27_3_lg, Plague_total_27: Plague.Plague_total_27 - 1}) : () => setPlague({ ...Plague, Plague27_3_lg: !Plague.Plague27_3_lg, Plague_total_27: Plague.Plague_total_27 + 1})} className={Lock.t27 !== 2 ? (Plague.Plague27_3_lg ? classes.small_btn_3_Plague : classes.small_btn_3) : classes.disable_furcation}  /></div></PlagueTableCell>
            <PlagueTableCell align="center"><div className={classes.small_btn}><PlagueButton tabIndex="292" onClick={ Plague.Plague28_1_lg === true ? () => setPlague({ ...Plague, Plague28_1_lg: !Plague.Plague28_1_lg, Plague_total_28: Plague.Plague_total_28 - 1}) : () => setPlague({ ...Plague, Plague28_1_lg: !Plague.Plague28_1_lg, Plague_total_28: Plague.Plague_total_28 + 1})} className={Lock.t28 !== 2 ? (Plague.Plague28_1_lg ? classes.small_btn_1_Plague : classes.small_btn_1) : classes.disable_furcation}  /><PlagueButton tabIndex="293" onClick={ Plague.Plague28_2_lg === true ? () => setPlague({ ...Plague, Plague28_2_lg: !Plague.Plague28_2_lg, Plague_total_28: Plague.Plague_total_28 - 1}) : () => setPlague({ ...Plague, Plague28_2_lg: !Plague.Plague28_2_lg, Plague_total_28: Plague.Plague_total_28 + 1})} className={Lock.t28 !== 2 ? (Plague.Plague28_2_lg ? classes.small_btn_2_Plague : classes.small_btn_2) : classes.disable_furcation}  /><PlagueButton tabIndex="294" onClick={ Plague.Plague28_3_lg === true ? () => setPlague({ ...Plague, Plague28_3_lg: !Plague.Plague28_3_lg, Plague_total_28: Plague.Plague_total_28 - 1}) : () => setPlague({ ...Plague, Plague28_3_lg: !Plague.Plague28_3_lg, Plague_total_28: Plague.Plague_total_28 + 1})} className={Lock.t28 !== 2 ? (Plague.Plague28_3_lg ? classes.small_btn_3_Plague_lst : classes.small_btn_3_lst) : classes.disable_furcation}  /></div></PlagueTableCell>
        </TableRow>
        <TableRow>
        <ImgCell className={classes.img_change} onClick={Lock.t21 === 0 ? () => setLock({ ...Lock, t21: 1}): Lock.t21 === 1 ? dataLocker21 : () => setLock({ ...Lock, t21: 0})}><img src={Lock.t21 === 0 ? process.env.PUBLIC_URL + 'Teeth/21b.png': Lock.t21 === 1 ? process.env.PUBLIC_URL + 'Teeth/21bi.png': process.env.PUBLIC_URL + 'Teeth/21bx.png'} className={classes.tooth_img_21b} />
                      <svg className={Lock.t21 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_21_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t21 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_21_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t21 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_21_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t21 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_21_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t21 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_21_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t21 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_21_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
            </ImgCell>
            <ImgCell className={classes.img_change} onClick={Lock.t22 === 0 ? () => setLock({ ...Lock, t22: 1}): Lock.t22 === 1 ? dataLocker22 : () => setLock({ ...Lock, t22: 0})}><img src={Lock.t22 === 0 ? process.env.PUBLIC_URL + 'Teeth/22b.png': Lock.t22 === 1 ? process.env.PUBLIC_URL + 'Teeth/22bi.png': process.env.PUBLIC_URL + 'Teeth/22bx.png'} className={classes.tooth_img_22b} />
                      <svg className={Lock.t22 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_22_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t22 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_22_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t22 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_22_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t22 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_22_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t22 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_22_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t22 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_22_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={Lock.t23 === 0 ? () => setLock({ ...Lock, t23: 1}): Lock.t23 === 1 ? dataLocker23 : () => setLock({ ...Lock, t23: 0})}><img src={Lock.t23 === 0 ? process.env.PUBLIC_URL + 'Teeth/23b.png': Lock.t23 === 1 ? process.env.PUBLIC_URL + 'Teeth/23bi.png': process.env.PUBLIC_URL + 'Teeth/23bx.png'} className={classes.tooth_img_23b} />
                      <svg className={Lock.t23 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_23_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t23 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_23_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t23 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_23_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t23 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_23_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t23 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_23_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t23 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_23_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick = { Lock.t24 === 0 ? implantLocker24 : Lock.t24 === 1 ? dataLocker24 : () => setLock({ ...Lock, t24: 0})}><img src={Lock.t24 === 0 ? process.env.PUBLIC_URL + 'Teeth/24b.png': Lock.t24 === 1 ? process.env.PUBLIC_URL + 'Teeth/24bi.png': process.env.PUBLIC_URL + 'Teeth/24bx.png'} className={classes.tooth_img_24b} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t24 === 0 && Furc.FurcCount24b === 1 ? classes.furc_img_24_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t24 === 0 && Furc.FurcCount24b === 2 ? classes.furc_img_24_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t24 === 0 && Furc.FurcCount24b === 3 ? classes.furc_img_24_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t24 === 0 && Furc.FurcCount24br === 1 ? classes.furc_img_24_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t24 === 0 && Furc.FurcCount24br === 2 ? classes.furc_img_24_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t24 === 0 && Furc.FurcCount24br === 3 ? classes.furc_img_24_r: classes.disabled}/>
                      <svg className={Lock.t24 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_24_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t24 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_24_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t24 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_24_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t24 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_24_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t24 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_24_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t24 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_24_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>            
          <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={Lock.t25 === 0 ? () => setLock({ ...Lock, t25: 1}): Lock.t25 === 1 ? dataLocker25 : () => setLock({ ...Lock, t25: 0})}><img src={Lock.t25 === 0 ? process.env.PUBLIC_URL + 'Teeth/25b.png': Lock.t25 === 1 ? process.env.PUBLIC_URL + 'Teeth/25bi.png': process.env.PUBLIC_URL + 'Teeth/25bx.png'} className={classes.tooth_img_25b} />
                      <svg className={Lock.t25 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_25_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t25 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_25_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t25 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_25_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t25 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_25_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t25 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_25_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t25 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_25_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t26 === 0 ? implantLocker26 : Lock.t26 === 1 ? dataLocker26 : () => setLock({ ...Lock, t26: 0})}><img src={Lock.t26 === 0 ? process.env.PUBLIC_URL + 'Teeth/26b.png': Lock.t26 === 1 ? process.env.PUBLIC_URL + 'Teeth/26bi.png': process.env.PUBLIC_URL + 'Teeth/26bx.png'} className={classes.tooth_img_26b} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t26 === 0 && Furc.FurcCount26b === 1 ? classes.furc_img_26_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t26 === 0 && Furc.FurcCount26b === 2 ? classes.furc_img_26_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t26 === 0 && Furc.FurcCount26b === 3 ? classes.furc_img_26_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t26 === 0 && Furc.FurcCount26br === 1 ? classes.furc_img_26_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t26 === 0 && Furc.FurcCount26br === 2 ? classes.furc_img_26_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t26 === 0 && Furc.FurcCount26br === 3 ? classes.furc_img_26_r: classes.disabled}/>
                      <svg className={Lock.t26 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_26_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t26 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_26_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t26 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_26_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t26 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_26_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t26 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_26_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t26 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_26_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t27 === 0 ? implantLocker27 : Lock.t27 === 1 ? dataLocker27 : () => setLock({ ...Lock, t27: 0})}><img src={Lock.t27 === 0 ? process.env.PUBLIC_URL + 'Teeth/27b.png': Lock.t27 === 1 ? process.env.PUBLIC_URL + 'Teeth/27bi.png': process.env.PUBLIC_URL + 'Teeth/27bx.png'} className={classes.tooth_img_27b} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t27 === 0 && Furc.FurcCount27b === 1 ? classes.furc_img_27_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t27 === 0 && Furc.FurcCount27b === 2 ? classes.furc_img_27_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t27 === 0 && Furc.FurcCount27b === 3 ? classes.furc_img_27_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t27 === 0 && Furc.FurcCount27br === 1 ? classes.furc_img_27_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t27 === 0 && Furc.FurcCount27br === 2 ? classes.furc_img_27_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t27 === 0 && Furc.FurcCount27br === 3 ? classes.furc_img_27_r: classes.disabled}/>
                      <svg className={Lock.t27 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_27_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t27 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_27_lg" x1="60" y1="74" x2="78" y2="74" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none"/></svg>
                      <svg className={Lock.t27 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_27_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t27 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_27_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t27 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_27_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t27 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_27_attachment_lg" x1="60" y1="74" x2="78" y2="74" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" overflow="visible"/></svg>
            <ToothLines2 />
          </ImgCell>
          <ImgCell className={classes.img_change} onClick={ Lock.t28 === 0 ? implantLocker28 : Lock.t28 === 1 ? dataLocker28 : () => setLock({ ...Lock, t28: 0})}><img src={Lock.t28 === 0 ? process.env.PUBLIC_URL + 'Teeth/28b.png': Lock.t28 === 1 ? process.env.PUBLIC_URL + 'Teeth/28bi.png': process.env.PUBLIC_URL + 'Teeth/28bx.png'} className={classes.tooth_img_28b} />
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t28 === 0 && Furc.FurcCount28b === 1 ? classes.furc_img_28_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t28 === 0 && Furc.FurcCount28b === 2 ? classes.furc_img_28_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t28 === 0 && Furc.FurcCount28b === 3 ? classes.furc_img_28_l: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Empty.svg'} className={Lock.t28 === 0 && Furc.FurcCount28br === 1 ? classes.furc_img_28_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Half.svg'} className={Lock.t28 === 0 && Furc.FurcCount28br === 2 ? classes.furc_img_28_r: classes.disabled}/>
                      <img src={process.env.PUBLIC_URL + 'Teeth/Furcation_Full.svg'} className={Lock.t28 === 0 && Furc.FurcCount28br === 3 ? classes.furc_img_28_r: classes.disabled}/>
                      <svg className={Lock.t28 !== 2 ? classes.gingivalLine : classes.disable_line}><polyline id ="polyline_28_lg" stroke="#af1058" strokeWidth="4px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74"/></svg>
                      <svg className={Lock.t28 !== 2 ? classes.gingivalLine : classes.disable_line}><line id="line_28_lg" display="none"/></svg>
                      <svg className={Lock.t28 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="polygon_28_lg" stroke="none" fillOpacity="0.3" fill="#E3498E" points="9, 74 34.5,74 60,74 9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t28 !== 2 ? classes.pocketAtt : classes.disable_line}><polyline id ="polyline_28_attachment_lg" stroke="#E3498E" strokeWidth="2px" strokeOpacity="1" fill="none" points="9, 74 34.5,74 60,74" overflow="visible"/></svg>
                      <svg className={Lock.t28 !== 2 ? classes.pocketAtt : classes.disable_line}><polygon id ="interpoly_28_lg" display="none"/></svg>
                      <svg className={Lock.t28 !== 2 ? classes.pocketAtt : classes.disable_line}><line id ="interline_28_attachment_lg" display="none"/></svg>
            <ToothLines2 />
          </ImgCell>
          
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="319" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t21_1_lg > 15 || GM.t21_1_lg < (-10) ? gmLimit21() : GM.t21_1_lg} onChange={(e) => setGM({...GM, t21_1_lg: e.target.value})} className={Lock.t21 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="320" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t21_2_lg > 15 || GM.t21_2_lg < (-10) ? gmLimit21() : GM.t21_2_lg} onChange={(e) => setGM({...GM, t21_2_lg: e.target.value})}  className={Lock.t21 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="321" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t21_3_lg > 15 || GM.t21_3_lg < (-10) ? gmLimit21() : GM.t21_3_lg} onChange={(e) => setGM({...GM, t21_3_lg: e.target.value})} className={Lock.t21 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="322" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t22_1_lg > 15 || GM.t22_1_lg < (-10) ? gmLimit22() : GM.t22_1_lg} onChange={(e) => setGM({...GM, t22_1_lg: e.target.value})} className={Lock.t22 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="323" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t22_2_lg > 15 || GM.t22_2_lg < (-10) ? gmLimit22() : GM.t22_2_lg} onChange={(e) => setGM({...GM, t22_2_lg: e.target.value})}  className={Lock.t22 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="324" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t22_3_lg > 15 || GM.t22_3_lg < (-10) ? gmLimit22() : GM.t22_3_lg} onChange={(e) => setGM({...GM, t22_3_lg: e.target.value})} className={Lock.t22 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="325" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t23_1_lg > 15 || GM.t23_1_lg < (-10) ? gmLimit23() : GM.t23_1_lg} onChange={(e) => setGM({...GM, t23_1_lg: e.target.value})} className={Lock.t23 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="326" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t23_2_lg > 15 || GM.t23_2_lg < (-10) ? gmLimit23() : GM.t23_2_lg} onChange={(e) => setGM({...GM, t23_2_lg: e.target.value})}  className={Lock.t23 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="327" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t23_3_lg > 15 || GM.t23_3_lg < (-10) ? gmLimit23() : GM.t23_3_lg} onChange={(e) => setGM({...GM, t23_3_lg: e.target.value})} className={Lock.t23 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="328" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t24_1_lg > 15 || GM.t24_1_lg < (-10) ? gmLimit24() : GM.t24_1_lg} onChange={(e) => setGM({...GM, t24_1_lg: e.target.value})} className={Lock.t24 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="329" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t24_2_lg > 15 || GM.t24_2_lg < (-10) ? gmLimit24() : GM.t24_2_lg} onChange={(e) => setGM({...GM, t24_2_lg: e.target.value})}  className={Lock.t24 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="330" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t24_3_lg > 15 || GM.t24_3_lg < (-10) ? gmLimit24() : GM.t24_3_lg} onChange={(e) => setGM({...GM, t24_3_lg: e.target.value})} className={Lock.t24 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="331" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t25_1_lg > 15 || GM.t25_1_lg < (-10) ? gmLimit25() : GM.t25_1_lg} onChange={(e) => setGM({...GM, t25_1_lg: e.target.value})} className={Lock.t25 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="332" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t25_2_lg > 15 || GM.t25_2_lg < (-10) ? gmLimit25() : GM.t25_2_lg} onChange={(e) => setGM({...GM, t25_2_lg: e.target.value})}  className={Lock.t25 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="333" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t25_3_lg > 15 || GM.t25_3_lg < (-10) ? gmLimit25() : GM.t25_3_lg} onChange={(e) => setGM({...GM, t25_3_lg: e.target.value})} className={Lock.t25 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="334" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t26_1_lg > 15 || GM.t26_1_lg < (-10) ? gmLimit26() : GM.t26_1_lg} onChange={(e) => setGM({...GM, t26_1_lg: e.target.value})} className={Lock.t26 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="335" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t26_2_lg > 15 || GM.t26_2_lg < (-10) ? gmLimit26() : GM.t26_2_lg} onChange={(e) => setGM({...GM, t26_2_lg: e.target.value})}  className={Lock.t26 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="336" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t26_3_lg > 15 || GM.t26_3_lg < (-10) ? gmLimit26() : GM.t26_3_lg} onChange={(e) => setGM({...GM, t26_3_lg: e.target.value})} className={Lock.t26 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="337" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t27_1_lg > 15 || GM.t27_1_lg < (-10) ? gmLimit27() : GM.t27_1_lg} onChange={(e) => setGM({...GM, t27_1_lg: e.target.value})} className={Lock.t27 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="338" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t27_2_lg > 15 || GM.t27_2_lg < (-10) ? gmLimit27() : GM.t27_2_lg} onChange={(e) => setGM({...GM, t27_2_lg: e.target.value})}  className={Lock.t27 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="339" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t27_3_lg > 15 || GM.t27_3_lg < (-10) ? gmLimit27() : GM.t27_3_lg} onChange={(e) => setGM({...GM, t27_3_lg: e.target.value})} className={Lock.t27 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="340" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t28_1_lg > 15 || GM.t28_1_lg < (-10) ? gmLimit28() : GM.t28_1_lg} onChange={(e) => setGM({...GM, t28_1_lg: e.target.value})} className={Lock.t28 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="341" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t28_2_lg > 15 || GM.t28_2_lg < (-10) ? gmLimit28() : GM.t28_2_lg} onChange={(e) => setGM({...GM, t28_2_lg: e.target.value})}  className={Lock.t28 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="342" onFocus={handleChange} onFocusCapture={handleChange} min = "-10" max="15" type="number" value={GM.t28_3_lg > 15 || GM.t28_3_lg < (-10) ? gmLimit28() : GM.t28_3_lg} onChange={(e) => setGM({...GM, t28_3_lg: e.target.value})} className={Lock.t28 !== 2 ? "input_gingival_probing" : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
            
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><input tabIndex="367" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p21_1_lg > 15 || Probe.p21_1_lg < 0 ? ProbeLimit21() : Probe.p21_1_lg} onChange={(e) => setProbe({...Probe, p21_1_lg: e.target.value})} className={Lock.t21 !== 2 ? (((Probe.p21_1_lg == 4 && BoP.BoP21_1_lg) || Probe.p21_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="368" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p21_2_lg > 15 || Probe.p21_2_lg < 0 ? ProbeLimit21() : Probe.p21_2_lg} onChange={(e) => setProbe({...Probe, p21_2_lg: e.target.value})}  className={Lock.t21 !== 2 ? (((Probe.p21_2_lg == 4 && BoP.BoP21_2_lg) || Probe.p21_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="369" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p21_3_lg > 15 || Probe.p21_3_lg < 0 ? ProbeLimit21() : Probe.p21_3_lg} onChange={(e) => setProbe({...Probe, p21_3_lg: e.target.value})} className={Lock.t21 !== 2 ? (((Probe.p21_3_lg == 4 && BoP.BoP21_3_lg) || Probe.p21_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="370" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p22_1_lg > 15 || Probe.p22_1_lg < 0 ? ProbeLimit22() : Probe.p22_1_lg} onChange={(e) => setProbe({...Probe, p22_1_lg: e.target.value})} className={Lock.t22 !== 2 ? (((Probe.p22_1_lg == 4 && BoP.BoP22_1_lg) || Probe.p22_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="371" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p22_2_lg > 15 || Probe.p22_2_lg < 0 ? ProbeLimit22() : Probe.p22_2_lg} onChange={(e) => setProbe({...Probe, p22_2_lg: e.target.value})}  className={Lock.t22 !== 2 ? (((Probe.p22_2_lg == 4 && BoP.BoP22_2_lg) || Probe.p22_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="372" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p22_3_lg > 15 || Probe.p22_3_lg < 0 ? ProbeLimit22() : Probe.p22_3_lg} onChange={(e) => setProbe({...Probe, p22_3_lg: e.target.value})} className={Lock.t22 !== 2 ? (((Probe.p22_3_lg == 4 && BoP.BoP22_3_lg) || Probe.p22_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="373" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p23_1_lg > 15 || Probe.p23_1_lg < 0 ? ProbeLimit23() : Probe.p23_1_lg} onChange={(e) => setProbe({...Probe, p23_1_lg: e.target.value})} className={Lock.t23 !== 2 ? (((Probe.p23_1_lg == 4 && BoP.BoP23_1_lg) || Probe.p23_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="374" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p23_2_lg > 15 || Probe.p23_2_lg < 0 ? ProbeLimit23() : Probe.p23_2_lg} onChange={(e) => setProbe({...Probe, p23_2_lg: e.target.value})}  className={Lock.t23 !== 2 ? (((Probe.p23_2_lg == 4 && BoP.BoP23_2_lg) || Probe.p23_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="375" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p23_3_lg > 15 || Probe.p23_3_lg < 0 ? ProbeLimit23() : Probe.p23_3_lg} onChange={(e) => setProbe({...Probe, p23_3_lg: e.target.value})} className={Lock.t23 !== 2 ? (((Probe.p23_3_lg == 4 && BoP.BoP23_3_lg) || Probe.p23_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="376" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p24_1_lg > 15 || Probe.p24_1_lg < 0 ? ProbeLimit24() : Probe.p24_1_lg} onChange={(e) => setProbe({...Probe, p24_1_lg: e.target.value})} className={Lock.t24 !== 2 ? (((Probe.p24_1_lg == 4 && BoP.BoP24_1_lg) || Probe.p24_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="377" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p24_2_lg > 15 || Probe.p24_2_lg < 0 ? ProbeLimit24() : Probe.p24_2_lg} onChange={(e) => setProbe({...Probe, p24_2_lg: e.target.value})}  className={Lock.t24 !== 2 ? (((Probe.p24_2_lg == 4 && BoP.BoP24_2_lg) || Probe.p24_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="378" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p24_3_lg > 15 || Probe.p24_3_lg < 0 ? ProbeLimit24() : Probe.p24_3_lg} onChange={(e) => setProbe({...Probe, p24_3_lg: e.target.value})} className={Lock.t24 !== 2 ? (((Probe.p24_3_lg == 4 && BoP.BoP24_3_lg) || Probe.p24_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="379" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p25_1_lg > 15 || Probe.p25_1_lg < 0 ? ProbeLimit25() : Probe.p25_1_lg} onChange={(e) => setProbe({...Probe, p25_1_lg: e.target.value})} className={Lock.t25 !== 2 ? (((Probe.p25_1_lg == 4 && BoP.BoP25_1_lg) || Probe.p25_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="380" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p25_2_lg > 15 || Probe.p25_2_lg < 0 ? ProbeLimit25() : Probe.p25_2_lg} onChange={(e) => setProbe({...Probe, p25_2_lg: e.target.value})}  className={Lock.t25 !== 2 ? (((Probe.p25_2_lg == 4 && BoP.BoP25_2_lg) || Probe.p25_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="381" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p25_3_lg > 15 || Probe.p25_3_lg < 0 ? ProbeLimit25() : Probe.p25_3_lg} onChange={(e) => setProbe({...Probe, p25_3_lg: e.target.value})} className={Lock.t25 !== 2 ? (((Probe.p25_3_lg == 4 && BoP.BoP25_3_lg) || Probe.p25_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="382" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p26_1_lg > 15 || Probe.p26_1_lg < 0 ? ProbeLimit26() : Probe.p26_1_lg} onChange={(e) => setProbe({...Probe, p26_1_lg: e.target.value})} className={Lock.t26 !== 2 ? (((Probe.p26_1_lg == 4 && BoP.BoP26_1_lg) || Probe.p26_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="383" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p26_2_lg > 15 || Probe.p26_2_lg < 0 ? ProbeLimit26() : Probe.p26_2_lg} onChange={(e) => setProbe({...Probe, p26_2_lg: e.target.value})}  className={Lock.t26 !== 2 ? (((Probe.p26_2_lg == 4 && BoP.BoP26_2_lg) || Probe.p26_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="384" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p26_3_lg > 15 || Probe.p26_3_lg < 0 ? ProbeLimit26() : Probe.p26_3_lg} onChange={(e) => setProbe({...Probe, p26_3_lg: e.target.value})} className={Lock.t26 !== 2 ? (((Probe.p26_3_lg == 4 && BoP.BoP26_3_lg) || Probe.p26_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="385" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p27_1_lg > 15 || Probe.p27_1_lg < 0 ? ProbeLimit27() : Probe.p27_1_lg} onChange={(e) => setProbe({...Probe, p27_1_lg: e.target.value})} className={Lock.t27 !== 2 ? (((Probe.p27_1_lg == 4 && BoP.BoP27_1_lg) || Probe.p27_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1"/><input tabIndex="386" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p27_2_lg > 15 || Probe.p27_2_lg < 0 ? ProbeLimit27() : Probe.p27_2_lg} onChange={(e) => setProbe({...Probe, p27_2_lg: e.target.value})}  className={Lock.t27 !== 2 ? (((Probe.p27_2_lg == 4 && BoP.BoP27_2_lg) || Probe.p27_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2"/><input tabIndex="387" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p27_3_lg > 15 || Probe.p27_3_lg < 0 ? ProbeLimit27() : Probe.p27_3_lg} onChange={(e) => setProbe({...Probe, p27_3_lg: e.target.value})} className={Lock.t27 !== 2 ? (((Probe.p27_3_lg == 4 && BoP.BoP27_3_lg) || Probe.p27_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3"/></StyledTableCell>
            <StyledTableCell align="center"><input tabIndex="388" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p28_1_lg > 15 || Probe.p28_1_lg < 0 ? ProbeLimit28() : Probe.p28_1_lg} onChange={(e) => setProbe({...Probe, p28_1_lg: e.target.value})} className={Lock.t28 !== 2 ? (((Probe.p28_1_lg == 4 && BoP.BoP28_1_lg) || Probe.p28_1_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_1_lst"/><input tabIndex="389" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p28_2_lg > 15 || Probe.p28_2_lg < 0 ? ProbeLimit28() : Probe.p28_2_lg} onChange={(e) => setProbe({...Probe, p28_2_lg: e.target.value})}  className={Lock.t28 !== 2 ? (((Probe.p28_2_lg == 4 && BoP.BoP28_2_lg) || Probe.p28_2_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_2_lst"/><input tabIndex="390" onFocus={handleChange} onFocusCapture={handleChange} min = "0" max="15" type="number" value={Probe.p28_3_lg > 15 || Probe.p28_3_lg < 0 ? ProbeLimit28() : Probe.p28_3_lg} onChange={(e) => setProbe({...Probe, p28_3_lg: e.target.value})} className={Lock.t28 !== 2 ? (((Probe.p28_3_lg == 4 && BoP.BoP28_3_lg) || Probe.p28_3_lg > 4) ? "input_gingival_probing_red" : "input_gingival_probing") : classes.disable_furcation} id="input_gingival_probing_3_lst"/></StyledTableCell>
            
        </TableRow>
        <TableRow>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="415" onClick={ BoP.BoP21_1_lg === true ? () => setBoP({ ...BoP, BoP21_1_lg: !BoP.BoP21_1_lg, BoP_total_21: BoP.BoP_total_21 - 1}) : () => setBoP({ ...BoP, BoP21_1_lg: !BoP.BoP21_1_lg, BoP_total_21: BoP.BoP_total_21 + 1})} className={Lock.t21 !== 2 ? (BoP.BoP21_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="416" onClick={ BoP.BoP21_2_lg === true ? () => setBoP({ ...BoP, BoP21_2_lg: !BoP.BoP21_2_lg, BoP_total_21: BoP.BoP_total_21 - 1}) : () => setBoP({ ...BoP, BoP21_2_lg: !BoP.BoP21_2_lg, BoP_total_21: BoP.BoP_total_21 + 1})} className={Lock.t21 !== 2 ? (BoP.BoP21_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="417" onClick={ BoP.BoP21_3_lg === true ? () => setBoP({ ...BoP, BoP21_3_lg: !BoP.BoP21_3_lg, BoP_total_21: BoP.BoP_total_21 - 1}) : () => setBoP({ ...BoP, BoP21_3_lg: !BoP.BoP21_3_lg, BoP_total_21: BoP.BoP_total_21 + 1})} className={Lock.t21 !== 2 ? (BoP.BoP21_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="418" onClick={ BoP.BoP22_1_lg === true ? () => setBoP({ ...BoP, BoP22_1_lg: !BoP.BoP22_1_lg, BoP_total_22: BoP.BoP_total_22 - 1}) : () => setBoP({ ...BoP, BoP22_1_lg: !BoP.BoP22_1_lg, BoP_total_22: BoP.BoP_total_22 + 1})} className={Lock.t22 !== 2 ? (BoP.BoP22_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="419" onClick={ BoP.BoP22_2_lg === true ? () => setBoP({ ...BoP, BoP22_2_lg: !BoP.BoP22_2_lg, BoP_total_22: BoP.BoP_total_22 - 1}) : () => setBoP({ ...BoP, BoP22_2_lg: !BoP.BoP22_2_lg, BoP_total_22: BoP.BoP_total_22 + 1})} className={Lock.t22 !== 2 ? (BoP.BoP22_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="420" onClick={ BoP.BoP22_3_lg === true ? () => setBoP({ ...BoP, BoP22_3_lg: !BoP.BoP22_3_lg, BoP_total_22: BoP.BoP_total_22 - 1}) : () => setBoP({ ...BoP, BoP22_3_lg: !BoP.BoP22_3_lg, BoP_total_22: BoP.BoP_total_22 + 1})} className={Lock.t22 !== 2 ? (BoP.BoP22_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="421" onClick={ BoP.BoP23_1_lg === true ? () => setBoP({ ...BoP, BoP23_1_lg: !BoP.BoP23_1_lg, BoP_total_23: BoP.BoP_total_23 - 1}) : () => setBoP({ ...BoP, BoP23_1_lg: !BoP.BoP23_1_lg, BoP_total_23: BoP.BoP_total_23 + 1})} className={Lock.t23 !== 2 ? (BoP.BoP23_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="422" onClick={ BoP.BoP23_2_lg === true ? () => setBoP({ ...BoP, BoP23_2_lg: !BoP.BoP23_2_lg, BoP_total_23: BoP.BoP_total_23 - 1}) : () => setBoP({ ...BoP, BoP23_2_lg: !BoP.BoP23_2_lg, BoP_total_23: BoP.BoP_total_23 + 1})} className={Lock.t23 !== 2 ? (BoP.BoP23_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="423" onClick={ BoP.BoP23_3_lg === true ? () => setBoP({ ...BoP, BoP23_3_lg: !BoP.BoP23_3_lg, BoP_total_23: BoP.BoP_total_23 - 1}) : () => setBoP({ ...BoP, BoP23_3_lg: !BoP.BoP23_3_lg, BoP_total_23: BoP.BoP_total_23 + 1})} className={Lock.t23 !== 2 ? (BoP.BoP23_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="424" onClick={ BoP.BoP24_1_lg === true ? () => setBoP({ ...BoP, BoP24_1_lg: !BoP.BoP24_1_lg, BoP_total_24: BoP.BoP_total_24 - 1}) : () => setBoP({ ...BoP, BoP24_1_lg: !BoP.BoP24_1_lg, BoP_total_24: BoP.BoP_total_24 + 1})} className={Lock.t24 !== 2 ? (BoP.BoP24_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="425" onClick={ BoP.BoP24_2_lg === true ? () => setBoP({ ...BoP, BoP24_2_lg: !BoP.BoP24_2_lg, BoP_total_24: BoP.BoP_total_24 - 1}) : () => setBoP({ ...BoP, BoP24_2_lg: !BoP.BoP24_2_lg, BoP_total_24: BoP.BoP_total_24 + 1})} className={Lock.t24 !== 2 ? (BoP.BoP24_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="426" onClick={ BoP.BoP24_3_lg === true ? () => setBoP({ ...BoP, BoP24_3_lg: !BoP.BoP24_3_lg, BoP_total_24: BoP.BoP_total_24 - 1}) : () => setBoP({ ...BoP, BoP24_3_lg: !BoP.BoP24_3_lg, BoP_total_24: BoP.BoP_total_24 + 1})} className={Lock.t24 !== 2 ? (BoP.BoP24_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="427" onClick={ BoP.BoP25_1_lg === true ? () => setBoP({ ...BoP, BoP25_1_lg: !BoP.BoP25_1_lg, BoP_total_25: BoP.BoP_total_25 - 1}) : () => setBoP({ ...BoP, BoP25_1_lg: !BoP.BoP25_1_lg, BoP_total_25: BoP.BoP_total_25 + 1})} className={Lock.t25 !== 2 ? (BoP.BoP25_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="428" onClick={ BoP.BoP25_2_lg === true ? () => setBoP({ ...BoP, BoP25_2_lg: !BoP.BoP25_2_lg, BoP_total_25: BoP.BoP_total_25 - 1}) : () => setBoP({ ...BoP, BoP25_2_lg: !BoP.BoP25_2_lg, BoP_total_25: BoP.BoP_total_25 + 1})} className={Lock.t25 !== 2 ? (BoP.BoP25_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="429" onClick={ BoP.BoP25_3_lg === true ? () => setBoP({ ...BoP, BoP25_3_lg: !BoP.BoP25_3_lg, BoP_total_25: BoP.BoP_total_25 - 1}) : () => setBoP({ ...BoP, BoP25_3_lg: !BoP.BoP25_3_lg, BoP_total_25: BoP.BoP_total_25 + 1})} className={Lock.t25 !== 2 ? (BoP.BoP25_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="430" onClick={ BoP.BoP26_1_lg === true ? () => setBoP({ ...BoP, BoP26_1_lg: !BoP.BoP26_1_lg, BoP_total_26: BoP.BoP_total_26 - 1}) : () => setBoP({ ...BoP, BoP26_1_lg: !BoP.BoP26_1_lg, BoP_total_26: BoP.BoP_total_26 + 1})} className={Lock.t26 !== 2 ? (BoP.BoP26_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="431" onClick={ BoP.BoP26_2_lg === true ? () => setBoP({ ...BoP, BoP26_2_lg: !BoP.BoP26_2_lg, BoP_total_26: BoP.BoP_total_26 - 1}) : () => setBoP({ ...BoP, BoP26_2_lg: !BoP.BoP26_2_lg, BoP_total_26: BoP.BoP_total_26 + 1})} className={Lock.t26 !== 2 ? (BoP.BoP26_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="432" onClick={ BoP.BoP26_3_lg === true ? () => setBoP({ ...BoP, BoP26_3_lg: !BoP.BoP26_3_lg, BoP_total_26: BoP.BoP_total_26 - 1}) : () => setBoP({ ...BoP, BoP26_3_lg: !BoP.BoP26_3_lg, BoP_total_26: BoP.BoP_total_26 + 1})} className={Lock.t26 !== 2 ? (BoP.BoP26_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="433" onClick={ BoP.BoP27_1_lg === true ? () => setBoP({ ...BoP, BoP27_1_lg: !BoP.BoP27_1_lg, BoP_total_27: BoP.BoP_total_27 - 1}) : () => setBoP({ ...BoP, BoP27_1_lg: !BoP.BoP27_1_lg, BoP_total_27: BoP.BoP_total_27 + 1})} className={Lock.t27 !== 2 ? (BoP.BoP27_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="434" onClick={ BoP.BoP27_2_lg === true ? () => setBoP({ ...BoP, BoP27_2_lg: !BoP.BoP27_2_lg, BoP_total_27: BoP.BoP_total_27 - 1}) : () => setBoP({ ...BoP, BoP27_2_lg: !BoP.BoP27_2_lg, BoP_total_27: BoP.BoP_total_27 + 1})} className={Lock.t27 !== 2 ? (BoP.BoP27_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="435" onClick={ BoP.BoP27_3_lg === true ? () => setBoP({ ...BoP, BoP27_3_lg: !BoP.BoP27_3_lg, BoP_total_27: BoP.BoP_total_27 - 1}) : () => setBoP({ ...BoP, BoP27_3_lg: !BoP.BoP27_3_lg, BoP_total_27: BoP.BoP_total_27 + 1})} className={Lock.t27 !== 2 ? (BoP.BoP27_3_lg ? classes.small_btn_3_bop : classes.small_btn_3) : classes.disable_furcation}  /></div></StyledTableCell>
            <StyledTableCell align="center"><div className={classes.small_btn}><StyledButton tabIndex="436" onClick={ BoP.BoP28_1_lg === true ? () => setBoP({ ...BoP, BoP28_1_lg: !BoP.BoP28_1_lg, BoP_total_28: BoP.BoP_total_28 - 1}) : () => setBoP({ ...BoP, BoP28_1_lg: !BoP.BoP28_1_lg, BoP_total_28: BoP.BoP_total_28 + 1})} className={Lock.t28 !== 2 ? (BoP.BoP28_1_lg ? classes.small_btn_1_bop : classes.small_btn_1) : classes.disable_furcation}  /><StyledButton tabIndex="437" onClick={ BoP.BoP28_2_lg === true ? () => setBoP({ ...BoP, BoP28_2_lg: !BoP.BoP28_2_lg, BoP_total_28: BoP.BoP_total_28 - 1}) : () => setBoP({ ...BoP, BoP28_2_lg: !BoP.BoP28_2_lg, BoP_total_28: BoP.BoP_total_28 + 1})} className={Lock.t28 !== 2 ? (BoP.BoP28_2_lg ? classes.small_btn_2_bop : classes.small_btn_2) : classes.disable_furcation}  /><StyledButton tabIndex="438" onClick={ BoP.BoP28_3_lg === true ? () => setBoP({ ...BoP, BoP28_3_lg: !BoP.BoP28_3_lg, BoP_total_28: BoP.BoP_total_28 - 1}) : () => setBoP({ ...BoP, BoP28_3_lg: !BoP.BoP28_3_lg, BoP_total_28: BoP.BoP_total_28 + 1})} className={Lock.t28 !== 2 ? (BoP.BoP28_3_lg ? classes.small_btn_3_bop_lst : classes.small_btn_3_lst) : classes.disable_furcation}  /></div></StyledTableCell>
            
        </TableRow>
        <TableRow>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell align="center"><div className={classes.medium_btn}><div className="vl"></div>
          <StyledButton tabIndex="447" onClick={furc_flow24b()} className={Lock.t24 !== 0 ? classes.disable_furcation: classes.medium_btn_1}>
            <a className={Furc.FurcCount24b === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
            <a className={Furc.FurcCount24b === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
            <a className={Furc.FurcCount24b === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton>
          <StyledButton tabIndex="448" onClick={furc_flow24br()} className={Lock.t24 !== 0 ? classes.disable_furcation: classes.medium_btn_2}>
            <a className={Furc.FurcCount24br === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
            <a className={Furc.FurcCount24br === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
            <a className={Furc.FurcCount24br === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton></div>
          </StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell align="center"><div className={classes.medium_btn}><div className="vl"></div>
          <StyledButton tabIndex="449" onClick={furc_flow26b()} className={Lock.t26 !== 0 ? classes.disable_furcation: classes.medium_btn_1}>
            <a className={Furc.FurcCount26b === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
            <a className={Furc.FurcCount26b === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
            <a className={Furc.FurcCount26b === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton>
          <StyledButton tabIndex="450" onClick={furc_flow26br()} className={Lock.t26 !== 0 ? classes.disable_furcation: classes.medium_btn_2}>
            <a className={Furc.FurcCount26br === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
            <a className={Furc.FurcCount26br === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
            <a className={Furc.FurcCount26br === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton></div>
          </StyledTableCell>
          <StyledTableCell align="center"><div className={classes.medium_btn}><div className="vl"></div>
          <StyledButton tabIndex="451" onClick={furc_flow27b()} className={Lock.t27 !== 0 ? classes.disable_furcation: classes.medium_btn_1}>
            <a className={Furc.FurcCount27b === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
            <a className={Furc.FurcCount27b === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
            <a className={Furc.FurcCount27b === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton>
          <StyledButton tabIndex="452" onClick={furc_flow27br()} className={Lock.t27 !== 0 ? classes.disable_furcation: classes.medium_btn_2}>
            <a className={Furc.FurcCount27br === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
            <a className={Furc.FurcCount27br === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
            <a className={Furc.FurcCount27br === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton></div>
          </StyledTableCell>
          <StyledTableCell align="center"><div className={classes.medium_btn}><div className="vl"></div>
          <StyledButton tabIndex="453" onClick={furc_flow28b()} className={Lock.t28 !== 0 ? classes.disable_furcation: classes.medium_btn_1}>
            <a className={Furc.FurcCount28b === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
            <a className={Furc.FurcCount28b === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
            <a className={Furc.FurcCount28b === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton>
          <StyledButton tabIndex="454" onClick={furc_flow28br()} className={Lock.t28 !== 0 ? classes.disable_furcation: classes.medium_btn_2_lst}>
            <a className={Furc.FurcCount28br === 1 ? classes.furc_roman: classes.disabled}>Ⅰ</a>
            <a className={Furc.FurcCount28br === 2 ? classes.furc_roman: classes.disabled}>ⅠⅠ</a>
            <a className={Furc.FurcCount28br === 3 ? classes.furc_roman: classes.disabled}>ⅠⅠⅠ</a>
          </StyledButton></div>
          </StyledTableCell>
                
        </TableRow>
        </TableBody>
        <TableHead>
        <TableRow>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t21 !== 2 ? dataLocker21 : () => setLock({ ...Lock, t21: 0})}>21</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t22 !== 2 ? dataLocker22 : () => setLock({ ...Lock, t22: 0})}>22</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t23 !== 2 ? dataLocker23 : () => setLock({ ...Lock, t23: 0})}>23</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t24 !== 2 ? dataLocker24 : () => setLock({ ...Lock, t24: 0})}>24</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t25 !== 2 ? dataLocker25 : () => setLock({ ...Lock, t25: 0})}>25</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t26 !== 2 ? dataLocker26 : () => setLock({ ...Lock, t26: 0})}>26</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t27 !== 2 ? dataLocker27 : () => setLock({ ...Lock, t27: 0})}>27</StyledTableCell>
            <StyledTableCell align="center" className={classes.second_half} onClick={ Lock.t28 !== 2 ? dataLocker28 : () => setLock({ ...Lock, t28: 0})}>28</StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
    </StyledContainer2>
    </div>
    </div>
    <ChartLower printableVersion={printableVersion} dataBoP1={totBoP} dataPlague1={totPlague} dataDS1={deepSides()} lock18={Lock.t18} lock17={Lock.t17} lock16={Lock.t16} lock15={Lock.t15} lock14={Lock.t14} lock13={Lock.t13} lock12={Lock.t12} lock11={Lock.t11}
     lock28={Lock.t28} lock27={Lock.t27} lock26={Lock.t26} lock25={Lock.t25} lock24={Lock.t24} lock23={Lock.t23} lock22={Lock.t22} lock21={Lock.t21}/>
    </div>
    </PerioContainer>
  );
  
}


