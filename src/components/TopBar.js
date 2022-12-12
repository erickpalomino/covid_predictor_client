import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TopBar() {
    return (
        <AppBar color='primary' position="static">
            <Toolbar>
                <Typography alignContent={'center'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Sistema de Predicción de Infección por COVID 19 en el Perú
                </Typography>
            </Toolbar>
        </AppBar>
    )
}