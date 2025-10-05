import { useApi } from "./useApi";

const api = useApi();

export async function getPresence() {
    try {
      const response = await api.get('/presence');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching room:', error);
      throw error;
    }
}
