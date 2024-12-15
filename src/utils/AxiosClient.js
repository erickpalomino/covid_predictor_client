import axios from "axios";


export const CovAxios = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      }
  });