import { Modal } from "@/components/Modal";
import { Button, Input } from "@/components";
import { Logo } from "@/icons";

import { style } from "@vanilla-extract/css";

const PlaceVisitModal = () => {
  return (
    <Modal title={<Logo />} button={<Button state="active" text="완료" />}>
      <Input label="방문 장소*" icon={false} />
      <div className={inputContainer}>
        <Input label="방문 날짜*" icon={false} />
        <Input label="방문 시간*" icon={false} />
      </div>
      <Input label="방문 목적" icon={false} />
    </Modal>
  );
};

const inputContainer = style({
  display: "flex",
  gap: 20,
});

export default PlaceVisitModal;
