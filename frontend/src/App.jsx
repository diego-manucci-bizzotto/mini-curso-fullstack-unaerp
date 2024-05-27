import {Box, Button, Container, Divider, Stack, Typography} from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CardAtividade from "./CardAtividade.jsx";
import DialogAtividade from "./DialogAtividade.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [open, setOpen] = useState(false);
  const [atividadeSelecionada, setAtividadeSelecionada] = useState(null);
  const [atividades, setAtividades] = useState([]);

  const buscarAtividades = () => {
    axios.get('http://localhost:8080/atividades')
      .then(response => {
        setAtividades(response.data);
      })
  }

  useEffect(() => {
    buscarAtividades();
  }, []);

  const selecionarAtividade = (atividade) => {
    setAtividadeSelecionada(atividade);
    setOpen(true);
  }

  const adicionarAtividade = (atividade) => {
    axios.post('http://localhost:8080/atividades', atividade)
      .then(response => {
        buscarAtividades();
        handleClose();
      })
  }

  const editarAtividade = (atividade) => {
    axios.put(`http://localhost:8080/atividades/${atividade.id}`, atividade)
      .then(response => {
        buscarAtividades();
      })
  }

  const removerAtividade = (idAtividade) => {
    axios.delete(`http://localhost:8080/atividades/${idAtividade}`)
      .then(response => {
        buscarAtividades();
      })
  }

  const criarParticipacao = (participacao) => {
    axios.post(`http://localhost:8080/inscricoes`, participacao)
      .then(response => {
        buscarAtividades();
      })
  }

  const removerParticipacao = (idParticipacao) => {
    axios.delete(`http://localhost:8080/inscricoes/${idParticipacao}`)
      .then(response => {
        buscarAtividades();
      })
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
                selecionarAtividade={selecionarAtividade}
                removerAtividade={removerAtividade}
                criarParticipacao={criarParticipacao}
                removerParticipacao={removerParticipacao}
                key={index}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
      <DialogAtividade
        open={open}
        onClose={() => handleClose()}
        atividadeSelecionada={atividadeSelecionada}
        adicionarAtividade={adicionarAtividade}
        editarAtividade={editarAtividade}
      />
    </>
  )
}

export default App
