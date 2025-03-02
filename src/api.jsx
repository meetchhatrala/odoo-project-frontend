import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/auth/" || "https://odoo-backend-p4vw.onrender.com";

export const signup = async (userData) => {
    console.log(userData);
    
    return await axios.post(`${API_URL}signup/`, userData);
};

export const login = async (userData) => {
    console.log(userData);
    return await axios.post(`${API_URL}login/`, userData);
};
