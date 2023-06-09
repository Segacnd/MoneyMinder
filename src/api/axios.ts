import axios from 'axios';

const BASE_URL = 'https://api.exchangerate.host';

export const defaultRequest = axios.create({
  baseURL: `${BASE_URL}`,
});

export const symbolsRequest = axios.create({
  baseURL: `${BASE_URL}/symbols`,
});

export const convertRequest = axios.create({
  baseURL: `${BASE_URL}/convert`,
});

export const getAllSymbols = async () => {
  const response = await symbolsRequest.get('');
  return response.data;
};

// https://api.exchangerate.host/convert?from=USD&to=BYN
// https://api.exchangerate.host/symbols
