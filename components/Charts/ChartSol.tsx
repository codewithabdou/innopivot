"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "2",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "3",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "4",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "5",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "6",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "7",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "8",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "9",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "10",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "11",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "12",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "13",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "14",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "15",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "16",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "17",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "18",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "19",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "20",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "21",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "22",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "23",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "24",
    "Humidité du sol": Math.floor(Math.random() * 41) + 30,
    "Température du sol": Math.floor(Math.random() * 41) + 30,
  },
];

const ChartSol = () => {
  return (
    <div className={"lg:w-[90%] mt-8 lg:translate-x-0 w-full -translate-x-8"}>
      <ResponsiveContainer width={"110%"} height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="Humidité du sol" stroke="orange" />
          <Line type="monotone" dataKey="Température du sol" stroke="blue" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSol;
