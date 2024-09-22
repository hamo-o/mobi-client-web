import authApi from "@/apis/auth/authApi";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import apiClient from "@/apis";
import { LoginResponse } from "@/types/dto";

export const useAuth = () => {
  const router = useRouter();

  const kakaoMutation = useMutation({
    mutationFn: authApi.LOGIN,
    onSuccess: (data: LoginResponse) => {
      const token = data.tokenVo;
      if (!token) return;
      const { accessToken, accessTokenAge } = token;
      setAccessToken(accessToken, accessTokenAge);
      apiClient.interceptors.request.use(
        (config) => {
          try {
            config.headers.Authorization = `Bearer ${accessToken}`;
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

const setAccessToken = (accessToken: string, expireTime: number) => {
  console.log(accessToken, expireTime);
};
