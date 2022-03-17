import {
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Link,
  Typography
} from '@mui/material'
import React from 'react'
import StyleInputField from '../Components/StyleInputField'
import { useForm, Controller } from 'react-hook-form'

export default function Login() {
  const { handleSubmit, control } = useForm()

  return (
    <>
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: { xs: 2, md: '319px' },
            objectFit: 'cover',
            backgroundImage: `url("/image/banners/listing.png")`,
            textAlign: 'start',
            height: '160px',
            width: '100%'
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '46px'
            }}
          >
            Sign In
          </Typography>
        </Box>

        <Box px={{ xs: 0, md: '312px' }} mt={8}>
          <Box>
            <Grid container>
              <Grid
                item
                xs={12}
                md={5}
                p={{ xs: 4, md: '80px 40px' }}
                borderRadius={{ xs: '36px 36px 0px 0', md: '36px 0 0 36px' }}
                bgcolor={'#1DB0ED'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Box>
                  <Box>
                    <img
                      width={'100%'}
                      height={{ xs: '300px', md: '439px' }}
                      src="image/login-logo.png"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box
                  padding={{ xs: 4, md: '40px 50px' }}
                  borderRadius={{
                    xs: '0px 0px 36px 36px',
                    md: '0 36px 36px 0'
                  }}
                  bgcolor={'rgb(238, 238, 238)'}
                >
                  <Typography
                    sx={{
                      color: 'black',
                      fontSize: '30px',
                      fontWeight: 'bold'
                    }}
                  >
                    Login Now!
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '23px',
                        color: '#848484'
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </Box>

                  <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <Box mt={1}>
                      <Controller
                        control={control}
                        name="emailAddress"
                        render={({ field: { onChange, value } }) => (
                          <StyleInputField
                            inputValue={value}
                            placeholder="Email Address"
                            inputType="email"
                            onInputChange={(value) => onChange(value)}
                          />
                        )}
                      />
                    </Box>
                    <Box mt={1}>
                      <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (
                          <StyleInputField
                            inputValue={value}
                            placeholder="Password"
                            inputType="password"
                            onInputChange={(value) => onChange(value)}
                          />
                        )}
                      />
                    </Box>
                    <Box mt={1} display={'flex'} justifyContent={'end'}>
                      <Link
                        sx={{
                          cursor: 'pointer',
                          color: '#595959',
                          textDecoration: 'none'
                        }}
                      >
                        Forget password?
                      </Link>
                    </Box>

                    <Grid
                      container
                      spacing={2}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'space-between'}
                    >
                      <Grid item xs={12} md={12} lg={5}>
                        <Button
                          type="submit"
                          fullWidth
                          sx={{
                            background: '#e20025',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            '&:hover': {
                              background: '#e20025'
                            }
                          }}
                          variant="contained"
                        >
                          login
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={12} lg={7}>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: '13px',
                              fontWeight: 'bold',
                              color: '#000',
                              textAlign: 'end',
                              fontStyle: 'italic'
                            }}
                          >
                            Create An Account{' '}
                            <span
                              style={{
                                cursor: 'pointer',
                                color: '#00B353'
                              }}
                            >
                              Sign up
                            </span>
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                  <Box mt={2} display={'flex'} alignItems={'center'}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '13px',
                          fontWeight: 'bold',
                          color: '#000',
                          fontStyle: 'italic'
                        }}
                      >
                        Login With :-
                      </Typography>
                    </Box>
                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      flexWrap={'wrap'}
                    >
                      <IconButton>
                        <img
                          height={'100%'}
                          width={'100%'}
                          alt="fbIcon"
                          scr="/image/fIcon.svg"
                        />
                      </IconButton>
                      <IconButton>
                        <img
                          height={'100%'}
                          width={'100%'}
                          alt="gIcon"
                          scr="/image/gIcon.svg"
                        />
                      </IconButton>
                      <IconButton>
                        <img
                          height={'100%'}
                          width={'100%'}
                          alt="fbIcon"
                          scr="/image/appleIcon.svg"
                        />
                      </IconButton>
                      <IconButton>
                        <img
                          height={'100%'}
                          width={'100%'}
                          alt="tIcon"
                          scr="/image/tIcon.svg"
                        />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  )
}
