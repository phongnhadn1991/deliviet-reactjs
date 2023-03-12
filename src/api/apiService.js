import axios from "../config"

export const postCreateNewUser = (fullname, email, phone) => {
    let data = {
        fullname: fullname,
        email: email,
        phone: phone
    }
    return axios.post('users', data)
}
