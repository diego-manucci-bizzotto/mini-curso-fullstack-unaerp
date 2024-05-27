import {Avatar, IconButton, Stack, Typography} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function AvatarParticipante({inscricao, urlImagem, nome, removerParticipacao}) {

  console.log(inscricao)

  return(
    <Stack
      direction="column"
      spacing={2}
      padding={2}
      justifyContent="center"
      alignItems="center"
      backgroundColor='rgba(0, 0, 0, 0.1)'
      width='150px'
      height='150px'
      position='relative'
      borderRadius={4}
    >
      <IconButton
        onClick={() => removerParticipacao(inscricao.idInscricao)}
        size={'small'}
        sx={{
          position: 'absolute',
          top: 0,
          right: 0
        }}
      >
        <HighlightOffIcon/>
      </IconButton>
      <Avatar
        src={urlImagem}
        sx={{
          width: '60px',
          height: '60px',
        }}
      />
      <Typography
        textAlign='center'
        width='100%'
        overflow="hidden"
        textOverflow='ellipsis'
      >
        {nome}
      </Typography>
    </Stack>
  )
}