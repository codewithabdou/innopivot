"use client";

import React, { useEffect } from "react";
import CROPS from "@/constants/crops";
import selectNextCrop from "@/lib/crop-rotation-algorithm";
import {
  ArrowDownRight,
  ArrowUpRight,
  Calendar,
  Check,
  CirclePlay,
  ClipboardX,
  Droplet,
  Droplets,
  Earth,
  Info,
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Audio } from "react-loader-spinner";

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

const FIELD_DATA_EXAMPLES = [
  {
    environment: {
      temp: 30,
      humidity: 35,
    },
    soil: {
      salinity: 6,
      moisture: 500,
      nutrientLevels: { nitrogen: 60, phosphorus: 35, potassium: 45 },
      recentDiseases: ["rouille jaune"],
    },
    currentCrop: "blé",
    MonthsToEndOfCycle: 0,
    currentMonth: 5,
  },
  {
    environment: {
      temp: 35,
      humidity: 45,
    },
    soil: {
      salinity: 8,
      moisture: 400,
      nutrientLevels: { nitrogen: 40, phosphorus: 40, potassium: 50 },
      recentDiseases: ["fusariose"],
    },
    currentCrop: "pois chiche",
    MonthsToEndOfCycle: 2,
    currentMonth: 7,
  },
  {
    environment: {
      temp: 20,
      humidity: 50,
    },
    soil: {
      salinity: 4,
      moisture: 400,
      nutrientLevels: { nitrogen: 40, phosphorus: 30, potassium: 40 },
      recentDiseases: [],
    },
    currentCrop: "soja",
    MonthsToEndOfCycle: 0,
    currentMonth: 11,
  },
];

const page = () => {
  const [fieldData, setfieldData] = React.useState(0);
  const [result, setResult] = React.useState<any | null>(null);
  const [data, setData] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState(false);

  const handleLaunchAlgorithm = () => {
    setLoading(true);
    setResult(null);
    setData(null);

    setTimeout(() => {
      const result: any = selectNextCrop(
        CROPS, // Array of crop details
        FIELD_DATA_EXAMPLES[fieldData].environment, // Environmental data
        FIELD_DATA_EXAMPLES[fieldData].soil, // Soil data
        FIELD_DATA_EXAMPLES[fieldData].currentCrop, // Current crop in the field
        FIELD_DATA_EXAMPLES[fieldData].MonthsToEndOfCycle, // Months into the current crop's growth cycle
        FIELD_DATA_EXAMPLES[fieldData].currentMonth, // Current calendar month
        false // Override sowing month (set to true for exceptions)
      );
      setResult(result);
      setData(
        result.explanations.map((explanation: any) => {
          return {
            name: explanation.crop,
            score: explanation.score,
          };
        })
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="lg:px-[3%] px-4 pb-20">
      <div className="bg-blue-600 relative py-4  text-white text-sm rounded-lg mb-4 ">
        <p className="pr-8 pl-2">
          <span className="font-bold">NOTE :</span> Cette version expérimentale
          de notre site a été développée à des fins de présentation, en raison
          de l'absence de données réelles du terrain. Nous avons toutefois
          préparé 3 cas de données réalistes, modifiables, pour permettre de
          tester et d'évaluer la logique et les fonctionnalités de l'algorithme.
        </p>
        <Info className="absolute  bottom-4 lg:top-4 right-4 text-white" />
      </div>
      <h1 className="lg:text-4xl text-2xl mb-2 font-bold">
        Recommandation de Culture pour le Mois Prochain
      </h1>
      <p className="text-blue-500 text-sm font-light">
        En fonction des conditions actuelles du champ et de l'algorithme de
        rotation des cultures, la culture recommandée pour le mois prochain sera
        affichée.
      </p>
      <div className="flex flex-col py-8 gap-4">
        <div className="flex items-start lg:items-center flex-col lg:flex-row space-y-2 justify-between">
          <h2 className="font-semibold text-xl lg:text-2xl text-gray-700">
            Valeurs actuelles des données du champ
          </h2>
          <Select
            defaultValue="0"
            onValueChange={(value) => {
              setfieldData(parseInt(value));
              setResult(null);
              setData(null);
            }}
          >
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Sélectionner un cas de test" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Les données de test</SelectLabel>
                <SelectItem value="0">Test 1</SelectItem>
                <SelectItem value="1">Test 2</SelectItem>
                <SelectItem value="2">Test 3</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <p className="text-blue-500 text-sm font-light">
          Les valeurs actuelles des données du champ sont affichées ci-dessous
          pour référence.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-6  ">
          <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">
                {mois[FIELD_DATA_EXAMPLES[fieldData].currentMonth - 1]}
              </p>
              <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
                <Calendar size={25} className=" text-blue-500" />
              </div>
            </div>
            <p>Mois actuel</p>
          </div>
          <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">
                {FIELD_DATA_EXAMPLES[fieldData].currentCrop}
              </p>
              <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
                <Sprout size={25} className=" text-blue-500" />
              </div>
            </div>
            <p>Culture actuelle</p>
            <div className="flex gap-2 items-center">
              <p className="text-blue-500 text-sm font-light">
                {FIELD_DATA_EXAMPLES[fieldData].MonthsToEndOfCycle > 0
                  ? `possède encore ${FIELD_DATA_EXAMPLES[fieldData].MonthsToEndOfCycle} mois avant la fin de sa croissance.`
                  : `a terminé son cycle de croissance.`}
              </p>
            </div>
          </div>
          <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">
                {FIELD_DATA_EXAMPLES[fieldData].soil.recentDiseases.length}
              </p>
              <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
                <ClipboardX size={25} className=" text-blue-500" />
              </div>
            </div>
            <p>Recent Diseases</p>
            <div className="flex gap-2 items-center">
              <p className="text-blue-500 text-sm font-light">
                {FIELD_DATA_EXAMPLES[fieldData].soil.recentDiseases.length > 0
                  ? ` ${FIELD_DATA_EXAMPLES[fieldData].soil.recentDiseases.join(
                      ", "
                    )} détectée(s).`
                  : "Aucune maladie récente détectée."}
              </p>
            </div>
          </div>
          <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">
                {FIELD_DATA_EXAMPLES[fieldData].soil.nutrientLevels.nitrogen} ,{" "}
                {FIELD_DATA_EXAMPLES[fieldData].soil.nutrientLevels.phosphorus}{" "}
                , {FIELD_DATA_EXAMPLES[fieldData].soil.nutrientLevels.potassium}{" "}
                kg/ha
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
              <p className="text-xl font-semibold">
                {FIELD_DATA_EXAMPLES[fieldData].environment.temp} °C
              </p>
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
              <p className="text-xl font-semibold">
                {FIELD_DATA_EXAMPLES[fieldData].environment.humidity} %
              </p>
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
              <p className="text-xl font-semibold">
                {FIELD_DATA_EXAMPLES[fieldData].soil.salinity} g/L
              </p>
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
              <p className="text-xl font-semibold">
                {FIELD_DATA_EXAMPLES[fieldData].soil.moisture} mm
              </p>
              <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
                <Droplets size={25} className=" text-blue-500" />
              </div>
            </div>
            <p>Moisture du sol</p>
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
      <div className="w-full flex justify-end">
        <button
          onClick={handleLaunchAlgorithm}
          className="text-white bg-blue-500 flex gap-2 py-2 px-4 hover:text-blue-500 duration-300 transition-all hover:bg-white hover:border hover:border-blue-500 rounded-md shadow-md items-center justify-center"
        >
          Lancer l'algorithme de prédiction <CirclePlay size={20} />
        </button>
      </div>
      {loading && (
        <div className="flex flex-col justify-center items-center">
          <Audio
            height="100"
            width="100"
            color="#3b82f6"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
          <p className="text-blue-500 mt-2 animate-pulse  font-semibold">
            L'algorithme de recommandation est en cours d'exécution...
          </p>
        </div>
      )}

      {result && (
        <>
          <div className="flex w-full flex-col py-8 gap-4">
            <h2 className="font-semibold text-xl lg:text-2xl text-gray-700">
              Résultats du scoring de recommandation basé sur des règles
            </h2>

            <div className="py-4 ">
              <div
                className={"lg:w-[90%] lg:translate-x-0 w-full -translate-x-8"}
              >
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
              Explications des résultats de la recommandation
            </h2>

            <div className=" py-4 ">
              <div className="space-y-8">
                {result.explanations.map((explanation: any, index: number) => (
                  <div
                    key={index}
                    className="shadow-lg p-4 flex flex-col gap-2 border-[1px] border-opacity-40  border-blue-500 rounded-lg"
                  >
                    <h3
                      className={
                        "font-semibold text-lg lg:text-xl text-gray-700"
                      }
                    >
                      {explanation.crop}
                    </h3>
                    <p className="text-blue-500 font-semibold">
                      Score global : {explanation.score}
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
                          <p>aucun point positif n'a été trouvé.</p>
                        )}
                      </div>
                      <div className="lg:border-l-[0.5px] lg:px-4 lg:border-l-slate-200 lg:border-t-0 border-t-[0.5px]  py-4 border-t-slate-200">
                        <p className="text-red-500 font-semibold text-center mb-3">
                          Negatives
                        </p>
                        {explanation.negatives.length > 0 ? (
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
                          <p>aucun point négatif n'a été trouvé.</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
