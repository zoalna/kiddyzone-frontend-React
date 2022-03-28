import {
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Link,
  Typography,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material'
import '../App.css'
import { React, useState } from 'react'
import StyleInputField from '../Components/StyleInputField'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { api } from '../Helpers/services'
import { useShared } from '../Helpers/GlobalStates'
//constants
import { storeLocalData } from '../Helpers/localStorage'
import { LOCAL_STORAGE_KEYS } from '../Helpers/localStorage'

export default function Login() {
  const { userData, setuserData, changeuserData } = useShared()

  let navigate = useNavigate()
  const { handleSubmit, control } = useForm()
  const [show, setshow] = useState(false)
  const [isloading, setloading] = useState(false)
  const [showing, setshowing] = useState(false)
  const [error, seterror] = useState('')

  const showerror = (value) => {
    console.log(value)
    if (showing) return

    seterror(value)
    setshow(true)
    setshowing(true)
    setTimeout(() => {
      setshow(false)
      setshowing(false)
    }, 2000)
  }

  const calllogin = (data) => {
    console.log(data)
    if (
      data.email == '' ||
      data.password == '' ||
      data.email == null ||
      data.password == null
    ) {
      showerror('please provide complete information')
      return
    }

    let cart = localStorage.getItem('cart')
    if (cart != null) {
      data.cart_items = JSON.parse(cart)
    }

    console.log(data)

    setloading(true)
    const headers = {
      'Content-Type': 'application/json'
    }
    axios
      .post(api.login, data, {
        headers: headers
      })
      .then(function (response) {
        setloading(false)
        if (response.data.success == false) {
          showerror(response.data.message)
          return
        }
        console.log(response.data)
        showerror(response.data.message)
        localStorage.setItem('user', JSON.stringify(response.data))
        storeLocalData(LOCAL_STORAGE_KEYS.authToken, response?.data?.auth_token)
        changeuserData(response.data)
        navigate(`/`)
        //alert(JSON.stringify(userData))
      })
      .catch(function (error) {
        setloading(false)
        //  console.log(error)
        // console.log(error.response.data) // 401
        //Please Authenticate or whatever returned from server
        // if(error.response.status==401){
        if (error.response.data.success == false) {
          showerror(error.response.data.message)
          return
        }
        // }
      })
  }

  return (
    <>
      {show && (
        <Snackbar open={true} autoHideDuration={4000}>
          <Alert severity="error" className="alert-show-msg">
            {error}
          </Alert>
        </Snackbar>
      )}

      <Box>
        <Box
          sx={{
            position: 'relative',
            height: '160px',
            width: '100%',
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              paddingLeft: { xs: 2, md: '209px' },
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translate(30%, -50%)'
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
          <img alt="" src="/image/banners/listing.png" />
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

                  <form onSubmit={handleSubmit((data) => calllogin(data))}>
                    <Box mt={1}>
                      <Controller
                        control={control}
                        name="email"
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
                      {isloading && (
                        <Grid item xs={12} md={12} lg={12}>
                          <Box>
                            <CircularProgress />
                          </Box>
                        </Grid>
                      )}
                    </Grid>
                  </form>
                  <Box mt={2} display={'flex'} alignItems={'center'}>
                    <Box pt={1}>
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
                      <IconButton
                        sx={{
                          pr: 0
                        }}
                      >
                        <Box
                          component="img"
                          sx={{
                            height: '100%',
                            width: '100%'
                          }}
                          alt="The house from the offer."
                          src="/image/fIcon.svg"
                        />
                      </IconButton>
                      <IconButton
                        sx={{
                          pr: 0
                        }}
                      >
                        <Box
                          component="img"
                          sx={{
                            height: '100%',
                            width: '100%'
                          }}
                          alt="The house from the offer."
                          src="/image/appleIcon.svg"
                        />
                      </IconButton>
                      <IconButton
                        sx={{
                          pr: 0
                        }}
                      >
                        <Box
                          component="img"
                          sx={{
                            height: '100%',
                            width: '100%'
                          }}
                          alt="The house from the offer."
                          src="/image/gIcon.svg"
                        />
                      </IconButton>
                      <IconButton
                        sx={{
                          pr: 0
                        }}
                      >
                        <Box
                          component="img"
                          sx={{
                            height: '100%',
                            width: '100%'
                          }}
                          alt="The house from the offer."
                          src="/image/tIcon.svg"
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
