import { Box, InputBase } from '@mui/material'

const StyleInputField = (props) => {
  const { placeholder, inputType, onInputChange, inputValue, inputError } =
    props
  return (
    <Box
      sx={{
        display: 'flex',
        height: '50px',
        padding: '15px',
        background: '#DEDEDE',
        borderRadius: '6px'
      }}
    >
      <InputBase
        error={inputError}
        value={inputValue}
        onChange={(e) => {
          onInputChange(e.target.value)
        }}
        type={inputType}
        sx={{
          fontWeight: 'bold',
          fontSize: '16px',
          color: '#595959'
        }}
        fullWidth
        placeholder={placeholder}
      />
    </Box>
  )
}

export default StyleInputField
