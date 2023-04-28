import axios from 'axios';

export const api = axios.create({
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
})