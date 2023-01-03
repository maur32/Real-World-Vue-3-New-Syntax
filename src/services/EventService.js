import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/maur32/Real-World-Vue-3-New-Syntax',
    withCredententials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application-json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    }
}