import axios from 'axios';
export const API = 'https://thedaily.uz/api/v1'

const get = url => axios.get(API + `${url}`).then(res => res.data)
const post = (url, data) => axios.post(API + `${url}`, data).then(res => res.data)

export {
    get,
    post,
}