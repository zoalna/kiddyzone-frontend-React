import React, { Component } from 'react'
import logo from './logo.svg'

import './App.css'
import Customers from './Customers'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './Components/Layout/Header'

import Footer from './Components/Layout/Footer'
import Login from './Pages/Login'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import ProductDetails from './Pages/ProductDetails'
import AboutUs from './Pages/AboutUs'
import GiftCards from './Pages/GiftCards'
import StoreLocator from './Pages/StoreLocator'
import ProductListing from './Pages/ProductListing'
import About from './Pages/About'
import Elarning from './Pages/Elarning'
import Dashboard from './Pages/Dashboard'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import customTheme from './Theme/theme'
import { ThemeProvider } from '@mui/material'

class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={customTheme}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/SignUp" element={<SignUp />} />
              <Route
                exact
                path="/ProductDetail/:slug"
                element={<ProductDetails />}
              />
              <Route exact path="/AboutUs" element={<AboutUs />} />
              <Route exact path="/GiftCards" element={<GiftCards />} />
              <Route exact path="/StoreLocator" element={<StoreLocator />} />
              <Route
                exact
                path="/ProductListing"
                element={<ProductListing />}
              />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Elarning" element={<Elarning />} />
              <Route exact path="/Dashboard" element={<Dashboard />} />
              <Route exact path="/Cart" element={<Cart sidecart={false} />} forceRefresh={true} />

              <Route exact path="/Checkout" element={<Checkout />} />

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
        </ThemeProvider>
      </>
    )
  }
}

export default App
