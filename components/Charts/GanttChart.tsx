"use client";
import { generateGantCropData } from "@/lib/generate-gantt-data";
import Chart from "react-google-charts";

const GanttChart = () => {
  return <Chart chartType="Gantt" data={generateGantCropData()} />;
};

export default GanttChart;
