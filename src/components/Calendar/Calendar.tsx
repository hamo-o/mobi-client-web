"use client";

import DatePicker from "react-datepicker";
import { useState, forwardRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import { parseDateToString } from "@/utils/pareDate";

interface CalendarProps {
  selected?: Date | null;
  setSelected?: (date: Date | null) => void;
  customInput: JSX.Element;
}

const Calendar = forwardRef<DatePicker, CalendarProps>((props, ref) => {
  const {
    selected: customSelected,
    setSelected: customSetSelected,
    customInput,
  } = props;
  const [selected, setSelected] = useState<Date | null>(new Date());

  return (
    <DatePicker
      showTimeSelect
      customInput={customInput}
      value={parseDateToString(customSelected || selected)}
      selected={customSelected || selected}
      onChange={customSetSelected || ((date: Date | null) => setSelected(date))}
      ref={ref}
    />
  );
});

Calendar.displayName = "Calendar";

export default Calendar;
