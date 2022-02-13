import * as React from 'react';
import Grid from '@mui/material/Grid';
import {Container, ToggleButton} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import CaptchaS from '../store/captchaStore'
import {observer} from "mobx-react-lite";
import ButtonNext from "./ButtonNext";

const Captcha = observer(() => {

        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="xs">
                    <div style={{display: 'flex', justifyContent: 'center', margin: "10px"}}> Select all identical
                        pictures
                    </div>
                    <Grid container spacing={2}>
                        {CaptchaS.icons.map((number) =>
                            <Grid item xs={4} key={number.id}
                                  style={{display: 'flex', justifyContent: 'center', padding: "10px"}}>

                                <ToggleButton
                                    value="select"
                                    selected={CaptchaS.returnButtonStatus(number)}
                                    onChange={() => CaptchaS.reverseButton(number)}
                                >
                                    {number.value}
                                </ToggleButton>
                            </Grid>
                        )}
                    </Grid>
                    <ButtonNext/>
                </Container>
            </React.Fragment>
        );
    }
)

export default Captcha








