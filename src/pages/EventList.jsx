// noinspection JSUnusedLocalSymbols

/**
 * File:    EventList.jsx
 * Author:  Scott Mitting
 * Date:    12/3/2024
 * Abstract:
 *  List of events on the TucsonLovesMusic React prototype admin website.
 */

import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { eventRows } from "../dummyData";
import "../css/page/eventList.css";

function EventList() {
    const [data, setData] = useState(eventRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    // noinspection JSUnusedLocalSymbols
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
          renderCell: () => {
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
            {/*<DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            /> */}

            <DataGrid
                columns={columns}
                rows={eventRows}
                pageSize={10}
                rowsPerPageOptions={[10, 20, 50]}

                className="eventListContainer"
            />
        </div>
    );
}

export default EventList;