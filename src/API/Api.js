import axios from "axios";


let instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '53f4be4b-8bc9-4c00-b66d-671af61de6ae'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const UsersAPI = {
    getUser(activePageUser, pageUser) {
        return instance.get(`users?page=${activePageUser}&count=${pageUser}`)
            .then(response => {
                return response.data;
            })
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },
    auth() {
        return instance.get('/auth/me').then(response => {
            return response.data
        })
    }
}




