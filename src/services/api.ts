import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dashgo-hwqxif5xa-euhenriquefranca.vercel.app/api'
})