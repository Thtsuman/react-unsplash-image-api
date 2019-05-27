import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 77bac7f9cc3c9ffe20672bad2344a13ccebbdcbfc3f62126b50128568daba398'
    }
});