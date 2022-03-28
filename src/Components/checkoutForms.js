//libraries
import { Box, Grid } from '@mui/material'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Tooltip } from '@material-ui/core'

//components
import InputFeild from './Layout/Input'

const CheckoutForm = ({ handleChange, form, error, isShipping, showErr }) => {
  const { handleSubmit, control } = useForm()
  const submitForm = (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={submitForm}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={isShipping ? 12 : 6}>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, value } }) => (
              <div class="form-group">
                <label
                  style={{
                    fontSize: '18px',
                    color: '#232323',
                    fontWeight: 600
                  }}
                >
                  First Name
                  {showErr && error?.first_name && (
                    // <Tooltip title={`first_name is reuired`}>
                    <span class="text-red">*</span>
                    // </Tooltip>
                  )}
                </label>
                <InputFeild
                  style={{
                    padding: '10px'
                  }}
                  name={'first_name'}
                  value={form?.first_name}
                  handleChange={handleChange}
                  type="text"
                  className="form-control"
                  required={true}
                />
              </div>
            )}
          />
        </Grid>
        <Grid item xs={12} md={isShipping ? 12 : 6}>
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, value } }) => (
              <div class="form-group">
                <label
                  style={{
                    fontSize: '18px',
                    color: '#232323',
                    fontWeight: 600
                  }}
                >
                  last Name
                  {showErr && error?.last_name && (
                    <span class="text-red">*</span>
                  )}
                </label>

                <InputFeild
                  style={{
                    padding: '10px'
                  }}
                  name={'last_name'}
                  value={form?.last_name}
                  handleChange={handleChange}
                  type="text"
                  className="form-control"
                  required={true}
                />
              </div>
            )}
          />
        </Grid>
      </Grid>
      <Box>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <div class="form-group">
              <label
                style={{
                  fontSize: '18px',
                  color: '#232323',
                  fontWeight: 600
                }}
              >
                Email{' '}
                {showErr && error?.email && <span class="text-red">*</span>}
              </label>

              <InputFeild
                style={{
                  padding: '10px'
                }}
                name={'email'}
                value={form?.email}
                handleChange={handleChange}
                type="email"
                className="form-control"
                required={true}
              />
            </div>
          )}
        />
      </Box>

      <Box>
        <Controller
          control={control}
          name="gpsLocation"
          render={({ field: { onChange, value } }) => (
            <div class="form-group">
              <label
                style={{
                  fontSize: '18px',
                  color: '#232323',
                  fontWeight: 600
                }}
              >
                GPS location
                {showErr && error?.gps_location && (
                  <span class="text-red">*</span>
                )}
              </label>

              <InputFeild
                style={{
                  padding: '10px'
                }}
                name={'gps_location'}
                value={form?.gps_location}
                handleChange={handleChange}
                type="text"
                className="form-control"
                required={true}
              />
            </div>
          )}
        />
      </Box>
      {!isShipping && (
        <>
          <Box mt={2}>
            <iframe
              style={{ width: '100%' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3012030251!2d54.9475610883428!3d25.076381466775658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1642426034582!5m2!1sen!2s"
            ></iframe>
          </Box>
        </>
      )}

      <Box>
        <Controller
          control={control}
          name="streetAddress"
          render={({ field: { onChange, value } }) => (
            <div class="form-group">
              <label
                style={{
                  fontSize: '18px',
                  color: '#232323',
                  fontWeight: 600
                }}
              >
                Street Address
                {showErr && error?.gps_location && (
                  <span class="text-red">*</span>
                )}
              </label>

              <InputFeild
                style={{
                  padding: '10px'
                }}
                name={'address'}
                value={form?.address}
                handleChange={handleChange}
                type="text"
                className="form-control"
                required={true}
              />
            </div>
          )}
        />
      </Box>
      <Box>
        <Controller
          control={control}
          name="postcode"
          render={({ field: { onChange, value } }) => (
            <div class="form-group">
              <label
                style={{
                  fontSize: '18px',
                  color: '#232323',
                  fontWeight: 600
                }}
              >
                Zip/Postcode
                {showErr && error?.zip_code && <span class="text-red">*</span>}
              </label>
              <InputFeild
                style={{
                  padding: '10px'
                }}
                name={'zip_code'}
                value={form?.zip_code}
                handleChange={handleChange}
                type="text"
                className="form-control"
                required={true}
              />
            </div>
          )}
        />
      </Box>
      <Box>
        <Controller
          control={control}
          name="city"
          render={({ field: { onChange, value } }) => (
            <div class="form-group">
              <label
                style={{
                  fontSize: '18px',
                  color: '#232323',
                  fontWeight: 600
                }}
              >
                city
                {showErr && error?.city && <span class="text-red">*</span>}
              </label>

              <InputFeild
                style={{
                  padding: '10px'
                }}
                name={'city'}
                value={form?.city}
                handleChange={handleChange}
                type="text"
                className="form-control"
                required={true}
              />
            </div>
          )}
        />
      </Box>
      <Box>
        <Controller
          control={control}
          name="state"
          render={({ field: { onChange, value } }) => (
            <div class="form-group">
              <label
                style={{
                  fontSize: '18px',
                  color: '#232323',
                  fontWeight: 600
                }}
              >
                State
                {showErr && error?.state && <span class="text-red">*</span>}
              </label>

              <InputFeild
                style={{
                  padding: '10px'
                }}
                name={'state'}
                value={form?.state}
                handleChange={handleChange}
                type="text"
                className="form-control"
                required={true}
              />
            </div>
          )}
        />
      </Box>
      <Box>
        <Controller
          control={control}
          name="telephone"
          render={({ field: { onChange, value } }) => (
            <div class="form-group">
              <label
                style={{
                  fontSize: '18px',
                  color: '#232323',
                  fontWeight: 600
                }}
              >
                Telephone{' '}
                {showErr && error?.phone_number && (
                  <span class="text-red">*</span>
                )}
              </label>

              <InputFeild
                style={{
                  padding: '10px'
                }}
                name={'phone_number'}
                value={form?.phone_number}
                handleChange={handleChange}
                type="number"
                className="form-control"
                required={true}
              />
            </div>
          )}
        />
      </Box>
    </form>
  )
}

export default CheckoutForm
