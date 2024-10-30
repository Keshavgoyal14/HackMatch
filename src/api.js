import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const login = async (formData) => {
    try {
        const response = await API.post('/login', formData);
        return response.data;
    } catch (error) {
        console.error('API login error:', error);
        throw error;
    }
};

export const signup = async (formData) => {
    try {
        const response = await API.post('/user/signup', formData);
        return response.data;
    } catch (error) {
        console.error('API signup error:', error);
        throw error;
    }
};

export const fetchEvents = async () => {
    try {
        const response = await API.get('/events');
        return response.data;
    } catch (error) {
        console.error('API fetchEvents error:', error);
        throw error;
    }
};

export const updateProfile = async (profileData) => {
    try {
        const response = await API.put('/profile', profileData);
        return response.data;
    } catch (error) {
        console.error('API updateProfile error:', error);
        throw error;
    }
};