"use client";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { useState } from "react";
import { Combobox } from "./ui/combo-box"

 const plants = [
  {
    id: "INV001",
    name: "Indoor",
    price: "$250.00",
    category: "Indoor",
    stock: "12",
  },
  {
    id: "INV002",
    name: "Outdoor",
    price: "$150.00",
    category: "Outdoor",
    stock: "12",
  },
  {
    id: "INV003",
    name: "Succulent",
    price: "$350.00",
    category: "Succulent",
    stock: "12",
  },
  {
    id: "INV004",
    name: "Flowering",
    price: "$450.00",
    category: "Flowering",
    stock: "12",
  },
  {
    id: "INV005",
    name: "Herb",
    price: "$550.00",
    category: "Herb",
    stock: "12",
  },
  {
    id: "INV006",
    name: "Fern",
    price: "$200.00",
    category: "Fern",
    stock: "12",
  },
  {
    id: "INV007",
    name: "Tree",
    price: "$300.00",
    category: "Tree",
    stock: "12",
  },
  {
    id: "INV008",
    name: "Shrub",
    price: "$300.00",
    category: "Shrub",
    stock: "12",
  },
];

export default function InventoryTable() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 py-4">
        <div className="relative max-w-sm w-full">
          <Input placeholder="Filter plants..." className="pl-10"/>
          <Search
            className="absolute h-4 w-4 left-3 top-1/2 transform -translate-y-1/2

          "
          />
        </div>
        <Combobox
          value={selectedCategory}
          onChange={(val) => setSelectedCategory(val)}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Plant ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plants.map((plant) => (
            <TableRow key={plant.id}>
              <TableCell>{plant.id}</TableCell>
              <TableCell>{plant.name}</TableCell>
              <TableCell>{plant.category}</TableCell>
              <TableCell>{plant.price}</TableCell>
              <TableCell className="font-bold">{plant.stock}</TableCell>

              <TableCell className="text-right">
                <div className="flex justify-end space-x-4 ">
                  <h1>Edit Button</h1>
                  <h1>Delete Button</h1>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
