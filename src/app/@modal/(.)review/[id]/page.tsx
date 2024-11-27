"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Modal } from "@/components/Modal";
import { Button, Input } from "@/components";
import { useState } from "react";
import { useReview } from "@/hooks/mutations/useReview";
import useModalRoute from "@/hooks/useModalRoute";
import { useRouter } from "next/navigation";

const PlaceVisitModal = ({ params: { id } }: { params: { id: string } }) => {
  const pathname = usePathname();
  const params = useSearchParams();
  const { mutation } = useReview(Number(id));
  const [message, setMessage] = useState("");
  const { closeModal } = useModalRoute();
  const router = useRouter();

  const placeName = params.get("placeName");
  const visitTime = params.get("visitTime");

  const handleClickSubmit = () => {
    if (visitTime) mutation.mutate({ message, time: visitTime });
    router.push(`/place/${id}`);
  };

  if (!pathname.includes("review")) {
    return null;
  }

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
