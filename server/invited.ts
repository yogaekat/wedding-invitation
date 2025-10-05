import { useApi } from "./useApi";

const api = useApi();

export async function getInvited() {
    try {
      const response = await api.get('/invited');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching inivited:', error);
      throw error;
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getInvitedDetail(slug: any) {
  try {
    const response = await api.get(`/invited/${slug}`)
    return response.data.data
  } catch (error: any) {
    // Jika backend return 404
    if (error.response?.status === 404) {
      // Biarkan nuxt yang handle 404 (lempar ke useAsyncData)
      throw createError({
        statusCode: 404,
        statusMessage: 'Guest not found',
        fatal: true
      })
    }

    console.error('Error fetching invited detail:', error)
    throw error
  }
}

