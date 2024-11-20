"use client";

import { colors } from "@/styles/colors";
import { typos } from "@/styles/typos.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import type { ChartEvent } from "chart.js";
import { container } from "./Chart.css";
import { Timeline } from "@/types/dto";
import { useContext, useRef } from "react";
import ReviewContext from "../../_contexts/ReviewContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = ({ timeLine }: { timeLine: Timeline }) => {
  const chartRef = useRef<any>(null);

  const { time: selectedTime, setTime: setSelectedTime } =
    useContext(ReviewContext);

  const formatData = (timeLine: Timeline) => {
    return {
      labels: Object.keys(timeLine).map((time) => `${time}시`),
      datasets: [
        {
          data: Object.values(timeLine).map((time) => +time),
          backgroundColor: Object.entries(timeLine).map(([time, num]) =>
            formatNumberToColor(+time, +num)
          ),
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
        },
      ],
    };
  };

  const formatStringTimeToNumber = (time: string) => {
    return +time.split("시")[0];
  };

  const formatNumberToColor = (time: number, num: number) => {
    if (time === selectedTime) return colors.green;
    if (num > 50000) return colors.white;
    if (num > 30000) return colors.gray_01;
    if (num > 10000) return colors.gray_03;
    if (num > 5000) return colors.gray_04;
    return colors.gray_05;
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    barPercentage: 0.6,

    onClick: (event: ChartEvent) => {
      const chart = chartRef.current;
      if (!chart) return;

      const points = chart.getElementsAtEventForMode(
        event,
        "nearest",
        { intersect: true },
        true
      );

      if (points.length) {
        const firstPoint = points[0];
        const label = chart.data.labels[firstPoint.index];
        if (setSelectedTime) setSelectedTime(formatStringTimeToNumber(label));
      }
    },
  };
  return (
    <div className={container}>
      <Bar
        options={options}
        data={formatData(timeLine)}
        ref={chartRef}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};
