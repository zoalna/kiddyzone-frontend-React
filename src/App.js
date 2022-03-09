import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";
import Customers from "./Customers";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Layout/Header";

import Footer from "./Components/Layout/Footer";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import ProductDetails from "./Pages/ProductDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/SignUp" element={<SignUp />} />
            <Route exact path="/ProductDetail" element={<ProductDetails />} />
            {/* <Route exact path="/" element={isSignIn ? <Home /> : <Home />} /> */}
            {/* <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} /> */}
            {/* <Route path="/login" element={isSignIn ? <Home /> : <SignIn />} /> */}
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/allPost" element={<Post />} />
            <Route path="/myPost" element={<MyPost />} />
            <Route path="/newPost" element={<NewPost />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
