/**
 * File:    Event.jsx
 * Author:  Scott Mitting
 * Date:    12/3/2024
 * Project: TucsonLovesMusic
 * Abstract:
 *  Page for editing an event on the React app prototype admin website.
 *. See src/sql/MockupMysqlTables.sql for more information on database structure.
 */

import {
    CalendarToday,
    LocationSearching, MailOutline,
    PermIdentity, PhoneAndroid, Publish,/*
    MailOutline,
    PhoneAndroid,
    Publish,*/
} from "@material-ui/icons";
import {eventRows} from "../dummyData.js";
import {Link} from "react-router-dom";

import '../css/page/event.css'
import '../css/page/form.css'

function Event() {
    const eventId = window.location.pathname.split("/")[2];
    const event = eventRows.find((event) => event.id === parseInt(eventId));

    return (
        <div className="form">
            <div className="formTitleContainer">
                <h1 className="formTitle">Edit Event</h1>
                <Link to="/newEvent">
                    <button className="eventAddButton add-button">Create</button>
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

                <div className="eventShow">
                    <div className="formShowTop">
                        <img
                            src="https://tucsonlovesmusic.com/media/dx4duw0f/johnny-jack-profile-image.jpg?width=800&height=800"
                            alt=""
                            className="formShowImg"
                        />
                        <div className="formShowTopTitle">
                            {/* show fields for event: title, date, time, price, location, venue, address, geolocation, description */}
                            <span className="formShowEventTitle">Event Name</span>
                            <span className="formShowEventDate">Dec 9, 2024</span>
                            <span className="formShowEventTime">7:00 PM</span>
                            <span className="formShowEventPrice">Free</span>
                            <span className="formShowEventLocation">Tucson, AZ</span>
                            <span className="formShowEventVenue">Venue Name</span>
                            <span className="formShowEventAddress">123 Main St, Tucson, AZ 85705</span>
                            <span
                                className="formShowEventGeolocation">Latitude: 32.123456, Longitude: -111.123456</span>
                            <span className="formShowEventDescription">Description</span>
                        </div>
                    </div>
                    <div className="formShowBottom">
                        <span className="formShowTitle">Account Details</span>
                        <div className="formShowInfo">
                            <PermIdentity className="formShowIcon"/>
                            <span className="formShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="formShowInfo">
                            <CalendarToday className="formShowIcon"/>
                            <span className="formShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="formShowTitle">Contact Details</span>
                        <div className="formShowInfo">
                            <PhoneAndroid className="formShowIcon"/>
                            <span className="formShowInfoTitle">+1 123 456 67</span>
                        </div>
                        <div className="formShowInfo">
                            <MailOutline className="formShowIcon"/>
                            <span className="formShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="formShowInfo">
                            <LocationSearching className="formShowIcon"/>
                            <span className="formShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="formUpdate">
                    {/* edit fields for event: title, date, time, price, location, venue, address, geolocation, description */}
                    <div className="formUpdateLeft">
                        <h3 className="formUpdateTitle">Event Information</h3>
                        <div className="formUpdateItem">
                            <label>Title:</label>
                            <input type="text" className="formUpdateInput" placeholder="Title"/>
                        </div>
                        <div className="formUpdateItem">
                            <label>Date:</label>
                            <input type="date" className="formUpdateInput" placeholder="Date"/>
                        </div>
                        <div className="formUpdateItem">
                            <label>Time:</label>
                            <input type="time" className="formUpdateInput" placeholder="Time"/>
                        </div>
                        <div className="formUpdateItem">
                            <label>Price:</label>
                            <input type="text" className="formUpdateInput" placeholder="Price"/>
                        </div>
                        <div className="formUpdateItem">
                            <label>Location:</label>
                            <input type="text" className="formUpdateInput" placeholder="Location"/>
                        </div>
                        <div className="formUpdateItem">
                            <label>Venue:</label>
                            <input type="text" className="formUpdateInput" placeholder="Venue"/>
                        </div>
                        <div className="formUpdateItem">
                            <label>Address:</label>
                            <input type="text" className="formUpdateInput" placeholder="Address"/>
                        </div>
                        <div className="formUpdateItem">
                            <label>Geolocation:</label>
                            <input type="text" className="formUpdateInput" placeholder="Geolocation"/>
                        </div>
                        <div className="formUpdateItem">
                            <label>Description:</label>
                            <input type="text" className="formUpdateInput" placeholder="Description"/>
                        </div>
                        <button className="formUpdateButton">Update</button>

                    </div>
                    <div className="formUpdateRight">
                        <div className="formUpdateUpload">
                            <img alt="" className="formUpdateImg"
                                 src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            />
                            <label htmlFor="file">
                                <Publish className="formUpdateIcon"/>
                            </label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>
                        <button className="formUpdateButton">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;


