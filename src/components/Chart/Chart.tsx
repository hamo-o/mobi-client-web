"use client";

import { colors } from "@/styles/colors";
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
import { container } from "./Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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
};

const labels = [
  0, 1, 2, 3, 4, 5, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

export const data = {
  labels,
  datasets: [
    {
      data: [
        100, 80, 70, 50, 40, 80, 70, 60, 50, 40, 10, 20, 30, 70, 80, 90, 80, 65,
        75, 100, 85, 95, 100, 95,
      ],
      backgroundColor: [
        colors.gray_03,
        colors.gray_04,
        colors.gray_04,
        colors.gray_05,
        colors.gray_05,
        colors.gray_03,
        colors.gray_04,
        colors.gray_04,
        colors.gray_05,
        colors.green,
        colors.gray_05,
        colors.gray_05,
        colors.gray_05,
        colors.gray_04,
        colors.gray_03,
        colors.gray_03,
        colors.gray_04,
        colors.gray_04,
        colors.gray_03,
        colors.gray_03,
        colors.gray_03,
        colors.gray_03,
        colors.gray_03,
      ],
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
    },
  ],
};

export const Chart = () => {
  return (
    <div className={container}>
      <Bar options={options} data={data} />
    </div>
  );
};
