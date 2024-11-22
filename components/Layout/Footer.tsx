import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Style_Script as fontSignature } from "next/font/google";

const signature = fontSignature({
  variable: "--font-signature",
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between px-8 py-10 rounded-lg mb-2 bg-blue-500 bg-opacity-10 text-gray-800 items-center gap-8">
      <div className={signature.className}>
        <h1
          className={`text-4xl font-bold hover:cursor-pointer hover:scale-105 hover:-translate-y-1 text-gray-900 hover:text-blue-500 transition-all duration-300  `}
        >
          InnoPivot.
        </h1>
      </div>
      <p className="text-sm md:order-2 order-3 text-gray-900">
        Tous les droits réservés &copy; {new Date().getFullYear()} InnoPivot.{" "}
      </p>
      <div className="flex gap-4  items-center justify-center">
        <Facebook className="h-6 w-6 hover:cursor-pointer hover:scale-105 hover:-translate-y-1 text-gray-900 hover:text-blue-500 transition-all duration-300" />
        <Instagram className="h-6 w-6 hover:cursor-pointer hover:scale-105 hover:-translate-y-1 text-gray-900 hover:text-blue-500 transition-all duration-300" />
        <Linkedin className="h-6 w-6 hover:cursor-pointer hover:scale-105 hover:-translate-y-1 text-gray-900 hover:text-blue-500 transition-all duration-300" />
      </div>
    </div>
  );
};

export default Footer;
