import {Avatar, IconButton, Stack, Typography} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function AvatarParticipante({url, nome, removerParticipante}) {
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
        onClick={removerParticipante}
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
        src={url}
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