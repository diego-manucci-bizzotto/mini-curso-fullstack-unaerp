import {Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography} from "@mui/material";

export default function DialogErro({open, onClose, erro}){
  return(
    <Dialog open={open} onClose={onClose} PaperProps={{
      sx: {
        width: '500px'
      }
    }}>
      <DialogTitle>Erro</DialogTitle>
      <DialogContent>
        <Stack spacing={2} paddingTop={1}>
          <Alert severity="error">{erro}</Alert>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  )
}