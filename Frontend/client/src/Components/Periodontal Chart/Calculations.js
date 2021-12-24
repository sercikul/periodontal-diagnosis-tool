import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed, variable, subtitle } = props;

    const alignment = {
        float: 'left',
        marginTop: 100,
        marginLeft: 240,
        textAlign: 'center',
    }
  
    const containerStyles = {
      height: 20,
      width: '250%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50, 
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: bgcolor,
      position: 'absolute',
      marginLeft: 125,
      marginTop: -4,
      fontWeight: 'bold'
    }

    const contHeader = {
        padding: 15,
        color: bgcolor,
        position: 'absolute',
        fontWeight: 'bold',
        margin: '0px auto',
        textAlign: 'left',
        minWidth: 200,
        marginLeft: -9
      }

      const subTitle = {
        padding: 7,
        color: bgcolor,
        fontSize: '9px',
        position: 'absolute',
        fontWeight: 'bold',
        margin: '0px auto',
        textAlign: 'left',
        minWidth: 300, 
        marginRight: -40
      }

      const progressContainer = {
          marginLeft: -120
      }
  
    return (
        <div style={progressContainer}>
        <div style={alignment}>
            <a style={contHeader}>{`${variable}`} <span style ={subTitle}>{`${subtitle}`}</span></a>
            <div style={containerStyles}>
            <a style={labelStyles}>{`${completed}%`}</a>
                <div style={fillerStyles}>
                </div>
            </div>
        </div>
        </div>
    );
  };
  
  export default ProgressBar;