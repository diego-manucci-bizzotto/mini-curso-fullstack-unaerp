import {Avatar, Box, Button, Card, CardContent, Container, Divider, Stack, styled, Typography} from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const CardParticipante = styled(Stack)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  borderRadius: '12px',
  gap: '12px',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  padding: '12px',
  width: '150px',
  height: '150px',
}))

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
          <Card variant='outlined'>
            <CardContent>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                  <Typography fontSize='20px' fontWeight='bold'>
                    Palesta - Padroes de Projeto
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <PersonOutlineOutlinedIcon/>
                      <Typography paddingTop='4px'>1/20</Typography>
                    </Stack>
                    <Button
                      variant="outlined"
                      startIcon={<PersonAddAltOutlinedIcon/>}>
                      <Typography paddingTop='4px'>Novo Participante</Typography>
                    </Button>
                  </Stack>
                </Stack>
                <Box display='flex' gap={'16px'} flexWrap='wrap' alignItems="center" justifyContent="start">
                  <CardParticipante>
                    <Avatar
                      src={'https://avatar.iran.liara.run/public'}
                      sx={{
                        width: '75px',
                        height: '75px',
                      }}
                    />
                    <Typography textAlign='center'>Diego Manucci Bizzotto</Typography>
                  </CardParticipante>
                  <CardParticipante>
                    <Avatar
                      src={'https://avatar.iran.liara.run/public'}
                      sx={{
                        width: '75px',
                        height: '75px',
                      }}
                    />
                    <Typography textAlign='center'>Diego Manucci Bizzotto</Typography>
                  </CardParticipante>
                  <CardParticipante>
                    <Avatar
                      src={'https://avatar.iran.liara.run/public'}
                      sx={{
                        width: '75px',
                        height: '75px',
                      }}
                    />
                    <Typography textAlign='center'>Diego Manucci Bizzotto</Typography>
                  </CardParticipante>
                  <CardParticipante>
                    <Avatar
                      src={'https://avatar.iran.liara.run/public'}
                      sx={{
                        width: '75px',
                        height: '75px',
                      }}
                    />
                    <Typography textAlign='center'>Diego Manucci Bizzotto</Typography>
                  </CardParticipante>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Container>
  )
}

export default App
