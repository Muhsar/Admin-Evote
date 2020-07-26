import axios from 'axios'
export const register = newUser => {
    return axios.post('/signup', {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {
            console.log(res.data)
        })
}
export const login = user => {
    return axios.post('/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('token', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}