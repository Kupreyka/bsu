import axios from "axios";


let instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '53f4be4b-8bc9-4c00-b66d-671af61de6ae'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
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
    getUserId(UserId) {
        return instance.get('profile/' + UserId)
            .then(response => {
                return response.data
            })
    }
}

export const ProfileApi = {
    getStatus(userId) {
        return instance.get('/profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('/profile/status', {status: status})
    },
    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile)
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfileInfo(profile) {
        return instance.put('/profile', profile)
    }

}

export const AuthAPI = {
    auth() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe, captcha = null) {
        return instance.post('/auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('/auth/login')
    }
}
export const SecurityAPI = {
    getCaptchaUrl() {
        return instance.get('/security/get-captcha-url')
    }
}


