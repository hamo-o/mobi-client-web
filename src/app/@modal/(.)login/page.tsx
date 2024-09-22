"use client";

import { Modal } from "@/components/Modal";
import { Button, Input } from "@/components";
import { Logo } from "@/icons";
import Link from "next/link";

const LoginModal = () => {
  return (
    <Modal title={<Logo />} button={<Button state="active" text="로그인" />}>
      <Link
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`}
      >
        <Button text="카카오 로그인" />
      </Link>
    </Modal>
  );
};

export default LoginModal;
