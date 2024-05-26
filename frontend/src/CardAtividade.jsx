import {Box, Button, Card, CardContent, Stack, Typography} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AvatarParticipante from "./AvatarParticipante.jsx";

export default function CardAtividade({atividade}) {
  return(
    <Card variant='outlined'>
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
            <Typography fontSize='20px' fontWeight='bold'>
              {atividade.titulo}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <PersonOutlineOutlinedIcon/>
                <Typography paddingTop='4px'>{atividade.participantes.length}/{atividade.maximoParticipantes}</Typography>
              </Stack>
              <Button
                variant="outlined"
                startIcon={<PersonAddAltOutlinedIcon/>}>
                <Typography paddingTop='4px'>Novo Participante</Typography>
              </Button>
            </Stack>
          </Stack>
          <Box display='flex' gap='16px' flexWrap='wrap' alignItems="center" justifyContent="start">
            {atividade.participantes.map((participante, index) =>
              <AvatarParticipante nome={participante.nome} url={participante.url} key={index} />
            )}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}