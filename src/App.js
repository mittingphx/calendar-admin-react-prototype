/**
 * File:    App.jsx
 * Author:  Scott Mitting
 * Date:    12/3/2024
 * Project: TucsonLovesMusic
 * Abstract:
 *   App component for the React app prototype admin website.
 */

import Sidebar from './components/Sidebar'
import Topbar from "./components/Topbar";
import { CityProvider } from './CityContext';
import { SidebarProvider } from './SidebarContext';
import Dashboard from "./pages/Dashboard.jsx";
import Test from "./pages/Test";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import EventList from "./pages/EventList";
import Event from "./pages/Event";
import NewEvent from "./pages/NewEvent";
import Home from "./pages/Home";

import { useState } from "react";
import "./App.css";

function App() {
    const [selectedCity, setSelectedCity] = useState('Tucson');

  return (
      <SidebarProvider>
          <CityProvider>
              <Router>
                <Topbar selectedCity={selectedCity} />
                <div className="container">
                  <Sidebar />
                  <Routes>
                      <Route path="/" element={<Home
                          selectedCity={selectedCity}
                          setSelectedCity={setSelectedCity}
                      />} />
                      <Route path="/home" element={<Home
                          selectedCity={selectedCity}
                          setSelectedCity={setSelectedCity}
                      />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/test" element={<Test />} />
                      <Route path="/users" element={<UserList />} />
                      <Route path="/user/:userId" element={<User />} />
                      <Route path="/newUser" element={<NewUser />} />
                      <Route path="/events" element={<EventList />} />
                      <Route path="/event/:eventId" element={<Event />} />
                      <Route path="/newEvent" element={<NewEvent />} />
                  </Routes>
                </div>
              </Router>
          </CityProvider>
      </SidebarProvider>
  );
}
export default App;