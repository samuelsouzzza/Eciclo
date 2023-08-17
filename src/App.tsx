import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { NewAccount } from './components/NewAccount/NewAccount';
import { Home } from './components/Home/Home';
import { Page404 } from './components/Page404/Page404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='new_account' element={<NewAccount />} />
        <Route path='home' element={<Home />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
