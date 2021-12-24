import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./EmbedVideoPopup.css";

const YoutubeEmbed = (props) => {
    return (
            <Dialog
                open={true}
                onClose={props.close}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth={'md'}>
                <DialogTitle id="video-title">How To Use The Periodontal Chart</DialogTitle>
                <DialogContent>
                <iframe
                    width="910"
                    height="400"
                    src={`https://www.youtube.com/embed/oOeRJbz1mzY`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close} color="primary" autoFocus>Close</Button>
                </DialogActions>
            </Dialog>
    );
}

export default YoutubeEmbed;