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

import MainBanner from "../Components/Home/MainBanner";
import ShopBanners from "../Components/Home/ShopBanners";
import HotSellers from "../Components/Home/HotSellers";
import ShopByAge from "../Components/Home/ShopByAge";
import ShopCategories from "../Components/Home/ShopCategories";
import OnlineEducation from "../Components/Home/OnlineEducation";
import LatestProduct from "../Components/Home/LatestProduct";
import SmallShopBanner from "../Components/Home/SmallShopBanner";
import RecentlyViewed from "../Components/Home/RecentlyViewed";
import SmallShopBanner2 from "../Components/Home/SmallShopBanner2";
import DealDay from "../Components/Home/DealDay";
import GiftFinder from "../Components/Home/GiftFinder";
import LatestBlog from "../Components/Home/LatestBlog";
import BrowseByBrand from "../Components/Home/BrowseByBrand";
import Newsletter from "../Components/Home/NewsLetter";
import PartnerDiscount from "../Components/Home/PartnerDiscount";

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
