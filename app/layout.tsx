import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Layout/app-sidebar";
import { Poppins } from "next/font/google";
import Footer from "@/components/Layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InnoPivot",
  description:
    " InnoPivot is a web application that helps farmers manage their crops and pivot irrigation systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full mt-8">
            <SidebarTrigger />
            {children}
            <Footer />
          </main>
        </SidebarProvider>{" "}
      </body>
    </html>
  );
}
