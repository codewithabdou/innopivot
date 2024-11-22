"use client";

import React from "react";
import CROPS from "@/constants/crops";
import selectNextCrop from "@/lib/crop-rotation-algorithm";
import {
  ArrowDownRight,
  ArrowUpRight,
  Calendar,
  Check,
  ClipboardX,
  Droplet,
  Droplets,
  Earth,
  Pipette,
  Sprout,
  ThermometerSunIcon,
  X,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts";

const environment: {
  temp: number;
  humidity: number;
} = {
  temp: 25, // Current temperature in Celsius
  humidity: 50, // Percentage
};

const soil: {
  salinity: number;
  moisture: number;
  nutrientLevels: {
    nitrogen: number;
    phosphorus: number;
    potassium: number;
  };
  recentDiseases: string[];
} = {
  salinity: 6, // g/L
  moisture: 300, // mm
  nutrientLevels: { nitrogen: 50, phosphorus: 35, potassium: 45 }, // Exact nutrient values in kg/ha
  recentDiseases: ["rouille jaune"], // Diseases detected in the field
};

// Current field data
const currentCrop: string = "soja"; // Current crop
const MonthsToEndOfCycle: number = 1; // Months passed in the current crop's cycle
const currentMonth: number = 9; // November

const mois = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const page = () => {
  const result: any = selectNextCrop(
    CROPS, // Array of crop details
    environment, // Environmental data
    soil, // Soil data
    currentCrop, // Current crop in the field
    MonthsToEndOfCycle, // Months into the current crop's growth cycle
    currentMonth, // Current calendar month
    false // Override sowing month (set to true for exceptions)
  );

  console.log(result);

  const data = result.explanations.map((explanation: any) => {
    return {
      name: explanation.crop,
      score: explanation.score,
    };
  });

  return (
    <div className="lg:px-[3%] px-4">
      <h1 className="lg:text-4xl text-2xl mb-2 font-bold">
        Recommandation de Culture pour le Mois Prochain
      </h1>
      <p className="text-blue-500 text-sm font-light">
        En fonction des conditions actuelles du champ et de l'algorithme de
        rotation des cultures, la culture recommandée pour le mois prochain sera
        affichée.
      </p>
      <div className="flex flex-col py-8 gap-4">
        <h2 className="font-semibold text-xl lg:text-2xl text-gray-700">
          Valeurs actuelles des données du champ
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-6  ">
          <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">{mois[currentMonth - 1]}</p>
              <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
                <Calendar size={25} className=" text-blue-500" />
              </div>
            </div>
            <p>Mois actuel</p>
          </div>
          <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">{currentCrop}</p>
              <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
                <Sprout size={25} className=" text-blue-500" />
              </div>
            </div>
            <p>Culture actuelle</p>
            <div className="flex gap-2 items-center">
              <p className="text-blue-500 text-sm font-light">
                {MonthsToEndOfCycle > 0
                  ? `possède encore ${MonthsToEndOfCycle} mois avant la fin de sa croissance.`
                  : `a terminé son cycle de croissance.`}
              </p>
            </div>
          </div>
          <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">
                {soil.recentDiseases.length}
              </p>
              <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
                <ClipboardX size={25} className=" text-blue-500" />
              </div>
            </div>
            <p>Recent Diseases</p>
            <div className="flex gap-2 items-center">
              <p className="text-blue-500 text-sm font-light">
                {soil.recentDiseases.length > 0
                  ? ` ${soil.recentDiseases.join(", ")} détectée(s).`
                  : "Aucune maladie récente détectée."}
              </p>
            </div>
          </div>
          <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">
                {soil.nutrientLevels.nitrogen} ,{" "}
                {soil.nutrientLevels.phosphorus} ,{" "}
                {soil.nutrientLevels.potassium} kg/ha
              </p>
              <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
                <Pipette size={25} className=" text-blue-500" />
              </div>
            </div>
            <p>NPK du sol</p>
            <div className="flex gap-2 items-center">
              <ArrowUpRight size={20} className="text-emerald-500 shrink-0" />
              <p className="text-blue-500 text-sm font-light">
                Semaine dernière : 30kg/ha - 40kg/ha
              </p>
            </div>
          </div>
          <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">{environment.temp} °C</p>
              <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
                <ThermometerSunIcon size={25} className=" text-blue-500" />
              </div>
            </div>
            <p>Température d'environnement</p>
            <div className="flex gap-2 items-center">
              <ArrowUpRight size={20} className="text-emerald-500 shrink-0" />
              <p className="text-blue-500 text-sm font-light">
                Semaine dernière : 15°C - 25°C
              </p>
            </div>
          </div>
          <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">{environment.humidity} %</p>
              <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
                <Droplet size={25} className=" text-blue-500" />
              </div>
            </div>
            <p>Humidité d'environnement</p>
            <div className="flex gap-2 items-center">
              <ArrowDownRight size={20} className="text-red-500 shrink-0" />
              <p className="text-blue-500 text-sm font-light">
                Semaine dernière : 50% - 60%
              </p>
            </div>
          </div>
          <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">{soil.salinity} g/L</p>
              <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
                <Earth size={25} className=" text-blue-500" />
              </div>
            </div>
            <p>Salinité du sol</p>
            <div className="flex gap-2 items-center">
              <ArrowUpRight size={20} className="text-emerald-500 shrink-0" />
              <p className="text-blue-500 text-sm font-light">
                Semaine dernière : 4g/L - 6g/L
              </p>
            </div>
          </div>

          <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">{soil.moisture} mm</p>
              <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
                <Droplets size={25} className=" text-blue-500" />
              </div>
            </div>
            <p>Soil moisture</p>
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                <ArrowDownRight size={20} className="text-red-500 shrink-0" />
                <p className="text-blue-500 text-sm font-light">
                  Semaine dernière : 300mm - 400mm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col py-8 gap-4">
        <h2 className="font-semibold text-xl lg:text-2xl text-gray-700">
          Rule-based recommandation scoring results
        </h2>
        <div className="py-4 ">
          <div className={"lg:w-[90%] lg:translate-x-0 w-full -translate-x-8"}>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar barSize={"5%"} dataKey="score" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col py-8 gap-4">
        <h2 className="font-semibold text-xl lg:text-2xl text-gray-700">
          Recommandation results explanations
        </h2>
        <div className=" py-4 ">
          <div className="space-y-8">
            {result.explanations.map((explanation: any, index: number) => (
              <div
                key={index}
                className="shadow-lg p-4 flex flex-col gap-2 border-[1px] border-opacity-40  border-blue-500 rounded-lg"
              >
                <h3
                  className={"font-semibold text-lg lg:text-xl text-gray-700"}
                >
                  {explanation.crop}
                </h3>
                <p className="text-blue-500 font-semibold">
                  Overall score : {explanation.score}
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="py-4 lg:px-4">
                    <p className="text-emerald-500 font-semibold text-center mb-3">
                      Positives
                    </p>
                    {explanation.positives.length > 0 ? (
                      <div>
                        <ul className="flex flex-col gap-2">
                          {explanation.positives.map(
                            (positive: any, index: number) => (
                              <li
                                key={index}
                                className="flex items-center gap-2"
                              >
                                {" "}
                                <Check
                                  size={15}
                                  className="shrink-0 text-emerald-500"
                                />{" "}
                                {positive}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    ) : (
                      <p>no positives were found</p>
                    )}
                  </div>
                  <div className="lg:border-l-[0.5px] lg:px-4 lg:border-l-slate-200 lg:border-t-0 border-t-[0.5px]  py-4 border-t-slate-200">
                    <p className="text-red-500 font-semibold text-center mb-3">
                      Negatives
                    </p>
                    {explanation.positives.length > 0 ? (
                      <div>
                        <ul className="flex flex-col gap-2">
                          {explanation.negatives.map(
                            (negative: any, index: number) => (
                              <li
                                key={index}
                                className="flex items-center gap-2"
                              >
                                {" "}
                                <X
                                  size={15}
                                  className="shrink-0 text-red-500"
                                />{" "}
                                {negative}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    ) : (
                      <p>aucun point négatif n'a été trouvé</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
