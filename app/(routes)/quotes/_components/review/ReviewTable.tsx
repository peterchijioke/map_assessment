/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomImage from "@/components/CustomImage";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    Items: {
      name: "Oxygen concentrator",
      id: "#28373",
    },
    Variants: "Blue",
    Quantity: "100 pieces",
    Price: "$200.00",
    Amount: "$2,000.0",
    ExpectedDeliveryDate: "2024-08-07",
  },
  {
    id: "3u1reuv4",
    Items: {
      name: "Oxygen concentrator",
      id: "#28373",
    },
    Variants: "Blue",
    Quantity: "100 pieces",
    Price: "$200.00",
    Amount: "$2,000.0",
    ExpectedDeliveryDate: "2024-08-07",
  },
  {
    id: "derv1ws0",
    Items: {
      name: "Oxygen concentrator",
      id: "#28373",
    },
    Variants: "Blue",
    Quantity: "100 pieces",
    Price: "$200.00",
    Amount: "$2,000.0",
    ExpectedDeliveryDate: "2024-08-07",
  },
  {
    id: "5kma53ae",
    Items: {
      name: "Oxygen concentrator",
      id: "#28373",
    },
    Variants: "Blue",
    Quantity: "100 pieces",
    Price: "$200.00",
    Amount: "$2,000.0",
    ExpectedDeliveryDate: "2024-08-07",
  },
  {
    id: "bhqecj4p",
    Items: {
      name: "Oxygen concentrator",
      id: "#28373",
    },
    Variants: "Blue",
    Quantity: "100 pieces",
    Price: "$200.00",
    Amount: "$2,000.0",
    ExpectedDeliveryDate: "2024-08-07",
  },
];

export type Payment = {
  id: string;
  Items: {
    name: string;
    id: string;
  };
  Variants: string;
  Quantity: string;
  Price: string;
  Amount: string;
  ExpectedDeliveryDate: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }: { table: any }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }: { row: any }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Items",
    header: "Items",
    cell: ({ row }) => {
      const name = (row.getValue("Items") as { name: string }).name;
      const id = (row.getValue("Items") as { id: string }).id;
      return (
        <div className="flex items-center space-x-2">
          <CustomImage
            src="https://github.com/shadcn.png"
            alt=""
            className=" rounded-lg size-9"
          />

          <div className="md:flex flex-col hidden ">
            <div>{name}</div>
            <div className="text-muted-foreground">{id}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "Variants",
    header: "Variants",
    cell: ({ row }) => (
      <div className=" font-medium">{row.getValue("Variants")}</div>
    ),
  },
  {
    accessorKey: "Quantity",
    header: () => "Quantity",
    cell: ({ row }) => (
      <div className=" font-medium">{row.getValue("Quantity")}</div>
    ),
  },
  {
    accessorKey: "Price",
    header: "Price",
    cell: ({ row }) => (
      <div className=" font-medium">{row.getValue("Price")}</div>
    ),
  },
  {
    accessorKey: "Amount",
    header: "Amount",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("Amount")}</div>
    ),
  },
  {
    accessorKey: "ExpectedDeliveryDate",
    header: "Expected Delivery Date",
    cell: ({ row }) => (
      <div className=" font-medium ">
        {row.getValue("ExpectedDeliveryDate")}
      </div>
    ),
  },
];

export function ReviewTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full ">
      <div className="rounded-md border">
        <Table className="">
          <TableHeader className=" bg-[#F9FAFB] overflow-hidden  ">
            {table
              .getHeaderGroups()
              .map(
                (headerGroup: {
                  id: React.Key | null | undefined;
                  headers: any[];
                }) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map(
                      (header: {
                        id: React.Key | null | undefined;
                        isPlaceholder: any;
                        column: { columnDef: { header: any } };
                        getContext: () => any;
                      }) => {
                        return (
                          <TableHead key={header.id} className="py-4 px-6">
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        );
                      }
                    )}
                  </TableRow>
                )
              )}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table
                .getRowModel()
                .rows.map(
                  (row: {
                    id: React.Key | null | undefined;
                    getIsSelected: () => any;
                    getVisibleCells: () => any[];
                  }) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row
                        .getVisibleCells()
                        .map(
                          (cell: {
                            id: React.Key | null | undefined;
                            column: { columnDef: { cell: any } };
                            getContext: () => any;
                          }) => (
                            <TableCell className="px-6" key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </TableCell>
                          )
                        )}
                    </TableRow>
                  )
                )
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {/* {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected. */}
        </div>
        <div className=" space-y-4">
          <div className="space-x-8 grid grid-cols-2">
            {/* <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            
            Previous
          </Button> */}
            {/* <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button> */}
            <span className="text-[#555E68] text-sm">Sub Total</span>
            <span className="text-[#344054]  text-sm">$8,000.00</span>
          </div>
          <div className="space-x-8 grid grid-cols-2">
            <span className="text-[#555E68] text-sm">Total</span>
            <span className="text-[#344054] font-semibold text-sm">
              $8,750.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
