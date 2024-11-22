import NotDone from "@/components/Shared/NotDone";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[77.5vh] lg:px-[3%] px-4 ">
      <h1 className="lg:text-4xl text-2xl mb-2 font-bold">
        La prédiction des cultures et besoins d'irrigation et fertilisation
      </h1>
      <p className="text-blue-500 mb-6 text-sm font-light">
        Cette page est en cours de développement
      </p>
      <NotDone />
    </div>
  );
};

export default page;
