import xior from "xior";
import { cookies } from "next/headers";

const cookieStore = cookies();
const accessToken = cookieStore.get("access_token")?.value;

const apiClient = xior.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${accessToken}`,
  },

  withCredentials: true,
});

export default apiClient;
