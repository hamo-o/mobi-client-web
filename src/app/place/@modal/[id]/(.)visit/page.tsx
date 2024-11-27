"use client";

import { Modal } from "@/components/Modal";
import { Button } from "@/components";
import { useState } from "react";
import Calendar from "@/components/Calendar/Calendar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components";
import { parseDateToString } from "@/utils/pareDate";
import { usePlaceTime } from "@/hooks/mutations/usePlaceTime";

const PlaceVisitModal = ({ params: { id } }: { params: { id: string } }) => {
  const [selected, setSelected] = useState<Date | null>(new Date());
  const pathname = usePathname();
  const params = useSearchParams();
  const { mutation } = usePlaceTime(+id);
  const router = useRouter();

  const handleClickSubmit = () => {
    const [visitDate, placeTime] = parseDateToString(selected).split(" ");
    mutation.mutate({ visitDate, placeTime });
    router.push("/mypage");
    router.refresh();
  };

  if (!pathname.includes("visit")) {
    return null;
  }

  return (
    <Modal
      title={`${params.get("name")}에 언제 방문하시나요?`}
      button={
        <Button
          state={selected ? "active" : "disabled"}
          text="완료"
          onClick={handleClickSubmit}
        />
      }
    >
      <div style={{ display: "flex", gap: 20 }}>
        <Calendar
          selected={selected}
          setSelected={setSelected}
          customInput={<Input label="방문 예정 날짜 및 시간*" icon={false} />}
        />
      </div>
    </Modal>
  );
};

export default PlaceVisitModal;
