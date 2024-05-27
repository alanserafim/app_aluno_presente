import { useState } from "react"
import styles from "./estudante.module.css"

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export const Estudante = () => {
  return (
    <div>
      <h1>Lista de Estudantes</h1>
      <MediaControlCard />

    </div>
    
  )
}

const CardAluno = () => {
  const [nome, setNome] = useState("")
  const [ra, setRa] = useState("")
  const [telefone, setTelefone] = useState("")
  const [serie, setSerie] = useState("")
  const [dataNascimento, setdataNascimento] = useState("")
  const [status, setStatus] = useState("")
  const [imagem, setImagem] = useState("")

    return(
    
    <div className={styles.container}>
      <div className={styles.principal}>
        <img src="https://github.com/alanserafim.png" alt=""/>
        <p>Alan Nunes Serafim</p>
      </div>
      <div className={styles.dados}>
        <p>Série: 2B </p>
        <p>RA: 100100100</p>
        <p>Data de Nascimento: 14/03/1991</p>
        <p>Telefones: 11970810316,  1146399018</p>
        <p>Situação: Ativo</p>
      </div>
    </div>
    
  )
}


export default function MediaControlCard() {

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://github.com/alanserafim.png"
        alt="Fotografia do aluno"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', pl: 1, pb: 1 }}>
          <Typography component="div" variant="h5">
            Alan Nunes Serafim
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            2 série B
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', pl: 1, pb: 1, flexDirection: "column"}}>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          RA: 100100100 1 SP
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Data de Nascimento: 14/03/1991
          </Typography>
          {/* <Typography variant="subtitle1" color="body2" component="div">
          Telefones: 11970810316,  1146399018
          </Typography> */}
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Situação: Ativo
          </Typography>
        </Box>
      </Box>
      
    </Card>
  );
}