import React, { useState, useEffect } from "react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import {
  Login,
  TopBar,
  SearchBar,
  User,
  Contact,
  Home,
  SideBar,
  Offer,
  Cart,
  ProductPage,
  Payment_Gateway,
  Address,
  Medicine
} from "./Import.jsx";

function App() {
  const [logined, setLogined] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(logined); 
  }, [logined]);

  const handleLoginSuccess = (e) => {
    console.log('Login successful!'); // Add this line
    setLogined(true);
  };

  return (
    <Router>
      <div className="App flex">
        {logined ? (
          <>
            <div className={`${windowWidth >= 1300?"sideb":"nosideb"}`}>
              <SideBar />
            </div>
            <div className={`${windowWidth >= 1300?"content":"nocontent"}`}>
              <TopBar username={`${logined ? "Kunal Singla" : "Sign In"}`} />
              <SearchBar/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="user" element={<User />} />
                <Route path="contact" element={<Contact />} />
                <Route path="offers" element={<Offer />} />
                <Route path="cart" element={<Cart />} />
                <Route path="productpage" element={<ProductPage />} />
                <Route path="payment" element={<Payment_Gateway />} />
                <Route path="address" element={<Address />} />
                <Route path="medicine" element={<Medicine />} />
                {/* Add a default route for unmatched paths */}
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="login" element={<Login onLoginSuccess={handleLoginSuccess} />} />

            <Route path="home" element={<User />} />

            {/* Add a default route for unmatched paths */}
            <Route path="*" element={<Login  onLoginSuccess={handleLoginSuccess}/>} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
