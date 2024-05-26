import {Avatar, Stack, Typography} from "@mui/material";

export default function AvatarParticipante({url, nome}) {
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
      borderRadius={4}
    >
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