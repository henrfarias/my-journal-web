import * as React from 'react'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import { MuiColorInput } from 'mui-color-input'
import { SelectItem } from './style'
import { instance, TOKEN } from '../../../services/axios.service'

const filter = createFilterOptions<TagOptions>()

export const TagSelect: React.FC<{
  setTag: React.Dispatch<
    React.SetStateAction<{
      name: string
      hexColor: string
    } | null>
  >
}> = ({ setTag }) => {
  const [value, setValue] = React.useState<TagOptions | null>(null)
  const [open, toggleOpen] = React.useState(false)
  const [existentTags, setExistentTags] = React.useState([])

  const handleSaveTag = () => {
    setTag(dialogValue)
    setValue({ name: dialogValue.name, hexColor: dialogValue.hexColor })
    toggleOpen(false)
  }

  const handleClose = () => {
    setDialogValue({
      name: '',
      hexColor: '',
    })
    toggleOpen(false)
  }

  const [dialogValue, setDialogValue] = React.useState({
    name: '',
    hexColor: '',
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setValue({
      name: dialogValue.name,
      hexColor: dialogValue.hexColor,
    })
    handleClose()
  }

  const listTags = async () => {
    try {
      const { data: tags } = await instance.get('/auth/tag', { headers: { Authorization: `Bearer ${TOKEN}` } })
      setExistentTags(tags)
      console.log(tags)
    } catch (err) {
      console.log('Erro ao listar tags')
      // TODO: Toast de erro aqui.
    }
  }

  React.useEffect(() => {
    listTags()
  }, [])

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setTimeout(() => {
              toggleOpen(true)
              setDialogValue({
                name: newValue,
                hexColor: '',
              })
            })
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true)
            setDialogValue({
              name: newValue.inputValue,
              hexColor: '',
            })
          } else {
            console.log(newValue)
            setValue(newValue)
            if (!newValue?.hexColor) setTag(null)
            else setTag({ name: newValue!.name, hexColor: newValue.hexColor })
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params)

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              name: `Adicionar "${params.inputValue}"`,
            })
          }

          return filtered
        }}
        id="Tag"
        options={existentTags}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option
          }
          if (option.inputValue) {
            return option.inputValue
          }
          return option.name
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => (
          <SelectItem {...props} style={{ ...props.style, '--color': option.hexColor } as any}>
            {option.name}
          </SelectItem>
        )}
        sx={{
          width: 300,
          '& .MuiInputLabel-root': { color: `${value?.hexColor}` },
          '& .MuiOutlinedInput-root': {
            '& > fieldset': { borderColor: `${value?.hexColor}` },
          },
          '& .MuiOutlinedInput-root.Mui-focused': {
            '& > fieldset': {
              borderColor: `${value?.hexColor}`,
            },
          },
        }}
        freeSolo
        renderInput={(params) => {
          return <TextField {...params} label="Tag" variant="outlined" />
        }}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Adicionar nova tag</DialogTitle>
          <DialogContent>
            <DialogContentText>Crie uma nova tag para classificar seus pensamentos!</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.name}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  name: event.target.value,
                })
              }
              label="tag"
              type="text"
              variant="standard"
              style={{ marginRight: 16 }}
            />
            <MuiColorInput
              margin="dense"
              id="hexColor"
              value={dialogValue.hexColor}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  hexColor: event,
                })
              }
              format="hex"
              label="color"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type="button" onClick={handleSaveTag}>
              Adicionar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  )
}

interface TagOptions {
  inputValue?: string
  name: string
  hexColor?: string
}
