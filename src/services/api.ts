import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dashgo-nine.vercel.app/api'
})