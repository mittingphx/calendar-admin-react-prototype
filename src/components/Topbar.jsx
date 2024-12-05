import React, {useContext} from 'react';
import { NotificationsNone, Language, Settings, Menu as MenuIcon } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { CityContext } from '../CityContext';
import { SidebarContext } from '../SidebarContext';
import '../css/component/topbar.css';




function Topbar() {
    const { selectedCity } = useContext(CityContext);
    const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

    return (
        <div className="topbar">
            <div className="topbarWrapper">

                <div className="topbarRight">
                    <IconButton className="hamburger-menu" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <MenuIcon/>
                    </IconButton>
                </div>

                <div className="topLeft">
                    <span className="logo">{selectedCity}LovesMusic</span>
                    <span className="subtitle">Event Management</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                        <div className="icon-menu">
                            <div className="icon-menu-item">
                                <span className="icon-menu-item-text">Event 1</span>
                            </div>
                            <div className="icon-menu-item">
                                <span className="icon-menu-item-text">Event 2</span>
                            </div>
                            <div className="icon-menu-item">
                                <span className="icon-menu-item-text">Event 3</span>
                            </div>
                        </div>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                        <div className="icon-menu">
                            <div className="icon-menu-item">
                                <span className="icon-menu-item-text">English</span>
                            </div>
                            <div className="icon-menu-item">
                                <span className="icon-menu-item-text">Spanish</span>
                            </div>
                        </div>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                        <div className="icon-menu">
                            <div className="icon-menu-item">
                                <span className="icon-menu-item-text">Setting 1</span>
                            </div>
                            <div className="icon-menu-item">
                                <span className="icon-menu-item-text">Setting 2</span>
                            </div>
                            <div className="icon-menu-item">
                                <span className="icon-menu-item-text">Setting 3</span>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    );
}

export default Topbar;