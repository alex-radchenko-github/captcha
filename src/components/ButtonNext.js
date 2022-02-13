import React from 'react';
import {Button} from "@mui/material";
import CaptchaS from '../store/captchaStore'

const ButtonNext = () => {
    let activeButtonStatus = !CaptchaS.captchaPass

    return (
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: "10px"}}>

            <Button variant="contained" disabled={activeButtonStatus}>
                Continue
            </Button>
        </div>

    );
};

export default ButtonNext;