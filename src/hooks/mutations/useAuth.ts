import authApi from "@/apis/auth/authApi";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { BaseResponse, LoginResponse } from "@/types/dto";
import { setCookie } from "@/app/actions";

export const useAuth = () => {
  const router = useRouter();

  const kakaoMutation = useMutation({
    mutationFn: authApi.LOGIN,
    onSuccess: (response: BaseResponse<LoginResponse>) => {
      if (!response.success) return;
      const data = response.data;
      const token = data.tokenVo;
      if (!token) return;

      const { accessToken, accessTokenAge } = token;
      setCookie("access_token", accessToken, {
        httpOnly: true,
        secure: true,
        maxAge: accessTokenAge,
      });
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
