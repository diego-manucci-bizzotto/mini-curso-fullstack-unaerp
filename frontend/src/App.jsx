import {Box, Button, Container, Divider, Stack, Typography} from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CardAtividade from "./CardAtividade.jsx";
import DialogAtividade from "./DialogAtividade.jsx";
import {useState} from "react";

const atividades= [
  {
    titulo: 'Atividade 1',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu ultricies, lacinia arcu vel, tempor metus. Curabitur ante ante, cursus a laoreet sed, congue ornare nisl.',
    responsavel: 'Diego Manucci Bizzotto',
    maximoParticipantes: 10,
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
    ]
  },
  {
    titulo: 'Atividade 2',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu ultricies, lacinia arcu vel, tempor metus. Curabitur ante ante, cursus a laoreet sed, congue ornare nisl.',
    responsavel: 'Joao Marques',
    maximoParticipantes: 10,
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
    ]
  },
]

function App() {

  const [open, setOpen] = useState(false);
  const [atividadeSelecionada, setAtividadeSelecionada] = useState(null);

  const selecionarAtividade = (atividade) => {
    setAtividadeSelecionada(atividade);
    setOpen(true);
  }

  const removerAtividade = (idAtividade) => {
    console.log("REMOVER", idAtividade)
  }

  const handleClose = () => {
    setAtividadeSelecionada(null);
    setOpen(false);
  }

  return (
    <>
      <Container>
        <Stack direction="column" spacing={2} padding='24px'>
          <Box>
            <Typography variant="h5" component="h2" fontSize='32px' fontWeight='bold'>Evento</Typography>
            <Typography variant="h4" component="h1" fontSize='24px' color='rgba(0, 0, 0, 0.6)'>IX Semana de Engenharia e Tecnologia da UNAERP</Typography>
          </Box>
          <Divider/>
          <Box display='flex' alignItems='center' justifyContent='end'>
            <Button variant="text" startIcon={<AddCircleOutlineOutlinedIcon/>} onClick={() => setOpen(true)}>
              <Typography paddingTop='4px'>Nova Atividade</Typography>
            </Button>
          </Box>
          <Stack spacing={2}>
            {atividades.map((atividade, index) => (
              <CardAtividade
                atividade={atividade}
                selecionarAtividade={() => selecionarAtividade(atividade)}
                removerAtividade={() => removerAtividade(atividade)}
                key={index}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
      <DialogAtividade open={open} onClose={() => handleClose()} atividadeSelecionada={atividadeSelecionada}/>
    </>
  )
}

export default App
