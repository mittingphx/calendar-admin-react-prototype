import '../css/page/newEvent.css'

function NewEvent() {
    return (
        <div className="newEventContainer">
            <h1 className="newEventTitle">New Event</h1>
            <form className="newEventForm">
                <div className="newEventItem">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="newEventItem">
                    <label>Name</label>
                    <input type="text" placeholder="Event Name" />
                </div>
                <div className="newEventItem">
                    <label>Date</label>
                    <input type="date" placeholder="YYYY-MM-DD" />
                </div>
                <div className="newEventItem">
                    <label>Location</label>
                    <input type="text" placeholder="Event Location" />
                </div>
                <div className="newEventItem">
                    <label>Description</label>
                    <textarea placeholder="Event Description" />
                </div>
                <button className="newEventButton">Create</button>
            </form>
        </div>
    );
}

export default NewEvent;