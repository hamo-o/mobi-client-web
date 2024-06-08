import { Modal } from "@/components/Modal";
import { Button, Input } from "@/components";

const PlaceVisitModal = () => {
  return (
    <Modal title="방문 예정" button={<Button state="active" text="완료" />}>
      <Input label="방문 장소*" icon={false} />
      <div style={{ display: "flex", gap: 20 }}>
        <Input label="방문 날짜*" icon={false} />
        <Input label="방문 시간*" icon={false} />
      </div>
      <Input label="방문 목적" icon={false} />
    </Modal>
  );
};

export default PlaceVisitModal;
