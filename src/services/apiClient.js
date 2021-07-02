import axios from "axios"

class ApiClient {
    constructor(remoteHostUrl)
    {
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.tokenName = "life_tracker_token"
    }

    setToken(token)
    {
        this.token = token
        localStorage.setItem(this.tokenName, token)
    }

    async request({ endpoint, method = `GET`, data = {}}) 
    {
        const url = `${this.remoteHostUrl}/${endpoint}`
        const headers = {
            "Content-Type": "application/json"
        }

        if (this.token)
        {
            headers["Authorization"] = `Bearer ${this.token}`
        }
        
        try {
            const res = await axios({ url, method, data, headers })
            return { data: res.data, error: null }
        } 
        catch (error) 
        {
            console.error("APIclient.makeRequest.error:")
            console.error({ errorResponse: error.response })
            const message = error?.response?.data?.error?.message
            return { data: null, error: message || String(error) }
        }
    }

    async loginUser(credentials) 
    {
        return await this.request({ endpoint: `auth/login`, method: `POST`, data: credentials })
    }

    async registerUser(credentials) 
    {
        return await this.request({ endpoint: `auth/register`, method: `POST`, data: credentials })
    }

    async fetchUserFromToken() {
        return await this.request({ endpoint: `auth/me`, method: `GET` })
    }

    async logoutUser() 
    {
        this.setToken(null)
        localStorage.setItem(this.tokenName, "")
    }

    async addExercise(exercise)
    {
        return await this.request({ endpoint: `exercise/add`, method: `POST`, data: exercise})
    }

    async getAllExercise()
    {
        return await this.request({ endpoint: `exercise`, method: `GET`})
    }

    async getExerciseById(id)
    {
        return await this.request({ endpoint: `exercise/${id}`, method: `GET`})
    }

    async getActInfo()
    {
        return await this.request({ endpoint: `activity/info`, method: `GET`})
    }

}
const API = new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001")

export default API
