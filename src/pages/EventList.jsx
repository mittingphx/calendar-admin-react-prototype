import '../css/page/eventList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { eventRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

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
                    <div className="eventListEvent">
                        <img className="eventListImg" src={params.row.image} alt="" />
                        {params.row.name}
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
                <>
                    <Link to={"/event/" + params.row.id} className="gridEdit">
                        <button className="eventListEdit">Edit</button>
                    </Link>
                    <DeleteOutline
                        className="eventListDelete"
                        onClick={() => handleDelete(params.row.id)}
                    />
                </>
                );
            },
        },
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