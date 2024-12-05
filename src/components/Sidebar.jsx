/**
 * File:    Sidebar.jsx
 * Author:  Scott Mitting
 * Date:    12/3/2024
 * Project: TucsonLovesMusic
 * Abstract:
 *   Sidebar component for the React app prototype admin website.
 */

import {
    LineStyle,
    PermIdentity,
    EventAvailable,
    Home,
/*
    Storefront,
    Timeline,
    TrendingUp,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,*/
} from "@material-ui/icons";
import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SidebarContext } from '../SidebarContext';

import '../css/component/sidebar.css'

function Sidebar() {
    const location = useLocation();
    const { isSidebarOpen } = useContext(SidebarContext);


    return (
        <div>
            <div className="sidebar">
                <div className="sidebarWrapper">
                    {isSidebarOpen && (
                        <div className="sidebar-mobile">
                            <ul>
                                <li>
                                    <Link to="/home" className="link">
                                        <Home className="sidebarIcon" />
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" className="link">
                                        <LineStyle className="sidebarIcon" />
                                        Dashboard
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    )}
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/home" className="link">
                            <li className={`sidebarListItem ${location.pathname === '/' || location.pathname === '/home' ? 'active' : ''}`}>
                                <Home className="sidebarIcon"/>
                                Home
                            </li>
                        </Link>
                        <Link to="/dashboard" className="link">
                            <li className={`sidebarListItem ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                                <LineStyle className="sidebarIcon"/>
                                Dashboard
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/events" className="link">
                            <li className={`sidebarListItem ${location.pathname === '/events' ? 'active' : ''}`}>
                                <EventAvailable className="sidebarIcon"/>
                                Events
                            </li>
                        </Link>
                        <Link to="/users" className="link">
                            <li className={`sidebarListItem ${location.pathname === '/users' ? 'active' : ''}`}>
                                <PermIdentity className="sidebarIcon"/>
                                Users
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;