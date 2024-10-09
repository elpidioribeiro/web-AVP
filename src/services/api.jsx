import axios from 'axios';

export default axios.create({
    baseURL: 'http://18.230.202.120',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});