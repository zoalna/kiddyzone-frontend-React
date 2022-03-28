//libraries
import axios from 'axios'

//constants
import { API_BASE_URL } from '../services'
import { getLocalData, LOCAL_STORAGE_KEYS } from '../localStorage'

export const apiHeaderConfiguration = (type, end_point, method, body) => {
  const token = getLocalData(LOCAL_STORAGE_KEYS.authToken)
  switch (type) {
    case 'new_token':
      return {
        url: `${API_BASE_URL}${end_point}`,
        method: method,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`
        },
        data: new URLSearchParams(body)
      }
      break

    case 'token':
      return {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }
      break

    case 'auth_token':
      return axios({
        url: `${API_BASE_URL}${end_point}`,
        method: method,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        data: body
      })

      break

    case 'multipart':
      return {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json'
        }
      }
      break

    default:
      return { headers: { 'Content-Type': 'application/json' } }
      break
  }
}
