import { Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
export default function PredictionPage() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        ><Grid item xs={3} p={10} >
                <Typography alignContent={'center'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Sistema de Predicción de Infección por COVID 19 en el Perú
                </Typography>
            </Grid>

        </Grid>
    )
}