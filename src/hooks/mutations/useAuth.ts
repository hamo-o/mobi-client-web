import authApi from "@/apis/auth/authApi";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import apiClient from "@/apis";

export const useAuth = () => {
  const router = useRouter();

  const kakaoMutation = useMutation({
    mutationFn: authApi.LOGIN,
    onSuccess: (data: any) => {
      console.log(data);
      //   setAccessToken(data.accessToken, data.expireTime);
      apiClient.interceptors.request.use(
        (config) => {
          try {
            config.headers.Authorization = `Bearer ${data.accessToken}`;
            return config;
          } catch (err) {}
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      router.push("/");
    },
    onError: (error: any) => {
      console.error(error);
    },
  });

  return {
    kakaoMutation,
  };
};
