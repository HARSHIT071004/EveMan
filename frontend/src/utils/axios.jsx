import axios from 'axios'


const instance = axios.create({
    baseURL: "https://evemanbackend.vercel.app/",
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})

export default instance;