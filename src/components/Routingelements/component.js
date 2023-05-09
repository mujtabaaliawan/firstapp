import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../../pages/home/home";
import Market from '../../pages/market/market';
import TransactionNew from '../../pages/transaction/purchase/transactionnew';
import TransactionList from '../../pages/transaction/list/transactionlist';
import FavouriteNew from '../../pages/favourite/new/favouritenew';
import FavouriteList from '../../pages/favourite/list/favouritelist';
import Graph from '../../pages/graph/graph';
import Login from '../../pages/login/login';
import Newuser from '../../pages/main/newuser';
import Logout from '../../pages/logout/logout';
import Dashboard from "../../pages/dashboard/dashboard";
import Favourite from "../../pages/favourite/manager/favourite";
import Report from "../../pages/report/report";
import Followers from "../../pages/followers/followers";
import Following from "../../pages/following/following";
import Profile from "../../pages/profile/profile";
import TransactionSale from "../../pages/transaction/sale/transactionsale";
import PortFolio from "../../pages/portfolio/portfolio";
import Subscriptions from "../../pages/subscriptions/subscriptions";
import SubscriptionDetails from "../../pages/subscriptionDetails/subscriptionsdetails";
import PaymentCancel from "../../pages/subscriptions/paymentCancel";
import PaymentSuccess from "../../pages/subscriptions/paymentSuccess";
import CustomerPortal from "../../pages/customerPortal/customerPortal";
import EditProfile from "../../pages/profile/edit/edit";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Newuser />} />
        <Route path='/main' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile-edit' element={<EditProfile />} />
        <Route path='/portfolio' element={<PortFolio />} />
        <Route path='/explore' element={<Following />} />
        <Route path='/followers' element={<Followers />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/market' element={<Market />} />
        <Route path='/newtransaction' element={<TransactionNew />} />
        <Route path='/saletransaction' element={<TransactionSale />} />
        <Route path='/transactionlist' element={<TransactionList />} />
        <Route path='/newfavourite' element={<FavouriteNew />} />
        <Route path='/favouritelist' element={<FavouriteList />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/report' element={<Report />} />
        <Route path='/graph' element={<Graph />} />
        <Route path='/subscribe' element={<Subscriptions />} />
        <Route path='/portal' element={<CustomerPortal />} />
        <Route path='/cancel' element={<PaymentCancel />} />
        <Route path='/success' element={<PaymentSuccess />} />
        <Route path='/subscriptions' element={<SubscriptionDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default Routing;