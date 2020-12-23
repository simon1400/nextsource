import axios from 'axios'

// const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
// const EMAILING_ENDPOINT = process.env.REACT_APP_EMAILING_ENDPOINT

// export const AxiosAPI = axios.create({
//   baseURL: API_ENDPOINT,
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })

export const AxiosEMAILING = axios.create({
  baseURL: 'https://emailing.bezones.cz',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})
