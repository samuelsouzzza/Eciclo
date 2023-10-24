import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { NewAccount } from './pages/NewAccount/NewAccount';
import { Home } from './pages/Home/Home';
import { Page404 } from './pages/Page404/Page404';
import { ScreensContextProvider } from './global/ScreenStates.tsx';


function App() {
  return (
    <BrowserRouter>
      <ScreensContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='new_account' element={<NewAccount />} />
          <Route path='home' element={<Home />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </ScreensContextProvider>
    </BrowserRouter>
  );
}

export default App;
