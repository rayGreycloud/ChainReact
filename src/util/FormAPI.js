import axios from 'axios'

export default axios.create({
  baseURL: `${process.env.REACT_APP_API_SCHEME}${process.env.REACT_APP_API_HOST}`,
  responseType: 'json'
})
