import React, { Component } from 'react'
import logo from '../logo.svg'

import '../App.css'
import Customers from '../Customers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import MainBanner from '../Components/Home/MainBanner'
import ShopBanners from '../Components/Home/ShopBanners'
import SaleBanners from '../Components/Home/SaleBanner'

import HotSellers from '../Components/Home/HotSellers'
import ShopByAge from '../Components/Home/ShopByAge'
import ShopCategories from '../Components/Home/ShopCategories'
import OnlineEducation from '../Components/Home/OnlineEducation'
import LatestProduct from '../Components/Home/LatestProduct'
import SmallShopBanner from '../Components/Home/SmallShopBanner'
import RecentlyViewed from '../Components/Home/RecentlyViewed'
import SmallShopBanner2 from '../Components/Home/SmallShopBanner2'
import DealDay from '../Components/Home/DealDay'
import GiftFinder from '../Components/Home/GiftFinder'
import LatestBlog from '../Components/Home/LatestBlog'
import BrowseByBrand from '../Components/Home/BrowseByBrand'
import Newsletter from '../Components/Home/NewsLetter'
import PartnerDiscount from '../Components/Home/PartnerDiscount'
import { api } from '../Helpers/services'
import axios from 'axios'

class Home extends Component {
  constructor() {
    super()
    let dashboard = (this.state = {})
  }

  componentDidMount() {
    axios.get(api.show, null).then((response) => {
      this.setState({ dashboard: response.data.data })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App">
          <MainBanner />
          {this.state.dashboard && (
            <ShopByAge data={this.state.dashboard.shop_by_age} />
          )}
          {this.state.dashboard && (
            <HotSellers data={this.state.dashboard.hot_products} />
          )}
          <ShopBanners />
          {this.state.dashboard && (
            <ShopCategories data={this.state.dashboard.shop_by_categories} />
          )}
          <OnlineEducation />
          {this.state.dashboard && (
            <LatestProduct data={this.state.dashboard.latest_products} />
          )}
          <SmallShopBanner />
          {this.state.dashboard && (
            <RecentlyViewed data={this.state.dashboard.recent_products} />
          )}
          <SmallShopBanner2 />
          {this.state.dashboard && (
            <DealDay data={this.state.dashboard.deal_products} />
          )}
          <SaleBanners />
          <GiftFinder />
          <LatestBlog />
          {this.state.dashboard && (
            <BrowseByBrand data={this.state.dashboard.shop_by_brands} />
          )}
          <Newsletter />
          {this.state.dashboard && (
            <PartnerDiscount data={this.state.dashboard.shop_by_partners} />
          )}
          {/* <PartnerDiscount  /> */}
        </div>
      </div>
    )
  }
}

export default Home
