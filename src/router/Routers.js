import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './../pages/Home'
import Recharge from './../pages/Recharge'
import Service from './../pages/Service'
import ServiceDetails from './../pages/ServiceDetails'
import AccountGame from './../pages/AccountGame'
import AccGameDetails from './../pages/AccGameDetails'
import Login from './../pages/Login'
import Register from './../pages/Register'
import AccountInfor from '../pages/AccountInfor'
import Transaction from '../pages/Transaction'
import SpinHistory from '../pages/SpinHistory'
import PurchasedAccount from '../pages/PurchasedAccount'
import RentalService from '../pages/RentalService'
import RechargeBank from '../pages/RechargeBank'
import NewBorn from '../pages/NewBorn'
import Midrange from '../pages/Midrange'
import ShopItems from '../pages/ShopItems'
import FreeFire from '../pages/FreeFire'
import ArenaOfValor from '../pages/ArenaOfValor'
import SpeedBattle from '../pages/SpeedBattle'
import MidrangeDetails from '../pages/MidrangeDetails'
import ShopItemDetails from '../pages/ShopItemDetails'
import SearchBar from '../shared/SearchBar'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/recharge' element={<Recharge />} />
        <Route path='/service' element={<Service />} />
        <Route path='/service-details/:id' element={<ServiceDetails />} />
        <Route path='/accounts' element={<AccountGame />} />
        <Route path='/accountsdetails/:id' element={<AccGameDetails />} />
        <Route path='/midrangedetails/:id' element={<MidrangeDetails />} />
        <Route path='/items/:id' element={<ShopItemDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/account-infor' element={<AccountInfor />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/spin-history' element={<SpinHistory />} />
        <Route path='/purchased-account' element={<PurchasedAccount />} />
        <Route path='/rental-service' element={<RentalService />} />
        <Route path='/recharge-bank' element={<RechargeBank />} />
        <Route path='/new-born' element={<NewBorn />} />
        <Route path='/midrange' element={<Midrange />} />
        <Route path='/midrange/search' element={<SearchBar />} />
        <Route path='/shop-items' element={<ShopItems />} />
        <Route path='/free-fire' element={<FreeFire />} />
        <Route path='/aog' element={<ArenaOfValor />} />
        <Route path='/speed-battle' element={<SpeedBattle />} />
    </Routes>

  )
}

export default Routers