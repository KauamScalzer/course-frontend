import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5050/api',
  validateStatus: function (status) {
    return status >= 200 && status < 499
  }
})

export default api