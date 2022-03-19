import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import CheckoutForm from '../Components/checkoutForms'

export default function About() {
  const [showShippingField, setShowShippingField] = useState(false)
  return (
    <>
      <Box mb={{ xs: '30px', md: 15 }} px={{ xs: '30px', md: '290px' }}>
        <ol class="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li class="active">
            <a href="#">Checkout</a>
          </li>
        </ol>

        <Box>
          <Typography
            sx={{ fontSize: '24px', fontWeight: 500, color: '#232323' }}
          >
            BILLING ADDRESS
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <CheckoutForm />

              <Box display={'flex'} alignItems={'center'} my={2}>
                <Box>
                  <Checkbox
                    onClick={() => {
                      setShowShippingField(!showShippingField)
                    }}
                    checked={showShippingField}
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 28 }
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    ml: '10px',
                    color: '#3E3E3E',
                    fontSize: '16px'
                  }}
                >
                  ship to this address
                </Typography>
              </Box>
              {showShippingField && (
                <>
                  <Typography
                    sx={{ fontSize: '24px', fontWeight: 500, color: '#232323' }}
                  >
                    SHIPPING ADDRESS
                  </Typography>
                  <CheckoutForm isShipping />
                </>
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #A3A2A3'
                }}
              >
                <Box mb={4}>
                  <Typography
                    sx={{
                      fontSize: '24px',
                      fontWeight: 500,
                      color: 'black'
                    }}
                  >
                    YOUR ORDER
                  </Typography>
                </Box>
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
                      Product
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#121212'
                      }}
                    >
                      Total
                    </Typography>
                  </Box>
                </Box>

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
                      Sprit Toy
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#121212'
                      }}
                    >
                      AED 2,000
                    </Typography>
                  </Box>
                </Box>

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
                      Sub Total
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#121212'
                      }}
                    >
                      AED 2,000
                    </Typography>
                  </Box>
                </Box>
                <Box
                  mt={2}
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
                      Tax 0 %
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#121212'
                      }}
                    >
                      AED 0
                    </Typography>
                  </Box>
                </Box>

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
                      Grand Total
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#121212'
                      }}
                    >
                      AED 2,000
                    </Typography>
                  </Box>
                </Box>

                <Box
                  marginTop="1rem"
                  marginBottom="1rem"
                  border={0}
                  borderTop="2px solid rgba(0,0,0,.1)"
                />

                <Box>
                  <FormControl>
                    <FormLabel
                      sx={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: 'black'
                      }}
                    >
                      Gender
                    </FormLabel>
                    <RadioGroup
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label={
                          <>
                            <Typography
                              sx={{
                                fontSize: '16px',
                                color: '#232323'
                              }}
                            >
                              AED 20
                            </Typography>{' '}
                            <Typography
                              sx={{
                                fontSize: '16px',
                                color: '#232323'
                              }}
                            >
                              Flat Rate - Flat Rate Shipping
                            </Typography>
                          </>
                        }
                      />
                      <Box my={1} />

                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label={
                          <>
                            <Typography
                              sx={{
                                fontSize: '16px',
                                color: '#232323'
                              }}
                            >
                              AED 0
                            </Typography>{' '}
                            <Typography
                              sx={{
                                fontSize: '16px',
                                color: '#232323'
                              }}
                            >
                              Free shipping - Free shipping
                            </Typography>
                          </>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <FormControl>
                  <FormLabel
                    sx={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'black'
                    }}
                  >
                    Select Payment Method
                  </FormLabel>
                  <RadioGroup defaultValue="female" name="radio-buttons-group">
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label={
                        <>
                          <Typography
                            sx={{
                              fontSize: '16px',
                              color: '#232323'
                            }}
                          >
                            Cash On Delivery
                          </Typography>
                        </>
                      }
                    />
                    <Box my={1} />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label={
                        <>
                          <Typography
                            sx={{
                              fontSize: '16px',
                              color: '#232323'
                            }}
                          >
                            Money Transfer
                          </Typography>
                        </>
                      }
                    />
                  </RadioGroup>
                </FormControl>

                <Box my={2}>
                  <img alt="" src="image/footer/payment-method.png" />
                </Box>
              </Box>
              <Box mt={2} display={'flex'} justifyContent={'end'}>
                <Button
                  sx={{
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '15px 36px',
                    background: '#00B353',
                    '&:hover': {
                      background: '#26a37c'
                    }
                  }}
                  variant="contained"
                >
                  place order
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <section class="bg-yellow">
        <div class="container">
          <div class="row d-flex">
            <div class="col-md-6 left-col">
              <div>
                <img src="image/checkout-gift-box.png" />
              </div>
            </div>
            <div id="create-account" class="col-md-6 right-col">
              <div class="text-center content-box">
                <h2>Create Account</h2>
                <p>Enjoy %10 by your first order</p>
                <a href="#" class="bg-green btn">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery-services" class="services-icons">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="service one">
                <img src="image/cart/truck.jpg" />
                <span>
                  <h2>Easy to buy & return</h2>
                  <p>single click to buy & return</p>
                </span>
              </div>
            </div>
            <div class="col-md-3">
              <div class="service two">
                <img src="image/cart/payment-card.jpg" />
                <span>
                  <h2>Secure Payments</h2>
                  <p>100% payment security</p>
                </span>
              </div>
            </div>
            <div class="col-md-3">
              <div class="service three">
                <img src="image/cart/support.jpg" />
                <span>
                  <h2>24x7 Support Available</h2>
                  <p>support 24 hours a day</p>
                </span>
              </div>
            </div>
            <div class="col-md-3">
              <div class="service four">
                <img src="image/cart/mobile-app.jpg" />
                <span>
                  <h2>Shop with our App</h2>
                  <p>Download app & get offers</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
