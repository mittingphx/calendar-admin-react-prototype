import Sidebar from './components/Sidebar'
import Topbar from "./components/Topbar";
import { CityProvider } from './CityContext';
import "./App.css";
import Dashboard from "./pages/Dashboard.jsx";
import Test from "./pages/Test";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import EventList from "./pages/EventList";
import Event from "./pages/Event";
import NewEvent from "./pages/NewEvent";
import Home from "./pages/Home";

import { useState } from "react";

function App() {
    const [selectedCity, setSelectedCity] = useState('Tucson');

  return (
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
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/product/:productId" element={<Product />} />
                  <Route path="/newproduct" element={<NewProduct />} />
                  <Route path="/events" element={<EventList />} />
                  <Route path="/event/:eventId" element={<Event />} />
                  <Route path="/newEvent" element={<NewEvent />} />
              </Routes>
            </div>
          </Router>
      </CityProvider>
  );
}
export default App;