import axios from 'axios'

const clienteAxios = axios.create({
  baseURL: "https://www.reddit.com"
})

export default clienteAxios;