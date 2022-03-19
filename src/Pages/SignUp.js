import {
  Alert,
  Box,
  Button,
  Checkbox,
  Grid,
  Link,
  Snackbar,
  Typography
} from '@mui/material'
import React, { Component, useState } from 'react'

import '../App.css'
import StyleInputField from '../Components/StyleInputField'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
// import ReactSnackBar from "react-js-snackbar";
import axios from 'axios'
import { api } from '../Helpers/services'

export default function SignUp() {
  let navigate = useNavigate()
  const { handleSubmit, control } = useForm()
  const [show, setshow] = useState(false)
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

  const checkform = (obj) => {
    console.log(obj)
    for (var key in obj) {
      if (obj[key] == null || obj[key] == '') return true
    }
    return false
  }

  const calllogin = (data) => {
    console.log(checkform(data))

    if (checkform(data)) {
      showerror('please provide complete information')
      return
    }

    axios
      .post(api.register, data)
      .then(function (response) {
        if (response.data.success == false) {
          showerror(response.data.message)
          return
        }
        console.log(response.data)
        showerror(response.data.message)
        // localStorage.setItem('user', JSON.stringify(response.data))
        navigate('/Login')
        //   window.location.reload(false);
      })
      .catch(function (error) {
        console.log(error)
        console.log(error.response.data) // 401
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
        <>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            open={true}
            autoHideDuration={6000}
            message={
              <Typography
                sx={{
                  fontSize: '20px'
                }}
              >
                {error}
              </Typography>
            }
          />
        </>
      )}

      <Box>
        <Box
          sx={{
            position: 'relative',
            height: '190px',
            width: '100%',
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              paddingLeft: { xs: 2, md: '156px' },
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translate(30%, -50%)'
            }}
          >
            <Typography
              sx={{
                fontSize: '24px',
                color: '#FFFF'
              }}
            >
              Get 10 points free when you subscribe
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '46px'
              }}
            >
              Sign Up
            </Typography>
            <Button
              sx={{
                '&:hover': {
                  background: '#E20025'
                },
                color: '#ffffff',
                backgroundColor: '#FED654',
                padding: '8px 30px',
                fontSize: '18px',
                fontWeight: 700,
                borderRadius: '50px'
              }}
            >
              Refer a friend
            </Button>
          </Box>
          <img alt="" src="/image/banners/signup-banner.jpg" />
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
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                bgcolor={'#F15076'}
              >
                <Box>
                  <Box>
                    <img
                      width={'100%'}
                      height={{ xs: '300px', md: '512px' }}
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
                    Sign UP Here !
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '23px',
                        color: '#848484'
                      }}
                    >
                      If you are new to our store, we glad to have you as
                      member.
                    </Typography>
                  </Box>
                  {/* //TODO: add function here to get form value */}
                  <form onSubmit={handleSubmit((data) => calllogin(data))}>
                    <Box>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <Controller
                            control={control}
                            name="first_name"
                            render={({ field: { onChange, value } }) => (
                              <StyleInputField
                                inputValue={value}
                                placeholder="First Name"
                                inputType="text"
                                onInputChange={(value) => onChange(value)}
                              />
                            )}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Controller
                            control={control}
                            name="last_name"
                            render={({ field: { onChange, value } }) => (
                              <StyleInputField
                                inputValue={value}
                                placeholder="Last Name"
                                inputType="text"
                                onInputChange={(value) => onChange(value)}
                              />
                            )}
                            s
                          />
                        </Grid>
                      </Grid>
                      <Box my={2}>
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

                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
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
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Controller
                            control={control}
                            name="confirm_password"
                            render={({ field: { onChange, value } }) => (
                              <StyleInputField
                                inputValue={value}
                                placeholder="Confirm Password"
                                inputType="password"
                                onInputChange={(value) => onChange(value)}
                              />
                            )}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Grid
                      mt={2}
                      container
                      spacing={1}
                      display={'flex'}
                      alignItems={'center'}
                    >
                      <Grid item xs={12} md={12} lg={6}>
                        <Button
                          type="submit"
                          sx={{
                            background: '#e20025',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            '&:hover': {
                              background: '#e20025'
                            }
                          }}
                          variant="contained"
                        >
                          create account
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={12} lg={6}>
                        <Typography
                          sx={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'end',
                            fontStyle: 'italic'
                          }}
                        >
                          Already Have An Account{' '}
                          <span
                            style={{
                              cursor: 'pointer',
                              color: '#00B353'
                            }}
                          >
                            Login
                          </span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </form>
                  <Box mt={4}>
                    <Box display={'flex'} alignItems={'center'}>
                      <Box>
                        <Checkbox
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          color: '#3E3E3E',
                          fontSize: '16px',
                          fontWeight: 700
                        }}
                      >
                        Yes, I understand and agree to{' '}
                        <Link
                          style={{
                            cursor: 'pointer',
                            fontSize: '16px',
                            color: '#00B353'
                          }}
                        >
                          kiddy Zone Terms of service,
                        </Link>{' '}
                        incliding the{' '}
                        <Link
                          style={{
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 700,
                            color: '#00B353'
                          }}
                        >
                          user agreement
                        </Link>{' '}
                        and{' '}
                        <Link
                          style={{
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 700,
                            color: '#00B353'
                          }}
                        >
                          {' '}
                          privacy policy
                        </Link>
                      </Typography>
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
