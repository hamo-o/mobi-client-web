"use client";

import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import { Input } from "../Input";

const Calendar = () => {
  const [selected, setSelected] = useState<Date | null>(new Date());

  const parseDateToString = (date: Date | null) => {
    if (!date) return "";

    const year = formatWithZero(date.getFullYear());
    const month = formatWithZero(date.getMonth() + 1);
    const day = formatWithZero(date.getDate());
    const hour = formatWithZero(date.getHours());
    const minute = formatWithZero(date.getMinutes());

    return `${year}-${month}-${day} ${hour}:${minute}`;
  };

  const formatWithZero = (value: number) => value.toString().padStart(2, "0");

  return (
    <DatePicker
      showTimeSelect
      customInput={<Input label="방문 예정 날짜 및 시간*" icon={false} />}
      value={parseDateToString(selected)}
      selected={selected}
      onChange={(date: Date | null) => setSelected(date)}
    />
  );
};

export default Calendar;
