import { Box, Button, Grid, InputBase, Link, Typography } from '@mui/material'
import React, { Component } from 'react'

export default function Login() {
  const muiStyledInput = (placeholder, inputType) => {
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
              <Grid item xs={12} lg={5}>
                <Box
                  height={{ xs: '300px', md: '431px' }}
                  p={{ xs: 4, md: '80px 40px' }}
                  borderRadius={{ xs: '36px 36px 0px 0', md: '36px 0 0 36px' }}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  bgcolor={'#1DB0ED'}
                >
                  <Box>
                    <img
                      width={'100%'}
                      height={'100%'}
                      src="image/login-logo.png"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={7}>
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
                  <Box mt={1}>{muiStyledInput('Email Address', 'email')}</Box>
                  <Box mt={1}>{muiStyledInput('Password', 'password')}</Box>
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

                  <Box
                    mb={2}
                    mt={1}
                    display={'flex'}
                    flexDirection={{ xs: 'column', md: 'row' }}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Button
                      sx={{
                        background: '#e20025',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        width: { xs: '100%', md: '200px' },
                        '&:hover': {
                          background: '#e20025'
                        }
                      }}
                      variant="contained"
                    >
                      login
                    </Button>
                    <Box mt={{ xs: 2, md: 0 }}>
                      <Typography
                        sx={{
                          fontSize: '20px',
                          fontWeight: 'bold',
                          color: '#000',
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
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* <div className="singIn-listing-cover">
        <h1 className="signIn-heading">Sign In</h1>
      </div>
      <section id="sign-in" className="content account">
        <div className="container">
          <div className="row">
            <div
              className="col-md-5 img-col bg-blue text-center"
              style={{ backgroundColor: "#02b0ed" }}
            >
              <img src="image/login-logo.png" />
            </div>
            <div
              className="col-md-7 sign-form"
              style={{ backgroundColor: "#EEEEEE" }}
            >
              <form
                role="form"
                autocomplete="off"
                className="form"
                method="post"
              >
                <div className="col-md-12">
                  <div className="form-group">
                    <h2>Login Now !</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="password" placeholder="Password" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <p
                    href="#"
                    style={{
                      textAlign: "end",
                    }}
                  >
                    forget password
                  </p>
                </div>
                <div className="col-md-4">
                  <button
                    style={{
                      marginLeft: "5px",
                      background: "#e20025",
                    }}
                    className="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="col-md-8">
                  <div className="account-link">
                    <p
                      style={{
                        textAlign: "end",
                      }}
                    >
                      Create An Account{" "}
                      <a href="#" className="text-green">
                        Sign up
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group social-media">
                    <span>Login With :-</span>
                    <div className="icons">
                      <a href="#">
                        <img src="image/Group%204083.svg" />
                      </a>
                      <a href="#">
                        <img src="image/Group%204082.svg" />
                      </a>
                      <a href="#">
                        <img src="image/Group%204081.svg" />
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}
