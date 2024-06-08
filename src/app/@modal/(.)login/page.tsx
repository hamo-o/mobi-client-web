import { Modal } from "@/components/Modal";
import { Button, Input } from "@/components";
import { Logo } from "@/icons";

import { style } from "@vanilla-extract/css";

const LoginModal = () => {
  return (
    <Modal title={<Logo />} button={<Button state="active" text="로그인" />}>
      <Input label="이메일*" icon={false} />
      <Input label="비밀번호*" icon={false} />
    </Modal>
  );
};

export default LoginModal;
