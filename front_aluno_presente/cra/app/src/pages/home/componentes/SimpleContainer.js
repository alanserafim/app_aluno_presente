import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                    <Container sx={{ height: '20vh', display: 'flex', bgcolor: '#000', alignItems: 'center'}}>
                        <Box sx={{ bgcolor: 'green', height: '15vh', width: '60vw' }} />
                    </Container>
                    <Container sx={{ height: '50vh', display: 'flex', bgcolor: '#fefe', alignItems: 'center'}}>
                        <Box sx={{ bgcolor: '#F3F', height: '45vh', width: '30vw' }} />
                        <Box sx={{ bgcolor: 'blue', height: '45vh', width: '30vw' }} />
                    </Container>
            </Container>
        </React.Fragment>
    );
}