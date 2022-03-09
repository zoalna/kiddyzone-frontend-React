import React, { Component } from "react";
import logo from "../logo.svg";

import "../App.css";
import Customers from "../Customers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import MainBanner from "../Components/MainBanner";
import ShopBanners from "../Components/ShopBanners";
import HotSellers from "../Components/HotSellers";
import ShopByAge from "../Components/ShopByAge";
import ShopCategories from "../Components/ShopCategories";
import OnlineEducation from "../Components/OnlineEducation";
import LatestProduct from "../Components/LatestProduct";
import SmallShopBanner from "../Components/SmallShopBanner";
import RecentlyViewed from "../Components/RecentlyViewed";
import SmallShopBanner2 from "../Components/SmallShopBanner2";
import DealDay from "../Components/DealDay";
import GiftFinder from "../Components/GiftFinder";
import LatestBlog from "../Components/LatestBlog";
import BrowseByBrand from "../Components/BrowseByBrand";
import Newsletter from "../Components/NewsLetter";
import PartnerDiscount from "../Components/PartnerDiscount";
import Footer from "../Components/Footer";
import Login from "../Components/Login";

class Home extends Component {
  render() {
    return (
      <div className="App">
       

        <MainBanner />
        <ShopByAge />
        <HotSellers />
        <ShopBanners />
        <ShopCategories />
        <OnlineEducation />
        <LatestProduct />
        <SmallShopBanner />
        <RecentlyViewed />
        <SmallShopBanner2 />
        <DealDay />
        <GiftFinder />
        <LatestBlog />
        <BrowseByBrand />
        <Newsletter />
        <PartnerDiscount />
      </div>
    );
  }
}

export default Home;
