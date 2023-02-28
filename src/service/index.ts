import axios from 'axios'

const service = axios.create({
    baseURL: 'https://kinggq.github.io',
    timeout: 5000
})

export default service
