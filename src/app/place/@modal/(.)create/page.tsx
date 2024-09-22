"use client";

import { Modal } from "@/components/Modal";
import { Button, Input } from "@/components";
import { useForm } from "react-hook-form";
import Calendar from "@/components/Calendar/Calendar";

const PlaceVisitModal = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Modal title="방문 예정" button={<Button state="active" text="완료" />}>
      <Input label="방문 장소*" icon={false} {...register("place")} />
      <div style={{ display: "flex", gap: 20 }}>
        <Calendar />
        <Input label="방문 시간*" icon={false} />
      </div>
      <Input label="방문 목적" icon={false} {...register("purpose")} />
    </Modal>
  );
};

export default PlaceVisitModal;
