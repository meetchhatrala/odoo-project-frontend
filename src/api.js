import axios from "axios";
const API_URL = process.env.REACT_APP_BACKEND_URL 
  ? `${process.env.REACT_APP_BACKEND_URL}/api/auth/` 
  : "http://127.0.0.1:8000/api/auth/";

// const API_URL = "http://127.0.0.1:8000/api/auth/" || ;

export const signup = async (userData) => {
    return await axios.post(`${API_URL}signup/`, userData);
};

export const login = async (userData) => {
    return await axios.post(`${API_URL}login/`, userData);
};
