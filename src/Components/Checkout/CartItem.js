import React from 'react'
import { Box, Typography } from '@mui/material'

const CartItem = ({ name, unit_price, quantity }) => {
  return (
    <>
      <Box
        marginTop="1rem"
        marginBottom="1rem"
        border={0}
        borderTop="2px solid rgba(0,0,0,.1)"
      />

      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '17px',
              color: '#121212',
              fontWeight: 600
            }}
          >
            {name || '---'}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: '16px',
              color: '#121212'
            }}
          >
            {unit_price && quantity ? 'AED ' + unit_price * quantity : '---'}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default CartItem
