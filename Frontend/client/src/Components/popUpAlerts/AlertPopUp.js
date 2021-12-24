import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function Alert(props) {
    return <MuiAlert elevation={10} variant="filled" {...props} />;
}


//////////////////////////////////////////////////////////////////////

const CustomizedSnackbars = ({alerts}) => {

    const open = alerts.snackbarOpen


    return (
        <div key={alerts.id}>
            <Snackbar  anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }} open={open}>
                <Alert severity={alerts.alertType || "error"} style={{marginBottom:"20vh"}}>
                    {alerts.msg}
                </Alert>
            </Snackbar>
        </div>
    );
}


CustomizedSnackbars.propTypes ={alerts: PropTypes.object.isRequired}

const mapStateToProps = state => ({alerts: state.alert});

export default connect(mapStateToProps)(CustomizedSnackbars);