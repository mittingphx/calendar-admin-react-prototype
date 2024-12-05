
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import '../css/page/user.css'
import '../css/page/form.css'

function User() {
    return (
        <div className="form">
            <div className="formTitleContainer">
                <h1 className="formTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton add-button">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="formShowTop">
                        <img
                            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="formShowImg"
                        />
                        <div className="formShowTopTitle">
                            <span className="formShowUsername">Anna Becker</span>
                            <span className="formShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="formShowBottom">
                        <span className="formShowTitle">Account Details</span>
                        <div className="formShowInfo">
                            <PermIdentity className="formShowIcon" />
                            <span className="formShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="formShowInfo">
                            <CalendarToday className="formShowIcon" />
                            <span className="formShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="formShowTitle">Contact Details</span>
                        <div className="formShowInfo">
                            <PhoneAndroid className="formShowIcon" />
                            <span className="formShowInfoTitle">+1 123 456 67</span>
                        </div>
                        <div className="formShowInfo">
                            <MailOutline className="formShowIcon" />
                            <span className="formShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="formShowInfo">
                            <LocationSearching className="formShowIcon" />
                            <span className="formShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userShow">
                    <div className="formUpdateLeft">
                        <div className="formUpdateItem">
                            <label>Username:</label>
                            <input type="text" className="formUpdateInput" placeholder="Username"/>
                        </div>
                        <div className="formUpdateItem">
                            <label>Full Name:</label>
                            <input type="text" className="formUpdateInput" placeholder="Full Name"/>
                        </div>
                        <div className="formUpdateItem">
                            <label>Email:</label>
                            <input type="email" className="formUpdateInput" placeholder="Email"/>
                        </div>
                        <div className="formUpdateItem">
                            <label>Phone:</label>
                            <input type="text" className="formUpdateInput" placeholder="Phone"/>
                        </div>
                        <div className="formUpdateItem">
                            <label>Address:</label>
                            <input type="text" className="formUpdateInput" placeholder="Address"/>
                        </div>
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

export default User;