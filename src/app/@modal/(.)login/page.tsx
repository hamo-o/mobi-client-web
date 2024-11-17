"use client";

import { Modal } from "@/components/Modal";
import { Button } from "@/components";
import { Logo } from "@/icons";
import Link from "next/link";

const LoginModal = () => {
  return (
    <Modal title={<Logo />}>
      <Link
        style={{ width: "100%" }}
        href={`https://kauth.kakao.com/oauth/authorize?scope=account_email&response_type=code&state=qKTYVa2u_f8bhKdwf7j2wbSSQVt1dfrH1YTO2SUnqYU%3D&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&through_account=true&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}`}
      >
        <Button
          style={{ width: "100%" }}
          size="medium"
          state="active"
          text="카카오 로그인"
        />
      </Link>
    </Modal>
  );
};

export default LoginModal;
