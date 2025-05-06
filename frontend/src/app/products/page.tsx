'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import axios from "axios"
import { useEffect, useState } from "react";


interface Product{
    _id: string,
    title: string,
    description:string,
    price: number
}
export default function Products( ){
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () =>{
        try{
            const token = localStorage.getItem('token')
            const response = await axios.get(`http://localhost:8888/api/products`,{
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            });
            // console.log(response)
            setProducts(response.data.data)

        }catch(error){
            console.log(error, 'error')
        }
    }
    
    useEffect(() => {
        fetchProducts()
    },[])

    const columns: ColumnDef<Product>[] =[
        {accessorKey:'title', header: 'title',},
        { accessorKey: 'description', header: 'Description' },
        { accessorKey: 'price', header: 'Price' },
    ]
    const table = useReactTable({
        data:products,
        columns,
        getCoreRowModel:getCoreRowModel()
    })
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="font-bold text-2xl">Products</h1>

            <Table>
                    <TableHeader>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <TableHead key={header.id}>
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            </TableHead>
                        ))}
                        </TableRow>
                    ))}
                    </TableHeader>
                    <TableBody>
                    {table.getRowModel().rows.map(row => (
                        <TableRow key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <TableCell key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                        ))}
                        </TableRow>
                    ))}
                    </TableBody>
            </Table>
        </div>
    )
}