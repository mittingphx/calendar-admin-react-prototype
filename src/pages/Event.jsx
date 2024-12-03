import '../css/page/event.css'
import {
    CalendarToday,
    LocationSearching,
    PermIdentity,/*
    MailOutline,
    PhoneAndroid,
    Publish,*/
} from "@material-ui/icons";
// import { Link } from "react-router-dom";
import {eventRows} from "../dummyData.js";
import {Link} from "react-router-dom";

function Event() {
    const eventId = window.location.pathname.split("/")[2];
    const event = eventRows.find((event) => event.id === parseInt(eventId));

    return (
        <div className="event">
            <div className="eventTitleContainer">
                <h1 className="eventTitle">Event Information</h1>
            </div>
            <div className="eventTitleContainer">
                <h1 className="eventTitle">Edit Event Information</h1>
                <Link to="/newEvent">
                    <button className="eventAddButton add-button">Create New Event</button>
                </Link>
            </div>
            <div className="eventContainer">
                <div className="eventShow">
                    <div className="eventShowTop">
                        <img src={event.image} alt="" className="eventShowImg"/>
                        <div className="eventShowTopTitle">
                            <span className="eventShowName">{event.name}</span>
                        </div>
                    </div>
                    <div className="eventShowBottom">
                        <span className="eventShowTitle">Event Details</span>
                        <div className="eventShowInfo">
                            <PermIdentity className="eventShowIcon"/>
                            <span className="eventShowInfoTitle">{event.name}</span>
                        </div>
                        <div className="eventShowInfo">
                            <CalendarToday className="eventShowIcon"/>
                            <span className="eventShowInfoTitle">{event.date}</span>
                        </div>
                        <div className="eventShowInfo">
                            <LocationSearching className="eventShowIcon"/>
                            <span className="eventShowInfoTitle">{event.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;