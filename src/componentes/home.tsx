import React from 'react'
import {
  Box,
  Grid2,
  ListItem,
  Paper,
  Typography,
  ListItemText,
  FormControl,
  TextField,
} from '@mui/material'
const Home = () => {
  return (
    <>
      <Grid2 container spacing={2}>
        <ListItemText>
          <Typography variant="subtitle2" gutterBottom>
            Dirección de correo electrónico
          </Typography>
        </ListItemText>
        <TextField required type="email" />
        <Typography variant="subtitle2" gutterBottom>
          Ingresar la Password
        </Typography>

        <TextField type="password" placeholder="Ingrese su clave" />
      </Grid2>
    </>
  )
}

export default Home
