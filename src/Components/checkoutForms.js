import { Box, Grid } from '@mui/material'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

const CheckoutForm = (props) => {
  const { isShipping } = props

  const { handleSubmit, control } = useForm()
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
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
                  First Name <span class="text-red">*</span>
                </label>
                <input
                  style={{
                    padding: '10px'
                  }}
                  value={value}
                  onChange={(value) => onChange(value)}
                  type="text"
                  class="form-control"
                  required
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
                  last Name <span class="text-red">*</span>
                </label>
                <input
                  style={{
                    padding: '10px'
                  }}
                  value={value}
                  onChange={(value) => onChange(value)}
                  type="text"
                  class="form-control"
                  required
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
                Email <span class="text-red">*</span>
              </label>
              <input
                style={{
                  padding: '10px'
                }}
                value={value}
                onChange={(value) => onChange(value)}
                type="email"
                class="form-control"
                required
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
              </label>
              <input
                style={{
                  padding: '10px'
                }}
                value={value}
                onChange={(value) => onChange(value)}
                type="text"
                class="form-control"
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
                Street address <span class="text-red">*</span>
              </label>
              <input
                style={{
                  padding: '10px'
                }}
                value={value}
                onChange={(value) => onChange(value)}
                type="email"
                class="form-control"
                required
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
                Zip/Postcode <span class="text-red">*</span>
              </label>
              <input
                style={{
                  padding: '10px'
                }}
                value={value}
                onChange={(value) => onChange(value)}
                type="email"
                class="form-control"
                required
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
                City <span class="text-red">*</span>
              </label>
              <input
                style={{
                  padding: '10px'
                }}
                value={value}
                onChange={(value) => onChange(value)}
                type="email"
                class="form-control"
                required
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
                State <span class="text-red">*</span>
              </label>
              <input
                style={{
                  padding: '10px'
                }}
                value={value}
                onChange={(value) => onChange(value)}
                type="email"
                class="form-control"
                required
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
                Telephone <span class="text-red">*</span>
              </label>
              <input
                style={{
                  padding: '10px'
                }}
                value={value}
                onChange={(value) => onChange(value)}
                type="tel"
                class="form-control"
                required
              />
            </div>
          )}
        />
      </Box>
    </form>
  )
}

export default CheckoutForm
