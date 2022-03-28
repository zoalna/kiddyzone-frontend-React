import { Snackbar, Alert } from '@mui/material'

const SnackbarError = ({ open, msg, severity }) => {
  return (
    <Snackbar open={open} autoHideDuration={4000}>
      <Alert severity={severity} className="alert-show-msg">
        {msg}
      </Alert>
    </Snackbar>
  )
}
export { SnackbarError }
