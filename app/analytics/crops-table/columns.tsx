"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Crop = {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  status: string;
  amount: number;
  maladie: string | null;
};

export const columns: ColumnDef<Crop>[] = [
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "startDate",
    header: "Date de début",
  },
  {
    accessorKey: "endDate",
    header: "Date de fin",
  },
  {
    accessorKey: "status",
    header: "Statut",
  },
  {
    accessorKey: "amount",
    header: "Quantité",
  },
  {
    accessorKey: "maladie",
    header: "Maladie",
  },
];
