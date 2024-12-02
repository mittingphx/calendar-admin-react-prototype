import '../css/component/sidebar.css'

import {
    LineStyle,
    PermIdentity,
    Storefront,
    EventAvailable,
    Home,
/*    Timeline,
    TrendingUp,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,*/
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function Sidebar() {
    const location = useLocation();

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className={`sidebarListItem ${location.pathname === '/' ? 'active' : ''}`}>
                                <Home className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <Link to="/dashboard" className="link">
                            <li className={`sidebarListItem ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                                <LineStyle className="sidebarIcon" />
                                Dashboard
                            </li>
                        </Link>
                        {/*
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                        */}
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/events" className="link">
                            <li className={`sidebarListItem ${location.pathname === '/events' ? 'active' : ''}`}>
                                <EventAvailable className="sidebarIcon" />
                                Events
                            </li>
                        </Link>
                        <Link to="/users" className="link">
                            <li className={`sidebarListItem ${location.pathname === '/users' ? 'active' : ''}`}>
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className={`sidebarListItem ${location.pathname === '/products' ? 'active' : ''}`}>
                                <Storefront className="sidebarIcon" />
                                Products
                            </li>
                        </Link>
                        {/*
                        <Link to="/test" className="link">
                            <li className="sidebarListItem">
                                <AttachMoney className="sidebarIcon" />
                                Test
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                            Reports
                        </li>
                        */}
                    </ul>
                </div>
                {/*
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
                */}
            </div>
        </div>
    );
}
export default Sidebar;