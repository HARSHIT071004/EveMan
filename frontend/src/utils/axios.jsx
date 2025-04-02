import axios from 'axios'

const urlAccess = import.meta.env.VITE_DEV;

const instance = axios.create({
    baseUrl: urlAccess == "production" ? "https://evemanbackend.vercel.app" : "http://localhost:5000"
})

export default instance;