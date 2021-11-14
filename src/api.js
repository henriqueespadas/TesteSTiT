import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/orgs/aws/members',
    //baseURL: 'https://api.github.com/users/:usergithub',
})

export default api;