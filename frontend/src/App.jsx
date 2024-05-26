import {Box, Button, Container, Divider, Stack, Typography} from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CardAtividade from "./CardAtividade.jsx";

function App() {
  return (
    <Container>
      <Stack direction="column" spacing={2} padding='24px'>
        <Box>
          <Typography variant="h5" component="h2" fontSize='32px' fontWeight='bold'>Evento</Typography>
          <Typography variant="h4" component="h1" fontSize='24px' color='rgba(0, 0, 0, 0.6)'>IX Semana de Engenharia e Tecnologia da UNAERP</Typography>
        </Box>
        <Divider/>
        <Box display='flex' alignItems='center' justifyContent='end'>
          <Button variant="outlined" startIcon={<AddCircleOutlineOutlinedIcon/>}>
            <Typography paddingTop='4px'>Nova Atividade</Typography>
          </Button>
        </Box>
        <Stack spacing={2}>
          <CardAtividade atividade={{
            titulo: 'Atividade 1',
            participantes: [
              {
                nome: 'Pessoa 1',
                url: 'https://avatar.iran.liara.run/public'
              },
              {
                nome: 'Pessoa 2',
                url: 'https://avatar.iran.liara.run/public'
              },
              {
                nome: 'Pessoa 3',
                url: 'https://avatar.iran.liara.run/public'
              }
            ],
            maximoParticipantes: 20,
          }}/>
        </Stack>
      </Stack>
    </Container>
  )
}

export default App
