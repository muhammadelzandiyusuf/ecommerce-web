import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://private-4639ce-ecommerce56.apiary-mock.com/'
});

export default instance;