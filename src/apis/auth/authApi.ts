import apiClient from "..";

const authApi = {
  LOGIN: async (code: string) => {
    const response = await apiClient.get("/login/oauth", {
      params: {
        code: code,
        provider: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
      },
    });
    return response.data;
  },
};
export default authApi;
