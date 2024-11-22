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
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "2",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "3",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "4",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "5",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "6",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "7",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "8",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "9",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "10",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "11",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "12",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "13",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "14",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "15",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "16",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "17",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "18",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "19",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "20",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "21",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "22",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "23",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
  {
    name: "24",
    "Humidité d'air": Math.floor(Math.random() * 41) + 30,
    "Température d'air": Math.floor(Math.random() * 41) + 30,
  },
];

const ChartAir = () => {
  return (
    <div className={"lg:w-[90%] lg:translate-x-0 w-full my-8 -translate-x-8"}>
      <ResponsiveContainer width={"110%"} height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="Humidité d'air" stroke="red" />
          <Line type="monotone" dataKey="Température d'air" stroke="green" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartAir;
