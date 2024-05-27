import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useEffect} from "react";


const schema = z.object({
  titulo: z.string().min(1, "Titulo muito curto!").max(80, "Titulo muito longo!"),
  descricao: z.string().min(1, "Descricao muito curta!").max(255, "Descricao muito longa!"),
  responsavel: z.string().min(1, "Nome muito curto!").max(255, "Nome muito longo!"),
  maximoInscrito: z.number().min(0, "Maximo de participantes deve ser positivo!").max(100, "Maximo de participantes permitidos: 100!"),
})

export default function DialogAtividade({open, onClose, atividadeSelecionada, adicionarAtividade, editarAtividade}){
  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
  } = useForm({
    initialValues: {
      titulo: '',
      descricao: '',
      responsavel: '',
      maximoInscrito: 0
    },
    resolver: zodResolver(schema)
  })

  useEffect(() => {
    if(atividadeSelecionada){
      reset({
        titulo: atividadeSelecionada.titulo,
        descricao: atividadeSelecionada.descricao,
        responsavel: atividadeSelecionada.responsavel,
        maximoInscrito: atividadeSelecionada.maximoInscrito
      });
    } else {
      reset({
        titulo: '',
        descricao: '',
        responsavel: '',
        maximoInscrito: 0
      });
    }
  }, [open]);


  const onSubmit = (data) => {
    if(atividadeSelecionada){
      editarAtividade({...data, id: atividadeSelecionada.id});
    } else {
      adicionarAtividade(data);
    }
    onClose();
  }

  return(
    <Dialog open={open} onClose={onClose} PaperProps={{
      sx: {
        width: '700px'
      }
    }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Atividade</DialogTitle>
        <DialogContent>
          <Stack spacing={2} paddingTop={1}>
            <Controller
              name="titulo"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Titulo"
                  error={!!errors.titulo}
                  helperText={errors.titulo?.message}
                />
              )}
            />
            <Controller
              name="descricao"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  multiline
                  rows={3}
                  label="Decricao"
                  error={!!errors.descricao}
                  helperText={errors.descricao?.message}
                />
              )}
            />
            <Controller
              name="responsavel"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Responsavel"
                  error={!!errors.responsavel}
                  helperText={errors.responsavel?.message}
                />
              )}
            />
            <Controller
              name="maximoInscrito"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Maximo de Participantes"
                  type="number"
                  error={!!errors.maximoInscrito}
                  helperText={errors.maximoInscrito?.message}
                  onChange={(e) => field.onChange(Number(e.target.value))}
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