import axios from 'axios';

const BASE_URL = 'https://weddingcms.thenicedream.com/api/v1';

export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
  })

  export const useApi = () => {
    return apiClient;
  };
