import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../../pages/home";
import Market from '../../pages/market';
import TransactionNew from '../../pages/transactionnew';
import TransactionList from '../../pages/transactionlist';
import FavouriteNew from '../../pages/favouritenew';
import FavouriteList from '../../pages/favouritelist';
import Graph from '../../pages/graph';
import Login from '../../pages/login';
import Newuser from '../../pages/newuser';
import Logout from '../../pages/logout';
import Dashboard from "../../pages/dashboard";
import Favourite from "../../pages/favourite";
import Report from "../../pages/report";
import FavouriteCustom from "../../pages/customfavourite";
import TransactionCustom from "../../pages/customtransaction";
import Followers from "../../pages/followers";
import Following from "../../pages/following";
import Profile from "../../pages/profile";
import TransactionSale from "../../pages/transactionsale";
import PortFolio from "../../pages/portfolio";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/portfolio' element={<PortFolio />} />
        <Route path='/explore' element={<Following />} />
        <Route path='/followers' element={<Followers />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/market' element={<Market />} />
        <Route path='/newtransaction' element={<TransactionNew />} />
        <Route path='/saletransaction' element={<TransactionSale />} />
        <Route path='/custom-transaction' element={<TransactionCustom />} />
        <Route path='/transactionlist' element={<TransactionList />} />
        <Route path='/newfavourite' element={<FavouriteNew />} />
        <Route path='/custom-favourite' element={<FavouriteCustom />} />
        <Route path='/favouritelist' element={<FavouriteList />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/report' element={<Report />} />
        <Route path='/graph' element={<Graph />} />
        <Route path='/login' element={<Login />} />
        <Route path='/newuser' element={<Newuser />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default Routing;