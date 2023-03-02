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

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/market' element={<Market />} />
        <Route path='/newtransaction' element={<TransactionNew />} />
        <Route path='/transactionlist' element={<TransactionList />} />
        <Route path='/newfavourite' element={<FavouriteNew />} />
        <Route path='/favouritelist' element={<FavouriteList />} />
        <Route path='/graph' element={<Graph />} />
        <Route path='/login' element={<Login />} />
        <Route path='/newuser' element={<Newuser />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default Routing;