import IMAGES from "@/constants/images";
import { Info } from "lucide-react";
import Image from "next/image";
import React from "react";

const NotDone = () => {
  return (
    <div className="flex flex-col   w-full gap-8 items-center justify-center">
      <Image
        src={IMAGES.NOT_IMPLEMENTED}
        height={500}
        width={500}
        alt="not implemeted yet"
      />
      <div className="bg-blue-600 flex gap-2 px-2 items-center justify-center py-4  text-white text-sm rounded-lg mb-4 ">
        <p>
          <span className="font-bold">NOTE :</span> Cette fonctionnalité n'a pas
          encore été implémentée en raison d'un manque de données réelles.
        </p>
        <Info size={20} className=" shrink-0 text-white" />
      </div>
      <h1></h1>
    </div>
  );
};

export default NotDone;
