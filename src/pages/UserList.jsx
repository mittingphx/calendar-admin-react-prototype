import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

function UserList() {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="table-cell">
                        <img className="table-cell-image" src={params.row.avatar} alt="" />
                        <div className="table-cell-image-label">{params.row.username}</div>
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 70,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 70,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="table-cell">
                        <Link to={"/user/" + params.row.id}>
                            <button className="table-edit-button">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="table-delete-button"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </div>
                );
            },
        },
    ];

    return (
        <div className="table-container">
            {/*<DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />*/}

            <DataGrid
                columns={columns}
                rows={userRows}
                pageSize={10}
                rowsPerPageOptions={[10, 20, 50]}
                autoHeight
                className="userListContainer"
            />

        </div>
    );
}

export default UserList;