"use client";

import { useSearchParams } from "next/navigation";
import { Modal } from "@/components/Modal";
import { Button, Input } from "@/components";
import { useState } from "react";

const PlaceVisitModal = ({ params: { id } }: { params: { id: string } }) => {
  const params = useSearchParams();
  const placeName = params.get("placeName");
  const visitTime = params.get("visitTime");
  const [message, setMessage] = useState("");

  const handleClickSubmit = () => {
    console.log(id, visitTime, message);
  };

  return (
    <Modal
      title="방문 리뷰"
      button={
        <Button
          state={message ? "active" : "disabled"}
          text="완료"
          onClick={handleClickSubmit}
        />
      }
    >
      <div style={{ display: "flex", gap: 20 }}>
        <Input
          label="방문 장소*"
          icon={false}
          {...(placeName && { value: placeName })}
          readOnly
        />
        <Input
          label="방문 시간대*"
          icon={false}
          {...(visitTime && { value: visitTime })}
          readOnly
        />
      </div>
      <Input
        label="한줄평*"
        icon={false}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </Modal>
  );
};

export default PlaceVisitModal;
