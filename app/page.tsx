import ChartAir from "@/components/Charts/ChartAir";
import ChartSol from "@/components/Charts/ChartSol";
import BarChartProject from "@/components/Charts/ChartSol";
import {
  ArrowUpRight,
  Calendar,
  ClipboardX,
  Pipette,
  Sprout,
} from "lucide-react";

export default function Home() {
  return (
    <div className=" lg:px-[3%] px-4 ">
      <h1 className="lg:text-4xl text-2xl mb-2 font-bold">Dashboard</h1>
      <p className="text-blue-500 mb-6 text-sm font-light">
        Ici, vous pouvez voir les statistiques générales de votre champ ainsi
        que les données des capteurs.{" "}
      </p>
      <h2 className="font-semibold text-xl lg:text-2xl text-gray-700">
        Valeurs actuelles des données du champ
      </h2>
      <div className="grid grid-cols-1 mt-4 mb-8 lg:grid-cols-4 gap-x-6 gap-y-6  ">
        <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Mai</p>
            <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
              <Calendar size={25} className=" text-blue-500" />
            </div>
          </div>
          <p>Mois actuel</p>
        </div>
        <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">blé</p>
            <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
              <Sprout size={25} className=" text-blue-500" />
            </div>
          </div>
          <p>Culture actuelle</p>
          <div className="flex gap-2 items-center">
            <p className="text-blue-500 text-sm font-light">
              a terminé son cycle de croissance.
            </p>
          </div>
        </div>
        <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">1</p>
            <div className=" flex items-center justify-center p-1 shadow-md  rounded-lg">
              <ClipboardX size={25} className=" text-blue-500" />
            </div>
          </div>
          <p>Maladies récentes</p>
          <div className="flex gap-2 items-center">
            <p className="text-blue-500 text-sm font-light">
              rouille jaune détectée(s).
            </p>
          </div>
        </div>
        <div className="flex gap-4 shadow-lg border-[1px] border-opacity-40 border-blue-500 rounded-lg p-4 flex-col">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">60 , 35 , 45 kg/ha</p>
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
      </div>
      <h2 className="font-semibold text-xl lg:text-2xl text-gray-700">
        Valeurs actuelles des données des capteurs du sol
      </h2>
      <p className="text-blue-500 my-2 text-sm font-light">
        Les valeurs ci-dessous sont les valeurs actuelles des capteurs de sol
        les dernieres 24 heures.
      </p>
      <ChartSol />
      <h2 className="font-semibold text-xl lg:text-2xl mt-8 text-gray-700">
        Valeurs actuelles des données des capteurs d'air
      </h2>
      <p className="text-blue-500 my-2 text-sm font-light">
        Les valeurs ci-dessous sont les valeurs actuelles des capteurs d'air les
        dernieres 24 heures.
      </p>
      <ChartAir />
    </div>
  );
}
