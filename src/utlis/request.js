import axios from 'axios';

//baseURL
const request = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
})

export const get = async (path,options = {}) => {
    const response = await request.get(path,options);
    return response.data;
}

export default request;