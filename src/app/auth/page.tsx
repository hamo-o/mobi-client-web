import { Modal } from "@/components/Modal";
import { LinkButton } from "@/components";
import { Logo } from "@/icons";

const LoginPage = () => {
  return (
    <Modal title={<Logo />}>
      <LinkButton
        size="medium"
        state="active"
        text="카카오 로그인"
        href={`https://kauth.kakao.com/oauth/authorize?scope=account_email&response_type=code&state=qKTYVa2u_f8bhKdwf7j2wbSSQVt1dfrH1YTO2SUnqYU%3D&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&through_account=true&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}`}
      />
    </Modal>
  );
};

export default LoginPage;
