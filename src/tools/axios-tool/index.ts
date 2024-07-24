import axios from "axios"
import { API_URI } from "../../common/constants"

const axiosTool = axios.create({
  baseURL: API_URI,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
})

axiosTool.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, error => {
    return Promise.reject(error)
  }
)

export default axiosTool
