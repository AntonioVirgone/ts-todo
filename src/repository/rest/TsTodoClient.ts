import axios from "axios";

export async function verifyToken(url: string, data: any): Promise<void> {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(`Error token verif. ${error}`);
    throw error;
  }
}
