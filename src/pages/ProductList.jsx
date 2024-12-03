import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductList() {
    const [data, setData] = useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="table-cell">
                        <img src={params.row.img} alt="" className="table-cell-image" />
                        <div className="table-cell-image-label">{params.row.name}</div>
                    </div>
                );
            },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 70,
        },
        {
            field: "price",
            headerName: "Price",
            width: 70,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="table-cell">
                        <Link to={"/product/" + params.row.id}>
                            <button className="table-edit-button">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="table-delete-button"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </div>
                );
            },
            flex: 1
        },
    ];

    return (
        <div className="table-container">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    );
}

export default ProductList;