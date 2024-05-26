import {Box, Button, Card, CardContent, Stack, Typography} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AvatarParticipante from "./AvatarParticipante.jsx";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DialogParticipante from "./DialogParticipante.jsx";
import {useState} from "react";

export default function CardAtividade({atividade, selecionarAtividade, removerAtividade}) {

  const [open, setOpen] = useState(false);

  const removerParticipante = (idParticipacao) => {
    console.log("REMOVER", idParticipacao)
  }

  return(
    <>
      <Card variant='outlined'>
        <CardContent>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
              <Stack spacing={1}>
                <Typography fontSize='22px' fontWeight='bold'>
                  {atividade.titulo}
                </Typography>
                <Typography fontSize='16px' color='rgb(0, 0, 0, 0.6)'>
                  {atividade.descricao}
                </Typography>
                <Typography fontSize='16px' color='rgb(0, 0, 0, 0.6)'>
                  Responsavel: {atividade.responsavel}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="end">
              <Button
                onClick={selecionarAtividade}
                variant="text"
                startIcon={<EditOutlinedIcon/>}>
                <Typography paddingTop='4px'>Editar</Typography>
              </Button>
              <Button
                onClick={() => removerAtividade()}
                variant="text"
                startIcon={<DeleteOutlineOutlinedIcon/>}>
                <Typography paddingTop='4px'>Remover</Typography>
              </Button>
              <Button
                onClick={() => setOpen(true)}
                variant="text"
                startIcon={<PersonAddAltOutlinedIcon/>}>
                <Typography paddingTop='4px'>Novo Participante</Typography>
              </Button>
              <Stack direction='row' spacing={2} alignItems="center">
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <PersonOutlineOutlinedIcon/>
                  <Typography paddingTop='4px'>{atividade.participantes.length} / {atividade.maximoParticipantes}</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Box display='flex' gap='16px' flexWrap='wrap' alignItems="center" justifyContent="start">
              {atividade.participantes.map((participante, index) =>
                <AvatarParticipante
                  nome={participante.nome}
                  url={participante.url}
                  key={index}
                  removerParticipante={() => removerParticipante(participante)}
                />
              )}
            </Box>
          </Stack>
        </CardContent>
      </Card>
      <DialogParticipante open={open} onClose={() => setOpen(false)}/>
    </>
  )
}