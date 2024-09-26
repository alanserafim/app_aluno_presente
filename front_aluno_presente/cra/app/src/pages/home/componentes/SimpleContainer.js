import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import banner from "../../../assets/img/college class-amico.svg"
import styles from "../home.module.css"

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                    <Container sx={{ height: '20vh', display: 'flex', alignItems: 'center'}}>
                        <Box sx={{ height: '15vh', width: '60vw', textAlign: 'center'}}>
                            <h1>COMUNICA</h1>
                            <p>Sistema de Gestão da Comunicação entre Escola e Responsáveis</p>
                        </Box>
                    </Container>
                    <Container sx={{ height: '50vh', display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                        <Box sx={{ height: '45vh', width: '30vw' }}>
                                <img src={banner} alt="ilustração de uma sala de aula" className={styles.banner}/>   
                        </Box>
                        <Box sx={{ bgcolor: 'blue', height: '45vh', width: '30vw', padding: '0 1rem', color: "white", borderRadius: "1.2rem"}}>
                            <h2>Funcionalidades do sistema</h2>
                            <div className={styles.containerFuncionalidades}>
                                <h3>Frequência Escolar</h3>
                                <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className={styles.containerFuncionalidades}>
                                <h3>Gerenciamento de Avisos</h3>
                                <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className={styles.containerFuncionalidades}>
                                <h3>Busca Ativa</h3>
                                <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </Box>
                    </Container>
            </Container>
        </React.Fragment>
    );
}