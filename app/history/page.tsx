import React from "react";
import { DataTable } from "./crops-table/data-table";
import { columns } from "./crops-table/columns";
import { generateCropData } from "@/lib/generate-crop-logs";

const page = () => {
  const data = generateCropData();
  return (
    <div className="lg:px-[3%] px-4 pb-20">
      <h1 className="lg:text-4xl text-2xl mb-2 font-bold">
        Historique des cultures precedentes
      </h1>
      <p className="text-blue-500 text-sm font-light">
        Vous pouvez consulter l'historique de vos cultures précédentes
      </p>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
