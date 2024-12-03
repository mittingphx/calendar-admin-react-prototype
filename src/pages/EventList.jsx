import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { eventRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/page/eventList.css";

function EventList() {
    const [data, setData] = useState(eventRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "event",
            headerName: "Event",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="table-cell">
                        <img className="table-cell-image" src={params.row.image} alt="" />
                        <div className="table-cell-image-label">{params.row.name}</div>
                    </div>
                );
            },
        },
        { field: "date", headerName: "Date", width: 150 },
        { field: "location", headerName: "Location", width: 190 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                  <div className="table-cell">
                    <Link to={"/event/" + params.row.id} className="gridEdit">
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
        {
          renderCell: (params) => {
            return (
              <div className="table-cell-fill"></div>
            );
          },
          width: "100",
          headerName: " ",
          sort: false
        }
    ];

    return (
        <div className="eventList">
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

export default EventList;