import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useEffect} from "react";

const schema = z.object({
  nome: z.string().min(1, "Nome muito curto!").max(90, "Nome muito longo!"),
  urlImagem: z.string().url("URL invalida!").min(1, "URL muito curta!").max(255, "URL muito longa!"),
})

export default function DialogParticipante({open, onClose, atividade, criarParticipacao}){
  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
  } = useForm({
    initialValues: {
      nome: '',
      urlImagem: ''
    },
    resolver: zodResolver(schema)
  })

  useEffect(() => {
    reset({
      nome: '',
      urlImagem: ''
    });
  }, [open]);


  const onSubmit = (data) => {
    criarParticipacao({idAtividade: atividade.id, participante: data});
    onClose();
  }

  return(
    <Dialog open={open} onClose={onClose} PaperProps={{
      sx: {
        width: '700px'
      }
    }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Participante</DialogTitle>
        <DialogContent>
          <Stack spacing={2} paddingTop={1}>
            <Controller
              name="nome"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nome"
                  error={!!errors.nome}
                  helperText={errors.nome?.message}
                />
              )}
            />
            <Controller
              name="urlImagem"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="URL foto"
                  error={!!errors.urlImagem}
                  helperText={errors.urlImagem?.message}
                />
              )}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button type='submit'>
            Confirmar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}