//libraries
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
import React, { useState, useEffect } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

//components
import CheckoutForm from '../Components/checkoutForms'
import { SnackbarError } from '../Helpers/snackbar'

//constants
import useForm from '../Helpers/useForm'
import { cartCheckout } from '../apis/checkout'
import { getLocalData, LOCAL_STORAGE_KEYS } from '../Helpers/localStorage'
import { eng_lang } from '../Helpers/constants'
import { validateEmail } from '../Helpers/validations'

//styles
import { override } from '../Helpers/SpinnerStyle'
import CartItem from '../Components/Checkout/CartItem'

export default function About() {
  const [showShippingField, setShowShippingField] = useState(false)
  const [showErr, setshowErr] = useState(false)
  const [loading, setloading] = useState(false)
  const [snackbar, setSnackBar] = useState(false)
  const [errMsg, seterrMsg] = useState('Error')
  const [sum, setsum] = useState(0)
  const [tax, settax] = useState(0)
  const [severity, setseverity] = useState('')
  const initailState = {
    email: '',
    first_name: '',
    last_name: '',
    zip_code: '',
    phone_number: '',
    city: '',
    state: '',
    gps_location: '',
    shipping: '',
    payment_method: '',
    address: '',
    subTotal: ''
  }
  const initialError = {
    email: true,
    first_name: true,
    last_name: true,
    zip_code: true,
    phone_number: true,
    city: true,
    state: true,
    gps_location: true,
    // shipping: true,
    // payment_method: true,
    address: true
  }
  const { handleChange, form, setForm, error, setError, resetForm } = useForm(
    initailState,
    initialError
  )
  const cardItems = JSON.parse(getLocalData(LOCAL_STORAGE_KEYS.cardItems))

  useEffect(() => {
    if (cardItems?.length > 0) {
      let initial = 0
      cardItems.map((item) => {
        if (item?.unit_price && item?.quantity) {
          initial += item?.unit_price * item?.quantity
        }
      })
      setsum(initial)
      settax(initial * 0.05)
    }
  }, [cardItems])

  //this function will call api and place order
  const placeOrder = async (e) => {
    e.preventDefault()

    //Email validation

    let err = false
    Object.values(error).map((item) => {
      if (item) {
        err = true
      }
      return 0
    })

    if (!cardItems === null || !cardItems || cardItems?.length < 1) {
      setSnackBar(true)
      setseverity('error')
      seterrMsg(eng_lang.SNACKBAR_MESSAGE.EMPTY_CART)
      setTimeout(() => {
        setSnackBar(false)
      }, 2000)
      return
    }
    if (err) {
      setshowErr(true)
      setSnackBar(true)
      seterrMsg(eng_lang.SNACKBAR_MESSAGE.ALL_FEILD_REQ)
      setseverity('error')
      setTimeout(() => {
        setSnackBar(false)
      }, 2000)

      return
    }

    if (!validateEmail(form?.email)) {
      setSnackBar(true)
      setError({
        ...error,
        email: true
      })
      seterrMsg(eng_lang.SNACKBAR_MESSAGE.INVALID_EMAIL)
      setseverity('error')
      setTimeout(() => {
        setSnackBar(false)
      }, 2000)
      return
    }

    const body = {
      payment_reference_id: '2',
      ...form
    }
    try {
      setloading(true)
      const response = await cartCheckout(body)
      if (response) {
        resetForm(initailState, initialError)
        setloading(false)
        setshowErr(false)
        setSnackBar(true)
        setseverity('success')
        seterrMsg(response?.message)
        setTimeout(() => {
          setSnackBar(false)
        }, 4000)
      }
    } catch (error) {
      setSnackBar(true)
      setloading(false)
      seterrMsg(error.message)
      setseverity('error')
      setTimeout(() => {
        setSnackBar(false)
      }, 4000)
    }
  }
  return (
    <>
      <Box mb={{ xs: '30px', md: 15 }} px={{ xs: '30px', md: '300px' }}>
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
          {/* //TODO: add function here to get form value */}
          <Typography
            sx={{ fontSize: '24px', fontWeight: 500, color: '#232323' }}
          >
            BILLING ADDRESS
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <CheckoutForm
                handleChange={handleChange}
                error={error}
                form={form}
                showErr={showErr}
                isShipping={false}
              />

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
            <Grid item xs={12} md={5}>
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

                {cardItems?.length > 0 &&
                  cardItems?.map((item, index) => {
                    return (
                      <CartItem
                        key={index}
                        name={item?.product_name}
                        quantity={item?.quantity}
                        unit_price={item?.unit_price}
                      />
                    )
                  })}

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
                      {sum > 0 ? 'AED ' + sum : 0}
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
                      Tax 5 %
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#121212'
                      }}
                    >
                      {tax > 0 ? 'AED ' + tax : 0}
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
                      {tax + sum > 0 ? `AED ${(tax + sum).toFixed(2)}` : 0}
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
                      Shipping
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
                  <RadioGroup defaultValue="female" name="payment_method">
                    <FormControlLabel
                      value="female"
                      control={<Radio onChange={handleChange} />}
                      label={
                        <>
                          <Typography
                            sx={{
                              fontSize: '16px',
                              color: '#232323'
                            }}
                          >
                            Cash On Delivery
                          </Typography>{' '}
                        </>
                      }
                    />
                    <Box my={1} />
                    <FormControlLabel
                      value="male"
                      control={<Radio onChange={handleChange} />}
                      label={
                        <>
                          <Typography
                            sx={{
                              fontSize: '16px',
                              color: '#232323'
                            }}
                          >
                            Money Transfer
                          </Typography>{' '}
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
                {loading ? (
                  <Button
                    sx={{
                      fontWeight: 600,

                      padding: '15px 36px',
                      background: '#00B353',
                      '&:hover': {
                        background: '#26a37c'
                      }
                    }}
                    variant="contained"
                  >
                    <ClipLoader
                      color={'white'}
                      loading={true}
                      css={override}
                      size={20}
                    />
                  </Button>
                ) : (
                  <Button
                    sx={{
                      fontWeight: 600,
                      padding: '15px 36px',
                      background: '#00B353',
                      '&:hover': {
                        background: '#26a37c'
                      }
                    }}
                    variant="contained"
                    onClick={placeOrder}
                  >
                    {' '}
                    place order
                  </Button>
                )}
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
      <SnackbarError open={snackbar} msg={errMsg} severity={severity} />
    </>
  )
}
